# -*- coding: utf-8 -*-
"""为 ch07.json 追加新题（保留原题不动）。"""
import json
import os

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "source", "ch07.json")


def s(qid, stem, options, answer, analysis, page):
    return {
        "id": qid,
        "type": "single",
        "stem": stem,
        "options": options,
        "answer": answer,
        "analysis": analysis,
        "page": page,
    }


def b(qid, stem, answers, analysis, page):
    return {
        "id": qid,
        "type": "blank",
        "stem": stem,
        "answer": answers,
        "answerText": answers[0],
        "analysis": analysis,
        "page": page,
    }


NEW = []

# ---------------- 1.1 认识存储过程 ----------------
NEW += [
    s("ch7-ppt-s08",
      "存储过程在实际应用中可发挥多方面作用，下列各项中不属于PPT所述存储过程主要应用的是（ ）。",
      ["A. 控制访问权限", "B. 为数据库表中的活动创建审计追踪",
       "C. 将数据定义语句和数据操作语句分隔开", "D. 自动为数据表选择合适的存储引擎"],
      "D",
      "解析：PPT第6页指出存储过程主要应用于控制访问权限、为数据库表中的活动创建审计追踪、将关系到数据库及其所有相关应用程序的数据定义语句和数据操作语句分隔开，并无“自动选择存储引擎”之说。故选D。",
      6),
    s("ch7-ppt-s09",
      "下列各项中，不属于存储过程优势的是（ ）。",
      ["A. 提高了处理复杂任务的能力", "B. 增强了代码的复用率和共享性",
       "C. 减少了网络中数据的流量", "D. 可以对表中数据自动加密存储"],
      "D",
      "解析：PPT第7页列出存储过程的优势：提高处理复杂任务的能力、增强代码的复用率和共享性、减少网络中数据的流量、在服务器注册加快运行速度、加强系统的安全性，不含“自动加密存储”。故选D。",
      7),
    s("ch7-ppt-s10",
      "在MySQL中创建存储过程，必须具有的权限是（ ）。",
      ["A. create routine", "B. execute", "C. alter routine", "D. create view"],
      "A",
      "解析：PPT第8页指出，创建存储过程可以使用create procedure语句，要创建存储过程必须具有create routine的权限；execute是执行（调用）存储过程所需的权限。故选A。",
      8),
    b("ch7-ppt-b06",
      "调用存储过程时，call语句中的参数个数必须总是等于存储过程的____个数。",
      ["参数", "参数个数"],
      "解析：PPT第10页指出，call语句中的参数个数必须总是等于存储过程的参数个数。",
      10),
]

# ---------------- 1.2 存储过程的创建和管理 ----------------
NEW += [
    s("ch7-ppt-s11",
      "例2创建的存储过程为avg_score(in c_no char(6))，其中in表示该参数是（ ）。",
      ["A. 输入参数", "B. 输出参数", "C. 输入输出参数", "D. 无参数"],
      "A",
      "解析：PPT第12页例2创建avg_score(in c_no char(6))，in为输入参数，调用时用call avg_score('c05109')把课程号传入。故选A。",
      12),
    s("ch7-ppt-s12",
      "例4创建的stu_scores(in s_no char(11), out count_num int)用于统计指定同学的考试门数，调用时为out参数传入的实参应使用（ ）。",
      ["A. 字符串常量", "B. 会话变量（如@c_num）", "C. 列名", "D. 数学表达式"],
      "B",
      "解析：PPT第14页指出，out参数由存储过程内部用select count(*) into count_num赋值，调用语句为call stu_scores('20125121109', @c_num)，再用select @c_num查看，故实参用会话变量。故选B。",
      14),
    b("ch7-ppt-b07",
      "例5的存储过程do_query中使用____关键字声明局部变量AA并指定默认值0。",
      ["declare", "DECLARE"],
      "解析：PPT第15页例5中语句为declare AA tinyint default 0，用declare声明局部变量。",
      15),
    s("ch7-ppt-s13",
      "例6中do_outer()要执行do_insert()的功能，其过程体内应使用的语句是（ ）。",
      ["A. exec do_insert();", "B. call do_insert();", "C. run do_insert();", "D. select do_insert();"],
      "B",
      "解析：PPT第17页do_outer()的过程体中以call do_insert();调用另一个存储过程，说明存储过程可以嵌套调用。故选B。",
      17),
    s("ch7-ppt-s14",
      "要查看存储过程do_outer的创建语句（定义），应使用的语句是（ ）。",
      ["A. show procedure status like 'do_%';", "B. show create procedure do_outer;",
       "C. select * from do_outer;", "D. describe procedure do_outer;"],
      "B",
      "解析：PPT第18页指出，show procedure status用于查看状态，show create procedure用于查看定义，例中为show create procedure do_outer。故选B。",
      18),
    b("ch7-ppt-b08",
      "定义条件的基本语法为declare condition_name ____ for condition_type。",
      ["condition", "CONDITION"],
      "解析：PPT第20页给出定义条件的语法：declare condition_name condition for condition_type。",
      20),
    b("ch7-ppt-b09",
      "处理程序的类型中，表示遇到错误不做处理、继续执行其他MySQL语句的是____。",
      ["continue", "CONTINUE"],
      "解析：PPT第22页指出，handler_type取continue或exit，continue表示遇到错误不处理、继续执行其他MySQL语句。",
      22),
    s("ch7-ppt-s15",
      "定义处理程序时，not found用于匹配所有以（ ）开头的sqlstate错误代码。",
      ["A. 01", "B. 02", "C. 03", "D. 99"],
      "B",
      "解析：PPT第23页指出，sqlwarning匹配以01开头的sqlstate代码，not found匹配以02开头的，sqlexception匹配其他非前两类的错误代码。故选B。",
      23),
]

