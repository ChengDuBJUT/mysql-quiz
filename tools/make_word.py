# -*- coding: utf-8 -*-
"""把 tools/source/ch*.json 的题目导出为 Word 题库（题目 + 答案 + 解析）。

用法：
    python tools/make_word.py [输出路径]
默认输出：E:/mysql/MySQL数据库复习题库_682题.docx
"""
from __future__ import annotations

import glob
import io
import json
import os
import re
import sys

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT, WD_TAB_LEADER
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "source")
DEFAULT_OUT = r"E:/mysql/MySQL数据库复习题库_682题.docx"

INK = RGBColor(0x1A, 0x1A, 0x1A)
ACCENT = RGBColor(0x1F, 0x4E, 0x79)   # 深蓝：答案
GREY = RGBColor(0x59, 0x59, 0x59)     # 解析
LIGHT = RGBColor(0x7F, 0x7F, 0x7F)
RULE = RGBColor(0xBF, 0xBF, 0xBF)

CN_BODY = "宋体"
CN_HEAD = "微软雅黑"
EN_BODY = "Times New Roman"


def set_font(run, size=10.5, bold=False, color=INK, cn=CN_BODY, en=EN_BODY, italic=False):
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = color
    run.font.name = en
    rpr = run._element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = OxmlElement("w:rFonts")
        rpr.append(rfonts)
    rfonts.set(qn("w:ascii"), en)
    rfonts.set(qn("w:hAnsi"), en)
    rfonts.set(qn("w:eastAsia"), cn)


def para(doc, text="", size=10.5, bold=False, color=INK, cn=CN_BODY, en=EN_BODY,
         before=0, after=0, line=1.2, indent=0.0, align=None):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing = line
    pf.left_indent = Cm(indent)
    pf.first_line_indent = Cm(0)
    pf.widow_control = False
    if align is not None:
        p.alignment = align
    if text:
        r = p.add_run(text)
        set_font(r, size=size, bold=bold, color=color, cn=cn, en=en)
    return p


def hr(doc, color=RULE, size=6, space_before=4, space_after=8):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), str(size))
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "%02X%02X%02X" % (color[0], color[1], color[2]))
    pbdr.append(bottom)
    pPr.append(pbdr)
    return p


def outline(p, level=0):
    pPr = p._p.get_or_add_pPr()
    ol = OxmlElement("w:outlineLvl")
    ol.set(qn("w:val"), str(level))
    pPr.append(ol)


def page_field(paragraph, prefix="", suffix=""):
    if prefix:
        r = paragraph.add_run(prefix)
        set_font(r, size=9, color=LIGHT)
    r = paragraph.add_run()
    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), "PAGE")
    t = OxmlElement("w:t")
    t.text = "1"
    r_el = OxmlElement("w:r")
    r_el.append(t)
    fld.append(r_el)
    r._element.addnext(fld)
    if suffix:
        # 页码域之后补一个 run（放在 fld 之后）
        tail = OxmlElement("w:r")
        rpr = OxmlElement("w:rPr")
        sz = OxmlElement("w:sz")
        sz.set(qn("w:val"), "18")
        rpr.append(sz)
        color = OxmlElement("w:color")
        color.set(qn("w:val"), "7F7F7F")
        rpr.append(color)
        tail.append(rpr)
        t2 = OxmlElement("w:t")
        t2.text = suffix
        t2.set(qn("xml:space"), "preserve")
        tail.append(t2)
        fld.addnext(tail)


def shade(cell, hex_fill):
    tcPr = cell._tc.get_or_add_tcPr()
    sh = OxmlElement("w:shd")
    sh.set(qn("w:val"), "clear")
    sh.set(qn("w:color"), "auto")
    sh.set(qn("w:fill"), hex_fill)
    tcPr.append(sh)


def cell_text(cell, text, bold=False, size=9, color=INK, align=WD_ALIGN_PARAGRAPH.CENTER):
    cell.text = ""
    p = cell.paragraphs[0]
    p.alignment = align
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run(text)
    set_font(r, size=size, bold=bold, color=color)


