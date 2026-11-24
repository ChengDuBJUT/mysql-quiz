# -*- coding: utf-8 -*-
"""为 ch04.json 追加新题（保留原题不动）。"""
import json, io, os, copy

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'source', 'ch04.json')

# 每题: (章节, 知识点term, dict)
EXIST_SINGLE_ANSWERS = ["B", "A", "A", "B", "B", "C", "B", "A"]

NEW = [
    # ================= 1 基本查询语句（points: select语句/查询所有列/指定列/多表查询） =================
    ("1", "select语句", dict(
        type="single",
        stem="select语句的基本语法格式中，用于限制查询结果数量的子句是？",
        options=["A. where", "B. group by", "C. having", "D. limit"],
        answer="D",
        analysis="解析：PPT第4页给出的语法格式为 select … from … [group by …][having …][order by …][limit count]，其中 limit 用于限制返回的记录数量。",
        page=4)),
    ("1", "指定列", dict(
        type="single",
        stem="查询表中的指定列时，select后面多个列名之间应使用什么分隔？",
        options=["A. 分号", "B. 逗号", "C. 空格", "D. 冒号"],
        answer="B",
        analysis="解析：PPT第6页指出对表中多列进行查询，只要在select后面指定要查询的列名，多列之间用“，”分隔。",
        page=6)),
    ("1", "多表查询", dict(
        type="blank",
        stem="进行多表查询，主要采用多表连接或____的方式，也可以在where子句中使用连接运算来确定表之间的联系。",
        answer=["子查询", "subquery", "嵌套查询"],
        answerText="子查询",
        analysis="解析：PPT第7页指出多表查询主要采用多表连接或子查询的方式，也可通过where子句中的连接运算确定表间联系。",
        page=7)),

    # ================= 2.1 select……from 基本子句（Select与from/字段别名/distinct/应用示例） =================
    ("2.1", "Select与from", dict(
        type="single",
        stem="在select……from语句中，指定数据源的子句是？",
        options=["A. select", "B. from", "C. where", "D. order by"],
        answer="B",
        analysis="解析：PPT第9页指出select子句的主要功能是输出字段或表达式的值，from子句的主要功能是指定数据源，两者在表查询时都是必选项。",
        page=9)),
    ("2.1", "字段别名", dict(
        type="single",
        stem="为select子句中的输出项取别名，正确的语法格式是？",
        options=["A. select 别名 as 项的原名", "B. select 项的原名 as 别名", "C. select 项的原名 like 别名", "D. select 别名 to 项的原名"],
        answer="B",
        analysis="解析：PPT第9页给出的语法为“select 项的原名 as 别名”，用于为输出字段或表达式取别名以增加可读性。",
        page=9)),
    ("2.1", "应用示例", dict(
        type="blank",
        stem="例3中用 year(now())-year(birthdate) 计算得到的是学生的____。",
        answer=["年龄", "岁数"],
        answerText="年龄",
        analysis="解析：PPT第10页例3查询2002年以后出生的学生的学号、姓名、电话和年龄，其中 year(now())-year(birthdate) 即用当前年份减去出生年份得到年龄。",
        page=10)),

    # ================= 2.2 where 子句（7 个点） =================
    ("2.2", "where子句", dict(
        type="single",
        stem="使用where子句设定查询条件时，需要借助什么来确定查询条件？",
        options=["A. 聚合函数", "B. 比较运算符", "C. 通配符", "D. 排序项"],
        answer="B",
        analysis="解析：PPT第13页指出设定查询条件应用的是where子句，使用where子句时需要使用一些比较运算符来确定查询条件。",
        page=13)),
    ("2.2", "in查询", dict(
        type="single",
        stem="关于in关键字，下列说法正确的是？",
        options=["A. 相当于用and连接两个比较条件", "B. 相当于用or连接两个比较条件", "C. 只能用于数值型字段", "D. 不能与not连用"],
        answer="B",
        analysis="解析：PPT第14页指出使用in搜索条件实际上相当于用or连接两个比较条件，并可用not in查询不在某范围内的记录。",
        page=14)),
    ("2.2", "between and", dict(
        type="single",
        stem="条件 daily between 80 and 95 与下列哪个条件等价？",
        options=["A. daily>80 and daily<95", "B. daily>=80 and daily<=95", "C. daily>=80 or daily<=95", "D. daily>80 or daily<95"],
        answer="B",
        analysis="解析：PPT第15页指出between搜索条件相当于用and连接两个比较条件，且边界值是符合条件的，故等价于 daily>=80 and daily<=95。",
        page=15)),
    ("2.2", "between and", dict(
        type="blank",
        stem="使用between搜索条件相当于用____连接两个比较条件，并且边界值是符合条件的。",
        answer=["and", "AND"],
        answerText="and",
        analysis="解析：PPT第15页指出使用between搜索条件相当于用and连接两个比较条件，边界值符合条件。",
        page=15)),
    ("2.2", "like查询", dict(
        type="single",
        stem="要查询的字符串本身含有通配符时，用来对通配符进行转义的关键字是？",
        options=["A. escape", "B. like", "C. regexp", "D. distinct"],
        answer="A",
        analysis="解析：PPT第16页指出如果要查询的字符串本身就含有通配符，需要用ESCAPE关键字对通配符进行转义，如 like '%/_%' escape '/'。",
        page=16)),
    ("2.2", "is null", dict(
        type="single",
        stem="在where子句中判断某列取值是否为空值，正确的写法是？",
        options=["A. 字段=null", "B. 字段<>null", "C. 字段 is null", "D. 字段 like null"],
        answer="C",
        analysis="解析：PPT第18页指出空值要表示为“is null”或“is not null”，写成“字段=null”或“字段<>null”会被直接处理为null值并按false处理。",
        page=18)),
    ("2.2", "and多条件", dict(
        type="blank",
        stem="利用where子句指定行时，条件表达式中的字符型和日期类型值要放到____内，数值类型的值直接出现在表达式中。",
        answer=["单引号", "'", "单引号'"],
        answerText="单引号",
        analysis="解析：PPT第20页指出and多条件查询中，字符型和日期类型值要放到单引号内，数值类型值直接出现。",
        page=20)),
    ("2.2", "or多条件", dict(
        type="single",
        stem="关于带or的多条件查询，下列说法正确的是？",
        options=["A. 必须所有条件都满足，记录才会被查询出来", "B. 只要满足其中一个条件，记录就会被查询出来", "C. or只能连接两个条件表达式", "D. or不能与and同时使用"],
        answer="B",
        analysis="解析：PPT第21页指出带or的多条件查询只要符合多条件中的一个，记录就会被搜索出来；or也可以连接多个条件表达式。",
        page=21)),

    # ================= 2.3 order by（order by/null排序/注意事项/多列排序） =================
    ("2.3", "null排序", dict(
        type="single",
        stem="对含有null值的列按升序排列，null值将出现在结果集的什么位置？",
        options=["A. 最前面", "B. 最后面", "C. 随机位置", "D. 不显示"],
        answer="A",
        analysis="解析：PPT第22页指出对含null值的列排序时，按升序排列null值出现在最前面，按降序排列null值出现在最后。",
        page=22)),
    ("2.3", "注意事项", dict(
        type="blank",
        stem="order by子句包含的列____（一定/不一定）出现在选择列表中。",
        answer=["不一定", "不一定要", "不必"],
        answerText="不一定",
        analysis="解析：PPT第22页第（2）条指出order by子句包含的列并不一定出现在选择列表中。",
        page=22)),
    ("2.3", "注意事项", dict(
        type="blank",
        stem="order by子句不可以使用____、ntext或image类型的列进行排序。",
        answer=["text", "TEXT", "文本"],
        answerText="text",
        analysis="解析：PPT第22页第（4）条指出order by子句不可以使用text、ntext或image类型的列。",
        page=22)),
    ("2.3", "多列排序", dict(
        type="blank",
        stem="order by courseno, daily*0.2+final*0.8 desc 表示先按课程号升序排列，课程号相同时再按总评成绩____排列。",
        answer=["降序", "desc", "DESC"],
        answerText="降序",
        analysis="解析：PPT第24页例13先按课程号升序、再按总评成绩降序排列，第二个排序项后带desc即为降序。",
        page=24)),

    # ================= 2.4 limit（limit/参数含义/中间取值） =================
    ("2.4", "limit", dict(
        type="single",
        stem="limit子句的主要作用是？",
        options=["A. 对结果集排序", "B. 限制查询结果的数量", "C. 对结果集分组", "D. 去掉重复行"],
        answer="B",
        analysis="解析：PPT第25页指出limit是用来限制查询结果的数量的子句，可指定从哪条记录开始显示以及一共显示多少条记录。",
        page=25)),
    ("2.4", "参数含义", dict(
        type="single",
        stem="limit子句的两个参数中，参数1表示的是？",
        options=["A. 要查询记录的个数", "B. 开始读取的第1条记录的编号", "C. 排序的列号", "D. 分组的个数"],
        answer="B",
        analysis="解析：PPT第25页指出参数1是开始读取的第1条记录的编号，参数2是要查询记录的个数。",
        page=25)),
    ("2.4", "参数含义", dict(
        type="blank",
        stem="使用limit时要注意，在总查询结果中第1条记录的编号为____。",
        answer=["0", "零"],
        answerText="0",
        analysis="解析：PPT第25页特别提示：在总查询结果中，第1条记录编号为0。",
        page=25)),
    ("2.4", "中间取值", dict(
        type="single",
        stem="select * from score where final>85 order by daily asc limit 2,5 的含义是？",
        options=["A. 从编号2开始查询5条记录", "B. 查询第2条到第5条共4条记录", "C. 从编号5开始查询2条记录", "D. 只查询前5条中的第2条"],
        answer="A",
        analysis="解析：PPT第26页例15从编号2开始查询5条记录，limit的两个参数分别是起始编号和记录个数。",
        page=26)),

    # ================= 3.1 聚合函数（7 个点） =================
    ("3.1", "group by配合", dict(
        type="single",
        stem="group by关键字通常需要与什么一起使用？",
        options=["A. 聚合函数", "B. order by子句", "C. limit子句", "D. union操作符"],
        answer="A",
        analysis="解析：PPT第28页指出group by关键字通常需要与聚合函数一起使用。",
        page=28)),
    ("3.1", "count(*)优化", dict(
        type="blank",
        stem="没有where子句的count(*)是经过内部____的，能够快速返回表中所有的记录总数。",
        answer=["优化", "优化处理"],
        answerText="优化",
        analysis="解析：PPT第29页指出没有where子句的count(*)经过内部优化，能快速返回表中所有记录总数。",
        page=29)),
    ("3.1", "count()", dict(
        type="single",
        stem="关于count()函数，下列说法正确的是？",
        options=["A. count(*)只统计非null值的行", "B. count(列名)统计包含null值的所有行", "C. count(*)统计所有行，包含null值的行", "D. count()不能用于统计行数"],
        answer="C",
        analysis="解析：PPT第29页指出对除“*”以外的参数返回非null值的行数，对参数“*”返回所有行的数目，包含null值的行。",
        page=29)),
    ("3.1", "sum()和avg()", dict(
        type="single",
        stem="要求出表中某个字段取值的总和，应使用哪个函数？",
        options=["A. count()", "B. sum()", "C. avg()", "D. max()"],
        answer="B",
        analysis="解析：PPT第30页指出sum()函数可以求出表中某个字段取值的总和，avg()求平均值。",
        page=30)),
    ("3.1", "max()和min()", dict(
        type="single",
        stem="要查询某门课程期末最高分与最低分之差，正确的表达式是？",
        options=["A. max(final)+min(final)", "B. max(final)-min(final)", "C. avg(final)-min(final)", "D. count(final)-min(final)"],
        answer="B",
        analysis="解析：PPT第31页例18用 max(final)-min(final) as 分差 求最高分与最低分之间相差的分数。",
        page=31)),
    ("3.1", "sql_mode", dict(
        type="blank",
        stem="重新设置sql_mode时，需要去掉的模式是 ONLY_FULL_GROUP_BY，即把该项从sql_mode取值中____。",
        answer=["删除", "去掉", "移除"],
        answerText="删除",
        analysis="解析：PPT第32页指出可重新设置sql_mode的值，去掉ONLY_FULL_GROUP_BY，再给出新的取值列表。",
        page=32)),

    # ================= 3.2 group by（6 个点） =================
    ("3.2", "group by", dict(
        type="single",
        stem="group by子句的作用是？",
        options=["A. 对查询结果排序", "B. 将查询结果按属性列或属性列组合在行的方向上进行分组", "C. 限制返回记录的数量", "D. 合并多个结果集"],
        answer="B",
        analysis="解析：PPT第33页指出group by子句可以将查询结果按属性列或属性列组合在行的方向上进行分组，每组在这些列上具有相同的值。",
        page=33)),
    ("3.2", "列的要求", dict(
        type="single",
        stem="使用group by子句时，出现在select列表中的每一列必须？",
        options=["A. 同时出现在group by子句中", "B. 都使用聚合函数", "C. 都取别名", "D. 都是数值类型"],
        answer="A",
        analysis="解析：PPT第33页指出出现在查询的select列表中的每一列都必须同时出现在group by子句中。",
        page=33)),
    ("3.2", "单独使用", dict(
        type="blank",
        stem="单独使用group by关键字时，查询结果只显示每组的____条记录。",
        answer=["一", "1", "一条"],
        answerText="一",
        analysis="解析：PPT第33页指出单独使用group by关键字，查询结果只显示每组的一条记录。",
        page=33)),
    ("3.2", "group_concat", dict(
        type="single",
        stem="group by与group_concat()函数一起使用时，可以实现什么效果？",
        options=["A. 将每个组中的所有字段值都显示出来", "B. 统计每个组的行数", "C. 求每组字段的最大值", "D. 删除重复的组"],
        answer="A",
        analysis="解析：PPT第35页指出group by与group_concat()函数一起使用，可以将每个组中的所有字段值都显示出来，如查看选学某门课的学生学号。",
        page=35)),
    ("3.2", "having", dict(
        type="single",
        stem="关于having子句，下列说法正确的是？",
        options=["A. 指定在应用where子句筛选后要进一步应用的筛选", "B. 只能用于单表查询", "C. 与where完全等价，可随意替换", "D. 必须与order by一起使用"],
        answer="A",
        analysis="解析：PPT第36页指出having子句通常与group by结合使用，指定在应用where子句的筛选后要进一步应用的筛选。",
        page=36)),
    ("3.2", "with rollup", dict(
        type="blank",
        stem="要在分组统计数据的基础上再进行相同的总体统计，应在group by子句后加上 with ____。",
        answer=["rollup", "ROLLUP"],
        answerText="rollup",
        analysis="解析：PPT第38页指出with rollup可以在分组的统计数据基础上再进行相同的总体统计，如既求每门课平均值又求全部成绩平均值。",
        page=38)),

    # ================= 3.3 窗口函数（6 个点） =================
    ("3.3", "窗口函数分类", dict(
        type="single",
        stem="按照功能划分，MySQL 8.0支持的窗口函数可分为几类？",
        keep_order=True,
        options=["A. 3类", "B. 4类", "C. 5类", "D. 6类"],
        answer="C",
        analysis="解析：PPT第40页指出按照功能划分，可以把MySQL8.0支持的窗口函数分为5类。",
        page=40)),
    ("3.3", "一般格式", dict(
        type="single",
        stem="窗口函数的一般格式是？",
        options=[
            "A. window_function_name(expression) over([partition_defintion] [order_definition] [frame_definition])",
            "B. window_function_name(expression) group by(...)",
            "C. window_function_name(expression) join(...)",
            "D. window_function_name(expression) having(...)"],
        answer="A",
        analysis="解析：PPT第41页给出窗口函数一般格式：window_function_name(expression) over([partition_defintion] [order_definition] [frame_definition])。",
        page=41)),
    ("3.3", "over", dict(
        type="single",
        stem="窗口函数中，用来指定函数执行的窗口范围的关键字是？",
        options=["A. over", "B. partition", "C. frame", "D. window"],
        answer="A",
        analysis="解析：PPT第41页指出over是关键字，用来指定函数执行的窗口范围，括号中什么都不写表示窗口包含满足where条件的所有行。",
        page=41)),
    ("3.3", "over", dict(
        type="blank",
        stem="窗口函数中over后面括号内什么都不写，表示窗口包含满足____条件的所有行，函数基于所有行进行计算。",
        answer=["where", "WHERE"],
        answerText="where",
        analysis="解析：PPT第41页指出over括号中什么都不写，则表示窗口包含满足where条件的所有行。",
        page=41)),
    ("3.3", "partition子句", dict(
        type="single",
        stem="窗口函数中partition子句的作用是？",
        options=["A. 指定窗口按哪些字段分组，窗口函数在不同分组上分别执行", "B. 对结果集排序", "C. 限制分组的数量", "D. 合并多个分组"],
        answer="A",
        analysis="解析：PPT第41页指出partition子句指定窗口按照哪些字段进行分组，窗口函数在不同的分组上分别执行。",
        page=41)),
    ("3.3", "order by与frame", dict(
        type="blank",
        stem="窗口函数中frame是当前分区的一个子集，用来定义子集的规则，通常用来作为____窗口使用。",
        answer=["滑动", "滑动窗口"],
        answerText="滑动",
        analysis="解析：PPT第41页指出frame是当前分区的一个子集，其子句用来定义子集的规则，通常用来作为滑动窗口使用。",
        page=41)),
    ("3.3", "应用示例", dict(
        type="single",
        stem="select *, rank() over w as 'rank' from score window w as (order by final) 中rank()输出的是什么？",
        options=["A. 记录的行号", "B. 按final排序后的序号", "C. 每名学生的总分", "D. 每门课的平均分"],
        answer="B",
        analysis="解析：PPT第42页例23利用rank()函数输出按照final排序的记录行序数值，窗口w定义为 order by final。",
        page=42)),
    ("3.3", "应用示例", dict(
        type="blank",
        stem="例26中 lag(studentno,3) over ww2 用于输出每行数据的前____行的学号。",
        answer=["3", "三"],
        answerText="3",
        analysis="解析：PPT第45页例26利用lag()输出每行数据的前3行的学号，lag的第二个参数3表示偏移3行。",
        page=45)),

    # ================= 4 多表连接（4 个点） =================
    ("4", "连接", dict(
        type="single",
        stem="要在数据库中完成复杂的查询，必须怎么做？",
        options=["A. 只查询一个表", "B. 将两个或两个以上的表连接起来", "C. 只使用子查询", "D. 先为所有表建立索引"],
        answer="B",
        analysis="解析：PPT第46页指出要在数据库中完成复杂的查询，必须将两个或两个以上的表连接起来。",
        page=46)),
    ("4", "连接条件", dict(
        type="blank",
        stem="连接条件可在____或where子句中指定，并与where、having搜索条件组合控制选定的行。",
        answer=["from", "FROM"],
        answerText="from",
        analysis="解析：PPT第46页指出连接条件可在from或where子句中指定。",
        page=46)),
    ("4", "字段要求", dict(
        type="single",
        stem="连接条件中用到的字段数据类型不相同时，必须满足什么要求？",
        options=["A. 必须完全相同", "B. 必须兼容或可进行隐性转换", "C. 必须都是字符型", "D. 必须都是数值型"],
        answer="B",
        analysis="解析：PPT第47页指出连接字段不必同名或同类型，但如果数据类型不相同，则必须兼容或可进行隐性转换。",
        page=47)),
    ("4", "连接关键字", dict(
        type="single",
        stem="下列关键字中，表示交叉连接的是？",
        options=["A. inner join", "B. left outer join", "C. right outer join", "D. cross join"],
        answer="D",
        analysis="解析：PPT第47页列出显式连接关键字：inner join、left outer join、right outer join和cross join，其中cross join为交叉连接。",
        page=47)),

    # ================= 4.1 内连接 =================
    ("4.1", "内连接", dict(
        type="single",
        stem="内连接（inner join）是通过比较什么从多个源表检索符合条件的行？",
        options=["A. 表名", "B. 数据源表间共享列的值", "C. 索引的个数", "D. 主键的类型"],
        answer="B",
        analysis="解析：PPT第49页指出内连接查询是通过比较数据源表间共享列的值，从多个源表检索符合条件的行的操作。",
        page=49)),
    ("4.1", "示例", dict(
        type="single",
        stem="select … from student inner join score on student.studentno=score.studentno 中，on后面跟的是？",
        options=["A. 排序条件", "B. 连接条件", "C. 分组字段", "D. 限制的记录条数"],
        answer="B",
        analysis="解析：PPT第49页例27在on后面给出 student.studentno=score.studentno 这一连接条件，where再给出课程号筛选条件。",
        page=49)),
    ("4.1", "where实现", dict(
        type="single",
        stem="不使用inner join，要实现与内连接相同的查询结果，可以采用什么方式？",
        options=["A. 直接通过where子句的复合条件查询", "B. 使用cross join", "C. 使用union", "D. 使用limit"],
        answer="A",
        analysis="解析：PPT第50页指出还有一种方法，就是直接通过where子句的复合条件查询，可以实现与内连接同样的结果。",
        page=50)),
    ("4.1", "where实现", dict(
        type="blank",
        stem="select … from student,score where student.studentno=score.studentno and score.courseno='c05109' 这种写法可以实现与____连接同样的结果。",
        answer=["内", "inner", "内连接"],
        answerText="内",
        analysis="解析：PPT第50页指出用where子句的复合条件查询可以实现与内连接同样的结果。",
        page=50)),

    # ================= 4.2 外连接 =================
    ("4.2", "外连接", dict(
        type="single",
        stem="外连接返回的结果集有什么特点？",
        options=["A. 只包含两个表中完全匹配的行", "B. 包括满足搜索条件的连接表中的所有行，甚至包括在其他连接表中没有匹配行的表中的行", "C. 只包含左表的数据", "D. 一定是两个表的笛卡儿积"],
        answer="B",
        analysis="解析：PPT第51页指出外连接包括满足搜索条件的连接表中的所有行，甚至包括在其他连接表中没有匹配行的一个表中的行。",
        page=51)),
    ("4.2", "null值", dict(
        type="single",
        stem="外连接中，当一个表中的行与其他表中的行不匹配时，为不存在相应行的表的所有结果集列提供什么值？",
        options=["A. 0", "B. 空字符串", "C. null", "D. false"],
        answer="C",
        analysis="解析：PPT第51页指出当一个表中的行与其他表中的行不匹配时，为解析为不存在相应行的表的所有结果集列提供null值。",
        page=51)),
    ("4.2", "左外连接", dict(
        type="single",
        stem="左外连接返回的结果是？",
        options=["A. 只返回两表匹配的行", "B. 内连接的数据加上左表中不符合条件的数据，并在右表相应列添加null值", "C. 只返回左表的所有数据", "D. 返回两个表的笛卡儿积"],
        answer="B",
        analysis="解析：PPT第52页指出左外连接返回的结果除内连接的数据外，还包括左表中不符合条件的数据，并在右表的相应列中添加null值。",
        page=52)),
    ("4.2", "右外连接", dict(
        type="blank",
        stem="右外连接中包含join子句中最右侧表的所有行，如果右侧表中的行与左侧表中的行不匹配，则为结果集中来自左侧表的所有列分配____值。",
        answer=["null", "NULL", "空"],
        answerText="null",
        analysis="解析：PPT第54页指出右外连接包含join子句中最右侧表的所有行，不匹配时左侧表的所有列分配null值。",
        page=54)),

    # ================= 4.3 交叉连接 =================
    ("4.3", "交叉连接", dict(
        type="blank",
        stem="交叉连接（cross join）是在没有where子句的情况下产生的表的____。",
        answer=["笛卡儿积", "笛卡尔积"],
        answerText="笛卡儿积",
        analysis="解析：PPT第55页指出交叉连接是在没有where子句的情况下产生的表的笛卡儿积。",
        page=55)),
    ("4.3", "结果集", dict(
        type="single",
        stem="student表有100行数据，score表有20行数据，两表作交叉连接后结果集的行数是？",
        keep_order=True,
        options=["A. 120", "B. 80", "C. 2000", "D. 100"],
        answer="C",
        analysis="解析：PPT第55页指出两个表作交叉连接时结果集大小为二者行数之积，即100×20=2000行。",
        page=55)),
    ("4.3", "结果集", dict(
        type="blank",
        stem="两个表作交叉连接时，结果集大小为二者行数之____。",
        answer=["积", "乘积"],
        answerText="积",
        analysis="解析：PPT第55页指出交叉连接的结果集大小为两个表行数之积，例30中384行即为两表行数的乘积。",
        page=55)),
    ("4.3", "应用注意", dict(
        type="blank",
        stem="交叉连接虽然可以产生笛卡儿积，但该种方式在实际过程中用得____。",
        answer=["很少", "比较少"],
        answerText="很少",
        analysis="解析：PPT第55页指出交叉连接这种连接方式在实际过程中用的很少。",
        page=55)),

    # ================= 4.4 连接多个表 =================
    ("4.4", "连接表数目", dict(
        type="single",
        stem="在一条select语句中连接的表多于多少个时，数据库很可能达不到最优化设计？",
        keep_order=True,
        options=["A. 5个", "B. 8个", "C. 10个", "D. 20个"],
        answer="C",
        analysis="解析：PPT第56页指出连接的表多于10个时，数据库就很可能达不到最优化设计，MySQL引擎的执行计划会变得非常繁琐。",
        page=56)),
    ("4.4", "连接条件数", dict(
        type="single",
        stem="连接3个表至少需要几个连接条件才能避免笛卡儿积？",
        keep_order=True,
        options=["A. 1个", "B. 2个", "C. 3个", "D. 4个"],
        answer="B",
        analysis="解析：PPT第56页指出连接n个表至少需要n-1个连接条件，3个表即至少需要2个连接条件。",
        page=56)),
    ("4.4", "应用示例", dict(
        type="single",
        stem="例31中 round(period/16,1) 计算的是？",
        options=["A. 学费", "B. 学分（每16学时计为1学分）", "C. 总学时", "D. 平均成绩"],
        answer="B",
        analysis="解析：PPT第57页例31要求查询20级学生的学号、姓名、课程名、期末成绩及学分，规定每16个学时计为1学分，故用period/16计算学分。",
        page=57)),

    # ================= 4.5 合并多个结果集 =================
    ("4.5", "使用要求", dict(
        type="single",
        stem="使用union合并两个查询结果集时，必须满足什么要求？",
        options=["A. 两个查询的列数相同即可", "B. 所有查询中的列数和列的顺序必须相同且数据类型必须兼容", "C. 两个查询的表名必须相同", "D. 两个查询必须使用相同的索引"],
        answer="B",
        analysis="解析：PPT第58页指出使用union合并两个查询结果集时，所有查询中的列数和列的顺序必须相同且数据类型必须兼容。",
        page=58)),
    ("4.5", "语法格式", dict(
        type="single",
        stem="union all 与 union 的区别是？",
        options=["A. all将所有行合并到结果中包括重复行，不指定all则删除重复行", "B. all会删除重复行，union保留重复行", "C. 二者完全等价", "D. all只能用于两个以上的表"],
        answer="A",
        analysis="解析：PPT第58页指出All将所有行合并到结果中，包括重复的行；如果不指定all，将删除重复的行。",
        page=58)),
    ("4.5", "语法格式", dict(
        type="blank",
        stem="使用 union 而不指定 all 时，结果集中的重复行将被____。",
        answer=["删除", "去掉", "去除"],
        answerText="删除",
        analysis="解析：PPT第58页指出union语法为 select_statement union [all] select_statement，不指定all时删除重复行。",
        page=58)),
    ("4.5", "应用示例", dict(
        type="single",
        stem="例32中两个查询用union合并时，各自的筛选条件分别是？",
        options=["A. phone like '%131%' 与 phone like '%132%'", "B. phone like '131%' 与 phone like '132%'", "C. sname like '%131%' 与 sname like '%132%'", "D. phone regexp '131' 与 phone regexp '132'"],
        answer="A",
        analysis="解析：PPT第59页例32对student01与student表分别用 phone like '%131%' 和 phone like '%132%' 筛选后再用union合并。",
        page=59)),

    # ================= 5 子查询 =================
    ("5", "子查询", dict(
        type="single",
        stem="下列关于子查询的说法，正确的是？",
        options=[
            "A. 子查询是嵌套在select、insert、update或delete语句或其他子查询中的查询",
            "B. 子查询只能出现在where子句中",
            "C. 子查询是一种视图对象",
            "D. 子查询是一种存储过程"],
        answer="A",
        analysis="解析：PPT第60页指出子查询就是一个嵌套在select、insert、update或delete语句或其他子查询中的查询，可把复杂查询分解成一系列逻辑步骤。",
        page=60)),
    ("5", "执行过程", dict(
        type="single",
        stem="非关联子查询的执行过程是？",
        options=["A. 从外层向内层逐层处理", "B. 从内层向外层处理", "C. 内外层并行执行", "D. 随机顺序执行"],
        answer="B",
        analysis="解析：PPT第60页指出MySQL对嵌套查询的处理过程是从内层向外层处理，先处理最内层子查询，再把结果用于外查询条件。",
        page=60)),
    ("5", "与连接关系", dict(
        type="single",
        stem="关于子查询与连接的关系，下列说法正确的是？",
        options=["A. 包含子查询的查询一般可写成连接查询，多表连接的性能有时优于子查询", "B. 连接查询一定比子查询慢", "C. 二者完全等价，性能也相同", "D. 子查询无法实现多表之间的查询"],
        answer="A",
        analysis="解析：PPT第60页指出包含子查询的查询语句一般可写成连接查询，有些方面多表连接的性能要优于子查询，因为连接不需要查询优化器执行排序等额外操作。",
        page=60)),
    ("5", "常见运算", dict(
        type="single",
        stem="下列哪一组运算符都可能出现在子查询中？",
        options=["A. in、not in、any、all、exists", "B. limit、order by、group by", "C. inner join、cross join", "D. create、drop、alter"],
        answer="A",
        analysis="解析：PPT第61页指出子查询中可能包括in、not in、any、all、exists、not exists等逻辑运算符，也可以包含=、!=、>、<等比较运算符。",
        page=61)),
    ("5", "四种类型", dict(
        type="blank",
        stem="返回一行或多行、但每行上只有一个值的子查询，属于____子查询。",
        answer=["列", "列子查询"],
        answerText="列",
        analysis="解析：PPT第61页指出返回一行或多行、但每行上只有一个值的是列子查询；只返回一个值的是标量子查询。",
        page=61)),
    ("5", "四种类型", dict(
        type="single",
        stem="只返回一个值的子查询属于哪种类型？",
        options=["A. 表子查询", "B. 行子查询", "C. 列子查询", "D. 标量子查询"],
        answer="D",
        analysis="解析：PPT第61页指出只返回一个值的是标量子查询，从定义上讲每个标量子查询都是一个列子查询和行子查询。",
        page=61)),
    ("5", "注意事项", dict(
        type="single",
        stem="使用子查询时，下列做法正确的是？",
        options=["A. 子查询不需要加括号", "B. 子查询可以嵌套多至32层", "C. 子查询可以检索text、blob类型的列", "D. 子查询中的order by可以在内层使用"],
        answer="B",
        analysis="解析：PPT第62页指出子查询需用括号括起来，嵌套可多至32层；不能检索text、blob、longtext或mediumblob列；order by只能在外层使用。",
        page=62)),
    ("5", "注意事项", dict(
        type="blank",
        stem="子查询使用order by时，只能在外层使用，不能在____使用。",
        answer=["内层", "子查询内部"],
        answerText="内层",
        analysis="解析：PPT第62页指出子查询使用order by时只能在外层使用，不能在内层使用。",
        page=62)),

    # ================= 5.1 子查询做表达式 =================
    ("5.1", "做表达式", dict(
        type="single",
        stem="把子查询的结果当成普通表达式用在外查询的选择条件中时，子查询必须？",
        options=["A. 返回一个值或单个列值列表", "B. 返回整张表的所有列", "C. 返回多个列的结果集", "D. 返回逻辑值true"],
        answer="A",
        analysis="解析：PPT第64页指出把子查询结果当普通表达式看待时，子查询必须返回一个值或单个列值列表。",
        page=64)),
    ("5.1", "替换in", dict(
        type="single",
        stem="子查询做表达式时，可以替换where子句中包含哪个关键字的表达式？",
        options=["A. like", "B. in", "C. between", "D. escape"],
        answer="B",
        analysis="解析：PPT第64页指出此时的子查询可以替换where子句中包含in关键字的表达式。",
        page=64)),
    ("5.1", "应用示例", dict(
        type="blank",
        stem="例33中 entrance-(select avg(entrance) from student) 计算的是该生入学成绩与所有学生平均入学成绩的____。",
        answer=["分差", "差值", "差额"],
        answerText="分差",
        analysis="解析：PPT第64页例33查询某学生的入学成绩、所有学生平均入学成绩及二者的分差，该表达式即为分差列。",
        page=64)),
    ("5.1", "应用示例", dict(
        type="blank",
        stem="例33中子查询 (select avg(entrance) from student) 的结果是所有学生的____入学成绩。",
        answer=["平均", "平均分"],
        answerText="平均",
        analysis="解析：PPT第64页例33中avg(entrance)求的是所有学生的平均入学成绩，作为平均成绩列输出。",
        page=64)),

    # ================= 5.2 派生表 =================
    ("5.2", "派生表", dict(
        type="single",
        stem="派生表指的是出现在哪个子句中的子查询？",
        options=["A. where子句", "B. from子句", "C. select列表", "D. having子句"],
        answer="B",
        analysis="解析：PPT第65页指出可以利用子查询生成一个派生表，用于替代from子句中的数据源表，即在from子句中使用子查询作为派生表数据源。",
        page=65)),
    ("5.2", "本质", dict(
        type="blank",
        stem="用子查询生成派生表时，派生表可以定义一个____，供外层查询引用其中的列。",
        answer=["别名", "表别名"],
        answerText="别名",
        analysis="解析：PPT第65页指出派生表可以定义一个别名，子查询的结果集作为外层查询的源表。",
        page=65)),
    ("5.2", "应用示例", dict(
        type="single",
        stem="例34中 from (select * from score where final>85) as TT 里的TT表示？",
        options=["A. 派生表的别名", "B. 字段名", "C. 关键字", "D. 列别名"],
        answer="A",
        analysis="解析：PPT第65页例34把期末成绩高于85分的结果集以TT命名，TT是派生表的别名，供外层查询引用。",
        page=65)),
    ("5.2", "应用示例", dict(
        type="blank",
        stem="例34中外层查询的 where TT.final*0.8+TT.daily*0.2>90 筛选出的是____成绩高于90分的学生。",
        answer=["总评", "总评成绩", "总评成绩（综合）"],
        answerText="总评",
        analysis="解析：PPT第65页例34要求查询期末成绩高于85分、总评成绩高于90分的学生，外层where条件即对总评成绩的筛选。",
        page=65)),

    # ================= 5.3 where 子句中的子查询 =================
    ("5.3", "where子查询", dict(
        type="single",
        stem="where子句中的子查询，其作用是？",
        options=["A. 把子查询的结果作为本语句条件的一部分，用来过滤本层查询的数据", "B. 生成一张新的永久表", "C. 直接修改数据源表的数据", "D. 为结果集排序"],
        answer="A",
        analysis="解析：PPT第66页指出where语句中的子查询实际上是将子查询的结果作为该语句条件中的一部分，然后利用这个条件过滤本层查询的数据。",
        page=66)),
    ("5.3", "比较运算符", dict(
        type="single",
        stem="创建关联子查询时，子查询的执行次数是？",
        options=["A. 固定执行1次", "B. 外部查询有多少行，子查询就执行多少次", "C. 等于子查询结果的行数", "D. 固定执行2次"],
        answer="B",
        analysis="解析：PPT第66页指出创建关联子查询时，外部查询有多少行，子查询就执行多少次。",
        page=66)),
    ("5.3", "in子查询", dict(
        type="single",
        stem="当子查询返回的结果集是值的列表时，应使用哪个运算符代替比较运算符？",
        options=["A. =", "B. in", "C. exists", "D. between"],
        answer="B",
        analysis="解析：PPT第68页指出假如一个子查询返回的结果集是值的列表，这时比较运算符就可以用in运算符代替。",
        page=68)),
    ("5.3", "exists子查询", dict(
        type="single",
        stem="使用exists关键字时，内层查询语句返回的是？",
        options=["A. 一条记录", "B. 一个逻辑值（true或false）", "C. 一张派生表", "D. 一个null值"],
        answer="B",
        analysis="解析：PPT第69页指出使用exists关键字时内层查询语句不返回查询的记录，而是返回一个逻辑值，查询到满足条件的记录返回true。",
        page=69)),
    ("5.3", "in子查询", dict(
        type="blank",
        stem="not in 的作用与 in 刚好____，用于查询不在指定值列表中的记录。",
        answer=["相反", "相反（互补）"],
        answerText="相反",
        analysis="解析：PPT第68页指出in运算符检测结果集中是否存在某个值，not in的作用与in刚好相反。",
        page=68)),
    ("5.3", "all/some/any", dict(
        type="single",
        stem="关于all与any（some），下列说法正确的是？",
        options=["A. all只要有一个值满足比较关系就返回true", "B. all要与子查询结果集中的每个值都比较且都满足才返回true，any满足某个值即返回true", "C. all与any完全等价", "D. any要求与每个值都比较且都满足"],
        answer="B",
        analysis="解析：PPT第71页指出all指定表达式要与子查询结果集中的每个值都进行比较，都满足才返回true；some或any只要与某个值满足比较关系就返回true。",
        page=71)),

    # ================= 5.4 子查询增删改 =================
    ("5.4", "插入记录", dict(
        type="single",
        stem="insert语句中使用select子查询的作用是？",
        options=["A. 只能插入一行数据", "B. 可将一个或多个其他表或视图的值添加到表中，并同时插入多行", "C. 只能创建新表", "D. 只能修改已有数据"],
        answer="B",
        analysis="解析：PPT第73页指出insert语句中的select子查询可用于将一个或多个其他的表或视图的值添加到表中，使用select子查询可同时插入多行。",
        page=73)),
    ("5.4", "更新数据", dict(
        type="single",
        stem="update语句中使用select子查询，实质上是？",
        options=["A. 把子查询的结果作为更新条件表达式中的一部分", "B. 生成一张新表", "C. 删除原有数据后重写", "D. 为表建立索引"],
        answer="A",
        analysis="解析：PPT第74页指出update中的select子查询可同时更新多行数据，实际上是通过将子查询的结果作为更新条件表达式中的一部分。",
        page=74)),
    ("5.4", "概述", dict(
        type="blank",
        stem="利用一个嵌套在insert、update或delete语句中的子查询，可以成批地添加、更新和____表中的数据。",
        answer=["删除", "删"],
        answerText="删除",
        analysis="解析：PPT第73页指出利用子查询修改表数据，就是利用嵌套在insert、update或delete语句的子查询成批地添加、更新和删除表中的数据。",
        page=73)),
    ("5.4", "删除数据", dict(
        type="single",
        stem="例40 update score set final=final*1.05 where studentno in (select studentno from student where entrance<800) 完成的操作是？",
        options=["A. 把入学成绩低于800的学生的期末成绩增加5%", "B. 把所有学生的期末成绩增加5%", "C. 删除入学成绩低于800的学生成绩", "D. 插入一批新的成绩记录"],
        answer="A",
        analysis="解析：PPT第74页例40将student表中入学成绩低于800的所有学生的期末成绩增加5%，子查询结果作为更新条件的一部分。",
        page=74)),

    # ================= 5.5 通用表表达式 =================
    ("5.5", "CTE", dict(
        type="single",
        stem="通用表表达式（CTE）的作用范围是？",
        options=["A. 整个数据库", "B. 当前语句", "C. 当前会话", "D. 全局所有用户"],
        answer="B",
        analysis="解析：PPT第75页指出MySQL 8.0的通用表表达式是一个在语句级别定义的临时结果集，其作用范围是在当前语句。",
        page=75)),
    ("5.5", "语法", dict(
        type="single",
        stem="关于CTE的语法，下列说法正确的是？",
        options=["A. as 后面的括号不能省略", "B. as 后面的括号可以省略", "C. 必须使用recursive关键字", "D. CTE名称可以重复"],
        answer="A",
        analysis="解析：PPT第75页指出subquery用于产生CTE的结果集，as后面的括号不能省略。",
        page=75)),
    ("5.5", "recursive", dict(
        type="single",
        stem="当with子句中包含递归CTE时，必须使用哪个关键字？",
        options=["A. recursive", "B. repeat", "C. loop", "D. cycle"],
        answer="A",
        analysis="解析：PPT第75页指出如果CTE的子查询中引用了自己的名称即为递归CTE，with子句中包含任何递归CTE时必须使用关键字recursive。",
        page=75)),
    ("5.5", "递归限制", dict(
        type="blank",
        stem="递归select部分不能包含聚合函数、窗口函数、group by、order by、limit、____等。",
        answer=["distinct", "DISTINCT"],
        answerText="distinct",
        analysis="解析：PPT第78页列出的递归CTE语法限制包括：递归select部分不能包含聚合函数、窗口函数、group by、order by、limit、distinct等。",
        page=78)),
    ("5.5", "递归限制", dict(
        type="single",
        stem="下列哪一项不属于递归select部分的语法限制？",
        options=["A. 不能包含聚合函数", "B. 不能包含group by", "C. 不能包含limit", "D. 不能引用其他表"],
        answer="D",
        analysis="解析：PPT第78页指出递归select部分可以引用其他的表，并且可以将它们与CTE进行连接查询，故“不能引用其他表”不是限制。",
        page=78)),
    ("5.5", "终止条件", dict(
        type="single",
        stem="递归查询因没有执行时间限制而导致死循环时，可以从另一个会话使用什么命令终止该查询？",
        options=["A. kill query", "B. drop table", "C. rollback", "D. shutdown"],
        answer="A",
        analysis="解析：PPT第77页指出如果某个递归查询由于没有执行时间限制而导致了死循环，可以从另一个会话中使用kill query命令终止该查询。",
        page=77)),
    ("5.5", "递归示例", dict(
        type="blank",
        stem="例42用递归CTE生成斐波那契数列，当n到达____之后，就结束递归过程。",
        answer=["12", "十二"],
        answerText="12",
        analysis="解析：PPT第79、80页例42用 where n<12 控制递归，当n到达12之后结束递归过程，共生成12个数字。",
        page=79)),

    # ================= 6 正则表达式 =================
    ("6", "正则表达式", dict(
        type="single",
        stem="与通配字符查询相比，正则表达式的查询能力如何？",
        options=["A. 更强大、更灵活，可用于非常复杂的查询", "B. 完全相同", "C. 只能匹配数字", "D. 比like弱，只能匹配单个字符"],
        answer="A",
        analysis="解析：PPT第81页指出正则表达式的查询能力比通配字符的查询能力更强大、更灵活，可以应用于非常复杂的查询。",
        page=81)),
    ("6", "regexp", dict(
        type="single",
        stem="MySQL中使用哪个关键字来匹配查询正则表达式？",
        options=["A. like", "B. regexp", "C. between", "D. escape"],
        answer="B",
        analysis="解析：PPT第81页指出MySQL中使用regexp关键字来匹配查询正则表达式，语法为 where 字段名 regexp '操作符'。",
        page=81)),
    ("6", ".", dict(
        type="blank",
        stem="正则表达式 '^赵.江$' 中，符号“.”表示除____以外的任何单个字符。",
        answer=["换行符", "换行", "\\n"],
        answerText="换行符",
        analysis="解析：PPT第86页指出^表示字符串开始位置、$表示结束位置，.表示除“\\n”（换行符）以外的任何单个字符。",
        page=86)),
    ("6", "$", dict(
        type="single",
        stem="where phone regexp '5$' 查询的是？",
        options=["A. 电话号码以5开头的学生", "B. 电话号码尾数为5的学生", "C. 电话号码中包含5的学生", "D. 电话号码长度为5的学生"],
        answer="B",
        analysis="解析：PPT第85页指出字符“$”匹配以特定字符或字符串结尾的记录，例44查出电话号码尾数为5的学生。",
        page=85)),
    ("6", "|", dict(
        type="blank",
        stem="正则表达式中指定多个字符串时，需要用符号____隔开，只要匹配其中任意一个即可。",
        answer=["|", "｜"],
        answerText="|",
        analysis="解析：PPT第87页指出如果指定多个字符串需要用符号“|”隔开，只要匹配这些字符串中的任意一个即可。",
        page=87)),
    ("6", "|", dict(
        type="single",
        stem="where phone regexp '131|132' 的含义是？",
        options=["A. 电话号码同时包含131和132", "B. 电话号码匹配131或132中的任意一个", "C. 电话号码以131开头并以132结尾", "D. 电话号码在131到132之间"],
        answer="B",
        analysis="解析：PPT第87页例46用 regexp '131|132' 查询电话号码出现131或132数字的学生信息，|表示“或”。",
        page=87)),
]