# ---------------- 1.3 修改存储过程 ----------------
NEW += [
    s("ch7-ppt-s16",
      "下列各项中，不属于修改存储过程方法的是（ ）。",
      ["A. 删除并重新创建存储过程", "B. 使用alter procedure语句修改某些参数",
       "C. 使用update procedure语句修改", "D. 先drop procedure再create procedure"],
      "C",
      "解析：PPT第26页指出修改存储过程有两种方法：删除并重新创建，或使用alter procedure语句修改某些参数，MySQL并没有update procedure语句。故选C。",
      26),
    s("ch7-ppt-s17",
      "例9执行alter procedure do_insert modifies sql data sql security invoker;，其中modifies sql data表示（ ）。",
      ["A. 该存储过程只读", "B. 将读写权限改为modifies sql data",
       "C. 存储过程只包含SQL语句", "D. 存储过程不包含任何SQL语句"],
      "B",
      "解析：PPT第26页例9说明将读写权限改为modifies sql data，并指明调用者可以执行。故选B。",
      26),
    b("ch7-ppt-b10",
      "修改存储过程可以使用____ procedure语句。",
      ["alter", "ALTER"],
      "解析：PPT第26页指出，另一种修改存储过程的方法是使用alter procedure语句。",
      26),
    s("ch7-ppt-s18",
      "例9中alter procedure语句末尾的sql security invoker表示（ ）。",
      ["A. 以定义者权限执行", "B. 指明调用者可以执行该存储过程",
       "C. 禁止任何用户调用", "D. 只允许DBA调用"],
      "B",
      "解析：PPT第26页例9说明sql security invoker用于指明调用者可以执行该存储过程。故选B。",
      26),
]

# ---------------- 1.4 删除存储过程 ----------------
NEW += [
    s("ch7-ppt-s19",
      "在MySQL中删除已经存在的存储过程，应使用的语句是（ ）。",
      ["A. delete procedure", "B. drop procedure", "C. remove procedure", "D. alter procedure"],
      "B",
      "解析：PPT第27页指出，删除存储过程可以使用drop procedure语句，语法为drop procedure [if exists] sp_name。故选B。",
      27),
    s("ch7-ppt-s20",
      "drop procedure语句中[if exists]子句的作用是（ ）。",
      ["A. 只删除有数据的存储过程", "B. 如果程序或函数不存在，防止发生错误",
       "C. 删除同名的所有数据库对象", "D. 强制终止正在运行的存储过程"],
      "B",
      "解析：PPT第27页指出，if exists子句是MySQL的扩展，如果程序或函数不存在，它防止发生错误。故选B。",
      27),
    b("ch7-ppt-b11",
      "删除存储过程do_insert的语句是drop procedure if exists ____;",
      ["do_insert", "DO_INSERT"],
      "解析：PPT第27页删除存储过程的示例为drop procedure if exists do_insert;，sp_name处写要删除的存储过程名。",
      27),
    b("ch7-ppt-b12",
      "drop procedure语句的基本语法为drop procedure [____] sp_name。",
      ["if exists", "IF EXISTS"],
      "解析：PPT第27页给出语法drop procedure [if exists] sp_name，方括号中为可选的if exists子句。",
      27),
]

