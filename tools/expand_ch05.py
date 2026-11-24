# -*- coding: utf-8 -*-
"""为 ch05.json 追加题目，保留原题不动。"""
import json, io, os

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "source", "ch05.json")

def single(qid, stem, options, answer, analysis, page):
    return {"id": qid, "type": "single", "stem": stem, "options": options,
            "answer": answer, "analysis": analysis, "page": page}

def blank(qid, stem, answers, analysis, page):
    return {"id": qid, "type": "blank", "stem": stem, "answer": answers,
            "answerText": answers[0], "analysis": analysis, "page": page}

new = []

# ---------- 1.1 理解索引 ----------
new.append(single("ch5-ppt-s08",
    "在MySQL中，索引是由数据库表中（ ）组合而成的一种特殊的数据库结构。",
    ["A. 一列或多列", "B. 一个或多个表", "C. 一条或多条记录", "D. 一个或多个数据库"],
    "A",
    "解析：考点是“索引的定义”。PPT第3页指出，索引由数据库表中一列或多列组合而成，是一种特殊的数据库结构，可用来快速查询表中的特定记录信息。故选A。",
    3))
new.append(single("ch5-ppt-s09",
    "MySQL中表的存储由两部分组成，即（ ）。",
    ["A. 数据页面和索引页面", "B. 表空间和日志文件", "C. 数据文件和临时文件", "D. 主键和触发器"],
    "A",
    "解析：考点是“表的存储组成”。PPT第4页指出，索引依赖于表建立，表的存储由表的数据页面和存放索引的索引页面两部分组成。故选A。",
    4))
new.append(blank("ch5-ppt-b06",
    "索引一旦创建，将由数据库自动____和维护，索引只是提供一种快速访问指定记录的方法。",
    ["管理", "管理和维护"],
    "解析：考点是“索引的自动管理”。PPT第5页指出，索引一旦创建，将由数据库自动管理和维护。",
    5))
new.append(blank("ch5-ppt-b07",
    "当MySQL执行查询时，____会对可用的多种数据检索方法的成本进行估计，从中选用最有效的查询计划。",
    ["查询优化器", "优化器", "query optimizer"],
    "解析：考点是“查询优化器”。PPT第5页指出，查询优化器会对多种检索方法的成本进行估计，选用最有效的查询计划。",
    5))

# ---------- 1.2 索引的分类 ----------
new.append(single("ch5-ppt-s10",
    "MySQL的索引通常包括普通索引、唯一性索引、主键、全文索引和（ ）等类型。",
    ["A. 空间索引（spatial）", "B. 外键索引（foreign）", "C. 临时索引（temporary）", "D. 分区索引（partition）"],
    "A",
    "解析：考点是“索引类型概览”。PPT第7页列举MySQL索引包括普通索引（index）、唯一性索引（unique）、主键（primary key）、全文索引（fulltext）和空间索引（spatial）。故选A。",
    7))
new.append(single("ch5-ppt-s11",
    "关于普通索引（index），下列说法正确的是（ ）。",
    ["A. 索引列的值必须唯一", "B. 允许在索引列中插入重复值和空值", "C. 一个表只能建立一个普通索引", "D. 不允许索引列为空"],
    "B",
    "解析：考点是“普通索引”。PPT第7页指出，普通索引是MySQL中的基本索引类型，允许在定义索引的列中插入重复值和空值。故选B。",
    7))
new.append(single("ch5-ppt-s12",
    "创建空间索引时，被索引的列必须声明为（ ），且空间索引只能在MyISAM存储引擎的表中创建。",
    ["A. not null", "B. unique", "C. default null", "D. auto_increment"],
    "A",
    "解析：考点是“空间索引”。PPT第9页指出，创建空间索引的列必须声明为not null，并且空间索引只有在MyISAM的表中才能创建。故选A。",
    9))
new.append(single("ch5-ppt-s13",
    "按照创建索引键值的列数分类，MySQL的索引可以分为（ ）。",
    ["A. 单列索引和复合索引", "B. B-Tree索引和Hash索引", "C. 普通索引和唯一性索引", "D. 主键索引和全文索引"],
    "A",
    "解析：考点是“单列索引与复合索引”。PPT第10页指出，按创建索引键值的列数分类，索引分为单列索引和复合索引；按存储方式分类才是B-Tree和Hash索引。故选A。",
    10))
