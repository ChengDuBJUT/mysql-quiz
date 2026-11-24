# -*- coding: utf-8 -*-
"""GitHub 直连被 reset 时的本地 CONNECT 隧道（按交接手册流程）。

用法：
  python tools/github_tunnel.py probe        # 探测可用 IP，写入 .git/github-ips.txt
  python tools/github_tunnel.py serve        # 起隧道 127.0.0.1:18777
"""
import json
import socket
import ssl
import subprocess
import sys
import threading
import time

HOST = 'github.com'
PORT = 443
LISTEN = ('127.0.0.1', 18777)
STATE = 'tools/.github-ips.json'

CANDIDATES = [
    '140.82.121.4', '140.82.112.3', '140.82.113.3', '140.82.114.3',
    '140.82.116.3', '140.82.117.3', '140.82.118.3', '140.82.119.3',
    '20.205.243.166', '20.27.177.113', '20.200.245.247', '192.30.255.112',
    '192.30.255.113', '140.82.121.3', '140.82.112.4',
]


def probe_ip(ip, timeout=3):
    t0 = time.time()
    try:
        ctx = ssl.create_default_context()
        with socket.create_connection((ip, PORT), timeout) as raw:
            with ctx.wrap_socket(raw, server_hostname=HOST) as tls:
                tls.sendall(b'GET / HTTP/1.1\r\nHost: github.com\r\nConnection: close\r\n\r\n')
                data = b''
                tls.settimeout(timeout)
                while len(data) < 64:
                    chunk = tls.recv(64)
                    if not chunk:
                        break
                    data += chunk
                if data.startswith(b'HTTP/1.1 200') or data.startswith(b'HTTP/1.1 301'):
                    return round(time.time() - t0, 2)
    except Exception:
        pass
    return None


def probe():
    print('探测 GitHub IP（并发，3s 超时）...')
    results = {}
    lock = threading.Lock()

    def worker(ip):
        r = probe_ip(ip)
        with lock:
            results[ip] = r
            print('  %-18s %s' % (ip, ('%.2fs' % r) if r else '×'))

    threads = [threading.Thread(target=worker, args=(ip,)) for ip in CANDIDATES]
    for t in threads: t.start()
    for t in threads: t.join()
    good = sorted([(r, ip) for ip, r in results.items() if r], key=lambda x: x[0])
    with open(STATE, 'w', encoding='utf-8') as f:
        json.dump({'updated': time.time(), 'ips': [ip for _, ip in good]}, f)
    print('可用 IP（按速度）:', [ip for _, ip in good])
    return [ip for _, ip in good]


def handle(conn, ip):
    """读 CONNECT 请求，回 200，然后双向转发。CONNECT 头绝不转发给上游。"""
    try:
        buf = b''
        while b'\r\n\r\n' not in buf:
            chunk = conn.recv(4096)
            if not chunk:
                conn.close(); return
            buf += chunk
            if len(buf) > 65536:
                conn.close(); return
        header, _, rest = buf.partition(b'\r\n\r\n')
        first = header.split(b'\r\n')[0].decode('ascii', 'ignore')
        if not first.startswith('CONNECT '):
            conn.close(); return
        # 先回 200（手册：CONNECT 头绝不转发给上游），再连上游
        conn.sendall(b'HTTP/1.1 200 Connection established\r\n\r\n')
        upstream = socket.create_connection((ip, PORT), 15)
        upstream.settimeout(15)
        if rest:
            upstream.sendall(rest)

        def pipe(src, dst):
            try:
                while True:
                    data = src.recv(65536)
                    if not data: break
                    dst.sendall(data)
            except Exception:
                pass
            try: dst.shutdown(socket.SHUT_WR)
            except Exception: pass

        t = threading.Thread(target=pipe, args=(upstream, conn), daemon=True)
        t.start()
        pipe(conn, upstream)
        t.join(5)
    except Exception as e:
        print('隧道错误:', e)
    finally:
        try: conn.close()
        except Exception: pass


def serve():
    try:
        ips = json.load(open(STATE, encoding='utf-8'))['ips']
    except Exception:
        ips = []
    if not ips:
        ips = probe()
    if not ips:
        print('没有可用 IP，退出'); sys.exit(1)
    idx = [0]
    lock = threading.Lock()

    def current_ip():
        with lock:
            return ips[idx[0] % len(ips)]

    def rotate():
        with lock:
            idx[0] += 1
            print('切换到 IP:', ips[idx[0] % len(ips)])
            return ips[idx[0] % len(ips)]

    srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    srv.bind(LISTEN); srv.listen(20)
    print('隧道就绪 http://127.0.0.1:%d，首选 %s' % (LISTEN[1], current_ip()))

    while True:
        conn, _ = srv.accept()
        threading.Thread(target=handle, args=(conn, current_ip()), daemon=True).start()


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'probe':
        probe()
    else:
        serve()