# ---------------- 1.5 存储过程与函数的比较 ----------------
NEW += [
    s("ch7-ppt-s21",
      "关于函数与存储过程的返回值，下列说法正确的是（ ）。",
      ["A. 函数可以有多个返回值", "B. 函数必须有且仅有一个返回值并须指定类型",
       "C. 存储过程必须有一个返回值", "D. 存储过程与函数都必须有返回值"],
      "B",
      "解析：PPT第28页指出，函数必须有且仅有一个返回值且必须指定返回值类型；存储过程可以没有返回值，也可以有一个或多个返回值，需用out或inout参数定义。故选B。",
      28),
    s("ch7-ppt-s22",
      "关于函数与存储过程对结果集的处理，下列说法正确的是（ ）。",
      ["A. 函数可以返回多个结果集", "B. 存储过程不能返回结果集",
       "C. 函数体可用select…into赋值但不能返回结果集，存储过程可以返回多个结果集",
       "D. 函数和存储过程都不能返回结果集"],
      "C",
      "解析：PPT第29页指出，函数体内可以使用select…into为变量赋值，但不能用select语句返回结果集；存储过程没有这方面的限制，甚至可以返回多个结果集。故选C。",
      29),
    s("ch7-ppt-s23",
      "关于函数与存储过程的调用方式，下列说法正确的是（ ）。",
      ["A. 函数必须使用call关键字调用", "B. 存储过程可以直接嵌入SQL表达式中使用",
       "C. 函数可直接嵌入SQL语句或表达式，存储过程一般需用call单独调用",
       "D. 函数和存储过程都必须用call调用"],
      "C",
      "解析：PPT第29页指出，函数可以直接嵌入到SQL语句或MySQL表达式中，并可扩展标准SQL；存储过程一般需要单独调用，调用时需要使用call关键字。故选C。",
      29),
    s("ch7-ppt-s24",
      "与存储过程相比，函数体的限制较多，下列语句中不能在函数体中使用的（ ）。",
      ["A. select…into赋值语句", "B. start transaction、commit、rollback等事务语句",
       "C. declare声明语句", "D. if…then条件语句"],
      "B",
      "解析：PPT第30页指出，函数体内不能使用以显式或隐式方式打开、开始或结束事务的语句（如start transaction、commit、rollback、set autocommit=0），也不能使用预处理SQL语句。故选B。",
      30),
    b("ch7-ppt-b13",
      "存储过程或函数可以重复使用，还可以增强数据的____访问控制。",
      ["安全", "安全性"],
      "解析：PPT第28页指出，使用存储过程或者函数可以增强数据的安全访问控制，可以设定只有某些用户才具有执行权。",
      28),
]

# ---------------- 2.1 声明游标 ----------------
NEW += [
    s("ch7-ppt-s25",
      "游标在MySQL中是一种对（ ）进行访问的机制。",
      ["A. 索引", "B. select语句结果集", "C. 视图定义", "D. 存储引擎"],
      "B",
      "解析：PPT第31页指出，游标在MySQL中是一种对select语句结果集进行访问的机制，允许用户访问单独的数据行。故选B。",
      31),
    s("ch7-ppt-s26",
      "游标主要包括（ ）两部分。",
      ["A. 结果集和游标位置", "B. 变量和循环", "C. 条件和处理程序", "D. 参数和返回值"],
      "A",
      "解析：PPT第32页指出，游标主要包括结果集和游标位置两部分，游标位置是指向结果集中某一行的指针。故选A。",
      32),
    b("ch7-ppt-b14",
      "声明游标需要使用____语句。",
      ["declare", "DECLARE"],
      "解析：PPT第34页指出，声明游标需要使用declare语句，语法为declare cursor_name cursor for select_statement。",
      34),
]

