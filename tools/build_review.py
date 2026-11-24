# -*- coding: utf-8 -*-
"""把 tools/source/chNN.json 合成前端加载的 data/review.js 与 data/questions.js。
数据脚本与前端解耦：data/*.js 是生成物，勿手改。
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "source")
DATA = os.path.join(ROOT, "data")

TITLES = {
    1: "MySQL数据库概述", 2: "MySQL8.0语言基础", 3: "数据库和表的基本操作",
    4: "数据检索", 5: "索引和视图", 6: "MySQL8.0编程基础", 7: "存储过程和触发器",
}


def load_chapters():
    chapters, questions = [], []
    for n in range(1, 8):
        path = os.path.join(SRC, "ch%02d.json" % n)
        if not os.path.exists(path):
            print("缺少 %s，跳过" % path, file=sys.stderr)
            continue
        with open(path, encoding="utf-8-sig") as f:
            ch = json.load(f)
        ch["chapter"] = int(ch.get("chapter", n))
        ch["title"] = ch.get("title") or TITLES[ch["chapter"]]
        chapters.append(ch)
        for q in ch.get("questions", []):
            q = dict(q)
            q["chapter"] = ch["chapter"]
            q["chapterTitle"] = ch["title"]
            questions.append(q)
    return chapters, questions


def dump_js(path, varname, obj, header):
    body = json.dumps(obj, ensure_ascii=False, indent=2)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* %s */\nwindow.%s = %s;\n" % (header, varname, body))


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


if __name__ == "__main__":
    main()