def set_col_widths(table, widths):
    """强制固定列宽（python-docx 单设 cell.width 会被 Word 自动布局覆盖）。"""
    table.autofit = False
    tbl = table._tbl
    tblPr = tbl.tblPr
    layout = OxmlElement("w:tblLayout")
    layout.set(qn("w:type"), "fixed")
    tblPr.append(layout)
    total = OxmlElement("w:tblW")
    total.set(qn("w:type"), "dxa")
    total.set(qn("w:w"), str(int(sum(widths) * 567)))
    tblPr.append(total)
    grid = tbl.find(qn("w:tblGrid"))
    if grid is not None:
        cols = grid.findall(qn("w:gridCol"))
        for i, gc in enumerate(cols):
            if i < len(widths):
                gc.set(qn("w:w"), str(int(widths[i] * 567)))
    for row in table.rows:
        for i, w in enumerate(widths):
            row.cells[i].width = Cm(w)


def visual_width(s):
    return sum(2 if ord(c) > 127 else 1 for c in s)


def load_chapters():
    chapters = []
    for path in sorted(glob.glob(os.path.join(SRC, "ch[0-9][0-9].json"))):
        with io.open(path, encoding="utf-8-sig") as f:
            chapters.append(json.load(f))
    chapters.sort(key=lambda d: d["chapter"])
    return chapters