# ---------------- 2.2 打开游标 ----------------
NEW += [
    s("ch7-ppt-s27",
      "关于打开游标，下列说法正确的是（ ）。",
      ["A. 打开游标使用fetch语句", "B. 使用游标之前必须首先打开游标",
       "C. 游标打开后会自动关闭", "D. 打开游标时不需要指定游标名"],
      "B",
      "解析：PPT第35页指出，打开游标需要使用open语句，使用游标之前必须首先打开游标。故选B。",
      35),
    s("ch7-ppt-s28",
      "打开游标teach_cursor的正确语句是（ ）。",
      ["A. open teach_cursor;", "B. start teach_cursor;", "C. begin teach_cursor;", "D. use teach_cursor;"],
      "A",
      "解析：PPT第35页给出打开游标的语法open cursor_name;，打开teach_cursor的语句为open teach_cursor;。故选A。",
      35),
    b("ch7-ppt-b15",
      "打开游标需要使用____语句。",
      ["open", "OPEN"],
      "解析：PPT第35页指出，打开游标需要使用open语句。",
      35),
    b("ch7-ppt-b16",
      "打开前面创建的teach_cursor游标，应执行open ____;",
      ["teach_cursor", "TEACH_CURSOR"],
      "解析：PPT第35页打开teach_cursor游标的示例语句为open teach_cursor;。",
      35),
]

# ---------------- 2.3 从游标中提取数据 ----------------
NEW += [
    s("ch7-ppt-s29",
      "从游标中提取数据需要使用fetch语句，其功能是（ ）。",
      ["A. 声明结果集", "B. 获取游标当前指针的记录并传给指定变量列表",
       "C. 关闭游标并释放资源", "D. 打开游标"],
      "B",
      "解析：PPT第36页指出，fetch语句的功能是获取游标当前指针的记录，并传给指定变量列表。故选B。",
      36),
    s("ch7-ppt-s30",
      "MySQL的游标是（ ）的。",
      ["A. 向前只读", "B. 可双向滚动", "C. 可随机定位任意行", "D. 可直接修改结果集数据"],
      "A",
      "解析：PPT第36页指出，MySQL的游标是向前只读的，只能顺序地从开始往后读取结果集，不能从后往前，也不能直接跳到中间的记录。故选A。",
      36),
    b("ch7-ppt-b17",
      "fetch语句中变量名的个数必须与声明游标时select语句结果集中的____个数保持一致。",
      ["字段", "列"],
      "解析：PPT第37页指出，变量名的个数必须与声明游标时使用的select语句结果集中的字段个数保持一致。",
      37),
    s("ch7-ppt-s31",
      "fetch语句每次仅提取一条记录，因此需要（ ）配合才能遍历整个结果集。",
      ["A. 循环语句", "B. 子查询", "C. 事务", "D. 触发器"],
      "A",
      "解析：PPT第37页指出，fetch语句每次只提取一条记录，需要循环语句配合才能实现整个结果集的遍历，一般用Loop和while比较清楚。故选A。",
      37),
    s("ch7-ppt-s32",
      "游标错误处理程序应该放在（ ）。",
      ["A. 声明游标语句之前", "B. 声明游标语句之后",
       "C. begin语句之前", "D. end语句之后"],
      "B",
      "解析：PPT第38页指出，游标错误处理程序应该放在声明游标语句之后，游标通常结合错误处理程序一起使用以结束结果集的访问。故选B。",
      38),
    b("ch7-ppt-b18",
      "提取完最后一条记录后再次执行fetch，将产生ERROR ____ (02000): No data to fetch错误。",
      ["1329"],
      "解析：PPT第38页指出，提取最后一条记录后再次执行fetch会产生“ERROR 1329 (02000): No data to fetch”错误。",
      38),
]

