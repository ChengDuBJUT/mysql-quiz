# -*- coding: utf-8 -*-
"""按期末考纲给各章小节打 exam 标记：
  core = 老师明确强调（复习 PPT 列出的点 / 编程题必考语句）
  keep = 配套保留（支撑概念、SQL 语法基础）
  off  = 未强调方向，构建时整节剔除（数据仍保留在源文件，随时可恢复）
用法：python tools/apply_scope.py            # 写入 chNN.json 的 sections[].exam
      python tools/apply_scope.py --report   # 只打印当前标记与题量
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "source")

# 章 -> {小节 id: 标记}
SCOPE = {
    1: {  # 概述：老师只强调 数据模型三要素 / 关系运算 / 概念模型(ER)
        "1.1": "off", "1.2": "off", "1.3": "off", "1.4": "off", "1.5": "off",
        "2.1": "keep", "2.2": "keep", "2.3": "keep", "2.4": "keep",
        "3.1": "core", "3.2": "core", "3.3": "core",
        "4.1": "off", "4.2": "off", "4.3": "off", "4.4": "off", "4.5": "off",
    },
    2: {  # 语言基础：强调 字符集层次设置 / 字符序 / 标识符；函数与运算符是实验一的地基
        "1.1": "core", "1.2": "keep", "1.3": "core", "1.4": "core", "1.5": "keep",
        "2.1": "keep", "2.2": "keep", "2.3": "keep", "2.4": "off",
        "3.1": "keep", "3.2": "keep", "3.3": "keep", "3.4": "keep", "3.5": "keep",
        "4.1": "keep", "4.2": "keep", "4.3": "keep", "4.4": "keep", "4.5": "keep",
    },
    3: {  # 库表操作：强调 存储引擎 / 建库(字符集) / 建表 / 改表 / 增删改 / 约束
        "1.1": "keep", "1.2": "core",
        "2.1": "keep", "2.2": "keep",
        "3.1": "core", "3.2": "keep",
        "4.1": "off", "4.2": "core", "4.3": "keep", "4.4": "core", "4.5": "keep", "4.6": "off",
        "5.1": "core", "5.2": "core", "5.3": "core",
        "6.1": "core", "6.2": "core", "6.3": "core", "6.4": "core", "6.5": "core",
    },
    4: {  # 数据检索：编程题大头，除窗口函数/CTE 外全留
        "1": "core",
        "2.1": "core", "2.2": "core", "2.3": "core", "2.4": "core",
        "3.1": "core", "3.2": "core", "3.3": "off",
        "4": "core", "4.1": "core", "4.2": "core", "4.3": "core", "4.4": "core", "4.5": "keep",
        "5": "core", "5.1": "core", "5.2": "core", "5.3": "core", "5.4": "core", "5.5": "off",
        "6": "keep",
    },
    5: {  # 索引和视图：整章强调
        "1.1": "core", "1.2": "keep", "1.3": "core", "1.4": "core", "1.5": "keep",
        "2.1": "core", "2.2": "keep", "2.3": "keep", "2.4": "keep",
        "3.1": "core", "3.2": "keep",
    },
    6: {  # 编程基础：强调 预处理 / 自定义函数；条件与循环是实验五的实现手段
        "1.1": "core", "1.2": "keep", "1.3": "keep", "1.4": "core", "1.5": "off",
        "2.1": "core", "2.2": "keep",
        "3.1": "core", "3.2": "core",
    },
    7: {  # 存储过程和触发器：整章强调（含游标、事件）
        "1.1": "core", "1.2": "core", "1.3": "keep", "1.4": "keep", "1.5": "core",
        "2.1": "core", "2.2": "core", "2.3": "core", "2.4": "core",
        "3.1": "core", "3.2": "core", "3.3": "core", "3.4": "keep",
        "4.1": "core", "4.2": "core", "4.3": "core",
    },
}


def page_range(rng):
    nums = re.findall(r"\d+", str(rng or ""))
    if not nums:
        return None
    a = int(nums[0])
    b = int(nums[1]) if len(nums) > 1 else a
    return (min(a, b), max(a, b))


def count_questions(ch):
    """按 page 把题归到小节，返回 {sec_id: n} 与孤儿题数。"""
    hits, orphan = {}, 0
    secs = ch.get("sections", [])
    for q in ch.get("questions", []):
        p = q.get("page")
        sec_id = None
        if isinstance(p, int):
            for s in secs:
                pr = page_range(s.get("pageRange"))
                if pr and pr[0] <= p <= pr[1]:
                    sec_id = s["id"]
                    break
        if sec_id:
            hits[sec_id] = hits.get(sec_id, 0) + 1
        else:
            orphan += 1
    return hits, orphan


def main():
    report_only = "--report" in sys.argv
    total_off = 0
    for n in range(1, 8):
        path = os.path.join(SRC, "ch%02d.json" % n)
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8-sig") as f:
            ch = json.load(f)
        scope = SCOPE.get(n, {})
        hits, orphan = count_questions(ch)
        off_q = 0
        for s in ch.get("sections", []):
            mark = scope.get(s["id"], "keep")
            if not report_only:
                s["exam"] = mark
            if mark == "off":
                off_q += hits.get(s["id"], 0)
        if not report_only:
            with open(path, "w", encoding="utf-8", newline="\n") as f:
                json.dump(ch, f, ensure_ascii=False, indent=2)
                f.write("\n")
        total_off += off_q
        total = len(ch.get("questions", []))
        print("ch%d %-16s 题 %3d | 剔除 %3d | 保留 %3d | 孤儿 %d%s" % (
            n, ch.get("title", ""), total, off_q, total - off_q, orphan,
            "  (仅报告)" if report_only else ""))
    print("合计剔除 %d 题" % total_off)


if __name__ == "__main__":
    main()