def rebalance(singles):
    """把新增单选题的正确答案均匀分布到 A/B/C/D，旋转选项内容（保持相对顺序）。"""
    order = 'ABCD'
    cnt = {c: 0 for c in order}
    for q in EXIST_SINGLE_ANSWERS:
        cnt[q] += 1
    for d in singles:
        if d.get('keep_order'):
            cnt[d['answer']] += 1
            continue
        cur = order.index(d['answer'])
        target = min(order, key=lambda c: (cnt[c], order.index(c)))
        ti = order.index(target)
        if ti != cur:
            contents = [o[3:] for o in d['options']]
            rot = [(i + cur - ti) % 4 for i in range(4)]
            contents = [contents[i] for i in rot]
            d['options'] = ['%s. %s' % (order[i], contents[i]) for i in range(4)]
            d['answer'] = target
        cnt[d['answer']] += 1
    return cnt


def main():
    with io.open(SRC, encoding='utf-8') as f:
        data = json.load(f)

    existing = data['questions'][:14]          # 原 14 题原样保留
    smax = max(int(q['id'].split('-s')[1]) for q in existing if q['type'] == 'single')
    bmax = max(int(q['id'].split('-b')[1]) for q in existing if q['type'] == 'blank')

    singles = [dict(q) for _, _, q in NEW if q['type'] == 'single']
    cnt = rebalance(singles)
    print('答案分布:', dict(sorted(cnt.items())))

    si = iter(singles)
    out = []
    for sec, pt, q in NEW:
        if q['type'] == 'single':
            d = next(si)
            smax += 1
            qid = 'ch4-ppt-s%02d' % smax
            assert len(d['options']) == 4, qid
            for i, ch in enumerate('ABCD'):
                assert d['options'][i].startswith(ch + '. '), (qid, d['options'][i])
            assert d['answer'] in 'ABCD'
        else:
            d = dict(q)
            bmax += 1
            qid = 'ch4-ppt-b%02d' % bmax
            assert isinstance(d['answer'], list) and d['answer']
            assert d['answerText'] == d['answer'][0], qid
        newq = {'id': qid, 'type': d['type'], 'stem': d['stem']}
        if d['type'] == 'single':
            newq['options'] = d['options']
            newq['answer'] = d['answer']
        else:
            newq['answer'] = d['answer']
            newq['answerText'] = d['answerText']
        newq['analysis'] = d['analysis']
        newq['page'] = d['page']
        out.append((sec, pt, newq))

    data['questions'] = existing + [q for _, _, q in out]

    with io.open(SRC, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(chr(10))

    cov = {}
    for sec, pt, q in out:
        cov.setdefault(sec, set()).add(pt)
    print('新增题目数:', len(out), '总题量:', len(data['questions']))
    lack = {s['id']: [p['term'] for p in s['points'] if p['term'] not in cov.get(s['id'], set())]
            for s in data['sections']}
    print('未覆盖知识点:', {k: v for k, v in lack.items() if v} or '无')


if __name__ == '__main__':
    main()