# ---------------- 2.4 关闭游标 ----------------
NEW += [
    s("ch7-ppt-s33",
      "关闭游标的目的在于（ ）。",
      ["A. 删除游标的定义", "B. 释放游标打开时产生的结果集，通知服务器释放游标占用的资源",
       "C. 重新声明游标以便再次使用", "D. 提交当前事务"],
      "B",
      "解析：PPT第39页指出，关闭游标的目的在于释放游标打开时产生的结果集，以通知服务器释放游标所占用的资源，节省MySQL服务器的内存空间。故选B。",
      39),
    s("ch7-ppt-s34",
      "如果游标没有被明确地关闭，它将（ ）。",
      ["A. 永久占用内存直至重启服务器", "B. 在它被声明的begin-end语句块的末尾关闭",
       "C. 在下一次open时自动关闭", "D. 必须由用户手工kill进程关闭"],
      "B",
      "解析：PPT第39页指出，游标如果没有被明确地关闭，将在它被声明的begin-end语句块的末尾关闭。故选B。",
      39),
    s("ch7-ppt-s35",
      "例10的proc_cursor中，当@dovar=1表示已遍历结束时，用（ ）语句退出循环。",
      ["A. exit loop", "B. leave fetch_Loop", "C. break", "D. return"],
      "B",
      "解析：PPT第41页例10中，用if @dovar=1 then leave fetch_Loop;结束loop循环，再用close关闭游标。故选B。",
      40),
    b("ch7-ppt-b19",
      "关闭游标使用____语句。",
      ["close", "CLOSE"],
      "解析：PPT第39页指出，关闭游标使用close语句，语法为close cursor_name;。",
      39),
]

# ---------------- 3.1 认识触发器 ----------------
NEW += [
    s("ch7-ppt-s36",
      "关于触发器，下列说法正确的是（ ）。",
      ["A. 触发器是一种特殊的存储过程，基于一个表创建，但可以针对多个表进行操作",
       "B. 触发器必须由用户手工调用才会执行",
       "C. 触发器只能基于视图创建",
       "D. 触发器与存储过程没有任何关系"],
      "A",
      "解析：PPT第42页指出，触发器是一种特殊的存储过程，基于一个表创建，但可以针对多个表进行操作，因此可用来对表实施复杂的完整性约束。故选A。",
      42),
    s("ch7-ppt-s37",
      "下列各项中，属于触发器优点的是（ ）。",
      ["A. 可以强制比check约束更复杂的限制，且能引用其他表中的列",
       "B. 可以自动提高查询速度",
       "C. 可以替代所有事务控制语句",
       "D. 可以自动为表创建索引"],
      "A",
      "解析：PPT第44页指出，触发器可以强制限制，这些限制比用check约束定义的更复杂，而且与check约束不同，触发器可以引用其他表中的列。故选A。",
      44),
    b("ch7-ppt-b20",
      "create trigger语句中table_name必须引用____表，不能与temporary表或视图关联。",
      ["永久性", "永久"],
      "解析：PPT第45页指出，table_name必须引用永久性表，不能将触发程序与temporary表或视图关联起来。",
      45),
    s("ch7-ppt-s38",
      "下列各项中，不属于触发器trigger_event取值的是（ ）。",
      ["A. insert", "B. update", "C. delete", "D. select"],
      "D",
      "解析：PPT第46页指出，trigger_event可以是insert、update、delete之一，分别在新行插入、更改某一行、删除某一行时激活，没有select。故选D。",
      46),
    b("ch7-ppt-b21",
      "触发器事件发生时，MySQL针对要修改数据的表创建的两个结构完全相同的临时表是old和____。",
      ["new", "NEW"],
      "解析：PPT第48页指出，MySQL针对要修改数据的表创建了与本表结构完全一样的2个临时表old和new。",
      48),
    b("ch7-ppt-b22",
      "old记录是____的，只能引用，不能更改。",
      ["只读", "只读的", "read only"],
      "解析：PPT第49页指出，old记录是只读的，只能引用，不能更改；在before触发程序中可用set new.col_name = value更改new记录的值。",
      49),
]