def build(out_path):
    chapters = load_chapters()
    total = sum(len(c["questions"]) for c in chapters)
    total_sec = sum(len(c.get("sections", [])) for c in chapters)
    total_pt = sum(len(s.get("points", [])) for c in chapters for s in c.get("sections", []))
    total_single = sum(1 for c in chapters for q in c["questions"] if q["type"] == "single")
    total_blank = total - total_single

    doc = Document()

    # ---------- 基础样式 ----------
    normal = doc.styles["Normal"]
    normal.font.name = EN_BODY
    normal.font.size = Pt(10.5)
    normal.element.rPr.rFonts.set(qn("w:eastAsia"), CN_BODY)

    sec = doc.sections[0]
    sec.page_width = Cm(21.0)
    sec.page_height = Cm(29.7)
    sec.top_margin = Cm(2.1)
    sec.bottom_margin = Cm(2.0)
    sec.left_margin = Cm(2.3)
    sec.right_margin = Cm(2.3)
    sec.header_distance = Cm(1.2)
    sec.footer_distance = Cm(1.2)
    sec.different_first_page_header_footer = True

    # 页眉
    hp = sec.header.paragraphs[0]
    hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    hr_run = hp.add_run("MySQL 数据库技术与应用 · 课件自测题库")
    set_font(hr_run, size=8.5, color=LIGHT)
    hp.paragraph_format.space_after = Pt(2)
    pPr = hp._p.get_or_add_pPr()
    pbdr = OxmlElement("w:pBdr")
    bot = OxmlElement("w:bottom")
    bot.set(qn("w:val"), "single")
    bot.set(qn("w:sz"), "4")
    bot.set(qn("w:space"), "2")
    bot.set(qn("w:color"), "D9D9D9")
    pbdr.append(bot)
    pPr.append(pbdr)

    # 页脚页码
    fp = sec.footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    page_field(fp, "— ", " —")

    # ---------- 封面 ----------
    para(doc, "", before=110)
    p = para(doc, "MySQL 数据库技术与应用", size=26, bold=True, color=ACCENT,
             cn=CN_HEAD, align=WD_ALIGN_PARAGRAPH.CENTER, line=1.4)
    p = para(doc, "课件自测题库", size=26, bold=True, color=ACCENT,
             cn=CN_HEAD, align=WD_ALIGN_PARAGRAPH.CENTER, line=1.4, after=6)
    hr(doc, color=ACCENT, size=10, space_before=6, space_after=14)
    para(doc, "题目 · 答案 · 解析", size=13, color=GREY, cn=CN_HEAD,
         align=WD_ALIGN_PARAGRAPH.CENTER, after=4)
    para(doc, "（依据课程配套课件第 1–7 章编排，每题标注幻灯片出处）", size=10,
         color=GREY, align=WD_ALIGN_PARAGRAPH.CENTER, after=44)

    para(doc, "共 %d 题　·　%d 章　·　%d 个小节　·　%d 个知识点" %
         (total, len(chapters), total_sec, total_pt),
         size=12, color=INK, cn=CN_HEAD, align=WD_ALIGN_PARAGRAPH.CENTER, after=6)
    para(doc, "单项选择题 %d 道　·　填空题 %d 道" % (total_single, total_blank),
         size=10.5, color=GREY, align=WD_ALIGN_PARAGRAPH.CENTER, after=0)
    para(doc, "", before=60)
    hr(doc, color=RULE, size=4, space_before=0, space_after=6)
    para(doc, "2026 年 11 月", size=9.5, color=LIGHT,
         align=WD_ALIGN_PARAGRAPH.CENTER, after=0)

    # ---------- 使用说明 ----------
    doc.add_page_break()
    para(doc, "使用说明", size=16, bold=True, color=ACCENT, cn=CN_HEAD, after=4)
    hr(doc, color=ACCENT, size=8, space_before=0, space_after=10)
    notes = [
        ("来源", "全部题目依据课程配套课件（第 1–7 章）原文编写，解析末标注对应的幻灯片页码，可回查原课件核对。"),
        ("编排", "按章分节，每章先单项选择题、后填空题，题号在章内连续。"),
        ("答案", "每题下方紧跟【答案】与【解析】。只想做题时，可用纸张遮住答案行往下推。"),
        ("建议", "先按章刷题 → 标记错题 → 回课件核对解析中的页码 → 二轮只做错题。"),
    ]
    for k, v in notes:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(4)
        p.paragraph_format.space_after = Pt(2)
        p.paragraph_format.line_spacing = 1.35
        p.paragraph_format.left_indent = Cm(0.9)
        p.paragraph_format.first_line_indent = Cm(-0.9)
        r1 = p.add_run("· " + k + "　")
        set_font(r1, size=10.5, bold=True, color=ACCENT, cn=CN_HEAD)
        r2 = p.add_run(v)
        set_font(r2, size=10.5, color=INK)

    # 统计表
    para(doc, "", before=10)
    para(doc, "题量分布", size=11, bold=True, color=INK, cn=CN_HEAD, after=4)
    headers = ["章", "章节标题", "小节", "知识点", "单选", "填空", "合计"]
    widths = [2.0, 5.9, 1.5, 1.8, 1.5, 1.5, 1.6]
    table = doc.add_table(rows=1, cols=len(headers))
    table.style = "Table Grid"
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    for i, h in enumerate(headers):
        cell = table.rows[0].cells[i]
        shade(cell, "1F4E79")
        cell_text(cell, h, bold=True, size=9, color=RGBColor(0xFF, 0xFF, 0xFF))
    for c in chapters:
        qs = c["questions"]
        s_n = sum(1 for q in qs if q["type"] == "single")
        b_n = len(qs) - s_n
        pts = sum(len(x.get("points", [])) for x in c.get("sections", []))
        row = table.add_row()
        vals = ["第%d章" % c["chapter"], c["title"], str(len(c.get("sections", []))),
                str(pts), str(s_n), str(b_n), str(len(qs))]
        for i, v in enumerate(vals):
            cell_text(cell=row.cells[i], text=v, size=9,
                      align=WD_ALIGN_PARAGRAPH.LEFT if i == 1 else WD_ALIGN_PARAGRAPH.CENTER)
    row = table.add_row()
    vals = ["", "合计", str(total_sec), str(total_pt), str(total_single), str(total_blank), str(total)]
    for i, v in enumerate(vals):
        shade(row.cells[i], "EDF2F7")
        cell_text(cell=row.cells[i], text=v, size=9, bold=True,
                  align=WD_ALIGN_PARAGRAPH.LEFT if i == 1 else WD_ALIGN_PARAGRAPH.CENTER)
    set_col_widths(table, widths)

    # ---------- 目录 ----------
    doc.add_page_break()
    para(doc, "目　录", size=16, bold=True, color=ACCENT, cn=CN_HEAD, after=4)
    hr(doc, color=ACCENT, size=8, space_before=0, space_after=6)
    para(doc, "在 Word 中按 Ctrl+F 可搜索关键词；用「视图 → 导航窗格」可直接跳转到任意章节。",
         size=9, color=LIGHT, after=10)
    for c in chapters:
        qs = c["questions"]
        s_n = sum(1 for q in qs if q["type"] == "single")
        b_n = len(qs) - s_n
        p = doc.add_paragraph()
        pf = p.paragraph_format
        pf.space_before = Pt(6)
        pf.space_after = Pt(2)
        pf.line_spacing = 1.3
        pf.left_indent = Cm(0.6)
        pf.tab_stops.add_tab_stop(Cm(14.6), WD_TAB_ALIGNMENT.RIGHT, WD_TAB_LEADER.DOTS)
        r = p.add_run("第%d章　%s" % (c["chapter"], c["title"]))
        set_font(r, size=11.5, bold=True, color=INK, cn=CN_HEAD)
        r2 = p.add_run("\t单选 %d · 填空 %d（共 %d 题）" % (s_n, b_n, len(qs)))
        set_font(r2, size=9.5, color=GREY)

    # ---------- 正文 ----------
    for c in chapters:
        doc.add_page_break()
        # 章标题
        p = para(doc, "第 %d 章　%s" % (c["chapter"], c["title"]), size=19, bold=True,
                 color=ACCENT, cn=CN_HEAD, before=0, after=2, line=1.3)
        outline(p, 0)
        qs = c["questions"]
        s_n = sum(1 for q in qs if q["type"] == "single")
        b_n = len(qs) - s_n
        para(doc, "共 %d 题（单选 %d · 填空 %d）　|　%d 个小节　|　%d 个知识点" %
             (len(qs), s_n, b_n, len(c.get("sections", [])),
              sum(len(x.get("points", [])) for x in c.get("sections", []))),
             size=9, color=GREY, after=2)
        hr(doc, color=ACCENT, size=8, space_before=0, space_after=10)

        for qtype, label in (("single", "一、单项选择题"), ("blank", "二、填空题")):
            group = [q for q in qs if q["type"] == qtype]
            if not group:
                continue
            p = para(doc, label, size=13, bold=True, color=INK, cn=CN_HEAD,
                     before=10, after=4)
            outline(p, 1)
            hr(doc, color=RULE, size=4, space_before=0, space_after=6)

            for idx, q in enumerate(group, 1):
                # 题干
                p = doc.add_paragraph()
                pf = p.paragraph_format
                pf.space_before = Pt(7)
                pf.space_after = Pt(2)
                pf.line_spacing = 1.32
                pf.left_indent = Cm(0.75)
                pf.first_line_indent = Cm(-0.75)
                pf.keep_together = True
                pf.keep_with_next = True
                r = p.add_run("%d. " % idx)
                set_font(r, size=10.5, bold=True, color=INK)
                r = p.add_run(q["stem"].strip())
                set_font(r, size=10.5, color=INK)

                # 选项：短选项两列，长选项单列
                opts = q.get("options") or []
                if opts:
                    if len(opts) == 4 and all(visual_width(o) <= 40 for o in opts):
                        for i in range(0, 4, 2):
                            pp = doc.add_paragraph()
                            pf = pp.paragraph_format
                            pf.space_before = Pt(0)
                            pf.space_after = Pt(0)
                            pf.line_spacing = 1.25
                            pf.left_indent = Cm(0.78)
                            pf.tab_stops.add_tab_stop(Cm(8.0))
                            pf.keep_together = True
                            pf.keep_with_next = True
                            r = pp.add_run(opts[i] + "\t" + opts[i + 1])
                            set_font(r, size=10.5, color=INK)
                    else:
                        for o in opts:
                            pp = doc.add_paragraph()
                            pf = pp.paragraph_format
                            pf.space_before = Pt(0)
                            pf.space_after = Pt(0)
                            pf.line_spacing = 1.25
                            pf.left_indent = Cm(0.78)
                            pf.keep_together = True
                            pf.keep_with_next = True
                            r = pp.add_run(o)
                            set_font(r, size=10.5, color=INK)

                # 答案
                if qtype == "single":
                    ans = str(q.get("answer", "")).strip()
                else:
                    ans = str(q.get("answerText") or (q.get("answer") or [""])[0]).strip()
                pp = doc.add_paragraph()
                pf = pp.paragraph_format
                pf.space_before = Pt(3)
                pf.space_after = Pt(0)
                pf.line_spacing = 1.22
                pf.left_indent = Cm(1.0)
                pf.first_line_indent = Cm(-0.36)
                pf.keep_together = True
                pf.keep_with_next = True
                r = pp.add_run("【答案】")
                set_font(r, size=9.5, bold=True, color=ACCENT, cn=CN_HEAD)
                r = pp.add_run(ans)
                set_font(r, size=9.5, bold=True, color=ACCENT)

                # 解析（去掉数据里原有的「解析：」前缀，避免与标签重复）
                ana = (q.get("analysis") or "").strip()
                ana = re.sub(r"^(【?解析】?|分析)\s*[:：]\s*", "", ana)
                if ana:
                    pp = doc.add_paragraph()
                    pf = pp.paragraph_format
                    pf.space_before = Pt(0)
                    pf.space_after = Pt(0)
                    pf.line_spacing = 1.22
                    pf.left_indent = Cm(1.0)
                    pf.first_line_indent = Cm(-0.36)
                    pf.keep_together = True
                    r = pp.add_run("【解析】")
                    set_font(r, size=9, bold=True, color=GREY, cn=CN_HEAD)
                    r = pp.add_run(ana)
                    set_font(r, size=9, color=GREY)

    # ---------- 结尾 ----------
    doc.add_page_break()
    para(doc, "复习节奏建议", size=15, bold=True, color=ACCENT, cn=CN_HEAD, after=4)
    hr(doc, color=ACCENT, size=8, space_before=0, space_after=10)
    tips = [
        "第 1 轮（4–5 天）：按章顺序通刷，单选限时 20 秒、填空 30 秒，做完立刻看解析，错题标出来。",
        "第 2 轮（3–4 天）：只做标记的错题，重点看解析里的幻灯片页码，回课件确认细节。",
        "第 3 轮（2 天）：重点章（数据检索、库表操作、存储过程与触发器）整章重刷，其余章只过错题。",
        "考前 1 天：只看错题的解析，尤其是语法细节（参数顺序、关键字拼写、默认值）。",
        "易错点集中在：字符集与排序规则、数据类型取值范围、约束与索引类型、连接与子查询语义、触发器 NEW/OLD 与参数模式。",
    ]
    for i, t in enumerate(tips, 1):
        p = doc.add_paragraph()
        pf = p.paragraph_format
        pf.space_before = Pt(5)
        pf.space_after = Pt(2)
        pf.line_spacing = 1.4
        pf.left_indent = Cm(0.85)
        pf.first_line_indent = Cm(-0.85)
        r = p.add_run("%d．" % i)
        set_font(r, size=10.5, bold=True, color=ACCENT, cn=CN_HEAD)
        r = p.add_run(t)
        set_font(r, size=10.5, color=INK)

    para(doc, "", before=16)
    para(doc, "本文件共 %d 题，题目与解析均取自课程课件，仅供个人复习使用。" % total,
         size=9, color=LIGHT, align=WD_ALIGN_PARAGRAPH.CENTER)

    out_dir = os.path.dirname(out_path)
    if out_dir and not os.path.isdir(out_dir):
        os.makedirs(out_dir)
    doc.save(out_path)
    return out_path, total, total_single, total_blank


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_OUT
    path, total, s, b = build(out)
    print("saved:", path)
    print("questions:", total, "single:", s, "blank:", b)
    print("size: %.2f MB" % (os.path.getsize(path) / 1048576.0))