new.append(blank("ch5-ppt-b08",
    "空间索引只有在存储引擎为____的表中才能创建。",
    ["MyISAM", "myisam", "MYISAM"],
    "解析：考点是“空间索引”。PPT第9页指出，空间索引只有在存储引擎MyISAM的表中创建。",
    9))
new.append(blank("ch5-ppt-b09",
    "按照创建索引键值的列数分类，索引分为单列索引和____索引。",
    ["复合", "组合", "composite"],
    "解析：考点是“单列索引与复合索引”。PPT第10页原文为“索引还可以分为单列索引和复合索引”。",
    10))

# ---------- 1.3 设置索引的原则 ----------
new.append(single("ch5-ppt-s14",
    "按照设置索引的原则，对经常进行更新操作的表，应该（ ）。",
    ["A. 尽量多建索引", "B. 限制索引的数目，避免创建过多的索引", "C. 为每个字段都建立索引", "D. 只建立全文索引"],
    "B",
    "解析：考点是“限制索引数目”。PPT第12页指出，应避免对经常更新的表创建过多的索引，要限制索引的数目。故选B。",
    12))
new.append(single("ch5-ppt-s15",
    "若表的数据量很大，且对数据的更新较少而查询较多，比较合理的做法是（ ）。",
    ["A. 不建立任何索引", "B. 创建多个索引来提高性能", "C. 删除已有全部索引", "D. 只保留主键"],
    "B",
    "解析：考点是“按更新与查询比例决定索引数”。PPT第12页指出，若表的数据量大、更新较少而查询较多，可以创建多个索引来提高性能。故选B。",
    12))
new.append(single("ch5-ppt-s16",
    "根据设置索引的原则，经常用于join、where判断和order by排序的字段（ ）。",
    ["A. 不应建立索引", "B. 一定要建立索引", "C. 只能建立全文索引", "D. 只能建立唯一性索引"],
    "B",
    "解析：考点是“常排序分组字段”。PPT第12页指出，经常需要排序、分组和联合操作的字段一定要建立索引，即用于join、where判断和order by排序的字段。故选B。",
    12))
new.append(single("ch5-ppt-s17",
    "对含有大量重复值的字段建立索引，可能的结果是（ ）。",
    ["A. 一定提高查询性能", "B. 有可能降低数据库的性能", "C. 自动转为全文索引", "D. 自动删除重复值"],
    "B",
    "解析：考点是“避免大量重复值字段”。PPT第13页指出，不要对含有大量重复值的字段建立索引，在这样的字段上建立索引有可能降低数据库的性能。故选B。",
    13))
new.append(blank("ch5-ppt-b10",
    "InnoDB数据引擎的索引键最长支持____字节，而MyISAM数据引擎支持1000字节。",
    ["767"],
    "解析：考点是“索引键长度限制”。PPT第13页指出，InnoDB数据引擎的索引键最长支持767字节，MyISAM支持1000字节。",
    13))
new.append(blank("ch5-ppt-b11",
    "在InnoDB中，如果通过____来访问数据，效率是非常高的；每个表只能创建一个主键索引。",
    ["主键", "primary key", "主键索引"],
    "解析：考点是“主键上创建索引”。PPT第13页指出，在主键上创建索引，在InnoDB中通过主键访问数据效率非常高，且每个表只能创建一个主键索引。",
    13))

# ---------- 1.4 创建索引 ----------
new.append(single("ch5-ppt-s18",
    "MySQL中创建索引通常有3种命令方式，下列不属于其中一种的是（ ）。",
    ["A. 用create index创建索引", "B. 创建表时附带创建索引", "C. 使用alter table语句创建索引", "D. 使用update语句创建索引"],
    "D",
    "解析：考点是“三种创建方式”。PPT第14页列出创建索引的3种方式：create index创建索引、创建表时附带创建索引、使用alter table语句创建索引。update用于改数据，不能建索引。故选D。",
    14))
new.append(single("ch5-ppt-s19",
    "使用create index为text或blob类型的列创建索引时，（ ）。",
    ["A. 不必给出长度", "B. 必须给出前缀长度", "C. 只能建立唯一性索引", "D. 不能建立任何索引"],
    "B",
    "解析：考点是“前缀索引”。PPT第16页指出，blob和text列也可以编制索引，但是必须给出前缀长度，语法为col_name(length)。故选B。",
    16))