# ---------------- 3.2 触发器的创建和管理 ----------------
NEW += [
    s("ch7-ppt-s39",
      "例11创建的触发器cno_update，其触发时机和触发事件是（ ）。",
      ["A. before insert", "B. after update", "C. after delete", "D. before delete"],
      "B",
      "解析：PPT第50页例11创建create trigger cno_update after update on course for each row，当course表课程号更改时同步更新score表中的课程号。故选B。",
      50),
    s("ch7-ppt-s40",
      "例12中trig_teacher在teacher表删除教师信息后，把教师编号和姓名添加到de_teacher表，使用（ ）引用被删除的记录。",
      ["A. new.teacherno、new.tname", "B. old.teacherno、old.tname",
       "C. teacherno、tname", "D. delete.teacherno、delete.tname"],
      "B",
      "解析：PPT第51页例12为after delete触发器，插入语句为values(old.teacherno, old.tname)，即用old引用被删除的旧记录。故选B。",
      51),
    s("ch7-ppt-s41",
      "查看数据库中已存在触发器的状态，可以使用（ ）语句。",
      ["A. show triggers", "B. show procedure status", "C. show events", "D. show create database"],
      "A",
      "解析：PPT第52页指出，用户可以通过show triggers语句查看触发器的状态，也可以通过查询information_schema数据库下的triggers表查看触发器信息。故选A。",
      52),
    b("ch7-ppt-b23",
      "查看触发器的状态可以使用show ____语句。",
      ["triggers", "TRIGGERS"],
      "解析：PPT第52页指出，用户可以通过show triggers语句来查看触发器的状态。",
      52),
]

# ---------------- 3.3 使用触发器 ----------------
NEW += [
    s("ch7-ppt-s42",
      "下列各项中，不属于触发器常见应用的是（ ）。",
      ["A. 实现数据完整性的复杂约束", "B. 数据管理过程中的冗余数据处理",
       "C. 外键约束的级联操作", "D. 替代索引以提高检索速度"],
      "D",
      "解析：PPT第53页指出，触发器的常见应用有实现数据完整性的复杂约束、数据管理过程中的冗余数据处理以及外键约束的级联操作，不含“替代索引提高检索速度”。故选D。",
      53),
    s("ch7-ppt-s43",
      "例13的stu_delete触发器实现的功能是（ ）。",
      ["A. 删除student表中记录时同时删除score表中相应的成绩记录",
       "B. 修改student表时同步更新score表",
       "C. 向student表插入记录时同时插入score表",
       "D. 删除score表记录时同时删除student表记录"],
      "A",
      "解析：PPT第54页例13创建after delete触发器stu_delete，触发器体中delete from score where studentno=old.studentno，实现删除学生记录时级联删除其成绩。故选A。",
      54),
    s("ch7-ppt-s44",
      "例14在de_teacher表上创建before insert和after insert两个触发器，向de_teacher插入一行数据后，bef_after表中两条记录出现的先后顺序是（ ）。",
      ["A. after触发器写入的记录在前", "B. before触发器写入的记录在前",
       "C. 两条记录顺序随机", "D. 只出现before触发器的记录"],
      "B",
      "解析：PPT第47页、第56页表明触发器执行顺序为before触发器、表数据修改、after触发器，故before_insert先向bef_after写入记录，after_insert后写入。故选B。",
      55),
    b("ch7-ppt-b24",
      "触发程序中如果包含select语句，该select语句不能返回____。",
      ["结果集"],
      "解析：PPT第57页“使用触发器的注意事项”指出，触发程序中如果包含select语句，该select语句不能返回结果集。",
      57),
    s("ch7-ppt-s45",
      "关于触发器与事务的原子性，下列说法正确的是（ ）。",
      ["A. MyISAM存储引擎中触发器能保证原子性",
       "B. InnoDB存储引擎支持事务，使用触发器可以保证更新操作与触发程序的原子性",
       "C. MyISAM和InnoDB都能保证触发器原子性",
       "D. 触发器与原子性没有任何关系"],
      "B",
      "解析：PPT第57页指出，在MyISAM存储引擎中触发器不能保证原子性；InnoDB存储引擎支持事务，使用触发器可以保证更新操作与触发程序的原子性。故选B。",
      57),
    s("ch7-ppt-s46",
      "使用触发器维护InnoDB外键约束的级联选项时，正确的做法是（ ）。",
      ["A. 先维护父表的数据，再维护子表的数据", "B. 首先维护子表的数据，然后再维护父表的数据",
       "C. 父表与子表必须同时维护", "D. 只维护父表数据即可"],
      "B",
      "解析：PPT第58页指出，应首先维护子表的数据，然后再维护父表的数据，否则可能出现错误。故选B。",
      58),
    b("ch7-ppt-b25",
      "在before触发程序中，auto_increment字段的new值为____。",
      ["0"],
      "解析：PPT第58页指出，在before触发程序中，auto_increment字段的new值为0，不是实际插入新记录时自动生成的自增型字段值。",
      58),
]

