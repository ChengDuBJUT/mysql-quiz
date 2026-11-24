# -*- coding: utf-8 -*-
"""ch07 自查：题量、配比、小节覆盖、知识点覆盖、选项/答案合法性。"""
import json
import os
from collections import Counter

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "source", "ch07.json")

with open(SRC, "r", encoding="utf-8") as f:
    data = json.load(f)

qs = data["questions"]
secs = data["sections"]
print("总题量:", len(qs))
print("题型分布:", dict(Counter(q["type"] for q in qs)))
n_s = sum(1 for q in qs if q["type"] == "single")
print("单选占比: %.1f%%  填空占比: %.1f%%" % (100.0 * n_s / len(qs), 100.0 * (len(qs) - n_s) / len(qs)))

ids = [q["id"] for q in qs]
print("id 唯一:", len(ids) == len(set(ids)))

# 答案/选项合法性
bad = []
for q in qs:
    if q["type"] == "single":
        if len(q["options"]) != 4:
            bad.append((q["id"], "选项数!=4"))
        if q["answer"] not in "ABCD" or len(q["answer"]) != 1:
            bad.append((q["id"], "答案非法"))
        for i, opt in enumerate(q["options"]):
            if not opt.startswith("ABCD"[i] + ". "):
                bad.append((q["id"], "选项前缀错:%s" % opt))
    else:
        if not isinstance(q["answer"], list) or not q["answer"]:
            bad.append((q["id"], "answer 非数组"))
        if q.get("answerText") != q["answer"][0]:
            bad.append((q["id"], "answerText 不匹配"))
        if "____" not in q["stem"]:
            bad.append((q["id"], "填空缺 ____"))
print("格式问题:", bad if bad else "无")


def prange(text):
    a, b = text.split("-")
    return int(a), int(b)


# 按 pageRange 归属小节
def sec_of(page):
    for st in secs:
        lo, hi = prange(st["pageRange"])
        if lo <= page <= hi:
            return st["id"]
    return None


cnt = Counter()
for q in qs:
    sid = sec_of(q["page"]) or "?"
    cnt[sid] += 1

print("\n各小节题量（需 >=4）:")
for st in secs:
    n = cnt[st["id"]]
    print("  %-4s %-28s %2d %s" % (st["id"], st["title"], n, "" if n >= 4 else "  <-- 不足"))

print("\n未归属小节的题:", [q["id"] for q in qs if sec_of(q["page"]) is None])

# 知识点覆盖：同小节内 |题page - 点page| <= 1
print("\n无题覆盖的知识点:")
miss = []
for st in secs:
    pages = [q["page"] for q in qs if sec_of(q["page"]) == st["id"]]
    for p in st["points"]:
        if not any(abs(pg - p["page"]) <= 1 for pg in pages):
            miss.append((st["id"], p["term"], p["page"]))
for m in miss:
    print("  ", m)
print("  合计", len(miss))

print("\n小节数:", len(secs), " 有题的小节数:", len([s for s in secs if cnt[s["id"]] > 0]))
print("知识点总数:", sum(len(s["points"]) for s in secs))
