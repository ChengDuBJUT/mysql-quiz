# -*- coding: utf-8 -*-
"""把 tools/source/chNN.json 合成前端加载的 data/review.js 与 data/questions.js。
数据脚本与前端解耦：data/*.js 是生成物，勿手改。
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "source")
DATA = os.path.join(ROOT, "data")

TITLES = {
    1: "MySQL数据库概述", 2: "MySQL8.0语言基础", 3: "数据库和表的基本操作",
    4: "数据检索", 5: "索引和视图", 6: "MySQL8.0编程基础", 7: "存储过程和触发器",
}


def page_range(rng):
    nums = re.findall(r"\d+", str(rng or ""))
    if not nums:
        return None
    a = int(nums[0])
    b = int(nums[1]) if len(nums) > 1 else a
    return (min(a, b), max(a, b))


def section_of(page, sections):
    """按课件页码把题落回小节，用于考纲过滤。落不进去返回 None（保守保留）。"""
    if not isinstance(page, int):
        return None
    for s in sections:
        pr = page_range(s.get("pageRange"))
        if pr and pr[0] <= page <= pr[1]:
            return s
    return None


def load_chapters():
    chapters, questions = [], []
    dropped = 0
    for n in range(1, 8):
        path = os.path.join(SRC, "ch%02d.json" % n)
        if not os.path.exists(path):
            print("缺少 %s，跳过" % path, file=sys.stderr)
            continue
        with open(path, encoding="utf-8-sig") as f:
            ch = json.load(f)
        ch["chapter"] = int(ch.get("chapter", n))
        ch["title"] = ch.get("title") or TITLES[ch["chapter"]]
        # 考纲过滤：exam=off 的小节整节剔除（知识点与题目一起下架）
        secs = ch.get("sections", [])
        kept_secs = [s for s in secs if s.get("exam") != "off"]
        off_ids = {s["id"] for s in secs if s.get("exam") == "off"}
        kept_qs = []
        for q in ch.get("questions", []):
            s = section_of(q.get("page"), secs)
            if s and s["id"] in off_ids:
                dropped += 1
                continue
            kept_qs.append(q)
        ch["sections"] = kept_secs
        ch["questions"] = kept_qs
        # 告诉前端哪些小节按考纲隐藏了，精读页显示一行说明更透明
        ch["hiddenSections"] = [{"id": s["id"], "title": s.get("title", "")} for s in secs if s.get("exam") == "off"]
        chapters.append(ch)
        for q in kept_qs:
            q = dict(q)
            q["chapter"] = ch["chapter"]
            q["chapterTitle"] = ch["title"]
            questions.append(q)
    if dropped:
        print("按考纲剔除 %d 题（未强调方向）" % dropped)
    return chapters, questions


def dump_js(path, varname, obj, header):
    body = json.dumps(obj, ensure_ascii=False, indent=2)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* %s */\nwindow.%s = %s;\n" % (header, varname, body))


def load_big():
    """考试大题（问答题 + 六个实验）：tools/source/exam_big.json"""
    path = os.path.join(SRC, "exam_big.json")
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8-sig") as f:
        return json.load(f)


def main():
    chapters, questions = load_chapters()
    if not chapters:
        print("没有任何章节数据，构建失败", file=sys.stderr)
        sys.exit(1)
    # id 唯一性校验
    ids = [q["id"] for q in questions]
    if len(ids) != len(set(ids)):
        dup = sorted({i for i in ids if ids.count(i) > 1})
        print("题目 id 重复：%s" % dup, file=sys.stderr)
        sys.exit(1)
    # 选项格式与答案合法性校验（对齐 python-quiz 的教训）
    import re
    for q in questions:
        if q["type"] == "single":
            opts = [o for o in q.get("options", []) if re.match(r"^[A-Za-z][.、．)]\s*\S", str(o).strip())]
            keys = [o[0].upper() for o in opts]
            if str(q.get("answer", "")).upper() not in keys:
                print("题目 %s 的答案 %s 不在有效选项 %s 中" % (q["id"], q.get("answer"), keys), file=sys.stderr)
            if len(opts) < 3:
                print("题目 %s 有效选项不足：%d" % (q["id"], len(opts)), file=sys.stderr)
        elif q["type"] == "blank":
            if not q.get("answer"):
                print("题目 %s 缺少答案" % q["id"], file=sys.stderr)
        else:
            print("题目 %s 未知题型 %s" % (q["id"], q["type"]), file=sys.stderr)

    os.makedirs(DATA, exist_ok=True)
    dump_js(os.path.join(DATA, "review.js"), "REVIEW_DATA", chapters,
            "自动生成，请勿手改。重建：python tools/build_review.py")
    dump_js(os.path.join(DATA, "questions.js"), "PPT_QUESTIONS", questions,
            "自动生成，请勿手改。重建：python tools/build_review.py")
    print("构建完成：%d 章，%d 题" % (len(chapters), len(questions)))
    for ch in chapters:
        print("  第%2d章 %-14s 小节 %d / 题 %d" % (
            ch["chapter"], ch["title"], len(ch.get("sections", [])), len(ch.get("questions", []))))

    big = load_big()
    if big:
        # 考纲自查表：按关键词统计题库里每个强调点有多少题，避免「说了覆盖其实没有」
        for row in big.get("syllabus", []):
            pat = re.compile(row.get("kw", "$^"), re.I)
            row["hits"] = sum(
                1 for q in questions
                if pat.search(" ".join([
                    str(q.get("stem", "")), " ".join(q.get("options") or []),
                    str(q.get("analysis", "")),
                ]))
            )
        # 大题 id 唯一性校验
        ids = [it["id"] for g in big.get("groups", []) for it in g.get("items", [])]
        if len(ids) != len(set(ids)):
            print("大题 id 重复：%s" % sorted({i for i in ids if ids.count(i) > 1}), file=sys.stderr)
            sys.exit(1)
        dump_js(os.path.join(DATA, "labs.js"), "EXAM_BIG", big,
                "自动生成，请勿手改。来源 tools/source/exam_big.json")
        for g in big["groups"]:
            print("  大题组 %-6s %-30s 题 %d" % (g["id"], g["title"], len(g["items"])))
        print("大题合计 %d 题" % len(ids))


if __name__ == "__main__":
    main()