new.append(single("ch5-ppt-s20",
    "使用列的一部分（前缀）创建索引，其主要好处是（ ）。",
    ["A. 使索引文件大大减小，节省磁盘空间", "B. 使索引完全失效", "C. 可以索引所有数据类型", "D. 保证索引列的值唯一"],
    "A",
    "解析：考点是“前缀索引优点”。PPT第16页指出，使用列的一部分创建索引可使索引文件大大减小，从而节省大量磁盘空间，并有可能提高insert操作的速度。故选A。",
    16))
new.append(single("ch5-ppt-s21",
    "关于创建索引的说明，下列说法正确的是（ ）。",
    ["A. 任何用户都可以为任意表创建索引", "B. 索引名在表中必须是唯一的", "C. 一张表上可以创建多个主键", "D. 唯一性索引一定就是主键"],
    "B",
    "解析：考点是“创建索引说明”。PPT第20页指出，只有表的所有者才能给表创建索引，索引名在表中必须唯一；一张表只能有一个主键但可以有多个唯一性索引，唯一性索引不一定是主键。故选B。",
    20))
new.append(single("ch5-ppt-s22",
    "创建唯一索引时，若表中该列已存在两个或两个以上的空值（null），则（ ）。",
    ["A. 索引仍可正常创建", "B. 空值会被自动删除", "C. 索引创建失败", "D. 空值会被自动转为0"],
    "C",
    "解析：考点是“唯一索引注意”。PPT第20页指出，创建索引时把两个空值也视为重复数据，因此若存在两个或以上空值，必须先删除，否则索引不能被成功创建。故选C。",
    20))
new.append(blank("ch5-ppt-b12",
    "在course表的cname列上创建唯一性索引，语句为：create ____ index cname_index on course(cname);",
    ["unique", "UNIQUE", "唯一"],
    "解析：考点是“create index语法中的unique”。PPT第17页例2给出 create unique index cname_index on course(cname);",
    17))
new.append(blank("ch5-ppt-b13",
    "只有表的____才能给表创建索引，索引的名称必须符合MySQL的命名规则且在表中唯一。",
    ["所有者", "拥有者", "owner"],
    "解析：考点是“创建索引说明”。PPT第20页说明，只有表的所有者才能给表创建索引。",
    20))

# ---------- 1.5 删除索引 ----------
new.append(single("ch5-ppt-s23",
    "删除teacher1表上名为mark的索引，正确的语句是（ ）。",
    ["A. drop index mark on teacher1;", "B. delete index mark from teacher1;", "C. drop mark index teacher1;", "D. alter table teacher1 delete mark;"],
    "A",
    "解析：考点是“drop index语法”。PPT第21页给出语法 drop index index_name on table_name，示例为 drop index mark on teacher1;。故选A。",
    21))
new.append(single("ch5-ppt-s24",
    "使用alter table语句删除course表上的cname_index索引，正确的写法是（ ）。",
    ["A. alter table course drop index cname_index;", "B. alter table course delete index cname_index;", "C. alter table course remove index cname_index;", "D. alter table course drop cname_index;"],
    "A",
    "解析：考点是“alter table删除索引”。PPT第22页给出 alter table 的 drop index index_name 子句，示例为 alter table course drop index cname_index;。故选A。",
    22))
new.append(blank("ch5-ppt-b14",
    "drop index子句可以删除各种类型的索引，包括____索引。",
    ["唯一", "unique", "唯一性"],
    "解析：考点是“drop index适用范围”。PPT第22页说明，drop index子句可以删除各种类型的索引，包括唯一索引。",
    22))

# ---------- 2.1 创建视图 ----------
new.append(single("ch5-ppt-s25",
    "下列不属于视图为数据库用户提供便利的是（ ）。",
    ["A. 简化数据查询和处理", "B. 屏蔽数据库的复杂性", "C. 提供安全性", "D. 在数据库中实际存储视图的数据"],
    "D",
    "解析：考点是“视图的优点”。PPT第24页列出视图的优点：简化数据查询和处理、屏蔽数据库的复杂性、安全性；而第23页明确数据库只存放视图定义、不存放数据。故选D。",
    24))
new.append(single("ch5-ppt-s26",
    "创建视图要求创建用户具有针对视图的（ ）权限，以及针对select语句选择的每一列上的某些权限。",
    ["A. create view", "B. drop view", "C. show view", "D. alter table"],
    "A",
    "解析：考点是“创建视图的权限”。PPT第26页指出，要求创建用户具有针对视图的create view权限，以及针对select语句选择的每一列上的某些权限。故选A。",
    26))