# ---------------- 3.4 删除触发器 ----------------
NEW += [
    s("ch7-ppt-s47",
      "删除触发器的基本形式是（ ）。",
      ["A. drop trigger [schema_name.]trigger_name", "B. delete trigger trigger_name",
       "C. drop procedure trigger_name", "D. alter trigger trigger_name"],
      "A",
      "解析：PPT第59页指出，MySQL使用drop trigger语句删除触发器，基本形式为drop trigger [schema_name.]trigger_name。故选A。",
      59),
    s("ch7-ppt-s48",
      "删除名为stu_score的触发器，正确的语句是（ ）。",
      ["A. delete trigger stu_score;", "B. drop trigger stu_score;",
       "C. drop trigger where name='stu_score';", "D. remove trigger stu_score;"],
      "B",
      "解析：PPT第59页删除触发器的示例为mysql> drop trigger stu_score;。故选B。",
      59),
    b("ch7-ppt-b26",
      "MySQL使用drop ____语句来删除数据库中已经存在的触发器。",
      ["trigger", "TRIGGER"],
      "解析：PPT第59页指出，MySQL使用drop trigger语句来删除触发器。",
      59),
]

# ---------------- 4.1 认识事件 ----------------
NEW += [
    s("ch7-ppt-s49",
      "与操作系统的计划任务相比，MySQL事件调度器的优势是（ ）。",
      ["A. 可以精确到每秒钟执行一个任务", "B. 只能精确到每分钟执行一次",
       "C. 不需要开启即可创建事件", "D. 一个事件只能执行一次"],
      "A",
      "解析：PPT第61页指出，MySQL的事件调度器可以精确到每秒钟执行一个任务，而操作系统的计划任务只能精确到每分钟执行一次，因此有实时优势。故选A。",
      61),
    b("ch7-ppt-b27",
      "查看当前是否已开启事件调度器，可执行select @@____;",
      ["event_scheduler", "EVENT_SCHEDULER"],
      "解析：PPT第63页指出，可用show variables like 'event_scheduler';或select @@event_scheduler;查看事件调度器是否开启。",
      63),
]

# ---------------- 4.2 创建事件 ----------------
NEW += [
    s("ch7-ppt-s50",
      "在MySQL中创建事件应使用的语句是（ ）。",
      ["A. create event", "B. create schedule", "C. create task", "D. create job"],
      "A",
      "解析：PPT第64页指出，创建事件可以使用create event语句，语法为create event [if not exists] event_name on schedule schedule … do sql_statement;。故选A。",
      64),
    s("ch7-ppt-s51",
      "在create event的schedule子句中，at子句与every子句的含义分别是（ ）。",
      ["A. at表示周期性发生，every表示某时刻发生",
       "B. at表示事件在某个时刻发生，every表示在指定时间区间内每隔多久发生一次",
       "C. 两者都表示事件在某个时刻发生",
       "D. 两者都表示事件周期性发生"],
      "B",
      "解析：PPT第65页指出，at子句表示事件在某个时刻发生，后面可加时间间隔；every子句表示在指定时间区间内每隔多长时间事件发生一次。故选B。",
      65),
    s("ch7-ppt-s52",
      "例16创建的direct2事件使用on schedule at current_timestamp + interval 5 second，其含义是（ ）。",
      ["A. 立即执行", "B. 5秒后执行", "C. 5分钟后执行", "D. 每天5点执行"],
      "B",
      "解析：PPT第66页例16指出，at current_timestamp + interval 5 second表示在5秒后创建一个表test2。故选B。",
      66),
    s("ch7-ppt-s53",
      "例17创建的事件test1_insert使用on schedule every 1 second，其功能是（ ）。",
      ["A. 每秒向test1表插入一条记录", "B. 每分钟向test1表插入一条记录",
       "C. 每秒清空test1表", "D. 每周统计一次test1表"],
      "A",
      "解析：PPT第67页例17创建test1_insert，on schedule every 1 second，do子句为insert into test1 values(current_timestamp)，即每秒插入一条记录。故选A。",
      67),
    b("ch7-ppt-b28",
      "例18中语句 every 1 week ____ curdate()+interval 1 week ends '2021-08-31 12:00:00'，空格处应填____。",
      ["starts", "STARTS"],
      "解析：PPT第68页例18用starts子句指定开始时间、ends子句指定结束时间，语句为starts curdate()+interval 1 week。",
      68),
    s("ch7-ppt-s54",
      "例19在事件stu_week中调用存储过程proc_stu()，do子句中应使用的语句是（ ）。",
      ["A. call teaching.proc_stu();", "B. exec teaching.proc_stu;",
       "C. select teaching.proc_stu();", "D. run teaching.proc_stu();"],
      "A",
      "解析：PPT第69页例19在begin…end复合结构中用call teaching.proc_stu();调用存储过程。故选A。",
      69),
]

