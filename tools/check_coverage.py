# -*- coding: utf-8 -*-
"""检查题库覆盖度：每章题量、每小节题数、按 Slide 页码近似判断知识点覆盖。"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "source")


def parse_range(r):
    """'12-16' / '12' → (12,16)"""
    if not r:
        return None
    m = re.match(r"(\d+)\s*[-–~]\s*(\d+)", str(r))
    if m:
        return int(m.group(1)), int(m.group(2))
    m = re.match(r"(\d+)", str(r))
    if m:
        n = int(m.group(1))
        return n, n
    return None


def main():
    total_q = 0
    problems = []
    print("章 | 小节 | 知识点 | 题目 | 每节最少题 | 无题小节")
    print("---|---|---|---|---|---")
    for n in range(1, 8):
        p = os.path.join(SRC, "ch%02d.json" % n)
        d = json.load(open(p, encoding="utf-8-sig"))
        secs = d.get("sections", [])
        qs = d.get("questions", [])
        total_q += len(qs)
        per_sec = {}
        for q in qs:
            for s in secs:
                r = parse_range(s.get("pageRange"))
                if r and r[0] <= int(q.get("page", -1)) <= r[1]:
                    per_sec[s["id"]] = per_sec.get(s["id"], 0) + 1
                    break
        empty = [s["id"] for s in secs if per_sec.get(s["id"], 0) == 0]
        min_q = min(per_sec.get(s["id"], 0) for s in secs) if secs else 0
        pts = sum(len(s.get("points", [])) for s in secs)
        print("%d | %d | %d | %d | %d | %s" % (
            n, len(secs), pts, len(qs), min_q, ",".join(empty) if empty else "无"))
        if empty:
            problems.append("第%d章 无题小节: %s" % (n, ",".join(empty)))
    print("\n总题量: %d" % total_q)
    if problems:
        print("需补齐:")
        for x in problems:
            print("  - " + x)
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