new.append(single("ch5-ppt-s27",
    "创建视图的语法中，algorithm子句可以取的值为（ ）。",
    ["A. undefined、merge、temptable", "B. undefined、merge、hash", "C. merge、temptable、btree", "D. undefined、replace、local"],
    "A",
    "解析：考点是“创建视图语法”。PPT第27页语法为 create [or replace][algorithm ={undefined|merge|temptable}] view ...，故选A。",
    27))
new.append(single("ch5-ppt-s28",
    "下列关于创建视图限制的说法，错误的是（ ）。",
    ["A. 视图的from子句中不能使用子查询", "B. select语句不能引用系统或用户变量", "C. 不能将触发程序与视图关联在一起", "D. 视图定义中绝对不能使用order by"],
    "D",
    "解析：考点是“创建视图的限制”。PPT第28页指出，from子句不能使用子查询、select不能引用系统或用户变量、不能关联触发程序；但“在视图定义中允许使用order by”，只是从该视图选择时可能被忽略。故D说法错误。",
    28))
new.append(single("ch5-ppt-s29",
    "关于视图建立的基础，下列说法正确的是（ ）。",
    ["A. 视图只能建立在一张表上", "B. 视图可以建立在多张表或既有视图上", "C. 视图引用的基本表必须来自当前数据库", "D. 视图必须包含基本表的所有列"],
    "B",
    "解析：考点是“视图建立的基础”。PPT第26页指出视图可建立在一张表、多张表或既有视图上；第32页说明基本表也可来自另一数据库，只需在表名前加数据库名。故选B。",
    26))
new.append(blank("ch5-ppt-b15",
    "在视图的from子句中不能使用____。",
    ["子查询", "subquery", "嵌套查询"],
    "解析：考点是“创建视图的限制”。PPT第28页第一条限制即“在视图的from子句中不能使用子查询”。",
    28))

# ---------- 2.2 查看视图的定义 ----------
new.append(single("ch5-ppt-s30",
    "查看数据库中已存在视图的定义，用户必须具有（ ）权限。",
    ["A. show view", "B. create view", "C. drop view", "D. update"],
    "A",
    "解析：考点是“查看视图的权限”。PPT第33页指出，查看视图必须要有show view的权限，MySQL数据库下的user表中保存着这个信息。故选A。",
    33))
new.append(single("ch5-ppt-s31",
    "下列语句中，不能用于查看视图定义的是（ ）。",
    ["A. describe view_name", "B. show table status like 'view_name'", "C. show create view view_name", "D. drop view view_name"],
    "D",
    "解析：考点是“查看视图的方法”。PPT第33-35页列出describe语句、show table status语句、show create view语句和查询information_schema.views表四种方法；drop view用于删除视图。故选D。",
    33))
new.append(single("ch5-ppt-s32",
    "使用describe语句查看视图的基本信息，其形式（ ）。",
    ["A. 与查看表的形式是一样的", "B. 与创建视图的语法一样", "C. 必须加上full关键字", "D. 只能看视图名不能看列信息"],
    "A",
    "解析：考点是“describe语句”。PPT第33页指出，describe语句查看视图的基本形式与查看表的形式是一样的。故选A。",
    33))
new.append(single("ch5-ppt-s33",
    "要查看视图的详细定义，应使用（ ）语句。",
    ["A. describe view_name", "B. show table status like 'view_name'", "C. show create view view_name", "D. select * from view_name"],
    "C",
    "解析：考点是“show create view”。PPT第34页指出，show create view语句可以查看视图的详细定义；show table status只查看基本信息，describe查看基本结构。故选C。",
    34))
new.append(blank("ch5-ppt-b16",
    "MySQL中所有视图的定义都存放在information_schema数据库下的____表中。",
    ["views", "VIEWS", "views表"],
    "解析：考点是“views表”。PPT第35页指出，所有视图的定义都存在information_schema数据库下的views表中，可用 select * from information_schema.views; 查看。",
    35))

# ---------- 2.3 修改视图 ----------
new.append(single("ch5-ppt-s34",
    "修改视图是指（ ）。",
    ["A. 修改数据库中已存在视图的定义", "B. 直接修改视图中的数据", "C. 删除视图后重建基表", "D. 修改基表的存储引擎"],
    "A",
    "解析：考点是“修改视图的概念”。PPT第36页指出，修改视图是指修改数据库中已存在视图的定义；当基本表字段改变时，可通过修改视图保持视图与基本表一致。故选A。",
    36))
