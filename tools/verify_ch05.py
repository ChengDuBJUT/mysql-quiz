# -*- coding: utf-8 -*-
import json, io, os, re, sys

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "source", "ch05.json")
raw = open(SRC, "rb").read()
print("BOM:", raw[:3] == b"\xef\xbb\xbf")
data = json.loads(raw.decode("utf-8"))
qs = data["questions"]
s = [q for q in qs if q["type"] == "single"]
b = [q for q in qs if q["type"] == "blank"]
print("总题量 %d | 单选 %d (%.0f%%) | 填空 %d (%.0f%%)" % (len(qs), len(s), 100.0*len(s)/len(qs), len(b), 100.0*len(b)/len(qs)))

# id 连续性
def seq(lst, unit):
    nums = sorted(int(q["id"].split(unit)[1]) for q in lst)
    assert nums == list(range(1, len(nums)+1)), (unit, nums)
seq(s, "-s"); seq(b, "-b")
assert len({q["id"] for q in qs}) == len(qs)
for q in qs:
    if q["type"] == "single":
        assert len(q["options"]) == 4 and q["answer"] in "ABCD"
        for i, letter in enumerate("ABCD"):
            assert q["options"][i].startswith(letter + ". "), q["id"]
print("id 连续且唯一，单选选项格式正确")

# section 覆盖：按 page 落入 pageRange
def pr(r):
    a, bb = r.split("-"); return int(a), int(bb)
sec = {}
for st in data["sections"]:
    lo, hi = pr(st["pageRange"])
    sec[st["id"]] = [q["id"] for q in qs if lo <= q["page"] <= hi]
print("\n各 section 题数：")
bad = []
for st in data["sections"]:
    n = len(sec[st["id"]])
    flag = "" if n >= 4 else "  <-- 不足"
    if n < 4: bad.append(st["id"])
    print("  %s %-22s %d%s" % (st["id"], st["title"], n, flag))
print("有题 section: %d/%d" % (sum(1 for v in sec.values() if v), len(sec)))

# 知识点覆盖（人工映射）
cover = {
"索引的定义":"s08","索引的本质":"s01","表的存储组成":"s09","索引的自动管理":"b06","查询优化器":"b07","索引的优点":"b01",
"索引类型概览":"s10","普通索引":"s11","主键索引":"s02","唯一性索引":"s02","全文索引":"s03","空间索引":"s12,b08",
"单列索引与复合索引":"s13,b09","Hash索引":"s04,b02",
"限制索引数目":"s14","按更新与查询比例":"s15","常排序分组字段":"s16","避免大量重复值字段":"s17","主键上创建索引":"b11","索引键长度限制":"b10",
"三种创建方式":"s18","create index语法":"b03","前缀索引":"s19","前缀索引优点":"s20","查看索引":"b04","创建索引说明":"s21,b13","唯一索引注意":"s22",
"drop index语法":"s23","alter table删除索引":"s24","删除主键索引":"s05","drop index适用范围":"b14",
"视图的定义":"s06,b05","视图的优点":"s25","创建视图的权限":"s26","创建视图语法":"s27","创建视图的限制":"s28,b15","视图建立的基础":"s29",
"查看视图的权限":"s30","查看视图的方法":"s31","describe语句":"s32","show table status":"s31","show create view":"s33","views表":"b16",
"修改视图的概念":"s34","create or replace view":"s35","alter view语法":"s36,b17","修改视图示例":"s36",
"删除视图的概念":"s37","drop view权限与多视图":"s38,s39","drop view语法":"b18",
"视图应用内容":"s40","视图查询":"s41","视图统计计算":"s42","视图修改基表":"s43,b19","单表视图可更新":"s44","多表视图限制":"s45","不可修改的视图":"b20",
"普通视图与检查视图":"s46","with check option":"s07,b22","检查视图示例":"s47","检查失败":"b21",
}
ids = {q["id"] for q in qs}
missing_pt, badref = [], []
total_pt = 0
for st in data["sections"]:
    for p in st["points"]:
        total_pt += 1
        t = p["term"]
        if t not in cover:
            missing_pt.append(st["id"] + " " + t)
        else:
            for x in cover[t].replace("s", "ch5-ppt-s").replace("b", "ch5-ppt-b").split(","):
                if x not in ids: badref.append((t, x))
print("\n知识点总数: %d | 映射条目: %d" % (total_pt, len(cover)))
print("无题覆盖的知识点:", missing_pt if missing_pt else "无")
print("映射指向不存在的 id:", badref if badref else "无")
print("\n结论:", "全部通过" if not bad and not missing_pt and not badref else "存在问题")
