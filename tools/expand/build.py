# -*- coding: utf-8 -*-
"""把扩题追加到 ch01.json，并做完整自查。"""
import json
import os
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, "source", "ch01.json")

sys.path.insert(0, HERE)
from _q1 import QUESTIONS as Q1  # noqa: E402
from _q2 import QUESTIONS as Q2  # noqa: E402
from _q3 import QUESTIONS as Q3  # noqa: E402

NEW = Q1 + Q2 + Q3

# 原 14 题对应的知识点（用于覆盖度自查）
EXISTING_POINTS = {
    "ch1-ppt-s01": ["MySQL"],
    "ch1-ppt-s02": ["MySQL 8.0.0"],
    "ch1-ppt-s03": ["多语言支持"],
    "ch1-ppt-s04": ["DDL"],
    "ch1-ppt-s05": ["DBMS"],
    "ch1-ppt-s06": ["选择", "投影", "连接"],
    "ch1-ppt-s07": ["E-R图表示"],
    "ch1-ppt-s08": ["第一范式1NF"],
    "ch1-ppt-b01": ["MySQL"],
    "ch1-ppt-b02": ["数据库(DB)"],
    "ch1-ppt-b03": ["DDL"],
    "ch1-ppt-b04": ["四大组件"],
    "ch1-ppt-b05": ["E-R图表示"],
    "ch1-ppt-b06": ["第一范式1NF"],
}


def rebalance_singles(new_questions, existing_questions):
    """轮换选项顺序，使正确答案字母分布均匀（不改变题意）。"""
    counts = Counter(q["answer"] for q in existing_questions if q["type"] == "single")
    for letter in "ABCD":
        counts.setdefault(letter, 0)
    for q in new_questions:
        if q["type"] != "single":
            continue
        bodies = [o[3:] for o in q["options"]]
        ai = ord(q["answer"]) - 65
        best = None
        for k in range(4):
            letter = chr(65 + (ai + k) % 4)
            key = (counts[letter], k)
            if best is None or key < best[0]:
                best = (key, k, letter)
        _, k, letter = best
        rotated = [bodies[(i - k) % 4] for i in range(4)]
        q["options"] = [chr(65 + i) + ". " + rotated[i] for i in range(4)]
        q["answer"] = letter
        counts[letter] += 1
    return new_questions


def section_of(page, sections):
    for sec in sections:
        lo, _, hi = sec["pageRange"].partition("-")
        lo = int(lo)
        hi = int(hi or lo)
        if lo <= page <= hi:
            return sec["id"]
    return None


def main():
    with open(SRC, "r", encoding="utf-8") as f:
        data = json.load(f)

    new_ids = {q["id"] for q in NEW}
    assert len(new_ids) == len(NEW), "新题 id 重复"

    # 幂等：先移除上次追加的新题，只保留原题
    base_questions = [q for q in data["questions"] if q["id"] not in new_ids]
    before = len(base_questions)
    base_ids = [q["id"] for q in base_questions]
    assert before == 14, "原题数量异常: %d" % before
    assert not (set(base_ids) & new_ids), "id 与原题冲突"

    cleaned = []
    for q in rebalance_singles([dict(q) for q in NEW], base_questions):
        q.pop("_points", None)
        cleaned.append(q)

    data["questions"] = base_questions + cleaned

    with open(SRC, "w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    # ---------- 重新读盘自查 ----------
    with open(SRC, "r", encoding="utf-8") as f:
        data = json.load(f)

    qs = data["questions"]
    sections = data["sections"]
    errs = []

    # 新题 _points 从 NEW 里取（写入时已剥离）
    points_map = dict(EXISTING_POINTS)
    for q in NEW:
        points_map[q["id"]] = q["_points"]

    for q in qs:
        if q["type"] == "single":
            if len(q["options"]) != 4:
                errs.append("%s 选项数 != 4" % q["id"])
            for i, tag in enumerate("ABCD"):
                if not q["options"][i].startswith(tag + ". "):
                    errs.append("%s 选项前缀错: %r" % (q["id"], q["options"][i][:8]))
            if q["answer"] not in "ABCD":
                errs.append("%s 答案不在 ABCD" % q["id"])
        elif q["type"] == "blank":
            if not isinstance(q["answer"], list) or not q["answer"]:
                errs.append("%s answer 非数组" % q["id"])
            if q["answerText"] != q["answer"][0]:
                errs.append("%s answerText 与首项不一致" % q["id"])
            if "____" not in q["stem"]:
                errs.append("%s 题干缺少 ____" % q["id"])
        else:
            errs.append("%s 未知题型 %s" % (q["id"], q["type"]))

    # 覆盖度
    sec_qcount = Counter()
    sec_terms = {}
    for q in qs:
        sid = section_of(q["page"], sections)
        if sid is None:
            errs.append("%s 的 page=%s 不属于任何 section" % (q["id"], q["page"]))
            continue
        sec_qcount[sid] += 1
        for term in points_map.get(q["id"], []):
            sec_terms.setdefault(sid, set()).add(term)

    all_terms = {(s["id"], p["term"]) for s in sections for p in s["points"]}
    valid_terms = all_terms
    covered = set()
    for sid, terms in sec_terms.items():
        for t in terms:
            if (sid, t) in valid_terms:
                covered.add((sid, t))
            else:
                errs.append("section %s 无此知识点: %r" % (sid, t))

    uncovered = sorted(all_terms - covered)
    thin = [(s["id"], sec_qcount[s["id"]]) for s in sections if sec_qcount[s["id"]] < 4]

    n_single = sum(1 for q in qs if q["type"] == "single")
    n_blank = sum(1 for q in qs if q["type"] == "blank")

    print("总题量: %d (原 %d + 新 %d)" % (len(qs), before, len(NEW)))
    print("单选: %d  填空: %d  单选占比: %.1f%%" % (n_single, n_blank, 100.0 * n_single / len(qs)))
    print("有题覆盖的 section: %d/%d" % (sum(1 for s in sections if sec_qcount[s["id"]] > 0), len(sections)))
    print("每节题量:")
    for s in sections:
        print("  %-4s %-24s %3d 题  知识点 %d 个" % (s["id"], s["title"][:22], sec_qcount[s["id"]], len(s["points"])))
    print("知识点覆盖: %d/%d" % (len(covered), len(all_terms)))
    print("不足4题的 section: %s" % (thin if thin else "无"))
    print("未覆盖知识点: %s" % (uncovered if uncovered else "无"))
    print("校验错误: %s" % (errs if errs else "无"))
    print("ID 范围: 单选 %s..%s, 填空 %s..%s" % (
        [q["id"] for q in qs if q["type"] == "single"][0],
        [q["id"] for q in qs if q["type"] == "single"][-1],
        [q["id"] for q in qs if q["type"] == "blank"][0],
        [q["id"] for q in qs if q["type"] == "blank"][-1],
    ))


if __name__ == "__main__":
    main()