new.append(single("ch5-ppt-s35",
    "关于create or replace view语句，下列说法正确的是（ ）。",
    ["A. 只能用于创建新视图", "B. 只能用于修改已存在的视图", "C. 视图已存在时进行修改，不存在时可创建视图", "D. 使用前必须先删除原视图"],
    "C",
    "解析：考点是“create or replace view”。PPT第36页指出，该语句使用非常灵活：视图已经存在时对视图进行修改，视图不存在时可以创建视图。故选C。",
    36))
new.append(single("ch5-ppt-s36",
    "使用alter view修改视图时，若在视图名后指明视图列名称，则（ ）。",
    ["A. 列数可以与select语句检索的列数不等", "B. 列数要与select语句检索的列数相等", "C. 不允许指定列名", "D. 必须同时使用or replace"],
    "B",
    "解析：考点是“alter view语法/修改视图示例”。PPT第37页给出alter view语法，第38页例9在视图名后指明列名；第32页说明(2)要求列数要与select语句检索的列数相等。故选B。",
    38))
new.append(blank("ch5-ppt-b17",
    "MySQL中可以通过create or replace view语句和____语句来修改视图。",
    ["alter", "ALTER", "alter view"],
    "解析：考点是“修改视图的两种方式”。PPT第36页指出，MySQL中通过create or replace view语句和alter语句来修改视图。",
    36))

# ---------- 2.4 删除视图 ----------
new.append(single("ch5-ppt-s37",
    "删除视图时，（ ）。",
    ["A. 只删除视图的定义，不会删除数据", "B. 同时删除基表中的数据", "C. 同时删除基表的结构", "D. 删除视图及其全部索引"],
    "A",
    "解析：考点是“删除视图的概念”。PPT第39页指出，删除视图时只能删除视图的定义，不会删除数据。故选A。",
    39))
new.append(single("ch5-ppt-s38",
    "用户要使用drop view语句删除视图，必须拥有（ ）权限。",
    ["A. drop", "B. create view", "C. show view", "D. update"],
    "A",
    "解析：考点是“drop view权限与多视图”。PPT第39页指出，用户必须拥有drop权限才能使用drop view语句来删除视图。故选A。",
    39))
new.append(single("ch5-ppt-s39",
    "使用drop view一次删除多个视图时，各视图名之间应使用（ ）分隔。",
    ["A. 逗号", "B. 分号", "C. 空格", "D. and"],
    "A",
    "解析：考点是“drop view删除多个视图”。PPT第39页指出，drop view命令可以删除多个视图，各视图名之间用逗号分隔。故选A。",
    39))
new.append(blank("ch5-ppt-b18",
    "删除视图V1_student的语句为：____ view V1_student;",
    ["drop", "DROP", "drop view"],
    "解析：考点是“drop view语法”。PPT第40页给出基本格式 drop view [if exists] view_name，示例为 drop view V1_student;",
    40))

# ---------- 3.1 使用视图管理表数据 ----------
new.append(single("ch5-ppt-s40",
    "关于视图的使用，下列说法正确的是（ ）。",
    ["A. 视图的检索和更新都没有任何限制", "B. 视图检索几乎没有什么限制，但通过视图插入、修改、删除有一定限制条件", "C. 视图只能查询不能更新", "D. 通过视图更新前必须先删除视图"],
    "B",
    "解析：考点是“视图应用内容”。PPT第41页指出，视图的检索几乎没有什么限制，但对通过视图实现表的插入、修改、删除操作则有一定的限制条件。故选B。",
    41))
new.append(single("ch5-ppt-s41",
    "使用视图进行查询，实质上是（ ）。",
    ["A. 把视图作为数据源来实现查询功能", "B. 直接读取索引页面中的数据", "C. 把视图复制成一张临时表", "D. 重新执行创建视图的语句"],
    "A",
    "解析：考点是“视图查询”。PPT第42页指出，使用视图进行查询实际上就是把视图作为数据源，实现查询功能。故选A。",
    42))
new.append(single("ch5-ppt-s42",
    "创建视图course_avg统计各门课程的平均成绩，视图中使用的聚合函数是（ ）。",
    ["A. avg(final)", "B. sum(final)", "C. count(final)", "D. max(final)"],
    "A",
    "解析：考点是“视图统计计算”。PPT第43页例11中创建course_avg视图，语句为 select cname 课程名, avg(final) 平均成绩 ...。故选A。",
    43))
