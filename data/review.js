/* 自动生成，请勿手改。重建：python tools/build_review.py */
window.REVIEW_DATA = [
  {
    "chapter": 1,
    "title": "MySQL数据库概述",
    "goals": [
      "认识MySQL数据库：了解发展背景、使用优势、系统特性、发行版本与8.0新功能",
      "掌握数据、信息、数据库、SQL、DBMS、DBS等基本概念",
      "理解概念模型、数据模型、关系运算与数据完整性",
      "了解MySQL 8.0的安装配置、工作流程、常用工具与可视化操作"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1.1",
        "title": "MySQL数据库的发展背景",
        "pageRange": "4-4",
        "summary": "介绍MySQL作为开放源码、跨平台的数据库管理系统，属于甲骨文公司，并梳理从1996年1.0版到2026年26.7.0版的发布历程。",
        "points": [
          {
            "term": "MySQL",
            "desc": "开放源码的小型、跨平台数据库管理系统，广泛应用于Internet中小型网站，目前属于甲骨文公司。",
            "page": 4
          },
          {
            "term": "MySQL 1.0",
            "desc": "1996年发布，是能够在小范围内使用的版本。",
            "page": 4
          },
          {
            "term": "MySQL 5.0",
            "desc": "2003年12月发布。",
            "page": 4
          },
          {
            "term": "进入Oracle时代",
            "desc": "2009年4月甲骨文公司收购Sun公司，MySQL自此进入Oracle时代。",
            "page": 4
          },
          {
            "term": "MySQL 5.7.1",
            "desc": "2013年4月发布。",
            "page": 4
          },
          {
            "term": "MySQL 8.0.0",
            "desc": "2016年9月正式发布。",
            "page": 4
          },
          {
            "term": "MySQL 26.7.0",
            "desc": "2026年7月正式推出，是第一个采用新日历版本控制模型的MySQL版本。",
            "page": 4
          }
        ],
        "code": [],
        "tips": []
      },
      {
        "id": "1.2",
        "title": "MySQL使用优势",
        "pageRange": "5-5",
        "summary": "从开放源代码、跨平台性、价格优势以及功能强大使用方便四个方面说明MySQL的使用优势。",
        "points": [
          {
            "term": "开放源代码",
            "desc": "MySQL数据库是开放源代码的数据库。",
            "page": 5
          },
          {
            "term": "跨平台性",
            "desc": "可在Windows、UNIX、Linux和Mac OS等操作系统上运行。",
            "page": 5
          },
          {
            "term": "价格优势",
            "desc": "社区版本免费使用，需要付费的附加功能价格也很便宜。",
            "page": 5
          },
          {
            "term": "多用户多线程",
            "desc": "MySQL是多用户、多线程SQL数据库服务器，是C/S结构的实现。",
            "page": 5
          },
          {
            "term": "组成结构",
            "desc": "由一个服务器守护程序mysqld和很多不同的客户程序和库组成。",
            "page": 5
          },
          {
            "term": "处理能力",
            "desc": "能够快速、有效、安全地处理大量数据，达到快速、健壮和易用的目标。",
            "page": 5
          }
        ],
        "code": [],
        "tips": [
          "C/S结构由服务器守护程序mysqld与多个客户程序、库组成"
        ]
      },
      {
        "id": "1.3",
        "title": "MySQL系统特性",
        "pageRange": "6-7",
        "summary": "介绍MySQL的可移植性、查询优化能力、多语言支持、多种连接技术与存储引擎，以及处理海量数据的能力。",
        "points": [
          {
            "term": "可移植性",
            "desc": "用C和C++编写并用多种编译器测试，为PHP、Java、C、C++、Python和Perl等提供API。",
            "page": 6
          },
          {
            "term": "自动优化查询",
            "desc": "能够自动优化SQL查询算法，有效提高信息查询速度。",
            "page": 6
          },
          {
            "term": "应用方式",
            "desc": "可作为单独应用程序用于客户服务器网络环境，也可作为库嵌入其他软件。",
            "page": 6
          },
          {
            "term": "多语言支持",
            "desc": "GB2312、BIG5、UTF-8等可用作数据表名和列名；8.0以utf8mb4为默认字符集。",
            "page": 7
          },
          {
            "term": "连接技术",
            "desc": "提供TCP/IP、ODBC和JDBC等多种数据库连接技术。",
            "page": 7
          },
          {
            "term": "存储引擎",
            "desc": "支持多种存储引擎，提供管理、检查、优化数据库操作的管理工具。",
            "page": 7
          },
          {
            "term": "海量数据",
            "desc": "具有大型数据库所有常用功能，可处理拥有亿万条记录级的海量数据。",
            "page": 7
          }
        ],
        "code": [],
        "tips": [
          "MySQL8.0默认字符集为utf8mb4，并提供utf8mb4_ja_0900_as_cs等新排序规则"
        ]
      },
      {
        "id": "1.4",
        "title": "MySQL发行版本",
        "pageRange": "8-9",
        "summary": "讲解按操作系统和发布顺序划分版本的方法，说明三段式命名机制，并对比社区版与企业版的区别。",
        "points": [
          {
            "term": "版本划分",
            "desc": "按操作系统类型划分下载版本；按发布顺序划分，MySQL 8.0是普遍可用GA的稳定发布系列。",
            "page": 8
          },
          {
            "term": "命名机制",
            "desc": "由3个数字和1个后缀组成，如MySQL-8.0.39。",
            "page": 8
          },
          {
            "term": "主版本号",
            "desc": "第1个数字8，描述文件格式，所有版本的发行版都有相同文件格式。",
            "page": 8
          },
          {
            "term": "发行级别",
            "desc": "第2个数字0，与主版本号组合构成发行序列号。",
            "page": 8
          },
          {
            "term": "发行系列版本号",
            "desc": "第3个数字39，在此发行系列中的版本号，随每次新分发版本递增。",
            "page": 8
          },
          {
            "term": "社区版",
            "desc": "Community Edition，可自由下载、免费开源。",
            "page": 9
          },
          {
            "term": "企业版",
            "desc": "Enterprise提供最全面高级功能、管理工具和技术支持，需付费，官方提供电话技术支持。",
            "page": 9
          },
          {
            "term": "企业版特性",
            "desc": "支持事务处理，提供完整的提交、回滚、崩溃恢复和行级锁定功能。",
            "page": 9
          }
        ],
        "code": [
          "MySQL-8.0.39"
        ],
        "tips": [
          "社区版免费开源；企业版付费并提供电话技术支持"
        ]
      },
      {
        "id": "1.5",
        "title": "MySQL 8.0的新功能",
        "pageRange": "10-13",
        "summary": "概述MySQL 8.0在数据字典、原子DDL、InnoDB增强、安全账户管理、索引优化、JSON、资源管理及查询优化等方面的新功能。",
        "points": [
          {
            "term": "数据字典",
            "desc": "新增事务类型数据字典，所有数据字典信息和系统表存储在mysql.ibd，元数据用InnoDB存储。",
            "page": 10
          },
          {
            "term": "原子数据定义语句",
            "desc": "支持原子DDL，将字典更新、存储引擎操作和二进制日志写入组合到单个原子事务中。",
            "page": 10
          },
          {
            "term": "InnoDB增强",
            "desc": "自增主键计数器持久化到重做日志；索引损坏标志写入重做日志使其安全。",
            "page": 10
          },
          {
            "term": "死锁检测",
            "desc": "动态变量innodb_deadlock_detect可用于禁用死锁检测，禁用后可能更有效率。",
            "page": 11
          },
          {
            "term": "安全和账户管理",
            "desc": "授权表统一为InnoDB事务表；支持角色Role；维护密码历史；允许账户具有双密码。",
            "page": 11
          },
          {
            "term": "优化器索引",
            "desc": "主要包括隐藏索引Invisible index、降序索引和函数索引三种方式。",
            "page": 12
          },
          {
            "term": "JSON增强",
            "desc": "扩展对JSON的支持，性能更好，能结合结构化数据与JSON半结构化数据。",
            "page": 12
          },
          {
            "term": "查询的优化",
            "desc": "增加公用表表达式、窗口函数、统计直方图、备份锁和配置持久化等功能。",
            "page": 13
          }
        ],
        "code": [],
        "tips": [
          "Grant授权语句不再支持隐式创建用户"
        ]
      },
      {
        "id": "2.1",
        "title": "信息与数据库",
        "pageRange": "15-17",
        "summary": "解释数据与信息的概念及区别，给出数据库的定义与特点，并说明数据库中数据还包含语义描述。",
        "points": [
          {
            "term": "数据(Data)",
            "desc": "描述事物的符号记录，形式有文本、图表、图形、图像、音频、视频等。",
            "page": 15
          },
          {
            "term": "信息(Information)",
            "desc": "具有特定意义的数据，是用一定规则或算法筛选的数据集合。",
            "page": 15
          },
          {
            "term": "信息属性",
            "desc": "具有感知、存储、加工、传播和再生等自然属性，也是有重要价值的社会资源。",
            "page": 15
          },
          {
            "term": "数据库(DB)",
            "desc": "长期存储在计算机内、有组织、可共享的大量数据的集合，冗余度小、独立性高、易扩展。",
            "page": 16
          },
          {
            "term": "数据模型",
            "desc": "数据库中的数据需创建数据模型描述，如网络、层次、关系模型。",
            "page": 16
          },
          {
            "term": "教务管理数据库",
            "desc": "teaching数据库包含学生信息表student和学生成绩表score等。",
            "page": 16
          },
          {
            "term": "语义描述",
            "desc": "数据中还包含数据库对数据的语义描述，不经过语义描述其意义不完整。",
            "page": 17
          }
        ],
        "code": [],
        "tips": [
          "信息是具有特定意义的数据；数据是信息的载体"
        ]
      },
      {
        "id": "2.2",
        "title": "结构化查询语言SQL",
        "pageRange": "18-21",
        "summary": "介绍SQL语言的定义与特点，并按功能说明DDL、DML/DQL、DCL、TPL和CCL各类语言的组成动词与作用。",
        "points": [
          {
            "term": "SQL",
            "desc": "Structured Query Language，用于管理数据的数据库查询和程序设计语言，用于存取、查询和更新数据。",
            "page": 18
          },
          {
            "term": "一体化",
            "desc": "SQL集数据定义DDL、数据操纵DML和数据控制DCL于一体，可完成数据库中全部工作。",
            "page": 19
          },
          {
            "term": "使用方式灵活",
            "desc": "可直接以命令方式交互使用，也可嵌入C、C++、Fortran、COBOL和Java等主语言中使用。",
            "page": 19
          },
          {
            "term": "非过程化",
            "desc": "只需提供操作要求，不必描述操作步骤，也不需要导航。",
            "page": 19
          },
          {
            "term": "语言简洁",
            "desc": "ANSI标准只含94个英文单词，核心功能只用6个动词，语法接近英语口语。",
            "page": 19
          },
          {
            "term": "DDL",
            "desc": "数据定义语言，动词有create、alter和drop，用于创建、修改或删除数据库对象。",
            "page": 20
          },
          {
            "term": "DML",
            "desc": "数据操作语言，动词有select、insert、update和delete，分别查询、插入、修改和删除数据行。",
            "page": 20
          },
          {
            "term": "DQL",
            "desc": "select用得最多也称数据查询语言，常用保留字有where、order by、group by和having。",
            "page": 20
          },
          {
            "term": "DCL",
            "desc": "数据控制语言，包括grant和revoke，确定用户和用户组对数据库对象的访问权限。",
            "page": 21
          },
          {
            "term": "TPL",
            "desc": "事务处理语言，语句包括begin transaction、commit和rollback，确保被DML影响的行及时更新。",
            "page": 21
          },
          {
            "term": "CCL",
            "desc": "指针控制语言，包括declare cursor、fetch into和update where current等语句。",
            "page": 21
          }
        ],
        "code": [],
        "tips": [
          "select属于DML，也称DQL；where、order by、group by、having是DQL常用保留字"
        ]
      },
      {
        "id": "2.3",
        "title": "数据库管理系统",
        "pageRange": "22-23",
        "summary": "说明DBMS位于用户和操作系统之间，是数据库系统的核心，并介绍其存储、查询、事务、恢复四大组成模块。",
        "points": [
          {
            "term": "DBMS",
            "desc": "数据库管理系统，位于用户和操作系统之间，用于建立、使用和维护数据库，是数据库系统的核心。",
            "page": 22
          },
          {
            "term": "DBMS作用",
            "desc": "对数据库统一管理和控制以保证数据安全性和完整性，用户对数据的操作均要通过DBMS。",
            "page": 22
          },
          {
            "term": "DBA",
            "desc": "数据库管理员通过DBMS进行数据库的维护工作。",
            "page": 22
          },
          {
            "term": "存储管理",
            "desc": "Storage Manager，自行配置磁盘空间，将数据存入存储装置的数据库。",
            "page": 23
          },
          {
            "term": "查询处理",
            "desc": "Query Processor，处理用户下达的查询命令，检查语法、优化查询命令。",
            "page": 23
          },
          {
            "term": "事务管理",
            "desc": "Transaction Manager，处理数据库事务，保障事务操作及并发控制、资源锁定。",
            "page": 23
          },
          {
            "term": "恢复管理",
            "desc": "Recovery Manager，主要是日志管理，记录所有操作并可恢复数据到指定时间点。",
            "page": 23
          }
        ],
        "code": [],
        "tips": [
          "DBMS系统架构包括存储管理、查询处理、事务管理、恢复管理4部分"
        ]
      },
      {
        "id": "2.4",
        "title": "数据库系统",
        "pageRange": "24-28",
        "summary": "讲解数据库系统的组成与四大组件，说明用户、数据、软件、硬件的含义，并介绍集中式、C/S、B/S、分布式等体系结构。",
        "points": [
          {
            "term": "DBS",
            "desc": "数据库系统通常由硬件、软件、数据库和用户组成，管理对象是数据。",
            "page": 24
          },
          {
            "term": "四大组件",
            "desc": "数据库系统包括用户、数据、软件和硬件四大组件。",
            "page": 24
          },
          {
            "term": "用户",
            "desc": "执行DDL定义架构，用DML增删查改数据；分终端用户、设计者、系统分析师、应用程序设计师和DBA等。",
            "page": 25
          },
          {
            "term": "数据种类",
            "desc": "包括永久性数据、索引数据、数据字典和事务日志等。",
            "page": 26
          },
          {
            "term": "软件",
            "desc": "数据库环境中使用的软件，包括DBMS、应用程序和开发工具等。",
            "page": 26
          },
          {
            "term": "硬件",
            "desc": "安装数据库相关软件的硬件设备，含主机、磁盘阵列、光驱和备份装置等。",
            "page": 26
          },
          {
            "term": "体系结构",
            "desc": "主要包括集中式、客户-服务器式C/S、浏览器-服务器式B/S和分布式等。",
            "page": 27
          },
          {
            "term": "B/S结构",
            "desc": "将客户机上的应用层分离出来集中到高性能计算机上，成为应用服务器也称Web服务器。",
            "page": 28
          },
          {
            "term": "分布式结构",
            "desc": "多数处理任务由本地计算机访问本地数据库完成，满足地理上分散组织的需求。",
            "page": 28
          }
        ],
        "code": [],
        "tips": [
          "DBA负责创建、监控和维护整个数据库，一般由业务水平较高、资历较深的人员担任"
        ]
      },
      {
        "id": "3.1",
        "title": "概念模型及其表示方法",
        "pageRange": "30-36",
        "summary": "介绍概念模型及实体、属性、候选键、主键、实体型、实体集、联系等概念，说明实体间三种联系并用E-R图表示。",
        "points": [
          {
            "term": "概念模型",
            "desc": "现实世界信息的抽象反映，不依赖具体计算机系统，是现实世界到计算机世界的中间层次。",
            "page": 30
          },
          {
            "term": "实体(Entity)",
            "desc": "客观存在并可以相互区分的事物。",
            "page": 30
          },
          {
            "term": "属性(Attribute)",
            "desc": "实体所具有的某些特性，通过属性可以对实体的特征进行描述。",
            "page": 30
          },
          {
            "term": "候选键和主键",
            "desc": "能唯一标识实体的属性或最小属性组合称候选键，可从中选一个作主键唯一标识数据行。",
            "page": 31
          },
          {
            "term": "主属性与非主属性",
            "desc": "主键里包含的属性称主属性，不包含在主键中的属性称非主属性。",
            "page": 31
          },
          {
            "term": "实体型与实体集",
            "desc": "用实体名及属性名集合抽象刻画同类实体称实体型；同型实体的集合称实体集。",
            "page": 32
          },
          {
            "term": "联系(Relationship)",
            "desc": "现实世界事物之间是有联系的，这些联系必然要在信息世界中加以反映。",
            "page": 32
          },
          {
            "term": "三种联系类型",
            "desc": "两个实体型的联系有一对一1:1、一对多1:M和多对多M:N三种类型。",
            "page": 34
          },
          {
            "term": "E-R模型",
            "desc": "实体-联系模型，信息由实体型、实体属性和实体间的联系三种概念单元表示。",
            "page": 35
          },
          {
            "term": "E-R图表示",
            "desc": "实体型用长方框、属性用椭圆框、联系用菱形框，并用无向边连接。",
            "page": 36
          }
        ],
        "code": [],
        "tips": [
          "E-R图：实体型长方框、属性椭圆框、联系菱形框，边上标联系类型"
        ]
      },
      {
        "id": "3.2",
        "title": "数据模型",
        "pageRange": "37-39",
        "summary": "说明数据模型建立在概念模型基础之上，介绍数据结构、数据操作、完整性约束三要素及四种常用数据模型。",
        "points": [
          {
            "term": "数据模型",
            "desc": "在概念模型基础上建立的适用于数据库层的模型，能精确描述静态特征、动态特征和完整性约束。",
            "page": 37
          },
          {
            "term": "数据结构",
            "desc": "对象和对象间联系的表达与实现，是对象类型的集合，描述数据库系统的静态特性。",
            "page": 37
          },
          {
            "term": "数据操作",
            "desc": "描述数据库系统的动态特征，主要指检索和更新（插入、删除、修改）两类操作。",
            "page": 37
          },
          {
            "term": "完整性约束条件",
            "desc": "一组完整性规则集合，规定数据库状态及变化应满足的条件，保证数据正确、有效、相容。",
            "page": 38
          },
          {
            "term": "关系模型完整性",
            "desc": "在关系模型中，一般关系必须满足实体完整性和参照完整性两个条件。",
            "page": 38
          },
          {
            "term": "常用数据模型",
            "desc": "层次模型、网状模型、关系模型和面向对象模型。",
            "page": 39
          }
        ],
        "code": [],
        "tips": [
          "数据模型三要素：数据结构、数据操作、完整性约束条件"
        ]
      },
      {
        "id": "3.3",
        "title": "关系运算",
        "pageRange": "40-52",
        "summary": "介绍选择、投影、连接三种关系运算，讲解数据依赖与1NF/2NF/3NF范式理论，并说明实体、域、参照、事务和用户定义完整性。",
        "points": [
          {
            "term": "关系运算",
            "desc": "关系数据库主要支持选择、投影和连接三种关系运算。",
            "page": 40
          },
          {
            "term": "选择",
            "desc": "从一个表中找出满足指定条件的记录行形成新表，从行的角度运算，新表关系模式不变。",
            "page": 40
          },
          {
            "term": "投影",
            "desc": "从一个表中找出若干字段形成新表，从列的角度运算，字段个数一般比原表少或顺序不同。",
            "page": 41
          },
          {
            "term": "连接",
            "desc": "将两个表中的行按一定条件横向结合形成新表，用于从两个表中选择满足条件的记录。",
            "page": 42
          },
          {
            "term": "数据依赖",
            "desc": "一个关系内部属性与属性之间的约束关系，通过属性间值的相等与否体现，是数据内在性质。",
            "page": 43
          },
          {
            "term": "范式",
            "desc": "数据库设计规则，遵守这些规则将创建设计良好的数据库。",
            "page": 43
          },
          {
            "term": "第一范式1NF",
            "desc": "目标是确保每列的原子性，每列都是不可再分的最小数据单元。",
            "page": 44
          },
          {
            "term": "第二范式2NF",
            "desc": "在1NF基础上确保表中每列都和主码相关，每个非主属性完全函数依赖于主码。",
            "page": 44
          },
          {
            "term": "第三范式3NF",
            "desc": "在2NF基础上确保每列都和码直接相关而非间接相关，非码列之间不相互依赖。",
            "page": 45
          },
          {
            "term": "实体完整性",
            "desc": "关系的主关键字不能取空值，主属性不得取空值，复合主键的所有主属性均不得取空。",
            "page": 50
          },
          {
            "term": "域完整性",
            "desc": "确保属性中只允许一个有效数据，域是属性可能值的范围，是否可空也是其一部分。",
            "page": 51
          },
          {
            "term": "参照完整性",
            "desc": "定义建立关系之间联系的主关键字与外部关键字引用的约束条件。",
            "page": 51
          },
          {
            "term": "事务完整性",
            "desc": "事务确保每个逻辑单元工作作为单个事务执行，具有原子性、一致性、隔离性和持久性。",
            "page": 52
          },
          {
            "term": "用户定义完整性",
            "desc": "根据应用环境要求和实际需要，对具体应用数据提出约束性条件，由关系模型定义并检验。",
            "page": 52
          }
        ],
        "code": [],
        "tips": [
          "1NF原子性→2NF完全依赖主码→3NF直接依赖码；重复组非规范化"
        ]
      },
      {
        "id": "4.1",
        "title": "MySQL 8.0安装和配置步骤",
        "pageRange": "54-84",
        "summary": "讲解官网下载、zip解压式与msi式安装，说明解压目录、my.ini配置、环境变量、服务安装启动、登录改密以及安装类型与配置用途。",
        "points": [
          {
            "term": "下载来源",
            "desc": "到MySQL官方网站(http://dev.mysql.com/downloads)找到要安装的版本下载。",
            "page": 54
          },
          {
            "term": "安装方式",
            "desc": "zip解压式和msi式；MSI默认安装到C:\\Program Files\\MySQL且无法选择路径，C盘不足可选ZIP版。",
            "page": 55
          },
          {
            "term": "bin目录",
            "desc": "放置可执行文件，如mysql.exe、mysqld.exe、mysqlshow.exe等。",
            "page": 58
          },
          {
            "term": "my.ini配置",
            "desc": "设置port=3306、basedir、datadir、max_connections=200、字符集utf8mb4和默认引擎INNODB等。",
            "page": 59
          },
          {
            "term": "初始化",
            "desc": "mysqld --initialize-insecure 对数据库初始化，执行后解压目录多出data目录存放日志和数据库。",
            "page": 68
          },
          {
            "term": "服务管理",
            "desc": "mysqld install mysql8.0.27添加服务；sc delete mysql8.0.27删除服务；net start mysql8.0.27启动。",
            "page": 69
          },
          {
            "term": "登录与改密",
            "desc": "mysql -u root -p -P3306登录；用ALTER USER修改密码；flush privileges刷新权限。",
            "page": 72
          },
          {
            "term": "安装类型",
            "desc": "msi安装提供Developer Default、Server only、Client only、Full、Custom五种类型。",
            "page": 79
          },
          {
            "term": "Config Type",
            "desc": "提供development、server、dedicated三种用途选项，本机一般选development占用资源少。",
            "page": 83
          }
        ],
        "code": [
          "port=3306",
          "basedir=D:/mysql8.0.27/mysql-8.0.27-winx64",
          "datadir=D:/mysql8.0.27/mysql-8.0.27-winx64/data",
          "max_connections=200",
          "max_connect_errors=10",
          "character-set-server=utf8mb4",
          "default-storage-engine=INNODB",
          "default_authentication_plugin=mysql_native_password",
          "mysqld --initialize-insecure",
          "mysqld install mysql8.0.27",
          "sc delete mysql8.0.27",
          "net start mysql8.0.27",
          "mysql -u root -p -P3306",
          "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';",
          "flush privileges",
          "exit 或者 quit",
          "mysql -h localhost -u root -p"
        ],
        "tips": [
          "删除服务用sc delete；修改密码后需flush privileges刷新权限"
        ]
      },
      {
        "id": "4.2",
        "title": "MySQL的工作流程",
        "pageRange": "85-88",
        "summary": "按七个步骤说明MySQL服务启动、读取配置、生成实例进程、派生线程、建立通信链路、发送请求到返回响应的完整工作流程。",
        "points": [
          {
            "term": "启动服务",
            "desc": "操作系统用户启动MySQL服务。",
            "page": 86
          },
          {
            "term": "读取配置",
            "desc": "服务启动期间首先将配置文件中的参数信息读入服务器内存。",
            "page": 86
          },
          {
            "term": "生成实例进程",
            "desc": "根据配置参数或编译默认值生成一个服务实例进程Instance。",
            "page": 86
          },
          {
            "term": "派生线程",
            "desc": "服务实例进程派生出多个线程为多个客户机提供服务。",
            "page": 86
          },
          {
            "term": "建立通信链路",
            "desc": "数据库用户选择登录主机、开启客户机、输入账户名密码，建立客户机与服务器的通信链路。",
            "page": 87
          },
          {
            "term": "发送请求",
            "desc": "用户在客户机输入MySQL命令或SQL语句，沿通信链路传送给服务实例。",
            "page": 87
          },
          {
            "term": "返回响应",
            "desc": "服务实例解析命令并选择执行计划运行，将结果沿通信链路返回给客户机。",
            "page": 88
          },
          {
            "term": "会话结束",
            "desc": "数据库用户关闭客户机，通信链路断开，该客户机对应的MySQL会话结束。",
            "page": 88
          }
        ],
        "code": [],
        "tips": [
          "请求：客户机→服务器；响应：服务器→客户机"
        ]
      },
      {
        "id": "4.3",
        "title": "MySQL数据库工具简介",
        "pageRange": "89-92",
        "summary": "介绍MySQL服务器端和客户端的常用命令行工具，包括mysqld、mysql.server、mysql、mysqladmin、mysqldump等的作用。",
        "points": [
          {
            "term": "mysqld",
            "desc": "SQL后台程序即MySQL服务器进程，必须运行之后客户端才能连接服务器访问数据库。",
            "page": 89
          },
          {
            "term": "mysql.server",
            "desc": "服务器启动脚本，UNIX分发版包括，可调用mysqld_safe来启动MySQL服务器。",
            "page": 90
          },
          {
            "term": "mysql_multi",
            "desc": "服务器启动脚本，可以启动或停止系统上安装的多个服务器。",
            "page": 90
          },
          {
            "term": "mysql_install_db",
            "desc": "用默认权限创建MySQL授权表，通常只在系统首次安装MySQL时执行一次。",
            "page": 90
          },
          {
            "term": "mysql",
            "desc": "客户端工具，交互式输入SQL语句或从文件以批处理模式执行。",
            "page": 91
          },
          {
            "term": "mysqladmin",
            "desc": "执行管理操作的客户程序，如创建删除数据库、重载授权表、刷新表到硬盘等。",
            "page": 91
          },
          {
            "term": "mysqlbinlog",
            "desc": "从二进制日志读取语句的工具，可帮助系统从崩溃中恢复。",
            "page": 92
          },
          {
            "term": "mysqldump",
            "desc": "将MySQL数据库转储到一个文件（如SQL语句或文本文件）的客户程序。",
            "page": 92
          }
        ],
        "code": [],
        "tips": [
          "mysqld是服务器进程；mysql是交互式客户端工具"
        ]
      },
      {
        "id": "4.4",
        "title": "MySQL8.0的启动和登录",
        "pageRange": "93-101",
        "summary": "说明Windows下启动服务的两种方式与三种启动类型，介绍DOS窗口和客户端两种登录方式及登录成功后的提示信息含义。",
        "points": [
          {
            "term": "启动方式",
            "desc": "Windows下通过cmd控制台(net start/stop mysql80)或手动执行services.msc两种方式启动服务。",
            "page": 93
          },
          {
            "term": "启动类型",
            "desc": "服务启动类型有自动、手动和已禁用三种。",
            "page": 94
          },
          {
            "term": "登录方式",
            "desc": "Windows下有两种：DOS窗口命令行方式登录，或在MySQL客户端直接登录。",
            "page": 95
          },
          {
            "term": "登录命令",
            "desc": "mysql -u root -p，-u后紧跟用户名，-p表示用户密码，按Enter输入密码。",
            "page": 96
          },
          {
            "term": "命令结束符",
            "desc": "MySQL控制台命令以分号(;)或\\g结束，遇到结束符就开始执行命令。",
            "page": 98
          },
          {
            "term": "连接id",
            "desc": "Your MySQL connection id表示数据库连接次数，新安装首次登录显示1。",
            "page": 98
          },
          {
            "term": "帮助命令",
            "desc": "输入help;或\\h可以查看帮助信息，\\c可清除当前输入语句。",
            "page": 100
          },
          {
            "term": "查看时间",
            "desc": "select now();可查看系统当前时间。",
            "page": 101
          }
        ],
        "code": [
          "net start mysql80",
          "net stop mysql80",
          "services.msc",
          "mysql -u root -p",
          "help;",
          "select now();"
        ],
        "tips": [
          "连接的id表示连接次数，新安装首次登录显示1"
        ]
      },
      {
        "id": "4.5",
        "title": "MySQL常用可视化软件的基本操作",
        "pageRange": "102-110",
        "summary": "介绍MySQL Workbench、phpMyAdmin和Navicat等图形管理工具，说明Workbench的安装步骤与创建连接、测试连接的操作。",
        "points": [
          {
            "term": "图形管理工具",
            "desc": "常用的有MySQL Workbench、phpMyAdmin和Navicat等软件。",
            "page": 102
          },
          {
            "term": "MySQL Workbench",
            "desc": "为数据库管理员、程序开发者和系统规划师提供可视化设计、模型建立及数据库管理功能。",
            "page": 102
          },
          {
            "term": "Workbench功能",
            "desc": "包含创建复杂E-R数据模型、正向和逆向数据库工程，以及文档任务管理。",
            "page": 102
          },
          {
            "term": "独立安装",
            "desc": "mysql-workbench-community-8.0.22-winx64版本可独立于软件集合安装。",
            "page": 103
          },
          {
            "term": "连接数据库",
            "desc": "通过Database|Manage Connections命令输入连接名称，Test Connection测试并输入root密码。",
            "page": 110
          },
          {
            "term": "可视化操作",
            "desc": "连接后可通过图形界面执行SQL实现数据库、表和数据添加、删除、修改等操作。",
            "page": 110
          }
        ],
        "code": [],
        "tips": [
          "创建连接后需Test Connection并输入root密码，测试成功再单击OK"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch1-ppt-s01",
        "type": "single",
        "stem": "目前MySQL数据库属于下列哪家公司？",
        "options": [
          "A. 微软(Microsoft)",
          "B. 甲骨文(Oracle)",
          "C. IBM",
          "D. Sun公司"
        ],
        "answer": "B",
        "analysis": "解析：PPT第4页指出MySQL目前属于甲骨文公司，2009年4月甲骨文收购Sun公司后MySQL进入Oracle时代。",
        "page": 4
      },
      {
        "id": "ch1-ppt-s02",
        "type": "single",
        "stem": "MySQL 8.0.0正式发布的时间是？",
        "options": [
          "A. 1996年",
          "B. 2003年12月",
          "C. 2016年9月",
          "D. 2026年7月"
        ],
        "answer": "C",
        "analysis": "解析：PPT第4页明确2016年9月MySQL 8.0.0正式发布；2026年7月推出的是26.7.0。",
        "page": 4
      },
      {
        "id": "ch1-ppt-s03",
        "type": "single",
        "stem": "MySQL 8.0默认的字符集是？",
        "options": [
          "A. latin1",
          "B. gb2312",
          "C. utf8mb4",
          "D. BIG5"
        ],
        "answer": "C",
        "analysis": "解析：PPT第7页指出MySQL8.0以utf8mb4为默认字符集，并提供新的排序规则。",
        "page": 7
      },
      {
        "id": "ch1-ppt-s04",
        "type": "single",
        "stem": "下列不属于数据定义语言DDL的动词是？",
        "options": [
          "A. create",
          "B. alter",
          "C. drop",
          "D. grant"
        ],
        "answer": "D",
        "analysis": "解析：PPT第20页指出DDL的语句包括create、alter和drop；第21页指出grant属于数据控制语言DCL。",
        "page": 20
      },
      {
        "id": "ch1-ppt-s05",
        "type": "single",
        "stem": "DBMS的中文含义是？",
        "options": [
          "A. 数据库系统",
          "B. 数据库管理系统",
          "C. 数据库",
          "D. 数据字典"
        ],
        "answer": "B",
        "analysis": "解析：PPT第22页指出数据库管理系统(DBMS)位于用户和操作系统之间，是数据库系统的核心。",
        "page": 22
      },
      {
        "id": "ch1-ppt-s06",
        "type": "single",
        "stem": "关系数据库主要支持的关系运算不包括下列哪一种？",
        "options": [
          "A. 选择",
          "B. 投影",
          "C. 连接",
          "D. 删除"
        ],
        "answer": "D",
        "analysis": "解析：PPT第40页指出关系数据库主要支持选择、投影和连接三种关系运算，删除不属于关系运算。",
        "page": 40
      },
      {
        "id": "ch1-ppt-s07",
        "type": "single",
        "stem": "在E-R图中，实体型用哪种图形表示？",
        "options": [
          "A. 椭圆框",
          "B. 菱形框",
          "C. 长方框",
          "D. 圆形框"
        ],
        "answer": "C",
        "analysis": "解析：PPT第36页指出实体型用长方框表示，属性用椭圆框表示，联系用菱形框表示。",
        "page": 36
      },
      {
        "id": "ch1-ppt-s08",
        "type": "single",
        "stem": "第一范式（1NF）的目标是？",
        "options": [
          "A. 确保每列的原子性",
          "B. 确保每列都和主码相关",
          "C. 确保每列和码直接相关",
          "D. 消除传递依赖"
        ],
        "answer": "A",
        "analysis": "解析：PPT第44页指出第一范式的目标是确保每列的原子性，每列都是不可再分的最小数据单元。",
        "page": 44
      },
      {
        "id": "ch1-ppt-b01",
        "type": "blank",
        "stem": "MySQL是一个开放源码的____、跨平台数据库管理系统。",
        "answer": [
          "小型",
          "small"
        ],
        "answerText": "小型",
        "analysis": "解析：PPT第4页首句指出MySQL是一个开放源码的小型、跨平台数据库管理系统。",
        "page": 4
      },
      {
        "id": "ch1-ppt-b02",
        "type": "blank",
        "stem": "数据库(Database，DB)是长期存储在计算机内、有组织、可____的大量数据的集合。",
        "answer": [
          "共享",
          "可共享"
        ],
        "answerText": "共享",
        "analysis": "解析：PPT第16页给出数据库定义：长期存储在计算机内、有组织、可共享的大量数据的集合。",
        "page": 16
      },
      {
        "id": "ch1-ppt-b03",
        "type": "blank",
        "stem": "数据定义语言DDL的语句包括动词create、alter和____。",
        "answer": [
          "drop",
          "DROP"
        ],
        "answerText": "drop",
        "analysis": "解析：PPT第20页指出数据定义语言DDL的语句包括动词create、alter和drop。",
        "page": 20
      },
      {
        "id": "ch1-ppt-b04",
        "type": "blank",
        "stem": "数据库系统的四大组件是用户、数据、____和硬件。",
        "answer": [
          "软件"
        ],
        "answerText": "软件",
        "analysis": "解析：PPT第24页指出数据库系统包括四大组件：用户、数据、软件和硬件。",
        "page": 24
      },
      {
        "id": "ch1-ppt-b05",
        "type": "blank",
        "stem": "在E-R概念模型中，实体间的联系用____框表示。",
        "answer": [
          "菱形",
          "菱形框"
        ],
        "answerText": "菱形",
        "analysis": "解析：PPT第36页指出实体间的联系用菱形框表示，框内写联系名。",
        "page": 36
      },
      {
        "id": "ch1-ppt-b06",
        "type": "blank",
        "stem": "确保每列都是不可再分的最小数据单元，即满足第____范式。",
        "answer": [
          "一",
          "1",
          "1NF"
        ],
        "answerText": "一",
        "analysis": "解析：PPT第44页指出第一范式（1NF）的目标是确保每列的原子性，每列都是不可再分的最小数据单元。",
        "page": 44
      }
    ]
  },
  {
    "chapter": 2,
    "title": "MySQL8.0语言基础",
    "goals": [
      "掌握MySQL基本语法要素：字符集与标识符、常量与变量",
      "掌握MySQL的数据类型：字符串类型、数字类型、日期和时间类型、二进制类型",
      "掌握运算符与表达式：算术、比较、逻辑、位运算及运算符优先级",
      "掌握常用函数：数学函数、字符串函数、日期和时间函数、聚合函数及其他函数"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1.1",
        "title": "字符集与标识符",
        "pageRange": "5-11",
        "summary": "介绍字符与字符序概念、字符序命名惯例，列举utf8mb4、UTF-8、latin1、GB2312、GBK等常用字符集及其特点。",
        "points": [
          {
            "term": "字符(Character)",
            "desc": "人类语言中最小的表义符号；MySQL8.0支持41种字符集和272个校对原则。",
            "page": 5
          },
          {
            "term": "字符序",
            "desc": "同一字符集内字符之间的比较规则，每个字符序唯一对应一种字符集。",
            "page": 5
          },
          {
            "term": "默认字符序",
            "desc": "一个字符集有一个默认字符校对原则Default Collation；服务器默认字符集是utf8mb4。",
            "page": 5
          },
          {
            "term": "字符集层次",
            "desc": "MySQL字符集支持细化到服务器Server、数据库DataBase、数据表Table和连接层Connection四个层次。",
            "page": 5
          },
          {
            "term": "字符序命名惯例",
            "desc": "以对应字符集名开头，以_ci大小写不敏感、_cs大小写敏感或_bin按编码值比较结尾。",
            "page": 6
          },
          {
            "term": "utf8mb4",
            "desc": "MySQL 8.0默认字符集编码，mb4表示most bytes 4最多占4字节，默认字符序utf8mb4_0900_ai_ci。",
            "page": 9
          },
          {
            "term": "UTF-8",
            "desc": "变长字符编码，英文用8位1字节、中文用24位3字节编码，通用性强。",
            "page": 10
          },
          {
            "term": "latin1",
            "desc": "早期MySQL默认字符集，8位字符集，名称ISO 8859-1 Latin 1。",
            "page": 10
          },
          {
            "term": "GB2312与GBK",
            "desc": "gb2312是简体中文字符集；GBK在GB2312基础上扩容兼容，用双字节表示中英文字符。",
            "page": 11
          },
          {
            "term": "字符集转换",
            "desc": "GBK、GB2312、latin1等与UTF-8之间必须通过Unicode编码才能相互转换。",
            "page": 11
          }
        ],
        "code": [
          "show character set;",
          "show collation like 'utf8mb4%';"
        ],
        "tips": [
          "_ci大小写不敏感、_cs大小写敏感、_bin按编码值比较"
        ]
      },
      {
        "id": "1.2",
        "title": "MySQL字符集的转换过程",
        "pageRange": "12-14",
        "summary": "介绍通过修改my.ini、使用set命令临时修改字符集的方法，并给出连接层乱码的解决办法。",
        "points": [
          {
            "term": "修改my.ini",
            "desc": "在C:\\ProgramData\\MySQL\\MySQL Server 8.0的my.ini中[mysql]键值下加default-character-set=utf8mb4。",
            "page": 12
          },
          {
            "term": "重启生效",
            "desc": "修改配置文件后需重启MySQL服务，再用show variables like 'character%'查看。",
            "page": 12
          },
          {
            "term": "命令临时修改",
            "desc": "用set命令修改字符集只是临时更改，服务器重启后恢复默认设置。",
            "page": 13
          },
          {
            "term": "乱码原因",
            "desc": "表默认字符集为utf8mb4且用UTF-8发送查询仍乱码，问题通常出在connection连接层。",
            "page": 14
          },
          {
            "term": "乱码解决",
            "desc": "发送查询前执行set names('utf8mb4')，等价于设置client、results、connection三者字符集。",
            "page": 14
          }
        ],
        "code": [
          "default-character-set=utf8mb4",
          "show variables like 'character%';",
          "set character_set_client = utf8mb4;",
          "set character_set_connection = utf8mb4;",
          "set character_set_database = utf8mb4;",
          "set character_set_results = utf8mb4;",
          "set character_set_server = utf8mb4;",
          "set names('utf8mb4');"
        ],
        "tips": [
          "set命令修改字符集是临时的，重启后失效；乱码问题多出在connection连接层"
        ]
      },
      {
        "id": "1.3",
        "title": "MySQL中的字符集层次设置",
        "pageRange": "15-18",
        "summary": "讲解描述字符集的系统变量及服务器、数据库、表、列各层字符集的依存关系。",
        "points": [
          {
            "term": "character_set_server",
            "desc": "与collation_server一起表示服务器字符集，是默认的内部操作字符集。",
            "page": 15
          },
          {
            "term": "character_set_client",
            "desc": "客户端来源数据使用的字符集，决定MySQL如何解释客户端发来的SQL命令文字。",
            "page": 15
          },
          {
            "term": "character_set_connection",
            "desc": "与collation_connection一起表示连接层字符集，决定MySQL如何处理客户端发来的SQL命令。",
            "page": 16
          },
          {
            "term": "character_set_results",
            "desc": "查询结果字符集，决定发给客户端的结果中文字的编码。",
            "page": 16
          },
          {
            "term": "character_set_database",
            "desc": "与collation_database一起表示当前选中数据库的默认字符集。",
            "page": 16
          },
          {
            "term": "character_set_system",
            "desc": "系统元数据的字符集utf8mb4，数据库、表和列的定义都使用这个字符集。",
            "page": 16
          },
          {
            "term": "表与列字符集",
            "desc": "表的字符集在create table参数里设置并为列提供默认值；列的字符集决定本列文字数据的存储编码。",
            "page": 17
          },
          {
            "term": "字符集依存关系",
            "desc": "服务器级决定数据库、客户端、连接层和结果集；数据库决定表；表决定字段。",
            "page": 18
          }
        ],
        "code": [],
        "tips": [
          "collation_开头变量描述校对原则；列的比较规则比collation_connection高"
        ]
      },
      {
        "id": "1.4",
        "title": "标识符和关键字",
        "pageRange": "19-20",
        "summary": "说明MySQL脚本文件后缀、标识符命名规则与大小写敏感性，以及关键字数量与使用注意事项。",
        "points": [
          {
            "term": "脚本文件",
            "desc": "MySQL脚本由一条或多条语句组成，保存时文件后缀名一般为.sql。",
            "page": 19
          },
          {
            "term": "标识符",
            "desc": "用来命名数据库、表、列、变量等对象，以便在脚本中其他地方引用。",
            "page": 19
          },
          {
            "term": "命名规则",
            "desc": "由以字母或下划线开头的字母、数字或下划线(_)序列组成。",
            "page": 19
          },
          {
            "term": "大小写敏感",
            "desc": "取决于操作系统，Windows下不敏感，大多数linux/unix系统下大小写敏感。",
            "page": 19
          },
          {
            "term": "关键字",
            "desc": "MySQL5.7约有600个关键词，8.0在此基础上增加90多个。",
            "page": 20
          },
          {
            "term": "使用注意",
            "desc": "所有关键字都有特定含义，应尽量避免作为标识符使用。",
            "page": 20
          }
        ],
        "code": [],
        "tips": [
          "标识符是否区分大小写取决于操作系统"
        ]
      },
      {
        "id": "1.5",
        "title": "常量和变量",
        "pageRange": "21-25",
        "summary": "解释常量概念，区分全局系统变量与会话系统变量，说明系统变量的查看、修改与默认值设置方法。",
        "points": [
          {
            "term": "常量",
            "desc": "也称文字值或标量值，是指某个过程中值始终不改的量。",
            "page": 21
          },
          {
            "term": "系统变量类型",
            "desc": "包括全局系统变量和会话系统变量两种类型。",
            "page": 23
          },
          {
            "term": "全局变量",
            "desc": "MySQL启动时由服务器初始化为默认值，影响整个实例，修改会影响整个服务器。",
            "page": 23
          },
          {
            "term": "会话变量",
            "desc": "每次建立新连接时由MySQL初始化，前面加@符号，会话结束即释放，只影响当前连接。",
            "page": 23
          },
          {
            "term": "查看系统变量",
            "desc": "应用于SQL语句时多数系统变量前需加两个@符号，可用show variables like查看。",
            "page": 24
          },
          {
            "term": "修改系统变量",
            "desc": "可用set语句修改，如set @@global.sort_buffer_size=25000改变全局值。",
            "page": 25
          },
          {
            "term": "默认值",
            "desc": "将系统变量值设为MySQL默认值可使用default关键字。",
            "page": 25
          }
        ],
        "code": [
          "select @@version,current_date;",
          "show [global|session] variables [like '字符串'];",
          "show variables like 'a%';",
          "set @@global.sort_buffer_size=25000;",
          "set @@session.sql_select_limit=100;",
          "select @@local.sql_select_limit;",
          "set @@local.sql_select_limit=default;"
        ],
        "tips": [
          "全局变量影响整个服务器，会话变量只影响当前数据库连接"
        ]
      },
      {
        "id": "2.1",
        "title": "字符串类型",
        "pageRange": "27-29",
        "summary": "介绍字符串类型分为普通文本字符串char/varchar和特殊类型set/enum，并说明char与varchar的区别。",
        "points": [
          {
            "term": "字符串类型",
            "desc": "在数据库中存储字符串的数据类型，分普通文本字符串和特殊类型两类。",
            "page": 27
          },
          {
            "term": "普通文本字符串",
            "desc": "包括char和varchar类型。",
            "page": 27
          },
          {
            "term": "特殊类型",
            "desc": "包括set和enum两种特殊字符串类型。",
            "page": 27
          },
          {
            "term": "char",
            "desc": "长度被固定为创建表所声明的长度，取值在1~255之间。",
            "page": 28
          },
          {
            "term": "varchar",
            "desc": "值是变长的字符串，取值范围和char一样。",
            "page": 28
          }
        ],
        "code": [],
        "tips": [
          "char定长、varchar变长，取值范围均为1~255"
        ]
      },
      {
        "id": "2.2",
        "title": "数字类型",
        "pageRange": "30-33",
        "summary": "介绍整数类型及unsigned、zerofill、AUTO_INCREMENT属性，讲解浮点与定点类型以及decimal的语法。",
        "points": [
          {
            "term": "整数类型",
            "desc": "数据库中最基本的数据类型；标准SQL支持integer和smallint，MySQL还扩展tinyint、mediumint、bigint。",
            "page": 30
          },
          {
            "term": "unsigned",
            "desc": "默认情况下整数可表示正负整数，只希望表示正整数时用unsigned修饰。",
            "page": 31
          },
          {
            "term": "zerofill",
            "desc": "数字位数不够需用0填充时可使用关键字zerofill。",
            "page": 31
          },
          {
            "term": "显示宽度",
            "desc": "插入的整数位数大于指定显示宽度时，按整数实际值存储。",
            "page": 31
          },
          {
            "term": "AUTO_INCREMENT",
            "desc": "需要产生唯一标识符或顺序值时使用，只适用于整数类型；一个表最多只能有一个该字段。",
            "page": 32
          },
          {
            "term": "自增字段约束",
            "desc": "AUTO_INCREMENT字段应为NOT NULL且定义为PRIMARY KEY或UNIQUE，值从1开始每行增加1。",
            "page": 32
          },
          {
            "term": "浮点数据类型",
            "desc": "包括单精度float和双精度double；定点数类型就是decimal。",
            "page": 33
          },
          {
            "term": "decimal",
            "desc": "精准数据类型，语法DECIMAL(M,D)，M为精度范围1~65默认10，D为标度范围0~30且不超过M。",
            "page": 33
          }
        ],
        "code": [
          "DECIMAL(M,D)",
          "unsigned",
          "zerofill",
          "AUTO_INCREMENT"
        ],
        "tips": [
          "AUTO_INCREMENT字段值从1开始，插入NULL时取当前最大值加1"
        ]
      },
      {
        "id": "2.3",
        "title": "日期和时间数据类型",
        "pageRange": "34-36",
        "summary": "介绍year、date、time、datetime、timestamp五种日期时间类型，说明YEAR取值格式与DATETIME/TIMESTAMP的时区区别。",
        "points": [
          {
            "term": "日期时间类型",
            "desc": "MySQL有多种表示日期和时间的数据类型。",
            "page": 34
          },
          {
            "term": "year",
            "desc": "表示年份。",
            "page": 34
          },
          {
            "term": "date",
            "desc": "表示日期。",
            "page": 34
          },
          {
            "term": "time",
            "desc": "表示时间。",
            "page": 34
          },
          {
            "term": "datetime和timestamp",
            "desc": "表示日期和时间。",
            "page": 34
          },
          {
            "term": "YEAR取值",
            "desc": "年份值可为2位或4位默认4位；4位范围1901~2155，2位70~99表示1970~1999，01~69表示2001~2069。",
            "page": 36
          },
          {
            "term": "时区区别",
            "desc": "TIMESTAMP类型与时区相关，而DATETIME则与时区无关。",
            "page": 36
          },
          {
            "term": "TIMESTAMP默认值",
            "desc": "表中第一个TIMESTAMP字段默认值为CURRENT_TIMESTAMP，第二个默认0000-00-00 00:00:00。",
            "page": 36
          }
        ],
        "code": [],
        "tips": [
          "TIMESTAMP与时区相关，DATETIME与时区无关"
        ]
      },
      {
        "id": "2.4",
        "title": "二进制类型",
        "pageRange": "37-38",
        "summary": "介绍二进制类型与长文本类型，说明text适合存储长文本、blob适合存储二进制数据。",
        "points": [
          {
            "term": "二进制类型",
            "desc": "在数据库中存储二进制数据的数据类型。",
            "page": 37
          },
          {
            "term": "包含类型",
            "desc": "包括binary、varbinary、bit、tinyblob、blob、mediumblob和longblob类型。",
            "page": 37
          },
          {
            "term": "长文本类型",
            "desc": "tinytext、longtext和text等适合存储长文本。",
            "page": 37
          },
          {
            "term": "text和blob",
            "desc": "大小可以改变；text适合存储长文本，blob适合存储二进制数据，支持文本、声音和图像等。",
            "page": 37
          }
        ],
        "code": [],
        "tips": [
          "存储图片等二进制文件常用blob类型"
        ]
      },
      {
        "id": "3.1",
        "title": "算术运算符",
        "pageRange": "41-42",
        "summary": "介绍加、减、乘、除、求余等算术运算符，说明其多操作数运算及除以0返回null的规则。",
        "points": [
          {
            "term": "算术运算符",
            "desc": "MySQL支持加、减、乘、除、求余五种算术运算符。",
            "page": 41
          },
          {
            "term": "多操作数",
            "desc": "加、减、乘可以同时运算多个操作数，除号(/)和求余(%)也可同时计算多个操作数。",
            "page": 41
          },
          {
            "term": "加运算",
            "desc": "加(+)可连接两个字符串，或计算某个日期增加的天数、某个时间的秒数等。",
            "page": 41
          },
          {
            "term": "减运算",
            "desc": "减(-)可用于计算某个日期减少的天数、某个时间的秒数等。",
            "page": 41
          },
          {
            "term": "div与mod",
            "desc": "div()和mod()只有两个参数；除以0是不允许的，MySQL会返回null。",
            "page": 41
          },
          {
            "term": "select输出",
            "desc": "select语句具有输出功能，能够显示函数和表达式的值。",
            "page": 39
          }
        ],
        "code": [
          "select 3+2,1.5*3,3/5,100-23.5,5%3;"
        ],
        "tips": [
          "除以0返回null而不是报错"
        ]
      },
      {
        "id": "3.2",
        "title": "比较运算符",
        "pageRange": "43-51",
        "summary": "讲解=、<>、!=、>、is null、between and、in、like、regexp等比较运算符的用法与空值判断规则。",
        "points": [
          {
            "term": "比较运算符",
            "desc": "查询数据时最常用的一类运算符，用于判断表中哪些记录符合条件。",
            "page": 43
          },
          {
            "term": "运算符=",
            "desc": "判断数字、字符串和表达式是否相等，相等返回1否则0；按字符ASCII码比较；不能判断空值。",
            "page": 44
          },
          {
            "term": "<>和!=",
            "desc": "判断是否不相等，不相等返回1否则0，同样不能用于判断空值。",
            "page": 44
          },
          {
            "term": "is null",
            "desc": "判断操作数是否为空值，为null返回1否则0；is not null与之相反。",
            "page": 46
          },
          {
            "term": "空值判断",
            "desc": "=、<>、!=、>等都不能判断null，结果返回null；null和'null'不同。",
            "page": 46
          },
          {
            "term": "between and",
            "desc": "判断数据是否在某个取值范围，x1大于等于m且小于等于n返回1，可用not取反。",
            "page": 47
          },
          {
            "term": "in",
            "desc": "判断数据是否存在于某个集合，等于值1到值n中任何一个返回1，否则返回0。",
            "page": 48
          },
          {
            "term": "like",
            "desc": "匹配字符串，%匹配任意个字符，_匹配一个字符。",
            "page": 49
          },
          {
            "term": "regexp",
            "desc": "用正则表达式匹配字符串，常与^开头、$结尾和.代表一个字符一起使用。",
            "page": 50
          }
        ],
        "code": [
          "x1 between m and n",
          "x1 in (值1,值2,…,值n)",
          "x1 like s1",
          "x1 regexp '匹配方式'"
        ],
        "tips": [
          "判断空值只能用is null或is not null，不能用=或<>"
        ]
      },
      {
        "id": "3.3",
        "title": "逻辑运算符",
        "pageRange": "52-55",
        "summary": "介绍与、或、非、异或四种逻辑运算符的符号及返回规则。",
        "points": [
          {
            "term": "逻辑运算符",
            "desc": "用来判断表达式真假，真返回1假返回0；MySQL支持与、或、非和异或四种。",
            "page": 52
          },
          {
            "term": "与运算",
            "desc": "&&或and；所有数据非0且非null返回1，存在0返回0，存在null且无0返回null。",
            "page": 53
          },
          {
            "term": "或运算",
            "desc": "||或or；存在非0数字返回1，只有0返回0，无0但含null返回null。",
            "page": 53
          },
          {
            "term": "非运算",
            "desc": "!或not，返回与操作数据相反的结果；非0返回0，0返回1，null返回null。",
            "page": 54
          },
          {
            "term": "异或运算",
            "desc": "xor表示异或运算，只要任何一个操作数据为null时结果返回null。",
            "page": 55
          }
        ],
        "code": [],
        "tips": [
          "&&=and，||=or，!=not，xor为异或"
        ]
      },
      {
        "id": "3.4",
        "title": "位运算符",
        "pageRange": "56-58",
        "summary": "介绍位运算符在二进制数上计算的过程及六种位运算符。",
        "points": [
          {
            "term": "位运算符",
            "desc": "在二进制数上进行计算，先将操作数变成二进制数运算，再将结果变回十进制数。",
            "page": 56
          },
          {
            "term": "六种位运算",
            "desc": "包括按位与、按位或、按位取反、按位异或、按位左移和按位右移。",
            "page": 56
          }
        ],
        "code": [],
        "tips": [
          "位运算先把操作数转二进制，计算结果再转回十进制"
        ]
      },
      {
        "id": "3.5",
        "title": "表达式和运算符的优先级",
        "pageRange": "59-60",
        "summary": "说明表达式的组成与分类，以及多运算符时按优先级从高到低、同级从左到右的运算规则。",
        "points": [
          {
            "term": "表达式",
            "desc": "SQL中表达式是常量、变量、列名、复杂计算、运算符和函数的组合，通常有返回值。",
            "page": 59
          },
          {
            "term": "表达式分类",
            "desc": "按值的类型分为字符型表达式、数值型表达式和日期型表达式。",
            "page": 59
          },
          {
            "term": "运算符优先级",
            "desc": "多个运算符时按先高后低顺序运算，同级从左到右，左边的运算符先运算。",
            "page": 59
          }
        ],
        "code": [],
        "tips": [
          "优先级相同时表达式左边的运算符先运算"
        ]
      },
      {
        "id": "4.1",
        "title": "数学函数",
        "pageRange": "63-65",
        "summary": "介绍常用数学函数及rand()、round()等函数的使用规则。",
        "points": [
          {
            "term": "数学函数",
            "desc": "主要用于处理数字包括整型、浮点型，包括绝对值、正弦、余弦、获取随机数等函数。",
            "page": 63
          },
          {
            "term": "使用方式",
            "desc": "数学函数可以作为表达式或表达式的一部分使用。",
            "page": 63
          },
          {
            "term": "rand()",
            "desc": "rand()返回完全随机的数；rand(x)中x相同时作为种子值返回的值相同。",
            "page": 65
          },
          {
            "term": "round(x)",
            "desc": "返回离x最近的整数，即四舍五入；round(x,y)返回x保留到小数点后y位的值。",
            "page": 65
          }
        ],
        "code": [],
        "tips": [
          "round(x,y)在截取时进行四舍五入处理"
        ]
      },
      {
        "id": "4.2",
        "title": "字符串函数",
        "pageRange": "66-67",
        "summary": "介绍字符串函数的功能类别，包括计算长度、合并、替换、比较和查找字符串位置等函数。",
        "points": [
          {
            "term": "字符串函数",
            "desc": "主要用于处理字符串数据和表达式。",
            "page": 66
          },
          {
            "term": "功能类别",
            "desc": "包括计算字符串长度、合并、替换、比较和查找字符串位置等函数。",
            "page": 66
          },
          {
            "term": "常用函数",
            "desc": "concat()用于连接字符串，substring()返回指定字符串，reverse()逆序输出。",
            "page": 67
          }
        ],
        "code": [
          "concat()",
          "substring()",
          "reverse()"
        ],
        "tips": []
      },
      {
        "id": "4.3",
        "title": "日期和时间函数",
        "pageRange": "68-74",
        "summary": "介绍日期时间函数类别，讲解date_add/date_sub及date_format/time_format的语法与格式化代码。",
        "points": [
          {
            "term": "日期和时间函数",
            "desc": "用于处理表中日期和时间数据，包括获取当前日期、当前时间、计算日期和计算时间的函数。",
            "page": 68
          },
          {
            "term": "常用函数",
            "desc": "curdate()返回当前日期、curtime()返回当前时间、now()返回当前日期和时间。",
            "page": 69
          },
          {
            "term": "date_add/date_sub",
            "desc": "对日期和时间进行算术操作，分别用来增加和减少日期值。",
            "page": 71
          },
          {
            "term": "语法格式",
            "desc": "date_add | date_sub(date, interval int keyword)，interval关键字表示时间间隔。",
            "page": 71
          },
          {
            "term": "格式化函数",
            "desc": "date_format()和time_format()用来格式化日期和时间值，语法为date_format/time_format(date|time, fmt)。",
            "page": 73
          }
        ],
        "code": [
          "date_add | date_sub(date, interval int keyword)",
          "date_format/ time_format(date | time, fmt)"
        ],
        "tips": [
          "date_add增加日期值，date_sub减少日期值"
        ]
      },
      {
        "id": "4.4",
        "title": "聚合函数",
        "pageRange": "75-75",
        "summary": "介绍聚合函数也称为分组统计函数，常用于对聚合在组内的数据表行进行计算。",
        "points": [
          {
            "term": "聚合函数",
            "desc": "也叫分组统计函数，主要功能是对聚合在组内的数据表行进行计算。",
            "page": 75
          }
        ],
        "code": [],
        "tips": []
      },
      {
        "id": "4.5",
        "title": "其他函数",
        "pageRange": "76-82",
        "summary": "介绍系统信息、加密、格式化及窗口函数等各类其他函数的功能与用法。",
        "points": [
          {
            "term": "系统信息函数",
            "desc": "用来查询MySQL数据库的系统信息，如数据库版本、当前用户等。",
            "page": 76
          },
          {
            "term": "md5(str)",
            "desc": "为字符串算出md5 128比特校验和，以32位十六进制数字形式返回，参数为NULL返回NULL。",
            "page": 78
          },
          {
            "term": "sha(str)",
            "desc": "从原明文密码str计算并返回加密后的密码字符串，加密算法比md5更加安全。",
            "page": 79
          },
          {
            "term": "sha2(str,hash_length)",
            "desc": "利用hash_length作长度加密str，支持224、256、384、512和0，其中0等同于256。",
            "page": 80
          },
          {
            "term": "format(x,y)",
            "desc": "把数值格式化为以逗号分隔的数字序列，x是被格式化数据，y是结果的小数位数。",
            "page": 81
          },
          {
            "term": "窗口函数",
            "desc": "MySQL8.0新增，类似SUM()、COUNT()但不将多行合并为一行，不需要GROUP BY语句。",
            "page": 82
          }
        ],
        "code": [
          "format(x, y)",
          "md5(str)",
          "sha(str)",
          "sha2(str, hash_length)"
        ],
        "tips": [
          "窗口函数不需要GROUP BY，结果放回多行当中"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch2-ppt-s01",
        "type": "single",
        "stem": "MySQL服务器默认的字符集是？",
        "options": [
          "A. latin1",
          "B. utf8mb4",
          "C. gb2312",
          "D. GBK"
        ],
        "answer": "B",
        "analysis": "解析：PPT第5页指出MySQL服务器默认的字符集是utf8mb4，第9页也说明8.0用utf8mb4作为默认字符编码。",
        "page": 5
      },
      {
        "id": "ch2-ppt-s02",
        "type": "single",
        "stem": "字符序名称以_ci结尾表示？",
        "options": [
          "A. 大小写敏感",
          "B. 大小写不敏感",
          "C. 按编码值比较",
          "D. 按字节比较"
        ],
        "answer": "B",
        "analysis": "解析：PPT第6页指出字符序以_ci表示大小写不敏感、_cs表示大小写敏感、_bin表示按编码值比较。",
        "page": 6
      },
      {
        "id": "ch2-ppt-s03",
        "type": "single",
        "stem": "MySQL脚本文件保存时后缀名一般为？",
        "options": [
          "A. .txt",
          "B. .sql",
          "C. .mysql",
          "D. .db"
        ],
        "answer": "B",
        "analysis": "解析：PPT第19页指出MySQL脚本由一条或多条语句组成，保存时脚本文件后缀名一般为.sql。",
        "page": 19
      },
      {
        "id": "ch2-ppt-s04",
        "type": "single",
        "stem": "char列的长度取值在下列哪个范围？",
        "options": [
          "A. 1~255",
          "B. 1~65535",
          "C. 0~255",
          "D. 1~1024"
        ],
        "answer": "A",
        "analysis": "解析：PPT第28页指出char列的长度被固定为创建表所声明的长度，取值在1~255之间。",
        "page": 28
      },
      {
        "id": "ch2-ppt-s05",
        "type": "single",
        "stem": "下列数据类型中属于MySQL精准数据类型的是？",
        "options": [
          "A. float",
          "B. double",
          "C. decimal",
          "D. real"
        ],
        "answer": "C",
        "analysis": "解析：PPT第33页指出decimal是MySQL中存在的精准数据类型，语法格式为DECIMAL(M,D)。",
        "page": 33
      },
      {
        "id": "ch2-ppt-s06",
        "type": "single",
        "stem": "关于DATETIME与TIMESTAMP，下列说法正确的是？",
        "options": [
          "A. DATETIME与时区相关",
          "B. DATETIME与时区无关",
          "C. 两者都与时区相关",
          "D. 两者都不含时间部分"
        ],
        "answer": "B",
        "analysis": "解析：PPT第36页指出TIMESTAMP类型与时区相关，而DATETIME则与时区无关。",
        "page": 36
      },
      {
        "id": "ch2-ppt-s07",
        "type": "single",
        "stem": "算术运算符中，求余运算符是？",
        "options": [
          "A. /",
          "B. %",
          "C. *",
          "D. div"
        ],
        "answer": "B",
        "analysis": "解析：PPT第41页指出除号(/)和求余运算符(%)，5%3的结果为2。",
        "page": 41
      },
      {
        "id": "ch2-ppt-s08",
        "type": "single",
        "stem": "like运算符中，通配符“_”表示？",
        "options": [
          "A. 任意个字符",
          "B. 一个字符",
          "C. 零个字符",
          "D. 一个数字"
        ],
        "answer": "B",
        "analysis": "解析：PPT第49页指出like用来匹配字符串，%匹配任意个字符，_匹配一个字符。",
        "page": 49
      },
      {
        "id": "ch2-ppt-b01",
        "type": "blank",
        "stem": "MySQL8.0能够支持41种字符集和____个校对原则。",
        "answer": [
          "272"
        ],
        "answerText": "272",
        "analysis": "解析：PPT第5页指出MySQL8.0能够支持41种字符集和272个校对原则。",
        "page": 5
      },
      {
        "id": "ch2-ppt-b02",
        "type": "blank",
        "stem": "字符序名称以_ci结尾表示大小写____。",
        "answer": [
          "不敏感",
          "大小写不敏感"
        ],
        "answerText": "不敏感",
        "analysis": "解析：PPT第6页指出字符序以_ci表示大小写不敏感，如utf8mb4_0900_ai_ci中'a'和'A'等价。",
        "page": 6
      },
      {
        "id": "ch2-ppt-b03",
        "type": "blank",
        "stem": "如果整数类型只希望表示正整数，可以使用关键字____来进行修饰。",
        "answer": [
          "unsigned",
          "UNSIGNED"
        ],
        "answerText": "unsigned",
        "analysis": "解析：PPT第31页指出默认整数可表示正负整数，只希望表示正整数可用unsigned修饰。",
        "page": 31
      },
      {
        "id": "ch2-ppt-b04",
        "type": "blank",
        "stem": "一个表中最多只能有____个AUTO_INCREMENT字段。",
        "answer": [
          "一个",
          "1"
        ],
        "answerText": "一个",
        "analysis": "解析：PPT第32页指出一个表中最多只能有一个AUTO_INCREMENT字段，该字段应为NOT NULL并定义为PRIMARY KEY或UNIQUE。",
        "page": 32
      },
      {
        "id": "ch2-ppt-b05",
        "type": "blank",
        "stem": "“is null”运算符用来判断操作数是否为____。",
        "answer": [
          "空值",
          "null",
          "NULL"
        ],
        "answerText": "空值",
        "analysis": "解析：PPT第46页指出is null用来判断操作数是否为空值(null)，操作数为null时返回1。",
        "page": 46
      },
      {
        "id": "ch2-ppt-b06",
        "type": "blank",
        "stem": "窗口函数是MySQL____新增的函数，不需要GROUP BY语句。",
        "answer": [
          "8.0",
          "MySQL8.0"
        ],
        "answerText": "8.0",
        "analysis": "解析：PPT第82页指出窗口函数是MySQL8.0新增的函数，不需要GROUP BY语句。",
        "page": 82
      }
    ]
  },
  {
    "chapter": 3,
    "title": "MySQL8.0数据库和表的基本操作",
    "goals": [
      "了解MySQL数据库文件、系统数据库及存储引擎，理解数据库设计过程与规范化",
      "掌握创建、修改、查看和删除数据库的方法",
      "掌握InnoDB表空间、创建/查看/修改/删除表及临时表管理",
      "掌握表记录的插入、修改、删除操作与数据完整性约束"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1.1",
        "title": "MySQL数据库基本知识",
        "pageRange": "4-6",
        "summary": "介绍MySQL8.0数据库文件的存放位置与.ibd文件、自动建立的系统数据库，以及查看数据库的命令。",
        "points": [
          {
            "term": "数据库文件",
            "desc": "每个数据库文件存放在与数据库同名的文件夹中，默认位置C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Data\\。",
            "page": 4
          },
          {
            "term": ".ibd文件",
            "desc": "MySQL8.0数据表文件合并到mysql.ibd中，每个数据表内容存储在同名的扩展名为.ibd的文件中。",
            "page": 4
          },
          {
            "term": "系统数据库",
            "desc": "安装完成后在data目录自动创建几个必须的数据库，可用show databases查看。",
            "page": 5
          },
          {
            "term": "查看数据库",
            "desc": "使用show databases命令查看MySQL服务器中的所有数据库信息。",
            "page": 6
          }
        ],
        "code": [
          "show databases;"
        ],
        "tips": [
          "数据库默认存放位置可通过配置向导或手工配置修改"
        ]
      },
      {
        "id": "1.2",
        "title": "MySQL存储引擎",
        "pageRange": "7-13",
        "summary": "解释存储引擎概念及MySQL8.0支持的9种引擎，重点介绍InnoDB、MyISAM、MEMORY的特点与选择方法。",
        "points": [
          {
            "term": "存储引擎",
            "desc": "数据库底层软件组件，决定表在计算机中的存储方式，简而言之就是指表的类型。",
            "page": 7
          },
          {
            "term": "引擎作用",
            "desc": "是如何存储数据、建立索引、更新和查询数据等技术的实现方法。",
            "page": 7
          },
          {
            "term": "支持的引擎",
            "desc": "MySQL8.0支持InnoDB、MRG_MyISAM、Memory、BLACKHOLE、MyISAM、CSV、Archive、Federated和PERFORMANCE-SCHEMA共9种。",
            "page": 8
          },
          {
            "term": "默认存储引擎",
            "desc": "MySQL默认存储引擎是InnoDB，可用set default_storage_engine=MyISAM设置其他引擎。",
            "page": 9
          },
          {
            "term": "InnoDB",
            "desc": "事务型数据库首选引擎，兼具原子性、一致性、隔离性、持久性，支持提交回滚崩溃恢复、行级锁定和外键。",
            "page": 10
          },
          {
            "term": "InnoDB特性",
            "desc": "支持auto_increment和全文检索，提供OLTP支持，适合大量增删修改数据的表。",
            "page": 10
          },
          {
            "term": "ROWID",
            "desc": "每张表按主键顺序存放，未指定主键时InnoDB为每行生成6B的ROWID并以此为主键。",
            "page": 11
          },
          {
            "term": "MyISAM",
            "desc": "不支持事务和外键约束，访问速度快、占用空间小，适合以SELECT/INSERT为主的表。",
            "page": 12
          },
          {
            "term": "MEMORY",
            "desc": "所有数据存储在RAM中，快速访问非关键数据，大小受max_heap_table_size变量约束。",
            "page": 12
          },
          {
            "term": "设置引擎",
            "desc": "每个表都有存储引擎，可在创建时指定或用alter table修改，通过engine关键字设置。",
            "page": 13
          }
        ],
        "code": [
          "set default_storage_engine=MyISAM;",
          "show engines;",
          "engine"
        ],
        "tips": [
          "InnoDB支持事务、行级锁和外键；MyISAM不支持事务和外键但访问快"
        ]
      },
      {
        "id": "2.1",
        "title": "数据库设计的基本过程",
        "pageRange": "16-18",
        "summary": "介绍数据库设计的目标，以及需求分析、概念设计、逻辑设计、物理设计四个阶段的主要任务。",
        "points": [
          {
            "term": "数据库设计",
            "desc": "对给定应用环境构造优化的数据库逻辑模式和物理结构，建立数据库及应用系统以有效存储管理数据。",
            "page": 14
          },
          {
            "term": "设计目标",
            "desc": "为用户和各种应用系统提供信息基础设施和高效率的运行环境。",
            "page": 14
          },
          {
            "term": "四个阶段",
            "desc": "数据库设计分为需求分析、概念设计、逻辑设计和物理设计4个阶段。",
            "page": 16
          },
          {
            "term": "需求分析",
            "desc": "通过调查研究了解用户的数据要求和处理要求，按一定格式整理形成需求说明书。",
            "page": 17
          },
          {
            "term": "概念设计",
            "desc": "对需求说明书的数据和处理要求抽象综合，构造概念模型；实体关系E-R方法最常用。",
            "page": 17
          },
          {
            "term": "逻辑设计",
            "desc": "把与DBMS无关的概念数据模型转换成等价的并为特定DBMS接受的逻辑模型。",
            "page": 18
          },
          {
            "term": "物理设计",
            "desc": "把逻辑数据库在物理上实现，设计数据存储形式和存取路径如文件结构、索引设计。",
            "page": 18
          }
        ],
        "code": [],
        "tips": [
          "四阶段为需求分析→概念设计→逻辑设计→物理设计，之后是数据库创建和运行维护"
        ]
      },
      {
        "id": "2.2",
        "title": "教务管理数据库设计的规范化",
        "pageRange": "19-25",
        "summary": "以教务管理数据库为例，说明数据依赖、范式与规范化，并用1NF、2NF、3NF逐步消除冗余与异常。",
        "points": [
          {
            "term": "规范化理论",
            "desc": "满足一定条件的关系模式称为范式NF，低级范式通过分解投影可转换成多个高级范式，过程称规范化。",
            "page": 19
          },
          {
            "term": "数据依赖",
            "desc": "一个关系内部属性与属性之间的约束关系，通过属性值相等与否体现，是数据内在性质和语义体现。",
            "page": 20
          },
          {
            "term": "单一关系问题",
            "desc": "用单一关系模式表示学生时存在数据冗余度大、更新异常、插入异常和删除异常问题。",
            "page": 21
          },
          {
            "term": "第一范式1NF",
            "desc": "目标是确保每列原子性，每列都是不可再分的最小数据单元。",
            "page": 22
          },
          {
            "term": "第二范式2NF",
            "desc": "在1NF基础上确保表中每列都和码相关，每个非主属性都完全函数依赖于码。",
            "page": 23
          },
          {
            "term": "2NF分解",
            "desc": "将学生关系分解为学生、课程、选修三个表，消除部分依赖。",
            "page": 23
          },
          {
            "term": "第三范式3NF",
            "desc": "在2NF基础上确保每列都和码直接相关而非间接相关，消除非码列间的相互依赖。",
            "page": 24
          }
        ],
        "code": [
          "U={学生学号，学生姓名，学生性别，电话，课程号，课程名称，成绩}",
          "学生 {学生学号，学生姓名，学生性别，电话}",
          "课程 {课程号，课程名称}",
          "选修 {学生学号，课程号，成绩}"
        ],
        "tips": [
          "单一关系模式存在冗余大、更新/插入/删除异常，需按范式逐步分解"
        ]
      },
      {
        "id": "3.1",
        "title": "创建数据库",
        "pageRange": "27-28",
        "summary": "介绍创建数据库的意义，给出create database的语法结构及创建数据库示例。",
        "points": [
          {
            "term": "创建数据库",
            "desc": "在数据库系统中划分一块空间存储数据，是表操作和数据库管理的基础。",
            "page": 27
          },
          {
            "term": "语法结构",
            "desc": "使用create database或create schema命令创建数据库。",
            "page": 27
          },
          {
            "term": "示例",
            "desc": "create database if not exists mysqltest创建一个名称为mysqltest的数据库。",
            "page": 28
          },
          {
            "term": "指定字符集",
            "desc": "创建teaching数据库时可指定字符集utf8mb4和校对原则utf8mb4_0900_ai_ci。",
            "page": 28
          }
        ],
        "code": [
          "create {database|schema}[if not exists]databasename [[default]character set charset_name] [[default]collate collation_name];",
          "create database if not exists mysqltest;",
          "create database teaching default character set utf8mb4 default collate utf8mb4_0900_ai_ci;"
        ],
        "tips": [
          "if not exists可避免数据库已存在时报错"
        ]
      },
      {
        "id": "3.2",
        "title": "管理数据库",
        "pageRange": "29-33",
        "summary": "介绍打开、修改、显示和删除数据库的语句，并提醒删除数据库会删除所有表和数据。",
        "points": [
          {
            "term": "打开数据库",
            "desc": "用USE语句打开一个数据库，使其成为当前默认数据库。",
            "page": 29
          },
          {
            "term": "修改数据库",
            "desc": "用alter {database|schema}修改数据库的字符集和校对原则等参数。",
            "page": 30
          },
          {
            "term": "修改示例",
            "desc": "可将mysqltest库字符集改为gb2312、校对原则改为gb2312_chinese_ci。",
            "page": 31
          },
          {
            "term": "显示结构",
            "desc": "用show create database查看数据库的相关信息如版本id号、默认字符集等。",
            "page": 32
          },
          {
            "term": "删除数据库",
            "desc": "用drop database [if exists]删除已存在数据库，删除后原来分配的空间被收回。",
            "page": 33
          },
          {
            "term": "删除注意",
            "desc": "删除数据库会删除该数据库中所有的表和所有数据，删除前最好存有备份。",
            "page": 33
          }
        ],
        "code": [
          "use mysqltest;",
          "alter {database | schema} [db_name] [default] character set charset_name [|[default] collate collation_name];",
          "alter database mysqltest default character set gb2312 collate gb2312_chinese_ci;",
          "show create database teaching;",
          "drop database [if exists] db_name",
          "drop database mysqltest;"
        ],
        "tips": [
          "删除数据库前最好备份，因为会删除所有表和数据"
        ]
      },
      {
        "id": "4.1",
        "title": "InnoDB存储引擎的表空间",
        "pageRange": "37-43",
        "summary": "介绍InnoDB表空间管理的共享表空间与独立表空间，讲解查看、比较及相互转换的方法。",
        "points": [
          {
            "term": "表空间",
            "desc": "InnoDB表空间是MySQL数据表存储空间的管理模式，分共享表空间和独立表空间两种。",
            "page": 37
          },
          {
            "term": "共享表空间",
            "desc": "所有InnoDB表的数据、索引、元数据及事务回滚信息全部存放在ibdata1，初始12M可自动扩展。",
            "page": 38
          },
          {
            "term": "独立表空间",
            "desc": "每个表以独立文件存储，每个表都有一个.ibd文件，包含表的数据和索引内容。",
            "page": 38
          },
          {
            "term": "查看表空间",
            "desc": "用show variables like 'InnoDB_data%'查看表空间信息。",
            "page": 39
          },
          {
            "term": "共享表空间缺点",
            "desc": "分配后不能回缩，大量删除后表空间会有大量空隙，不适合频繁删除的统计分析应用。",
            "page": 40
          },
          {
            "term": "独立表空间优点",
            "desc": "可实现单表在不同数据库移动，Drop table能自动回收表空间，删除碎片影响小。",
            "page": 41
          },
          {
            "term": "查看类型",
            "desc": "show variables like \"InnoDB_file_per_table\"；值为ON代表独立表空间，OFF代表共享表空间。",
            "page": 42
          },
          {
            "term": "转换方法",
            "desc": "修改InnoDB_file_per_table参数值可改变表空间管理方式，设置参数为1可将共享转为独立。",
            "page": 43
          }
        ],
        "code": [
          "show variables like 'InnoDB_data%';",
          "show variables like \"InnoDB_file_per_table\";",
          "alter table TableName engine=innodb;"
        ],
        "tips": [
          "ON代表独立表空间，OFF代表共享表空间；独立表空间Drop table能自动回收"
        ]
      },
      {
        "id": "4.2",
        "title": "创建数据库表",
        "pageRange": "44-52",
        "summary": "给出创建表的语法结构与字段定义格式，并通过student、course、score、sc等示例说明建表方法。",
        "points": [
          {
            "term": "创建表语法",
            "desc": "使用create [temporary] table [if not exists] table_name创建表。",
            "page": 44
          },
          {
            "term": "字段定义",
            "desc": "col_name type可跟not null|null、default、auto_increment、unique、primary key、comment等选项。",
            "page": 45
          },
          {
            "term": "student表",
            "desc": "含studentno、sname、sex、birthdate、entrance、phone、Email列，主键为studentno。",
            "page": 46
          },
          {
            "term": "course表",
            "desc": "含courseno、cname、type、period、exp、term列，主键为courseno。",
            "page": 47
          },
          {
            "term": "score表",
            "desc": "主键由studentno和courseno两个列构成，为复合主键。",
            "page": 48
          },
          {
            "term": "auto_increment",
            "desc": "整数列可拥有该附加属性，为插入的新记录自动生成唯一序列编码，默认从1开始自增。",
            "page": 51
          },
          {
            "term": "计数器持久化",
            "desc": "自增主键计数器持久化到重做日志，数据库重启时InnoDB据此初始化计数器内存值。",
            "page": 51
          },
          {
            "term": "sc表",
            "desc": "选课号sc_no为自动增量，选课时间sc_time默认为当前时间。",
            "page": 52
          }
        ],
        "code": [
          "create [temporary]table[if not exists]table_name [([column_definition], ...|[index_definition])] [table_option][select_statement];",
          "col_name type [not null | null] [default default_value] [auto_increment] [unique [key] |[primary] key] [comment 'string'] [reference_definition]",
          "create table if not exists student (studentno char(11) not null comment'学号', sname char(8) not null comment'姓名', sex enum('男', '女') default '男' comment'性别', birthdate date not null comment'出生日期', entrance int(3) null comment'入学成绩', phone varchar(12) not null comment'电话', Email varchar(20) not null comment'电子信箱', primary key (studentno));",
          "create table if not exists score (studentno char(11) not null, courseno char(6) not null, daily float(4,1) default 0, final float(4,1) default 0, primary key (studentno , courseno));",
          "create table sc (sc_no int(6) not null auto_increment, studentno char(11) not null, courseno char(6) not null, teacherno char(6) not null, score float(4,1) null, sc_time timestamp not null default now(), primary key (sc_no));"
        ],
        "tips": [
          "复合主键只能定义为表级完整性约束"
        ]
      },
      {
        "id": "4.3",
        "title": "查看表",
        "pageRange": "53-54",
        "summary": "介绍用show tables查看已创建的表，用describe和show create table查看表结构与详细信息。",
        "points": [
          {
            "term": "查看表",
            "desc": "表创建后可用show tables命令查询已创建的表的情况。",
            "page": 53
          },
          {
            "term": "describe",
            "desc": "describe语句可以查看表的基本定义，如describe student。",
            "page": 53
          },
          {
            "term": "show create table",
            "desc": "可查看表字段名、数据类型、完整性约束条件，以及默认存储引擎和字符编码。",
            "page": 54
          }
        ],
        "code": [
          "show tables;",
          "describe student;",
          "show create table course;"
        ],
        "tips": []
      },
      {
        "id": "4.4",
        "title": "修改数据库表",
        "pageRange": "55-59",
        "summary": "说明修改表无需重新加载数据，介绍用alter table增加字段、修改表名、修改字段类型及删除字段。",
        "points": [
          {
            "term": "修改表",
            "desc": "修改已存在表的定义，不需要重新加载数据，也不会影响正在进行的服务。",
            "page": 55
          },
          {
            "term": "增加字段",
            "desc": "alter table可增加无约束或有约束字段，可在表第一个位置或指定位置之后增加。",
            "page": 56
          },
          {
            "term": "修改表名",
            "desc": "用alter table ... rename to修改表名。",
            "page": 57
          },
          {
            "term": "修改字段类型",
            "desc": "用modify修改字段的数据类型，如把course表的type字段改为enum类型。",
            "page": 58
          },
          {
            "term": "删除字段",
            "desc": "用drop删除表中已定义的某个字段。",
            "page": 59
          }
        ],
        "code": [
          "alter table student add address varchar(30) not null after Email;",
          "alter table sc rename to se_course;",
          "alter table course modify type enum('必修','选修') default '必修';",
          "alter table student drop address;"
        ],
        "tips": [
          "after Email可指定新字段插入位置"
        ]
      },
      {
        "id": "4.5",
        "title": "删除数据库表",
        "pageRange": "60-60",
        "summary": "介绍用drop table删除表及其语法格式，并提醒删除表会删除表中所有数据。",
        "points": [
          {
            "term": "删除表",
            "desc": "删除数据库中已存在的表，会删除表中的所有数据，需特别注意。",
            "page": 60
          },
          {
            "term": "语法格式",
            "desc": "通过drop table语句删除表，基本格式为drop table table_name。",
            "page": 60
          }
        ],
        "code": [
          "drop table table_name",
          "use mytest;",
          "create table example(today datetime, name char(20));",
          "desc example;",
          "drop table example;"
        ],
        "tips": [
          "删除表会删除表中所有数据"
        ]
      },
      {
        "id": "4.6",
        "title": "临时表的管理",
        "pageRange": "61-62",
        "summary": "介绍临时表适用场景、创建方法、生命周期及使用注意事项。",
        "points": [
          {
            "term": "临时表",
            "desc": "适合在非常大的表上偶尔运行很多查询获得小子集时，把记录选到临时表可更快。",
            "page": 61
          },
          {
            "term": "创建",
            "desc": "用create temporary table创建临时表。",
            "page": 61
          },
          {
            "term": "生命周期",
            "desc": "临时表在连接MySQL期间存在，断开时MySQL自动删除并释放空间。",
            "page": 62
          },
          {
            "term": "注意事项",
            "desc": "创建需create temporary table权限；show tables不列举临时表；不能用rename重命名临时表。",
            "page": 62
          }
        ],
        "code": [
          "create temporary table tmp_emp1 (name varchar(10) not null, value integer not null);",
          "describe tmp_emp1;",
          "drop table tmp_table"
        ],
        "tips": [
          "show tables不会列举临时表；不能用rename重命名临时表"
        ]
      },
      {
        "id": "5.1",
        "title": "表记录的插入",
        "pageRange": "64-74",
        "summary": "介绍insert into、replace into、load data、set子句及图片数据等多种插入数据的方法与说明。",
        "points": [
          {
            "term": "插入方式",
            "desc": "常见有insert into、replace into插入，也可用load data infile将文本文件数据插入表中。",
            "page": 64
          },
          {
            "term": "insert语法",
            "desc": "insert|replace[into]table_name[(col_name,...)] values(...)或set col_name={expr|default}。",
            "page": 64
          },
          {
            "term": "多行插入",
            "desc": "insert可一次插入多行数据，各行数据之间用逗号分隔，最好一次插入多行。",
            "page": 69
          },
          {
            "term": "values注意",
            "desc": "数据顺序要与列顺序对应；不给出列名时values要给出每列值；列值为空必须置为null。",
            "page": 69
          },
          {
            "term": "replace into",
            "desc": "先尝试插入，若已有此行数据（按主键或唯一索引判断）则先删除再插入新数据。",
            "page": 70
          },
          {
            "term": "插入其他表数据",
            "desc": "insert into tablename1 select * from tablename2可成批插入，要求两个表结构相同。",
            "page": 70
          },
          {
            "term": "load data",
            "desc": "load data infile 'filename.txt' into table tablename将文本文件数据装入表中。",
            "page": 71
          },
          {
            "term": "set子句",
            "desc": "用set子句直接赋值可不按列顺序插入数据，对允许空值的列可不插入。",
            "page": 72
          },
          {
            "term": "图片数据",
            "desc": "图片以路径形式存储，或用load_file()函数直接插入图片本身，字段要用blob类型。",
            "page": 73
          }
        ],
        "code": [
          "insert|replace[into]table_name[(col_name,...)] values({expr|default},...),(...),... |set col_name={expr|default}, ...",
          "insert into student (studentno,sname,sex,birthdate,entrance,phone,Email) values ('20112100072','许东方','男','2002/2/4',658,'12545678998','su12@163.com');",
          "replace into course values ('c05103','电子技术','必修','64','16','2');",
          "insert into tablename1 select * from tablename2;",
          "load data infile 'filename.txt' into table tablename",
          "insert into se_course set studentno='21125111109',courseno='c06172',teacherno='t05017';"
        ],
        "tips": [
          "向已有主键记录插入会产生主键冲突错误；图片字段用blob类型"
        ]
      },
      {
        "id": "5.2",
        "title": "表记录的修改",
        "pageRange": "75-77",
        "summary": "介绍update...set语法及where子句作用，通过示例说明修改单条和多条记录的方法。",
        "points": [
          {
            "term": "update语法",
            "desc": "update table_name set col_name1=expr1[,...] [where子句]修改表数据。",
            "page": 75
          },
          {
            "term": "set子句",
            "desc": "根据where条件对符合条件的数据行修改，若不设where子句则更新所有行。",
            "page": 75
          },
          {
            "term": "多列修改",
            "desc": "expr可为常量、变量或表达式，可同时修改多个列值，中间用逗号隔开。",
            "page": 75
          },
          {
            "term": "示例",
            "desc": "将学号20112111208学生c06108课程的daily修改为87分。",
            "page": 76
          },
          {
            "term": "表达式修改",
            "desc": "可将入学成绩高于700分的entrance增加5%，即entrance=entrance*1.05。",
            "page": 77
          }
        ],
        "code": [
          "update table_name set col_name1=expr1 [,col_name2=expr2 ...] [where子句]",
          "update score set daily=87 where studentno='20112111208' && courseno='c06108';",
          "update student01 set entrance=entrance*1.05 where entrance>700;"
        ],
        "tips": [
          "不设where子句会更新表中所有行，使用时务必小心"
        ]
      },
      {
        "id": "5.3",
        "title": "表记录的删除",
        "pageRange": "78-79",
        "summary": "介绍delete from语法及其可选子句，通过示例说明按条件和按排序限制删除记录。",
        "points": [
          {
            "term": "delete语法",
            "desc": "delete [low_priority] [quick] [ignore] from tbl_name [where子句] [order by子句] [limit row_count]。",
            "page": 78
          },
          {
            "term": "条件删除",
            "desc": "delete from student01 where entrance<750删除入学成绩低于750分的记录。",
            "page": 79
          },
          {
            "term": "排序限制删除",
            "desc": "结合order by和limit可删除入学成绩最低的2行记录。",
            "page": 79
          }
        ],
        "code": [
          "delete [low_priority] [quick] [ignore] from tbl_name [where子句] [order by子句] [limit row_count]",
          "delete from student01 where entrance <750;",
          "delete from student01 order by entrance limit 2;"
        ],
        "tips": [
          "不加where子句会删除表中全部记录"
        ]
      },
      {
        "id": "6.1",
        "title": "非空约束",
        "pageRange": "82-82",
        "summary": "介绍null与not null的含义及非空约束的作用。",
        "points": [
          {
            "term": "null",
            "desc": "允许空值，表示数值未确定。",
            "page": 82
          },
          {
            "term": "not null",
            "desc": "不允许空值，确保数据列中必须包含有意义的值。",
            "page": 82
          },
          {
            "term": "非空约束",
            "desc": "定义表结构时每个字段都要选择是否为null值，这是对表中数据提出的约束条件。",
            "page": 82
          }
        ],
        "code": [],
        "tips": []
      },
      {
        "id": "6.2",
        "title": "主键约束",
        "pageRange": "83-86",
        "summary": "介绍主键的作用与特点、表级和列级主键约束的定义方式及修改主键的方法。",
        "points": [
          {
            "term": "主键作用",
            "desc": "设置主键可帮助MySQL以最快速度查找表中的指定信息。",
            "page": 83
          },
          {
            "term": "primary key",
            "desc": "可指定一个字段作主键，也可指定2个及以上字段作复合主键，唯一标识每行且不允许取空值。",
            "page": 83
          },
          {
            "term": "设置方式",
            "desc": "包括表的完整性约束和列的完整性约束两种方式，可在建表时创建也可修改。",
            "page": 83
          },
          {
            "term": "表级约束",
            "desc": "在语句最后加primary key(col_name,…)，复合主键只能定义为表级约束。",
            "page": 84
          },
          {
            "term": "列级约束",
            "desc": "在列定义时加关键字primary key，单一字段主键可用表级或列级约束。",
            "page": 84
          },
          {
            "term": "修改主键",
            "desc": "可先drop primary key删除原主键，再add primary key增加新主键。",
            "page": 86
          }
        ],
        "code": [
          "create table if not exists course01 (courseno char(6) not null primary key, cname char(6) not null, type char(8) not null, period int(2) not null, exp int(2) not null, term int(2) not null);",
          "alter table student02 add primary key (sname);",
          "alter table student02 drop primary key;",
          "alter table student02 add primary key (studentno);"
        ],
        "tips": [
          "复合主键只能定义为表级完整性约束"
        ]
      },
      {
        "id": "6.3",
        "title": "外键约束",
        "pageRange": "87-89",
        "summary": "介绍参照完整性、外键的作用与设置原则，讲解外键语法及添加外键的方法。",
        "points": [
          {
            "term": "外键作用",
            "desc": "建立子表与父表的关联关系，保证子表与父表关联的数据一致性。",
            "page": 87
          },
          {
            "term": "设置原则",
            "desc": "必须依赖于数据库中已存在的父表的主键，外键可以为空值。",
            "page": 87
          },
          {
            "term": "外键语法",
            "desc": "constraint foreign_key_name foreign key(col_name) references table_name(col_name)并可跟on delete/on update规则。",
            "page": 87
          },
          {
            "term": "添加外键",
            "desc": "用alter table为已有表添加外键约束。",
            "page": 88
          },
          {
            "term": "建表时创建",
            "desc": "创建表时可用foreign key...references定义外键，并指定on update cascade、on delete cascade。",
            "page": 89
          }
        ],
        "code": [
          "constraint foreign_key_name foreign key (col_name1 [,col_name2…]) references table_name(col_name1[,col_name2...]) [on delete {restrict | cascade | set null | no action}] [on update {restrict | cascade | set null | no action}]",
          "alter table score add constraint fk_st_score foreign key(studentno) references student(studentno);",
          "alter table score add constraint fk_cou_score foreign key(courseno) references course(courseno);"
        ],
        "tips": [
          "必须依赖父表已存在的主键；外键可以为空值"
        ]
      },
      {
        "id": "6.4",
        "title": "检查约束",
        "pageRange": "90-91",
        "summary": "介绍check约束用于对列限制数值范围，可在建表时定义为列或表完整性约束。",
        "points": [
          {
            "term": "check约束",
            "desc": "针对数据表的列限制数值范围的约束，用check完整性约束指定。",
            "page": 90
          },
          {
            "term": "定义方式",
            "desc": "check约束在创建表时定义，可定义为列完整性约束，也可定义为表完整性约束。",
            "page": 90
          },
          {
            "term": "示例",
            "desc": "对student02的birthdate列添加check约束，要求出生日期大于2000-12-31。",
            "page": 91
          }
        ],
        "code": [
          "alter table student02 add constraint ch_stu_birth check(birthdate>'2000-12-31');"
        ],
        "tips": [
          "check约束可限制列取值范围"
        ]
      },
      {
        "id": "6.5",
        "title": "唯一性约束",
        "pageRange": "92-93",
        "summary": "介绍唯一性约束保证字段值不重复，说明其与主键的区别并通过Email列示例验证。",
        "points": [
          {
            "term": "唯一性约束",
            "desc": "保证所有记录中该字段的值不能重复出现，创建表时为特殊字段加unique约束条件。",
            "page": 92
          },
          {
            "term": "主键与unique",
            "desc": "一个数据表只能创建一个主键，但可以有若干个unique约束。",
            "page": 92
          },
          {
            "term": "null值",
            "desc": "主键列值不允许为null，unique字段值可取null，但必须使用null或not null声明。",
            "page": 92
          },
          {
            "term": "索引",
            "desc": "创建primary key约束时系统自动产生primary key索引，创建unique约束时自动产生unique索引。",
            "page": 92
          },
          {
            "term": "验证",
            "desc": "对student表Email列添加唯一约束后，插入重复Email会报ERROR 1062重复键错误。",
            "page": 93
          }
        ],
        "code": [
          "alter table student add unique (Email);",
          "select studentno,sname,email from student limit 3;"
        ],
        "tips": [
          "主键只能有一个，unique约束可以有若干个；unique字段可取null"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch3-ppt-s01",
        "type": "single",
        "stem": "MySQL 8.0默认的存储引擎是？",
        "options": [
          "A. MyISAM",
          "B. MEMORY",
          "C. InnoDB",
          "D. CSV"
        ],
        "answer": "C",
        "analysis": "解析：PPT第9页指出MySQL的默认存储引擎是InnoDB，第10页也说明MySQL8.0选择InnoDB作为默认存储引擎。",
        "page": 9
      },
      {
        "id": "ch3-ppt-s02",
        "type": "single",
        "stem": "支持事务、行级锁定和外键约束的存储引擎是？",
        "options": [
          "A. InnoDB",
          "B. MyISAM",
          "C. MEMORY",
          "D. BLACKHOLE"
        ],
        "answer": "A",
        "analysis": "解析：PPT第10页指出InnoDB是具有提交、回滚和崩溃恢复能力的事务安全存储引擎，并支持行级锁定和外键约束。",
        "page": 10
      },
      {
        "id": "ch3-ppt-s03",
        "type": "single",
        "stem": "下列不属于数据库设计四个阶段的是？",
        "options": [
          "A. 需求分析",
          "B. 概念设计",
          "C. 逻辑设计",
          "D. 软件编码"
        ],
        "answer": "D",
        "analysis": "解析：PPT第16页指出数据库设计分为需求分析、概念设计、逻辑设计和物理设计4个阶段，软件编码属于之后的软件开发阶段。",
        "page": 16
      },
      {
        "id": "ch3-ppt-s04",
        "type": "single",
        "stem": "创建一个新数据库应使用的SQL语句是？",
        "options": [
          "A. create table",
          "B. create database",
          "C. use",
          "D. alter database"
        ],
        "answer": "B",
        "analysis": "解析：PPT第27页指出使用create database或create schema命令可以创建数据库。",
        "page": 27
      },
      {
        "id": "ch3-ppt-s05",
        "type": "single",
        "stem": "查看MySQL服务器中所有数据库信息的命令是？",
        "options": [
          "A. show tables",
          "B. show databases",
          "C. describe",
          "D. select"
        ],
        "answer": "B",
        "analysis": "解析：PPT第6页指出使用show databases命令查看MySQL服务器中的所有数据库信息。",
        "page": 6
      },
      {
        "id": "ch3-ppt-s06",
        "type": "single",
        "stem": "MySQL数据表分为表结构和下列哪一部分？",
        "options": [
          "A. 数据记录",
          "B. 索引",
          "C. 视图",
          "D. 字段"
        ],
        "answer": "A",
        "analysis": "解析：PPT第63页指出MySQL数据表分为表结构Structure和数据记录Record两部分。",
        "page": 63
      },
      {
        "id": "ch3-ppt-s07",
        "type": "single",
        "stem": "为表中插入的新记录自动生成唯一序列编码的属性是？",
        "options": [
          "A. not null",
          "B. auto_increment",
          "C. unique",
          "D. check"
        ],
        "answer": "B",
        "analysis": "解析：PPT第51页指出auto_increment主要用于为表中插入的新记录自动生成唯一的序列编码，默认从1开始自增。",
        "page": 51
      },
      {
        "id": "ch3-ppt-s08",
        "type": "single",
        "stem": "从单个表中删除指定数据应使用的语句是？",
        "options": [
          "A. delete",
          "B. drop",
          "C. alter",
          "D. update"
        ],
        "answer": "A",
        "analysis": "解析：PPT第78页指出利用delete...from语句可以从单个表中删除指定表数据。",
        "page": 78
      },
      {
        "id": "ch3-ppt-b01",
        "type": "blank",
        "stem": "MySQL8.0中每个数据表的内容存储在一个同名的扩展名为____的文件中。",
        "answer": [
          ".ibd",
          "ibd"
        ],
        "answerText": ".ibd",
        "analysis": "解析：PPT第4页指出MySQL8.0中每个数据表的内容都存储在一个同名的扩展名为.ibd文件中。",
        "page": 4
      },
      {
        "id": "ch3-ppt-b02",
        "type": "blank",
        "stem": "MySQL 8.0默认的存储引擎是____。",
        "answer": [
          "InnoDB",
          "innodb"
        ],
        "answerText": "InnoDB",
        "analysis": "解析：PPT第9页指出MySQL的默认存储引擎是InnoDB。",
        "page": 9
      },
      {
        "id": "ch3-ppt-b03",
        "type": "blank",
        "stem": "InnoDB表空间分为共享表空间和____表空间两种类型。",
        "answer": [
          "独立",
          "独立表空间"
        ],
        "answerText": "独立",
        "analysis": "解析：PPT第37页指出InnoDB表空间分为共享表空间和独立表空间两种类型。",
        "page": 37
      },
      {
        "id": "ch3-ppt-b04",
        "type": "blank",
        "stem": "创建数据库表使用的SQL语句关键字是____。",
        "answer": [
          "create table",
          "CREATE TABLE",
          "create table 表名"
        ],
        "answerText": "create table",
        "analysis": "解析：PPT第44页给出创建表的语法结构create [temporary]table[if not exists]table_name。",
        "page": 44
      },
      {
        "id": "ch3-ppt-b05",
        "type": "blank",
        "stem": "____约束能唯一标识表中的每一行记录，且其列不允许取空值。",
        "answer": [
          "primary key",
          "PRIMARY KEY",
          "主键"
        ],
        "answerText": "primary key",
        "analysis": "解析：PPT第83页指出primary key可唯一标识表中每一行记录，且约束中的列不允许取空值。",
        "page": 83
      },
      {
        "id": "ch3-ppt-b06",
        "type": "blank",
        "stem": "一个数据表只能创建一个主键，但可以有若干个____约束。",
        "answer": [
          "unique",
          "唯一",
          "唯一性"
        ],
        "answerText": "unique",
        "analysis": "解析：PPT第92页指出一个数据表只能创建一个主键，但可以有若干个unique约束。",
        "page": 92
      }
    ]
  },
  {
    "chapter": 4,
    "title": "数据检索",
    "goals": [
      "掌握select基本查询语句与单表查询（where、order by、limit）",
      "掌握函数查询：聚合函数、group by分组与窗口函数",
      "掌握多表连接（内连接、外连接、交叉连接、union）与子查询",
      "掌握正则表达式模糊查询与通用表表达式CTE"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1",
        "title": "基本查询语句",
        "pageRange": "4-7",
        "summary": "介绍select语句的基本语法格式，以及查询所有列、指定列和多表数据的方法。",
        "points": [
          {
            "term": "select语句",
            "desc": "SQL从数据库获取信息的基本语句，语法含select、from、where、group by、having、order by、limit等子句。",
            "page": 4
          },
          {
            "term": "查询所有列",
            "desc": "使用select语句首先要确定查询的列，“*”代表所有的列。",
            "page": 5
          },
          {
            "term": "指定列",
            "desc": "在select后指定要查询的列名，多列之间用逗号分隔。",
            "page": 6
          },
          {
            "term": "多表查询",
            "desc": "可用逗号对多个表分隔，主要采用多表连接或子查询方式，也可通过where连接运算确定表间联系。",
            "page": 7
          }
        ],
        "code": [
          "select [all|distinct]selection_list from table_source [where search_condition] [group by grouping_columns][with rollup] [having search_condition] [order by order_expression [asc|desc]] [limit count]",
          "select * from course;",
          "select studentno,sname,phone from student;"
        ],
        "tips": [
          "select语句是SQL从数据库中获取信息的基本语句"
        ]
      },
      {
        "id": "2.1",
        "title": "select……from基本子句的使用",
        "pageRange": "9-12",
        "summary": "介绍Select与from子句的作用、为字段取别名的方法以及用distinct过滤重复行。",
        "points": [
          {
            "term": "Select与from",
            "desc": "Select子句输出字段或表达式的值，from子句指定数据源，两者在表查询时都是必选项。",
            "page": 9
          },
          {
            "term": "字段别名",
            "desc": "可为输出字段或表达式取别名增加可读性，语法为“select项的原名 as 别名”。",
            "page": 9
          },
          {
            "term": "distinct",
            "desc": "利用distinct子句从结果集中除去重复的行，所有值的组合决定行的唯一性。",
            "page": 11
          },
          {
            "term": "应用示例",
            "desc": "可查询出生日期2002年以后的学生的学号、姓名、电话和年龄。",
            "page": 10
          }
        ],
        "code": [
          "select 项的原名 as 别名",
          "select studentno as '学号',sname as '姓名',phone as '手机号',year(now())-year(birthdate) as '年龄' from student where year(birthdate)>2002;",
          "select distinct studentno,courseno from score where final>95 order by studentno;"
        ],
        "tips": [
          "Select和from子句在数据库表查询时都是必选项"
        ]
      },
      {
        "id": "2.2",
        "title": "使用where子句过滤结果集",
        "pageRange": "13-21",
        "summary": "介绍where子句设定查询条件的方法，涵盖in、between and、like、is null、and和or等常用查询条件。",
        "points": [
          {
            "term": "where子句",
            "desc": "设定查询条件应用where子句，需要使用比较运算符来确定查询条件。",
            "page": 13
          },
          {
            "term": "in查询",
            "desc": "判断字段值是否在指定集合中，相当于用or连接比较条件，可用not in查询不在集合中的记录。",
            "page": 14
          },
          {
            "term": "between and",
            "desc": "检索指定范围内的行，边界值符合条件，相当于and连接两个比较条件，not between排除范围。",
            "page": 15
          },
          {
            "term": "like查询",
            "desc": "主要用于字符类型数据，%匹配一个或多个字符，_只匹配一个字符，含通配符时用ESCAPE转义。",
            "page": 16
          },
          {
            "term": "is null",
            "desc": "column is [not] null查询空值；写成字段=null或<>null按false处理。",
            "page": 18
          },
          {
            "term": "and多条件",
            "desc": "符合条件的行出现在结果集中；字符型和日期类型值放单引号内，数值类型直接出现。",
            "page": 20
          },
          {
            "term": "or多条件",
            "desc": "只要符合多条件中的一个记录就会被搜索出来，可用多个or连接多个条件表达式。",
            "page": 21
          }
        ],
        "code": [
          "select studentno,sname,phone from student where entrance>800;",
          "select studentno,courseno,daily,final from score where studentno in('20123567897','21135222201','20120203567');",
          "select studentno,final from score where courseno='c05109' and daily between 80 and 95;",
          "select sname,birthdate,Email from student where sname like '何%' or sname like '韩%';",
          "select * from student where sname like '%/_%' escape '/';",
          "select studentno,courseno,teacherno,score from se_course where score is null;",
          "select teacherno,tname,major from teacher where department='计算机学院' and (prof='副教授' or prof='教授');"
        ],
        "tips": [
          "like中%可匹配任意长度字符串（长度可为0），_只匹配一个字符"
        ]
      },
      {
        "id": "2.3",
        "title": "使用order by子句对结果集排序",
        "pageRange": "22-24",
        "summary": "介绍order by子句升序与降序排列规则、null值排序位置及多列排序的应用。",
        "points": [
          {
            "term": "order by",
            "desc": "对查询结果进行升序asc或降序desc排列，默认情况下结果集按升序排列。",
            "page": 22
          },
          {
            "term": "null排序",
            "desc": "对含null值的列排序时，升序null出现在最前面，降序null出现在最后。",
            "page": 22
          },
          {
            "term": "注意事项",
            "desc": "order by包含的列不一定出现在选择列表中，可按列名、函数值和表达式排序，不能用text、ntext或image列。",
            "page": 22
          },
          {
            "term": "多列排序",
            "desc": "可同时指定多个排序项，如先按课程号升序再按总评成绩降序。",
            "page": 24
          }
        ],
        "code": [
          "select studentno 学号,sname 姓名,entrance 入学成绩 from student where entrance>850 order by entrance desc;",
          "select courseno 课程号, daily*0.2+final*0.8 as '总评',studentno 学号 from score where daily*0.2+final*0.8>90 order by courseno, daily*0.2+final*0.8 desc;"
        ],
        "tips": [
          "默认升序asc，降序用desc；null升序在最前、降序在最后"
        ]
      },
      {
        "id": "2.4",
        "title": "用limit限制查询结果的数量",
        "pageRange": "25-26",
        "summary": "介绍limit子句限制查询结果数量的方法及两个参数的含义。",
        "points": [
          {
            "term": "limit",
            "desc": "用来限制查询结果的数量，可指定从哪条记录开始显示以及一共显示多少条记录。",
            "page": 25
          },
          {
            "term": "参数含义",
            "desc": "参数1是开始读取的第1条记录的编号（第1条编号为0），参数2是要查询记录的个数。",
            "page": 25
          },
          {
            "term": "中间取值",
            "desc": "limit可从查询结果中间部分取值，如limit 2,5从编号2开始查询5条。",
            "page": 26
          }
        ],
        "code": [
          "select * from score where final>85 order by daily asc limit 2,5;",
          "select studentno,sname,birthdate,phone from student order by entrance desc limit 3;"
        ],
        "tips": [
          "总查询结果中第1条记录编号为0"
        ]
      },
      {
        "id": "3.1",
        "title": "聚合函数在查询中的应用",
        "pageRange": "28-32",
        "summary": "介绍count、sum、avg、max、min五种常用聚合函数的功能及sql_mode的设置。",
        "points": [
          {
            "term": "聚合函数",
            "desc": "常用有count()、sum()、avg()、max()和min()，分别统计条数、总和、平均值、最大值和最小值。",
            "page": 28
          },
          {
            "term": "group by配合",
            "desc": "group by关键字通常需要与聚合函数一起使用。",
            "page": 28
          },
          {
            "term": "count()",
            "desc": "对除*外参数返回非null值的行数，对参数*返回所有行数包含null值的行。",
            "page": 29
          },
          {
            "term": "count(*)优化",
            "desc": "没有where子句的count(*)经过内部优化，能够快速返回表中所有的记录总数。",
            "page": 29
          },
          {
            "term": "sum()和avg()",
            "desc": "sum()求表中某个字段取值的总和，avg()求某个字段取值的平均值。",
            "page": 30
          },
          {
            "term": "max()和min()",
            "desc": "max()求字段最大值，min()求字段最小值。",
            "page": 31
          },
          {
            "term": "sql_mode",
            "desc": "可重新设置sql_mode去掉ONLY_FULL_GROUP_BY。",
            "page": 32
          }
        ],
        "code": [
          "select count(studentno) as '20级学生数' from student where substring(studentno,1,2) ='20';",
          "select studentno 学号, sum(final) 总分, avg(final) 平均分 from score group by studentno having sum(final)>270 order by studentno;",
          "select max(final) 最高分, min(final) 最低分, max(final)-min(final) as 分差 from score where (courseno = 'c05109');",
          "set @@global.sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"
        ],
        "tips": [
          "count(*)统计包含null值的所有行；count(列名)只统计非null值"
        ]
      },
      {
        "id": "3.2",
        "title": "group by子句的使用",
        "pageRange": "33-39",
        "summary": "介绍group by分组、group_concat函数、having筛选及with rollup总体统计的用法。",
        "points": [
          {
            "term": "group by",
            "desc": "将查询结果按属性列或组合在行的方向上分组，每组在这些列上具有相同值。",
            "page": 33
          },
          {
            "term": "列的要求",
            "desc": "出现在select列表中的每一列都必须同时出现在group by子句中；无group by时聚合函数只报告一个聚合值。",
            "page": 33
          },
          {
            "term": "单独使用",
            "desc": "单独使用group by关键字，查询结果只显示每组的一条记录。",
            "page": 33
          },
          {
            "term": "group_concat",
            "desc": "group by与group_concat()函数一起使用，可将每个组中的所有字段值都显示出来。",
            "page": 35
          },
          {
            "term": "having",
            "desc": "having通常与group by结合使用，在应用where筛选后要进一步应用的筛选。",
            "page": 36
          },
          {
            "term": "with rollup",
            "desc": "在分组统计数据的基础上再进行相同的总体统计。",
            "page": 38
          }
        ],
        "code": [
          "select studentno 学号, round(avg(daily*0.3+final*0.7),2) as '平均分' from score group by studentno;",
          "select courseno 课程号, group_concat(studentno) 选课学生学号 from score group by courseno;",
          "select studentno 学号,sum(daily*0.3+final*0.7) as '总分' from score where final>=75 group by studentno having count(*)>=3 order by sum(daily*0.3+final*0.7) desc;",
          "select courseno 课程号,avg(final) 课程期末平均分 from score group by courseno with rollup;"
        ],
        "tips": [
          "having在where筛选后进一步筛选；group by分组后每组只显示一条记录"
        ]
      },
      {
        "id": "3.3",
        "title": "窗口函数在查询中的应用",
        "pageRange": "40-45",
        "summary": "介绍窗口函数的分类、一般格式以及over、partition、frame等子句的含义与应用示例。",
        "points": [
          {
            "term": "窗口函数分类",
            "desc": "按功能划分，MySQL8.0支持的窗口函数可分为5类。",
            "page": 40
          },
          {
            "term": "一般格式",
            "desc": "window_function_name(expression) over ([partition_definition][order_definition][frame_definition])。",
            "page": 41
          },
          {
            "term": "over",
            "desc": "关键字用来指定函数执行的窗口范围，括号中什么都不写表示窗口包含满足where条件的所有行。",
            "page": 41
          },
          {
            "term": "partition子句",
            "desc": "指定窗口按哪些字段分组，窗口函数在不同的分组上分别执行。",
            "page": 41
          },
          {
            "term": "order by与frame",
            "desc": "order by按字段排序后编号；frame是当前分区的子集，通常作为滑动窗口使用。",
            "page": 41
          },
          {
            "term": "应用示例",
            "desc": "rank()输出排序序号，sum(final) over(partition by studentno)求总分，lag()输出前3行学号。",
            "page": 42
          }
        ],
        "code": [
          "window_function_name(expression) over ([partition_defintion] [order_definition] [frame_definition])",
          "select *, rank() over w as 'rank' from score window w as (order by final);",
          "select studentno, courseno, final, sum(final) over (partition by studentno) total_score from score;",
          "select *,(final)/(sum(final) over()) as rate from score;",
          "select *, lag(studentno,3) over ww2 as lag3 from score window ww2 as (order by studentno);"
        ],
        "tips": [
          "窗口函数不会将多行合并为一行，不需要GROUP BY语句"
        ]
      },
      {
        "id": "4",
        "title": "多表连接",
        "pageRange": "46-48",
        "summary": "介绍连接的概念、连接条件的指定方式以及四种显式连接关键字。",
        "points": [
          {
            "term": "连接",
            "desc": "关系型数据库常用的多表查询模式，完成复杂查询必须将两张或以上表连接起来。",
            "page": 46
          },
          {
            "term": "连接条件",
            "desc": "连接条件可在from或where子句中指定，与where和having条件组合控制选定的行。",
            "page": 46
          },
          {
            "term": "字段要求",
            "desc": "连接字段不必同名或同类型，但类型不同时必须兼容或可进行隐性转换。",
            "page": 47
          },
          {
            "term": "连接关键字",
            "desc": "包括inner join内连接、left outer join左外连接、right outer join右外连接和cross join交叉连接。",
            "page": 47
          }
        ],
        "code": [],
        "tips": [
          "连接条件可在from或where子句中指定"
        ]
      },
      {
        "id": "4.1",
        "title": "内连接",
        "pageRange": "49-50",
        "summary": "介绍内连接通过比较共享列检索符合条件行的方法及where子句实现同等结果的方式。",
        "points": [
          {
            "term": "内连接",
            "desc": "inner join通过比较数据源表间共享列的值从多个源表检索符合条件的行，可用等号或不等连接。",
            "page": 49
          },
          {
            "term": "示例",
            "desc": "用student inner join score on studentno相等查询选修c05109课程的学生信息。",
            "page": 49
          },
          {
            "term": "where实现",
            "desc": "直接通过where子句的复合条件查询可实现与内连接同样的结果。",
            "page": 50
          }
        ],
        "code": [
          "select student.studentno,sname,final from student inner join score on student.studentno=score.studentno where score.courseno = 'c05109';",
          "select student.studentno,sname,final from student,score where student.studentno=score.studentno and score.courseno = 'c05109';"
        ],
        "tips": []
      },
      {
        "id": "4.2",
        "title": "外连接",
        "pageRange": "51-54",
        "summary": "介绍外连接的概念与null值处理，讲解左外连接和右外连接的区别与用法。",
        "points": [
          {
            "term": "外连接",
            "desc": "包括满足搜索条件的连接表中所有行，甚至包括在其他连接表中没有匹配行的表中的行。",
            "page": 51
          },
          {
            "term": "null值",
            "desc": "当一个表中的行与其他表中行不匹配时，为不存在相应行的表的所有结果集列提供null值。",
            "page": 51
          },
          {
            "term": "左外连接",
            "desc": "返回内连接数据外还包括左表中不符合条件的数据，并在右表相应列添加null值。",
            "page": 52
          },
          {
            "term": "右外连接",
            "desc": "包含join子句中最右侧表的所有行，不匹配时左侧表所有列分配null值。",
            "page": 54
          }
        ],
        "code": [
          "select student01.studentno,sname,daily,final from student01 left join score on student01.studentno=score.studentno;",
          "select teacher.teacherno,tname,major,courseno from teacher right join teach_course on teacher.teacherno=teach_course.teacherno;"
        ],
        "tips": [
          "左外连接保留左表所有行，右外连接保留右表所有行"
        ]
      },
      {
        "id": "4.3",
        "title": "交叉连接",
        "pageRange": "55-55",
        "summary": "介绍交叉连接产生笛卡儿积的特点及实际应用情况。",
        "points": [
          {
            "term": "交叉连接",
            "desc": "Cross Join是在没有where子句的情况下产生的表的笛卡儿积。",
            "page": 55
          },
          {
            "term": "结果集",
            "desc": "两个表作交叉连接时结果集大小为二者行数之积，该方式在实际过程中用得很少。",
            "page": 55
          }
        ],
        "code": [
          "select student.studentno,sname,score.* from student cross join score;"
        ],
        "tips": [
          "结果集大小等于两个表行数之积"
        ]
      },
      {
        "id": "4.4",
        "title": "连接多个表",
        "pageRange": "56-57",
        "summary": "说明连接表数目的限制与所需连接条件数，并通过三表连接示例加以说明。",
        "points": [
          {
            "term": "连接表数目",
            "desc": "理论上select连接的表数目没有上限，但多于10个表时数据库很可能达不到最优化设计。",
            "page": 56
          },
          {
            "term": "连接条件数",
            "desc": "连接n个表至少需要n-1个连接条件，以避免笛卡儿积的出现。",
            "page": 56
          },
          {
            "term": "应用示例",
            "desc": "连接score、student、course三表查询20级学生的学号、姓名、课程名、期末成绩及学分。",
            "page": 57
          }
        ],
        "code": [
          "select student.studentno,sname,cname,final,round(period/16,1) from score join student on student.studentno=score.studentno join course on score.courseno=course.courseno where substring(student.studentno,1,2)='20';"
        ],
        "tips": [
          "连接n个表至少需要n-1个连接条件"
        ]
      },
      {
        "id": "4.5",
        "title": "合并多个结果集",
        "pageRange": "58-59",
        "summary": "介绍union操作符合并多个select结果集的作用、要求与语法格式。",
        "points": [
          {
            "term": "union",
            "desc": "可将多个select语句的返回结果组合到一个结果集中，当单个查询语句无法得到时使用。",
            "page": 58
          },
          {
            "term": "使用要求",
            "desc": "所有查询中的列数和列的顺序必须相同且数据类型必须兼容。",
            "page": 58
          },
          {
            "term": "语法格式",
            "desc": "select_statement union [all] select_statement；All包括重复行，不指定则删除重复行。",
            "page": 58
          },
          {
            "term": "应用示例",
            "desc": "用union合并student01和student表中phone分别含131和132的部分查询结果。",
            "page": 59
          }
        ],
        "code": [
          "select_statement union [all] select_statement",
          "select studentno,sname,phone from student01 where phone like '%131%' union select studentno,sname,phone from teaching.student where phone like '%132%';"
        ],
        "tips": [
          "不指定all时union自动删除重复行"
        ]
      },
      {
        "id": "5",
        "title": "子查询",
        "pageRange": "60-62",
        "summary": "介绍子查询的概念、非关联执行过程、与连接的关系、类型及使用注意事项。",
        "points": [
          {
            "term": "子查询",
            "desc": "嵌套在select、insert、update、delete或其他子查询中的查询，可把复杂查询分解成逻辑步骤。",
            "page": 60
          },
          {
            "term": "执行过程",
            "desc": "非关联子查询从内层向外层处理，先处理最内层子查询再把结果用于外层查询条件。",
            "page": 60
          },
          {
            "term": "与连接关系",
            "desc": "包含子查询的查询语句一般可写成连接查询，多表连接性能有时优于子查询。",
            "page": 60
          },
          {
            "term": "常见运算",
            "desc": "子查询中可能包含in、not in、any、all、exists、not exists及=、!=、>、<等比较运算符。",
            "page": 61
          },
          {
            "term": "四种类型",
            "desc": "按结果分为表子查询、行子查询、列子查询和标量子查询。",
            "page": 61
          },
          {
            "term": "注意事项",
            "desc": "子查询需用括号括起来，嵌套可多至32层；不能检索text/blob/longtext/mediumblob列；order by只能在外层使用。",
            "page": 62
          }
        ],
        "code": [],
        "tips": [
          "子查询必须用括号括起来，嵌套最多32层；子查询中order by只能在外层用"
        ]
      },
      {
        "id": "5.1",
        "title": "利用子查询做表达式",
        "pageRange": "64-64",
        "summary": "介绍把子查询结果作为普通表达式使用的方法与示例。",
        "points": [
          {
            "term": "做表达式",
            "desc": "可将子查询结果当成普通表达式用于外查询选择条件，必须返回一个值或单个列值列表。",
            "page": 64
          },
          {
            "term": "替换in",
            "desc": "此时的子查询可以替换where子句中包含in关键字的表达式。",
            "page": 64
          },
          {
            "term": "应用示例",
            "desc": "查询某学生入学成绩、所有学生平均入学成绩及二者的分差。",
            "page": 64
          }
        ],
        "code": [
          "select studentno,sname,entrance,(select avg(entrance) from student) 平均成绩, entrance-(select avg(entrance) from student) 分差 from student where studentno='20125121109';"
        ],
        "tips": []
      },
      {
        "id": "5.2",
        "title": "利用子查询生成派生表",
        "pageRange": "65-65",
        "summary": "介绍用子查询生成派生表替代from子句数据源的方法。",
        "points": [
          {
            "term": "派生表",
            "desc": "可用子查询生成一个派生表替代from子句中的数据源表，派生表可定义一个别名。",
            "page": 65
          },
          {
            "term": "本质",
            "desc": "子查询的结果集作为外层查询的源表，在from子句中使用子查询作为派生表数据源。",
            "page": 65
          },
          {
            "term": "应用示例",
            "desc": "用(select * from score where final>85) as TT作为源表查询总评成绩高于90分的学生。",
            "page": 65
          }
        ],
        "code": [
          "select TT.studentno 学号,TT.courseno 课程号,TT.final*0.8+TT.daily*0.2 总评 from (select * from score where final>85) as TT where TT.final*0.8+TT.daily*0.2>90;"
        ],
        "tips": [
          "派生表就是from子句中的子查询，需要定义别名"
        ]
      },
      {
        "id": "5.3",
        "title": "where子句中的子查询",
        "pageRange": "66-72",
        "summary": "介绍带比较运算符、in、exists及all/some/any的子查询用法与执行特点。",
        "points": [
          {
            "term": "where子查询",
            "desc": "将子查询结果作为where条件的一部分，利用这个条件过滤本层查询的数据。",
            "page": 66
          },
          {
            "term": "比较运算符",
            "desc": "可用=、!=、>、>=、<、<=等；外部查询有多少行，关联子查询就执行多少次。",
            "page": 66
          },
          {
            "term": "in子查询",
            "desc": "子返回结果集是值的列表时用in运算符代替比较运算符，not in作用与in相反。",
            "page": 68
          },
          {
            "term": "exists子查询",
            "desc": "内层查询不返回记录而返回逻辑值，true时外层执行查询，not exists工作的方式与之相反。",
            "page": 69
          },
          {
            "term": "all/some/any",
            "desc": "all要与子查询结果集中每个值比较都满足才返回true；some或any是同义词，满足某个值即返回true。",
            "page": 71
          }
        ],
        "code": [
          "select studentno,courseno,final from score as a where final < (select avg(final) from score as b where a.courseno=b.courseno group by courseno);",
          "select studentno,sname,phone,Email from student where studentno in (select studentno from score where final>93);",
          "select studentno,sname,birthdate,phone from student where exists (select * from student where birthdate > '2003-12-12');",
          "select student.studentno,sname,phone,final from score inner join student on score.studentno=student.studentno where final >all (select final from score where courseno= 'c05109');"
        ],
        "tips": [
          "all要与每个值都比较；some与any是同义词"
        ]
      },
      {
        "id": "5.4",
        "title": "利用子查询插入、更新与删除数据",
        "pageRange": "73-74",
        "summary": "介绍在insert、update、delete语句中利用子查询成批添加、更新和删除数据。",
        "points": [
          {
            "term": "概述",
            "desc": "利用一个嵌套在insert、update或delete语句的子查询成批地添加、更新和删除表中的数据。",
            "page": 73
          },
          {
            "term": "插入记录",
            "desc": "insert中的select子查询可将其他表或视图的值添加到表中，可同时插入多行。",
            "page": 73
          },
          {
            "term": "更新数据",
            "desc": "update中的select子查询可将其他表或视图的值进行更新，把子查询结果作为更新条件的一部分。",
            "page": 74
          },
          {
            "term": "删除数据",
            "desc": "delete中利用子查询可删除符合条件的数据行，把子查询结果作为删除条件的一部分。",
            "page": 74
          }
        ],
        "code": [
          "insert into student01 (select * from student where birthdate>='2003-12-31');",
          "update score set final= final*1.05 where studentno in (select studentno from student where entrance <800);"
        ],
        "tips": []
      },
      {
        "id": "5.5",
        "title": "通用表达式",
        "pageRange": "75-80",
        "summary": "介绍通用表表达式CTE的概念、语法、递归CTE的限制，以及斐波那契数列示例。",
        "points": [
          {
            "term": "CTE",
            "desc": "通用表表达式是在语句级别定义的临时结果集，作用范围是在当前语句。",
            "page": 75
          },
          {
            "term": "语法",
            "desc": "with [recursive] cte_name [(col_name [, col_name] ...)] as (subquery) [, ...]。",
            "page": 75
          },
          {
            "term": "with",
            "desc": "可出现在select、update、delete开始部分；同一语句级别只允许一个with子句，每个CTE必须唯一。",
            "page": 75
          },
          {
            "term": "recursive",
            "desc": "CTE子查询引用自己名称称递归CTE，with子句中包含递归CTE必须使用关键字recursive。",
            "page": 75
          },
          {
            "term": "递归限制",
            "desc": "递归select部分不能包含聚合函数、窗口函数、group by、order by、limit、distinct等。",
            "page": 78
          },
          {
            "term": "终止条件",
            "desc": "递归CTE需包含终止递归条件，可用kill query命令或Ctrl+C终止死循环查询。",
            "page": 77
          },
          {
            "term": "递归示例",
            "desc": "用递归CTE生成12个数字的斐波那契数列，n到达12后结束递归过程。",
            "page": 79
          }
        ],
        "code": [
          "with [recursive] cte_name [(col_name [, col_name] ...)] as (subquery) [,cte_name [(col_name [, col_name] ...)]as (subquery)] ...",
          "with cte95 as (select * from score where final>95) select student.studentno,sname,phone,Email,cte95.daily from student join cte95 on student.studentno=cte95.studentno where student.entrance>800;",
          "with recursive fibnaci(n, fib_n, next_fib_n) as (select 1, 0, 1 union select n + 1, next_fib_n, fib_n + next_fib_n from fibnaci where n < 12) select * from fibnaci;"
        ],
        "tips": [
          "递归CTE必须有终止条件；递归部分不能含聚合、窗口、group by、order by、limit、distinct"
        ]
      },
      {
        "id": "6",
        "title": "使用正则表达式进行模糊查询",
        "pageRange": "81-87",
        "summary": "介绍正则表达式查询的特点与regexp语法，以及^、$、.、|等匹配选项的应用。",
        "points": [
          {
            "term": "正则表达式",
            "desc": "用来检索或替换符合某个模式的文本内容，查询能力比通配字符更强大灵活，可用于非常复杂的查询。",
            "page": 81
          },
          {
            "term": "regexp",
            "desc": "MySQL中使用regexp关键字匹配查询正则表达式，语法为where 字段名 regexp '操作符'。",
            "page": 81
          },
          {
            "term": "^",
            "desc": "用字符^可以匹配以特定字符或字符串开头的记录。",
            "page": 84
          },
          {
            "term": "$",
            "desc": "用字符$可以匹配以特定字符或字符串结尾的记录。",
            "page": 85
          },
          {
            "term": ".",
            "desc": "用.来替代字符串中的任意一个字符，表示除\\n以外的任何单个字符。",
            "page": 86
          },
          {
            "term": "|",
            "desc": "指定多个字符串时用符号|隔开，只要匹配这些字符串中的任意一个即可。",
            "page": 87
          }
        ],
        "code": [
          "where 字段名 regexp '操作符'",
          "select studentno,sname,birthdate,phone from student where sname regexp '^赵';",
          "select studentno,sname,phone,Email from student where phone regexp '5$';",
          "select studentno,sname,phone from student where sname regexp '^赵.江$';",
          "select studentno,sname,phone,Email from student where phone regexp '131|132';"
        ],
        "tips": [
          "regexp查询能力比like通配符更强大灵活"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch4-ppt-s01",
        "type": "single",
        "stem": "MySQL通过哪个语句实现数据检索？",
        "options": [
          "A. insert",
          "B. select",
          "C. update",
          "D. delete"
        ],
        "answer": "B",
        "analysis": "解析：PPT第2页指出数据检索是按预定条件查询数据并获取所需信息的过程，MySQL通过select语句查询实现数据检索。",
        "page": 2
      },
      {
        "id": "ch4-ppt-s02",
        "type": "single",
        "stem": "在select语句中，“*”代表什么？",
        "options": [
          "A. 所有的列",
          "B. 第一列",
          "C. 查询条件",
          "D. 记录条数"
        ],
        "answer": "A",
        "analysis": "解析：PPT第5页指出使用select语句首先要确定所要查询的列，“*”代表所有的列。",
        "page": 5
      },
      {
        "id": "ch4-ppt-s03",
        "type": "single",
        "stem": "从结果集中除去重复的行应使用哪个子句？",
        "options": [
          "A. distinct",
          "B. all",
          "C. union",
          "D. group"
        ],
        "answer": "A",
        "analysis": "解析：PPT第11页指出如果希望一个列表没有重复值，可利用distinct子句从结果集中除去重复的行。",
        "page": 11
      },
      {
        "id": "ch4-ppt-s04",
        "type": "single",
        "stem": "like运算符中，通配符“%”表示？",
        "options": [
          "A. 一个字符",
          "B. 任意个字符",
          "C. 一个数字",
          "D. 空值"
        ],
        "answer": "B",
        "analysis": "解析：PPT第16页指出like有两种通配符，%可以匹配一个或多个字符代表任意长度字符串，_只匹配一个字符。",
        "page": 16
      },
      {
        "id": "ch4-ppt-s05",
        "type": "single",
        "stem": "order by子句中表示降序排列的关键字是？",
        "options": [
          "A. asc",
          "B. desc",
          "C. limit",
          "D. order"
        ],
        "answer": "B",
        "analysis": "解析：PPT第22页指出利用order by可对结果升序asc或降序desc排列，默认情况下按升序排列。",
        "page": 22
      },
      {
        "id": "ch4-ppt-s06",
        "type": "single",
        "stem": "用来统计记录条数的聚合函数是？",
        "options": [
          "A. sum()",
          "B. avg()",
          "C. count()",
          "D. max()"
        ],
        "answer": "C",
        "analysis": "解析：PPT第28页指出count()用来统计记录的条数，sum()总和、avg()平均值、max()最大值。",
        "page": 28
      },
      {
        "id": "ch4-ppt-s07",
        "type": "single",
        "stem": "将多个select语句的返回结果组合到一个结果集应使用？",
        "options": [
          "A. join",
          "B. union",
          "C. group by",
          "D. having"
        ],
        "answer": "B",
        "analysis": "解析：PPT第58页指出union操作符可以将多个select语句的返回结果组合到一个结果集中。",
        "page": 58
      },
      {
        "id": "ch4-ppt-s08",
        "type": "single",
        "stem": "定义通用表表达式（CTE）使用的关键字是？",
        "options": [
          "A. with",
          "B. select",
          "C. over",
          "D. partition"
        ],
        "answer": "A",
        "analysis": "解析：PPT第75页指出通用表表达式with子句的语法，with是通用表表达式的关键词。",
        "page": 75
      },
      {
        "id": "ch4-ppt-b01",
        "type": "blank",
        "stem": "数据检索是指从数据库中按照预定条件查询数据，MySQL是通过____语句实现的。",
        "answer": [
          "select",
          "SELECT"
        ],
        "answerText": "select",
        "analysis": "解析：PPT第2页指出MySQL是通过select语句查询实现数据检索的。",
        "page": 2
      },
      {
        "id": "ch4-ppt-b02",
        "type": "blank",
        "stem": "在select语句中，“*”代表所有的____。",
        "answer": [
          "列",
          "字段",
          "列/字段"
        ],
        "answerText": "列",
        "analysis": "解析：PPT第5页指出使用select语句时首先要确定所要查询的列，“*”代表所有的列。",
        "page": 5
      },
      {
        "id": "ch4-ppt-b03",
        "type": "blank",
        "stem": "利用____子句可以从结果集中除去重复的行。",
        "answer": [
          "distinct",
          "DISTINCT"
        ],
        "answerText": "distinct",
        "analysis": "解析：PPT第11页指出如果希望一个列表没有重复值，可利用distinct子句从结果集中除去重复的行。",
        "page": 11
      },
      {
        "id": "ch4-ppt-b04",
        "type": "blank",
        "stem": "order by子句默认情况下，结果集按照____排列。",
        "answer": [
          "升序",
          "asc",
          "ASC"
        ],
        "answerText": "升序",
        "analysis": "解析：PPT第22页指出默认情况下结果集按照升序排列，可加desc实现降序输出。",
        "page": 22
      },
      {
        "id": "ch4-ppt-b05",
        "type": "blank",
        "stem": "连接n个表至少需要____个连接条件，以避免笛卡儿积的出现。",
        "answer": [
          "n-1",
          "n－1",
          "n-1个"
        ],
        "answerText": "n-1",
        "analysis": "解析：PPT第56页指出对于3个以上关系表的连接查询，连接n个表至少需要n-1个连接条件，以避免笛卡儿积。",
        "page": 56
      },
      {
        "id": "ch4-ppt-b06",
        "type": "blank",
        "stem": "使用正则表达式查询时，字符____用来匹配以特定字符或字符串开头的记录。",
        "answer": [
          "^"
        ],
        "answerText": "^",
        "analysis": "解析：PPT第84页指出使用字符^可以匹配以特定字符或字符串开头的记录。",
        "page": 84
      }
    ]
  },
  {
    "chapter": 5,
    "title": "索引和视图",
    "goals": [
      "理解索引的概念、分类与设置原则",
      "掌握创建、查看和删除索引的方法",
      "掌握视图的创建、查看、修改和删除",
      "掌握通过视图管理表数据及检查视图的应用"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1.1",
        "title": "理解索引",
        "pageRange": "3-6",
        "summary": "本节介绍索引的概念：索引是由表中一列或多列组合而成的特殊数据库结构，是为加速数据检索而创建的分散的物理数据结构。索引依赖表建立，由数据库自动管理和维护，编写SQL时有无索引并无区别。最后给出了索引的优点并强调索引并非越多越好。",
        "points": [
          {
            "term": "索引的定义",
            "desc": "由数据库表中一列或多列组合而成的特殊数据库结构，利用索引可以快速查询表中的特定记录信息。",
            "page": 3
          },
          {
            "term": "索引的本质",
            "desc": "为加速数据检索而创建的分散的、物理的数据结构，包含从表中生成的键以及映射到指定数据行的存储位置指针。",
            "page": 4
          },
          {
            "term": "表的存储组成",
            "desc": "索引依赖于表建立，表的数据存储由表的数据页面和存放索引的索引页面两部分组成。",
            "page": 4
          },
          {
            "term": "索引的自动管理",
            "desc": "索引一旦创建即由数据库自动管理和维护；编写SQL查询时，有索引表与无索引表没有任何区别。",
            "page": 5
          },
          {
            "term": "查询优化器",
            "desc": "MySQL执行查询时，查询优化器会估计多种检索方法的成本，从中选用最有效的查询计划。",
            "page": 5
          },
          {
            "term": "索引的优点",
            "desc": "加速数据检索、优化查询、强制实施行的唯一性；但索引并不是越多越好，应创建合适的索引。",
            "page": 6
          }
        ],
        "code": [],
        "tips": [
          "索引由数据库自动维护，编写SQL查询时写法与无索引表完全相同",
          "索引不是越多越好，要正确认识索引的重要性和设计原则"
        ]
      },
      {
        "id": "1.2",
        "title": "索引的分类",
        "pageRange": "7-11",
        "summary": "本节按不同标准介绍索引分类：普通索引、唯一性索引、主键索引、全文索引和空间索引；按键值列数分单列索引和复合索引；按存储方式分B-Tree索引和Hash索引，并说明各类型的特点与限制。",
        "points": [
          {
            "term": "索引类型概览",
            "desc": "MySQL索引通常包括普通索引(index)、唯一性索引(unique)、主键(primary key)、全文索引(fulltext)和空间索引(spatial)等类型。",
            "page": 7
          },
          {
            "term": "普通索引",
            "desc": "关键字为index，是MySQL中的基本索引类型，允许在定义索引的列中插入重复值和空值。",
            "page": 7
          },
          {
            "term": "主键索引",
            "desc": "一种特殊的唯一索引，不允许有空值；一个表只能有一个主键索引。",
            "page": 7
          },
          {
            "term": "唯一性索引",
            "desc": "unique索引列的值必须唯一，允许有空值；组合索引则列值组合必须唯一；一个表上可创建多个unique索引。",
            "page": 8
          },
          {
            "term": "全文索引",
            "desc": "fulltext支持在定义列上全文查找，允许重复值和空值；只能对char、varchar和text列编制且只能在MyISAM表中编制，默认对中文作用不大。",
            "page": 8
          },
          {
            "term": "空间索引",
            "desc": "spatial对空间数据类型字段建立，空间类型有geometry、point、linestring、polygon；列必须声明为not null且只能在MyISAM表中创建。",
            "page": 9
          },
          {
            "term": "单列索引与复合索引",
            "desc": "如果按照创建索引键值的列数分类，索引还可以分为单列索引和复合索引。",
            "page": 10
          },
          {
            "term": "Hash索引",
            "desc": "按存储方式分B-Tree索引和Hash索引，MEMORY引擎支持Hash索引。Hash检索效率高，但仅支持“=”、“in”和“<=>”查询，不能使用范围查询。",
            "page": 11
          }
        ],
        "code": [],
        "tips": [
          "全文索引和空间索引只能在MyISAM存储引擎的表中创建",
          "Hash索引仅支持=、in、<=>查询，不能范围查询，且不能避免表扫描"
        ]
      },
      {
        "id": "1.3",
        "title": "设置索引的原则",
        "pageRange": "12-13",
        "summary": "本节给出创建索引时应遵循的基本原则：避免对经常更新的表创建过多索引，对数据量大而更新少的查询表可建多个索引，常排序分组联合的字段应建索引；避免对大量重复值字段建索引，及时删除无用索引，并给出主键索引和索引键长度的说明。",
        "points": [
          {
            "term": "限制索引数目",
            "desc": "应避免对经常更新的表创建过多的索引，要限制索引的数目。",
            "page": 12
          },
          {
            "term": "按更新与查询比例",
            "desc": "表的数据量大、对数据更新较少而查询较多时，可以创建多个索引来提高性能。",
            "page": 12
          },
          {
            "term": "常排序分组字段",
            "desc": "经常需要排序、分组和联合操作的字段一定要建立索引，即用于join、where判断和order by排序的字段。",
            "page": 12
          },
          {
            "term": "避免大量重复值字段",
            "desc": "不要对含有大量重复值的字段建立索引，否则可能降低性能；不再使用或很少使用的索引要及时删除。",
            "page": 13
          },
          {
            "term": "主键上创建索引",
            "desc": "在InnoDB中通过主键访问数据效率非常高；每个表只能创建一个主键索引。",
            "page": 13
          },
          {
            "term": "索引键长度限制",
            "desc": "InnoDB数据引擎的索引键最长支持767字节，MyISAM数据引擎支持1000字节。",
            "page": 13
          }
        ],
        "code": [],
        "tips": []
      },
      {
        "id": "1.4",
        "title": "创建索引",
        "pageRange": "14-20",
        "summary": "本节介绍三种创建索引的命令方式：create index语句、创建表时附带创建索引、alter table语句，给出基本语法与多个示例，并说明前缀索引、索引命名、唯一索引与主键的关系以及查看索引的方法。",
        "points": [
          {
            "term": "三种创建方式",
            "desc": "创建索引通常有3种命令方式：create index创建索引、创建表时附带创建索引、使用alter table语句创建索引。",
            "page": 14
          },
          {
            "term": "create index语法",
            "desc": "基本形式为 create [unique|fulltext|spatial] index index_name on table_name (index_col_name,...)。",
            "page": 15
          },
          {
            "term": "前缀索引",
            "desc": "可用col_name(length)对前缀编制索引；char和varchar只用列的一部分即可，blob和text列编制索引必须给出前缀长度。",
            "page": 16
          },
          {
            "term": "前缀索引优点",
            "desc": "使用列的一部分创建索引可使索引文件大大减小、节省磁盘空间，并有可能提高insert操作的速度。",
            "page": 16
          },
          {
            "term": "查看索引",
            "desc": "若要查看表中已经创建的索引情况，可以使用show index from table_name语句实现。",
            "page": 20
          },
          {
            "term": "创建索引说明",
            "desc": "只有表的所有者才能创建索引，索引名在表中必须唯一；主键索引必定唯一，唯一性索引不一定是主键，一张表只能一个主键但可有多个唯一索引。",
            "page": 20
          },
          {
            "term": "唯一索引注意",
            "desc": "创建unique约束时MySQL会自动创建唯一索引；创建列不能含重复数据且不能有两个或两个以上空值，否则索引创建失败。",
            "page": 20
          }
        ],
        "code": [
          "create [unique|fulltext|spatial] index index_name on table_name (index_col_name,...)",
          "col_name[(length)] [asc | desc]",
          "create index phone_index on student(phone asc);",
          "create unique index cname_index on course (cname);",
          "create index sc_index on score(studentno,courseno);",
          "create table if not exists teacher1 (teacherno char(6) not null, tname char(8) not null, department char(16) not null, primary key (teacherno), unique index tname_index(tname), index dep_index(department(5)));",
          "alter table teacher1 add primary key(teacherno), add index mark(tname, prof);",
          "show index from table_name;"
        ],
        "tips": [
          "blob和text列创建索引时必须给出前缀长度",
          "主键索引必定是唯一的，但唯一性索引不一定是主键"
        ]
      },
      {
        "id": "1.5",
        "title": "删除索引",
        "pageRange": "21-22",
        "summary": "本节介绍删除索引的两种方法：drop index语句和alter table语句，给出语法格式与示例，并说明drop index可删除各种类型索引，删除主键索引需使用drop primary key且不需提供索引名。",
        "points": [
          {
            "term": "drop index语法",
            "desc": "删除不再需要的索引可用drop语句，语法为 drop index index_name on table_name ;。",
            "page": 21
          },
          {
            "term": "alter table删除索引",
            "desc": "语法为 alter [ignore] table table_name | drop primary key | drop index index_name | drop foreign key fk_symbol。",
            "page": 22
          },
          {
            "term": "删除主键索引",
            "desc": "如要删除主键索引，直接使用drop primary key子句，不需要提供索引名称，因为一个表中只有一个主键。",
            "page": 22
          },
          {
            "term": "drop index适用范围",
            "desc": "drop index子句可以删除各种类型的索引，包括唯一索引。",
            "page": 22
          }
        ],
        "code": [
          "drop index index_name on table_name ;",
          "drop index mark on teacher1;",
          "alter [ignore] table table_name | drop primary key | drop index index_name | drop foreign key fk_symbol",
          "alter table course drop index cname_index;"
        ],
        "tips": [
          "删除主键索引用drop primary key，不需要提供索引名称",
          "drop index可以删除唯一索引等各类索引"
        ]
      },
      {
        "id": "2.1",
        "title": "创建视图",
        "pageRange": "23-32",
        "summary": "本节先介绍视图是从一个或多个表通过select导出的虚拟表、只存放定义不存放数据，以及简化查询、屏蔽复杂性、安全性等优点；随后给出创建视图的语法、权限要求和多项限制，并演示在单表、多表和已有视图上创建视图。",
        "points": [
          {
            "term": "视图的定义",
            "desc": "从一个或多个表及其他视图中通过select导出的虚拟表，数据库只存放视图定义而不存放数据，行和列数据在引用视图时动态生成。",
            "page": 23
          },
          {
            "term": "视图的优点",
            "desc": "简化数据查询和处理、屏蔽数据库的复杂性、提供安全性；通过视图可实现对基表数据的查询与修改。",
            "page": 24
          },
          {
            "term": "创建视图的权限",
            "desc": "要求创建用户具有针对视图的create view权限，以及针对select语句选择的每一列上的某些权限。",
            "page": 26
          },
          {
            "term": "创建视图语法",
            "desc": "create [or replace][algorithm ={undefined|merge|temptable}] view view_name [(column_list)] as select_statement [with[cascaded|local] check option];。",
            "page": 27
          },
          {
            "term": "创建视图的限制",
            "desc": "from子句不能用子查询，select不能引用系统或用户变量及预处理语句参数，不能引用temporary表或创建temporary视图，不能将触发程序与视图关联。",
            "page": 28
          },
          {
            "term": "视图建立的基础",
            "desc": "视图可以建立在一张表上，也可以建立在多张表或既有视图上；定义引用的基本表可以来自另一个数据库，只需在表名前加数据库名。",
            "page": 26
          }
        ],
        "code": [
          "create [or replace][algorithm ={ undefined|merge|temptable }] view view_name [(column_list)] as select_statement [ with[ cascaded|local] check option ] ;",
          "create view teach_view1 as select * from teacher;",
          "create view stu_score1 as select student.studentno, sname, phone, cname,final from score join student on student.studentno=score.studentno join course on course.courseno=score.courseno where sex='女' and left(student.studentno,2)='20';",
          "create view teach_view2 as select teacherno, tname, major from teach_view1 where prof like '%教授' and department='计算机学院';"
        ],
        "tips": [
          "视图的from子句中不能使用子查询",
          "定义中不能引用temporary表，也不能创建temporary视图",
          "基本表中添加新字段后，已有视图将不包含新字段"
        ]
      },
      {
        "id": "2.2",
        "title": "查看视图的定义",
        "pageRange": "33-35",
        "summary": "本节介绍查看视图需要show view权限，并给出四种查看视图的方法：describe语句、show table status语句、show create view语句以及查询information_schema.views表。",
        "points": [
          {
            "term": "查看视图的权限",
            "desc": "查看视图必须要有show view的权限，MySQL数据库下的user表中保存着这个信息。",
            "page": 33
          },
          {
            "term": "查看视图的方法",
            "desc": "包括describe语句、show table status语句、show create view语句和查询information_schema数据库下的views表等。",
            "page": 33
          },
          {
            "term": "describe语句",
            "desc": "describe语句用于查看视图的基本信息，其基本形式与查看表的形式一样。",
            "page": 33
          },
          {
            "term": "show table status",
            "desc": "使用 show table status like 'view_name'; 可以查看视图的基本信息。",
            "page": 34
          },
          {
            "term": "show create view",
            "desc": "使用 show create view view_name 可以查看视图的详细定义。",
            "page": 34
          },
          {
            "term": "views表",
            "desc": "所有视图的定义都存放在information_schema数据库的views表中，用 select * from information_schema.views; 查看详细信息。",
            "page": 35
          }
        ],
        "code": [
          "show table status like 'view_name';",
          "show create view view_name",
          "select * from information_schema.views;"
        ],
        "tips": []
      },
      {
        "id": "2.3",
        "title": "修改视图",
        "pageRange": "36-38",
        "summary": "本节说明修改视图是修改已存在视图的定义，以保持视图与基本表一致；介绍create or replace view和alter view两种修改方式及alter的语法格式，并给出修改teach_view2的示例。",
        "points": [
          {
            "term": "修改视图的概念",
            "desc": "修改视图是指修改数据库中已存在视图的定义；当基本表字段改变时可通过修改视图保持两者一致。",
            "page": 36
          },
          {
            "term": "create or replace view",
            "desc": "该语句使用灵活：视图已存在时进行修改，视图不存在时可以创建视图。",
            "page": 36
          },
          {
            "term": "alter view语法",
            "desc": "alter [algorithm = {undefined|merge|temptable}] view view_name [(column_list)] as select语句 [with [cascaded|local]check option];。",
            "page": 37
          },
          {
            "term": "修改视图示例",
            "desc": "例9用alter view修改teach_view2，在视图名后指明视图列名称，统计计算机学院和材料学院教师中的教授和副教授。",
            "page": 38
          }
        ],
        "code": [
          "alter [algorithm = {undefined|merge|temptable}] view view_name [(column_list)] as select语句 [with [cascaded|local]check option];",
          "alter view teach_view2(教师号,教师名,专业) as select teacherno, tname, major from teach_view1 where prof like '%教授' and (department='计算机学院' or department='材料学院');"
        ],
        "tips": []
      },
      {
        "id": "2.4",
        "title": "删除视图",
        "pageRange": "39-40",
        "summary": "本节介绍删除视图使用drop view语句，需拥有drop权限，删除时只删除视图定义不删除数据，并说明可一次删除多个视图及基本语法格式。",
        "points": [
          {
            "term": "删除视图的概念",
            "desc": "删除视图是删除数据库中已存在的视图；删除时只删除视图的定义，不会删除数据。",
            "page": 39
          },
          {
            "term": "drop view权限与多视图",
            "desc": "用户必须拥有drop权限才能使用drop view；该命令可删除多个视图，各视图名之间用逗号分隔。",
            "page": 39
          },
          {
            "term": "drop view语法",
            "desc": "基本格式为 drop view [if exists] view_name。",
            "page": 40
          }
        ],
        "code": [
          "drop view [if exists] view_name",
          "drop view V1_student;"
        ],
        "tips": [
          "删除视图只删除定义，不会删除基表数据",
          "drop view可一次删除多个视图，视图名之间用逗号分隔"
        ]
      },
      {
        "id": "3.1",
        "title": "使用视图管理表数据",
        "pageRange": "41-47",
        "summary": "本节介绍视图的检索及通过视图对基表进行插入、修改、删除操作：视图查询几乎无限制，更新需有相应权限；说明单表视图可直接更新、多表视图一次只能改一个基表，并列出不可修改视图的各类结构。",
        "points": [
          {
            "term": "视图应用内容",
            "desc": "视图的使用主要包括视图的检索以及通过视图对基表进行插入、修改、删除操作；检索几乎无限制，更新有一定限制条件。",
            "page": 41
          },
          {
            "term": "视图查询",
            "desc": "使用视图进行查询实际上就是把视图作为数据源，实现查询功能。",
            "page": 42
          },
          {
            "term": "视图统计计算",
            "desc": "可用视图进行统计计算，如创建course_avg视图用avg(final)统计各门课程平均成绩并按课程名称排序。",
            "page": 43
          },
          {
            "term": "视图修改基表",
            "desc": "在视图中进行insert、update和delete等操作而修改基表的数据，需要具有执行相关操作的权限。",
            "page": 44
          },
          {
            "term": "单表视图可更新",
            "desc": "视图若只依赖于一个基表，则可以直接通过更新视图来更新基本表的数据。",
            "page": 46
          },
          {
            "term": "多表视图限制",
            "desc": "若一个视图依赖于多张基表，则一次只能修改一个基表的数据，不能同时修改多个基本表的数据。",
            "page": 46
          },
          {
            "term": "不可修改的视图",
            "desc": "视图列含聚合函数、表达式计算列、distinct、group by/order by/having、union、子查询、from多表或引用不可更新视图时均不可修改。",
            "page": 47
          }
        ],
        "code": [
          "select 学号, 姓名,课程号,成绩 from stu_view2 where 课程号='c08123' and 成绩 > 80;",
          "create view course_avg as select cname 课程名, avg(final) 平均成绩 from score join course on score.courseno= course.courseno group by cname desc;",
          "insert into teach_view1(teacherno,tname,major,prof,department) values ('t06027' , '陶期年' , '纳米技术' , '教授' , '材料学院' );",
          "update teach_view1 set prof = '副教授' where teacherno = 't07019';",
          "delete from teach_view1 where teacherno = 't08017';"
        ],
        "tips": [
          "依赖多表的视图一次只能修改一个基表的数据",
          "含聚合函数、distinct、group by、union等结构的视图不可修改"
        ]
      },
      {
        "id": "3.2",
        "title": "检查视图的应用",
        "pageRange": "48-51",
        "summary": "本节介绍视图分为普通视图与检查视图，说明with check option使更新操作必须满足检查条件，并通过V_dept视图的插入示例展示不满足条件时报ERROR 1369、更新失败。",
        "points": [
          {
            "term": "普通视图与检查视图",
            "desc": "视图可分为普通视图与检查视图；没有with_check_option（值为0）时为普通视图，不具备检查功能。",
            "page": 48
          },
          {
            "term": "with check option",
            "desc": "使用with check option子句后，通过检查视图更新基表数据时，只有满足检查条件的更新语句才能成功执行。",
            "page": 48
          },
          {
            "term": "检查视图示例",
            "desc": "创建V_dept视图包含所有部门为“计算机学院”的老师数据，并限制插入数据中部门必须为“计算机学院”。",
            "page": 49
          },
          {
            "term": "检查失败",
            "desc": "通过V_dept插入“软件学院”的记录时报 ERROR 1369 (HY000): check option failed，说明检查视图先行检查，不满足条件则更新失败。",
            "page": 51
          }
        ],
        "code": [
          "create view V_dept as select teacherno,tname,major,prof, department from teacher where department ='计算机学院' with check option;",
          "insert into V_dept values('t08017','时观','金融管理','副教授','计算机学院');"
        ],
        "tips": [
          "with check option要求更新数据满足检查条件，否则报ERROR 1369且更新失败"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch5-ppt-s01",
        "type": "single",
        "stem": "在MySQL中，索引是为了加速数据检索而创建的一种（ ）。",
        "options": [
          "A. 逻辑的数据结构",
          "B. 分散的、物理的数据结构",
          "C. 临时表",
          "D. 虚拟表"
        ],
        "answer": "B",
        "analysis": "解析：PPT第4页指出，MySQL的索引是为了加速对数据进行检索而创建的一种分散的、物理的数据结构。故选B。",
        "page": 4
      },
      {
        "id": "ch5-ppt-s02",
        "type": "single",
        "stem": "下列关于MySQL索引的说法，正确的是（ ）。",
        "options": [
          "A. 一个表可以有多个主键索引",
          "B. 唯一性索引一定就是主键索引",
          "C. 主键索引不允许有空值，一个表只能有一个",
          "D. 普通索引不允许插入重复值"
        ],
        "answer": "C",
        "analysis": "解析：PPT第7页说明主键索引是一种特殊的唯一索引，不允许有空值，一个表只能有一个；第20页说明唯一性索引不一定是主键，普通索引允许重复值。故选C。",
        "page": 7
      },
      {
        "id": "ch5-ppt-s03",
        "type": "single",
        "stem": "MySQL中创建全文索引（fulltext）时，只能在（ ）表中编制。",
        "options": [
          "A. InnoDB",
          "B. MyISAM",
          "C. MEMORY",
          "D. 任意存储引擎"
        ],
        "answer": "B",
        "analysis": "解析：PPT第8页指出，全文索引只能对char、varchar和text类型的列编制索引，并且只能在MyISAM表中编制，即只有MyISAM存储引擎支持全文索引。故选B。",
        "page": 8
      },
      {
        "id": "ch5-ppt-s04",
        "type": "single",
        "stem": "MySQL中支持Hash索引的存储引擎是（ ）。",
        "options": [
          "A. InnoDB",
          "B. MyISAM",
          "C. MEMORY",
          "D. ARCHIVE"
        ],
        "answer": "C",
        "analysis": "解析：PPT第11页指出，按存储方式分类MySQL索引分为B-Tree索引和Hash索引，MySQL的MEMORY数据引擎支持Hash索引。故选C。",
        "page": 11
      },
      {
        "id": "ch5-ppt-s05",
        "type": "single",
        "stem": "要删除表中的主键索引，应直接使用的子句是（ ）。",
        "options": [
          "A. drop index primary",
          "B. drop primary key",
          "C. drop key",
          "D. drop unique"
        ],
        "answer": "B",
        "analysis": "解析：PPT第22页说明，如要删除主键索引，则直接使用drop primary key子句进行删除，不需要提供索引名称，因为一个表中只有一个主键。故选B。",
        "page": 22
      },
      {
        "id": "ch5-ppt-s06",
        "type": "single",
        "stem": "关于MySQL中的视图，下列说法正确的是（ ）。",
        "options": [
          "A. 视图中存放了实际的数据",
          "B. 视图是通过select导出的虚拟表，数据库只存放其定义",
          "C. 视图不能基于多个表创建",
          "D. 删除视图时会同时删除基表数据"
        ],
        "answer": "B",
        "analysis": "解析：PPT第23页指出，视图是从一个或多个表及其他视图中通过select导出的虚拟表，数据库中只存放视图的定义而不存放数据；第26页说明视图可建在多张表上；第39页说明删除视图只删除定义不删除数据。故选B。",
        "page": 23
      },
      {
        "id": "ch5-ppt-s07",
        "type": "single",
        "stem": "通过检查视图更新基表数据时，只有满足（ ）的更新语句才能成功执行。",
        "options": [
          "A. 任意更新",
          "B. 检查条件",
          "C. 主键唯一条件",
          "D. 单表条件"
        ],
        "answer": "B",
        "analysis": "解析：PPT第48页指出，如果使用了with check option子句，在通过检查视图更新基表数据时，只有满足检查条件的更新语句才能成功执行。故选B。",
        "page": 48
      },
      {
        "id": "ch5-ppt-b01",
        "type": "blank",
        "stem": "在数据库中使用索引的优点包括加速数据检索、优化查询和强制实施行的____。",
        "answer": [
          "唯一性",
          "唯一"
        ],
        "answerText": "唯一性",
        "analysis": "解析：PPT第6页列出使用索引的优点：加速数据检索、优化查询、强制实施行的唯一性。",
        "page": 6
      },
      {
        "id": "ch5-ppt-b02",
        "type": "blank",
        "stem": "按照存储方式分类，MySQL的索引分为B-Tree索引和____索引。",
        "answer": [
          "Hash",
          "hash",
          "哈希"
        ],
        "answerText": "Hash",
        "analysis": "解析：PPT第11页指出，如果按照存储方式分类，MySQL的索引分为B-Tree索引和Hash索引。",
        "page": 11
      },
      {
        "id": "ch5-ppt-b03",
        "type": "blank",
        "stem": "为student表的phone列建立升序普通索引，应写为：create ____ phone_index on student(phone asc);",
        "answer": [
          "index",
          "INDEX"
        ],
        "answerText": "index",
        "analysis": "解析：PPT第17页例1给出语句 create index phone_index on student(phone asc);，普通索引的关键字是index。",
        "page": 17
      },
      {
        "id": "ch5-ppt-b04",
        "type": "blank",
        "stem": "若要查看表中已经创建的索引的情况，可以使用____ from table_name语句实现。",
        "answer": [
          "show index",
          "SHOW INDEX",
          "show indexes"
        ],
        "answerText": "show index",
        "analysis": "解析：PPT第20页说明，若要查看表中已经创建索引的情况，可以使用show index from table_name语句实现。",
        "page": 20
      },
      {
        "id": "ch5-ppt-b05",
        "type": "blank",
        "stem": "视图是从一个或多个表中通过select语句导出的虚拟表，数据库中只存放了视图的____，而并没有存放视图中的数据。",
        "answer": [
          "定义",
          "定义（不存放数据）"
        ],
        "answerText": "定义",
        "analysis": "解析：PPT第23页指出，数据库中只存放了视图的定义，而并没有存放视图中的数据。",
        "page": 23
      }
    ]
  },
  {
    "chapter": 6,
    "title": "MySQL8.0编程基础",
    "goals": [
      "掌握MySQL脚本、自定义变量、表达式、定界符与预处理语句等编程基础知识",
      "掌握自定义函数的创建、调用与维护管理",
      "掌握条件控制语句和循环语句的使用"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1.1",
        "title": "自定义变量的应用",
        "pageRange": "5-13",
        "summary": "本节介绍会话与会话系统变量的概念，说明自定义变量的三要素及用户会话变量与局部变量两种类型；分别讲解用户会话变量的定义与赋值方式、局部变量的定义与作用域，并比较两者的区别。",
        "points": [
          {
            "term": "会话系统变量",
            "desc": "客户机成功连接服务器后产生对应会话，服务器内存生成会话系统变量，其初始值是全局系统变量值的拷贝。",
            "page": 5
          },
          {
            "term": "自定义变量三要素",
            "desc": "MySQL语言中的自定义变量由变量名、变量类型和变量值3要素构成；分为以@开头的用户会话变量和局部变量。",
            "page": 5
          },
          {
            "term": "用户会话变量命名",
            "desc": "用户会话变量一般以一个“@”开头，系统会话变量以两个“@”开头；变量名大小写不敏感，系统会话变量无需定义可直接用。",
            "page": 6
          },
          {
            "term": "会话变量生存期",
            "desc": "服务器为每个会话开辟独立的会话连接空间，不同会话互不干扰；会话变量的生存期就是会话空间开辟到释放的时间。",
            "page": 7
          },
          {
            "term": "会话变量定义与赋值",
            "desc": "定义与赋值同时进行，可用set或select语句：set @var=expression、select @var:=expression 或 select expression into @var。",
            "page": 8
          },
          {
            "term": "赋值号比较",
            "desc": "“:=”是赋值号，“=”一般作比较操作符，仅在set语句（含update的set子句）中作赋值号；select用“:=”产生结果集，into方式不产生结果集。",
            "page": 9
          },
          {
            "term": "局部变量",
            "desc": "局部变量在定义的局部程序范围内有效，用declare命令定义并指定数据类型，如 declare myvar int default 100; 再用set赋值。",
            "page": 11
          },
          {
            "term": "局部变量的使用",
            "desc": "局部变量必须定义在函数、触发器、存储过程等存储程序内；可作为存储过程或函数的参数，此时不需declare但需指定数据类型。",
            "page": 12
          }
        ],
        "code": [
          "set @user_variable1=expression1 [,@user_variable2=expression2 , …]",
          "select @user_variable1:=expression1 [,user_variable2:= expression2 , …]",
          "select expression1 into @user_variable1, expression2 into @user_variable2,…",
          "declare myvar int default 100;",
          "set myvar=77;"
        ],
        "tips": [
          "用户会话变量以一个@开头，系统会话变量以两个@开头",
          "用户会话变量不能用declare定义；局部变量名前无@，不能与表字段名同名",
          "用户会话变量的作用范围与生存周期大于局部变量"
        ]
      },
      {
        "id": "1.2",
        "title": "MySQL表达式",
        "pageRange": "14-15",
        "summary": "本节给出MySQL表达式的定义，并分别按表达式值的类型、值的形式和表达式形式三种标准对表达式进行分类说明。",
        "points": [
          {
            "term": "表达式的定义",
            "desc": "MySQL表达式是由运算符将常量、变量、字段名和函数等组合连接而成的有意义的字符序列，通常可以得到一个值。",
            "page": 14
          },
          {
            "term": "按值类型分类",
            "desc": "根据表达式值的类型，表达式可分为字符型表达式、数值型表达式和日期型表达式。",
            "page": 14
          },
          {
            "term": "按值形式分类",
            "desc": "结果只是一个值的是标量表达式（如1+2）；结果是一行值的是行表达式；结果是0个、1个或多个行表达式集合的是表表达式。",
            "page": 15
          },
          {
            "term": "按形式分类",
            "desc": "分为单一表达式（一个常量、变量、函数或列名）和复合表达式（由运算符连接多个单一表达式，如1+7+3）。",
            "page": 15
          }
        ],
        "code": [],
        "tips": []
      },
      {
        "id": "1.3",
        "title": "定界符delimiter和begin-end语句块",
        "pageRange": "16-19",
        "summary": "本节说明创建函数和存储过程时需用delimiter更改命令结束标记以避免语句被拆分，介绍delimiter的作用与恢复默认结束符的习惯，并给出begin-end语句块的结构与适用场合。",
        "points": [
          {
            "term": "更改结束标记的原因",
            "desc": "默认结束符是分号，而函数和存储过程中含多个分号会报错，需事先把delimiter换成其它符号，如//或$$。",
            "page": 16
          },
          {
            "term": "delimiter的作用",
            "desc": "利用delimiter命令重新定义语句执行的结束符，避免begin-end语句块中的多条语句被拆开。",
            "page": 17
          },
          {
            "term": "恢复默认结束符",
            "desc": "编程结束应把结束符改回分号，因为这是MySQL的默认结束符，实际编程要养成习惯。",
            "page": 18
          },
          {
            "term": "begin-end语句块",
            "desc": "用于定义一组语句块；局部变量、begin-end语句块和流程控制语句只能用于函数、存储过程、游标和触发器的定义内部。",
            "page": 19
          }
        ],
        "code": [
          "delimiter //",
          "delimiter $$",
          "delimiter ;",
          "begin\n[局部]变量声明;\n程序代码行集;\nend ;"
        ],
        "tips": [
          "创建存储程序前先用delimiter改结束符，结束后要改回分号"
        ]
      },
      {
        "id": "1.4",
        "title": "预处理SQL语句",
        "pageRange": "20-27",
        "summary": "本节对比静态SQL与动态SQL，说明预处理语句“一次解析、多次执行”的性能优势，介绍prepare、execute、deallocate三种语句的语法、说明与三个使用步骤，并给出应用示例和限制。",
        "points": [
          {
            "term": "静态SQL与预处理SQL",
            "desc": "静态SQL每次发送都要解析执行；预处理SQL运行期间语句或参数可动态变化，第一次解析后保存到服务器缓存，以后无需再次解析。",
            "page": 20
          },
          {
            "term": "性能优势",
            "desc": "将某些SQL语句封装为预处理SQL语句，可以实现“一次解析，多次执行”的性能优势。",
            "page": 21
          },
          {
            "term": "预处理语句组成",
            "desc": "prepare、execute、deallocate（drop）统称为预处理语句，分别用于预备、执行和释放语句。",
            "page": 21
          },
          {
            "term": "prepare说明",
            "desc": "preparable_stmt必须是单一SQL语句；“?”作为参数制作符只能用于数据值位置；同名预处理语句会隐含解除分配；其范围是客户端会话。",
            "page": 22
          },
          {
            "term": "execute说明",
            "desc": "含参数制作符时必须提供using子句列出用户会话变量，参数值只能由用户会话变量提供，其数目须与参数制作符数量一样多。",
            "page": 23
          },
          {
            "term": "三个步骤",
            "desc": "预处理SQL语句的使用主要包含3个步骤：创建预处理SQL语句、执行预处理SQL语句、释放预处理SQL语句。",
            "page": 24
          },
          {
            "term": "使用限制",
            "desc": "预处理语法不能嵌套；可在存储过程中使用，但不能在存储函数或触发器中使用；参数制作符不用于SQL关键词和标识符。",
            "page": 27
          }
        ],
        "code": [
          "prepare stmt_name from preparable_stmt;",
          "execute stmt_name [using @var_name [, @var_name] ...];",
          "{deallocate|drop} prepare stmt_name;",
          "prepare hypo_c from 'select sqrt(pow(?,2) + pow(?,2)) AS hypotenuse';",
          "execute hypo_c using @a, @b;",
          "deallocate prepare hypo_c;"
        ],
        "tips": [
          "预处理语句可在存储过程中使用，但不能在存储函数和触发程序中使用",
          "参数制作符?只能用于数据值应该出现的地方，不能用于SQL关键词和标识符",
          "预处理语句不能嵌套，也不能用于API函数预备"
        ]
      },
      {
        "id": "1.5",
        "title": "注释",
        "pageRange": "28-28",
        "summary": "本节介绍注释的概念及MySQL中三种注释方式：井号#、双连线--（后须加空格）和正斜杠星号/*…*/，并给出示例代码。",
        "points": [
          {
            "term": "注释的概念",
            "desc": "注释是程序代码中不被执行的文本字符串，用于对代码进行说明或进行诊断的部分语句。",
            "page": 28
          },
          {
            "term": "#注释",
            "desc": "井号字符#：从该字符到行尾都是注释内容。",
            "page": 28
          },
          {
            "term": "--注释",
            "desc": "双连线字符--：从该字符到行尾都是注释内容，注意双连线后一定要加一个空格。",
            "page": 28
          },
          {
            "term": "/*…*/注释",
            "desc": "开始注释对/*和结束注释对*/之间的所有内容均视为注释。",
            "page": 28
          }
        ],
        "code": [
          "USE  teaching;     -- 打开数据库",
          "#查看学生的所有信息",
          "/*  查看所有女生的学号、姓名、和电话  附加条件是女生  */"
        ],
        "tips": [
          "双连线--后一定要加一个空格才是注释"
        ]
      },
      {
        "id": "2.1",
        "title": "创建和调用自定义函数",
        "pageRange": "29-35",
        "summary": "本节介绍创建自定义函数的权限要求和语法格式，解释参数形式in/out/inout、函数特征选项和函数体中的return语句，并通过示例说明自定义函数的创建与调用方式。",
        "points": [
          {
            "term": "创建函数的权限",
            "desc": "用create function创建自定义函数必须具有create routine权限，alter routine和execute权限自动授予创建者；定义时需指定当前数据库。",
            "page": 29
          },
          {
            "term": "创建函数语法",
            "desc": "create function func_name(参数列表) returns return_type [characteristic…] begin function_body_statements; return[return_values]; end;。",
            "page": 30
          },
          {
            "term": "参数形式",
            "desc": "in表示输入参数，out表示输出参数，inout表示输入输出参数；func_parameter为参数名，type为参数类型。",
            "page": 31
          },
          {
            "term": "函数特征选项",
            "desc": "characteristics由language sql、[not] deterministic、{contains sql|no sql|reads sql data|modifies sql data}、sql security、comment等一种或多种组合而成。",
            "page": 32
          },
          {
            "term": "函数体",
            "desc": "begin…end为函数体起止符，内含函数要实现的任务；函数体内要有return return_values;语句表示函数返回值表达式。",
            "page": 32
          },
          {
            "term": "调用函数",
            "desc": "因函数与数据库相关，调用时需打开相应数据库或指定数据库名称；调用方式与MySQL内部函数相同，如 select rectangle_area(5,4);。",
            "page": 35
          }
        ],
        "code": [
          "create function func_name([[in | out | inout]func_parameter type[,…]]) returns return_type [characteristic…] begin function_body_statements; return[return_values]; end;",
          "create function rectangle_area(long1 int,wide1 int) returns int no sql begin return long1 * wide1; end //",
          "create function func_course(c_no varchar(6)) returns char(6) reads sql data begin return (select cname from course where courseno =c_no); end &&",
          "select rectangle_area(5,4);",
          "select func_course('c08123');"
        ],
        "tips": [
          "自定义函数定义时需要指定当前数据库",
          "函数体内必须有return语句返回函数值"
        ]
      },
      {
        "id": "2.2",
        "title": "函数的维护管理",
        "pageRange": "36-40",
        "summary": "本节介绍函数的查看、修改和删除：用show function status、show create function及information_schema.routines表查看；用alter function修改特性；用drop function删除。",
        "points": [
          {
            "term": "查看函数信息",
            "desc": "用 show function status; 查看当前数据库所有自定义函数信息，函数较多时可用 show function status like 模式;。",
            "page": 36
          },
          {
            "term": "按数据库查看函数名",
            "desc": "可用 select name from MySQL.proc where db = 'teaching' and type='function'; 查看指定数据库中的所有自定义函数名。",
            "page": 36
          },
          {
            "term": "查看函数详细信息",
            "desc": "用 show create function 函数名; 查看；函数信息保存在information_schema数据库的routines表中。",
            "page": 37
          },
          {
            "term": "修改函数",
            "desc": "alter function sp_name [characteristic …] 仅用于更改函数特性（如COMMENT、SQL SECURITY、数据访问特性），不能更改参数和函数体。",
            "page": 38
          },
          {
            "term": "删除函数",
            "desc": "使用MySQL命令 drop function func_name 删除自定义函数，如 drop function get_name;。",
            "page": 40
          }
        ],
        "code": [
          "show function status;",
          "show function status like 模式;",
          "show create function 函数名;",
          "select * from information_schema.routines where routine_name='func_course';",
          "alter function sp_name [characteristic …];",
          "drop function func_name;"
        ],
        "tips": [
          "alter function不能修改函数参数和函数体，需修改函数体只能drop后重建"
        ]
      },
      {
        "id": "3.1",
        "title": "条件控制语句",
        "pageRange": "41-49",
        "summary": "本节说明通过控制流语句实现顺序、选择和循环三种基本结构，介绍if语句、case语句的语法形式，以及if()、ifnull()和case函数等条件判断函数的使用。",
        "points": [
          {
            "term": "三种基本结构",
            "desc": "通过控制流语句可实现程序的顺序、选择和循环等3种基本结构，乃至编写较复杂的存储过程、函数和触发器。",
            "page": 41
          },
          {
            "term": "if语句",
            "desc": "用来进行条件判断，根据不同条件执行不同操作，形式为 if condition then … [elseif condition then] … [else] … end if。",
            "page": 42
          },
          {
            "term": "case语句",
            "desc": "多分支结构，从when后的value中查找与case后value相等的值执行该分支，否则执行else；有两种语法表示结构。",
            "page": 44
          },
          {
            "term": "条件判断函数",
            "desc": "常用的条件控制函数有if()、ifnull()以及case函数，可根据条件表达式的值返回不同的值，能在MySQL客户机中直接调用。",
            "page": 46
          },
          {
            "term": "if()函数",
            "desc": "if(condition,v1,v2)中condition为条件表达式，其值为true时返回v1的值，否则返回v2的值。",
            "page": 46
          },
          {
            "term": "ifnull()函数",
            "desc": "ifnull(v1,v2)中如果v1的值为null则返回v2的值，如果v1不为null则返回v1的值。",
            "page": 47
          },
          {
            "term": "case函数",
            "desc": "有2种格式：表达式的值等于when语句中某个“值n”时返回“结果n”，与所有值都不相等时返回“其他值”。",
            "page": 47
          }
        ],
        "code": [
          "if condition then … [elseif condition then] … [else] … endif",
          "case value when value then … [when value then…] [else…] end case",
          "if(condition,v1,v2)",
          "ifnull(v1,v2)",
          "select studentno,case when 0.2*daily+0.8*final >=90 then '优秀' when 0.2*daily+0.8*final between 80 and 89 then '良好' else '不及格' end 总评等级 from score;"
        ],
        "tips": [
          "case语句有简单case和搜索case两种语法形式",
          "ifnull(v1,v2)在v1为null时返回v2"
        ]
      },
      {
        "id": "3.2",
        "title": "循环语句",
        "pageRange": "50-58",
        "summary": "本节介绍while、loop、repeat三种循环语句的语法与执行特点，以及leave和iterate两个控制语句的作用与区别，并提醒编写循环程序时注意变量值变化以防死循环。",
        "points": [
          {
            "term": "while循环",
            "desc": "执行时首先判断condition是否为真，是则执行循环体，否则退出循环；形式为 while condition do … end while;。",
            "page": 50
          },
          {
            "term": "loop循环",
            "desc": "没有内置的循环条件，可通过leave语句退出循环；形式为 loop … end loop。",
            "page": 52
          },
          {
            "term": "leave语句",
            "desc": "leave label 经常和begin…end或循环一起使用，label是自定义名字，用来退出被标注的循环语句。",
            "page": 52
          },
          {
            "term": "iterate语句",
            "desc": "iterate label 可出现在loop、repeat和while语句内，意为结束本次循环；leave是结束循环，iterate是结束本次循环。",
            "page": 54
          },
          {
            "term": "repeat循环",
            "desc": "先执行一次循环体，之后判断condition是否为真，为真则退出循环，否则继续执行；形式为 repeat … until condition end repeat。",
            "page": 56
          },
          {
            "term": "循环编程注意",
            "desc": "编写循环类程序时应特别注意函数参数和函数体内变量值的变化情况，稍有不慎就会出现数据错误、死循环等问题。",
            "page": 57
          }
        ],
        "code": [
          "while condition do … end while;",
          "loop … end loop",
          "leave label",
          "iterate label",
          "repeat … until condition end repeat",
          "declare sum int default 0;"
        ],
        "tips": [
          "leave结束整个循环，iterate只结束本次循环",
          "repeat先执行后判断，while先判断后执行"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch6-ppt-s01",
        "type": "single",
        "stem": "MySQL脚本文件保存时，后缀名一般为（ ）。",
        "options": [
          "A. .mysql",
          "B. .sql",
          "C. .txt",
          "D. .db"
        ],
        "answer": "B",
        "analysis": "解析：PPT第2页指出，MySQL的脚本文件保存时后缀名一般为.sql。故选B。",
        "page": 2
      },
      {
        "id": "ch6-ppt-s02",
        "type": "single",
        "stem": "MySQL中的用户会话变量一般以（ ）开头。",
        "options": [
          "A. @@",
          "B. @",
          "C. #",
          "D. $"
        ],
        "answer": "B",
        "analysis": "解析：PPT第6页说明，用户会话变量一般以一个“@”开头，系统会话变量以两个“@”开头。故选B。",
        "page": 6
      },
      {
        "id": "ch6-ppt-s03",
        "type": "single",
        "stem": "MySQL中，declare命令专门用于定义（ ）及其对应的数据类型。",
        "options": [
          "A. 用户会话变量",
          "B. 局部变量",
          "C. 系统变量",
          "D. 全局系统变量"
        ],
        "answer": "B",
        "analysis": "解析：PPT第11页指出，局部变量的定义与赋值中，declare命令专门用于定义局部变量及对应的数据类型。故选B。",
        "page": 11
      },
      {
        "id": "ch6-ppt-s04",
        "type": "single",
        "stem": "创建函数或存储过程时，用来重新定义命令结束标记的关键字是（ ）。",
        "options": [
          "A. delimiter",
          "B. declare",
          "C. set",
          "D. execute"
        ],
        "answer": "A",
        "analysis": "解析：PPT第16-17页指出，利用delimiter定界符命令可以重新定义一个语句执行的结束符，如//或$$。故选A。",
        "page": 17
      },
      {
        "id": "ch6-ppt-s05",
        "type": "single",
        "stem": "下列关键字中，不属于MySQL预处理语句的是（ ）。",
        "options": [
          "A. prepare",
          "B. execute",
          "C. deallocate",
          "D. call"
        ],
        "answer": "D",
        "analysis": "解析：PPT第21页指出，prepare、execute、deallocate统称为预处理语句；call是调用存储过程的语句。故选D。",
        "page": 21
      },
      {
        "id": "ch6-ppt-s06",
        "type": "single",
        "stem": "MySQL中，if(condition,v1,v2)函数在condition为true时返回（ ）。",
        "options": [
          "A. v1",
          "B. v2",
          "C. null",
          "D. 0"
        ],
        "answer": "A",
        "analysis": "解析：PPT第46页指出，if(condition,v1,v2)中condition为条件表达式，当值为true时函数返回v1的值，否则返回v2的值。故选A。",
        "page": 46
      },
      {
        "id": "ch6-ppt-s07",
        "type": "single",
        "stem": "MySQL循环语句中，用于“结束本次循环”的语句是（ ）。",
        "options": [
          "A. leave",
          "B. iterate",
          "C. break",
          "D. exit"
        ],
        "answer": "B",
        "analysis": "解析：PPT第54页指出，iterate语句意为结束本次循环，而leave语句是结束循环，二者区别在于此。故选B。",
        "page": 54
      },
      {
        "id": "ch6-ppt-b01",
        "type": "blank",
        "stem": "MySQL程序包含3种基本结构，即顺序结构、选择结构和____结构。",
        "answer": [
          "循环",
          "循环结构"
        ],
        "answerText": "循环",
        "analysis": "解析：PPT第2页指出，MySQL程序包含3种基本结构即顺序结构、选择结构和循环结构。",
        "page": 2
      },
      {
        "id": "ch6-ppt-b02",
        "type": "blank",
        "stem": "MySQL语言中的自定义变量由变量名、变量类型和____3要素构成。",
        "answer": [
          "变量值",
          "值"
        ],
        "answerText": "变量值",
        "analysis": "解析：PPT第5页指出，MySQL语言中的自定义变量由变量名、变量类型和变量值3要素构成。",
        "page": 5
      },
      {
        "id": "ch6-ppt-b03",
        "type": "blank",
        "stem": "MySQL中专门用来定义局部变量及对应数据类型的命令是____。",
        "answer": [
          "declare",
          "DECLARE",
          "define"
        ],
        "answerText": "declare",
        "analysis": "解析：PPT第11页指出，declare命令专门用于定义局部变量及对应的数据类型，如 declare myvar int default 100;。",
        "page": 11
      },
      {
        "id": "ch6-ppt-b04",
        "type": "blank",
        "stem": "预处理SQL语句的使用主要包含创建、执行和____三个步骤。",
        "answer": [
          "释放",
          "解除分配",
          "deallocate"
        ],
        "answerText": "释放",
        "analysis": "解析：PPT第24页指出，预处理SQL语句的使用主要包含创建、执行和释放预处理SQL语句3个步骤。",
        "page": 24
      },
      {
        "id": "ch6-ppt-b05",
        "type": "blank",
        "stem": "循环语句中，____语句用来结束本次循环，而leave语句用来结束整个循环。",
        "answer": [
          "iterate",
          "ITERATE"
        ],
        "answerText": "iterate",
        "analysis": "解析：PPT第54页指出，leave语句是结束循环，而iterate语句是结束本次循环。",
        "page": 54
      }
    ]
  },
  {
    "chapter": 7,
    "title": "存储过程和触发器",
    "goals": [
      "认识存储过程并掌握存储过程的创建、调用、修改和删除",
      "掌握利用游标处理结果集的方法",
      "认识触发器并掌握触发器的创建、使用和删除",
      "掌握事件的创建与管理"
    ],
    "ideology": "",
    "sections": [
      {
        "id": "1.1",
        "title": "认识存储过程",
        "pageRange": "6-10",
        "summary": "本节介绍存储过程的概念、作用和优势，给出create procedure创建语法，并说明存储过程通过call语句调用、执行需要execute权限以及call的语法格式。",
        "points": [
          {
            "term": "存储过程的作用",
            "desc": "利用存储过程可保证数据的完整性，提高执行重复任务的性能和数据一致性；主要应用于控制访问权限、创建审计追踪、分隔数据定义与操作语句。",
            "page": 6
          },
          {
            "term": "存储过程的优势",
            "desc": "提高处理复杂任务的能力、增强代码复用率和共享性、减少网络数据流量、在服务器注册加快运行速度、加强系统安全性。",
            "page": 7
          },
          {
            "term": "创建存储过程语法",
            "desc": "create procedure sp_name([proc_parameter[,...]]) [characteristic ...] routine_body；创建必须具有create routine权限。",
            "page": 8
          },
          {
            "term": "调用存储过程",
            "desc": "存储过程通过call语句调用，执行需要execute权限，其信息存储在information_schema的user_privileges表中。",
            "page": 9
          },
          {
            "term": "call语法",
            "desc": "call [dbname.]sp_name([parameter[,…]]); 语句中的参数个数必须总是等于存储过程的参数个数。",
            "page": 10
          }
        ],
        "code": [
          "create procedure sp_name([proc_parameter[,...]]) [characteristic ...] routine_body",
          "call [dbname.]sp_name([parameter[,…]]);"
        ],
        "tips": [
          "调用存储过程必须用call语句，执行需execute权限",
          "调用时参数个数必须等于存储过程的参数个数"
        ]
      },
      {
        "id": "1.2",
        "title": "存储过程的创建和管理",
        "pageRange": "11-25",
        "summary": "本节通过多个示例演示存储过程的创建与执行，包括in、out参数和嵌套调用，介绍查看存储过程状态与定义的方法，并重点讲解定义条件和处理程序的语法、错误类型及处理示例。",
        "points": [
          {
            "term": "创建与执行示例",
            "desc": "例1创建proc_stu()检索电话以131开头的学生信息并调用；例2创建avg_score(in c_no)统计课程平均成绩；例3创建select_score(in s_no,c_no)按学号和课程号查询。",
            "page": 11
          },
          {
            "term": "out参数",
            "desc": "例4创建stu_scores(in s_no, out count_num)，用 select count(*) into count_num 赋值，调用时传入会话变量@c_num。",
            "page": 14
          },
          {
            "term": "条件与复合语句",
            "desc": "例5创建do_query，用declare声明局部变量、if…then…elseif判断成绩高于85分的科目数并输出相应提示。",
            "page": 15
          },
          {
            "term": "嵌套调用",
            "desc": "例6创建do_insert()插入记录，再创建do_outer()在其中call do_insert()，说明存储过程可以调用另一个存储过程。",
            "page": 17
          },
          {
            "term": "查看存储过程",
            "desc": "可用 show procedure status like 'do_%';、show create procedure do_outer; 以及查询information_schema.routines表查看状态和定义。",
            "page": 18
          },
          {
            "term": "定义条件与处理程序",
            "desc": "MySQL通过declare定义条件和处理程序，事先定义可能遇到的问题及解决办法以避免异常停止；条件类型分sqlstate_value（长度5的字符串）和mysql_error_code（数值型代码）。",
            "page": 20
          },
          {
            "term": "定义处理程序",
            "desc": "declare handler_type handler for condition_value[,…] sp_statement; handler_type取continue（遇错继续执行）或exit（遇错立即退出）。",
            "page": 22
          },
          {
            "term": "错误捕获类型",
            "desc": "sqlwarning匹配所有以01开头的sqlstate代码，not found匹配以02开头的，sqlexception匹配其他非前两类的错误代码。",
            "page": 23
          }
        ],
        "code": [
          "create procedure proc_stu() reads sql data begin select studentno,sname,birthdate ,phone from student where phone like '%131%' order by studentno ; end//",
          "call proc_stu();",
          "create procedure avg_score(in c_no char(6)) begin select avg(final) from score where courseno=c_no ; end //",
          "create procedure stu_scores(in s_no char(11), out count_num int) reads SQL data begin select count(*) into count_num from score where studentno=s_no; end //",
          "call stu_scores('20125121109', @c_num );",
          "show procedure status like 'do_%';",
          "show create procedure do_outer;",
          "declare condition_name condition for condition_type;",
          "declare cannot_found condition for sqlstate '42S07';",
          "declare cannot_found condition for 1147;",
          "declare handler_type handler for condition_value[,…] sp_statement",
          "declare continue handler for sqlstate '23000' set @x2=1;"
        ],
        "tips": [
          "continue表示遇错不处理继续执行，exit表示遇错马上退出",
          "sqlstate_value为长度5的字符串错误代码，mysql_error_code为数值型错误代码",
          "自定义错误触发条件和处理程序可在触发器、函数及存储过程中使用"
        ]
      },
      {
        "id": "1.3",
        "title": "修改存储过程",
        "pageRange": "26-26",
        "summary": "本节介绍修改存储过程的两种方法：删除并重新创建，或用alter procedure语句修改某些参数，并给出alter的语法格式和示例。",
        "points": [
          {
            "term": "修改存储过程的方法",
            "desc": "有两种方法：删除并重新创建存储过程，或使用alter procedure语句修改存储过程的某些参数。",
            "page": 26
          },
          {
            "term": "alter procedure语法",
            "desc": "alter procedure sp_name [characteristic ...]，用于修改存储过程的定义。",
            "page": 26
          },
          {
            "term": "修改示例",
            "desc": "例9用 alter procedure do_insert modifies sql data sql security invoker 将读写权限改为modifies sql data并指明调用者可执行。",
            "page": 26
          }
        ],
        "code": [
          "alter procedure sp_name [characteristic ...]",
          "alter procedure do_insert modifies sql data sql security invoker;"
        ],
        "tips": []
      },
      {
        "id": "1.4",
        "title": "删除存储过程",
        "pageRange": "27-27",
        "summary": "本节介绍使用drop procedure语句删除存储过程，说明if exists子句可防止不存在的程序报错，并给出示例。",
        "points": [
          {
            "term": "删除语法",
            "desc": "使用drop procedure删除已存在的存储过程，语法为 drop procedure [if exists] sp_name。",
            "page": 27
          },
          {
            "term": "if exists子句",
            "desc": "if exists子句是MySQL的扩展，如果程序或函数不存在，它防止发生错误。",
            "page": 27
          },
          {
            "term": "删除示例",
            "desc": "删除存储过程do_update的示例为 MySQL>drop procedure if exists do_insert;。",
            "page": 27
          }
        ],
        "code": [
          "drop procedure [if exists] sp_name",
          "drop procedure if exists do_insert;"
        ],
        "tips": []
      },
      {
        "id": "1.5",
        "title": "存储过程与函数的比较",
        "pageRange": "28-30",
        "summary": "本节从共同点和不同之处两方面比较存储过程与函数，涉及重复使用、安全访问控制、返回值数量、结果集返回、调用方式和函数体限制等。",
        "points": [
          {
            "term": "共同特点",
            "desc": "存储过程或函数可以重复使用，减少开发人员工作量；可增强数据安全访问控制，设定只有某些用户才有执行权。",
            "page": 28
          },
          {
            "term": "返回值区别",
            "desc": "函数必须有且仅有一个返回值并须指定类型；存储过程可以没有、也可以有一个或多个返回值，需用out或inout参数定义。",
            "page": 28
          },
          {
            "term": "结果集区别",
            "desc": "函数体可用select…into为变量赋值但不能返回结果集；存储过程没有此限制，甚至可以返回多个结果集。",
            "page": 29
          },
          {
            "term": "调用区别",
            "desc": "函数可直接嵌入SQL语句或表达式、扩展标准SQL；存储过程一般需单独调用，调用时需使用call关键字。",
            "page": 29
          },
          {
            "term": "限制区别",
            "desc": "函数体限制较多，不能使用事务语句、不能使用预处理SQL；存储过程限制较少，基本所有SQL语句都可使用。",
            "page": 30
          }
        ],
        "code": [],
        "tips": [
          "函数必须有且仅有一个返回值，存储过程可有多个（用out/inout定义）",
          "函数可嵌入SQL，存储过程必须用call调用"
        ]
      },
      {
        "id": "2.1",
        "title": "声明游标",
        "pageRange": "31-34",
        "summary": "本节介绍游标是对select结果集进行访问的机制，说明游标由结果集和游标位置组成，概括声明、打开、提取、关闭四个使用步骤，并给出声明游标的语法。",
        "points": [
          {
            "term": "游标机制",
            "desc": "游标是对select语句结果集进行访问的机制，允许用户访问单独的数据行，而不是只能对整个结果集进行操作。",
            "page": 31
          },
          {
            "term": "游标的组成",
            "desc": "游标主要包括结果集和游标位置两部分，游标位置是指向结果集中某一行的指针。",
            "page": 32
          },
          {
            "term": "游标使用过程",
            "desc": "概括为声明游标、打开游标、从游标中提取数据以及关闭游标；在MySQL中游标只能在存储过程内部使用。",
            "page": 32
          },
          {
            "term": "声明游标语法",
            "desc": "声明游标使用declare语句：declare cursor_name cursor for select_statement;。",
            "page": 34
          }
        ],
        "code": [
          "declare cursor_name cursor for select_statement;",
          "declare teach_cursor corsor for select teacherno,tname from teacher;"
        ],
        "tips": [
          "游标只能在存储过程内部使用",
          "游标使用顺序为：声明→打开→提取→关闭"
        ]
      },
      {
        "id": "2.2",
        "title": "打开游标",
        "pageRange": "35-35",
        "summary": "本节说明使用游标之前必须首先打开游标，介绍open语句的语法并给出打开teach_cursor游标的示例。",
        "points": [
          {
            "term": "打开游标的要求",
            "desc": "打开游标需要使用open语句，使用游标之前必须首先打开游标。",
            "page": 35
          },
          {
            "term": "open语法",
            "desc": "打开游标的语法如下所示：open cursor_name;。",
            "page": 35
          },
          {
            "term": "打开游标示例",
            "desc": "打开前面创建的teach_cursor游标，使用语句 open teach_cursor;。",
            "page": 35
          }
        ],
        "code": [
          "open cursor_name;",
          "open teach_cursor;"
        ],
        "tips": [
          "使用游标前必须先打开游标"
        ]
      },
      {
        "id": "2.3",
        "title": "从游标中提取数据",
        "pageRange": "36-38",
        "summary": "本节介绍用fetch语句获取游标当前指针记录并传给变量列表，说明MySQL游标向前只读的特点、变量个数须与字段个数一致，以及用错误处理程序判断遍历结束的方法。",
        "points": [
          {
            "term": "fetch语句",
            "desc": "打开游标后可用fetch提取数据，其功能是获取游标当前指针的记录并传给指定变量列表，语法为 fetch cursor_name into var1[,var2,…];。",
            "page": 36
          },
          {
            "term": "游标只读向前",
            "desc": "MySQL的游标是向前只读的，只能顺序地从开始往后读取结果集，不能从后往前，也不能直接跳到中间的记录。",
            "page": 36
          },
          {
            "term": "变量个数要求",
            "desc": "变量名个数必须与声明游标时select结果集的字段个数一致；第一次fetch提取第一条，再次执行提取第二条。",
            "page": 37
          },
          {
            "term": "fetch与循环",
            "desc": "fetch每次仅提取一条记录，需要循环语句配合才能遍历整个结果集，一般用Loop和while比较清楚、代码简单。",
            "page": 37
          },
          {
            "term": "错误处理程序",
            "desc": "用 declare continue handler for not found …; 判断遍历结束；最后一条之后再fetch会产生ERROR 1329 (02000)，可自定义处理程序结束遍历。",
            "page": 38
          },
          {
            "term": "处理程序位置",
            "desc": "游标错误处理程序应该放在声明游标语句之后，游标通常结合错误处理程序一起使用以结束结果集访问。",
            "page": 38
          }
        ],
        "code": [
          "fetch cursor_name into var1[,var2,…];",
          "fetchLoop:Loop fetch teach_cursor into v_tno,v_tname; end Loop;",
          "declare continue handler for not found …;"
        ],
        "tips": [
          "fetch每次只提取一行，必须配合循环使用",
          "游标错误处理程序要放在声明游标语句之后"
        ]
      },
      {
        "id": "2.4",
        "title": "关闭游标",
        "pageRange": "39-41",
        "summary": "本节介绍用close语句关闭游标以释放结果集和资源，说明未明确关闭时游标会在begin-end块末尾自动关闭，并给出proc_cursor完整示例。",
        "points": [
          {
            "term": "关闭游标",
            "desc": "关闭游标使用close语句，语法为 close cursor_name; 目的在于释放结果集、通知服务器释放游标占用资源、节省内存。",
            "page": 39
          },
          {
            "term": "自动关闭",
            "desc": "游标如果没有被明确关闭，将在它被声明的begin-end语句块的末尾关闭；使用声明过的游标不需要再次声明。",
            "page": 39
          },
          {
            "term": "综合示例",
            "desc": "例10的proc_cursor用declare定义变量、游标与continue handler，再open游标、用loop+fetch遍历、leave退出并close游标。",
            "page": 40
          }
        ],
        "code": [
          "close cursor_name;",
          "close teach_cursor;",
          "declare continue handler for not found set @dovar=1;",
          "fetch_loop:loop fetch teach_cursor into v_tno,v_tname ; end LOOP fetch_Loop;",
          "close teach_cursor;"
        ],
        "tips": [
          "未明确关闭的游标会在begin-end块末尾自动关闭"
        ]
      },
      {
        "id": "3.1",
        "title": "认识触发器",
        "pageRange": "42-49",
        "summary": "本节介绍触发器是特殊的存储过程，说明其分类、优点和创建语法，解释触发事件与行级触发的特点及执行顺序，并讲解old、new关键字的使用规则。",
        "points": [
          {
            "term": "触发器的概念",
            "desc": "触发器是一种特殊的存储过程，基于一个表创建，当预定义事件发生时自动激活，可防止不正确修改，实施复杂完整性约束。",
            "page": 42
          },
          {
            "term": "触发器的分类",
            "desc": "触发器分为insert、update和delete三类，每类按执行先后又分before和after触发器，一个表最多可设置6种触发器。",
            "page": 43
          },
          {
            "term": "触发器的优点",
            "desc": "自动执行并在数据修改后立即激活；可通过相关表层叠更改；可强制比check约束更复杂的限制且能引用其他表中的列。",
            "page": 44
          },
          {
            "term": "创建触发器语法",
            "desc": "create trigger trigger_name trigger_time trigger_event on table_name for each row trigger_statement；table_name必须引用永久性表。",
            "page": 45
          },
          {
            "term": "触发事件",
            "desc": "trigger_event指明激活触发程序的语句类型：insert插入新行时、update更改某行时、delete从表中删除某行时激活。",
            "page": 46
          },
          {
            "term": "行级触发与执行顺序",
            "desc": "目前MySQL仅支持行级触发器，for each row表示每条受影响记录执行一次；顺序为before触发器、表数据修改、after触发器。",
            "page": 47
          },
          {
            "term": "old与new关键字",
            "desc": "MySQL创建与本表结构相同的old和new临时表，old存既有数据、new存将要更新的数据；insert只有new合法，delete只有old合法，update两者都可用。",
            "page": 48
          },
          {
            "term": "old只读",
            "desc": "old记录是只读的只能引用不能更改；在before触发程序中可用 set new.col_name = value 更改new记录的值。",
            "page": 49
          }
        ],
        "code": [
          "create trigger trigger_name trigger_time trigger_event on table_name for each row trigger_statement",
          "set new.col_name = value"
        ],
        "tips": [
          "insert只有new合法，delete只有old合法，update可同时使用new和old",
          "执行顺序是before触发器、表数据修改操作、after触发器",
          "触发器不能与temporary表或视图关联"
        ]
      },
      {
        "id": "3.2",
        "title": "触发器的创建和管理",
        "pageRange": "50-52",
        "summary": "本节通过同步更新课程号和删除教师备份两个示例演示触发器的创建与验证，并介绍用show triggers和information_schema.triggers表查看触发器的方法。",
        "points": [
          {
            "term": "更新触发示例",
            "desc": "例11创建cno_update为after update触发器，当course表课程号更改时，同步更新score表中的课程号。",
            "page": 50
          },
          {
            "term": "删除触发示例",
            "desc": "例12创建trig_teacher为after delete触发器，当teacher表中教师信息被删除时，将编号和姓名添加到de_teacher表。",
            "page": 51
          },
          {
            "term": "查看触发器",
            "desc": "用户可通过 show triggers; 查看触发器状态，也可查询information_schema数据库下的triggers表查看触发器信息。",
            "page": 52
          }
        ],
        "code": [
          "create trigger cno_update after update on course for each row begin update score set courseno=new.courseno where courseno=old.courseno; end $$",
          "create trigger trig_teacher after delete on teacher for each row insert into de_teacher(teacherno,tname) values(old.teacherno, old.tname);",
          "show triggers;",
          "select * from information_schema.triggers;"
        ],
        "tips": []
      },
      {
        "id": "3.3",
        "title": "使用触发器",
        "pageRange": "53-58",
        "summary": "本节介绍触发器在实现复杂完整性约束、冗余数据处理和级联操作中的应用，通过删除学生级联删除成绩、before与after触发顺序的示例说明用法，并列出使用触发器的多项注意事项。",
        "points": [
          {
            "term": "触发器的应用",
            "desc": "常用于实现数据完整性的复杂约束、数据管理中的冗余数据处理以及外键约束的级联操作，实现应用系统的自动维护。",
            "page": 53
          },
          {
            "term": "级联删除示例",
            "desc": "例13创建stu_delete为after delete触发器，当删除student表某学生记录时，同时删除score表中相应的成绩记录。",
            "page": 54
          },
          {
            "term": "触发顺序示例",
            "desc": "例14在de_teacher表上创建before insert和after insert两个触发器，通过向表中插入数据观察两个触发器的触发顺序。",
            "page": 55
          },
          {
            "term": "使用注意事项",
            "desc": "触发程序中的select不能返回结果集；同一个表不能创建两个相同触发时间、触发事件的触发程序；不能使用事务语句。",
            "page": 57
          },
          {
            "term": "性能与原子性",
            "desc": "批量更新数据时引入触发器会降低性能；MyISAM中触发器不能保证原子性，InnoDB支持事务可保证更新与触发程序原子性。",
            "page": 57
          },
          {
            "term": "外键与触发器",
            "desc": "InnoDB建议用级联选项维护外键；MyISAM可用触发器模拟外键约束；维护时应先维护子表再维护父表，否则可能出错。",
            "page": 58
          },
          {
            "term": "自增字段",
            "desc": "在before触发程序中，auto_increment字段的new值为0，不是实际插入新记录时自动生成的自增型字段值。",
            "page": 58
          }
        ],
        "code": [
          "create trigger stu_delete after delete on student for each row begin delete from score where studentno=old.studentno; end $$",
          "create trigger before_insert before insert on de_teacher for each row insert into bef_after set teacherno ='t11111', tname ='扶小林';",
          "create trigger after_insert after insert on de_teacher for each row insert into bef_after set teacherno ='t22222', tname ='秦小林';"
        ],
        "tips": [
          "同一个表不能创建两个相同触发时间、触发事件的触发程序",
          "before触发程序中auto_increment字段的new值为0",
          "触发程序不能对本表使用update语句，可用set命令替代以免死循环"
        ]
      },
      {
        "id": "3.4",
        "title": "删除触发器",
        "pageRange": "59-59",
        "summary": "本节介绍使用drop trigger语句删除数据库中已存在的触发器，给出语法格式和示例。",
        "points": [
          {
            "term": "删除触发器的概念",
            "desc": "删除触发器指删除数据库中已经存在的触发器，MySQL使用drop trigger语句来删除触发器。",
            "page": 59
          },
          {
            "term": "删除触发器语法",
            "desc": "基本形式为 drop trigger [schema_name.]trigger_name。",
            "page": 59
          },
          {
            "term": "删除示例",
            "desc": "删除触发器stu_score的代码为 mysql> drop trigger stu_score;。",
            "page": 59
          }
        ],
        "code": [
          "drop trigger [schema_name.]trigger_name",
          "drop trigger stu_score;"
        ],
        "tips": []
      },
      {
        "id": "4.1",
        "title": "认识事件",
        "pageRange": "60-63",
        "summary": "本节介绍事件（事件调度器）是定时任务机制及其相对操作系统计划任务的实时优势，讲解如何用系统变量开启和查看事件调度器。",
        "points": [
          {
            "term": "事件的概念",
            "desc": "事件又称事件调度器，是一种定时任务机制，可定时执行删除记录、数据汇总等任务，取代原先只能由操作系统计划任务执行的工作。",
            "page": 61
          },
          {
            "term": "事件的优势",
            "desc": "事件调度器可精确到每秒钟执行一个任务，比只能精确到每分钟的操作系统计划任务有实时优势，适合实时性要求高的应用。",
            "page": 61
          },
          {
            "term": "开启事件调度器",
            "desc": "用系统变量@@event_scheduler，true(1/on)为打开、false(0/off)为关闭；可用 set @@global.event_scheduler = true; 或在my.ini中加event_scheduler=1后重启。",
            "page": 62
          },
          {
            "term": "查看事件调度器",
            "desc": "可用 show variables like 'event_scheduler'; 或 select @@event_scheduler; 查看当前是否已开启。",
            "page": 63
          }
        ],
        "code": [
          "set @@global.event_scheduler = true;",
          "event_scheduler = 1",
          "show variables like 'event_scheduler';",
          "select @@event_scheduler;"
        ],
        "tips": [
          "创建事件前必须先打开事件调度器"
        ]
      },
      {
        "id": "4.2",
        "title": "创建事件",
        "pageRange": "64-69",
        "summary": "本节给出create event的语法格式，解释at和every两类时间调度及interval单位，通过示例演示创建某时刻发生、周期发生以及在事件中调用存储过程的方法。",
        "points": [
          {
            "term": "创建事件语法",
            "desc": "create event [if not exists] event_name on schedule schedule [on completion [not] preserve] [enable|disable|disable on slave] [comment'comment'] do sql_statement;。",
            "page": 64
          },
          {
            "term": "时间调度",
            "desc": "schedule中at timestamp [+interval interval]表示事件在某个时刻发生；every interval [starts ...] [ends ...]表示在指定区间内周期性发生。",
            "page": 65
          },
          {
            "term": "某时刻发生的事件",
            "desc": "例15创建direct1用 on schedule at now() 立即执行建表；例16创建direct2用 at current_timestamp + interval 5 second 在5秒后建表。",
            "page": 66
          },
          {
            "term": "周期发生的事件",
            "desc": "例17创建test1_insert用 on schedule every 1 second 每秒插入一条记录到test1表。",
            "page": 67
          },
          {
            "term": "starts与ends",
            "desc": "例18创建startweeks，用 every 1 week starts curdate()+interval 1 week ends '2021-08-31 12:00:00' 从下周起每周清空test1表。",
            "page": 68
          },
          {
            "term": "事件中调用存储过程",
            "desc": "例19创建事件stu_week，每周用 call teaching.proc_stu(); 调用存储过程查看学生情况。",
            "page": 69
          }
        ],
        "code": [
          "create event [if not exists] event_name on schedule schedule [on completion [not] preserve] [enable|disable|disable on slave] [comment'comment'] do sql_statement;",
          "create event direct1 on schedule at now() do create table test1(timeline timestamp);",
          "create event direct2 on schedule at current_timestamp +interval 5 second do create table test2(timeline timestamp);",
          "create event test1_insert on schedule every 1 second do insert into test1 values (current_timestamp);",
          "create event stu_week on schedule every 1 week do begin call teaching.proc_stu(); end $$"
        ],
        "tips": [
          "at用于某个时刻发生，every用于周期性发生",
          "事件体包含多条语句时需用begin…end复合结构"
        ]
      },
      {
        "id": "4.3",
        "title": "管理事件",
        "pageRange": "70-73",
        "summary": "本节介绍事件的查看、修改和删除：用show events和show create event查看，用alter event修改调度、名称、注释及启用状态，用drop event删除。",
        "points": [
          {
            "term": "查看事件",
            "desc": "用 show events [from schema_name] [like 'pattern'|where expr] 查看所有事件，用 show create event event_name; 查看创建信息。",
            "page": 70
          },
          {
            "term": "修改事件",
            "desc": "用alter event修改事件的定义和相关属性，可修改时间调度、重命名、注释以及enable/disable状态。",
            "page": 71
          },
          {
            "term": "修改示例",
            "desc": "例21对test1_insert执行disable临时关闭、enable开启、改变调度周期、rename to并加注释等操作。",
            "page": 72
          },
          {
            "term": "删除事件",
            "desc": "用 drop event [if exists][database name.] event_name 删除事件，如 drop event insert_test1;。",
            "page": 73
          }
        ],
        "code": [
          "show events [from schema_name] [like 'pattern'|where expr]",
          "show create event event_name;",
          "alter event event_name [on schedule schedule] [rename to new_event_name] [comment'comment'][enable|disable][do sql_statement]",
          "alter event test1_insert disable;",
          "alter event test1_insert enable;",
          "drop event [if exists][database name.] event_name",
          "drop event insert_test1;"
        ],
        "tips": [
          "alter event可临时关闭或开启事件、改名、修改调度与注释"
        ]
      }
    ],
    "questions": [
      {
        "id": "ch7-ppt-s01",
        "type": "single",
        "stem": "存储过程是一组完成特定功能的（ ）。",
        "options": [
          "A. MySQL语句的集合",
          "B. 数据表",
          "C. 视图",
          "D. 索引"
        ],
        "answer": "A",
        "analysis": "解析：PPT第2页指出，存储过程是一组完成特定功能的MySQL语句的集合，应用程序只需调用它就可以实现某个特定的任务。故选A。",
        "page": 2
      },
      {
        "id": "ch7-ppt-s02",
        "type": "single",
        "stem": "在MySQL中，调用存储过程使用的语句是（ ）。",
        "options": [
          "A. select",
          "B. call",
          "C. execute",
          "D. run"
        ],
        "answer": "B",
        "analysis": "解析：PPT第9页指出，存储过程是通过call语句来调用的，执行存储过程需要拥有execute权限。故选B。",
        "page": 9
      },
      {
        "id": "ch7-ppt-s03",
        "type": "single",
        "stem": "MySQL中的游标只能在（ ）内部使用。",
        "options": [
          "A. 视图",
          "B. 存储过程",
          "C. 触发器",
          "D. 事件"
        ],
        "answer": "B",
        "analysis": "解析：PPT第32页指出，在MySQL中游标只能在存储过程内部使用；游标一般通过存储过程来实现其操作。故选B。",
        "page": 32
      },
      {
        "id": "ch7-ppt-s04",
        "type": "single",
        "stem": "MySQL触发器的执行顺序是（ ）。",
        "options": [
          "A. after触发器→表数据修改→before触发器",
          "B. before触发器→表数据修改→after触发器",
          "C. 表数据修改→before触发器→after触发器",
          "D. before触发器→after触发器→表数据修改"
        ],
        "answer": "B",
        "analysis": "解析：PPT第47页指出，触发器执行的顺序是before触发器、表数据修改操作、after触发器。故选B。",
        "page": 47
      },
      {
        "id": "ch7-ppt-s05",
        "type": "single",
        "stem": "对于insert语句，在触发程序中可以使用的关键字是（ ）。",
        "options": [
          "A. old",
          "B. new",
          "C. old和new都可以",
          "D. old和new都不可以"
        ],
        "answer": "B",
        "analysis": "解析：PPT第49页指出，对于insert语句只有new是合法的；对于delete语句只有old才合法；update语句可以与new或old同时使用。故选B。",
        "page": 49
      },
      {
        "id": "ch7-ppt-s06",
        "type": "single",
        "stem": "要开启MySQL的事件调度器，可以使用系统变量（ ）。",
        "options": [
          "A. @@event_scheduler",
          "B. @@autocommit",
          "C. @@version",
          "D. @@datadir"
        ],
        "answer": "A",
        "analysis": "解析：PPT第62页指出，可以使用系统变量@@event_scheduler来打开事件调度器，true（或1或on）为打开。故选A。",
        "page": 62
      },
      {
        "id": "ch7-ppt-s07",
        "type": "single",
        "stem": "删除MySQL中已存在的事件，应使用（ ）语句。",
        "options": [
          "A. drop event",
          "B. drop trigger",
          "C. drop procedure",
          "D. delete event"
        ],
        "answer": "A",
        "analysis": "解析：PPT第73页指出，MySQL中用drop event删除事件，语法为 drop event [if exists][database name.] event_name。故选A。",
        "page": 73
      },
      {
        "id": "ch7-ppt-b01",
        "type": "blank",
        "stem": "存储过程是通过____语句来调用的。",
        "answer": [
          "call",
          "CALL"
        ],
        "answerText": "call",
        "analysis": "解析：PPT第9页指出，存储过程是通过call语句来调用的。",
        "page": 9
      },
      {
        "id": "ch7-ppt-b02",
        "type": "blank",
        "stem": "游标的使用过程可概括为声明游标、打开游标、从游标中提取数据和____游标。",
        "answer": [
          "关闭",
          "关闭游标"
        ],
        "answerText": "关闭",
        "analysis": "解析：PPT第32页指出，游标的使用过程概括为声明游标、打开游标、从游标中提取数据以及关闭游标。",
        "page": 32
      },
      {
        "id": "ch7-ppt-b03",
        "type": "blank",
        "stem": "触发器根据执行的先后顺序，可以分为before触发器和____触发器。",
        "answer": [
          "after",
          "AFTER",
          "arfter"
        ],
        "answerText": "after",
        "analysis": "解析：PPT第43页指出，触发器可以分为insert、update和delete等3类，每一类根据执行的先后顺序又可以分成before和after触发器。",
        "page": 43
      },
      {
        "id": "ch7-ppt-b04",
        "type": "blank",
        "stem": "MySQL中的事件（Event）又称事件____。",
        "answer": [
          "调度器",
          "调度程序",
          "Scheduler"
        ],
        "answerText": "调度器",
        "analysis": "解析：PPT第61页指出，MySQL中的事件又称事件调度器(Event Scheduler)，是一种定时任务机制。",
        "page": 61
      },
      {
        "id": "ch7-ppt-b05",
        "type": "blank",
        "stem": "MySQL使用____ trigger语句来删除数据库中已经存在的触发器。",
        "answer": [
          "drop",
          "DROP"
        ],
        "answerText": "drop",
        "analysis": "解析：PPT第59页指出，MySQL使用drop trigger语句来删除数据库中已经存在的触发器。",
        "page": 59
      }
    ]
  }
];
