/* 自动生成，请勿手改。来源 tools/source/exam_big.json */
window.EXAM_BIG = {
  "updated": "2026-11-26",
  "title": "考试大题",
  "intro": "问答题（20 分）与编程题（60 分）的全部来源：一半是老师复习 PPT 点名的考点，一半是六个实验的作业题。先自己写，再展开参考答案对照。",
  "groups": [
    {
      "id": "qa",
      "kind": "qa",
      "title": "问答题 · 老师点名的考点",
      "desc": "复习 PPT 第 3 页「填空、选择和简答」列的 12 个点，外加一道 E-R 图设计题（PPT 第 4-5 页的例题）。答案按要点记，考试写关键词就有分。",
      "items": [
        {
          "id": "qa-01",
          "title": "数据模型的三要素",
          "ask": "数据模型的三要素是什么？各自的作用是什么？",
          "points": [
            "数据结构",
            "数据操作",
            "完整性约束",
            "数据结构描述静态特性，数据操作描述动态特性，完整性约束是一组完整性规则"
          ],
          "answer": "数据模型由数据结构、数据操作和完整性约束三要素组成。①数据结构：描述数据库的组成对象以及对象之间的联系，刻画系统的静态特性；②数据操作：指对数据库中各种对象（型）的实例（值）允许执行的操作的集合，包括操作及有关的操作规则，刻画系统的动态特性；③完整性约束：是一组完整性规则，用以限定符合数据模型的数据库状态以及状态的变化，保证数据的正确、有效和相容。",
          "note": "三要素常考选择/填空，注意「数据结构」对应静态、「数据操作」对应动态。"
        },
        {
          "id": "qa-02",
          "title": "关系运算有哪些",
          "ask": "关系运算分为哪几类？各包含哪些运算？",
          "points": [
            "传统集合运算：并、差、交、笛卡尔积",
            "专门的关系运算：选择、投影、连接、除",
            "选择按行、投影按列"
          ],
          "answer": "关系运算分为两类：①传统的集合运算，包括并（∪）、差（−）、交（∩）和广义笛卡尔积（×）；②专门的关系运算，包括选择（按给定条件选取元组，行运算）、投影（选取若干属性列，列运算）、连接（按连接条件把两个关系拼接）和除运算。",
          "note": "选择题常问「下列不属于专门关系运算的是」，注意并差交属于集合运算。"
        },
        {
          "id": "qa-03",
          "title": "字符集及其层次设置",
          "ask": "MySQL 的字符集支持哪几个层次？如何设置？优先级如何？",
          "points": [
            "四个层次：服务器、数据库、表、列",
            "低层次未指定时继承高层次的设置",
            "character set / default character set"
          ],
          "answer": "MySQL 字符集支持 4 个层次：服务器级、数据库级、表级和列级。可以在服务器配置文件（my.ini）中设置默认字符集（character-set-server），建库时用 CREATE DATABASE ... DEFAULT CHARACTER SET，建表时在表选项里指定 DEFAULT CHARSET，建列时在列定义后加 CHARACTER SET。层次越低优先级越高：列 > 表 > 数据库 > 服务器，低层次未指定时继承上一层次的设置。MySQL 8.0 默认字符集为 utf8mb4。",
          "note": "考纲原话「字符集及其层次设置」，层次顺序和继承关系必背。"
        },
        {
          "id": "qa-04",
          "title": "字符序（Collation）",
          "ask": "什么是字符序？字符序名称的后缀 _ci、_cs、_bin 分别表示什么？",
          "points": [
            "字符序是同一字符集内字符的比较规则",
            "一个字符集对应多个字符序",
            "_ci 不区分大小写，_cs 区分大小写，_bin 按二进制编码比较"
          ],
          "answer": "字符序（collation / 排序规则）是指在同一字符集内字符之间比较大小的规则，一个字符集对应多种字符序。MySQL 8.0 默认字符序为 utf8mb4_0900_ai_ci。后缀含义：_ci（case insensitive）不区分大小写；_cs（case sensitive）区分大小写；_bin 按字符的二进制编码值比较。字符序可以在服务器、数据库、表、列各层次设置，同样遵循低层次优先。",
          "note": "常与字符集一起考，注意 utf8mb4_0900_ai_ci 是 MySQL 8.0 默认值。"
        },
        {
          "id": "qa-05",
          "title": "存储引擎",
          "ask": "什么是存储引擎？InnoDB 与 MyISAM 的主要区别有哪些？",
          "points": [
            "存储引擎是表的类型，决定数据的存储方式与访问机制",
            "InnoDB 支持事务、行级锁、外键",
            "MyISAM 不支持事务和外键，表级锁，查询快"
          ],
          "answer": "存储引擎是 MySQL 中表的「类型」，决定表的数据如何存储、索引如何组织以及支持哪些特性。MySQL 8.0 支持 InnoDB、MyISAM、MEMORY、CSV、ARCHIVE 等，默认且最常用的是 InnoDB。InnoDB 支持事务（ACID）、行级锁和外键，适合并发写入和需要一致性的场景；MyISAM 不支持事务和外键，使用表级锁，插入查询速度快但并发差，适合只读或读多写少的场景。可以用 SHOW ENGINES 查看支持的引擎，建表时 ENGINE=InnoDB 指定。",
          "note": "考纲第二点是存储引擎，区别表（事务/锁粒度/外键）要能背。"
        },
        {
          "id": "qa-06",
          "title": "标识符的命名规则",
          "ask": "MySQL 标识符的命名规则是什么？",
          "points": [
            "由字母、数字、下划线、$ 组成",
            "必须以字母或下划线开头",
            "不能含空格，长度不超过 64",
            "不能与关键字重名"
          ],
          "answer": "标识符用于命名数据库、表、列、索引、视图等对象。规则：①由字母、数字、下划线（_）和美元符号（$）组成；②必须以字母或下划线开头，不能以数字开头；③不能包含空格；④长度不超过 64 个字符（别名可到 256）；⑤不能使用 MySQL 的关键字，若必须使用需用反引号括起来。",
          "note": "「长度不超过 64」是最常考的数字点。"
        },
        {
          "id": "qa-07",
          "title": "游标的作用与使用步骤",
          "ask": "什么是游标？使用游标的四个步骤是什么？",
          "points": [
            "游标用于逐行处理结果集",
            "声明 DECLARE → 打开 OPEN → 提取 FETCH → 关闭 CLOSE",
            "游标只能在存储过程、函数、触发器中使用"
          ],
          "answer": "游标（cursor）是一种从结果集中逐行读取数据的机制，用于对查询结果进行逐行处理。使用步骤：①声明游标 DECLARE 游标名 CURSOR FOR select 语句；②打开游标 OPEN 游标名；③提取数据 FETCH 游标名 INTO 变量列表；④关闭游标 CLOSE 游标名。游标必须在 begin-end 语句块中声明，且声明顺序在变量和条件之后；通常配合循环与 CONTINUE HANDLER FOR NOT FOUND 判断是否取完。",
          "note": "考纲明确列了游标，四个步骤的关键字顺序是送分点。"
        },
        {
          "id": "qa-08",
          "title": "视图的概念及优点",
          "ask": "什么是视图？视图有哪些优点？",
          "points": [
            "视图是从一个或多个基本表导出的虚表",
            "只存定义不存数据",
            "优点：简化操作、多角度看待数据、逻辑独立性、安全保护"
          ],
          "answer": "视图是从一个或多个基本表（或视图）导出的虚表，其结构和数据建立在对基本表的查询上，数据库中只存放视图的定义而不存放对应的数据。优点：①简化用户操作，把复杂的多表连接和条件封装成一个视图；②使用户能以多种角度看待同一数据；③对数据库重构提供一定程度的逻辑独立性，基本表结构变化时只需改视图定义；④能够对数据提供安全保护，通过视图只向用户开放部分行列；⑤使同一数据可以有不同的显示形式。",
          "note": "注意「不提高物理存储效率」是常见错误项；视图可更新有条件限制。"
        },
        {
          "id": "qa-09",
          "title": "存储过程与函数的区别",
          "ask": "存储过程和自定义函数有哪些区别？",
          "points": [
            "函数必须 returns 且只能返回一个值；过程用 out 参数可返回多个值",
            "过程用 call 调用；函数在表达式中直接调用",
            "函数不能返回结果集、不能用事务控制语句；过程可以",
            "函数参数只有 in（默认）；过程有 in/out/inout"
          ],
          "answer": "①返回值：函数必须用 returns 指定返回类型且只能返回一个值；存储过程可以没有返回值，也可通过 out / inout 参数返回多个值。②调用方式：存储过程用 CALL 语句调用；函数像内置函数一样直接出现在 SQL 表达式（如 select func(1)）中。③函数体内不能返回结果集，也不能使用事务控制语句（commit / rollback）；存储过程可以返回结果集，也能控制事务。④参数：函数的参数只能是输入参数（默认 in）；存储过程支持 in、out、inout 三种。⑤函数常用于计算并返回单值，存储过程常用于完成一组业务操作。",
          "note": "考纲点名，五条区别记 3 条以上即可；「函数不能有事务语句」最容易漏。"
        },
        {
          "id": "qa-10",
          "title": "设置索引的原则",
          "ask": "设置索引应遵循哪些原则？",
          "points": [
            "在 where、连接、order by、group by 频繁使用的列上建索引",
            "更新频繁的列少建索引",
            "区分度低（重复值多）的列不建索引",
            "索引数量不宜过多，小表不必建"
          ],
          "answer": "①在经常出现在 where 子句、连接条件、order by / group by 中的列上建立索引；②在作为主键、外键的列上建索引（主键自动建唯一索引）；③更新频繁的列尽量少建索引，因为更新索引有额外开销；④区分度低、重复值多的列（如性别、状态标志）不宜建索引；⑤索引不是越多越好，索引过多会降低 insert / update / delete 的效率并占用空间；⑥数据量很小的表不必建索引；⑦尽量使用唯一索引，组合索引要注意最左前缀原则。",
          "note": "考纲点名。答题时「更新频繁少建」「重复值多不建」「不是越多越好」三条必须出现。"
        },
        {
          "id": "qa-11",
          "title": "触发器中的 OLD 与 NEW",
          "ask": "触发程序中 OLD 和 NEW 关键字分别表示什么？在 insert、update、delete 中如何使用？",
          "points": [
            "OLD 表示被操作前的旧记录，NEW 表示操作后的新记录",
            "insert 只能用 NEW",
            "delete 只能用 OLD",
            "update 两者都可用"
          ],
          "answer": "OLD 和 NEW 是触发器中引用记录的关键字：OLD 表示触发器所监视的表在本次操作之前的旧记录（只读），NEW 表示操作之后的新记录。使用规则：①INSERT 触发器只能使用 NEW，因为不存在旧记录；②DELETE 触发器只能使用 OLD，因为不存在新记录；③UPDATE 触发器两者都能用，OLD.列名 取修改前的值、NEW.列名 取修改后的值。语法上写作 OLD.字段名 / NEW.字段名，常用于 BEFORE 触发器中给 NEW 列赋值（如 NEW.term = 1），或在 AFTER 触发器中按 OLD 值做级联删除。",
          "note": "考纲点名。经典考法：insert 用 NEW、delete 用 OLD、update 两个都能用。"
        },
        {
          "id": "qa-12",
          "title": "存储过程的优点",
          "ask": "使用存储过程有哪些优点？",
          "points": [
            "预编译后驻留数据库，执行速度快",
            "减少网络传输",
            "可复用、模块化",
            "可控制权限，提高安全性"
          ],
          "answer": "①执行效率高：存储过程在创建时被分析和编译，第一次执行后驻留在数据库中，后续调用省去解析编译过程；②减少网络流量：多条 SQL 封装成一个过程，客户端只需发送过程名和参数；③可复用、便于模块化：业务逻辑集中存放在数据库端，多个应用可共享；④提高安全性：可以只授予用户执行存储过程的权限而不授予表的直接访问权限；⑤减少 SQL 注入风险，参数化调用更安全；⑥便于统一维护，逻辑修改只需改过程，不必改各个客户端程序。",
          "note": "考纲点名。写「预编译/减少网络/复用/权限」四点即可。"
        },
        {
          "id": "qa-13",
          "title": "E-R 图设计与转关系模型（PPT 例题）",
          "ask": "某高校创新创业中心需要管理「学生创业团队」与「校内导师」信息。团队信息包括团队编号、团队名称、成立日期、项目领域、注册资本（万元）；导师信息包括职工号、姓名、职称、学院、联系电话。一名导师可以指导多个团队，一个团队可以由多名导师联合指导，需要记录指导开始日期、指导角色（主指导/联合指导）、协议年限（年）。（1）设计 E-R 图；（2）将该 E-R 图转换为关系模型结构。",
          "points": [
            "两个实体：学生创业团队、校内导师",
            "m:n 联系「指导」，联系本身带属性",
            "联系转成独立关系，主键为两端主键的组合",
            "团队（团队编号, 团队名称, 成立日期, 项目领域, 注册资本）"
          ],
          "answer": "（1）E-R 图：实体「学生创业团队」属性为团队编号、团队名称、成立日期、项目领域、注册资本；实体「校内导师」属性为职工号、姓名、职称、学院、联系电话；两实体之间是 m:n 的「指导」联系，联系上带属性：开始日期、指导角色、协议年限。（2）转换关系模型：m:n 联系必须单独转换为一个关系，其主键由两端实体的主键组合而成：\n学生创业团队（团队编号, 团队名称, 成立日期, 项目领域, 注册资本）\n校内导师（职工号, 姓名, 职称, 学院, 联系电话）\n指导（团队编号, 职工号, 开始日期, 指导角色, 协议年限）\n其中「指导」的主键是（团队编号, 职工号），团队编号参照学生创业团队、职工号参照校内导师。",
          "note": "老师给的例题，几乎必考同类：先画图，再写三个关系模式并标主外键。m:n 联系一定要独立成表、联系属性不能丢。"
        }
      ],
      "short": "问答题 考点"
    },
    {
      "id": "lab1",
      "kind": "sql",
      "title": "实验一 MySQL 8.0 语言基础",
      "desc": "函数与表达式。编程题里最常以「写一条 select 完成 XXX」出现，注意每个函数的名字和参数顺序。",
      "items": [
        {
          "id": "lab1-01",
          "title": "随机数（20~90，两位小数）",
          "ask": "利用随机函数输出 20~90 的任意两个数（含两位小数）。",
          "points": [
            "rand() 返回 0~1 的随机数",
            "区间映射：下限 + 区间长度 * rand()",
            "round(x,2) 保留两位小数"
          ],
          "sql": [
            "select 20+round(70*rand(),2), 20+round(70*rand(),2);",
            "-- 若两个数区间不同，分别写各自的区间长度\nselect 70+round(20*rand(),2), 20+round(70*rand(),2);"
          ],
          "note": "rand() 每次调用产生不同的值，所以同一句里写两次会得到两个不同的随机数。"
        },
        {
          "id": "lab1-02",
          "title": "1000 天后的日期 / 3000 分钟后的时间",
          "ask": "计算 1000 天后的日期和 3000 分钟后的时间。",
          "points": [
            "date_add(日期, interval n 单位)",
            "+ interval n 单位 的写法",
            "timestampadd(单位, n, 日期)"
          ],
          "sql": [
            "select date_add(now(), interval 1000 day);",
            "select date_add(now(), interval 3000 minute);",
            "select now() + interval 1000 day;\nselect now() + interval 3000 minute;",
            "select timestampadd(minute, 3000, now());"
          ],
          "note": "interval 后面跟的单位是单数：day、minute、month、year。"
        },
        {
          "id": "lab1-03",
          "title": "从 URL 中取出文件名",
          "ask": "从字符串 'https://www.example.com/page.html' 中提取出文件名 'page.html'。",
          "points": [
            "substring(str,pos,len) 按位置截取",
            "right(str,n) 取右边 n 个字符",
            "substring_index(str,delim,count) 按分隔符截取，count 为负从右数"
          ],
          "sql": [
            "select substring('https://www.example.com/page.html', 25, 9);",
            "select right('https://www.example.com/page.html', 9);",
            "-- 最通用：取最后一个 / 右边的部分\nselect substring_index('https://www.example.com/page.html', '/', -1);"
          ],
          "note": "substring_index 的 count：正数从左数、负数从右数；-1 表示返回最后一个分隔符右侧的全部内容。"
        },
        {
          "id": "lab1-04",
          "title": "替换所有下划线",
          "ask": "将字符串 'I_love_SQL_programming' 中的所有下划线 _ 替换为空格。",
          "points": [
            "replace(str, from, to) 全部替换",
            "不是只替换第一个"
          ],
          "sql": [
            "select replace('I_love_SQL_programming', '_', ' ');"
          ],
          "note": "replace 会替换所有出现的位置；只想改第一个要用 insert() 或拼接。"
        },
        {
          "id": "lab1-05",
          "title": "求字符数量",
          "ask": "求字符串 'Database Management System' 的字符数量。",
          "points": [
            "char_length() 按字符计",
            "length() 按字节计（中文会翻倍）"
          ],
          "sql": [
            "select char_length('Database Management System');  -- 27",
            "select length('Database Management System');       -- 27（纯英文时与上面相同）"
          ],
          "note": "含中文时 char_length 与 length 结果不同，考题常拿这个对比。"
        },
        {
          "id": "lab1-06",
          "title": "拼接并转大写",
          "ask": "将字符串 'hello' 和 'mysql' 拼接成 'hello：mysql！'，并将结果转为大写。",
          "points": [
            "concat() 拼接多个字符串",
            "upper() / ucase() 转大写",
            "函数可嵌套"
          ],
          "sql": [
            "select upper(concat('hello', '：', 'mysql', '！'));"
          ],
          "note": "注意中文标点在 concat 里也是普通字符串参数。"
        },
        {
          "id": "lab1-07",
          "title": "两个日期相差的天数",
          "ask": "计算从 '2024-01-01' 到 '2024-12-31' 之间相差多少天。",
          "points": [
            "datediff(后, 前) 只算日期部分",
            "参数顺序决定正负"
          ],
          "sql": [
            "select datediff('2024-12-31', '2024-01-01');  -- 365"
          ],
          "note": "datediff 忽略时间部分；要算精确到秒用 timestampdiff(second, a, b)。"
        },
        {
          "id": "lab1-08",
          "title": "DATE_FORMAT 三种格式",
          "ask": "用 DATE_FORMAT() 将日期 '2026-09-14 15:30:45' 格式化为：(1) 2026年09月14日；(2) 2026-09-14 15:30:45；(3) 星期一 09月 14 2026。",
          "points": [
            "%Y 四位年、%m 两位月、%d 两位日",
            "%H 24 小时、%i 分、%s 秒",
            "%W 星期名（依赖 lc_time_names）"
          ],
          "sql": [
            "-- (1)\nselect date_format('2026-09-14 15:30:45', '%Y年%m月%d日');",
            "-- (2)\nselect date_format('2026-09-14 15:30:45', '%Y-%m-%d %H:%i:%s');",
            "-- (3) 星期名要先把语言环境设成中文，否则输出 Monday\nset lc_time_names = 'zh_CN';\nselect date_format('2026-09-14 15:30:45', '%W %m月 %d %Y');",
            "-- 不想改语言环境时，用 elt 按 dayofweek 取中文星期\nselect concat(elt(dayofweek('2026-09-14 15:30:45'), '星期日','星期一','星期二','星期三','星期四','星期五','星期六'),\n       ' ', date_format('2026-09-14 15:30:45', '%m月 %d %Y'));"
          ],
          "note": "%i 是分钟（%m 是月），%s 是秒，这三个最容易被扣分。"
        }
      ],
      "short": "实验一 语言基础"
    },
    {
      "id": "lab2",
      "kind": "sql",
      "title": "实验二 数据库和表的基本操作",
      "desc": "建库建表、约束、增删改。编程题里通常给出表结构让你写 create table，注意主键、非空、外键与字符集。",
      "items": [
        {
          "id": "lab2-01",
          "title": "创建 book / author 表并加外键",
          "ask": "在自己的数据库下创建 book 表和 author 表：book(bookid char(6) 主键, bookname varchar(30) 非空, price float(5,2) 非空)；author(authorid char(6) 主键, authorname varchar(10) 非空, bookid char(6) 外键参考 book, phone varchar(15))。",
          "points": [
            "create table 列定义 + 主键",
            "constraint 命名约束",
            "alter table ... add constraint ... foreign key ... references"
          ],
          "sql": [
            "create table book (\n  bookid char(6) not null,\n  bookname varchar(30) not null,\n  price float(5,2) not null,\n  constraint pk_book primary key (bookid)\n);",
            "create table author (\n  authorid char(6) not null,\n  authorname varchar(10) not null,\n  bookid char(6) not null,\n  phone varchar(15),\n  constraint pk_author primary key (authorid)\n);",
            "alter table author\n  add constraint fk_book_author foreign key (bookid) references book(bookid);"
          ],
          "note": "外键列的类型必须与被参照列一致；建表顺序先主表后从表。"
        },
        {
          "id": "lab2-02",
          "title": "创建 booksales 表",
          "ask": "创建图书销售表 booksales（不用主键）：bookid nchar(6) 非空、sellnum int 非空、selldate datetime 非空。",
          "points": [
            "not null 逐列声明",
            "不用主键 = 不写 primary key",
            "datetime 类型"
          ],
          "sql": [
            "create table booksales (\n  bookid nchar(6) not null,\n  sellnum int not null,\n  selldate datetime not null\n);"
          ],
          "note": "题目说「不用主键」就不要画蛇添足加 PK。"
        },
        {
          "id": "lab2-03",
          "title": "插入两行记录",
          "ask": "向 booksales 表中插入两行记录：('m00011',7,'2019-12-20') 和 ('m00018',3,'2019-11-16')。",
          "points": [
            "insert into 表 values(...)",
            "省略列名时按建表顺序全部给值",
            "也可以显式列出列名"
          ],
          "sql": [
            "insert into booksales values ('m00011', 7, '2019-12-20');",
            "insert into booksales(bookid, sellnum, selldate) values ('m00018', 3, '2019-11-16');",
            "-- 一条语句插入多行\ninsert into booksales values ('m00011',7,'2019-12-20'), ('m00018',3,'2019-11-16');"
          ],
          "note": "replace into 与 insert 语法相同，区别是主键冲突时替换旧行。"
        },
        {
          "id": "lab2-04",
          "title": "修改销售数量",
          "ask": "将 booksales 表中 'm00011' 的图书销售数量改为 11。",
          "points": [
            "update 表 set 列=值 where 条件",
            "漏写 where 会改全表"
          ],
          "sql": [
            "update booksales set sellnum = 11 where bookid = 'm00011';"
          ],
          "note": "改数据前先 select 确认 where 命中范围，这是实验课的硬性要求。"
        },
        {
          "id": "lab2-05",
          "title": "删除记录 / 清空表 / 删除表",
          "ask": "(1) 删除 booksales 表中销售时间在 2019 年 12 月以前的记录；(2) 删除 booksales 表中全部记录；(3) 删除 booksales 表。",
          "points": [
            "delete from ... where 条件删除",
            "truncate table 清空（不能带 where，不可回滚）",
            "drop table 连表结构一起删"
          ],
          "sql": [
            "-- (1) 注意 12 月以前不含 12-01 当天\n delete from booksales where selldate < '2019-12-01';",
            "-- (2)\ntruncate table booksales;\n-- 或 delete from booksales;",
            "-- (3)\ndrop table booksales;"
          ],
          "note": "delete 可回滚、可带条件；truncate 清空但保留结构、速度快；drop 连结构一起删。三者区别必考。"
        }
      ],
      "short": "实验二 库表操作"
    },
    {
      "id": "lab3",
      "kind": "sql",
      "title": "实验三 数据检索",
      "desc": "10 道查询题，覆盖聚合、分组、子查询、like、连接。编程题 60 分里的大头，建表脚本见 teaching.sql。",
      "items": [
        {
          "id": "lab3-01",
          "title": "查询全表",
          "ask": "查询 course 表中的所有记录。",
          "points": [
            "select * from 表",
            "* 表示所有列"
          ],
          "sql": [
            "select * from course;"
          ],
          "note": "实际项目不要用 select *，但考试写全表查询没问题。"
        },
        {
          "id": "lab3-02",
          "title": "统计女生人数",
          "ask": "查询 student 表中女生的人数。",
          "points": [
            "count(*) 统计行数",
            "where 过滤条件",
            "count(列) 不统计 null"
          ],
          "sql": [
            "select count(*) from student where sex = '女';"
          ],
          "note": "count(*)、count(1)、count(列) 的区别：count(列) 跳过 null。"
        },
        {
          "id": "lab3-03",
          "title": "查询教授信息",
          "ask": "查询 teacher 表中每一位教授的教师号、姓名和专业名称。",
          "points": [
            "指定列而不是 *",
            "等值条件 where 列='值'"
          ],
          "sql": [
            "select teacherno, tname, major from teacher where prof = '教授';"
          ],
          "note": ""
        },
        {
          "id": "lab3-04",
          "title": "按性别分组求平均年龄",
          "ask": "按性别分组，求出 student 表中每组学生的平均年龄。",
          "points": [
            "group by 分组",
            "avg() 平均值",
            "由出生日期算年龄：year(now())-year(birthdate)",
            "round() 取整"
          ],
          "sql": [
            "select sex, round(avg(year(now()) - year(birthdate))) as 平均年龄\nfrom student\ngroup by sex;",
            "select sex, round(avg(timestampdiff(year, birthdate, current_date))) as 平均年龄\nfrom student\ngroup by sex;",
            "select sex, floor(avg(datediff(current_date, birthdate) / 365)) as 平均年龄\nfrom student\ngroup by sex;"
          ],
          "note": "select 里的非聚合列必须出现在 group by 中（only_full_group_by 模式下会报错）。"
        },
        {
          "id": "lab3-05",
          "title": "建新表存总评成绩",
          "ask": "创建新表，包含学号、学生姓名、课程号和总评成绩，其中总评成绩 = final*0.8 + daily*0.2。",
          "points": [
            "create table 新表 select ... 建表 + 灌数据一步完成",
            "多表连接条件写在 where",
            "列别名决定新表列名"
          ],
          "sql": [
            "create table stu_total\nselect student.studentno, student.sname, score.courseno,\n       final * 0.8 + daily * 0.2 as total\nfrom student, score\nwhere student.studentno = score.studentno;",
            "select * from stu_total;"
          ],
          "note": "「create table ... as select」在建表时就把列类型按查询结果定下来。"
        },
        {
          "id": "lab3-06",
          "title": "每个学生的期末平均分",
          "ask": "统计每个学生的期末成绩平均分。",
          "points": [
            "group by 学号",
            "avg(final)",
            "可加 count(*) 看门数"
          ],
          "sql": [
            "select studentno, avg(final) as 平均分\nfrom score\ngroup by studentno;"
          ],
          "note": "avg 会忽略 null；如果要「没成绩也算 0」，用 sum/count 自己算。"
        },
        {
          "id": "lab3-07",
          "title": "年龄最大的男生",
          "ask": "输出 student 表中年龄最大的男生的所有信息。",
          "points": [
            "年龄最大 = 出生日期最小",
            "子查询求 min(birthdate)",
            "也可 order by + limit 1"
          ],
          "sql": [
            "select * from student\nwhere sex = '男'\n  and birthdate = (select min(birthdate) from student where sex = '男');",
            "-- 或者\nselect * from student where sex = '男' order by birthdate limit 1;",
            "select * from student where sex = '男'\norder by (year(now()) - year(birthdate)) desc limit 1;"
          ],
          "note": "注意子查询里也要带 sex='男'，否则拿到的是全体最小出生日期。"
        },
        {
          "id": "lab3-08",
          "title": "没有职称的教师",
          "ask": "查询 teacher 表中没有职称的职工的教师号、姓名、专业和部门（提示：职称为 null）。",
          "points": [
            "is null 判断空值",
            "不能写 = null"
          ],
          "sql": [
            "select teacherno, tname, major, department\nfrom teacher\nwhere prof is null;"
          ],
          "note": "= null 永远为 unknown，这是填空/选择的高频坑。"
        },
        {
          "id": "lab3-09",
          "title": "姓「崔」的学生",
          "ask": "查询姓「崔」的学生的信息。",
          "points": [
            "like '崔%' 通配",
            "% 匹配任意长度",
            "regexp '^崔' 也可以"
          ],
          "sql": [
            "select * from student where sname like '崔%';",
            "select * from student where sname regexp '^崔';"
          ],
          "note": "「姓崔」是前缀匹配，写成 '%崔%' 会把名字里带崔的也捞出来。"
        },
        {
          "id": "lab3-10",
          "title": "茅佳峰老师讲授的课程",
          "ask": "查询教师「茅佳峰」所讲授课程的名字、课程类型、学时。",
          "points": [
            "三表关联：teacher → teach_course → course",
            "in (子查询) 或 join 两种写法",
            "先按姓名找到教师号再查课程"
          ],
          "sql": [
            "select cname, type, period\nfrom course\nwhere courseno in (\n  select courseno from teach_course, teacher\n  where teach_course.teacherno = teacher.teacherno\n    and tname = '茅佳峰'\n);",
            "-- 等价的连接写法\nselect c.cname, c.type, c.period\nfrom teacher t\njoin teach_course tc on tc.teacherno = t.teacherno\njoin course c on c.courseno = tc.courseno\nwhere t.tname = '茅佳峰';"
          ],
          "note": "子查询返回多行时只能用 in，不能用 =。"
        }
      ],
      "short": "实验三 数据检索"
    },
    {
      "id": "lab4",
      "kind": "sql",
      "title": "实验四 索引和视图",
      "desc": "索引创建/删除、视图创建/修改/使用，重点是 with check option 的约束效果。",
      "items": [
        {
          "id": "lab4-01",
          "title": "建普通索引",
          "ask": "在 course 表的 cname 列上创建索引 IDX_cname。",
          "points": [
            "create index 索引名 on 表(列)",
            "也可 alter table add index"
          ],
          "sql": [
            "create index idx_cname on course(cname);",
            "alter table course add index idx_cname(cname);"
          ],
          "note": "索引名在同一张表内唯一，建议统一前缀 idx_。"
        },
        {
          "id": "lab4-02",
          "title": "建唯一组合索引",
          "ask": "在 student 表的 studentno 和 phone 列上创建唯一性索引 uq_stu，并输出 student 表中的记录查看排序。",
          "points": [
            "create unique index",
            "组合索引的列顺序影响最左前缀",
            "唯一索引要求组合值不重复"
          ],
          "sql": [
            "create unique index uq_stu on student(studentno, phone);",
            "alter table student add unique index uq_stu(studentno, phone);",
            "select studentno, phone, sname from student;"
          ],
          "note": "studentno 本身已唯一，组合唯一索引实际约束的是「两列组合不重复」。"
        },
        {
          "id": "lab4-03",
          "title": "创建带条件视图",
          "ask": "创建一个视图 v_teacher，查询所有「计算机学院」的教师的信息。",
          "points": [
            "create view 视图名 as select",
            "where 条件成为视图定义的一部分"
          ],
          "sql": [
            "create view v_teacher\nas\nselect * from teacher\nwhere department = '计算机学院';",
            "select * from v_teacher;"
          ],
          "note": "视图列名默认取 select 的列名/别名，需要改名可在视图名后写列清单。"
        },
        {
          "id": "lab4-04",
          "title": "创建带聚合与排序的视图",
          "ask": "创建视图 v_avgstu，查询每个学生的学号、姓名及期末成绩的平均分，并按平均分降序排序。",
          "points": [
            "多表连接 + group by",
            "avg() 起别名",
            "视图里可以带 order by"
          ],
          "sql": [
            "create view v_avgstu\nas\nselect student.studentno, sname, avg(score.final) as average\nfrom student, score\nwhere student.studentno = score.studentno\n  and score.final is not null\ngroup by student.studentno, student.sname\norder by avg(score.final) desc;",
            "select * from v_avgstu;"
          ],
          "note": "含聚合函数的视图一般不可更新；排序在视图里会被外层查询覆盖（除非外层不排序）。"
        },
        {
          "id": "lab4-05",
          "title": "视图加 with check option",
          "ask": "修改 v_teacher 的视图定义，添加 with check option 选项。",
          "points": [
            "alter view / create or replace view",
            "with check option 让更新必须满足视图的 where 条件"
          ],
          "sql": [
            "alter view v_teacher\nas\nselect * from teacher\nwhere department = '计算机学院'\nwith check option;",
            "-- 或\ncreate or replace view v_teacher\nas\nselect * from teacher\nwhere department = '计算机学院'\nwith check option;"
          ],
          "note": "with check option 只约束通过视图的 DML，直接改基表不受限。"
        },
        {
          "id": "lab4-06",
          "title": "通过视图插入并解释失败原因",
          "ask": "通过视图 v_teacher 向基表 teacher 插入 ('t05039','张馨月','计算机应用','讲师','计算机学院') 和 ('t06018','李书诚','机械制造','副教授','机械学院')，查看结果并解释原因。",
          "points": [
            "通过视图插入 = 往基表插入",
            "with check option 会校验 where 条件",
            "不满足条件的行插入失败"
          ],
          "sql": [
            "insert into v_teacher values\n('t05039','张馨月','计算机应用','讲师','计算机学院');   -- 成功",
            "insert into v_teacher values\n('t06018','李书诚','机械制造','副教授','机械学院');  -- 失败",
            "-- 报错：CHECK OPTION failed 'teaching.v_teacher'"
          ],
          "note": "原因：视图定义了 department='计算机学院' 并加了 with check option，插入行必须满足该条件；机械学院不满足，故被拒绝。"
        },
        {
          "id": "lab4-07",
          "title": "通过视图修改数据",
          "ask": "通过视图 v_teacher 将基表 teacher 中教师号 t05039 的职称改为「副教授」。",
          "points": [
            "update 视图 = 改基表",
            "where 用视图可见的列",
            "改后的值仍要满足 check option"
          ],
          "sql": [
            "update v_teacher\nset prof = '副教授'\nwhere teacherno = 't05039';"
          ],
          "note": "把职称改成「机械学院」这类不满足视图条件的值同样会失败。"
        }
      ],
      "short": "实验四 索引视图"
    },
    {
      "id": "lab5",
      "kind": "sql",
      "title": "实验五 MySQL 8.0 编程基础",
      "desc": "预处理语句、自定义函数、case/while/iterate/leave。函数必须带 returns 和 deterministic。",
      "items": [
        {
          "id": "lab5-01",
          "title": "预处理语句取前 5 行",
          "ask": "利用预处理 SQL 语句输出 teacher 表的前 5 行记录的部分数据。",
          "points": [
            "prepare 名 from 'SQL 串'",
            "占位符用 ?",
            "execute 名 using @变量",
            "用完 deallocate prepare"
          ],
          "sql": [
            "set @a = 5;\nprepare pteac from 'select * from teacher limit ?';\nexecute pteac using @a;\ndeallocate prepare pteac;"
          ],
          "note": "占位符只能替代值，不能替代表名/列名；limit ? 是允许的。"
        },
        {
          "id": "lab5-02",
          "title": "函数 casetwo（case 分支）",
          "ask": "创建函数 casetwo，判断传入参数：为 7 输出 1，为 14 输出 2，都不满足输出 -1。",
          "points": [
            "delimiter 改定界符",
            "create function ... returns int",
            "deterministic 特征",
            "case ... when ... then ... else ... end case"
          ],
          "sql": [
            "delimiter //\ncreate function casetwo(x int)\nreturns int\ndeterministic\nbegin\n  case x\n    when 7 then set x = 1;\n    when 14 then set x = 2;\n    else set x = -1;\n  end case;\n  return x;\nend //\ndelimiter ;",
            "select casetwo(14);  -- 2"
          ],
          "note": "函数体里的分号必须被 delimiter 保护，否则客户端会提前截断语句。"
        },
        {
          "id": "lab5-03",
          "title": "函数 exthree（while 求奇数和）",
          "ask": "定义函数 exthree，应用 while 语句求 50 到指定整数之间所有奇数之和。",
          "points": [
            "declare 局部变量 default",
            "while ... do ... end while",
            "从 51 开始每次 +2"
          ],
          "sql": [
            "delimiter //\ncreate function exthree(sn int)\nreturns int\ndeterministic\nbegin\n  declare s int default 0;\n  declare n int default 51;\n  while n <= sn do\n    set s = s + n;\n    set n = n + 2;\n  end while;\n  return s;\nend //\ndelimiter ;",
            "select exthree(150);"
          ],
          "note": "局部变量用 declare，会话变量用 set @x；两者不要混。"
        },
        {
          "id": "lab5-04",
          "title": "函数 exfour（iterate + leave）",
          "ask": "定义函数 exfour，应用 while 和 iterate 求 100~150 间偶数之和，用 leave 退出循环（不含 100，含 150）。",
          "points": [
            "给循环加标号 add_num: while",
            "iterate 跳过本次循环",
            "leave 跳出标号循环"
          ],
          "sql": [
            "delimiter //\ncreate function exfour(n int)\nreturns int\ndeterministic\nbegin\n  declare s int default 0;\n  declare i int default 100;\n  add_num: while true do\n    set i = i + 2;\n    if i % 2 = 0 then\n      set s = s + i;\n    else\n      iterate add_num;\n    end if;\n    if i = n then\n      leave add_num;\n    end if;\n  end while add_num;\n  return s;\nend //\ndelimiter ;",
            "select exfour(150);"
          ],
          "note": "iterate 相当于 continue，leave 相当于 break；标号让它们能作用到指定循环。"
        }
      ],
      "short": "实验五 编程基础"
    },
    {
      "id": "lab6",
      "kind": "sql",
      "title": "实验六 存储过程 / 触发器 / 事件",
      "desc": "最可能出成编程大题的一组：带 in/out 参数的过程、after delete 触发器、定时事件。",
      "items": [
        {
          "id": "lab6-01",
          "title": "存储过程 selectscore（按学号查成绩）",
          "ask": "创建存储过程 selectscore()，用指定的学号查询学生期末成绩；执行并查询学号 20112100072 的成绩。",
          "points": [
            "create procedure(参数 in)",
            "多表 join 取学号/姓名/课程/成绩",
            "call 执行"
          ],
          "sql": [
            "delimiter $$\ndrop procedure if exists selectscore$$\ncreate procedure selectscore(in p_studentno char(11))\nbegin\n  select s.studentno as 学号, st.sname as 姓名, s.courseno as 课程号,\n         c.cname as 课程名, s.final as 期末成绩\n  from score s\n  join student st on st.studentno = s.studentno\n  join course c on c.courseno = s.courseno\n  where s.studentno = p_studentno\n  order by s.courseno;\nend$$\ndelimiter ;",
            "call selectscore('20112100072');"
          ],
          "note": "过程名后面必须带括号：call selectscore('...')。"
        },
        {
          "id": "lab6-02",
          "title": "触发器 course_detrigger（after delete 写会话变量）",
          "ask": "在 course 表上创建触发器 course_detrigger，删除一行时把会话变量 per1 设为 'old course deleted!'；删除课程号 c08171 并查询 per1。",
          "points": [
            "after delete on 表 for each row",
            "old.列名 引用被删记录",
            "会话变量 @per1"
          ],
          "sql": [
            "delimiter $$\ndrop trigger if exists course_detrigger$$\ncreate trigger course_detrigger\nafter delete on course\nfor each row\nbegin\n  set @per1 = 'old course deleted!';\nend$$\ndelimiter ;",
            "delete from course where courseno = 'c08171';\nselect @per1;"
          ],
          "note": "delete 触发器里只能用 old，不能用 new。"
        },
        {
          "id": "lab6-03",
          "title": "存储过程 update_email（按姓名改邮箱）",
          "ask": "创建存储过程，给定学生姓名即可把该学生的邮箱改为指定值；执行把「何桐影」的邮箱改为 he@163.com。",
          "points": [
            "两个 in 参数",
            "update ... where sname = p_sname",
            "call 两个实参"
          ],
          "sql": [
            "delimiter $$\ndrop procedure if exists update_email$$\ncreate procedure update_email(in p_sname char(8), in p_email varchar(20))\nbegin\n  update student set email = p_email where sname = p_sname;\nend$$\ndelimiter ;",
            "call update_email('何桐影', 'he@163.com');\nselect studentno, sname, email from student where sname = '何桐影';"
          ],
          "note": "参数名不要和列名同名，否则 update 里会歧义。"
        },
        {
          "id": "lab6-04",
          "title": "存储过程 scoreInfo（三表联合查询）",
          "ask": "创建存储过程 scoreInfo，在 student、course、score 三表中查询学号、姓名、性别、课程名称、期末分数。",
          "points": [
            "无参过程也要写括号",
            "三表 join",
            "按学号/课程号排序"
          ],
          "sql": [
            "use teaching;\ndelimiter $$\ndrop procedure if exists scoreInfo$$\ncreate procedure scoreInfo()\nbegin\n  select st.studentno as 学号, st.sname as 姓名, st.sex as 性别,\n         c.cname as 课程名称, sc.final as 期末分数\n  from student st\n  join score sc on st.studentno = sc.studentno\n  join course c on sc.courseno = c.courseno\n  order by st.studentno, sc.courseno;\nend$$\ndelimiter ;",
            "call scoreInfo();"
          ],
          "note": "过程可以返回结果集，函数不行——这正是两者的核心区别之一。"
        },
        {
          "id": "lab6-05",
          "title": "事件 e_test（每天清表，5 天后停）",
          "ask": "创建事件 e_test，每天定时清空 se_course 表，5 天后停止执行。",
          "points": [
            "create event ... on schedule every 1 day",
            "starts / ends current_timestamp + interval 5 day",
            "do begin ... end"
          ],
          "sql": [
            "delimiter $$\ndrop event if exists e_test$$\ncreate event e_test\non schedule every 1 day\nstarts current_timestamp\nends current_timestamp + interval 5 day\ndo\nbegin\n  truncate table se_course;\nend$$\ndelimiter ;"
          ],
          "note": "event_scheduler 必须是 ON，用 show variables like 'event_scheduler' 检查，set global event_scheduler=on 打开。"
        },
        {
          "id": "lab6-06",
          "title": "触发器 course_del_score（级联删除成绩）",
          "ask": "假设 course 表没有级联删除策略，创建触发器：删除 course 中课程时自动删除 score 中该课程的成绩；删除 c05103 后查询 score 里该课的成绩。",
          "points": [
            "after delete on course",
            "delete from score where courseno = old.courseno",
            "先查后删再查，证明触发器生效"
          ],
          "sql": [
            "delimiter $$\ndrop trigger if exists course_del_score$$\ncreate trigger course_del_score\nafter delete on course\nfor each row\nbegin\n  delete from score where courseno = old.courseno;\nend$$\ndelimiter ;",
            "select studentno, courseno, daily, final from score where courseno = 'c05103';\ndelete from course where courseno = 'c05103';\nselect studentno, courseno, daily, final from score where courseno = 'c05103';  -- 空结果"
          ],
          "note": "如果 score 上有指向 course 的外键且没有 on delete cascade，删除 course 行会先被外键拦住——实验要求先去掉该外键或改成 cascade。"
        }
      ],
      "short": "实验六 存储程序"
    }
  ],
  "syllabus": [
    {
      "no": 1,
      "name": "数据模型的三要素",
      "type": "选择/填空/简答",
      "chapters": [
        1
      ],
      "kw": "三要素",
      "qa": "qa-01",
      "hits": 4
    },
    {
      "no": 2,
      "name": "关系运算",
      "type": "选择/填空/简答",
      "chapters": [
        1
      ],
      "kw": "关系运算|投影|笛卡尔|除运算",
      "qa": "qa-02",
      "hits": 8
    },
    {
      "no": 3,
      "name": "字符集及其层次设置",
      "type": "选择/填空/简答",
      "chapters": [
        2,
        3
      ],
      "kw": "字符集.{0,10}(层次|级别)|层次.{0,6}字符集",
      "qa": "qa-03",
      "hits": 3
    },
    {
      "no": 4,
      "name": "字符序（collation）",
      "type": "选择/填空/简答",
      "chapters": [
        2,
        3
      ],
      "kw": "字符序|collat",
      "qa": "qa-04",
      "hits": 9
    },
    {
      "no": 5,
      "name": "存储引擎",
      "type": "选择/填空/简答",
      "chapters": [
        3
      ],
      "kw": "存储引擎",
      "qa": "qa-05",
      "hits": 26
    },
    {
      "no": 6,
      "name": "标识符",
      "type": "选择/填空/简答",
      "chapters": [
        2
      ],
      "kw": "标识符",
      "qa": "qa-06",
      "hits": 6
    },
    {
      "no": 7,
      "name": "游标",
      "type": "选择/填空/简答",
      "chapters": [
        7
      ],
      "kw": "游标|cursor",
      "qa": "qa-07",
      "hits": 18
    },
    {
      "no": 8,
      "name": "视图的概念及优点",
      "type": "选择/填空/简答",
      "chapters": [
        5
      ],
      "kw": "视图.{0,12}(优点|好处|概念|特点)|虚表",
      "qa": "qa-08",
      "hits": 5
    },
    {
      "no": 9,
      "name": "存储过程和函数的区别",
      "type": "选择/填空/简答",
      "chapters": [
        7
      ],
      "kw": "(存储过程|过程).{0,25}区别|out 参数|函数.{0,12}不能",
      "qa": "qa-09",
      "hits": 4
    },
    {
      "no": 10,
      "name": "设置索引的原则",
      "type": "选择/填空/简答",
      "chapters": [
        5
      ],
      "kw": "索引.{0,10}原则|原则.{0,6}索引",
      "qa": "qa-10",
      "hits": 3
    },
    {
      "no": 11,
      "name": "触发器中 OLD / NEW 的含义",
      "type": "选择/填空/简答",
      "chapters": [
        7
      ],
      "kw": "OLD|NEW|old 关键字|new 关键字",
      "qa": "qa-11",
      "hits": 6
    },
    {
      "no": 12,
      "name": "存储过程的优点",
      "type": "选择/填空/简答",
      "chapters": [
        7
      ],
      "kw": "存储过程.{0,25}优点|优点.{0,10}存储过程",
      "qa": "qa-12",
      "hits": 2
    },
    {
      "no": 13,
      "name": "E-R 图设计与转关系模型",
      "type": "问答/设计（PPT 第4-5页例题）",
      "chapters": [
        1
      ],
      "kw": "E-R|ER 图|概念模型|实体|联系",
      "qa": "qa-13",
      "hits": 17
    }
  ]
};