# ---------------- 4.3 管理事件 ----------------
NEW += [
    s("ch7-ppt-s55",
      "要查看数据库中的所有事件，可以使用（ ）语句。",
      ["A. show events", "B. show triggers", "C. show procedure status", "D. show create database"],
      "A",
      "解析：PPT第70页指出，查看所有事件的语法为show events [from schema_name] [like 'pattern'|where expr]，也可用show events\\G格式化显示。故选A。",
      70),
    s("ch7-ppt-s56",
      "关于alter event语句，下列说法正确的是（ ）。",
      ["A. 只能修改事件的名称",
       "B. 可以修改时间调度、重命名事件、添加注释以及临时enable/disable事件",
       "C. 只能用于删除事件",
       "D. 不能临时关闭一个事件"],
      "B",
      "解析：PPT第71页指出，alter event可修改事件的时间调度、重命名、注释以及enable/disable状态，例21即演示了关闭、开启、改调度周期、重命名并加注释。故选B。",
      71),
    b("ch7-ppt-b29",
      "临时关闭事件test1_insert的语句是alter event test1_insert ____;",
      ["disable", "DISABLE"],
      "解析：PPT第72页例21中临时关闭test1_insert事件的语句为alter event test1_insert disable;。",
      72),
    b("ch7-ppt-b30",
      "把事件test1_insert重命名为insert_test1，使用alter event test1_insert ____ to insert_test1;",
      ["rename", "RENAME"],
      "解析：PPT第72页例21中重命名事件的语句为alter event test1_insert rename to insert_test1 comment '表test1的数据操作';。",
      72),
]


def main():
    with open(SRC, "r", encoding="utf-8") as f:
        data = json.load(f)

    add = json.loads(json.dumps(NEW, ensure_ascii=False))
    new_ids = {q["id"] for q in add}

    # 可重复运行：先移除上次追加的新题，保留原题
    old = [q for q in data["questions"] if q["id"] not in new_ids]
    old_ids = {q["id"] for q in old}
    for q in add:
        if q["id"] in old_ids:
            raise SystemExit("id 冲突：%s" % q["id"])

    balance(add)

    data["questions"] = old + add

    with open(SRC, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print("原题 %d 道，新增 %d 道，合计 %d 道" % (len(old), len(add), len(data["questions"])))


def balance(add):
    """把单选题正确答案均匀分布到 A/B/C/D（固定种子，结果可复现），同步改选项与解析。"""
    import random
    import re

    singles = [q for q in add if q["type"] == "single"]
    letters = ["A", "B", "C", "D"] * (len(singles) // 4 + 1)
    letters = letters[:len(singles)]
    rnd = random.Random(20261124)
    for _ in range(50):
        rnd.shuffle(letters)
        if all(letters[i] != letters[i + 1] for i in range(len(letters) - 1)):
            break

    skip = {"ch7-ppt-s15"}  # 数值型选项保持升序
    for q, target in zip(singles, letters):
        if q["id"] in skip or q["answer"] == target:
            continue
        ci = "ABCD".index(q["answer"])
        texts = [o[3:] for o in q["options"]]
        correct = texts[ci]
        rest = [t for i, t in enumerate(texts) if i != ci]
        ti = "ABCD".index(target)
        texts = rest[:ti] + [correct] + rest[ti:]
        q["options"] = ["%s. %s" % ("ABCD"[i], t) for i, t in enumerate(texts)]
        q["analysis"] = re.sub(r"故选[A-D]。", "故选%s。" % target, q["analysis"], count=1)
        q["answer"] = target



if __name__ == "__main__":
    main()