new.append(single("ch5-ppt-s43",
    "通过视图对基表数据进行insert、update和delete操作时，（ ）。",
    ["A. 不需要任何权限", "B. 需要具有执行相关操作的权限", "C. 只能由root用户执行", "D. 必须先删除视图定义"],
    "B",
    "解析：考点是“视图修改基表”。PPT第44页指出，使用视图修改表数据，是指在视图中进行insert、update和delete等操作而修改基表的数据，通过视图修改表数据时要有执行相关操作的权限。故选B。",
    44))
new.append(single("ch5-ppt-s44",
    "若一个视图只依赖于一个基表，则（ ）。",
    ["A. 不能通过视图更新基表数据", "B. 可以直接通过更新视图来更新基本表的数据", "C. 只能插入不能修改", "D. 必须先为该视图建立索引"],
    "B",
    "解析：考点是“单表视图可更新”。PPT第46页说明(1)指出，视图若只依赖于一个基表，则可以直接通过更新视图来更新基本表的数据。故选B。",
    46))
new.append(single("ch5-ppt-s45",
    "若一个视图依赖于多张基表，则通过该视图修改数据时（ ）。",
    ["A. 可以同时修改多个基表的数据", "B. 一次只能修改一个基表的数据", "C. 不能进行任何修改", "D. 只能执行删除操作"],
    "B",
    "解析：考点是“多表视图限制”。PPT第46页说明(2)指出，若一个视图依赖于多张基表，则一次只能修改一个基表的数据，不能同时修改多个基本表的数据。故选B。",
    46))
new.append(blank("ch5-ppt-b19",
    "通过视图修改表数据时，要有执行相关操作的____。",
    ["权限", "privilege", "权利"],
    "解析：考点是“视图修改基表”。PPT第44页指出，通过视图修改表数据时，要有执行相关操作的权限。",
    44))
new.append(blank("ch5-ppt-b20",
    "视图的列中含有____关键字（用于去重）时，该视图是不可修改的。",
    ["distinct", "DISTINCT", "distinct关键字"],
    "解析：考点是“不可修改的视图”。PPT第47页列出不可修改视图的结构，其中包含“含有distinct关键字”。",
    47))

# ---------- 3.2 检查视图的应用 ----------
new.append(single("ch5-ppt-s46",
    "在MySQL中，没有使用with check option的视图是普通视图，其with_check_option的值为（ ），不具备检查功能。",
    ["A. 0", "B. 1", "C. null", "D. local"],
    "A",
    "解析：考点是“普通视图与检查视图”。PPT第48页指出，当没有with_check_option时，表示其值为0，即为普通视图，普通视图不具备检查功能。故选A。",
    48))
new.append(single("ch5-ppt-s47",
    "创建V_dept视图时限定department='计算机学院'并使用with check option，其作用是（ ）。",
    ["A. 该视图只能查询不能插入", "B. 通过该视图插入的数据，部门必须为计算机学院", "C. 自动为department列建立索引", "D. 禁止删除基表中的数据"],
    "B",
    "解析：考点是“检查视图示例”。PPT第49页例14创建V_dept视图包含部门为“计算机学院”的教师数据，并限制插入数据中部门必须为“计算机学院”。故选B。",
    49))
new.append(blank("ch5-ppt-b21",
    "通过检查视图插入不满足检查条件的数据时，MySQL会报错 ERROR ____ (HY000): check option failed。",
    ["1369"],
    "解析：考点是“检查失败”。PPT第51页示例插入“软件学院”记录时报 ERROR 1369 (HY000): check option failed，更新失败。",
    51))
new.append(blank("ch5-ppt-b22",
    "创建检查视图时，需要在定义视图的select语句后加上 with ____ option 子句。",
    ["check", "CHECK", "check option"],
    "解析：考点是“with check option”。PPT第49页例14在select语句后使用 with check option 创建检查视图V_dept。",
    49))


def main():
    with io.open(SRC, "r", encoding="utf-8") as f:
        data = json.load(f)

    old = data["questions"]
    old_ids = {q["id"] for q in old}
    for q in new:
        assert q["id"] not in old_ids, "重复 id: " + q["id"]
        if q["type"] == "single":
            assert q["answer"] in "ABCD" and len(q["options"]) == 4
            assert q["options"][0].startswith("A. ")
        else:
            assert isinstance(q["answer"], list) and q["answer"][0] == q["answerText"]

    data["questions"] = old + new
    with io.open(SRC, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    total = len(data["questions"])
    s = sum(1 for q in data["questions"] if q["type"] == "single")
    b = total - s
    print("总题量:", total, "单选:", s, "填空:", b)
    print("新增:", len(new))


if __name__ == "__main__":
    main()
