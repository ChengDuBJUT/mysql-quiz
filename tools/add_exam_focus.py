# -*- coding: utf-8 -*-
"""补齐期末复习 PPT 里点名要考、但原题库覆盖偏薄的知识点。
只追加不修改：按 id 去重，已存在就跳过。用法：python tools/add_exam_focus.py
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "source")

# 章 -> 新题列表（id 由脚本按现有最大序号顺延，这里只写 body）
NEW = {
    1: [
        dict(type="single", page=37,
             stem="数据模型的三要素中，用于描述系统静态特性（有哪些实体、属性和联系）的是（  ）。",
             options=["A. 数据结构", "B. 数据操作", "C. 完整性约束", "D. 数据视图"],
             answer="A",
             analysis="解析：PPT第37页指出，数据模型由数据结构、数据操作和完整性约束三要素组成；其中数据结构描述系统的静态特性。"),
        dict(type="blank", page=37,
             stem="数据模型的三要素是数据结构、数据操作和____。",
             answer=["完整性约束", "完整性约束条件"],
             answerText="完整性约束",
             analysis="解析：PPT第37页明确数据模型三要素为数据结构、数据操作、完整性约束。"),
        dict(type="single", page=41,
             stem="关系运算中，从关系中找出满足给定条件的元组的操作是（  ）。",
             options=["A. 投影", "B. 选择", "C. 连接", "D. 除"],
             answer="B",
             analysis="解析：PPT第40-41页，选择（selection）是按给定条件从关系中挑出满足条件的元组；投影是按列选取属性。"),
        dict(type="blank", page=41,
             stem="关系运算中，从关系中选取若干属性列组成新关系的操作称为____。",
             answer=["投影", "投影运算"],
             answerText="投影",
             analysis="解析：PPT第40-41页，投影是对关系的列进行运算，选择是对行进行运算。"),
        dict(type="single", page=46,
             stem="下列属于专门的关系运算的是（  ）。",
             options=["A. 并、差、交", "B. 笛卡尔积", "C. 选择、投影、连接、除", "D. 排序与分组"],
             answer="C",
             analysis="解析：PPT第42-46页，并、差、交、笛卡尔积属于传统集合运算；选择、投影、连接、除是专门的关系运算。"),
    ],
    2: [
        dict(type="single", page=16,
             stem="MySQL 的字符集支持 4 个层次，从高到低依次是（  ）。",
             options=["A. 服务器 → 数据库 → 表 → 列", "B. 数据库 → 服务器 → 表 → 列",
                      "C. 列 → 表 → 数据库 → 服务器", "D. 服务器 → 表 → 数据库 → 列"],
             answer="A",
             analysis="解析：PPT第15-16页，字符集层次由高到低为服务器级、数据库级、表级、列级，低层次默认继承高层次的设置。"),
        dict(type="blank", page=16,
             stem="MySQL 字符集的 4 个层次由低到高依次是列级、表级、数据库级和____级。",
             answer=["服务器", "服务器级"],
             answerText="服务器",
             analysis="解析：PPT第15-16页，字符集层次为服务器、数据库、表、列四级，设置时低层次未指定则继承上一层次。"),
        dict(type="single", page=19,
             stem="关于 MySQL 标识符的命名规则，下列说法正确的是（  ）。",
             options=["A. 标识符可以包含空格，用引号括起来即可",
                      "B. 标识符必须以字母或下划线开头，可包含字母、数字和下划线",
                      "C. 标识符长度不能超过 8 个字符",
                      "D. 关键字可以直接作为标识符使用"],
             answer="B",
             analysis="解析：PPT第19-20页，标识符由字母、数字、下划线和 $ 组成，必须以字母或下划线开头，不能含空格，长度不超过 64 个字符，关键字不能直接作标识符。"),
        dict(type="blank", page=19,
             stem="MySQL 标识符的最大长度为____个字符。",
             answer=["64"],
             answerText="64",
             analysis="解析：PPT第19页，标识符（数据库名、表名、列名等）最长 64 个字符。"),
    ],
    5: [
        dict(type="single", page=24,
             stem="下列选项中，不属于视图优点的是（  ）。",
             options=["A. 简化用户的操作", "B. 使用户能以多种角度看待同一数据",
                      "C. 提高数据的物理存储效率", "D. 为数据库重构提供一定程度的逻辑独立性"],
             answer="C",
             analysis="解析：PPT第23-24页，视图是虚表、不存储实际数据，优点为简化操作、多角度查看数据、提高安全性、提供逻辑独立性；它不改变物理存储效率。"),
        dict(type="blank", page=24,
             stem="视图是从一个或多个基本表导出的虚表，数据库中只存放视图的____，不存放对应的数据。",
             answer=["定义", "定义信息"],
             answerText="定义",
             analysis="解析：PPT第23页，视图是虚表，数据库中只保存视图的定义，其数据仍存放在基本表中。"),
        dict(type="single", page=12,
             stem="按照设置索引的原则，下列做法最恰当的是（  ）。",
             options=["A. 对更新操作频繁的列尽量多建索引", "B. 在 where 子句和连接条件中频繁使用的列上建索引",
                      "C. 为每一列都建立索引", "D. 在取值很少的列（如性别）上建索引"],
             answer="B",
             analysis="解析：PPT第12-13页，索引应建在查询、连接、排序频繁使用的列上；更新频繁、重复值多（选择性低）的列不宜建索引，索引过多会拖慢更新。"),
    ],
    7: [
        dict(type="single", page=28,
             stem="关于存储过程与自定义函数的区别，下列说法正确的是（  ）。",
             options=["A. 函数只能返回一个值，存储过程可以通过 out 参数返回多个值",
                      "B. 存储过程只能返回一个值，函数可以返回多个值",
                      "C. 两者都不允许带参数",
                      "D. 两者都可以用 call 语句调用"],
             answer="A",
             analysis="解析：PPT第28-30页，函数用 returns 指定返回类型、只能返回一个值且可直接在 SQL 表达式中调用；存储过程用 call 调用，可通过 out/inout 参数返回多个结果。"),
        dict(type="single", page=29,
             stem="下列语句中，不能出现在自定义函数体中的是（  ）。",
             options=["A. select ... into 变量", "B. set 语句", "C. commit / rollback 事务控制语句", "D. if ... then 条件语句"],
             answer="C",
             analysis="解析：PPT第28-29页，函数体内不允许使用事务控制语句（commit、rollback），也不能返回结果集；需要事务或多结果集时应改用存储过程。"),
        dict(type="blank", page=29,
             stem="存储过程用____语句调用，而自定义函数像内置函数一样直接出现在表达式中。",
             answer=["call", "CALL"],
             answerText="call",
             analysis="解析：PPT第28页，调用存储过程使用 call 语句；函数在 select 等表达式中直接引用。"),
        dict(type="single", page=8,
             stem="下列选项中，不属于存储过程优点的是（  ）。",
             options=["A. 第一次执行后即被编译并保存在数据库中，后续调用执行更快",
                      "B. 减少应用程序与数据库之间的网络传输量",
                      "C. 可以把权限控制到过程一级，提高安全性",
                      "D. 可以脱离数据库直接在其他 DBMS 中复用"],
             answer="D",
             analysis="解析：PPT第6-10页，存储过程的优点是预编译执行快、减少网络流量、可复用、模块化、可控制权限；它是数据库对象，不能脱离本 DBMS 直接复用。"),
        dict(type="blank", page=8,
             stem="存储过程可以只把____权限授予用户，而不必授予表的直接访问权限，因此提高了数据的安全性。",
             answer=["执行", "execute"],
             answerText="执行",
             analysis="解析：PPT第7-9页，存储过程的一大优点是安全性：应用只需获得过程的 execute 权限，无需直接访问底层表。"),
        dict(type="blank", page=8,
             stem="存储过程在第一次执行时被____并保存在数据库中，后续调用可以直接执行，因此提高了执行效率。",
             answer=["编译", "预编译"],
             answerText="编译",
             analysis="解析：PPT第6-8页，存储过程创建时由数据库分析并编译，第一次执行后常驻数据库，后续调用省去解析编译开销。"),
    ],
}


def next_id(ch, qtype):
    """按现有最大序号顺延，避免和已有题撞号。"""
    prefix = "ch%d-ppt-" % ch["chapter"]
    tag = "s" if qtype == "single" else "b"
    mx = 0
    for q in ch["questions"]:
        qid = q["id"]
        if qid.startswith(prefix + tag):
            tail = qid[len(prefix + tag):]
            if tail.isdigit():
                mx = max(mx, int(tail))
    return prefix + tag + "%02d" % (mx + 1)


def main():
    added = 0
    for n, items in NEW.items():
        path = os.path.join(SRC, "ch%02d.json" % n)
        with open(path, encoding="utf-8-sig") as f:
            ch = json.load(f)
        for body in items:
            if any(q.get("stem") == body["stem"] for q in ch["questions"]):
                print("= 跳过已存在：%s" % body["stem"][:30])
                continue
            qid = next_id(ch, body["type"])
            q = {"id": qid}
            q.update(body)
            ch["questions"].append(q)
            added += 1
            print("+ %s  %s" % (qid, q["stem"][:40]))
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            json.dump(ch, f, ensure_ascii=False, indent=2)
            f.write("\n")
    print("共追加 %d 题" % added)


if __name__ == "__main__":
    main()
