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
            "desc": "mysqld install添加服务，sc delete删除服务，net start启动服务。",
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
      },
      {
        "id": "ch1-ppt-s09",
        "type": "single",
        "stem": "1996年MySQL发布的版本是？",
        "options": [
          "A. MySQL 1.0",
          "B. MySQL 5.0",
          "C. MySQL 5.7.1",
          "D. MySQL 8.0.0"
        ],
        "answer": "A",
        "analysis": "解析：PPT第4页指出1996年发布了能够在小范围内使用的MySQL 1.0版。",
        "page": 4
      },
      {
        "id": "ch1-ppt-s10",
        "type": "single",
        "stem": "2003年12月发布的MySQL版本是？",
        "options": [
          "A. MySQL 5.7.1",
          "B. MySQL 5.0",
          "C. MySQL 8.0.0",
          "D. MySQL 26.7.0"
        ],
        "answer": "B",
        "analysis": "解析：PPT第4页指出2003年12月MySQL 5.0版本发布。",
        "page": 4
      },
      {
        "id": "ch1-ppt-s11",
        "type": "single",
        "stem": "2009年4月甲骨文公司收购Sun公司后，MySQL数据库进入什么时代？",
        "options": [
          "A. Google时代",
          "B. IBM时代",
          "C. 微软时代",
          "D. Oracle时代"
        ],
        "answer": "D",
        "analysis": "解析：PPT第4页指出2009年4月甲骨文公司收购Sun公司，自此MySQL数据库进入Oracle时代。",
        "page": 4
      },
      {
        "id": "ch1-ppt-s12",
        "type": "single",
        "stem": "MySQL 5.7.1发布于？",
        "options": [
          "A. 2013年4月",
          "B. 2009年4月",
          "C. 2016年9月",
          "D. 2003年12月"
        ],
        "answer": "A",
        "analysis": "解析：PPT第4页指出2013年4月发布5.7.1版本。",
        "page": 4
      },
      {
        "id": "ch1-ppt-b07",
        "type": "blank",
        "stem": "2026年7月正式推出的MySQL版本是____，它是第一个采用新的日历版本控制模型的MySQL版本。",
        "answer": [
          "26.7.0",
          "MySQL 26.7.0",
          "mysql 26.7.0"
        ],
        "answerText": "26.7.0",
        "analysis": "解析：PPT第4页指出2026年7月正式推出MySQL 26.7.0，是第一个采用新的日历版本控制模型的MySQL版本。",
        "page": 4
      },
      {
        "id": "ch1-ppt-s13",
        "type": "single",
        "stem": "关于MySQL的跨平台性，下列说法正确的是？",
        "options": [
          "A. 只能在Windows上运行",
          "B. 可在Windows、UNIX、Linux和Mac OS等操作系统上运行",
          "C. 只能在Linux上运行",
          "D. 必须运行在专用小型机上"
        ],
        "answer": "B",
        "analysis": "解析：PPT第5页指出MySQL可在Windows、UNIX、Linux和Mac OS等操作系统上运行，体现其跨平台性。",
        "page": 5
      },
      {
        "id": "ch1-ppt-s14",
        "type": "single",
        "stem": "MySQL是C/S结构的实现，其服务器守护程序是？",
        "options": [
          "A. mysql",
          "B. mysqladmin",
          "C. mysqld",
          "D. mysqldump"
        ],
        "answer": "C",
        "analysis": "解析：PPT第5页指出MySQL由服务器守护程序mysqld和很多不同的客户程序和库组成；mysql是客户端工具。",
        "page": 5
      },
      {
        "id": "ch1-ppt-s15",
        "type": "single",
        "stem": "关于MySQL的价格优势，说法正确的是？",
        "options": [
          "A. 只有企业版免费",
          "B. 仅教育用户可免费使用",
          "C. 所有版本都必须付费",
          "D. 社区版免费使用，付费的附加功能价格也很便宜"
        ],
        "answer": "D",
        "analysis": "解析：PPT第5页指出MySQL的社区版本免费使用，即使是需要付费的附加功能，其价格也很便宜。",
        "page": 5
      },
      {
        "id": "ch1-ppt-s16",
        "type": "single",
        "stem": "MySQL数据库服务器在并发访问方面的特点是？",
        "options": [
          "A. 多用户多线程",
          "B. 只允许一个连接",
          "C. 不支持并发访问",
          "D. 单用户单线程"
        ],
        "answer": "A",
        "analysis": "解析：PPT第5页指出MySQL数据库是一个多用户、多线程SQL数据库服务器。",
        "page": 5
      },
      {
        "id": "ch1-ppt-b08",
        "type": "blank",
        "stem": "MySQL数据库是____的数据库，用户可以获取并修改其源代码。",
        "answer": [
          "开放源代码",
          "开源",
          "开放源码"
        ],
        "answerText": "开放源代码",
        "analysis": "解析：PPT第5页首句指出MySQL数据库是开放源代码的数据库，这是其使用优势之一。",
        "page": 5
      },
      {
        "id": "ch1-ppt-b09",
        "type": "blank",
        "stem": "MySQL能够快速、有效和安全地处理大量的数据，并达到快速、健壮和____的目标。",
        "answer": [
          "易用"
        ],
        "answerText": "易用",
        "analysis": "解析：PPT第5页指出MySQL能够快速、有效和安全的处理大量数据，并达到快速、健壮和易用的目标。",
        "page": 5
      },
      {
        "id": "ch1-ppt-s17",
        "type": "single",
        "stem": "MySQL使用C和C++编写并用多种编译器测试，其目的是保证源代码的？",
        "options": [
          "A. 可移植性",
          "B. 安全性",
          "C. 完整性",
          "D. 一致性"
        ],
        "answer": "A",
        "analysis": "解析：PPT第6页指出MySQL使用C和C++编写，并使用了多种编译器进行测试，保证源代码的可移植性。",
        "page": 6
      },
      {
        "id": "ch1-ppt-s18",
        "type": "single",
        "stem": "MySQL能够自动优化SQL查询算法，其直接效果是？",
        "options": [
          "A. 自动备份数据",
          "B. 提高信息查询速度",
          "C. 减少磁盘占用",
          "D. 增加最大连接数"
        ],
        "answer": "B",
        "analysis": "解析：PPT第6页指出MySQL能够自动优化SQL查询算法，有效地提高了信息查询速度。",
        "page": 6
      },
      {
        "id": "ch1-ppt-s19",
        "type": "single",
        "stem": "关于MySQL的应用方式，正确的是？",
        "options": [
          "A. 只能作为独立应用程序使用",
          "B. 只能作为库嵌入到其他软件中",
          "C. 既可单独应用于客户服务器网络环境，也可作为库嵌入其他软件",
          "D. 只能通过浏览器使用"
        ],
        "answer": "C",
        "analysis": "解析：PPT第6页指出MySQL能够作为一个单独的应用程序应用在客户端服务器网络环境中，也可以作为一个库嵌入到其他软件中。",
        "page": 6
      },
      {
        "id": "ch1-ppt-s20",
        "type": "single",
        "stem": "下列不属于MySQL提供的数据库连接技术的是？",
        "options": [
          "A. TCP/IP",
          "B. ODBC",
          "C. JDBC",
          "D. FTP"
        ],
        "answer": "D",
        "analysis": "解析：PPT第7页指出MySQL提供TCP/IP、ODBC和JDBC等多种数据库连接技术，未提到FTP。",
        "page": 7
      },
      {
        "id": "ch1-ppt-b10",
        "type": "blank",
        "stem": "MySQL支持多种存储____，并提供用于管理、检查、优化数据库操作的管理工具。",
        "answer": [
          "引擎"
        ],
        "answerText": "引擎",
        "analysis": "解析：PPT第7页指出MySQL支持多种存储引擎，提供用于管理、检查、优化数据库操作的管理工具。",
        "page": 7
      },
      {
        "id": "ch1-ppt-b11",
        "type": "blank",
        "stem": "MySQL具有大型数据库所有常用功能，可以处理拥有____条记录级的海量数据。",
        "answer": [
          "亿万",
          "亿"
        ],
        "answerText": "亿万",
        "analysis": "解析：PPT第7页指出MySQL具有大型数据库所有常用功能，可以处理拥有亿万条记录级的海量数据。",
        "page": 7
      },
      {
        "id": "ch1-ppt-s21",
        "type": "single",
        "stem": "MySQL的命名机制由几个数字和1个后缀组成？",
        "options": [
          "A. 2个",
          "B. 3个",
          "C. 4个",
          "D. 5个"
        ],
        "answer": "B",
        "analysis": "解析：PPT第8页指出MySQL的命名机制由3个数字和1个后缀组成，例如MySQL-8.0.39。",
        "page": 8
      },
      {
        "id": "ch1-ppt-s22",
        "type": "single",
        "stem": "MySQL-8.0.39中，第一个数字“8”表示？",
        "options": [
          "A. 补丁编号",
          "B. 发行级别",
          "C. 主版本号，描述文件格式",
          "D. 发行系列版本号"
        ],
        "answer": "C",
        "analysis": "解析：PPT第8页指出第1个数字“8”是主版本号，描述了文件格式，所有版本的发行版都有相同文件格式。",
        "page": 8
      },
      {
        "id": "ch1-ppt-s23",
        "type": "single",
        "stem": "MySQL-8.0.39中，第二个数字“0”表示？",
        "options": [
          "A. 修订次数",
          "B. 发行系列版本号",
          "C. 主版本号",
          "D. 发行级别"
        ],
        "answer": "D",
        "analysis": "解析：PPT第8页指出第2个数字“0”是发行级别，主版本号和发行级别组合在一起构成发行序列号。",
        "page": 8
      },
      {
        "id": "ch1-ppt-s24",
        "type": "single",
        "stem": "MySQL-8.0.39中，第三个数字“39”表示？",
        "options": [
          "A. 在此发行系列中的版本号",
          "B. 发行级别",
          "C. 编译次数",
          "D. 主版本号"
        ],
        "answer": "A",
        "analysis": "解析：PPT第8页指出第3个数字“39”是在此发行系列的版本号，随每次新分发版本递增。",
        "page": 8
      },
      {
        "id": "ch1-ppt-s25",
        "type": "single",
        "stem": "按发布顺序划分，MySQL 8.0属于？",
        "options": [
          "A. 预览版",
          "B. 内部测试版",
          "C. 普遍可用（GA）的稳定发布系列",
          "D. 已停止维护的版本"
        ],
        "answer": "C",
        "analysis": "解析：PPT第8页指出MySQL 8.0是目前最新开发的普遍常用（GA）的稳定发布系列，目前已经可以正常使用。",
        "page": 8
      },
      {
        "id": "ch1-ppt-b12",
        "type": "blank",
        "stem": "社区版（Community Edition）是自由下载而且是免费____的。",
        "answer": [
          "开源",
          "开放源代码",
          "开放源码"
        ],
        "answerText": "开源",
        "analysis": "解析：PPT第9页指出社区版是自由下载而且是免费开源的。",
        "page": 9
      },
      {
        "id": "ch1-ppt-b13",
        "type": "blank",
        "stem": "企业版需付费使用，官方提供____技术支持。",
        "answer": [
          "电话"
        ],
        "answerText": "电话",
        "analysis": "解析：PPT第9页指出企业版需付费使用，官方提供电话技术支持。",
        "page": 9
      },
      {
        "id": "ch1-ppt-b14",
        "type": "blank",
        "stem": "企业版支持事务处理，提供完整的提交、回滚、崩溃恢复和____锁定功能。",
        "answer": [
          "行级"
        ],
        "answerText": "行级",
        "analysis": "解析：PPT第9页指出企业版支持事务处理，提供完整的提交、回滚、崩溃恢复和行级锁定功能。",
        "page": 9
      },
      {
        "id": "ch1-ppt-s26",
        "type": "single",
        "stem": "MySQL 8.0将所有数据字典信息和系统表存储在哪个文件中？",
        "options": [
          "A. mysql.ibd",
          "B. ibdata1",
          "C. mysql.db",
          "D. slow.log"
        ],
        "answer": "A",
        "analysis": "解析：PPT第10页指出MySQL 8.0新增事务类型的数据字典，所有数据字典信息和系统表都存储在mysql.ibd文件中。",
        "page": 10
      },
      {
        "id": "ch1-ppt-s27",
        "type": "single",
        "stem": "MySQL 8.0的原子DDL把数据字典更新、存储引擎操作和什么组合到单个原子事务中？",
        "options": [
          "A. 慢查询日志",
          "B. 二进制日志写入",
          "C. 错误日志",
          "D. 审计日志"
        ],
        "answer": "B",
        "analysis": "解析：PPT第10页指出DDL语句将与DDL操作关联的数据字典更新、存储引擎操作和二进制日志写入组合到单个原子事务中。",
        "page": 10
      },
      {
        "id": "ch1-ppt-s28",
        "type": "single",
        "stem": "MySQL 8.0将自增主键的计数器持久化到？",
        "options": [
          "A. 数据字典",
          "B. 临时表",
          "C. 二进制日志",
          "D. 重做日志"
        ],
        "answer": "D",
        "analysis": "解析：PPT第10页指出MySQL 8.0将自增主键的计数器持久化到重做日志中，这是InnoDB增强功能之一。",
        "page": 10
      },
      {
        "id": "ch1-ppt-s29",
        "type": "single",
        "stem": "可用于禁用InnoDB死锁检测的动态变量是？",
        "options": [
          "A. innodb_deadlock_detect",
          "B. innodb_lock_wait_timeout",
          "C. autocommit",
          "D. max_connections"
        ],
        "answer": "A",
        "analysis": "解析：PPT第11页指出新的动态变量innodb_deadlock_detect可用于禁用死锁检测，禁用后可能更有效率。",
        "page": 11
      },
      {
        "id": "ch1-ppt-s30",
        "type": "single",
        "stem": "MySQL 8.0优化器索引的三种方式不包括？",
        "options": [
          "A. 隐藏索引",
          "B. 降序索引",
          "C. 函数索引",
          "D. 哈希索引"
        ],
        "answer": "D",
        "analysis": "解析：PPT第12页指出优化器索引主要包括隐藏索引（Invisible index）、降序索引和函数索引三种方式。",
        "page": 12
      },
      {
        "id": "ch1-ppt-b15",
        "type": "blank",
        "stem": "MySQL 8.0开始支持____（Role），管理员可以创建和删除它。",
        "answer": [
          "角色",
          "role",
          "Role"
        ],
        "answerText": "角色",
        "analysis": "解析：PPT第11页指出MySQL 8.0开始支持角色（Role），管理员可以创建和删除角色，属于安全和账户管理的新功能。",
        "page": 11
      },
      {
        "id": "ch1-ppt-b16",
        "type": "blank",
        "stem": "MySQL 8.0扩展了对____的支持，性能更好，能结合结构化数据与半结构化数据。",
        "answer": [
          "JSON",
          "json"
        ],
        "answerText": "JSON",
        "analysis": "解析：PPT第12页指出MySQL 8.0扩展了对JSON的支持，能结合MySQL原生的结构化数据和JSON的半结构化数据。",
        "page": 12
      },
      {
        "id": "ch1-ppt-b17",
        "type": "blank",
        "stem": "MySQL 8.0增加了公用表表达式、窗口函数、统计____、备份锁和配置持久化等功能。",
        "answer": [
          "直方图"
        ],
        "answerText": "直方图",
        "analysis": "解析：PPT第13页指出MySQL增加了公用表表达式、窗口函数、统计直方图、备份锁和配置持久化等查询优化功能。",
        "page": 13
      },
      {
        "id": "ch1-ppt-s31",
        "type": "single",
        "stem": "下列对“数据（Data）”的描述正确的是？",
        "options": [
          "A. 具有特定意义的数据集合",
          "B. 描述事物的符号记录",
          "C. 长期存储在计算机内的数据库",
          "D. 一种关系模型"
        ],
        "answer": "B",
        "analysis": "解析：PPT第15页指出数据（Data）是描述事物的符号记录，表现形式可以是文本、图表、图形、图像、音频、视频等。",
        "page": 15
      },
      {
        "id": "ch1-ppt-s32",
        "type": "single",
        "stem": "信息（Information）是指？",
        "options": [
          "A. 管理数据库的软件",
          "B. 描述事物的符号记录",
          "C. 具有特定意义的数据",
          "D. 磁盘上存储的文件"
        ],
        "answer": "C",
        "analysis": "解析：PPT第15页指出信息（Information）是具有特定意义的数据，是用一定的规则或算法筛选的数据集合。",
        "page": 15
      },
      {
        "id": "ch1-ppt-s33",
        "type": "single",
        "stem": "信息不仅具有感知、存储、加工、传播和再生等自然属性，同时也是具有重要价值的？",
        "options": [
          "A. 社会资源",
          "B. 硬件设备",
          "C. 软件产品",
          "D. 数据模型"
        ],
        "answer": "A",
        "analysis": "解析：PPT第15页指出信息具有感知、存储、加工、传播和再生等自然属性，同时也是具有重要价值的社会资源。",
        "page": 15
      },
      {
        "id": "ch1-ppt-s34",
        "type": "single",
        "stem": "教务管理数据库teaching中，用于存放学生成绩的表是？",
        "options": [
          "A. student",
          "B. score",
          "C. teaching",
          "D. teacher"
        ],
        "answer": "B",
        "analysis": "解析：PPT第16-17页以teaching数据库为例，学生信息表为student，学生成绩表为score。",
        "page": 17
      },
      {
        "id": "ch1-ppt-b18",
        "type": "blank",
        "stem": "数据库中的数据需要创建____来描述，如网络、层次、关系模型。",
        "answer": [
          "数据模型"
        ],
        "answerText": "数据模型",
        "analysis": "解析：PPT第16页指出数据库中的数据需要创建数据模型来描述，如网络、层次、关系模型。",
        "page": 16
      },
      {
        "id": "ch1-ppt-b19",
        "type": "blank",
        "stem": "数据库中的数据除了其本身外，还包含着数据库对数据的____描述，否则数据本身的意义不完整。",
        "answer": [
          "语义"
        ],
        "answerText": "语义",
        "analysis": "解析：PPT第17页指出数据库中的数据还包含着数据库对数据的语义描述，不经过语义描述，数据只表示一个常量值。",
        "page": 17
      },
      {
        "id": "ch1-ppt-s35",
        "type": "single",
        "stem": "SQL的全称是？",
        "options": [
          "A. System Query Language",
          "B. Simple Query Language",
          "C. Structured Query Language",
          "D. Standard Query Line"
        ],
        "answer": "C",
        "analysis": "解析：PPT第18页指出SQL（Structured Query Language）是用于管理数据的一种数据库查询和程序设计语言。",
        "page": 18
      },
      {
        "id": "ch1-ppt-s36",
        "type": "single",
        "stem": "SQL的“一体化”特点是指SQL集数据定义DDL、数据操纵DML和什么于一体？",
        "options": [
          "A. 事务控制TPL",
          "B. 指针控制CCL",
          "C. 数据查询DQL",
          "D. 数据控制DCL"
        ],
        "answer": "D",
        "analysis": "解析：PPT第19页指出一体化：SQL集数据定义DDL、数据操纵DML和数据控制DCL于一体，可以完成数据库中的全部工作。",
        "page": 19
      },
      {
        "id": "ch1-ppt-s37",
        "type": "single",
        "stem": "SQL“非过程化”的含义是？",
        "options": [
          "A. 只需提供操作要求，不必描述操作步骤，也不需要导航",
          "B. 必须编写循环和分支结构",
          "C. 必须指定使用的索引",
          "D. 必须按物理存储顺序访问数据"
        ],
        "answer": "A",
        "analysis": "解析：PPT第19页指出非过程化：只需要提供操作要求，不必描述操作步骤，也不需要导航。",
        "page": 19
      },
      {
        "id": "ch1-ppt-s38",
        "type": "single",
        "stem": "在ANSI标准中，SQL只包含了多少个英文单词？",
        "options": [
          "A. 64个",
          "B. 94个",
          "C. 104个",
          "D. 128个"
        ],
        "answer": "B",
        "analysis": "解析：PPT第19页指出语言简洁：在ANSI标准中只包含94个英文单词，核心功能只用6个动词。",
        "page": 19
      },
      {
        "id": "ch1-ppt-s39",
        "type": "single",
        "stem": "下列全部属于数据操作语言DML动词的一组是？",
        "options": [
          "A. commit、rollback",
          "B. create、alter、drop",
          "C. select、insert、update、delete",
          "D. grant、revoke"
        ],
        "answer": "C",
        "analysis": "解析：PPT第20页指出DML包括动词select、insert、update和delete，分别用于查询、插入、修改和删除数据行。",
        "page": 20
      },
      {
        "id": "ch1-ppt-b20",
        "type": "blank",
        "stem": "select是用得最多的动词，也称为数据____语言DQL。",
        "answer": [
          "查询"
        ],
        "answerText": "查询",
        "analysis": "解析：PPT第20页指出select是用得最多的动词，也称为数据查询语言DQL。",
        "page": 20
      },
      {
        "id": "ch1-ppt-b21",
        "type": "blank",
        "stem": "数据控制语言DCL包括grant语句和____等语句。",
        "answer": [
          "revoke",
          "REVOKE"
        ],
        "answerText": "revoke",
        "analysis": "解析：PPT第21页指出DCL包括grant语句和revoke等语句，grant获得权限许可，revoke撤销权限许可。",
        "page": 21
      },
      {
        "id": "ch1-ppt-s40",
        "type": "single",
        "stem": "DBMS对数据库进行统一的管理和控制，主要是为了保证数据的？",
        "options": [
          "A. 美观性",
          "B. 可移植性",
          "C. 兼容性",
          "D. 安全性和完整性"
        ],
        "answer": "D",
        "analysis": "解析：PPT第22页指出DBMS可以对数据库进行统一的管理和控制，以保证数据的安全性和完整性。",
        "page": 22
      },
      {
        "id": "ch1-ppt-s41",
        "type": "single",
        "stem": "负责创建、监控和维护整个数据库，一般由业务水平较高、资历较深的人员担任的是？",
        "options": [
          "A. 终端用户",
          "B. 系统分析师",
          "C. 数据库管理员（DBA）",
          "D. 应用程序设计师"
        ],
        "answer": "C",
        "analysis": "解析：PPT第22页指出数据库管理员（DBA）通过DBMS进行数据库的维护工作；第25页补充其负责创建、监控和维护整个数据库。",
        "page": 22
      },
      {
        "id": "ch1-ppt-s42",
        "type": "single",
        "stem": "DBMS中负责自行配置磁盘空间、将数据存入存储装置的是？",
        "options": [
          "A. 存储管理",
          "B. 查询处理",
          "C. 事务管理",
          "D. 恢复管理"
        ],
        "answer": "A",
        "analysis": "解析：PPT第23页指出存储管理（Storage Manager）会自行配置磁盘空间，将数据存入存储装置的数据库。",
        "page": 23
      },
      {
        "id": "ch1-ppt-s43",
        "type": "single",
        "stem": "DBMS中负责检查语法、优化查询命令处理的是？",
        "options": [
          "A. 存储管理",
          "B. 查询处理",
          "C. 事务管理",
          "D. 恢复管理"
        ],
        "answer": "B",
        "analysis": "解析：PPT第23页指出查询处理（Query Processor）负责处理用户下达的查询命令，可细分为检查语法、优化查询命令的模块。",
        "page": 23
      },
      {
        "id": "ch1-ppt-s44",
        "type": "single",
        "stem": "DBMS中主要负责日志管理、可将数据恢复到指定时间点的是？",
        "options": [
          "A. 存储管理",
          "B. 查询处理",
          "C. 事务管理",
          "D. 恢复管理"
        ],
        "answer": "D",
        "analysis": "解析：PPT第23页指出恢复管理（Recovery Manager）主要是日志管理，记录所有操作，可恢复数据到指定的时间点。",
        "page": 23
      },
      {
        "id": "ch1-ppt-b22",
        "type": "blank",
        "stem": "DBMS中负责处理数据库事务、并发控制和资源锁定的是____管理。",
        "answer": [
          "事务"
        ],
        "answerText": "事务",
        "analysis": "解析：PPT第23页指出事务管理（Transaction Manager）负责处理数据库的事务，保障事务操作需要及并发控制管理、资源锁定等。",
        "page": 23
      },
      {
        "id": "ch1-ppt-s45",
        "type": "single",
        "stem": "数据库系统（DBS）管理的对象是？",
        "options": [
          "A. 数据",
          "B. 程序",
          "C. 硬件",
          "D. 网络"
        ],
        "answer": "A",
        "analysis": "解析：PPT第24页指出数据库系统（DBS）通常由硬件、软件、数据库和用户组成，管理的对象是数据。",
        "page": 24
      },
      {
        "id": "ch1-ppt-s46",
        "type": "single",
        "stem": "按角色划分，下列不属于数据库系统用户的是？",
        "options": [
          "A. 终端用户",
          "B. 系统分析师",
          "C. 应用程序设计师",
          "D. 网络设备供应商"
        ],
        "answer": "D",
        "analysis": "解析：PPT第25页指出用户可分为终端用户、数据库设计者、系统分析师、应用程序设计师和数据库管理员等。",
        "page": 25
      },
      {
        "id": "ch1-ppt-s47",
        "type": "single",
        "stem": "数据库系统中的“软件”不包括下列哪一项？",
        "options": [
          "A. 开发工具",
          "B. 磁盘阵列",
          "C. 数据库管理系统",
          "D. 应用程序"
        ],
        "answer": "B",
        "analysis": "解析：PPT第26页指出软件包括数据库管理系统、应用程序和开发工具等；磁盘阵列属于硬件。",
        "page": 26
      },
      {
        "id": "ch1-ppt-s48",
        "type": "single",
        "stem": "下列属于数据库系统硬件的是？",
        "options": [
          "A. 应用程序",
          "B. 开发工具",
          "C. 磁盘阵列",
          "D. 数据库管理系统"
        ],
        "answer": "C",
        "analysis": "解析：PPT第26页指出硬件是安装数据库相关软件的硬件设备，包含主机（CPU、内存和网卡等）、磁盘阵列、光驱和备份装置等。",
        "page": 26
      },
      {
        "id": "ch1-ppt-s49",
        "type": "single",
        "stem": "数据库系统的体系结构主要包括？",
        "options": [
          "A. 集中式、客户-服务器式（C/S）、浏览器-服务器式（B/S）和分布式",
          "B. 星型、环型和总线型",
          "C. 单机、双机热备",
          "D. 前端、后端"
        ],
        "answer": "A",
        "analysis": "解析：PPT第27页指出数据库系统的体系结构主要包括集中式、C/S、B/S和分布式等。",
        "page": 27
      },
      {
        "id": "ch1-ppt-b23",
        "type": "blank",
        "stem": "B/S结构将客户机上的应用层分离出来集中到高性能计算机上，成为应用服务器，也称为____服务器。",
        "answer": [
          "Web",
          "web",
          "WEB"
        ],
        "answerText": "Web",
        "analysis": "解析：PPT第28页指出B/S结构把客户机上的应用层集中到一台高性能计算机上，成为应用服务器，也称为Web服务器。",
        "page": 28
      },
      {
        "id": "ch1-ppt-b24",
        "type": "blank",
        "stem": "分布式结构中，大多数处理任务由本地计算机访问____数据库完成局部应用。",
        "answer": [
          "本地"
        ],
        "answerText": "本地",
        "analysis": "解析：PPT第28页指出分布式数据库系统中大多数处理任务由本地计算机访问本地数据库完成局部应用，满足地理上分散组织的需求。",
        "page": 28
      },
      {
        "id": "ch1-ppt-s50",
        "type": "single",
        "stem": "概念模型是现实世界信息的抽象反映，它在信息世界中处于什么位置？",
        "options": [
          "A. 一种SQL语句",
          "B. 现实世界到计算机世界的中间层次",
          "C. 具体的数据库管理系统",
          "D. 一种存储引擎"
        ],
        "answer": "B",
        "analysis": "解析：PPT第30页指出概念模型是现实世界信息的抽象反映，不依赖于具体的计算机系统，是现实世界到计算机世界的一个中间层次。",
        "page": 30
      },
      {
        "id": "ch1-ppt-s51",
        "type": "single",
        "stem": "客观存在并可以相互区分的事物称为？",
        "options": [
          "A. 实体集",
          "B. 属性",
          "C. 实体",
          "D. 联系"
        ],
        "answer": "C",
        "analysis": "解析：PPT第30页指出实体（Entity）是客观存在并可以相互区分的事物。",
        "page": 30
      },
      {
        "id": "ch1-ppt-s52",
        "type": "single",
        "stem": "实体所具有的某些特性称为？",
        "options": [
          "A. 主键",
          "B. 联系",
          "C. 实体型",
          "D. 属性"
        ],
        "answer": "D",
        "analysis": "解析：PPT第30页指出属性（Attribute）是实体所具有的某些特性，通过属性可以对实体的特征进行描述。",
        "page": 30
      },
      {
        "id": "ch1-ppt-s53",
        "type": "single",
        "stem": "一个实体中能够唯一标识实体的属性或最小属性组合称为？",
        "options": [
          "A. 主键",
          "B. 候选键",
          "C. 外键",
          "D. 索引"
        ],
        "answer": "B",
        "analysis": "解析：PPT第31页指出能够唯一标识实体的属性或最小属性组合称为候选键；有多个候选键时可从中选一个作主键。",
        "page": 31
      },
      {
        "id": "ch1-ppt-s54",
        "type": "single",
        "stem": "若实体集A中每个实体在B中有M个实体（M≥2）与之联系，而B中每个实体在A中至多有一个实体与之联系，则A与B的联系是？",
        "options": [
          "A. 无法确定",
          "B. 一对一（1:1）",
          "C. 一对多（1:M）",
          "D. 多对多（M:N）"
        ],
        "answer": "C",
        "analysis": "解析：PPT第34页给出一对多联系（1:M）的定义，正向为1个A对应M个B，反向B中每个实体至多对应一个A。",
        "page": 34
      },
      {
        "id": "ch1-ppt-b25",
        "type": "blank",
        "stem": "现实世界的事物之间是有联系的，这些联系必然要在____世界中加以反映。",
        "answer": [
          "信息"
        ],
        "answerText": "信息",
        "analysis": "解析：PPT第32页指出联系（Relationship）：现实世界的事物之间是有联系的，这些联系必然要在信息世界中加以反映。",
        "page": 32
      },
      {
        "id": "ch1-ppt-b26",
        "type": "blank",
        "stem": "E-R概念模型中，信息由实体型、实体属性和实体间的联系三种概念____来表示。",
        "answer": [
          "单元"
        ],
        "answerText": "单元",
        "analysis": "解析：PPT第35页指出在E-R概念模型中，信息由实体型、实体属性和实体间的联系三种概念单元来表示。",
        "page": 35
      },
      {
        "id": "ch1-ppt-s55",
        "type": "single",
        "stem": "数据模型的三要素是？",
        "options": [
          "A. 数据结构、数据操作、完整性约束条件",
          "B. 实体、属性、联系",
          "C. 选择、投影、连接",
          "D. 表、视图、索引"
        ],
        "answer": "A",
        "analysis": "解析：PPT第37-38页指出数据模型的三要素为数据结构、数据操作和完整性约束条件。",
        "page": 37
      },
      {
        "id": "ch1-ppt-s56",
        "type": "single",
        "stem": "数据模型三要素中，用于描述数据库系统静态特性的是？",
        "options": [
          "A. 数据操作",
          "B. 完整性约束条件",
          "C. 数据字典",
          "D. 数据结构"
        ],
        "answer": "D",
        "analysis": "解析：PPT第37页指出数据结构是对象类型的集合，用于描述数据库系统的静态特性。",
        "page": 37
      },
      {
        "id": "ch1-ppt-s57",
        "type": "single",
        "stem": "数据操作主要指的是哪两类操作？",
        "options": [
          "A. 检索和更新",
          "B. 备份和恢复",
          "C. 加密和解密",
          "D. 导入和导出"
        ],
        "answer": "A",
        "analysis": "解析：PPT第37页指出数据操作描述数据库系统的动态特征，主要指检索和更新（插入、删除、修改）两类操作。",
        "page": 37
      },
      {
        "id": "ch1-ppt-s58",
        "type": "single",
        "stem": "完整性约束条件的实质是？",
        "options": [
          "A. 一种连接方式",
          "B. 一组完整性规则的集合",
          "C. 一种索引结构",
          "D. 一种存储引擎"
        ],
        "answer": "B",
        "analysis": "解析：PPT第38页指出数据完整性约束是一组完整性规则的集合，规定数据库状态及状态变化应满足的条件，保证数据的正确性、有效性和相容性。",
        "page": 38
      },
      {
        "id": "ch1-ppt-b27",
        "type": "blank",
        "stem": "在关系模型中，一般关系必须满足实体完整性和____完整性两个条件。",
        "answer": [
          "参照"
        ],
        "answerText": "参照",
        "analysis": "解析：PPT第38页指出在关系模型中，一般关系必须满足实体完整性和参照完整性两个条件。",
        "page": 38
      },
      {
        "id": "ch1-ppt-b28",
        "type": "blank",
        "stem": "常用的数据模型有层次模型、网状模型、关系模型和____模型。",
        "answer": [
          "面向对象"
        ],
        "answerText": "面向对象",
        "analysis": "解析：PPT第39页列出常用数据模型：层次模型、网状模型、关系模型和面向对象模型。",
        "page": 39
      },
      {
        "id": "ch1-ppt-s59",
        "type": "single",
        "stem": "从一个表中找出满足指定条件的记录行形成一个新表，这种运算称为？",
        "options": [
          "A. 连接",
          "B. 并",
          "C. 选择",
          "D. 投影"
        ],
        "answer": "C",
        "analysis": "解析：PPT第40页指出选择是从一个表中找出满足指定条件的记录行形成一个新表的操作，从行的角度运算。",
        "page": 40
      },
      {
        "id": "ch1-ppt-s60",
        "type": "single",
        "stem": "投影是从哪个角度进行的运算？",
        "options": [
          "A. 表",
          "B. 数据库",
          "C. 行",
          "D. 列"
        ],
        "answer": "D",
        "analysis": "解析：PPT第41页指出投影是从表中找出若干字段形成新表，是从列的角度进行的运算。",
        "page": 41
      },
      {
        "id": "ch1-ppt-s61",
        "type": "single",
        "stem": "将两个表中的行按一定的条件横向结合形成新表，这种运算称为？",
        "options": [
          "A. 选择",
          "B. 投影",
          "C. 连接",
          "D. 除"
        ],
        "answer": "C",
        "analysis": "解析：PPT第42页指出连接是将两个表中的行按一定条件横向结合，形成一个新的表。",
        "page": 42
      },
      {
        "id": "ch1-ppt-s62",
        "type": "single",
        "stem": "一个关系内部属性与属性之间的一种约束关系称为？",
        "options": [
          "A. 数据依赖",
          "B. 数据完整性",
          "C. 数据模型",
          "D. 数据字典"
        ],
        "answer": "A",
        "analysis": "解析：PPT第43页指出数据依赖是一个关系内部属性与属性之间的一种约束关系，通过属性间值的相等与否体现。",
        "page": 43
      },
      {
        "id": "ch1-ppt-s63",
        "type": "single",
        "stem": "第二范式（2NF）要求每一个非主属性都要怎样依赖于主码？",
        "options": [
          "A. 间接",
          "B. 完全函数",
          "C. 部分",
          "D. 传递"
        ],
        "answer": "B",
        "analysis": "解析：PPT第44页指出第二范式在第一范式基础上，要求每一个非主属性都要完全函数依赖于主码。",
        "page": 44
      },
      {
        "id": "ch1-ppt-b29",
        "type": "blank",
        "stem": "第三范式要求表中的每列都和码直接相关，而不是____相关。",
        "answer": [
          "间接"
        ],
        "answerText": "间接",
        "analysis": "解析：PPT第45页指出第三范式要求确保表中的每列都和码直接相关，而不是间接相关，非码列之间不相互依赖。",
        "page": 45
      },
      {
        "id": "ch1-ppt-b30",
        "type": "blank",
        "stem": "实体完整性是指关系的主关键字不能取____。",
        "answer": [
          "空值",
          "空",
          "NULL",
          "null"
        ],
        "answerText": "空值",
        "analysis": "解析：PPT第50页指出实体完整性是指关系的主关键字不能取“空值”，复合主键的所有主属性均不得取空值。",
        "page": 50
      },
      {
        "id": "ch1-ppt-s64",
        "type": "single",
        "stem": "MySQL数据库官方网站的下载地址是？",
        "options": [
          "A. http://www.mysql.cn",
          "B. http://www.oracle.com/cn",
          "C. http://www.apache.org",
          "D. http://dev.mysql.com/downloads"
        ],
        "answer": "D",
        "analysis": "解析：PPT第54页指出安装之前需要到MySQL数据库的官方网站(http://dev.mysql.com/downloads)上找到要安装的版本并下载。",
        "page": 54
      },
      {
        "id": "ch1-ppt-s65",
        "type": "single",
        "stem": "MSI方式安装MySQL时，默认安装且无法自行选择安装路径的目录是？",
        "options": [
          "A. C:\\mysql",
          "B. C:\\Program Files\\MySQL",
          "C. D:\\mysql",
          "D. 用户主目录"
        ],
        "answer": "B",
        "analysis": "解析：PPT第55页指出MSI安装会默认将MySQL服务安装在C:\\Program Files\\MySQL目录下并且无法自行选择安装路径，C盘不够用应选ZIP解压版。",
        "page": 55
      },
      {
        "id": "ch1-ppt-s66",
        "type": "single",
        "stem": "my.ini配置文件中，用于设置服务端字符集的配置项是？",
        "options": [
          "A. port=3306",
          "B. max_connections=200",
          "C. character-set-server=utf8mb4",
          "D. default-storage-engine=INNODB"
        ],
        "answer": "C",
        "analysis": "解析：PPT第59页my.ini示例中，character-set-server=utf8mb4用于设置服务端使用的字符集，port设置端口、max_connections设置最大连接数。",
        "page": 59
      },
      {
        "id": "ch1-ppt-s67",
        "type": "single",
        "stem": "在cmd中对MySQL数据库进行初始化，应执行的命令是？",
        "options": [
          "A. mysqld --initialize-insecure",
          "B. mysqld install",
          "C. net start mysql",
          "D. mysql -u root -p"
        ],
        "answer": "A",
        "analysis": "解析：PPT第68页指出在cmd面板输入mysqld --initialize-insecure对MySQL数据库进行初始化，执行后解压目录会多出data目录。",
        "page": 68
      },
      {
        "id": "ch1-ppt-s68",
        "type": "single",
        "stem": "PPT中用于修改root用户密码的语句是？",
        "options": [
          "A. CREATE USER 'root'@'localhost' IDENTIFIED BY '123456';",
          "B. GRANT ALL ON *.* TO 'root'@'localhost';",
          "C. DROP USER 'root'@'localhost';",
          "D. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';"
        ],
        "answer": "D",
        "analysis": "解析：PPT第73页指出修改密码输入ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';，其中123456就是密码。",
        "page": 73
      },
      {
        "id": "ch1-ppt-s69",
        "type": "single",
        "stem": "msi安装提供的安装类型中，仅安装MySQL服务器产品的是？",
        "options": [
          "A. Developer Default",
          "B. Server only",
          "C. Client only",
          "D. Full"
        ],
        "answer": "B",
        "analysis": "解析：PPT第79页指出Server only仅服务器，只安装MySQL服务器产品；Client only只安装客户端产品。",
        "page": 79
      },
      {
        "id": "ch1-ppt-b31",
        "type": "blank",
        "stem": "添加MySQL服务的命令是mysqld ____ mysql8.0.27，其中服务名可以自己取。",
        "answer": [
          "install"
        ],
        "answerText": "install",
        "analysis": "解析：PPT第69页指出输入mysqld install mysql8.0.27（服务名自己取）添加MySQL服务。",
        "page": 69
      },
      {
        "id": "ch1-ppt-b32",
        "type": "blank",
        "stem": "删除MySQL服务的命令是____ delete mysql8.0.27。",
        "answer": [
          "sc",
          "SC"
        ],
        "answerText": "sc",
        "analysis": "解析：PPT第69页给出删除服务命令：sc delete mysql8.0.27。",
        "page": 69
      },
      {
        "id": "ch1-ppt-b33",
        "type": "blank",
        "stem": "执行mysqld --initialize-insecure初始化后，MySQL解压目录中多出一个____目录，用于放置日志文件和数据库。",
        "answer": [
          "data",
          "DATA"
        ],
        "answerText": "data",
        "analysis": "解析：PPT第68页指出初始化后解压目录多出data目录，用于放置日志文件以及数据库，刚解压出来时没有该目录。",
        "page": 68
      },
      {
        "id": "ch1-ppt-b34",
        "type": "blank",
        "stem": "msi安装的Config Type提供development、server和____三个选项，用于选择MySQL的用途。",
        "answer": [
          "dedicate",
          "dedicated"
        ],
        "answerText": "dedicate",
        "analysis": "解析：PPT第83页指出Config Type提供development、server、dedicate三个选项，本机一般选development，占用系统资源少。",
        "page": 83
      },
      {
        "id": "ch1-ppt-s70",
        "type": "single",
        "stem": "MySQL工作流程的第①步是？",
        "options": [
          "A. 操作系统用户启动MySQL服务",
          "B. 读取配置文件中的参数",
          "C. 建立客户机与服务器的通信链路",
          "D. 服务器向客户机返回响应"
        ],
        "answer": "A",
        "analysis": "解析：PPT第86页指出工作流程第①步是操作系统用户启动MySQL服务。",
        "page": 86
      },
      {
        "id": "ch1-ppt-s71",
        "type": "single",
        "stem": "MySQL服务启动期间，首先将配置文件中的参数信息读入？",
        "options": [
          "A. 二进制日志",
          "B. 数据字典",
          "C. 服务器内存",
          "D. 磁盘文件"
        ],
        "answer": "C",
        "analysis": "解析：PPT第86页指出第②步：MySQL服务启动期间，首先将配置文件中的参数信息读入服务器内存。",
        "page": 86
      },
      {
        "id": "ch1-ppt-s72",
        "type": "single",
        "stem": "根据MySQL配置文件的参数信息或编译时的默认值生成的是？",
        "options": [
          "A. 存储引擎",
          "B. 数据字典",
          "C. 客户机进程",
          "D. 服务实例进程（Instance）"
        ],
        "answer": "D",
        "analysis": "解析：PPT第86页指出第③步：根据配置文件的参数信息或者编译MySQL时参数的默认值生成一个服务实例进程Instance。",
        "page": 86
      },
      {
        "id": "ch1-ppt-s73",
        "type": "single",
        "stem": "MySQL服务实例进程通过什么方式为多个客户机提供服务？",
        "options": [
          "A. 派生出多个线程",
          "B. 创建多个数据库",
          "C. 启动多个服务实例",
          "D. 复制多份配置文件"
        ],
        "answer": "A",
        "analysis": "解析：PPT第86页指出第④步：MySQL服务实例进程派生出多个线程为多个客户机提供服务。",
        "page": 86
      },
      {
        "id": "ch1-ppt-s74",
        "type": "single",
        "stem": "客户机与服务器建立通信链路后，用户在客户机输入的命令沿该链路传送给服务实例，这个过程称为？",
        "options": [
          "A. MySQL服务启动",
          "B. 客户机向MySQL服务器发送请求",
          "C. MySQL服务器向客户机返回响应",
          "D. MySQL会话结束"
        ],
        "answer": "B",
        "analysis": "解析：PPT第87页指出第⑤步建立“通信链路”，第⑥步命令沿链路传送给服务实例，称为客户机向MySQL服务器发送请求。",
        "page": 87
      },
      {
        "id": "ch1-ppt-b35",
        "type": "blank",
        "stem": "MySQL服务实例解析命令并选择执行计划运行，将执行结果沿通信链路返回给客户机，这个过程称为服务器向客户机返回____。",
        "answer": [
          "响应"
        ],
        "answerText": "响应",
        "analysis": "解析：PPT第88页指出第⑦步将执行结果沿通信链路返回给客户机，称为MySQL服务器向MySQL客户机返回响应。",
        "page": 88
      },
      {
        "id": "ch1-ppt-b36",
        "type": "blank",
        "stem": "数据库用户关闭MySQL客户机，通信链路被断开，该客户机对应的MySQL____结束。",
        "answer": [
          "会话",
          "session",
          "Session"
        ],
        "answerText": "会话",
        "analysis": "解析：PPT第88页指出数据库用户关闭MySQL客户机后通信链路断开，该客户机对应的MySQL会话结束。",
        "page": 88
      },
      {
        "id": "ch1-ppt-s75",
        "type": "single",
        "stem": "MySQL的服务器进程（SQL后台程序）是？",
        "options": [
          "A. mysqladmin",
          "B. mysqldump",
          "C. mysqld",
          "D. mysql"
        ],
        "answer": "C",
        "analysis": "解析：PPT第89页指出mysqld是SQL后台程序，即MySQL服务器进程，该程序必须运行之后客户端才能连接服务器访问数据库。",
        "page": 89
      },
      {
        "id": "ch1-ppt-s76",
        "type": "single",
        "stem": "UNIX中的MySQL分发版包括的服务器启动脚本是？",
        "options": [
          "A. mysqld",
          "B. mysqladmin",
          "C. mysqlshow",
          "D. mysql.server"
        ],
        "answer": "D",
        "analysis": "解析：PPT第90页指出mysql.server是服务器启动脚本，UNIX中的MySQL分发版包括mysql.server脚本，可调用mysqld_safe启动服务器。",
        "page": 90
      },
      {
        "id": "ch1-ppt-s77",
        "type": "single",
        "stem": "可以启动或停止系统上安装的多个服务器的脚本是？",
        "options": [
          "A. mysql_multi",
          "B. mysql.server",
          "C. mysqld_safe",
          "D. mysql_install_db"
        ],
        "answer": "A",
        "analysis": "解析：PPT第90页指出mysql_multi是服务器启动脚本，可以启动或停止系统上安装的多个服务器。",
        "page": 90
      },
      {
        "id": "ch1-ppt-s78",
        "type": "single",
        "stem": "交互式输入SQL语句或从文件以批处理模式执行SQL语句的命令行工具是？",
        "options": [
          "A. mysqlbinlog",
          "B. mysql",
          "C. mysqld",
          "D. mysqladmin"
        ],
        "answer": "B",
        "analysis": "解析：PPT第91页指出mysql是交互式输入SQL语句或从文件以批处理模式执行它们的命令行工具。",
        "page": 91
      },
      {
        "id": "ch1-ppt-s79",
        "type": "single",
        "stem": "可执行创建或删除数据库、重载授权表、将表刷新到硬盘等管理操作的客户程序是？",
        "options": [
          "A. mysqldump",
          "B. mysqlshow",
          "C. mysqladmin",
          "D. mysql"
        ],
        "answer": "C",
        "analysis": "解析：PPT第91页指出mysqladmin是执行管理操作的客户程序，例如创建或删除数据库、重载授权表、将表刷新到硬盘上等。",
        "page": 91
      },
      {
        "id": "ch1-ppt-b37",
        "type": "blank",
        "stem": "将MySQL数据库转储到一个文件（例如SQL语句或tab分隔符文本文件）的客户程序是____。",
        "answer": [
          "mysqldump",
          "MYSQLDUMP"
        ],
        "answerText": "mysqldump",
        "analysis": "解析：PPT第92页指出mysqldump是将MySQL数据库转储到一个文件（例如SQL语句或tab分隔符文本文件）的客户程序。",
        "page": 92
      },
      {
        "id": "ch1-ppt-b38",
        "type": "blank",
        "stem": "从二进制日志读取语句、可用来帮助系统从崩溃中恢复的工具是____。",
        "answer": [
          "mysqlbinlog",
          "MYSQLBINLOG"
        ],
        "answerText": "mysqlbinlog",
        "analysis": "解析：PPT第92页指出mysqlbinlog是从二进制日志读取语句的工具，二进制日志包含执行过的语句，可帮助系统从崩溃中恢复。",
        "page": 92
      },
      {
        "id": "ch1-ppt-b39",
        "type": "blank",
        "stem": "用默认权限创建MySQL授权表，通常只在系统首次安装MySQL时执行一次的是____。",
        "answer": [
          "mysql_install_db"
        ],
        "answerText": "mysql_install_db",
        "analysis": "解析：PPT第90页指出mysql_install_db该脚本用默认权限创建MySQL授权表，通常只是在系统上首次安装MySQL时执行一次。",
        "page": 90
      },
      {
        "id": "ch1-ppt-s80",
        "type": "single",
        "stem": "在cmd控制台中启动MySQL服务的命令是？",
        "options": [
          "A. net stop mysql80",
          "B. sc delete mysql80",
          "C. mysqld install",
          "D. net start mysql80"
        ],
        "answer": "D",
        "analysis": "解析：PPT第93页指出net start mysql80表示启动MySQL服务，net stop mysql80表示关闭MySQL服务。",
        "page": 93
      },
      {
        "id": "ch1-ppt-s81",
        "type": "single",
        "stem": "Windows“服务”窗口中MySQL服务的启动类型不包括？",
        "options": [
          "A. 自动",
          "B. 手动",
          "C. 已禁用",
          "D. 延迟启动"
        ],
        "answer": "D",
        "analysis": "解析：PPT第94页指出启动类型下拉列表框中可以选择“自动”、“手动”和“已禁用”三个选项。",
        "page": 94
      },
      {
        "id": "ch1-ppt-s82",
        "type": "single",
        "stem": "Windows操作系统下登录MySQL数据库的方式有几种？",
        "options": [
          "A. 一种",
          "B. 两种",
          "C. 三种",
          "D. 四种"
        ],
        "answer": "B",
        "analysis": "解析：PPT第95页指出Windows下有两种登录方式：在DOS窗口中以命令行方式登录，以及在MySQL客户端直接登录。",
        "page": 95
      },
      {
        "id": "ch1-ppt-s83",
        "type": "single",
        "stem": "登录命令mysql -u root -p中，-p表示？",
        "options": [
          "A. 数据库名",
          "B. 端口号",
          "C. 用户密码",
          "D. 主机名"
        ],
        "answer": "C",
        "analysis": "解析：PPT第96页指出-u后面紧跟着数据库的用户名，-p表示用户密码，按Enter键输入密码，输入的密码用星号替代。",
        "page": 96
      },
      {
        "id": "ch1-ppt-s84",
        "type": "single",
        "stem": "MySQL控制台下的命令以什么符号结束？",
        "options": [
          "A. 分号(;)或\\g",
          "B. 冒号(:)",
          "C. 逗号(,)",
          "D. 句号(.)"
        ],
        "answer": "A",
        "analysis": "解析：PPT第98页指出Commands end with ; or \\g，说明MySQL控制台下的命令以分号(;)或“\\g”结束，遇到结束符就开始执行命令。",
        "page": 98
      },
      {
        "id": "ch1-ppt-b40",
        "type": "blank",
        "stem": "Your MySQL connection id表示MySQL数据库的连接____，新安装首次登录显示1。",
        "answer": [
          "次数"
        ],
        "answerText": "次数",
        "analysis": "解析：PPT第98页指出id表示MySQL数据库的连接次数，如果数据库是新安装的且第一次登录则显示1。",
        "page": 98
      },
      {
        "id": "ch1-ppt-b41",
        "type": "blank",
        "stem": "登录MySQL后，输入help;或____可以查看帮助信息。",
        "answer": [
          "\\h",
          "h"
        ],
        "answerText": "\\h",
        "analysis": "解析：PPT第98页指出Type 'help;' or '\\h' for help，表示输入“help;”或者\\h可以看到帮助信息。",
        "page": 98
      },
      {
        "id": "ch1-ppt-b42",
        "type": "blank",
        "stem": "在MySQL控制台中查看系统当前时间，可执行select ____();语句。",
        "answer": [
          "now",
          "NOW"
        ],
        "answerText": "now",
        "analysis": "解析：PPT第101页指出如果要查看系统当前时间，可以直接在控制台中输入并执行select now();语句。",
        "page": 101
      },
      {
        "id": "ch1-ppt-s85",
        "type": "single",
        "stem": "下列不属于常用MySQL图形管理工具的是？",
        "options": [
          "A. MySQL Workbench",
          "B. phpMyAdmin",
          "C. Navicat",
          "D. mysqld"
        ],
        "answer": "D",
        "analysis": "解析：PPT第102页指出MySQL的图形管理工具常用的有MySQL Workbench、phpMyAdmin和Navicat等；mysqld是服务器进程。",
        "page": 102
      },
      {
        "id": "ch1-ppt-s86",
        "type": "single",
        "stem": "MySQL Workbench为哪些人员提供可视化设计、模型建立以及数据库管理功能？",
        "options": [
          "A. 数据库管理员、程序开发者和系统规划师",
          "B. 仅终端用户",
          "C. 仅网络管理员",
          "D. 仅销售人员"
        ],
        "answer": "A",
        "analysis": "解析：PPT第102页指出MySQL Workbench为数据库管理员、程序开发者和系统规划师提供可视化设计、模型建立以及数据库管理功能。",
        "page": 102
      },
      {
        "id": "ch1-ppt-s87",
        "type": "single",
        "stem": "MySQL Workbench包含的功能是？",
        "options": [
          "A. 仅监控CPU使用率",
          "B. 创建复杂E-R数据模型、正向和逆向数据库工程以及文档任务管理",
          "C. 仅执行查询语句",
          "D. 仅备份数据库"
        ],
        "answer": "B",
        "analysis": "解析：PPT第102页指出MySQL Workbench包含创建复杂的数据建模E-R模型、正向和逆向数据库工程，也可用于文档任务管理。",
        "page": 102
      },
      {
        "id": "ch1-ppt-s88",
        "type": "single",
        "stem": "在MySQL Workbench中创建连接，应使用的主菜单命令是？",
        "options": [
          "A. Edit|Preferences",
          "B. Query|Execute",
          "C. Database|Manage Connections",
          "D. File|New Model"
        ],
        "answer": "C",
        "analysis": "解析：PPT第110页指出单击主菜单Database|Manage Connections命令，弹出Manage Server Connections对话框，输入连接名称并Test Connection测试。",
        "page": 110
      },
      {
        "id": "ch1-ppt-b43",
        "type": "blank",
        "stem": "MySQL Workbench可独立于MySQL软件集合安装，PPT中的独立安装版本为mysql-workbench-community-8.0.22-____。",
        "answer": [
          "winx64",
          "winx64版"
        ],
        "answerText": "winx64",
        "analysis": "解析：PPT第103页指出MySQL Workbench除了与MySQL 8.0软件集合安装外还可独立安装，版本为mysql-workbench-community-8.0.22-winx64。",
        "page": 103
      },
      {
        "id": "ch1-ppt-b44",
        "type": "blank",
        "stem": "在MySQL Workbench中连接成功后，可通过图形界面执行SQL实现数据库、表和数据添加、删除、修改等操作，这种方式称为____操作。",
        "answer": [
          "可视化"
        ],
        "answerText": "可视化",
        "analysis": "解析：PPT第110页指出连接后可通过图形界面执行SQL实现数据库、表和数据添加、删除、修改等操作，即数据库的可视化操作。",
        "page": 110
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
            "desc": "在my.ini的[mysql]键值下加default-character-set=utf8mb4。",
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
          },
          {
            "term": "位运算过程",
            "desc": "先将操作数变成二进制数进行运算，再将结果变回十进制数。",
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
            "desc": "date_format()和time_format()用于格式化日期和时间值。",
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
          },
          {
            "term": "分组统计函数",
            "desc": "聚合函数也叫分组统计函数，常用于对聚合在组内的数据表行进行计算。",
            "page": 75
          },
          {
            "term": "聚合运算",
            "desc": "利用聚合函数可以满足表中记录的聚合运算。",
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
      },
      {
        "id": "ch2-ppt-s09",
        "type": "single",
        "stem": "字符(Character)是指？",
        "options": [
          "A. 人类语言中最小的表义符号",
          "B. 数据表中的一列",
          "C. 一种存储引擎",
          "D. 数据库中的一条记录"
        ],
        "answer": "A",
        "analysis": "解析：PPT第5页指出字符(Character)是指人类语言中最小的表义符号，MySQL8.0支持41种字符集和272个校对原则。",
        "page": 5
      },
      {
        "id": "ch2-ppt-s10",
        "type": "single",
        "stem": "字符序是指？",
        "options": [
          "A. 字符在磁盘上的存储位置",
          "B. 同一字符集内字符之间的比较规则",
          "C. 字符占用的字节数",
          "D. 服务器默认使用的字符集"
        ],
        "answer": "B",
        "analysis": "解析：PPT第5页指出字符序是指同一字符集内字符之间的比较规则，字符集只有确定字符序后才能定义字符是否等价及大小关系。",
        "page": 5
      },
      {
        "id": "ch2-ppt-s11",
        "type": "single",
        "stem": "MySQL的字符集支持细化到的4个层次中，不包括下列哪一项？",
        "options": [
          "A. 服务器(Server)",
          "B. 数据库(DataBase)",
          "C. 数据表(Table)",
          "D. 存储引擎(Storage Engine)"
        ],
        "answer": "D",
        "analysis": "解析：PPT第5页指出字符集支持细化到服务器、数据库、数据表和连接层4个层次，没有存储引擎层。",
        "page": 5
      },
      {
        "id": "ch2-ppt-s12",
        "type": "single",
        "stem": "utf8mb4 中的“mb4”表示？",
        "options": [
          "A. 最多占用4个字节",
          "B. 最少占用4个字节",
          "C. 支持4种字符集",
          "D. 4倍压缩存储"
        ],
        "answer": "A",
        "analysis": "解析：PPT第9页指出mb4表示most bytes 4，即最多占用4个字节，utf8mb4是MySQL8.0的默认字符集编码，默认字符序为utf8mb4_0900_ai_ci。",
        "page": 9
      },
      {
        "id": "ch2-ppt-s13",
        "type": "single",
        "stem": "在UTF-8编码中，一个中文汉字通常占用几个字节？",
        "options": [
          "A. 1个字节",
          "B. 2个字节",
          "C. 3个字节",
          "D. 4个字节"
        ],
        "answer": "C",
        "analysis": "解析：PPT第10页指出UTF-8对英文使用8位（1个字节）、中文使用24位（3个字节）来编码，属于变长编码。",
        "page": 10
      },
      {
        "id": "ch2-ppt-b07",
        "type": "blank",
        "stem": "GBK 不论中、英文字符均使用____字节来表示，为了区分中文，将其最高位都设定成1。",
        "answer": [
          "双",
          "2",
          "两"
        ],
        "answerText": "双",
        "analysis": "解析：PPT第11页指出GBK在GB2312基础上扩容兼容，用双字节表示中英文字符。",
        "page": 11
      },
      {
        "id": "ch2-ppt-b08",
        "type": "blank",
        "stem": "GBK、GB2312、latin1 等字符集与 UTF-8 之间都必须通过____编码才能相互转换。",
        "answer": [
          "Unicode",
          "unicode",
          "UNICODE"
        ],
        "answerText": "Unicode",
        "analysis": "解析：PPT第11页指出GBK、GB2312、latin1等与UTF-8之间都必须通过Unicode编码才能相互转换。",
        "page": 11
      },
      {
        "id": "ch2-ppt-s14",
        "type": "single",
        "stem": "通过修改 my.ini 更改默认字符集时，应在哪个键值下添加 default-character-set=utf8mb4？",
        "options": [
          "A. [mysqld]",
          "B. [mysql]",
          "C. [client]",
          "D. [server]"
        ],
        "answer": "B",
        "analysis": "解析：PPT第12页指出查找my.ini文件中的[mysql]键值，在下面加上一行default-character-set=utf8mb4。",
        "page": 12
      },
      {
        "id": "ch2-ppt-s15",
        "type": "single",
        "stem": "使用 set 命令修改字符集的特点是？",
        "options": [
          "A. 永久生效，重启后仍保留",
          "B. 只是临时更改，服务器重启后恢复默认设置",
          "C. 只能修改数据库级字符集",
          "D. 必须重启服务后才生效"
        ],
        "answer": "B",
        "analysis": "解析：PPT第13页指出用命令行方式修改只是临时更改，当服务器重启后又会恢复默认设置。",
        "page": 13
      },
      {
        "id": "ch2-ppt-b09",
        "type": "blank",
        "stem": "修改 my.ini 配置文件后，需要____MySQL服务，再用 show variables like 'character%' 查看编码是否已改为utf8mb4。",
        "answer": [
          "重启",
          "重新启动",
          "restart"
        ],
        "answerText": "重启",
        "analysis": "解析：PPT第12页指出修改完后要重启MySQL的服务，再用show variables like 'character%'查看，发现数据库编码均已改成utf8mb4。",
        "page": 12
      },
      {
        "id": "ch2-ppt-b10",
        "type": "blank",
        "stem": "若表的默认字符集已是utf8mb4且通过UTF-8发送查询仍出现乱码，问题通常出在____层。",
        "answer": [
          "connection",
          "连接",
          "连接层"
        ],
        "answerText": "connection",
        "analysis": "解析：PPT第14页指出这种情况下问题就出在connection连接层上，可用set names('utf8mb4')解决。",
        "page": 14
      },
      {
        "id": "ch2-ppt-b11",
        "type": "blank",
        "stem": "set names('utf8mb4') 与分别设置 character_set_client、character_set_results 和 character_set____ 三条语句等价。",
        "answer": [
          "connection"
        ],
        "answerText": "connection",
        "analysis": "解析：PPT第14页指出set names('utf8mb4')等价于设置client、results、connection三个字符集变量。",
        "page": 14
      },
      {
        "id": "ch2-ppt-s16",
        "type": "single",
        "stem": "character_set_server 和 collation_server 这两个变量表示的是？",
        "options": [
          "A. 客户端来源数据的字符集",
          "B. 服务器的字符集，即默认的内部操作字符集",
          "C. 查询结果字符集",
          "D. 当前选中数据库的默认字符集"
        ],
        "answer": "B",
        "analysis": "解析：PPT第15页指出character_set_server和collation_server是服务器的字符集，默认的内部操作字符集。",
        "page": 15
      },
      {
        "id": "ch2-ppt-s17",
        "type": "single",
        "stem": "character_set_client 用来决定什么？",
        "options": [
          "A. 查询结果中文字的编码",
          "B. MySQL怎么解释客户端发到服务器的SQL命令文字",
          "C. 表中字段的存储编码",
          "D. 系统元数据使用的字符集"
        ],
        "answer": "B",
        "analysis": "解析：PPT第15页指出character_set_client是客户端来源数据使用的字符集，用来决定MySQL怎么解释客户端发到服务器的SQL命令文字。",
        "page": 15
      },
      {
        "id": "ch2-ppt-s18",
        "type": "single",
        "stem": "表示连接层字符集的变量是？",
        "options": [
          "A. character_set_client",
          "B. character_set_connection",
          "C. character_set_results",
          "D. character_set_system"
        ],
        "answer": "B",
        "analysis": "解析：PPT第16页指出character_set_connection和collation_connection是连接层字符集，用来决定MySQL怎么处理客户端发来的SQL命令。",
        "page": 16
      },
      {
        "id": "ch2-ppt-s19",
        "type": "single",
        "stem": "当SQL有结果返回时，决定发给客户端的结果中文字编码的变量是？",
        "options": [
          "A. character_set_results",
          "B. character_set_database",
          "C. character_set_server",
          "D. character_set_system"
        ],
        "answer": "A",
        "analysis": "解析：PPT第16页指出character_set_results是查询结果字符集，用来决定发给客户端的结果中文字的编码。",
        "page": 16
      },
      {
        "id": "ch2-ppt-b12",
        "type": "blank",
        "stem": "character_set_system 表示系统元数据的字符集，其值为____，数据库、表和列的定义都使用这个字符集。",
        "answer": [
          "utf8mb4",
          "UTF8MB4"
        ],
        "answerText": "utf8mb4",
        "analysis": "解析：PPT第16页指出character_set_system是系统元数据的字符集utf8mb4。",
        "page": 16
      },
      {
        "id": "ch2-ppt-b13",
        "type": "blank",
        "stem": "character_set_database 和 collation_database 表示当前选中____的默认字符集。",
        "answer": [
          "数据库",
          "database",
          "DB"
        ],
        "answerText": "数据库",
        "analysis": "解析：PPT第16页指出这两个变量表示当前选中数据库的默认字符集，create database命令有两个参数可设置数据库的字符集和比较规则。",
        "page": 16
      },
      {
        "id": "ch2-ppt-b14",
        "type": "blank",
        "stem": "列的比较规则比 collation____ 高，即MySQL会把SQL中的文字直接量转成列的字符集后再与列的文字数据比较。",
        "answer": [
          "connection"
        ],
        "answerText": "connection",
        "analysis": "解析：PPT第17页指出表的字符集为列提供默认值，列的字符集决定本列文字数据的存储编码，且列的比较规则比collation_connection高。",
        "page": 17
      },
      {
        "id": "ch2-ppt-b15",
        "type": "blank",
        "stem": "按照字符集的依存关系，数据库的字符集决定____的字符集，表的字符集决定字段的字符集。",
        "answer": [
          "表",
          "数据表",
          "table"
        ],
        "answerText": "表",
        "analysis": "解析：PPT第18页指出服务器级字符集决定数据库、客户端、连接层和结果集，数据库的字符集决定表的字符集，表的字符集决定字段的字符集。",
        "page": 18
      },
      {
        "id": "ch2-ppt-s20",
        "type": "single",
        "stem": "MySQL标识符的通用命名规则是？",
        "options": [
          "A. 必须以数字开头",
          "B. 由以字母或下划线开头的字母、数字或下划线(_)序列组成",
          "C. 可以包含空格和汉字标点",
          "D. 长度不能超过8个字符"
        ],
        "answer": "B",
        "analysis": "解析：PPT第19页指出标识符用来命名数据库、表、列、变量等对象，其通用命名规则是由以字母或下划线开头的字母、数字或下划线序列组成。",
        "page": 19
      },
      {
        "id": "ch2-ppt-s21",
        "type": "single",
        "stem": "MySQL标识符是否区分大小写取决于什么？",
        "options": [
          "A. 所使用的字符集",
          "B. 所使用的存储引擎",
          "C. 当前的操作系统",
          "D. MySQL的版本号"
        ],
        "answer": "C",
        "analysis": "解析：PPT第19页指出标识符是否区分大小写取决于当前的操作系统，Windows下不敏感，大多数linux/unix系统下是敏感的。",
        "page": 19
      },
      {
        "id": "ch2-ppt-s22",
        "type": "single",
        "stem": "关于MySQL的关键字，下列说法正确的是？",
        "options": [
          "A. MySQL5.7约有600个关键词，8.0在此基础上增加了90多个",
          "B. MySQL8.0约有600个关键词，5.7在此基础上增加了90多个",
          "C. 关键字没有特定含义，可以随意作为标识符",
          "D. 关键字数量在各版本中固定不变"
        ],
        "answer": "A",
        "analysis": "解析：PPT第20页指出MySQL5.7大约有600个左右关键词，8.0增加了90多个；所有关键字都有特定含义，应尽量避免作为标识符。",
        "page": 20
      },
      {
        "id": "ch2-ppt-s23",
        "type": "single",
        "stem": "常量也称为？",
        "options": [
          "A. 文字值或标量值",
          "B. 会话变量",
          "C. 全局变量",
          "D. 系统变量"
        ],
        "answer": "A",
        "analysis": "解析：PPT第21页指出常量也称为文字值或标量值，是指某个过程中值始终不改的量。",
        "page": 21
      },
      {
        "id": "ch2-ppt-s24",
        "type": "single",
        "stem": "关于全局系统变量和会话系统变量，下列说法正确的是？",
        "options": [
          "A. 全局变量只影响当前的数据库连接",
          "B. 会话变量在每次建立新连接时由MySQL初始化，会话结束即释放",
          "C. 对会话变量的修改会影响整个服务器",
          "D. 全局变量在每次建立连接时重新初始化"
        ],
        "answer": "B",
        "analysis": "解析：PPT第23页指出系统变量包括全局和会话两种：全局变量在MySQL启动时初始化、影响整个实例；会话变量每次建立新连接时初始化，会话结束就释放。",
        "page": 23
      },
      {
        "id": "ch2-ppt-s25",
        "type": "single",
        "stem": "将全局系统变量 sort_buffer_size 的值改为25000，正确的语句是？",
        "options": [
          "A. set global sort_buffer_size=25000;",
          "B. set @@global.sort_buffer_size=25000;",
          "C. set session.sort_buffer_size=25000;",
          "D. set @@local.sort_buffer_size=25000;"
        ],
        "answer": "B",
        "analysis": "解析：PPT第25页给出的示例是set @@global.sort_buffer_size=25000，用于把全局系统变量sort_buffer_size的值改为25000。",
        "page": 25
      },
      {
        "id": "ch2-ppt-s26",
        "type": "single",
        "stem": "将一个系统变量的值设置为MySQL的默认值，应使用哪个关键字？",
        "options": [
          "A. default",
          "B. null",
          "C. reset",
          "D. init"
        ],
        "answer": "A",
        "analysis": "解析：PPT第25页指出将一个系统变量值设置为MySQL默认值可以使用default关键字，如set @@local.sql_select_limit=default。",
        "page": 25
      },
      {
        "id": "ch2-ppt-b16",
        "type": "blank",
        "stem": "会话变量的定义是在前面加一个____符号，随时定义和使用，会话结束就释放。",
        "answer": [
          "@",
          "@符号"
        ],
        "answerText": "@",
        "analysis": "解析：PPT第23页指出会话变量前面加一个@符号，对会话变量的修改只会影响当前会话，即当前的数据库连接。",
        "page": 23
      },
      {
        "id": "ch2-ppt-b17",
        "type": "blank",
        "stem": "显示系统变量清单的命令是 show [global|session] ____ [like '字符串']。",
        "answer": [
          "variables",
          "VARIABLES"
        ],
        "answerText": "variables",
        "analysis": "解析：PPT第24页给出显示系统变量清单的语法show [global|session] variables [like '字符串']，例如show variables like 'a%'。",
        "page": 24
      },
      {
        "id": "ch2-ppt-s27",
        "type": "single",
        "stem": "MySQL的字符串类型可以分为哪两类？",
        "options": [
          "A. 普通的文本字符串类型(char、varchar)和特殊类型(set、enum)",
          "B. 定长类型和变长类型",
          "C. 文本类型和二进制类型",
          "D. 字符类型和数字类型"
        ],
        "answer": "A",
        "analysis": "解析：PPT第27页指出字符串类型分为2类：普通的文本字符串类型（char和varchar）和特殊类型（set和enum）。",
        "page": 27
      },
      {
        "id": "ch2-ppt-s28",
        "type": "single",
        "stem": "关于char和varchar，下列说法正确的是？",
        "options": [
          "A. char是变长的，varchar是定长的",
          "B. char列长度固定为创建表时声明的长度，varchar是变长字符串，两者取值都是1~255",
          "C. 两者长度都只能是255",
          "D. varchar的取值范围是1~65535"
        ],
        "answer": "B",
        "analysis": "解析：PPT第28页指出char列的长度被固定为创建表所声明的长度，取值1~255；varchar列的值是变长字符串，取值范围和char一样。",
        "page": 28
      },
      {
        "id": "ch2-ppt-b18",
        "type": "blank",
        "stem": "字符串类型中的特殊类型包括 set 和____。",
        "answer": [
          "enum",
          "ENUM",
          "枚举"
        ],
        "answerText": "enum",
        "analysis": "解析：PPT第27页指出字符串类型的特殊类型为set和enum两种。",
        "page": 27
      },
      {
        "id": "ch2-ppt-s29",
        "type": "single",
        "stem": "MySQL在标准SQL支持的integer和smallint之外，还扩展支持了哪些整数类型？",
        "options": [
          "A. tinyint、mediumint和bigint",
          "B. float、double和decimal",
          "C. number和numeric",
          "D. int和long"
        ],
        "answer": "A",
        "analysis": "解析：PPT第30页指出标准SQL支持integer和smallint，MySQL还扩展支持tinyint、mediumint和bigint。",
        "page": 30
      },
      {
        "id": "ch2-ppt-s30",
        "type": "single",
        "stem": "数字位数不够时需要用“0”填充，应使用哪个关键字？",
        "options": [
          "A. unsigned",
          "B. zerofill",
          "C. auto_increment",
          "D. default"
        ],
        "answer": "B",
        "analysis": "解析：PPT第31页指出如果在数字位数不够时需要用0填充，则可以使用关键字zerofill。",
        "page": 31
      },
      {
        "id": "ch2-ppt-s31",
        "type": "single",
        "stem": "MySQL的浮点数类型包括？",
        "options": [
          "A. float（单精度）和double（双精度）",
          "B. decimal和numeric",
          "C. float和decimal",
          "D. double和real"
        ],
        "answer": "A",
        "analysis": "解析：PPT第33页指出浮点数类型包括单精度float型和双精度double型，定点数类型就是decimal型。",
        "page": 33
      },
      {
        "id": "ch2-ppt-b19",
        "type": "blank",
        "stem": "插入的整数位数大于指定的显示宽度时，将按照整数的____值进行存储。",
        "answer": [
          "实际",
          "实际值",
          "真实"
        ],
        "answerText": "实际",
        "analysis": "解析：PPT第31页指出整数类型可以指定显示宽度，但插入的整数位数大于显示宽度时，按整数的实际值存储。",
        "page": 31
      },
      {
        "id": "ch2-ppt-b20",
        "type": "blank",
        "stem": "AUTO_INCREMENT字段应该为NOT NULL，并且定义为PRIMARY KEY或____。",
        "answer": [
          "UNIQUE",
          "unique",
          "唯一"
        ],
        "answerText": "UNIQUE",
        "analysis": "解析：PPT第32页指出一个表中最多只能有一个AUTO_INCREMENT字段，该字段应为NOT NULL并定义为PRIMARY KEY或UNIQUE。",
        "page": 32
      },
      {
        "id": "ch2-ppt-s32",
        "type": "single",
        "stem": "既表示日期又表示时间的类型是？",
        "options": [
          "A. date",
          "B. time",
          "C. datetime和timestamp",
          "D. year"
        ],
        "answer": "C",
        "analysis": "解析：PPT第34页指出year表示年份、date表示日期、time表示时间，datetime和timestamp表示日期和时间。",
        "page": 34
      },
      {
        "id": "ch2-ppt-s33",
        "type": "single",
        "stem": "YEAR类型的年份值采用4位格式时，允许的取值范围是？",
        "options": [
          "A. 1901~2155",
          "B. 1900~2155",
          "C. 1970~2038",
          "D. 0000~9999"
        ],
        "answer": "A",
        "analysis": "解析：PPT第36页指出YEAR年份值可为2位或4位、默认4位；4位格式允许范围为1901~2155。",
        "page": 36
      },
      {
        "id": "ch2-ppt-b21",
        "type": "blank",
        "stem": "YEAR类型采用2位格式时，取值70~99表示____年~1999年，取值01~69表示2001年~2069年。",
        "answer": [
          "1970"
        ],
        "answerText": "1970",
        "analysis": "解析：PPT第36页指出2位格式中70~99表示从1970年到1999年，01~69表示从2001年到2069年。",
        "page": 36
      },
      {
        "id": "ch2-ppt-b22",
        "type": "blank",
        "stem": "若一个表中定义了两个TIMESTAMP字段，则第一个TIMESTAMP字段的默认值为____。",
        "answer": [
          "CURRENT_TIMESTAMP",
          "current_timestamp",
          "当前时间戳"
        ],
        "answerText": "CURRENT_TIMESTAMP",
        "analysis": "解析：PPT第36页指出第一个TIMESTAMP字段默认值为CURRENT_TIMESTAMP，第二个TIMESTAMP字段默认值为0000-00-00 00:00:00。",
        "page": 36
      },
      {
        "id": "ch2-ppt-s34",
        "type": "single",
        "stem": "下列类型中不属于二进制类型的是？",
        "options": [
          "A. binary",
          "B. varbinary",
          "C. bit",
          "D. varchar"
        ],
        "answer": "D",
        "analysis": "解析：PPT第37页指出二进制类型包括binary、varbinary、bit、tinyblob、blob、mediumblob和longblob，varchar属于普通文本字符串类型。",
        "page": 37
      },
      {
        "id": "ch2-ppt-s35",
        "type": "single",
        "stem": "需要存储图片、声音等数据时，应选用哪种类型？",
        "options": [
          "A. text",
          "B. blob",
          "C. char",
          "D. enum"
        ],
        "answer": "B",
        "analysis": "解析：PPT第37页指出text类型适合存储长文本，而blob类型适合存储二进制数据，支持文本、声音和图像等任何数据。",
        "page": 37
      },
      {
        "id": "ch2-ppt-s36",
        "type": "single",
        "stem": "下列适合存储长文本的类型是？",
        "options": [
          "A. tinytext、text和longtext",
          "B. binary和varbinary",
          "C. blob和longblob",
          "D. bit"
        ],
        "answer": "A",
        "analysis": "解析：PPT第37页指出tinytext、longtext和text等适合存储长文本的类型。",
        "page": 37
      },
      {
        "id": "ch2-ppt-b23",
        "type": "blank",
        "stem": "text和blob类型的大小可以改变，其中text类型适合存储长文本，而blob类型适合存储____数据。",
        "answer": [
          "二进制",
          "binary",
          "BINARY"
        ],
        "answerText": "二进制",
        "analysis": "解析：PPT第37页指出blob类型适合存储二进制数据，支持文本、声音和图像等。",
        "page": 37
      },
      {
        "id": "ch2-ppt-s37",
        "type": "single",
        "stem": "进行除法和求余运算时，除以0会怎样？",
        "options": [
          "A. 报语法错误",
          "B. 返回0",
          "C. 返回null",
          "D. 返回1"
        ],
        "answer": "C",
        "analysis": "解析：PPT第41页指出除以0的除法是不允许的，MySQL会返回null，而不是报错。",
        "page": 41
      },
      {
        "id": "ch2-ppt-s38",
        "type": "single",
        "stem": "加(+)运算符除了做数值相加，还可以？",
        "options": [
          "A. 连接两个字符串，或计算某个日期增加的天数、某个时间的秒数",
          "B. 求两个数的余数",
          "C. 比较两个表达式的大小",
          "D. 进行按位与运算"
        ],
        "answer": "A",
        "analysis": "解析：PPT第41页指出加(+)运算还可用于连接两个字符串，或者计算某个日期增加的天数、某个时间的秒数等。",
        "page": 41
      },
      {
        "id": "ch2-ppt-s39",
        "type": "single",
        "stem": "MySQL中具有输出功能、能够显示函数和表达式值的语句是？",
        "options": [
          "A. select",
          "B. insert",
          "C. update",
          "D. delete"
        ],
        "answer": "A",
        "analysis": "解析：PPT第39页指出MySQL中的select语句具有输出功能，能够显示函数和表达式的值。",
        "page": 39
      },
      {
        "id": "ch2-ppt-s40",
        "type": "single",
        "stem": "关于算术运算符的操作数个数，下列说法正确的是？",
        "options": [
          "A. 加、减、乘可以同时运算多个操作数",
          "B. div()可以带三个参数",
          "C. 除号(/)只能有一个操作数",
          "D. 求余运算符是div"
        ],
        "answer": "A",
        "analysis": "解析：PPT第41页指出加、减和乘可以同时运算多个操作数，除号(/)和求余(%)也可同时计算多个操作数，而div()和mod()只有两个参数。",
        "page": 41
      },
      {
        "id": "ch2-ppt-b24",
        "type": "blank",
        "stem": "减(-)可用于计算某个日期____的天数、某个时间的秒数等。",
        "answer": [
          "减少",
          "减"
        ],
        "answerText": "减少",
        "analysis": "解析：PPT第41页指出减(-)可用于计算某个日期减少的天数、某个时间的秒数等。",
        "page": 41
      },
      {
        "id": "ch2-ppt-s41",
        "type": "single",
        "stem": "比较运算符最主要的用途是？",
        "options": [
          "A. 判断表中的哪些记录符合查询条件",
          "B. 对二进制位进行计算",
          "C. 完成数据类型的隐式转换",
          "D. 控制事务的提交与回滚"
        ],
        "answer": "A",
        "analysis": "解析：PPT第43页指出比较运算符是查询数据时最常用的一类运算符，通过它可以判断表中的哪些记录是符合条件的。",
        "page": 43
      },
      {
        "id": "ch2-ppt-s42",
        "type": "single",
        "stem": "使用“=”判断两个字符是否相同时，MySQL依据什么进行判断？",
        "options": [
          "A. 字符的长度",
          "B. 字符的ASCII码",
          "C. 字符所在的行号",
          "D. 字符的存储位置"
        ],
        "answer": "B",
        "analysis": "解析：PPT第44页指出运用“=”判断两个字符是否相同时，MySQL根据字符的ASCII码判断，相等则表示两个字符相同。",
        "page": 44
      },
      {
        "id": "ch2-ppt-s43",
        "type": "single",
        "stem": "关于空值(null)的判断，下列说法正确的是？",
        "options": [
          "A. 可以用“=”判断一个值是否为null",
          "B. 用“>”判断null会返回1",
          "C. 只能用is null或is not null判断，且null与'null'不同",
          "D. 'null'表示的就是空值"
        ],
        "answer": "C",
        "analysis": "解析：PPT第46页指出“=”“<>”“!=”“>”等运算符都不能判断空值，一旦使用结果返回null；null与'null'不同，后者是由4个字母组成的字符串。",
        "page": 46
      },
      {
        "id": "ch2-ppt-s44",
        "type": "single",
        "stem": "x1 between m and n 的结果返回1的条件是？",
        "options": [
          "A. x1大于m且小于n",
          "B. x1大于等于m且小于等于n",
          "C. x1等于m或等于n",
          "D. x1不等于m且不等于n"
        ],
        "answer": "B",
        "analysis": "解析：PPT第47页指出如果x1大于等于m且小于等于n，结果返回1，否则返回0，还可用not取反。",
        "page": 47
      },
      {
        "id": "ch2-ppt-s45",
        "type": "single",
        "stem": "regexp 运算符中，“^”表示？",
        "options": [
          "A. 匹配字符串的开始部分",
          "B. 匹配字符串的结尾部分",
          "C. 代表字符串中的一个字符",
          "D. 表示对匹配结果取反"
        ],
        "answer": "A",
        "analysis": "解析：PPT第50页指出regexp经常与“^”“$”“.”一起使用，“^”匹配字符串开始部分，“$”匹配结尾部分，“.”代表一个字符。",
        "page": 50
      },
      {
        "id": "ch2-ppt-b25",
        "type": "blank",
        "stem": "in 运算符用于判断数据是否存在于某个____中，x1等于值1到值n中任何一个时返回1。",
        "answer": [
          "集合",
          "set",
          "SET"
        ],
        "answerText": "集合",
        "analysis": "解析：PPT第48页指出in用于判断数据是否存在于某个集合中，表达式为x1 in(值1,值2,…,值n)。",
        "page": 48
      },
      {
        "id": "ch2-ppt-s46",
        "type": "single",
        "stem": "MySQL支持几种逻辑运算符？",
        "options": [
          "A. 2种",
          "B. 3种",
          "C. 4种",
          "D. 6种"
        ],
        "answer": "C",
        "analysis": "解析：PPT第52页指出MySQL支持4种逻辑运算符，分别是与、或、非和异或，表达式为真返回1、为假返回0。",
        "page": 52
      },
      {
        "id": "ch2-ppt-s47",
        "type": "single",
        "stem": "与运算中，所有数据不为0且存在null、但没有任何数据为0时，结果返回？",
        "options": [
          "A. 0",
          "B. 1",
          "C. null",
          "D. 报错"
        ],
        "answer": "C",
        "analysis": "解析：PPT第53页指出与运算中若所有数据不为0且不为null返回1，存在0返回0，存在null且没有数据为0时返回null。",
        "page": 53
      },
      {
        "id": "ch2-ppt-s48",
        "type": "single",
        "stem": "或运算中，操作数中只有0时结果返回？",
        "options": [
          "A. 0",
          "B. 1",
          "C. null",
          "D. 报错"
        ],
        "answer": "A",
        "analysis": "解析：PPT第53页指出或运算中没有非0数字但包含null时返回null，操作数中只有0时返回0，存在非0数字时返回1。",
        "page": 53
      },
      {
        "id": "ch2-ppt-b26",
        "type": "blank",
        "stem": "非运算中，如果操作数据是0，结果返回____；如果操作数据是非0数字，结果返回0。",
        "answer": [
          "1"
        ],
        "answerText": "1",
        "analysis": "解析：PPT第54页指出非运算（!或not）返回与操作数据相反的结果，非0返回0、0返回1、null返回null。",
        "page": 54
      },
      {
        "id": "ch2-ppt-b27",
        "type": "blank",
        "stem": "xor表示异或运算，只要其中任何一个操作数据为____时，结果就返回null。",
        "answer": [
          "null",
          "NULL",
          "空值"
        ],
        "answerText": "null",
        "analysis": "解析：PPT第55页指出xor表示异或运算，只要任何一个操作数据为null，结果返回null。",
        "page": 55
      },
      {
        "id": "ch2-ppt-s49",
        "type": "single",
        "stem": "位运算的计算过程是？",
        "options": [
          "A. 先将操作数变成二进制数运算，再把结果变回十进制数",
          "B. 先将操作数变成八进制数运算",
          "C. 直接在十进制数上按位运算",
          "D. 先将操作数变成十六进制字符串比较"
        ],
        "answer": "A",
        "analysis": "解析：PPT第56页指出位运算会先将操作数变成二进制数进行位运算，然后再将计算结果从二进制数变回十进制数。",
        "page": 56
      },
      {
        "id": "ch2-ppt-s50",
        "type": "single",
        "stem": "MySQL支持的位运算符共有几种？",
        "options": [
          "A. 4种",
          "B. 5种",
          "C. 6种",
          "D. 8种"
        ],
        "answer": "C",
        "analysis": "解析：PPT第56页指出MySQL支持6种位运算符：按位与、按位或、按位取反、按位异或、按位左移和按位右移。",
        "page": 56
      },
      {
        "id": "ch2-ppt-s51",
        "type": "single",
        "stem": "下列运算符中属于位运算符的是？",
        "options": [
          "A. 按位与",
          "B. 逻辑与",
          "C. 求余",
          "D. 大于等于"
        ],
        "answer": "A",
        "analysis": "解析：PPT第56页列出的6种位运算符包括按位与、按位或、按位取反、按位异或、按位左移和按位右移，逻辑与属于逻辑运算符。",
        "page": 56
      },
      {
        "id": "ch2-ppt-b28",
        "type": "blank",
        "stem": "位运算会先将操作数变成____进制数进行运算，然后再把结果变回十进制数。",
        "answer": [
          "二",
          "2",
          "二进制"
        ],
        "answerText": "二",
        "analysis": "解析：PPT第56页指出位运算符是在二进制数上进行计算的运算符。",
        "page": 56
      },
      {
        "id": "ch2-ppt-s52",
        "type": "single",
        "stem": "在SQL语言中，表达式是指？",
        "options": [
          "A. 常量、变量、列名、复杂计算、运算符和函数的组合",
          "B. 只能是常量",
          "C. 只能是表中的列名",
          "D. 只能是函数调用"
        ],
        "answer": "A",
        "analysis": "解析：PPT第59页指出表达式就是常量、变量、列名、复杂计算、运算符和函数的组合，通常都有返回值。",
        "page": 59
      },
      {
        "id": "ch2-ppt-s53",
        "type": "single",
        "stem": "根据表达式值的类型，表达式可分为？",
        "options": [
          "A. 字符型表达式、数值型表达式和日期型表达式",
          "B. 简单表达式和复杂表达式",
          "C. 单行表达式和多行表达式",
          "D. 定长表达式和变长表达式"
        ],
        "answer": "A",
        "analysis": "解析：PPT第59页指出根据表达式值的类型，表达式可分为字符型表达式、数值型表达式和日期型表达式。",
        "page": 59
      },
      {
        "id": "ch2-ppt-s54",
        "type": "single",
        "stem": "当一个表达式中有多个优先级相同的运算符时，运算顺序是？",
        "options": [
          "A. 右边的运算符先运算",
          "B. 左边的运算符先运算",
          "C. 随机顺序",
          "D. 按运算符字母顺序"
        ],
        "answer": "B",
        "analysis": "解析：PPT第59页指出运算符按从高到低、从左到右的级别运算，优先级相同时表达式左边的运算符先运算。",
        "page": 59
      },
      {
        "id": "ch2-ppt-b29",
        "type": "blank",
        "stem": "当一个复杂表达式有多个运算符时，运算符优先级决定运算次序，按先____后低的顺序进行运算。",
        "answer": [
          "高"
        ],
        "answerText": "高",
        "analysis": "解析：PPT第59页指出在一个表达式中按先高后低的顺序进行运算，优先级相同则左边的运算符先运算。",
        "page": 59
      },
      {
        "id": "ch2-ppt-s55",
        "type": "single",
        "stem": "关于rand()函数，下列说法正确的是？",
        "options": [
          "A. rand()返回完全随机的数，rand(x)中x相同时作为种子值返回的值相同",
          "B. rand(x)每次调用返回的值都不同",
          "C. rand()只能返回整数",
          "D. rand(x)返回的是字符串"
        ],
        "answer": "A",
        "analysis": "解析：PPT第65页指出rand()返回的数是完全随机的，而rand(x)中x相同时被用作种子值，返回的值是相同的。",
        "page": 65
      },
      {
        "id": "ch2-ppt-s56",
        "type": "single",
        "stem": "round(x,y)函数的含义是？",
        "options": [
          "A. 返回x保留到小数点后y位的值，截取时进行四舍五入",
          "B. 返回x的y次方",
          "C. 返回x的平方根",
          "D. 返回y位的整数"
        ],
        "answer": "A",
        "analysis": "解析：PPT第65页指出round(x)返回离x最近的整数，round(x,y)返回x保留到小数点后y位的值，截取时进行四舍五入处理。",
        "page": 65
      },
      {
        "id": "ch2-ppt-s57",
        "type": "single",
        "stem": "数学函数主要用于处理哪类数据？",
        "options": [
          "A. 数字，包括整型、浮点数等",
          "B. 字符串",
          "C. 日期和时间",
          "D. 二进制数据"
        ],
        "answer": "A",
        "analysis": "解析：PPT第63页指出数学函数主要用于处理数字，包括整型、浮点数等，包括绝对值函数、正弦函数、余弦函数和获取随机数的函数等。",
        "page": 63
      },
      {
        "id": "ch2-ppt-b30",
        "type": "blank",
        "stem": "数学函数可以作为表达式或表达式的____使用。",
        "answer": [
          "一部分",
          "部分"
        ],
        "answerText": "一部分",
        "analysis": "解析：PPT第63页指出数学函数可以作为表达式或表达式的一部分使用。",
        "page": 63
      },
      {
        "id": "ch2-ppt-s58",
        "type": "single",
        "stem": "用于连接字符串的函数是？",
        "options": [
          "A. concat()",
          "B. substring()",
          "C. reverse()",
          "D. format()"
        ],
        "answer": "A",
        "analysis": "解析：PPT第67页例12利用concat()函数连接字符串；substring()返回指定字符串，reverse()用于逆序输出。",
        "page": 67
      },
      {
        "id": "ch2-ppt-s59",
        "type": "single",
        "stem": "下列不属于字符串函数功能类别的是？",
        "options": [
          "A. 计算字符串长度",
          "B. 合并、替换字符串",
          "C. 比较和查找字符串位置",
          "D. 按位取反"
        ],
        "answer": "D",
        "analysis": "解析：PPT第66页指出字符串函数包括计算字符串长度、合并、替换、比较和查找字符串位置等函数，按位取反属于位运算。",
        "page": 66
      },
      {
        "id": "ch2-ppt-b31",
        "type": "blank",
        "stem": "字符串函数主要用于处理____数据和表达式。",
        "answer": [
          "字符串",
          "string"
        ],
        "answerText": "字符串",
        "analysis": "解析：PPT第66页指出字符串函数主要用于处理字符串数据和表达式。",
        "page": 66
      },
      {
        "id": "ch2-ppt-b32",
        "type": "blank",
        "stem": "____() 函数用于将字符串逆序输出。",
        "answer": [
          "reverse",
          "REVERSE"
        ],
        "answerText": "reverse",
        "analysis": "解析：PPT第67页例13利用substring()函数返回指定字符串，并利用reverse()逆序输出。",
        "page": 67
      },
      {
        "id": "ch2-ppt-s60",
        "type": "single",
        "stem": "返回当前日期的函数是？",
        "options": [
          "A. curdate()",
          "B. curtime()",
          "C. now()",
          "D. date_add()"
        ],
        "answer": "A",
        "analysis": "解析：PPT第69页例14利用curdate()、curtime()和now()函数返回当前日期和时间，其中curdate()返回当前日期。",
        "page": 69
      },
      {
        "id": "ch2-ppt-s61",
        "type": "single",
        "stem": "date_sub() 函数的作用是？",
        "options": [
          "A. 增加日期值",
          "B. 减少日期值",
          "C. 格式化日期",
          "D. 返回当前时间"
        ],
        "answer": "B",
        "analysis": "解析：PPT第71页指出date_add()和date_sub()函数可以对日期和时间进行算术操作，分别用来增加和减少日期值。",
        "page": 71
      },
      {
        "id": "ch2-ppt-s62",
        "type": "single",
        "stem": "date_add(date, interval int keyword) 中的 interval 关键字表示？",
        "options": [
          "A. 一个时间间隔",
          "B. 时区设置",
          "C. 格式化代码",
          "D. 日期类型"
        ],
        "answer": "A",
        "analysis": "解析：PPT第71页指出date表示日期和时间，interval关键字表示一个时间间隔，keyword参数用于指定间隔单位。",
        "page": 71
      },
      {
        "id": "ch2-ppt-s63",
        "type": "single",
        "stem": "用于格式化日期和时间值的函数是？",
        "options": [
          "A. date_format() 和 time_format()",
          "B. date_add() 和 date_sub()",
          "C. curdate() 和 curtime()",
          "D. now() 和 format()"
        ],
        "answer": "A",
        "analysis": "解析：PPT第73页指出date_format()和time_format()函数可以用来格式化日期和时间值，语法为date_format/time_format(date|time, fmt)。",
        "page": 73
      },
      {
        "id": "ch2-ppt-b33",
        "type": "blank",
        "stem": "日期和时间函数主要用于处理表中的____和时间数据，包括获取当前日期、获取当前时间、计算日期和计算时间等函数。",
        "answer": [
          "日期"
        ],
        "answerText": "日期",
        "analysis": "解析：PPT第68页指出日期和时间函数主要用于处理表中的日期和时间数据。",
        "page": 68
      },
      {
        "id": "ch2-ppt-s64",
        "type": "single",
        "stem": "聚合函数也叫作？",
        "options": [
          "A. 分组统计函数",
          "B. 加密函数",
          "C. 格式化函数",
          "D. 窗口函数"
        ],
        "answer": "A",
        "analysis": "解析：PPT第75页指出聚合函数也叫作分组统计函数。",
        "page": 75
      },
      {
        "id": "ch2-ppt-s65",
        "type": "single",
        "stem": "聚合函数的主要功能是？",
        "options": [
          "A. 对聚合在组内的数据表行进行计算",
          "B. 格式化日期和时间值",
          "C. 连接多个字符串",
          "D. 查询数据库版本等系统信息"
        ],
        "answer": "A",
        "analysis": "解析：PPT第75页指出聚合函数的主要功能是对聚合在组内的数据表行进行计算。",
        "page": 75
      },
      {
        "id": "ch2-ppt-b34",
        "type": "blank",
        "stem": "聚合函数也叫作____函数，常用于对聚合在组内的数据表行进行计算。",
        "answer": [
          "分组统计",
          "分组"
        ],
        "answerText": "分组统计",
        "analysis": "解析：PPT第75页指出聚合函数也叫作分组统计函数。",
        "page": 75
      },
      {
        "id": "ch2-ppt-b35",
        "type": "blank",
        "stem": "利用聚合函数可以满足表中记录的____运算。",
        "answer": [
          "聚合",
          "统计"
        ],
        "answerText": "聚合",
        "analysis": "解析：PPT第75页指出利用聚合函数可以满足表中记录的聚合运算。",
        "page": 75
      },
      {
        "id": "ch2-ppt-s66",
        "type": "single",
        "stem": "用来查询数据库版本、当前用户等信息的函数属于？",
        "options": [
          "A. 系统信息函数",
          "B. 加密函数",
          "C. 格式化函数",
          "D. 窗口函数"
        ],
        "answer": "A",
        "analysis": "解析：PPT第76页指出系统信息函数用来查询MySQL数据库的系统信息，例如查询数据库的版本、查询数据库的当前用户等。",
        "page": 76
      },
      {
        "id": "ch2-ppt-s67",
        "type": "single",
        "stem": "md5(str) 函数的返回值是？",
        "options": [
          "A. 32位十六进制数字的二进制字符串",
          "B. 64位二进制字符串",
          "C. 16位十进制数字",
          "D. 与原文等长的明文字符串"
        ],
        "answer": "A",
        "analysis": "解析：PPT第78页指出md5(str)为字符串算出一个md5 128比特校验和，以32位十六进制数字的二进制字符串形式返回，参数为NULL时返回NULL。",
        "page": 78
      },
      {
        "id": "ch2-ppt-s68",
        "type": "single",
        "stem": "与md5()相比，sha()函数的加密算法？",
        "options": [
          "A. 更不安全",
          "B. 更加安全",
          "C. 完全相同",
          "D. 只能加密数字"
        ],
        "answer": "B",
        "analysis": "解析：PPT第79页指出sha(str)从原明文密码str计算并返回加密后的密码字符串，sha加密算法比md5更加安全。",
        "page": 79
      },
      {
        "id": "ch2-ppt-s69",
        "type": "single",
        "stem": "format(x,y) 函数中的参数 y 表示？",
        "options": [
          "A. 结果的小数位数",
          "B. 数字的整数位数",
          "C. 千位分隔符的字符",
          "D. 被格式化数据的长度"
        ],
        "answer": "A",
        "analysis": "解析：PPT第81页指出format()把数值格式化为以逗号分隔的数字序列，第一个参数x是被格式化的数据，第二个参数y是结果的小数位数。",
        "page": 81
      },
      {
        "id": "ch2-ppt-b36",
        "type": "blank",
        "stem": "sha2(str,hash_length) 中的 hash_length 支持224、256、384、512和0，其中0等同于____。",
        "answer": [
          "256"
        ],
        "answerText": "256",
        "analysis": "解析：PPT第80页指出sha2(str,hash_length)利用hash_length作长度加密str，0等同于256，224比256少32位。",
        "page": 80
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
            "term": "支持的引擎",
            "desc": "MySQL8.0支持InnoDB、MyISAM、Memory、CSV、Archive等共9种存储引擎。",
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
            "desc": "col_name type可跟not null、default、auto_increment、primary key、comment等选项。",
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
          },
          {
            "term": "删除注意",
            "desc": "删除表时会删除表中的所有数据，因此删除时要特别注意。",
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
            "desc": "insert|replace[into]table_name[(col_name,...)] values(...)或set col_name=expr。",
            "page": 64
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
            "desc": "delete [low_priority] [quick] [ignore] from tbl_name后可跟where、order by、limit子句。",
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
            "desc": "foreign key(col_name) references table_name(col_name)，可跟on delete/on update规则。",
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
      },
      {
        "id": "ch3-ppt-s09",
        "type": "single",
        "stem": "MySQL 8.0数据库文件的默认存放位置是？",
        "options": [
          "A. C:\\Users\\MySQL\\Data\\",
          "B. C:\\Program Files\\MySQL\\MySQL Server 8.0\\Data\\",
          "C. C:\\MySQL\\Data\\",
          "D. C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Data\\"
        ],
        "answer": "D",
        "analysis": "解析：PPT第4页指出数据库文件的默认存放位置是 C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Data\\。",
        "page": 4
      },
      {
        "id": "ch3-ppt-s10",
        "type": "single",
        "stem": "若要修改MySQL数据库文件的默认存放位置，可采用的方式是？",
        "options": [
          "A. 通过配置向导或手工配置修改",
          "B. 数据库位置不可修改",
          "C. 执行alter database语句",
          "D. 只能重新安装MySQL"
        ],
        "answer": "A",
        "analysis": "解析：PPT第4页指出可通过配置向导或手工配置修改数据库的默认存放位置。",
        "page": 4
      },
      {
        "id": "ch3-ppt-b07",
        "type": "blank",
        "stem": "MySQL 8.0中，MySQL数据表的文件合并到数据根目录下的____文件中。",
        "answer": [
          "mysql.ibd",
          "mysql.ibd文件",
          "mysql.ibd 文件"
        ],
        "answerText": "mysql.ibd",
        "analysis": "解析：PPT第4页指出MySQL8.0中MySQL数据表的文件合并到数据根目录中的mysql.ibd中。",
        "page": 4
      },
      {
        "id": "ch3-ppt-s11",
        "type": "single",
        "stem": "MySQL安装完成后，会在其data目录下自动创建几个必须的数据库，这些数据库通常称为？",
        "options": [
          "A. 临时数据库",
          "B. 系统数据库",
          "C. 用户数据库",
          "D. 分区数据库"
        ],
        "answer": "B",
        "analysis": "解析：PPT第5页指出MySQL安装完成后会在data目录下自动创建几个必须的数据库，即可用show databases查看的系统数据库。",
        "page": 5
      },
      {
        "id": "ch3-ppt-s12",
        "type": "single",
        "stem": "在关系数据库中数据的存储以表的形式进行，因此存储引擎简而言之是指？",
        "options": [
          "A. 索引的类型",
          "B. 表的类型",
          "C. 数据库的类型",
          "D. 用户的类型"
        ],
        "answer": "B",
        "analysis": "解析：PPT第7页指出在关系数据库中数据以表的形式存储，所以存储引擎简而言之就是指表的类型。",
        "page": 7
      },
      {
        "id": "ch3-ppt-s13",
        "type": "single",
        "stem": "MySQL 8.0支持的存储引擎共有多少种？",
        "options": [
          "A. 7种",
          "B. 11种",
          "C. 9种",
          "D. 5种"
        ],
        "answer": "C",
        "analysis": "解析：PPT第8页列出InnoDB、MRG_MyISAM、Memory、BLACKHOLE、MyISAM、CSV、Archive、Federated和PERFORMANCE-SCHEMA共9种。",
        "page": 8
      },
      {
        "id": "ch3-ppt-s14",
        "type": "single",
        "stem": "PPT中指出InnoDB存储引擎除支持事务外，还支持自动增长列auto_increment和？",
        "options": [
          "A. 数据全部存于内存",
          "B. 表级锁定",
          "C. 不支持外键",
          "D. 全文检索"
        ],
        "answer": "D",
        "analysis": "解析：PPT第10页指出InnoDB还支持自动增长列auto_increment和全文检索功能；表级锁定是MyISAM的特性。",
        "page": 10
      },
      {
        "id": "ch3-ppt-s15",
        "type": "single",
        "stem": "对事务完整性没有要求、以SELECT/INSERT为主、占用空间小的表，适合使用哪个存储引擎？",
        "options": [
          "A. Archive",
          "B. MyISAM",
          "C. InnoDB",
          "D. MEMORY"
        ],
        "answer": "B",
        "analysis": "解析：PPT第12页指出MyISAM不支持事务和外键，但访问速度快、占用空间小，适合以SELECT/INSERT为主的表。",
        "page": 12
      },
      {
        "id": "ch3-ppt-s16",
        "type": "single",
        "stem": "MEMORY存储引擎中每个表可放置的数据量大小受哪个系统变量约束？",
        "options": [
          "A. innodb_buffer_pool_size",
          "B. default_storage_engine",
          "C. max_heap_table_size",
          "D. InnoDB_file_per_table"
        ],
        "answer": "C",
        "analysis": "解析：PPT第12页指出每个MEMORY表可放置数据量的大小受max_heap_table_size系统变量的约束。",
        "page": 12
      },
      {
        "id": "ch3-ppt-b08",
        "type": "blank",
        "stem": "查看当前MySQL服务实例支持的存储引擎，可使用____命令。",
        "answer": [
          "show engines",
          "show engines;",
          "SHOW ENGINES"
        ],
        "answerText": "show engines",
        "analysis": "解析：PPT第9页指出执行show engines即可查看当前MySQL服务实例支持的存储引擎。",
        "page": 9
      },
      {
        "id": "ch3-ppt-b09",
        "type": "blank",
        "stem": "创建表时指定存储引擎，或在alter table中修改存储引擎，都是通过____关键字设置的。",
        "answer": [
          "engine",
          "ENGINE",
          "engine="
        ],
        "answerText": "engine",
        "analysis": "解析：PPT第13页指出每个表都有存储引擎，可在创建时指定也可用alter table修改，都通过engine关键字设置。",
        "page": 13
      },
      {
        "id": "ch3-ppt-s17",
        "type": "single",
        "stem": "数据库设计是指？",
        "options": [
          "A. 为给定应用环境构造优化的数据库逻辑模式和物理结构，并据此建立数据库及其应用系统",
          "B. 编写数据库应用系统的界面代码",
          "C. 只对数据库进行备份和恢复",
          "D. 只对表中的数据进行录入和删除"
        ],
        "answer": "A",
        "analysis": "解析：PPT第14页指出数据库设计是对给定应用环境构造优化的数据库逻辑模式和物理结构，并据此建立数据库及其应用系统。",
        "page": 14
      },
      {
        "id": "ch3-ppt-s18",
        "type": "single",
        "stem": "数据库设计的目标是？",
        "options": [
          "A. 尽量减小硬盘容量",
          "B. 为用户和各种应用系统提供信息基础设施和高效率的运行环境",
          "C. 只保证数据不丢失",
          "D. 只提高CPU利用率"
        ],
        "answer": "B",
        "analysis": "解析：PPT第14页指出数据库设计的目标是为用户和各种应用系统提供一个信息基础设施和高效率的运行环境。",
        "page": 14
      },
      {
        "id": "ch3-ppt-b10",
        "type": "blank",
        "stem": "数据库设计可分为需求分析、概念设计、____和物理设计4个阶段。",
        "answer": [
          "逻辑设计",
          "逻辑设计阶段"
        ],
        "answerText": "逻辑设计",
        "analysis": "解析：PPT第16页指出数据库设计分为需求分析、概念设计、逻辑设计和物理设计4个阶段。",
        "page": 16
      },
      {
        "id": "ch3-ppt-s19",
        "type": "single",
        "stem": "需求分析阶段按一定格式整理形成的文档是？",
        "options": [
          "A. 需求说明书",
          "B. 索引文件",
          "C. 存储过程",
          "D. E-R图"
        ],
        "answer": "A",
        "analysis": "解析：PPT第17页指出需求分析的目标是了解用户的数据要求和处理要求，并按一定格式整理形成需求说明书。",
        "page": 17
      },
      {
        "id": "ch3-ppt-s20",
        "type": "single",
        "stem": "概念设计阶段目前最常用的设计方法是？",
        "options": [
          "A. 事务设计方法",
          "B. 实体关系(E-R)方法",
          "C. 规范化方法",
          "D. 索引优化方法"
        ],
        "answer": "B",
        "analysis": "解析：PPT第17页指出实体关系(E-R)的数据库设计方法是目前最常用的方法。",
        "page": 17
      },
      {
        "id": "ch3-ppt-s21",
        "type": "single",
        "stem": "把与DBMS无关的概念数据模型转换成等价的、并为特定DBMS所接受的逻辑模型，属于哪个阶段？",
        "options": [
          "A. 物理设计",
          "B. 概念设计",
          "C. 需求分析",
          "D. 逻辑设计"
        ],
        "answer": "D",
        "analysis": "解析：PPT第18页指出逻辑设计阶段把与DBMS无关的概念数据模型转换成特定DBMS接受的逻辑模型。",
        "page": 18
      },
      {
        "id": "ch3-ppt-s22",
        "type": "single",
        "stem": "设计数据的存储形式和存取路径（如文件结构、索引设计），属于哪个阶段？",
        "options": [
          "A. 概念设计",
          "B. 逻辑设计",
          "C. 物理设计",
          "D. 需求分析"
        ],
        "answer": "C",
        "analysis": "解析：PPT第18页指出物理设计的主要内容是设计数据的存储形式和存取路径，如文件结构、索引设计等。",
        "page": 18
      },
      {
        "id": "ch3-ppt-s23",
        "type": "single",
        "stem": "满足一定条件的关系模式称为？",
        "options": [
          "A. 范式(NF)",
          "B. 索引",
          "C. 主键",
          "D. 视图"
        ],
        "answer": "A",
        "analysis": "解析：PPT第19页指出满足一定条件的关系模式称为范式(Normal Form，NF)。",
        "page": 19
      },
      {
        "id": "ch3-ppt-s24",
        "type": "single",
        "stem": "一个关系内部属性与属性之间的约束关系称为？",
        "options": [
          "A. 数据依赖",
          "B. 参照完整性",
          "C. 实体完整性",
          "D. 存储引擎"
        ],
        "answer": "A",
        "analysis": "解析：PPT第20页指出数据依赖是一个关系内部属性与属性之间的一种约束关系。",
        "page": 20
      },
      {
        "id": "ch3-ppt-s25",
        "type": "single",
        "stem": "用单一关系模式表示学生信息时，出现的问题不包括？",
        "options": [
          "A. 插入异常",
          "B. 更新异常",
          "C. 数据冗余度大",
          "D. 查询速度变慢"
        ],
        "answer": "D",
        "analysis": "解析：PPT第21页指出单一关系模式存在数据冗余度大、更新异常、插入异常和删除异常，未提及查询速度变慢。",
        "page": 21
      },
      {
        "id": "ch3-ppt-s26",
        "type": "single",
        "stem": "第1范式的目标是确保每列的？",
        "options": [
          "A. 完整性",
          "B. 安全性",
          "C. 原子性",
          "D. 唯一性"
        ],
        "answer": "C",
        "analysis": "解析：PPT第22页指出第1范式的目标是确保每列的原子性，即每列都是不可再分的最小数据单元。",
        "page": 22
      },
      {
        "id": "ch3-ppt-b11",
        "type": "blank",
        "stem": "第2范式要求每一个非主属性都要____依赖于码。",
        "answer": [
          "完全函数",
          "完全函数依赖",
          "完全"
        ],
        "answerText": "完全函数",
        "analysis": "解析：PPT第23页指出第2范式要求确保表中每列都和码相关，即每一个非主属性都要完全函数依赖于码。",
        "page": 23
      },
      {
        "id": "ch3-ppt-s27",
        "type": "single",
        "stem": "按第2范式把单一学生关系分解后，选修表包含的属性是？",
        "options": [
          "A. 学生学号、学生姓名、成绩",
          "B. 课程号、课程名称",
          "C. 学生学号、学生姓名、学生性别、电话",
          "D. 学生学号、课程号、成绩"
        ],
        "answer": "D",
        "analysis": "解析：PPT第23页给出分解结果：选修{学生学号，课程号，成绩}。",
        "page": 23
      },
      {
        "id": "ch3-ppt-b12",
        "type": "blank",
        "stem": "第3范式要求表中的每列都和码____相关，而不是间接相关。",
        "answer": [
          "直接",
          "直接相关",
          "直接函数"
        ],
        "answerText": "直接",
        "analysis": "解析：PPT第24页指出第3范式要求确保表中的每列都和码直接相关，而不是间接相关。",
        "page": 24
      },
      {
        "id": "ch3-ppt-s28",
        "type": "single",
        "stem": "除create database外，还可以使用哪个命令创建数据库？",
        "options": [
          "A. create view",
          "B. create schema",
          "C. create index",
          "D. create table"
        ],
        "answer": "B",
        "analysis": "解析：PPT第27页指出使用create database或create schema命令都可以创建数据库。",
        "page": 27
      },
      {
        "id": "ch3-ppt-s29",
        "type": "single",
        "stem": "语句 create database if not exists mysqltest 中，if not exists的作用是？",
        "options": [
          "A. 强制覆盖已有数据库",
          "B. 数据库已存在时不报错",
          "C. 数据库不存在时报错",
          "D. 创建后立即打开数据库"
        ],
        "answer": "B",
        "analysis": "解析：PPT第28页例2使用if not exists创建mysqltest，可避免数据库已存在时出现错误。",
        "page": 28
      },
      {
        "id": "ch3-ppt-b13",
        "type": "blank",
        "stem": "创建数据库时，指定字符集使用的子句是 default ____ charset_name。",
        "answer": [
          "character set",
          "character",
          "CHARACTER SET"
        ],
        "answerText": "character set",
        "analysis": "解析：PPT第27页给出语法[[default]character set charset_name]，用于指定数据库字符集。",
        "page": 27
      },
      {
        "id": "ch3-ppt-s30",
        "type": "single",
        "stem": "例3创建teaching数据库时指定的校对原则是？",
        "options": [
          "A. gb2312_chinese_ci",
          "B. utf8mb4_general_ci",
          "C. utf8mb4_0900_ai_ci",
          "D. utf8mb4_bin"
        ],
        "answer": "C",
        "analysis": "解析：PPT第28页例3中teaching库指定字符集utf8mb4、校对原则utf8mb4_0900_ai_ci。",
        "page": 28
      },
      {
        "id": "ch3-ppt-s31",
        "type": "single",
        "stem": "将某个数据库设为当前默认数据库，应使用？",
        "options": [
          "A. set",
          "B. open",
          "C. use",
          "D. select"
        ],
        "answer": "C",
        "analysis": "解析：PPT第29页指出可以使用USE语句打开一个数据库，使其成为当前默认数据库。",
        "page": 29
      },
      {
        "id": "ch3-ppt-b14",
        "type": "blank",
        "stem": "修改数据库的字符集和校对原则等参数，使用的语句是____。",
        "answer": [
          "alter database",
          "alter database 库名",
          "ALTER DATABASE"
        ],
        "answerText": "alter database",
        "analysis": "解析：PPT第30页给出修改数据库的语法alter {database|schema}，其中alter是修改数据库的命令关键词。",
        "page": 30
      },
      {
        "id": "ch3-ppt-s32",
        "type": "single",
        "stem": "例4将mysqltest库的字符集改为gb2312后，其校对原则改为？",
        "options": [
          "A. gb2312_bin",
          "B. gb2312_chinese_ci",
          "C. utf8mb4_0900_ai_ci",
          "D. gb2312_general_ci"
        ],
        "answer": "B",
        "analysis": "解析：PPT第31页例4将字符集改为gb2312、校对原则改为gb2312_chinese_ci。",
        "page": 31
      },
      {
        "id": "ch3-ppt-b15",
        "type": "blank",
        "stem": "查看数据库的相关信息（如MySQL版本id号、默认字符集），可使用____语句。",
        "answer": [
          "show create database",
          "show create database 库名",
          "SHOW CREATE DATABASE"
        ],
        "answerText": "show create database",
        "analysis": "解析：PPT第32页指出使用show create database可查看数据库的相关信息，如版本id号、默认字符集。",
        "page": 32
      },
      {
        "id": "ch3-ppt-s33",
        "type": "single",
        "stem": "删除已存在数据库使用的语句是？",
        "options": [
          "A. delete database",
          "B. alter database",
          "C. drop table",
          "D. drop database"
        ],
        "answer": "D",
        "analysis": "解析：PPT第33页指出删除数据库的语法为drop database [if exists] db_name。",
        "page": 33
      },
      {
        "id": "ch3-ppt-s34",
        "type": "single",
        "stem": "关于drop database，下列说法正确的是？",
        "options": [
          "A. 只能删除空数据库",
          "B. 只删除库中的表结构，数据保留",
          "C. 会删除该库中所有的表和所有数据，删除前最好备份",
          "D. 删除后原分配的空间不能收回"
        ],
        "answer": "C",
        "analysis": "解析：PPT第33页指出删除数据库会删除该库中所有的表和所有数据，删除前最好存有备份，删除后原空间被收回。",
        "page": 33
      },
      {
        "id": "ch3-ppt-s35",
        "type": "single",
        "stem": "InnoDB共享表空间默认的文件名和初始大小分别是？",
        "options": [
          "A. ibdata1、12M",
          "B. ib_logfile1、12M",
          "C. mysql.ibd、12M",
          "D. ibdata1、8M"
        ],
        "answer": "A",
        "analysis": "解析：PPT第38页指出共享表空间文件位于数据库根目录下，文件名ibdata1，初始大小12M，能自动扩展。",
        "page": 38
      },
      {
        "id": "ch3-ppt-s36",
        "type": "single",
        "stem": "独立表空间中每个表对应的.ibd文件包含的内容是？",
        "options": [
          "A. 只有数据字典元数据",
          "B. 表的数据内容和索引内容",
          "C. 只有表结构定义",
          "D. 只有事务回滚信息"
        ],
        "answer": "B",
        "analysis": "解析：PPT第38页指出独立表空间中每个表都有一个.ibd文件，该文件包括一个表单独的数据内容以及索引内容。",
        "page": 38
      },
      {
        "id": "ch3-ppt-b16",
        "type": "blank",
        "stem": "查看数据库的表空间信息，可使用 show variables like '____';",
        "answer": [
          "InnoDB_data%",
          "innodb_data%",
          "InnoDB_data"
        ],
        "answerText": "InnoDB_data%",
        "analysis": "解析：PPT第39页给出命令 show variables like 'InnoDB_data%'; 用于查看数据库的表空间。",
        "page": 39
      },
      {
        "id": "ch3-ppt-s37",
        "type": "single",
        "stem": "共享表空间的主要缺点是？",
        "options": [
          "A. 分配后不能回缩，大量删除后表空间中会有大量空隙",
          "B. 不能存放索引",
          "C. 不能自动扩展",
          "D. 不能存放事务回滚信息"
        ],
        "answer": "A",
        "analysis": "解析：PPT第40页指出共享表空间分配后不能回缩，大量删除后会有大量空隙，不适合经常删除的统计分析类应用。",
        "page": 40
      },
      {
        "id": "ch3-ppt-s38",
        "type": "single",
        "stem": "对于使用独立表空间的表，哪种操作能自动回收表空间？",
        "options": [
          "A. update",
          "B. delete",
          "C. select",
          "D. drop table"
        ],
        "answer": "D",
        "analysis": "解析：PPT第41页指出独立表空间的Drop table操作能自动回收表空间。",
        "page": 41
      },
      {
        "id": "ch3-ppt-b17",
        "type": "blank",
        "stem": "系统变量InnoDB_file_per_table的值为ON时，代表使用____表空间管理。",
        "answer": [
          "独立",
          "独立表空间",
          "独立表空间管理"
        ],
        "answerText": "独立",
        "analysis": "解析：PPT第42页指出InnoDB_file_per_table的值为ON代表独立表空间管理，OFF代表共享表空间管理。",
        "page": 42
      },
      {
        "id": "ch3-ppt-s39",
        "type": "single",
        "stem": "把共享表空间转换为独立表空间，需要把参数InnoDB_file_per_table设置为？",
        "options": [
          "A. 1",
          "B. OFF",
          "C. NULL",
          "D. 0"
        ],
        "answer": "A",
        "analysis": "解析：PPT第43页指出共享表空间转化为独立表空间需要设置参数InnoDB_file_per_table=1。",
        "page": 43
      },
      {
        "id": "ch3-ppt-s40",
        "type": "single",
        "stem": "下列选项中，不属于列定义 col_name type 之后可跟的选项的是？",
        "options": [
          "A. engine",
          "B. default",
          "C. not null",
          "D. auto_increment"
        ],
        "answer": "A",
        "analysis": "解析：PPT第45页列出列定义可跟not null、default、auto_increment、unique、primary key、comment等，engine是表选项而非列选项。",
        "page": 45
      },
      {
        "id": "ch3-ppt-s41",
        "type": "single",
        "stem": "student表中sex列的数据类型和默认值分别是？",
        "options": [
          "A. enum('男','女')，默认'男'",
          "B. varchar(2)，默认'女'",
          "C. int，默认1",
          "D. char(8)，默认'男'"
        ],
        "answer": "A",
        "analysis": "解析：PPT第46页student表定义中sex enum('男','女') default '男' comment'性别'。",
        "page": 46
      },
      {
        "id": "ch3-ppt-b18",
        "type": "blank",
        "stem": "course表的主键列是____。",
        "answer": [
          "courseno",
          "课程号",
          "courseno列"
        ],
        "answerText": "courseno",
        "analysis": "解析：PPT第47页course表定义末尾为primary key (courseno)，即课程号courseno为主键。",
        "page": 47
      },
      {
        "id": "ch3-ppt-s42",
        "type": "single",
        "stem": "score表的主键由哪两列构成？",
        "options": [
          "A. studentno和daily",
          "B. courseno和final",
          "C. studentno和courseno",
          "D. daily和final"
        ],
        "answer": "C",
        "analysis": "解析：PPT第48页score表的定义为primary key (studentno , courseno)，即由学号和课程号构成复合主键。",
        "page": 48
      },
      {
        "id": "ch3-ppt-b19",
        "type": "blank",
        "stem": "自增主键的计数器持久化到____中，数据库重启时InnoDB据此初始化计数器的内存值。",
        "answer": [
          "重做日志",
          "redo log",
          "重做日志文件"
        ],
        "answerText": "重做日志",
        "analysis": "解析：PPT第51页指出自增主键的计数器持久化到重做日志中，数据库重启时InnoDB根据重做日志初始化计数器内存值。",
        "page": 51
      },
      {
        "id": "ch3-ppt-b20",
        "type": "blank",
        "stem": "auto_increment约束的字段可以是任何____类型（tinyint、smallint、int、bigint等）。",
        "answer": [
          "整数",
          "整型",
          "integer"
        ],
        "answerText": "整数",
        "analysis": "解析：PPT第52页指出auto_increment约束的字段可以是任何整数类型，如tinyint、smallint、int、bigint等。",
        "page": 52
      },
      {
        "id": "ch3-ppt-b21",
        "type": "blank",
        "stem": "sc表中选课时间sc_time的默认值设置为____，表示当前时间。",
        "answer": [
          "now()",
          "NOW()",
          "current_timestamp"
        ],
        "answerText": "now()",
        "analysis": "解析：PPT第52页sc表定义中sc_time timestamp not null default now()，即默认当前时间。",
        "page": 52
      },
      {
        "id": "ch3-ppt-s43",
        "type": "single",
        "stem": "查看当前数据库中已创建的表，应使用？",
        "options": [
          "A. show tables",
          "B. describe",
          "C. show databases",
          "D. show create table"
        ],
        "answer": "A",
        "analysis": "解析：PPT第53页指出数据表创建后可以用show tables命令查询已创建的表的情况。",
        "page": 53
      },
      {
        "id": "ch3-ppt-s44",
        "type": "single",
        "stem": "查看表的基本定义（字段名、数据类型等），应使用？",
        "options": [
          "A. alter",
          "B. describe",
          "C. delete",
          "D. select"
        ],
        "answer": "B",
        "analysis": "解析：PPT第53页指出describe语句可以查看表的基本定义，如describe student。",
        "page": 53
      },
      {
        "id": "ch3-ppt-b22",
        "type": "blank",
        "stem": "能查看表的字段名、数据类型、完整性约束条件，以及默认存储引擎和字符编码的语句是____。",
        "answer": [
          "show create table",
          "show create table 表名",
          "SHOW CREATE TABLE"
        ],
        "answerText": "show create table",
        "analysis": "解析：PPT第54页指出show create table可查看字段名、数据类型、完整性约束条件，还可查看默认存储引擎和字符编码。",
        "page": 54
      },
      {
        "id": "ch3-ppt-b23",
        "type": "blank",
        "stem": "describe student; 可以简写为____ student;",
        "answer": [
          "desc",
          "DESC"
        ],
        "answerText": "desc",
        "analysis": "解析：PPT第53页介绍describe语句，PPT第60页例16中使用其简写形式desc example。",
        "page": 53
      },
      {
        "id": "ch3-ppt-s45",
        "type": "single",
        "stem": "关于修改表，下列说法正确的是？",
        "options": [
          "A. 会影响正在进行的服务",
          "B. 不需要重新加载数据，也不影响正在进行的服务",
          "C. 需要重新加载全部数据",
          "D. 必须先删除原表"
        ],
        "answer": "B",
        "analysis": "解析：PPT第55页指出修改表不需要重新加载数据，也不会影响正在进行的服务。",
        "page": 55
      },
      {
        "id": "ch3-ppt-s46",
        "type": "single",
        "stem": "在student表的Email列后面增加address列，应使用哪个子句指定位置？",
        "options": [
          "A. first",
          "B. before Email",
          "C. after Email",
          "D. last"
        ],
        "answer": "C",
        "analysis": "解析：PPT第56页例12使用alter table student add address varchar(30) not null after Email，after用于指定插入位置。",
        "page": 56
      },
      {
        "id": "ch3-ppt-s47",
        "type": "single",
        "stem": "将表sc改名为se_course，正确的语句是？",
        "options": [
          "A. rename sc to se_course",
          "B. update sc rename se_course",
          "C. alter table sc rename to se_course",
          "D. alter table sc modify se_course"
        ],
        "answer": "C",
        "analysis": "解析：PPT第57页例13使用alter table sc rename to se_course修改表名。",
        "page": 57
      },
      {
        "id": "ch3-ppt-b24",
        "type": "blank",
        "stem": "修改course表type字段的数据类型：alter table course ____ type enum('必修','选修') default '必修';",
        "answer": [
          "modify",
          "MODIFY",
          "modify column"
        ],
        "answerText": "modify",
        "analysis": "解析：PPT第58页例14使用modify修改字段的数据类型。",
        "page": 58
      },
      {
        "id": "ch3-ppt-s48",
        "type": "single",
        "stem": "删除student表中已定义的address字段，应使用？",
        "options": [
          "A. alter table student delete address",
          "B. drop address from student",
          "C. delete address from student",
          "D. alter table student drop address"
        ],
        "answer": "D",
        "analysis": "解析：PPT第59页例15使用alter table student drop address删除字段。",
        "page": 59
      },
      {
        "id": "ch3-ppt-s49",
        "type": "single",
        "stem": "删除数据库中已存在的表，应使用？",
        "options": [
          "A. delete table",
          "B. alter table",
          "C. drop table",
          "D. truncate database"
        ],
        "answer": "C",
        "analysis": "解析：PPT第60页指出MySQL中通过drop table语句来删除表，语法为drop table table_name。",
        "page": 60
      },
      {
        "id": "ch3-ppt-b25",
        "type": "blank",
        "stem": "删除表时，会删除表中的____，因此删除时要特别注意。",
        "answer": [
          "所有数据",
          "全部数据",
          "数据"
        ],
        "answerText": "所有数据",
        "analysis": "解析：PPT第60页指出删除表是指删除数据库中已存在的表，删除表时会删除表中的所有数据。",
        "page": 60
      },
      {
        "id": "ch3-ppt-s50",
        "type": "single",
        "stem": "下列语句中会删除表结构本身的是？",
        "options": [
          "A. update",
          "B. select",
          "C. drop table",
          "D. delete"
        ],
        "answer": "C",
        "analysis": "解析：PPT第60页指出drop table删除表本身及其所有数据；delete只删除表记录，不删除表结构。",
        "page": 60
      },
      {
        "id": "ch3-ppt-b26",
        "type": "blank",
        "stem": "例16中创建example表时，today列的数据类型是____。",
        "answer": [
          "datetime",
          "DATETIME"
        ],
        "answerText": "datetime",
        "analysis": "解析：PPT第60页例16中create table example(today datetime, name char(20))，today列为datetime类型。",
        "page": 60
      },
      {
        "id": "ch3-ppt-s51",
        "type": "single",
        "stem": "临时表最适合的应用场景是？",
        "options": [
          "A. 替代所有永久表",
          "B. 在非常大的表上偶尔运行查询，获得一个小的数据子集",
          "C. 存放系统元数据",
          "D. 长期保存核心业务数据"
        ],
        "answer": "B",
        "analysis": "解析：PPT第61页指出临时表适合在非常大的表上偶尔运行很多查询获得一个小的子集时使用。",
        "page": 61
      },
      {
        "id": "ch3-ppt-s52",
        "type": "single",
        "stem": "创建临时表使用的语句是？",
        "options": [
          "A. create table",
          "B. create view",
          "C. create temp database",
          "D. create temporary table"
        ],
        "answer": "D",
        "analysis": "解析：PPT第61页例中使用create temporary table tmp_emp1创建临时表。",
        "page": 61
      },
      {
        "id": "ch3-ppt-b27",
        "type": "blank",
        "stem": "临时表将在____期间存在，断开时MySQL自动删除表并释放空间。",
        "answer": [
          "连接MySQL",
          "连接",
          "连接数据库"
        ],
        "answerText": "连接MySQL",
        "analysis": "解析：PPT第62页指出临时表将在连接MySQL期间存在，断开时MySQL自动删除表并释放所用的空间。",
        "page": 62
      },
      {
        "id": "ch3-ppt-b28",
        "type": "blank",
        "stem": "show ____ 语句不会列举临时表。",
        "answer": [
          "tables",
          "TABLES"
        ],
        "answerText": "tables",
        "analysis": "解析：PPT第62页说明show tables语句不会列举临时表，且不能用rename重命名临时表。",
        "page": 62
      },
      {
        "id": "ch3-ppt-s53",
        "type": "single",
        "stem": "下列方式中，不能用于向表中输入数据的是？",
        "options": [
          "A. update ... set",
          "B. load data infile",
          "C. insert into",
          "D. replace into"
        ],
        "answer": "A",
        "analysis": "解析：PPT第64页指出常见的有insert into、replace into插入，也可用load data infile装入文本数据；update用于修改数据。",
        "page": 64
      },
      {
        "id": "ch3-ppt-b29",
        "type": "blank",
        "stem": "insert语句中除了values子句，还可以用____子句直接给列赋值。",
        "answer": [
          "set",
          "SET"
        ],
        "answerText": "set",
        "analysis": "解析：PPT第64页给出insert语法，values子句或set col_name={expr|default}两种写法。",
        "page": 64
      },
      {
        "id": "ch3-ppt-b30",
        "type": "blank",
        "stem": "使用insert语句不给出列名时，若某列值为空，则该值必须置为____，否则会出错。",
        "answer": [
          "null",
          "NULL"
        ],
        "answerText": "null",
        "analysis": "解析：PPT第69页指出若表名后不给出列名则values要给出每一列的值，如果列值为空，则值必须置为null。",
        "page": 69
      },
      {
        "id": "ch3-ppt-s54",
        "type": "single",
        "stem": "replace into插入数据时，若表中已有该行数据（按主键或唯一索引判断），则？",
        "options": [
          "A. 自动修改主键后插入",
          "B. 忽略本次插入",
          "C. 先删除该行数据，然后插入新数据",
          "D. 报主键冲突错误"
        ],
        "answer": "C",
        "analysis": "解析：PPT第70页指出replace into发现表中已有此行数据时先删除此行数据，然后插入新的数据。",
        "page": 70
      },
      {
        "id": "ch3-ppt-s55",
        "type": "single",
        "stem": "insert into tablename1 select * from tablename2 这种成批插入方式要求？",
        "options": [
          "A. 两个表必须在同一数据库",
          "B. 两个表主键相同",
          "C. 两个表存储引擎相同",
          "D. 两个表结构相同"
        ],
        "answer": "D",
        "analysis": "解析：PPT第70页指出向表中插入其他表的数据，要求两个表要有相同的结构。",
        "page": 70
      },
      {
        "id": "ch3-ppt-b31",
        "type": "blank",
        "stem": "使用 load data ____ 'filename.txt' into table tablename 可将文本文件中的数据装入表中。",
        "answer": [
          "infile",
          "INFILE",
          "local infile"
        ],
        "answerText": "infile",
        "analysis": "解析：PPT第71页给出load data infile 'filename.txt' into table tablename的语法形式。",
        "page": 71
      },
      {
        "id": "ch3-ppt-s56",
        "type": "single",
        "stem": "使用set子句插入数据的好处是？",
        "options": [
          "A. 可以不按列顺序插入数据",
          "B. 可以跳过主键约束",
          "C. 可以自动创建表",
          "D. 可以自动建立索引"
        ],
        "answer": "A",
        "analysis": "解析：PPT第72页指出用set子句直接赋值时可以不按列顺序插入数据，对允许空值的列可以不插入。",
        "page": 72
      },
      {
        "id": "ch3-ppt-b32",
        "type": "blank",
        "stem": "在MySQL中，存放图片的字段要使用____类型。",
        "answer": [
          "blob",
          "BLOB",
          "mediumblob"
        ],
        "answerText": "blob",
        "analysis": "解析：PPT第73页说明存放图片的字段要使用blob类型，blob是专门存储二进制文件的类型。",
        "page": 73
      },
      {
        "id": "ch3-ppt-s57",
        "type": "single",
        "stem": "直接插入图片本身（而不是图片路径）应使用哪个函数？",
        "options": [
          "A. insert_file()",
          "B. blob()",
          "C. load_file()",
          "D. load data()"
        ],
        "answer": "C",
        "analysis": "解析：PPT第73页指出也可以直接插入图片本身，只要用load_file()函数即可。",
        "page": 73
      },
      {
        "id": "ch3-ppt-s58",
        "type": "single",
        "stem": "修改表中数据使用的语句是？",
        "options": [
          "A. insert",
          "B. alter",
          "C. update",
          "D. delete"
        ],
        "answer": "C",
        "analysis": "解析：PPT第75页指出用update...set...命令可以修改一个表的数据。",
        "page": 75
      },
      {
        "id": "ch3-ppt-s59",
        "type": "single",
        "stem": "update语句中若不设定where子句，则？",
        "options": [
          "A. 不更新任何行",
          "B. 只更新第一行",
          "C. 报语法错误",
          "D. 更新表中所有行"
        ],
        "answer": "D",
        "analysis": "解析：PPT第75页指出set子句根据where条件修改数据行，若语句中不设定where子句，则更新所有行。",
        "page": 75
      },
      {
        "id": "ch3-ppt-b33",
        "type": "blank",
        "stem": "update语句的set子句中要同时修改多个列值时，各列之间用____隔开。",
        "answer": [
          "逗号",
          ",",
          "，"
        ],
        "answerText": "逗号",
        "analysis": "解析：PPT第75页指出expr可以是常量、变量或表达式，可同时修改多个列值，中间用逗号隔开。",
        "page": 75
      },
      {
        "id": "ch3-ppt-s60",
        "type": "single",
        "stem": "将学号20112111208、课程号c06108的平时成绩daily修改为87分，正确的语句是？",
        "options": [
          "A. alter table score set daily=87 where studentno='20112111208';",
          "B. update score set 87=daily where courseno='c06108';",
          "C. update score daily=87 where studentno='20112111208' && courseno='c06108';",
          "D. update score set daily=87 where studentno='20112111208' && courseno='c06108';"
        ],
        "answer": "D",
        "analysis": "解析：PPT第76页例25使用update score set daily=87 where studentno='20112111208' && courseno='c06108'。",
        "page": 76
      },
      {
        "id": "ch3-ppt-s61",
        "type": "single",
        "stem": "将入学成绩高于700分的entrance增加5%，正确的赋值表达式是？",
        "options": [
          "A. entrance=entrance*5",
          "B. entrance=entrance*1.05",
          "C. entrance=entrance+5",
          "D. entrance=entrance/1.05"
        ],
        "answer": "B",
        "analysis": "解析：PPT第77页例26中set entrance=entrance*1.05 where entrance>700，即增加5%。",
        "page": 77
      },
      {
        "id": "ch3-ppt-s62",
        "type": "single",
        "stem": "删除student01表中入学成绩低于750分的记录，正确的语句是？",
        "options": [
          "A. update student01 where entrance<750;",
          "B. delete student01 where entrance<750;",
          "C. drop from student01 where entrance<750;",
          "D. delete from student01 where entrance<750;"
        ],
        "answer": "D",
        "analysis": "解析：PPT第79页例27使用delete from student01 where entrance<750删除符合条件的记录。",
        "page": 79
      },
      {
        "id": "ch3-ppt-b34",
        "type": "blank",
        "stem": "删除student01表中入学成绩最低的2行记录：delete from student01 order by entrance ____ 2;",
        "answer": [
          "limit",
          "LIMIT"
        ],
        "answerText": "limit",
        "analysis": "解析：PPT第79页例28使用delete from student01 order by entrance limit 2删除最低的2行。",
        "page": 79
      },
      {
        "id": "ch3-ppt-s63",
        "type": "single",
        "stem": "delete语句中可以配合使用哪两个子句实现按顺序删除指定行数？",
        "options": [
          "A. order by和limit",
          "B. add和drop",
          "C. where和set",
          "D. group by和having"
        ],
        "answer": "A",
        "analysis": "解析：PPT第78页delete语法中可跟order by子句和limit row_count，实现按排序限制删除行数。",
        "page": 78
      },
      {
        "id": "ch3-ppt-s64",
        "type": "single",
        "stem": "null（允许空值）表示？",
        "options": [
          "A. 数值未确定",
          "B. 数值为0",
          "C. 数值为空字符串",
          "D. 数值为负数"
        ],
        "answer": "A",
        "analysis": "解析：PPT第82页指出null（允许空值）表示数值未确定。",
        "page": 82
      },
      {
        "id": "ch3-ppt-s65",
        "type": "single",
        "stem": "not null表示？",
        "options": [
          "A. 数据列不允许修改",
          "B. 数据列中不允许空值出现",
          "C. 数据列必须有默认值",
          "D. 数据列必须为0"
        ],
        "answer": "B",
        "analysis": "解析：PPT第82页指出not null（不允许空值）表示数据列中不允许空值出现，确保数据列中必须包含有意义的值。",
        "page": 82
      },
      {
        "id": "ch3-ppt-b35",
        "type": "blank",
        "stem": "定义表结构时，每个字段都要有一个是否为____值的选择，这就是对数据表中数据提出的约束条件。",
        "answer": [
          "null",
          "NULL",
          "空"
        ],
        "answerText": "null",
        "analysis": "解析：PPT第82页指出每个字段都要有一个是否为null值的选择，这就是对数据提出的约束条件。",
        "page": 82
      },
      {
        "id": "ch3-ppt-s66",
        "type": "single",
        "stem": "关于非空约束，下列说法正确的是？",
        "options": [
          "A. 与唯一性约束等价",
          "B. 只能定义在表级",
          "C. 可以确保数据列中必须包含有意义的值",
          "D. 允许该列取null值"
        ],
        "answer": "C",
        "analysis": "解析：PPT第82页指出not null可确保数据列中必须包含有意义的值；非空约束在字段定义时选择，与唯一性不同。",
        "page": 82
      },
      {
        "id": "ch3-ppt-s67",
        "type": "single",
        "stem": "设置主键的主要作用是？",
        "options": [
          "A. 帮助MySQL以最快的速度查找表中的指定信息",
          "B. 对表中的数据加密",
          "C. 自动备份表中的数据",
          "D. 减少表占用的磁盘空间"
        ],
        "answer": "A",
        "analysis": "解析：PPT第83页指出设置主键主要是可以帮助MySQL以最快的速度查找到表中的指定信息。",
        "page": 83
      },
      {
        "id": "ch3-ppt-b36",
        "type": "blank",
        "stem": "设置主键通常有两种方式：表的完整性约束和____的完整性约束。",
        "answer": [
          "列",
          "列级",
          "列的"
        ],
        "answerText": "列",
        "analysis": "解析：PPT第83页指出设置主键通常有两种方式：表的完整性约束和列的完整性约束。",
        "page": 83
      },
      {
        "id": "ch3-ppt-s68",
        "type": "single",
        "stem": "当表中的主键为复合主键时，只能定义为？",
        "options": [
          "A. 检查约束",
          "B. 列级完整性约束",
          "C. 表级完整性约束",
          "D. 唯一性约束"
        ],
        "answer": "C",
        "analysis": "解析：PPT第84页说明主键为单一字段时可用表级或列级约束，复合主键只能定义为表的完整性约束。",
        "page": 84
      },
      {
        "id": "ch3-ppt-s69",
        "type": "single",
        "stem": "courseno char(6) not null primary key 这种写法属于？",
        "options": [
          "A. 列级完整性约束",
          "B. 检查约束",
          "C. 表级完整性约束",
          "D. 外键约束"
        ],
        "answer": "A",
        "analysis": "解析：PPT第84页指出若在列定义时加上关键字primary key，就可以定义列的完整性约束主键。",
        "page": 84
      },
      {
        "id": "ch3-ppt-s70",
        "type": "single",
        "stem": "修改表的主键时，正确的做法是？",
        "options": [
          "A. 直接add primary key，无需其他操作",
          "B. 先drop primary key，再add primary key",
          "C. 用modify primary key修改",
          "D. 必须先删除整张表"
        ],
        "answer": "B",
        "analysis": "解析：PPT第86页例30先用alter table student02 drop primary key，再add primary key (studentno)修改主键。",
        "page": 86
      },
      {
        "id": "ch3-ppt-s71",
        "type": "single",
        "stem": "外键的作用是？",
        "options": [
          "A. 建立子表与其父表的关联关系，保证子表与父表关联的数据一致性",
          "B. 限制列的取值范围",
          "C. 加快表的查询速度",
          "D. 为表自动生成序列编码"
        ],
        "answer": "A",
        "analysis": "解析：PPT第87页指出外键的作用是建立子表与其父表的关联关系，保证子表与父表关联的数据一致性。",
        "page": 87
      },
      {
        "id": "ch3-ppt-s72",
        "type": "single",
        "stem": "下列不属于设置外键原则的是？",
        "options": [
          "A. 必须依赖于数据库中已存在的父表的主键",
          "B. 父表必须已经存在",
          "C. 外键列的值必须唯一",
          "D. 外键可以为空值"
        ],
        "answer": "C",
        "analysis": "解析：PPT第87页给出的原则是必须依赖已存在的父表主键、外键可以为空值；并未要求外键列唯一。",
        "page": 87
      },
      {
        "id": "ch3-ppt-b37",
        "type": "blank",
        "stem": "外键声明中外键列参照父表列的写法是 foreign key(col_name) ____ table_name(col_name)。",
        "answer": [
          "references",
          "REFERENCES"
        ],
        "answerText": "references",
        "analysis": "解析：PPT第87页给出外键语法：foreign key (col_name...) references table_name(col_name...)。",
        "page": 87
      },
      {
        "id": "ch3-ppt-s73",
        "type": "single",
        "stem": "为已有表score添加外键约束，使用的语句是？",
        "options": [
          "A. update score set foreign key(studentno)",
          "B. create foreign key fk_st_score on score(studentno)",
          "C. add foreign key on score(studentno)",
          "D. alter table score add constraint fk_st_score foreign key(studentno) references student(studentno)"
        ],
        "answer": "D",
        "analysis": "解析：PPT第88页例31使用alter table score add constraint fk_st_score foreign key(studentno) references student(studentno)。",
        "page": 88
      },
      {
        "id": "ch3-ppt-b38",
        "type": "blank",
        "stem": "on delete ____ 表示级联删除，即父表删除记录时子表对应记录也随之删除。",
        "answer": [
          "cascade",
          "CASCADE"
        ],
        "answerText": "cascade",
        "analysis": "解析：PPT第89页例32在建表时指定on update cascade、on delete cascade，实现级联更新和级联删除。",
        "page": 89
      },
      {
        "id": "ch3-ppt-s74",
        "type": "single",
        "stem": "对数据表的列限制数值范围，可以使用哪种完整性约束？",
        "options": [
          "A. not null",
          "B. unique",
          "C. primary key",
          "D. check"
        ],
        "answer": "D",
        "analysis": "解析：PPT第90页指出针对数据表的列限制数值范围的约束，可以使用check完整性约束来指定。",
        "page": 90
      },
      {
        "id": "ch3-ppt-s75",
        "type": "single",
        "stem": "check约束可以在创建表时定义为？",
        "options": [
          "A. 只能定义为列完整性约束",
          "B. 只能通过alter table添加",
          "C. 既可定义为列完整性约束，也可定义为表完整性约束",
          "D. 只能定义为表完整性约束"
        ],
        "answer": "C",
        "analysis": "解析：PPT第90页指出check约束在创建表时定义，可以定义为列完整性约束，也可以定义为表完整性约束。",
        "page": 90
      },
      {
        "id": "ch3-ppt-b39",
        "type": "blank",
        "stem": "为birthdate列添加检查约束：alter table student02 add constraint ch_stu_birth ____(birthdate>'2000-12-31');",
        "answer": [
          "check",
          "CHECK"
        ],
        "answerText": "check",
        "analysis": "解析：PPT第91页例33使用add constraint ch_stu_birth check(birthdate>'2000-12-31')添加检查约束。",
        "page": 91
      },
      {
        "id": "ch3-ppt-s76",
        "type": "single",
        "stem": "例33中对student02表birthdate列的check约束要求是？",
        "options": [
          "A. 出生日期不能为空",
          "B. 出生日期等于2000-12-31",
          "C. 出生日期小于2000-12-31",
          "D. 出生日期大于2000-12-31"
        ],
        "answer": "D",
        "analysis": "解析：PPT第91页例33要求出生日期必须大于2000年12月31日，即check(birthdate>'2000-12-31')。",
        "page": 91
      },
      {
        "id": "ch3-ppt-s77",
        "type": "single",
        "stem": "唯一性约束的作用是？",
        "options": [
          "A. 保证所有记录中该字段的值不能重复出现",
          "B. 保证该字段值自动增长",
          "C. 保证该字段的值不能为空",
          "D. 保证该字段成为主键"
        ],
        "answer": "A",
        "analysis": "解析：PPT第92页指出唯一性是指所有记录中该字段的值不能重复出现，unique约束保证这一点。",
        "page": 92
      },
      {
        "id": "ch3-ppt-b40",
        "type": "blank",
        "stem": "主键列值不允许为null，而unique字段的值可取____。",
        "answer": [
          "null",
          "NULL",
          "空值"
        ],
        "answerText": "null",
        "analysis": "解析：PPT第92页指出主键列值不允许为null，而unique字段的值可取null，但必须用null或not null声明。",
        "page": 92
      },
      {
        "id": "ch3-ppt-s78",
        "type": "single",
        "stem": "创建unique约束时，系统会自动产生？",
        "options": [
          "A. primary key索引",
          "B. unique索引",
          "C. 触发器",
          "D. 外键"
        ],
        "answer": "B",
        "analysis": "解析：PPT第92页指出创建primary key约束时系统自动产生primary key索引，创建unique约束时自动产生unique索引。",
        "page": 92
      },
      {
        "id": "ch3-ppt-s79",
        "type": "single",
        "stem": "对student表Email列添加唯一约束后，插入重复Email会出现的错误是？",
        "options": [
          "A. ERROR 1062 重复键错误",
          "B. ERROR 1064 语法错误",
          "C. ERROR 1045 访问被拒绝",
          "D. ERROR 1146 表不存在"
        ],
        "answer": "A",
        "analysis": "解析：PPT第93页例34插入重复han@163.com时提示ERROR 1062 Duplicate entry，违反唯一性约束。",
        "page": 93
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
            "desc": "语法为window_function_name(expression) over(...)，over内可跟partition、order by和frame子句。",
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
          },
          {
            "term": "应用注意",
            "desc": "交叉连接在实际过程中用得很少。",
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
      },
      {
        "id": "ch4-ppt-s09",
        "type": "single",
        "stem": "select语句的基本语法格式中，用于限制查询结果数量的子句是？",
        "options": [
          "A. where",
          "B. group by",
          "C. having",
          "D. limit"
        ],
        "answer": "D",
        "analysis": "解析：PPT第4页给出的语法格式为 select … from … [group by …][having …][order by …][limit count]，其中 limit 用于限制返回的记录数量。",
        "page": 4
      },
      {
        "id": "ch4-ppt-s10",
        "type": "single",
        "stem": "查询表中的指定列时，select后面多个列名之间应使用什么分隔？",
        "options": [
          "A. 冒号",
          "B. 分号",
          "C. 逗号",
          "D. 空格"
        ],
        "answer": "C",
        "analysis": "解析：PPT第6页指出对表中多列进行查询，只要在select后面指定要查询的列名，多列之间用“，”分隔。",
        "page": 6
      },
      {
        "id": "ch4-ppt-b07",
        "type": "blank",
        "stem": "进行多表查询，主要采用多表连接或____的方式，也可以在where子句中使用连接运算来确定表之间的联系。",
        "answer": [
          "子查询",
          "subquery",
          "嵌套查询"
        ],
        "answerText": "子查询",
        "analysis": "解析：PPT第7页指出多表查询主要采用多表连接或子查询的方式，也可通过where子句中的连接运算确定表间联系。",
        "page": 7
      },
      {
        "id": "ch4-ppt-s11",
        "type": "single",
        "stem": "在select……from语句中，指定数据源的子句是？",
        "options": [
          "A. where",
          "B. order by",
          "C. select",
          "D. from"
        ],
        "answer": "D",
        "analysis": "解析：PPT第9页指出select子句的主要功能是输出字段或表达式的值，from子句的主要功能是指定数据源，两者在表查询时都是必选项。",
        "page": 9
      },
      {
        "id": "ch4-ppt-s12",
        "type": "single",
        "stem": "为select子句中的输出项取别名，正确的语法格式是？",
        "options": [
          "A. select 别名 to 项的原名",
          "B. select 别名 as 项的原名",
          "C. select 项的原名 as 别名",
          "D. select 项的原名 like 别名"
        ],
        "answer": "C",
        "analysis": "解析：PPT第9页给出的语法为“select 项的原名 as 别名”，用于为输出字段或表达式取别名以增加可读性。",
        "page": 9
      },
      {
        "id": "ch4-ppt-b08",
        "type": "blank",
        "stem": "例3中用 year(now())-year(birthdate) 计算得到的是学生的____。",
        "answer": [
          "年龄",
          "岁数"
        ],
        "answerText": "年龄",
        "analysis": "解析：PPT第10页例3查询2002年以后出生的学生的学号、姓名、电话和年龄，其中 year(now())-year(birthdate) 即用当前年份减去出生年份得到年龄。",
        "page": 10
      },
      {
        "id": "ch4-ppt-s13",
        "type": "single",
        "stem": "使用where子句设定查询条件时，需要借助什么来确定查询条件？",
        "options": [
          "A. 通配符",
          "B. 排序项",
          "C. 聚合函数",
          "D. 比较运算符"
        ],
        "answer": "D",
        "analysis": "解析：PPT第13页指出设定查询条件应用的是where子句，使用where子句时需要使用一些比较运算符来确定查询条件。",
        "page": 13
      },
      {
        "id": "ch4-ppt-s14",
        "type": "single",
        "stem": "关于in关键字，下列说法正确的是？",
        "options": [
          "A. 相当于用or连接两个比较条件",
          "B. 只能用于数值型字段",
          "C. 不能与not连用",
          "D. 相当于用and连接两个比较条件"
        ],
        "answer": "A",
        "analysis": "解析：PPT第14页指出使用in搜索条件实际上相当于用or连接两个比较条件，并可用not in查询不在某范围内的记录。",
        "page": 14
      },
      {
        "id": "ch4-ppt-s15",
        "type": "single",
        "stem": "条件 daily between 80 and 95 与下列哪个条件等价？",
        "options": [
          "A. daily>80 or daily<95",
          "B. daily>80 and daily<95",
          "C. daily>=80 and daily<=95",
          "D. daily>=80 or daily<=95"
        ],
        "answer": "C",
        "analysis": "解析：PPT第15页指出between搜索条件相当于用and连接两个比较条件，且边界值是符合条件的，故等价于 daily>=80 and daily<=95。",
        "page": 15
      },
      {
        "id": "ch4-ppt-b09",
        "type": "blank",
        "stem": "使用between搜索条件相当于用____连接两个比较条件，并且边界值是符合条件的。",
        "answer": [
          "and",
          "AND"
        ],
        "answerText": "and",
        "analysis": "解析：PPT第15页指出使用between搜索条件相当于用and连接两个比较条件，边界值符合条件。",
        "page": 15
      },
      {
        "id": "ch4-ppt-s16",
        "type": "single",
        "stem": "要查询的字符串本身含有通配符时，用来对通配符进行转义的关键字是？",
        "options": [
          "A. like",
          "B. regexp",
          "C. distinct",
          "D. escape"
        ],
        "answer": "D",
        "analysis": "解析：PPT第16页指出如果要查询的字符串本身就含有通配符，需要用ESCAPE关键字对通配符进行转义，如 like '%/_%' escape '/'。",
        "page": 16
      },
      {
        "id": "ch4-ppt-s17",
        "type": "single",
        "stem": "在where子句中判断某列取值是否为空值，正确的写法是？",
        "options": [
          "A. 字段 is null",
          "B. 字段 like null",
          "C. 字段=null",
          "D. 字段<>null"
        ],
        "answer": "A",
        "analysis": "解析：PPT第18页指出空值要表示为“is null”或“is not null”，写成“字段=null”或“字段<>null”会被直接处理为null值并按false处理。",
        "page": 18
      },
      {
        "id": "ch4-ppt-b10",
        "type": "blank",
        "stem": "利用where子句指定行时，条件表达式中的字符型和日期类型值要放到____内，数值类型的值直接出现在表达式中。",
        "answer": [
          "单引号",
          "'",
          "单引号'"
        ],
        "answerText": "单引号",
        "analysis": "解析：PPT第20页指出and多条件查询中，字符型和日期类型值要放到单引号内，数值类型值直接出现。",
        "page": 20
      },
      {
        "id": "ch4-ppt-s18",
        "type": "single",
        "stem": "关于带or的多条件查询，下列说法正确的是？",
        "options": [
          "A. 必须所有条件都满足，记录才会被查询出来",
          "B. 只要满足其中一个条件，记录就会被查询出来",
          "C. or只能连接两个条件表达式",
          "D. or不能与and同时使用"
        ],
        "answer": "B",
        "analysis": "解析：PPT第21页指出带or的多条件查询只要符合多条件中的一个，记录就会被搜索出来；or也可以连接多个条件表达式。",
        "page": 21
      },
      {
        "id": "ch4-ppt-s19",
        "type": "single",
        "stem": "对含有null值的列按升序排列，null值将出现在结果集的什么位置？",
        "options": [
          "A. 随机位置",
          "B. 不显示",
          "C. 最前面",
          "D. 最后面"
        ],
        "answer": "C",
        "analysis": "解析：PPT第22页指出对含null值的列排序时，按升序排列null值出现在最前面，按降序排列null值出现在最后。",
        "page": 22
      },
      {
        "id": "ch4-ppt-b11",
        "type": "blank",
        "stem": "order by子句包含的列____（一定/不一定）出现在选择列表中。",
        "answer": [
          "不一定",
          "不一定要",
          "不必"
        ],
        "answerText": "不一定",
        "analysis": "解析：PPT第22页第（2）条指出order by子句包含的列并不一定出现在选择列表中。",
        "page": 22
      },
      {
        "id": "ch4-ppt-b12",
        "type": "blank",
        "stem": "order by子句不可以使用____、ntext或image类型的列进行排序。",
        "answer": [
          "text",
          "TEXT",
          "文本"
        ],
        "answerText": "text",
        "analysis": "解析：PPT第22页第（4）条指出order by子句不可以使用text、ntext或image类型的列。",
        "page": 22
      },
      {
        "id": "ch4-ppt-b13",
        "type": "blank",
        "stem": "order by courseno, daily*0.2+final*0.8 desc 表示先按课程号升序排列，课程号相同时再按总评成绩____排列。",
        "answer": [
          "降序",
          "desc",
          "DESC"
        ],
        "answerText": "降序",
        "analysis": "解析：PPT第24页例13先按课程号升序、再按总评成绩降序排列，第二个排序项后带desc即为降序。",
        "page": 24
      },
      {
        "id": "ch4-ppt-s20",
        "type": "single",
        "stem": "limit子句的主要作用是？",
        "options": [
          "A. 对结果集分组",
          "B. 去掉重复行",
          "C. 对结果集排序",
          "D. 限制查询结果的数量"
        ],
        "answer": "D",
        "analysis": "解析：PPT第25页指出limit是用来限制查询结果的数量的子句，可指定从哪条记录开始显示以及一共显示多少条记录。",
        "page": 25
      },
      {
        "id": "ch4-ppt-s21",
        "type": "single",
        "stem": "limit子句的两个参数中，参数1表示的是？",
        "options": [
          "A. 开始读取的第1条记录的编号",
          "B. 排序的列号",
          "C. 分组的个数",
          "D. 要查询记录的个数"
        ],
        "answer": "A",
        "analysis": "解析：PPT第25页指出参数1是开始读取的第1条记录的编号，参数2是要查询记录的个数。",
        "page": 25
      },
      {
        "id": "ch4-ppt-b14",
        "type": "blank",
        "stem": "使用limit时要注意，在总查询结果中第1条记录的编号为____。",
        "answer": [
          "0",
          "零"
        ],
        "answerText": "0",
        "analysis": "解析：PPT第25页特别提示：在总查询结果中，第1条记录编号为0。",
        "page": 25
      },
      {
        "id": "ch4-ppt-s22",
        "type": "single",
        "stem": "select * from score where final>85 order by daily asc limit 2,5 的含义是？",
        "options": [
          "A. 只查询前5条中的第2条",
          "B. 从编号2开始查询5条记录",
          "C. 查询第2条到第5条共4条记录",
          "D. 从编号5开始查询2条记录"
        ],
        "answer": "B",
        "analysis": "解析：PPT第26页例15从编号2开始查询5条记录，limit的两个参数分别是起始编号和记录个数。",
        "page": 26
      },
      {
        "id": "ch4-ppt-s23",
        "type": "single",
        "stem": "group by关键字通常需要与什么一起使用？",
        "options": [
          "A. limit子句",
          "B. union操作符",
          "C. 聚合函数",
          "D. order by子句"
        ],
        "answer": "C",
        "analysis": "解析：PPT第28页指出group by关键字通常需要与聚合函数一起使用。",
        "page": 28
      },
      {
        "id": "ch4-ppt-b15",
        "type": "blank",
        "stem": "没有where子句的count(*)是经过内部____的，能够快速返回表中所有的记录总数。",
        "answer": [
          "优化",
          "优化处理"
        ],
        "answerText": "优化",
        "analysis": "解析：PPT第29页指出没有where子句的count(*)经过内部优化，能快速返回表中所有记录总数。",
        "page": 29
      },
      {
        "id": "ch4-ppt-s24",
        "type": "single",
        "stem": "关于count()函数，下列说法正确的是？",
        "options": [
          "A. count()不能用于统计行数",
          "B. count(*)只统计非null值的行",
          "C. count(列名)统计包含null值的所有行",
          "D. count(*)统计所有行，包含null值的行"
        ],
        "answer": "D",
        "analysis": "解析：PPT第29页指出对除“*”以外的参数返回非null值的行数，对参数“*”返回所有行的数目，包含null值的行。",
        "page": 29
      },
      {
        "id": "ch4-ppt-s25",
        "type": "single",
        "stem": "要求出表中某个字段取值的总和，应使用哪个函数？",
        "options": [
          "A. sum()",
          "B. avg()",
          "C. max()",
          "D. count()"
        ],
        "answer": "A",
        "analysis": "解析：PPT第30页指出sum()函数可以求出表中某个字段取值的总和，avg()求平均值。",
        "page": 30
      },
      {
        "id": "ch4-ppt-s26",
        "type": "single",
        "stem": "要查询某门课程期末最高分与最低分之差，正确的表达式是？",
        "options": [
          "A. max(final)+min(final)",
          "B. max(final)-min(final)",
          "C. avg(final)-min(final)",
          "D. count(final)-min(final)"
        ],
        "answer": "B",
        "analysis": "解析：PPT第31页例18用 max(final)-min(final) as 分差 求最高分与最低分之间相差的分数。",
        "page": 31
      },
      {
        "id": "ch4-ppt-b16",
        "type": "blank",
        "stem": "重新设置sql_mode时，需要去掉的模式是 ONLY_FULL_GROUP_BY，即把该项从sql_mode取值中____。",
        "answer": [
          "删除",
          "去掉",
          "移除"
        ],
        "answerText": "删除",
        "analysis": "解析：PPT第32页指出可重新设置sql_mode的值，去掉ONLY_FULL_GROUP_BY，再给出新的取值列表。",
        "page": 32
      },
      {
        "id": "ch4-ppt-s27",
        "type": "single",
        "stem": "group by子句的作用是？",
        "options": [
          "A. 合并多个结果集",
          "B. 对查询结果排序",
          "C. 将查询结果按属性列或属性列组合在行的方向上进行分组",
          "D. 限制返回记录的数量"
        ],
        "answer": "C",
        "analysis": "解析：PPT第33页指出group by子句可以将查询结果按属性列或属性列组合在行的方向上进行分组，每组在这些列上具有相同的值。",
        "page": 33
      },
      {
        "id": "ch4-ppt-s28",
        "type": "single",
        "stem": "使用group by子句时，出现在select列表中的每一列必须？",
        "options": [
          "A. 都使用聚合函数",
          "B. 都取别名",
          "C. 都是数值类型",
          "D. 同时出现在group by子句中"
        ],
        "answer": "D",
        "analysis": "解析：PPT第33页指出出现在查询的select列表中的每一列都必须同时出现在group by子句中。",
        "page": 33
      },
      {
        "id": "ch4-ppt-b17",
        "type": "blank",
        "stem": "单独使用group by关键字时，查询结果只显示每组的____条记录。",
        "answer": [
          "一",
          "1",
          "一条"
        ],
        "answerText": "一",
        "analysis": "解析：PPT第33页指出单独使用group by关键字，查询结果只显示每组的一条记录。",
        "page": 33
      },
      {
        "id": "ch4-ppt-s29",
        "type": "single",
        "stem": "group by与group_concat()函数一起使用时，可以实现什么效果？",
        "options": [
          "A. 将每个组中的所有字段值都显示出来",
          "B. 统计每个组的行数",
          "C. 求每组字段的最大值",
          "D. 删除重复的组"
        ],
        "answer": "A",
        "analysis": "解析：PPT第35页指出group by与group_concat()函数一起使用，可以将每个组中的所有字段值都显示出来，如查看选学某门课的学生学号。",
        "page": 35
      },
      {
        "id": "ch4-ppt-s30",
        "type": "single",
        "stem": "关于having子句，下列说法正确的是？",
        "options": [
          "A. 必须与order by一起使用",
          "B. 指定在应用where子句筛选后要进一步应用的筛选",
          "C. 只能用于单表查询",
          "D. 与where完全等价，可随意替换"
        ],
        "answer": "B",
        "analysis": "解析：PPT第36页指出having子句通常与group by结合使用，指定在应用where子句的筛选后要进一步应用的筛选。",
        "page": 36
      },
      {
        "id": "ch4-ppt-b18",
        "type": "blank",
        "stem": "要在分组统计数据的基础上再进行相同的总体统计，应在group by子句后加上 with ____。",
        "answer": [
          "rollup",
          "ROLLUP"
        ],
        "answerText": "rollup",
        "analysis": "解析：PPT第38页指出with rollup可以在分组的统计数据基础上再进行相同的总体统计，如既求每门课平均值又求全部成绩平均值。",
        "page": 38
      },
      {
        "id": "ch4-ppt-s31",
        "type": "single",
        "stem": "按照功能划分，MySQL 8.0支持的窗口函数可分为几类？",
        "options": [
          "A. 3类",
          "B. 4类",
          "C. 5类",
          "D. 6类"
        ],
        "answer": "C",
        "analysis": "解析：PPT第40页指出按照功能划分，可以把MySQL8.0支持的窗口函数分为5类。",
        "page": 40
      },
      {
        "id": "ch4-ppt-s32",
        "type": "single",
        "stem": "窗口函数的一般格式是？",
        "options": [
          "A. window_function_name(expression) group by(...)",
          "B. window_function_name(expression) join(...)",
          "C. window_function_name(expression) having(...)",
          "D. window_function_name(expression) over([partition_defintion] [order_definition] [frame_definition])"
        ],
        "answer": "D",
        "analysis": "解析：PPT第41页给出窗口函数一般格式：window_function_name(expression) over([partition_defintion] [order_definition] [frame_definition])。",
        "page": 41
      },
      {
        "id": "ch4-ppt-s33",
        "type": "single",
        "stem": "窗口函数中，用来指定函数执行的窗口范围的关键字是？",
        "options": [
          "A. over",
          "B. partition",
          "C. frame",
          "D. window"
        ],
        "answer": "A",
        "analysis": "解析：PPT第41页指出over是关键字，用来指定函数执行的窗口范围，括号中什么都不写表示窗口包含满足where条件的所有行。",
        "page": 41
      },
      {
        "id": "ch4-ppt-b19",
        "type": "blank",
        "stem": "窗口函数中over后面括号内什么都不写，表示窗口包含满足____条件的所有行，函数基于所有行进行计算。",
        "answer": [
          "where",
          "WHERE"
        ],
        "answerText": "where",
        "analysis": "解析：PPT第41页指出over括号中什么都不写，则表示窗口包含满足where条件的所有行。",
        "page": 41
      },
      {
        "id": "ch4-ppt-s34",
        "type": "single",
        "stem": "窗口函数中partition子句的作用是？",
        "options": [
          "A. 合并多个分组",
          "B. 指定窗口按哪些字段分组，窗口函数在不同分组上分别执行",
          "C. 对结果集排序",
          "D. 限制分组的数量"
        ],
        "answer": "B",
        "analysis": "解析：PPT第41页指出partition子句指定窗口按照哪些字段进行分组，窗口函数在不同的分组上分别执行。",
        "page": 41
      },
      {
        "id": "ch4-ppt-b20",
        "type": "blank",
        "stem": "窗口函数中frame是当前分区的一个子集，用来定义子集的规则，通常用来作为____窗口使用。",
        "answer": [
          "滑动",
          "滑动窗口"
        ],
        "answerText": "滑动",
        "analysis": "解析：PPT第41页指出frame是当前分区的一个子集，其子句用来定义子集的规则，通常用来作为滑动窗口使用。",
        "page": 41
      },
      {
        "id": "ch4-ppt-s35",
        "type": "single",
        "stem": "select *, rank() over w as 'rank' from score window w as (order by final) 中rank()输出的是什么？",
        "options": [
          "A. 每门课的平均分",
          "B. 记录的行号",
          "C. 按final排序后的序号",
          "D. 每名学生的总分"
        ],
        "answer": "C",
        "analysis": "解析：PPT第42页例23利用rank()函数输出按照final排序的记录行序数值，窗口w定义为 order by final。",
        "page": 42
      },
      {
        "id": "ch4-ppt-b21",
        "type": "blank",
        "stem": "例26中 lag(studentno,3) over ww2 用于输出每行数据的前____行的学号。",
        "answer": [
          "3",
          "三"
        ],
        "answerText": "3",
        "analysis": "解析：PPT第45页例26利用lag()输出每行数据的前3行的学号，lag的第二个参数3表示偏移3行。",
        "page": 45
      },
      {
        "id": "ch4-ppt-s36",
        "type": "single",
        "stem": "要在数据库中完成复杂的查询，必须怎么做？",
        "options": [
          "A. 只使用子查询",
          "B. 先为所有表建立索引",
          "C. 只查询一个表",
          "D. 将两个或两个以上的表连接起来"
        ],
        "answer": "D",
        "analysis": "解析：PPT第46页指出要在数据库中完成复杂的查询，必须将两个或两个以上的表连接起来。",
        "page": 46
      },
      {
        "id": "ch4-ppt-b22",
        "type": "blank",
        "stem": "连接条件可在____或where子句中指定，并与where、having搜索条件组合控制选定的行。",
        "answer": [
          "from",
          "FROM"
        ],
        "answerText": "from",
        "analysis": "解析：PPT第46页指出连接条件可在from或where子句中指定。",
        "page": 46
      },
      {
        "id": "ch4-ppt-s37",
        "type": "single",
        "stem": "连接条件中用到的字段数据类型不相同时，必须满足什么要求？",
        "options": [
          "A. 必须兼容或可进行隐性转换",
          "B. 必须都是字符型",
          "C. 必须都是数值型",
          "D. 必须完全相同"
        ],
        "answer": "A",
        "analysis": "解析：PPT第47页指出连接字段不必同名或同类型，但如果数据类型不相同，则必须兼容或可进行隐性转换。",
        "page": 47
      },
      {
        "id": "ch4-ppt-s38",
        "type": "single",
        "stem": "下列关键字中，表示交叉连接的是？",
        "options": [
          "A. right outer join",
          "B. cross join",
          "C. inner join",
          "D. left outer join"
        ],
        "answer": "B",
        "analysis": "解析：PPT第47页列出显式连接关键字：inner join、left outer join、right outer join和cross join，其中cross join为交叉连接。",
        "page": 47
      },
      {
        "id": "ch4-ppt-s39",
        "type": "single",
        "stem": "内连接（inner join）是通过比较什么从多个源表检索符合条件的行？",
        "options": [
          "A. 主键的类型",
          "B. 表名",
          "C. 数据源表间共享列的值",
          "D. 索引的个数"
        ],
        "answer": "C",
        "analysis": "解析：PPT第49页指出内连接查询是通过比较数据源表间共享列的值，从多个源表检索符合条件的行的操作。",
        "page": 49
      },
      {
        "id": "ch4-ppt-s40",
        "type": "single",
        "stem": "select … from student inner join score on student.studentno=score.studentno 中，on后面跟的是？",
        "options": [
          "A. 分组字段",
          "B. 限制的记录条数",
          "C. 排序条件",
          "D. 连接条件"
        ],
        "answer": "D",
        "analysis": "解析：PPT第49页例27在on后面给出 student.studentno=score.studentno 这一连接条件，where再给出课程号筛选条件。",
        "page": 49
      },
      {
        "id": "ch4-ppt-s41",
        "type": "single",
        "stem": "不使用inner join，要实现与内连接相同的查询结果，可以采用什么方式？",
        "options": [
          "A. 直接通过where子句的复合条件查询",
          "B. 使用cross join",
          "C. 使用union",
          "D. 使用limit"
        ],
        "answer": "A",
        "analysis": "解析：PPT第50页指出还有一种方法，就是直接通过where子句的复合条件查询，可以实现与内连接同样的结果。",
        "page": 50
      },
      {
        "id": "ch4-ppt-b23",
        "type": "blank",
        "stem": "select … from student,score where student.studentno=score.studentno and score.courseno='c05109' 这种写法可以实现与____连接同样的结果。",
        "answer": [
          "内",
          "inner",
          "内连接"
        ],
        "answerText": "内",
        "analysis": "解析：PPT第50页指出用where子句的复合条件查询可以实现与内连接同样的结果。",
        "page": 50
      },
      {
        "id": "ch4-ppt-s42",
        "type": "single",
        "stem": "外连接返回的结果集有什么特点？",
        "options": [
          "A. 只包含两个表中完全匹配的行",
          "B. 包括满足搜索条件的连接表中的所有行，甚至包括在其他连接表中没有匹配行的表中的行",
          "C. 只包含左表的数据",
          "D. 一定是两个表的笛卡儿积"
        ],
        "answer": "B",
        "analysis": "解析：PPT第51页指出外连接包括满足搜索条件的连接表中的所有行，甚至包括在其他连接表中没有匹配行的一个表中的行。",
        "page": 51
      },
      {
        "id": "ch4-ppt-s43",
        "type": "single",
        "stem": "外连接中，当一个表中的行与其他表中的行不匹配时，为不存在相应行的表的所有结果集列提供什么值？",
        "options": [
          "A. 0",
          "B. 空字符串",
          "C. null",
          "D. false"
        ],
        "answer": "C",
        "analysis": "解析：PPT第51页指出当一个表中的行与其他表中的行不匹配时，为解析为不存在相应行的表的所有结果集列提供null值。",
        "page": 51
      },
      {
        "id": "ch4-ppt-s44",
        "type": "single",
        "stem": "左外连接返回的结果是？",
        "options": [
          "A. 只返回左表的所有数据",
          "B. 返回两个表的笛卡儿积",
          "C. 只返回两表匹配的行",
          "D. 内连接的数据加上左表中不符合条件的数据，并在右表相应列添加null值"
        ],
        "answer": "D",
        "analysis": "解析：PPT第52页指出左外连接返回的结果除内连接的数据外，还包括左表中不符合条件的数据，并在右表的相应列中添加null值。",
        "page": 52
      },
      {
        "id": "ch4-ppt-b24",
        "type": "blank",
        "stem": "右外连接中包含join子句中最右侧表的所有行，如果右侧表中的行与左侧表中的行不匹配，则为结果集中来自左侧表的所有列分配____值。",
        "answer": [
          "null",
          "NULL",
          "空"
        ],
        "answerText": "null",
        "analysis": "解析：PPT第54页指出右外连接包含join子句中最右侧表的所有行，不匹配时左侧表的所有列分配null值。",
        "page": 54
      },
      {
        "id": "ch4-ppt-b25",
        "type": "blank",
        "stem": "交叉连接（cross join）是在没有where子句的情况下产生的表的____。",
        "answer": [
          "笛卡儿积",
          "笛卡尔积"
        ],
        "answerText": "笛卡儿积",
        "analysis": "解析：PPT第55页指出交叉连接是在没有where子句的情况下产生的表的笛卡儿积。",
        "page": 55
      },
      {
        "id": "ch4-ppt-s45",
        "type": "single",
        "stem": "student表有100行数据，score表有20行数据，两表作交叉连接后结果集的行数是？",
        "options": [
          "A. 120",
          "B. 80",
          "C. 2000",
          "D. 100"
        ],
        "answer": "C",
        "analysis": "解析：PPT第55页指出两个表作交叉连接时结果集大小为二者行数之积，即100×20=2000行。",
        "page": 55
      },
      {
        "id": "ch4-ppt-b26",
        "type": "blank",
        "stem": "两个表作交叉连接时，结果集大小为二者行数之____。",
        "answer": [
          "积",
          "乘积"
        ],
        "answerText": "积",
        "analysis": "解析：PPT第55页指出交叉连接的结果集大小为两个表行数之积，例30中384行即为两表行数的乘积。",
        "page": 55
      },
      {
        "id": "ch4-ppt-b27",
        "type": "blank",
        "stem": "交叉连接虽然可以产生笛卡儿积，但该种方式在实际过程中用得____。",
        "answer": [
          "很少",
          "比较少"
        ],
        "answerText": "很少",
        "analysis": "解析：PPT第55页指出交叉连接这种连接方式在实际过程中用的很少。",
        "page": 55
      },
      {
        "id": "ch4-ppt-s46",
        "type": "single",
        "stem": "在一条select语句中连接的表多于多少个时，数据库很可能达不到最优化设计？",
        "options": [
          "A. 5个",
          "B. 8个",
          "C. 10个",
          "D. 20个"
        ],
        "answer": "C",
        "analysis": "解析：PPT第56页指出连接的表多于10个时，数据库就很可能达不到最优化设计，MySQL引擎的执行计划会变得非常繁琐。",
        "page": 56
      },
      {
        "id": "ch4-ppt-s47",
        "type": "single",
        "stem": "连接3个表至少需要几个连接条件才能避免笛卡儿积？",
        "options": [
          "A. 1个",
          "B. 2个",
          "C. 3个",
          "D. 4个"
        ],
        "answer": "B",
        "analysis": "解析：PPT第56页指出连接n个表至少需要n-1个连接条件，3个表即至少需要2个连接条件。",
        "page": 56
      },
      {
        "id": "ch4-ppt-s48",
        "type": "single",
        "stem": "例31中 round(period/16,1) 计算的是？",
        "options": [
          "A. 学分（每16学时计为1学分）",
          "B. 总学时",
          "C. 平均成绩",
          "D. 学费"
        ],
        "answer": "A",
        "analysis": "解析：PPT第57页例31要求查询20级学生的学号、姓名、课程名、期末成绩及学分，规定每16个学时计为1学分，故用period/16计算学分。",
        "page": 57
      },
      {
        "id": "ch4-ppt-s49",
        "type": "single",
        "stem": "使用union合并两个查询结果集时，必须满足什么要求？",
        "options": [
          "A. 两个查询的表名必须相同",
          "B. 两个查询必须使用相同的索引",
          "C. 两个查询的列数相同即可",
          "D. 所有查询中的列数和列的顺序必须相同且数据类型必须兼容"
        ],
        "answer": "D",
        "analysis": "解析：PPT第58页指出使用union合并两个查询结果集时，所有查询中的列数和列的顺序必须相同且数据类型必须兼容。",
        "page": 58
      },
      {
        "id": "ch4-ppt-s50",
        "type": "single",
        "stem": "union all 与 union 的区别是？",
        "options": [
          "A. all将所有行合并到结果中包括重复行，不指定all则删除重复行",
          "B. all会删除重复行，union保留重复行",
          "C. 二者完全等价",
          "D. all只能用于两个以上的表"
        ],
        "answer": "A",
        "analysis": "解析：PPT第58页指出All将所有行合并到结果中，包括重复的行；如果不指定all，将删除重复的行。",
        "page": 58
      },
      {
        "id": "ch4-ppt-b28",
        "type": "blank",
        "stem": "使用 union 而不指定 all 时，结果集中的重复行将被____。",
        "answer": [
          "删除",
          "去掉",
          "去除"
        ],
        "answerText": "删除",
        "analysis": "解析：PPT第58页指出union语法为 select_statement union [all] select_statement，不指定all时删除重复行。",
        "page": 58
      },
      {
        "id": "ch4-ppt-s51",
        "type": "single",
        "stem": "例32中两个查询用union合并时，各自的筛选条件分别是？",
        "options": [
          "A. phone regexp '131' 与 phone regexp '132'",
          "B. phone like '%131%' 与 phone like '%132%'",
          "C. phone like '131%' 与 phone like '132%'",
          "D. sname like '%131%' 与 sname like '%132%'"
        ],
        "answer": "B",
        "analysis": "解析：PPT第59页例32对student01与student表分别用 phone like '%131%' 和 phone like '%132%' 筛选后再用union合并。",
        "page": 59
      },
      {
        "id": "ch4-ppt-s52",
        "type": "single",
        "stem": "下列关于子查询的说法，正确的是？",
        "options": [
          "A. 子查询只能出现在where子句中",
          "B. 子查询是一种视图对象",
          "C. 子查询是一种存储过程",
          "D. 子查询是嵌套在select、insert、update或delete语句或其他子查询中的查询"
        ],
        "answer": "D",
        "analysis": "解析：PPT第60页指出子查询就是一个嵌套在select、insert、update或delete语句或其他子查询中的查询，可把复杂查询分解成一系列逻辑步骤。",
        "page": 60
      },
      {
        "id": "ch4-ppt-s53",
        "type": "single",
        "stem": "非关联子查询的执行过程是？",
        "options": [
          "A. 从内层向外层处理",
          "B. 内外层并行执行",
          "C. 随机顺序执行",
          "D. 从外层向内层逐层处理"
        ],
        "answer": "A",
        "analysis": "解析：PPT第60页指出MySQL对嵌套查询的处理过程是从内层向外层处理，先处理最内层子查询，再把结果用于外查询条件。",
        "page": 60
      },
      {
        "id": "ch4-ppt-s54",
        "type": "single",
        "stem": "关于子查询与连接的关系，下列说法正确的是？",
        "options": [
          "A. 子查询无法实现多表之间的查询",
          "B. 包含子查询的查询一般可写成连接查询，多表连接的性能有时优于子查询",
          "C. 连接查询一定比子查询慢",
          "D. 二者完全等价，性能也相同"
        ],
        "answer": "B",
        "analysis": "解析：PPT第60页指出包含子查询的查询语句一般可写成连接查询，有些方面多表连接的性能要优于子查询，因为连接不需要查询优化器执行排序等额外操作。",
        "page": 60
      },
      {
        "id": "ch4-ppt-s55",
        "type": "single",
        "stem": "下列哪一组运算符都可能出现在子查询中？",
        "options": [
          "A. inner join、cross join",
          "B. create、drop、alter",
          "C. in、not in、any、all、exists",
          "D. limit、order by、group by"
        ],
        "answer": "C",
        "analysis": "解析：PPT第61页指出子查询中可能包括in、not in、any、all、exists、not exists等逻辑运算符，也可以包含=、!=、>、<等比较运算符。",
        "page": 61
      },
      {
        "id": "ch4-ppt-b29",
        "type": "blank",
        "stem": "返回一行或多行、但每行上只有一个值的子查询，属于____子查询。",
        "answer": [
          "列",
          "列子查询"
        ],
        "answerText": "列",
        "analysis": "解析：PPT第61页指出返回一行或多行、但每行上只有一个值的是列子查询；只返回一个值的是标量子查询。",
        "page": 61
      },
      {
        "id": "ch4-ppt-s56",
        "type": "single",
        "stem": "只返回一个值的子查询属于哪种类型？",
        "options": [
          "A. 表子查询",
          "B. 行子查询",
          "C. 列子查询",
          "D. 标量子查询"
        ],
        "answer": "D",
        "analysis": "解析：PPT第61页指出只返回一个值的是标量子查询，从定义上讲每个标量子查询都是一个列子查询和行子查询。",
        "page": 61
      },
      {
        "id": "ch4-ppt-s57",
        "type": "single",
        "stem": "使用子查询时，下列做法正确的是？",
        "options": [
          "A. 子查询可以嵌套多至32层",
          "B. 子查询可以检索text、blob类型的列",
          "C. 子查询中的order by可以在内层使用",
          "D. 子查询不需要加括号"
        ],
        "answer": "A",
        "analysis": "解析：PPT第62页指出子查询需用括号括起来，嵌套可多至32层；不能检索text、blob、longtext或mediumblob列；order by只能在外层使用。",
        "page": 62
      },
      {
        "id": "ch4-ppt-b30",
        "type": "blank",
        "stem": "子查询使用order by时，只能在外层使用，不能在____使用。",
        "answer": [
          "内层",
          "子查询内部"
        ],
        "answerText": "内层",
        "analysis": "解析：PPT第62页指出子查询使用order by时只能在外层使用，不能在内层使用。",
        "page": 62
      },
      {
        "id": "ch4-ppt-s58",
        "type": "single",
        "stem": "把子查询的结果当成普通表达式用在外查询的选择条件中时，子查询必须？",
        "options": [
          "A. 返回逻辑值true",
          "B. 返回一个值或单个列值列表",
          "C. 返回整张表的所有列",
          "D. 返回多个列的结果集"
        ],
        "answer": "B",
        "analysis": "解析：PPT第64页指出把子查询结果当普通表达式看待时，子查询必须返回一个值或单个列值列表。",
        "page": 64
      },
      {
        "id": "ch4-ppt-s59",
        "type": "single",
        "stem": "子查询做表达式时，可以替换where子句中包含哪个关键字的表达式？",
        "options": [
          "A. escape",
          "B. like",
          "C. in",
          "D. between"
        ],
        "answer": "C",
        "analysis": "解析：PPT第64页指出此时的子查询可以替换where子句中包含in关键字的表达式。",
        "page": 64
      },
      {
        "id": "ch4-ppt-b31",
        "type": "blank",
        "stem": "例33中 entrance-(select avg(entrance) from student) 计算的是该生入学成绩与所有学生平均入学成绩的____。",
        "answer": [
          "分差",
          "差值",
          "差额"
        ],
        "answerText": "分差",
        "analysis": "解析：PPT第64页例33查询某学生的入学成绩、所有学生平均入学成绩及二者的分差，该表达式即为分差列。",
        "page": 64
      },
      {
        "id": "ch4-ppt-b32",
        "type": "blank",
        "stem": "例33中子查询 (select avg(entrance) from student) 的结果是所有学生的____入学成绩。",
        "answer": [
          "平均",
          "平均分"
        ],
        "answerText": "平均",
        "analysis": "解析：PPT第64页例33中avg(entrance)求的是所有学生的平均入学成绩，作为平均成绩列输出。",
        "page": 64
      },
      {
        "id": "ch4-ppt-s60",
        "type": "single",
        "stem": "派生表指的是出现在哪个子句中的子查询？",
        "options": [
          "A. select列表",
          "B. having子句",
          "C. where子句",
          "D. from子句"
        ],
        "answer": "D",
        "analysis": "解析：PPT第65页指出可以利用子查询生成一个派生表，用于替代from子句中的数据源表，即在from子句中使用子查询作为派生表数据源。",
        "page": 65
      },
      {
        "id": "ch4-ppt-b33",
        "type": "blank",
        "stem": "用子查询生成派生表时，派生表可以定义一个____，供外层查询引用其中的列。",
        "answer": [
          "别名",
          "表别名"
        ],
        "answerText": "别名",
        "analysis": "解析：PPT第65页指出派生表可以定义一个别名，子查询的结果集作为外层查询的源表。",
        "page": 65
      },
      {
        "id": "ch4-ppt-s61",
        "type": "single",
        "stem": "例34中 from (select * from score where final>85) as TT 里的TT表示？",
        "options": [
          "A. 派生表的别名",
          "B. 字段名",
          "C. 关键字",
          "D. 列别名"
        ],
        "answer": "A",
        "analysis": "解析：PPT第65页例34把期末成绩高于85分的结果集以TT命名，TT是派生表的别名，供外层查询引用。",
        "page": 65
      },
      {
        "id": "ch4-ppt-b34",
        "type": "blank",
        "stem": "例34中外层查询的 where TT.final*0.8+TT.daily*0.2>90 筛选出的是____成绩高于90分的学生。",
        "answer": [
          "总评",
          "总评成绩",
          "总评成绩（综合）"
        ],
        "answerText": "总评",
        "analysis": "解析：PPT第65页例34要求查询期末成绩高于85分、总评成绩高于90分的学生，外层where条件即对总评成绩的筛选。",
        "page": 65
      },
      {
        "id": "ch4-ppt-s62",
        "type": "single",
        "stem": "where子句中的子查询，其作用是？",
        "options": [
          "A. 为结果集排序",
          "B. 把子查询的结果作为本语句条件的一部分，用来过滤本层查询的数据",
          "C. 生成一张新的永久表",
          "D. 直接修改数据源表的数据"
        ],
        "answer": "B",
        "analysis": "解析：PPT第66页指出where语句中的子查询实际上是将子查询的结果作为该语句条件中的一部分，然后利用这个条件过滤本层查询的数据。",
        "page": 66
      },
      {
        "id": "ch4-ppt-s63",
        "type": "single",
        "stem": "创建关联子查询时，子查询的执行次数是？",
        "options": [
          "A. 固定执行2次",
          "B. 固定执行1次",
          "C. 外部查询有多少行，子查询就执行多少次",
          "D. 等于子查询结果的行数"
        ],
        "answer": "C",
        "analysis": "解析：PPT第66页指出创建关联子查询时，外部查询有多少行，子查询就执行多少次。",
        "page": 66
      },
      {
        "id": "ch4-ppt-s64",
        "type": "single",
        "stem": "当子查询返回的结果集是值的列表时，应使用哪个运算符代替比较运算符？",
        "options": [
          "A. exists",
          "B. between",
          "C. =",
          "D. in"
        ],
        "answer": "D",
        "analysis": "解析：PPT第68页指出假如一个子查询返回的结果集是值的列表，这时比较运算符就可以用in运算符代替。",
        "page": 68
      },
      {
        "id": "ch4-ppt-s65",
        "type": "single",
        "stem": "使用exists关键字时，内层查询语句返回的是？",
        "options": [
          "A. 一个逻辑值（true或false）",
          "B. 一张派生表",
          "C. 一个null值",
          "D. 一条记录"
        ],
        "answer": "A",
        "analysis": "解析：PPT第69页指出使用exists关键字时内层查询语句不返回查询的记录，而是返回一个逻辑值，查询到满足条件的记录返回true。",
        "page": 69
      },
      {
        "id": "ch4-ppt-b35",
        "type": "blank",
        "stem": "not in 的作用与 in 刚好____，用于查询不在指定值列表中的记录。",
        "answer": [
          "相反",
          "相反（互补）"
        ],
        "answerText": "相反",
        "analysis": "解析：PPT第68页指出in运算符检测结果集中是否存在某个值，not in的作用与in刚好相反。",
        "page": 68
      },
      {
        "id": "ch4-ppt-s66",
        "type": "single",
        "stem": "关于all与any（some），下列说法正确的是？",
        "options": [
          "A. all只要有一个值满足比较关系就返回true",
          "B. all要与子查询结果集中的每个值都比较且都满足才返回true，any满足某个值即返回true",
          "C. all与any完全等价",
          "D. any要求与每个值都比较且都满足"
        ],
        "answer": "B",
        "analysis": "解析：PPT第71页指出all指定表达式要与子查询结果集中的每个值都进行比较，都满足才返回true；some或any只要与某个值满足比较关系就返回true。",
        "page": 71
      },
      {
        "id": "ch4-ppt-s67",
        "type": "single",
        "stem": "insert语句中使用select子查询的作用是？",
        "options": [
          "A. 只能修改已有数据",
          "B. 只能插入一行数据",
          "C. 可将一个或多个其他表或视图的值添加到表中，并同时插入多行",
          "D. 只能创建新表"
        ],
        "answer": "C",
        "analysis": "解析：PPT第73页指出insert语句中的select子查询可用于将一个或多个其他的表或视图的值添加到表中，使用select子查询可同时插入多行。",
        "page": 73
      },
      {
        "id": "ch4-ppt-s68",
        "type": "single",
        "stem": "update语句中使用select子查询，实质上是？",
        "options": [
          "A. 生成一张新表",
          "B. 删除原有数据后重写",
          "C. 为表建立索引",
          "D. 把子查询的结果作为更新条件表达式中的一部分"
        ],
        "answer": "D",
        "analysis": "解析：PPT第74页指出update中的select子查询可同时更新多行数据，实际上是通过将子查询的结果作为更新条件表达式中的一部分。",
        "page": 74
      },
      {
        "id": "ch4-ppt-b36",
        "type": "blank",
        "stem": "利用一个嵌套在insert、update或delete语句中的子查询，可以成批地添加、更新和____表中的数据。",
        "answer": [
          "删除",
          "删"
        ],
        "answerText": "删除",
        "analysis": "解析：PPT第73页指出利用子查询修改表数据，就是利用嵌套在insert、update或delete语句的子查询成批地添加、更新和删除表中的数据。",
        "page": 73
      },
      {
        "id": "ch4-ppt-s69",
        "type": "single",
        "stem": "例40 update score set final=final*1.05 where studentno in (select studentno from student where entrance<800) 完成的操作是？",
        "options": [
          "A. 把入学成绩低于800的学生的期末成绩增加5%",
          "B. 把所有学生的期末成绩增加5%",
          "C. 删除入学成绩低于800的学生成绩",
          "D. 插入一批新的成绩记录"
        ],
        "answer": "A",
        "analysis": "解析：PPT第74页例40将student表中入学成绩低于800的所有学生的期末成绩增加5%，子查询结果作为更新条件的一部分。",
        "page": 74
      },
      {
        "id": "ch4-ppt-s70",
        "type": "single",
        "stem": "通用表表达式（CTE）的作用范围是？",
        "options": [
          "A. 整个数据库",
          "B. 当前语句",
          "C. 当前会话",
          "D. 全局所有用户"
        ],
        "answer": "B",
        "analysis": "解析：PPT第75页指出MySQL 8.0的通用表表达式是一个在语句级别定义的临时结果集，其作用范围是在当前语句。",
        "page": 75
      },
      {
        "id": "ch4-ppt-s71",
        "type": "single",
        "stem": "关于CTE的语法，下列说法正确的是？",
        "options": [
          "A. 必须使用recursive关键字",
          "B. CTE名称可以重复",
          "C. as 后面的括号不能省略",
          "D. as 后面的括号可以省略"
        ],
        "answer": "C",
        "analysis": "解析：PPT第75页指出subquery用于产生CTE的结果集，as后面的括号不能省略。",
        "page": 75
      },
      {
        "id": "ch4-ppt-s72",
        "type": "single",
        "stem": "当with子句中包含递归CTE时，必须使用哪个关键字？",
        "options": [
          "A. repeat",
          "B. loop",
          "C. cycle",
          "D. recursive"
        ],
        "answer": "D",
        "analysis": "解析：PPT第75页指出如果CTE的子查询中引用了自己的名称即为递归CTE，with子句中包含任何递归CTE时必须使用关键字recursive。",
        "page": 75
      },
      {
        "id": "ch4-ppt-b37",
        "type": "blank",
        "stem": "递归select部分不能包含聚合函数、窗口函数、group by、order by、limit、____等。",
        "answer": [
          "distinct",
          "DISTINCT"
        ],
        "answerText": "distinct",
        "analysis": "解析：PPT第78页列出的递归CTE语法限制包括：递归select部分不能包含聚合函数、窗口函数、group by、order by、limit、distinct等。",
        "page": 78
      },
      {
        "id": "ch4-ppt-s73",
        "type": "single",
        "stem": "下列哪一项不属于递归select部分的语法限制？",
        "options": [
          "A. 不能引用其他表",
          "B. 不能包含聚合函数",
          "C. 不能包含group by",
          "D. 不能包含limit"
        ],
        "answer": "A",
        "analysis": "解析：PPT第78页指出递归select部分可以引用其他的表，并且可以将它们与CTE进行连接查询，故“不能引用其他表”不是限制。",
        "page": 78
      },
      {
        "id": "ch4-ppt-s74",
        "type": "single",
        "stem": "递归查询因没有执行时间限制而导致死循环时，可以从另一个会话使用什么命令终止该查询？",
        "options": [
          "A. shutdown",
          "B. kill query",
          "C. drop table",
          "D. rollback"
        ],
        "answer": "B",
        "analysis": "解析：PPT第77页指出如果某个递归查询由于没有执行时间限制而导致了死循环，可以从另一个会话中使用kill query命令终止该查询。",
        "page": 77
      },
      {
        "id": "ch4-ppt-b38",
        "type": "blank",
        "stem": "例42用递归CTE生成斐波那契数列，当n到达____之后，就结束递归过程。",
        "answer": [
          "12",
          "十二"
        ],
        "answerText": "12",
        "analysis": "解析：PPT第79、80页例42用 where n<12 控制递归，当n到达12之后结束递归过程，共生成12个数字。",
        "page": 79
      },
      {
        "id": "ch4-ppt-s75",
        "type": "single",
        "stem": "与通配字符查询相比，正则表达式的查询能力如何？",
        "options": [
          "A. 只能匹配数字",
          "B. 比like弱，只能匹配单个字符",
          "C. 更强大、更灵活，可用于非常复杂的查询",
          "D. 完全相同"
        ],
        "answer": "C",
        "analysis": "解析：PPT第81页指出正则表达式的查询能力比通配字符的查询能力更强大、更灵活，可以应用于非常复杂的查询。",
        "page": 81
      },
      {
        "id": "ch4-ppt-s76",
        "type": "single",
        "stem": "MySQL中使用哪个关键字来匹配查询正则表达式？",
        "options": [
          "A. between",
          "B. escape",
          "C. like",
          "D. regexp"
        ],
        "answer": "D",
        "analysis": "解析：PPT第81页指出MySQL中使用regexp关键字来匹配查询正则表达式，语法为 where 字段名 regexp '操作符'。",
        "page": 81
      },
      {
        "id": "ch4-ppt-b39",
        "type": "blank",
        "stem": "正则表达式 '^赵.江$' 中，符号“.”表示除____以外的任何单个字符。",
        "answer": [
          "换行符",
          "换行",
          "\\n"
        ],
        "answerText": "换行符",
        "analysis": "解析：PPT第86页指出^表示字符串开始位置、$表示结束位置，.表示除“\\n”（换行符）以外的任何单个字符。",
        "page": 86
      },
      {
        "id": "ch4-ppt-s77",
        "type": "single",
        "stem": "where phone regexp '5$' 查询的是？",
        "options": [
          "A. 电话号码尾数为5的学生",
          "B. 电话号码中包含5的学生",
          "C. 电话号码长度为5的学生",
          "D. 电话号码以5开头的学生"
        ],
        "answer": "A",
        "analysis": "解析：PPT第85页指出字符“$”匹配以特定字符或字符串结尾的记录，例44查出电话号码尾数为5的学生。",
        "page": 85
      },
      {
        "id": "ch4-ppt-b40",
        "type": "blank",
        "stem": "正则表达式中指定多个字符串时，需要用符号____隔开，只要匹配其中任意一个即可。",
        "answer": [
          "|",
          "｜"
        ],
        "answerText": "|",
        "analysis": "解析：PPT第87页指出如果指定多个字符串需要用符号“|”隔开，只要匹配这些字符串中的任意一个即可。",
        "page": 87
      },
      {
        "id": "ch4-ppt-s78",
        "type": "single",
        "stem": "where phone regexp '131|132' 的含义是？",
        "options": [
          "A. 电话号码同时包含131和132",
          "B. 电话号码匹配131或132中的任意一个",
          "C. 电话号码以131开头并以132结尾",
          "D. 电话号码在131到132之间"
        ],
        "answer": "B",
        "analysis": "解析：PPT第87页例46用 regexp '131|132' 查询电话号码出现131或132数字的学生信息，|表示“或”。",
        "page": 87
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
      },
      {
        "id": "ch5-ppt-s08",
        "type": "single",
        "stem": "在MySQL中，索引是由数据库表中（ ）组合而成的一种特殊的数据库结构。",
        "options": [
          "A. 一列或多列",
          "B. 一个或多个表",
          "C. 一条或多条记录",
          "D. 一个或多个数据库"
        ],
        "answer": "A",
        "analysis": "解析：考点是“索引的定义”。PPT第3页指出，索引由数据库表中一列或多列组合而成，是一种特殊的数据库结构，可用来快速查询表中的特定记录信息。故选A。",
        "page": 3
      },
      {
        "id": "ch5-ppt-s09",
        "type": "single",
        "stem": "MySQL中表的存储由两部分组成，即（ ）。",
        "options": [
          "A. 数据页面和索引页面",
          "B. 表空间和日志文件",
          "C. 数据文件和临时文件",
          "D. 主键和触发器"
        ],
        "answer": "A",
        "analysis": "解析：考点是“表的存储组成”。PPT第4页指出，索引依赖于表建立，表的存储由表的数据页面和存放索引的索引页面两部分组成。故选A。",
        "page": 4
      },
      {
        "id": "ch5-ppt-b06",
        "type": "blank",
        "stem": "索引一旦创建，将由数据库自动____和维护，索引只是提供一种快速访问指定记录的方法。",
        "answer": [
          "管理",
          "管理和维护"
        ],
        "answerText": "管理",
        "analysis": "解析：考点是“索引的自动管理”。PPT第5页指出，索引一旦创建，将由数据库自动管理和维护。",
        "page": 5
      },
      {
        "id": "ch5-ppt-b07",
        "type": "blank",
        "stem": "当MySQL执行查询时，____会对可用的多种数据检索方法的成本进行估计，从中选用最有效的查询计划。",
        "answer": [
          "查询优化器",
          "优化器",
          "query optimizer"
        ],
        "answerText": "查询优化器",
        "analysis": "解析：考点是“查询优化器”。PPT第5页指出，查询优化器会对多种检索方法的成本进行估计，选用最有效的查询计划。",
        "page": 5
      },
      {
        "id": "ch5-ppt-s10",
        "type": "single",
        "stem": "MySQL的索引通常包括普通索引、唯一性索引、主键、全文索引和（ ）等类型。",
        "options": [
          "A. 空间索引（spatial）",
          "B. 外键索引（foreign）",
          "C. 临时索引（temporary）",
          "D. 分区索引（partition）"
        ],
        "answer": "A",
        "analysis": "解析：考点是“索引类型概览”。PPT第7页列举MySQL索引包括普通索引（index）、唯一性索引（unique）、主键（primary key）、全文索引（fulltext）和空间索引（spatial）。故选A。",
        "page": 7
      },
      {
        "id": "ch5-ppt-s11",
        "type": "single",
        "stem": "关于普通索引（index），下列说法正确的是（ ）。",
        "options": [
          "A. 索引列的值必须唯一",
          "B. 允许在索引列中插入重复值和空值",
          "C. 一个表只能建立一个普通索引",
          "D. 不允许索引列为空"
        ],
        "answer": "B",
        "analysis": "解析：考点是“普通索引”。PPT第7页指出，普通索引是MySQL中的基本索引类型，允许在定义索引的列中插入重复值和空值。故选B。",
        "page": 7
      },
      {
        "id": "ch5-ppt-s12",
        "type": "single",
        "stem": "创建空间索引时，被索引的列必须声明为（ ），且空间索引只能在MyISAM存储引擎的表中创建。",
        "options": [
          "A. not null",
          "B. unique",
          "C. default null",
          "D. auto_increment"
        ],
        "answer": "A",
        "analysis": "解析：考点是“空间索引”。PPT第9页指出，创建空间索引的列必须声明为not null，并且空间索引只有在MyISAM的表中才能创建。故选A。",
        "page": 9
      },
      {
        "id": "ch5-ppt-s13",
        "type": "single",
        "stem": "按照创建索引键值的列数分类，MySQL的索引可以分为（ ）。",
        "options": [
          "A. 单列索引和复合索引",
          "B. B-Tree索引和Hash索引",
          "C. 普通索引和唯一性索引",
          "D. 主键索引和全文索引"
        ],
        "answer": "A",
        "analysis": "解析：考点是“单列索引与复合索引”。PPT第10页指出，按创建索引键值的列数分类，索引分为单列索引和复合索引；按存储方式分类才是B-Tree和Hash索引。故选A。",
        "page": 10
      },
      {
        "id": "ch5-ppt-b08",
        "type": "blank",
        "stem": "空间索引只有在存储引擎为____的表中才能创建。",
        "answer": [
          "MyISAM",
          "myisam",
          "MYISAM"
        ],
        "answerText": "MyISAM",
        "analysis": "解析：考点是“空间索引”。PPT第9页指出，空间索引只有在存储引擎MyISAM的表中创建。",
        "page": 9
      },
      {
        "id": "ch5-ppt-b09",
        "type": "blank",
        "stem": "按照创建索引键值的列数分类，索引分为单列索引和____索引。",
        "answer": [
          "复合",
          "组合",
          "composite"
        ],
        "answerText": "复合",
        "analysis": "解析：考点是“单列索引与复合索引”。PPT第10页原文为“索引还可以分为单列索引和复合索引”。",
        "page": 10
      },
      {
        "id": "ch5-ppt-s14",
        "type": "single",
        "stem": "按照设置索引的原则，对经常进行更新操作的表，应该（ ）。",
        "options": [
          "A. 尽量多建索引",
          "B. 限制索引的数目，避免创建过多的索引",
          "C. 为每个字段都建立索引",
          "D. 只建立全文索引"
        ],
        "answer": "B",
        "analysis": "解析：考点是“限制索引数目”。PPT第12页指出，应避免对经常更新的表创建过多的索引，要限制索引的数目。故选B。",
        "page": 12
      },
      {
        "id": "ch5-ppt-s15",
        "type": "single",
        "stem": "若表的数据量很大，且对数据的更新较少而查询较多，比较合理的做法是（ ）。",
        "options": [
          "A. 不建立任何索引",
          "B. 创建多个索引来提高性能",
          "C. 删除已有全部索引",
          "D. 只保留主键"
        ],
        "answer": "B",
        "analysis": "解析：考点是“按更新与查询比例决定索引数”。PPT第12页指出，若表的数据量大、更新较少而查询较多，可以创建多个索引来提高性能。故选B。",
        "page": 12
      },
      {
        "id": "ch5-ppt-s16",
        "type": "single",
        "stem": "根据设置索引的原则，经常用于join、where判断和order by排序的字段（ ）。",
        "options": [
          "A. 不应建立索引",
          "B. 一定要建立索引",
          "C. 只能建立全文索引",
          "D. 只能建立唯一性索引"
        ],
        "answer": "B",
        "analysis": "解析：考点是“常排序分组字段”。PPT第12页指出，经常需要排序、分组和联合操作的字段一定要建立索引，即用于join、where判断和order by排序的字段。故选B。",
        "page": 12
      },
      {
        "id": "ch5-ppt-s17",
        "type": "single",
        "stem": "对含有大量重复值的字段建立索引，可能的结果是（ ）。",
        "options": [
          "A. 一定提高查询性能",
          "B. 有可能降低数据库的性能",
          "C. 自动转为全文索引",
          "D. 自动删除重复值"
        ],
        "answer": "B",
        "analysis": "解析：考点是“避免大量重复值字段”。PPT第13页指出，不要对含有大量重复值的字段建立索引，在这样的字段上建立索引有可能降低数据库的性能。故选B。",
        "page": 13
      },
      {
        "id": "ch5-ppt-b10",
        "type": "blank",
        "stem": "InnoDB数据引擎的索引键最长支持____字节，而MyISAM数据引擎支持1000字节。",
        "answer": [
          "767"
        ],
        "answerText": "767",
        "analysis": "解析：考点是“索引键长度限制”。PPT第13页指出，InnoDB数据引擎的索引键最长支持767字节，MyISAM支持1000字节。",
        "page": 13
      },
      {
        "id": "ch5-ppt-b11",
        "type": "blank",
        "stem": "在InnoDB中，如果通过____来访问数据，效率是非常高的；每个表只能创建一个主键索引。",
        "answer": [
          "主键",
          "primary key",
          "主键索引"
        ],
        "answerText": "主键",
        "analysis": "解析：考点是“主键上创建索引”。PPT第13页指出，在主键上创建索引，在InnoDB中通过主键访问数据效率非常高，且每个表只能创建一个主键索引。",
        "page": 13
      },
      {
        "id": "ch5-ppt-s18",
        "type": "single",
        "stem": "MySQL中创建索引通常有3种命令方式，下列不属于其中一种的是（ ）。",
        "options": [
          "A. 用create index创建索引",
          "B. 创建表时附带创建索引",
          "C. 使用alter table语句创建索引",
          "D. 使用update语句创建索引"
        ],
        "answer": "D",
        "analysis": "解析：考点是“三种创建方式”。PPT第14页列出创建索引的3种方式：create index创建索引、创建表时附带创建索引、使用alter table语句创建索引。update用于改数据，不能建索引。故选D。",
        "page": 14
      },
      {
        "id": "ch5-ppt-s19",
        "type": "single",
        "stem": "使用create index为text或blob类型的列创建索引时，（ ）。",
        "options": [
          "A. 不必给出长度",
          "B. 必须给出前缀长度",
          "C. 只能建立唯一性索引",
          "D. 不能建立任何索引"
        ],
        "answer": "B",
        "analysis": "解析：考点是“前缀索引”。PPT第16页指出，blob和text列也可以编制索引，但是必须给出前缀长度，语法为col_name(length)。故选B。",
        "page": 16
      },
      {
        "id": "ch5-ppt-s20",
        "type": "single",
        "stem": "使用列的一部分（前缀）创建索引，其主要好处是（ ）。",
        "options": [
          "A. 使索引文件大大减小，节省磁盘空间",
          "B. 使索引完全失效",
          "C. 可以索引所有数据类型",
          "D. 保证索引列的值唯一"
        ],
        "answer": "A",
        "analysis": "解析：考点是“前缀索引优点”。PPT第16页指出，使用列的一部分创建索引可使索引文件大大减小，从而节省大量磁盘空间，并有可能提高insert操作的速度。故选A。",
        "page": 16
      },
      {
        "id": "ch5-ppt-s21",
        "type": "single",
        "stem": "关于创建索引的说明，下列说法正确的是（ ）。",
        "options": [
          "A. 任何用户都可以为任意表创建索引",
          "B. 索引名在表中必须是唯一的",
          "C. 一张表上可以创建多个主键",
          "D. 唯一性索引一定就是主键"
        ],
        "answer": "B",
        "analysis": "解析：考点是“创建索引说明”。PPT第20页指出，只有表的所有者才能给表创建索引，索引名在表中必须唯一；一张表只能有一个主键但可以有多个唯一性索引，唯一性索引不一定是主键。故选B。",
        "page": 20
      },
      {
        "id": "ch5-ppt-s22",
        "type": "single",
        "stem": "创建唯一索引时，若表中该列已存在两个或两个以上的空值（null），则（ ）。",
        "options": [
          "A. 索引仍可正常创建",
          "B. 空值会被自动删除",
          "C. 索引创建失败",
          "D. 空值会被自动转为0"
        ],
        "answer": "C",
        "analysis": "解析：考点是“唯一索引注意”。PPT第20页指出，创建索引时把两个空值也视为重复数据，因此若存在两个或以上空值，必须先删除，否则索引不能被成功创建。故选C。",
        "page": 20
      },
      {
        "id": "ch5-ppt-b12",
        "type": "blank",
        "stem": "在course表的cname列上创建唯一性索引，语句为：create ____ index cname_index on course(cname);",
        "answer": [
          "unique",
          "UNIQUE",
          "唯一"
        ],
        "answerText": "unique",
        "analysis": "解析：考点是“create index语法中的unique”。PPT第17页例2给出 create unique index cname_index on course(cname);",
        "page": 17
      },
      {
        "id": "ch5-ppt-b13",
        "type": "blank",
        "stem": "只有表的____才能给表创建索引，索引的名称必须符合MySQL的命名规则且在表中唯一。",
        "answer": [
          "所有者",
          "拥有者",
          "owner"
        ],
        "answerText": "所有者",
        "analysis": "解析：考点是“创建索引说明”。PPT第20页说明，只有表的所有者才能给表创建索引。",
        "page": 20
      },
      {
        "id": "ch5-ppt-s23",
        "type": "single",
        "stem": "删除teacher1表上名为mark的索引，正确的语句是（ ）。",
        "options": [
          "A. drop index mark on teacher1;",
          "B. delete index mark from teacher1;",
          "C. drop mark index teacher1;",
          "D. alter table teacher1 delete mark;"
        ],
        "answer": "A",
        "analysis": "解析：考点是“drop index语法”。PPT第21页给出语法 drop index index_name on table_name，示例为 drop index mark on teacher1;。故选A。",
        "page": 21
      },
      {
        "id": "ch5-ppt-s24",
        "type": "single",
        "stem": "使用alter table语句删除course表上的cname_index索引，正确的写法是（ ）。",
        "options": [
          "A. alter table course drop index cname_index;",
          "B. alter table course delete index cname_index;",
          "C. alter table course remove index cname_index;",
          "D. alter table course drop cname_index;"
        ],
        "answer": "A",
        "analysis": "解析：考点是“alter table删除索引”。PPT第22页给出 alter table 的 drop index index_name 子句，示例为 alter table course drop index cname_index;。故选A。",
        "page": 22
      },
      {
        "id": "ch5-ppt-b14",
        "type": "blank",
        "stem": "drop index子句可以删除各种类型的索引，包括____索引。",
        "answer": [
          "唯一",
          "unique",
          "唯一性"
        ],
        "answerText": "唯一",
        "analysis": "解析：考点是“drop index适用范围”。PPT第22页说明，drop index子句可以删除各种类型的索引，包括唯一索引。",
        "page": 22
      },
      {
        "id": "ch5-ppt-s25",
        "type": "single",
        "stem": "下列不属于视图为数据库用户提供便利的是（ ）。",
        "options": [
          "A. 简化数据查询和处理",
          "B. 屏蔽数据库的复杂性",
          "C. 提供安全性",
          "D. 在数据库中实际存储视图的数据"
        ],
        "answer": "D",
        "analysis": "解析：考点是“视图的优点”。PPT第24页列出视图的优点：简化数据查询和处理、屏蔽数据库的复杂性、安全性；而第23页明确数据库只存放视图定义、不存放数据。故选D。",
        "page": 24
      },
      {
        "id": "ch5-ppt-s26",
        "type": "single",
        "stem": "创建视图要求创建用户具有针对视图的（ ）权限，以及针对select语句选择的每一列上的某些权限。",
        "options": [
          "A. create view",
          "B. drop view",
          "C. show view",
          "D. alter table"
        ],
        "answer": "A",
        "analysis": "解析：考点是“创建视图的权限”。PPT第26页指出，要求创建用户具有针对视图的create view权限，以及针对select语句选择的每一列上的某些权限。故选A。",
        "page": 26
      },
      {
        "id": "ch5-ppt-s27",
        "type": "single",
        "stem": "创建视图的语法中，algorithm子句可以取的值为（ ）。",
        "options": [
          "A. undefined、merge、temptable",
          "B. undefined、merge、hash",
          "C. merge、temptable、btree",
          "D. undefined、replace、local"
        ],
        "answer": "A",
        "analysis": "解析：考点是“创建视图语法”。PPT第27页语法为 create [or replace][algorithm ={undefined|merge|temptable}] view ...，故选A。",
        "page": 27
      },
      {
        "id": "ch5-ppt-s28",
        "type": "single",
        "stem": "下列关于创建视图限制的说法，错误的是（ ）。",
        "options": [
          "A. 视图的from子句中不能使用子查询",
          "B. select语句不能引用系统或用户变量",
          "C. 不能将触发程序与视图关联在一起",
          "D. 视图定义中绝对不能使用order by"
        ],
        "answer": "D",
        "analysis": "解析：考点是“创建视图的限制”。PPT第28页指出，from子句不能使用子查询、select不能引用系统或用户变量、不能关联触发程序；但“在视图定义中允许使用order by”，只是从该视图选择时可能被忽略。故D说法错误。",
        "page": 28
      },
      {
        "id": "ch5-ppt-s29",
        "type": "single",
        "stem": "关于视图建立的基础，下列说法正确的是（ ）。",
        "options": [
          "A. 视图只能建立在一张表上",
          "B. 视图可以建立在多张表或既有视图上",
          "C. 视图引用的基本表必须来自当前数据库",
          "D. 视图必须包含基本表的所有列"
        ],
        "answer": "B",
        "analysis": "解析：考点是“视图建立的基础”。PPT第26页指出视图可建立在一张表、多张表或既有视图上；第32页说明基本表也可来自另一数据库，只需在表名前加数据库名。故选B。",
        "page": 26
      },
      {
        "id": "ch5-ppt-b15",
        "type": "blank",
        "stem": "在视图的from子句中不能使用____。",
        "answer": [
          "子查询",
          "subquery",
          "嵌套查询"
        ],
        "answerText": "子查询",
        "analysis": "解析：考点是“创建视图的限制”。PPT第28页第一条限制即“在视图的from子句中不能使用子查询”。",
        "page": 28
      },
      {
        "id": "ch5-ppt-s30",
        "type": "single",
        "stem": "查看数据库中已存在视图的定义，用户必须具有（ ）权限。",
        "options": [
          "A. show view",
          "B. create view",
          "C. drop view",
          "D. update"
        ],
        "answer": "A",
        "analysis": "解析：考点是“查看视图的权限”。PPT第33页指出，查看视图必须要有show view的权限，MySQL数据库下的user表中保存着这个信息。故选A。",
        "page": 33
      },
      {
        "id": "ch5-ppt-s31",
        "type": "single",
        "stem": "下列语句中，不能用于查看视图定义的是（ ）。",
        "options": [
          "A. describe view_name",
          "B. show table status like 'view_name'",
          "C. show create view view_name",
          "D. drop view view_name"
        ],
        "answer": "D",
        "analysis": "解析：考点是“查看视图的方法”。PPT第33-35页列出describe语句、show table status语句、show create view语句和查询information_schema.views表四种方法；drop view用于删除视图。故选D。",
        "page": 33
      },
      {
        "id": "ch5-ppt-s32",
        "type": "single",
        "stem": "使用describe语句查看视图的基本信息，其形式（ ）。",
        "options": [
          "A. 与查看表的形式是一样的",
          "B. 与创建视图的语法一样",
          "C. 必须加上full关键字",
          "D. 只能看视图名不能看列信息"
        ],
        "answer": "A",
        "analysis": "解析：考点是“describe语句”。PPT第33页指出，describe语句查看视图的基本形式与查看表的形式是一样的。故选A。",
        "page": 33
      },
      {
        "id": "ch5-ppt-s33",
        "type": "single",
        "stem": "要查看视图的详细定义，应使用（ ）语句。",
        "options": [
          "A. describe view_name",
          "B. show table status like 'view_name'",
          "C. show create view view_name",
          "D. select * from view_name"
        ],
        "answer": "C",
        "analysis": "解析：考点是“show create view”。PPT第34页指出，show create view语句可以查看视图的详细定义；show table status只查看基本信息，describe查看基本结构。故选C。",
        "page": 34
      },
      {
        "id": "ch5-ppt-b16",
        "type": "blank",
        "stem": "MySQL中所有视图的定义都存放在information_schema数据库下的____表中。",
        "answer": [
          "views",
          "VIEWS",
          "views表"
        ],
        "answerText": "views",
        "analysis": "解析：考点是“views表”。PPT第35页指出，所有视图的定义都存在information_schema数据库下的views表中，可用 select * from information_schema.views; 查看。",
        "page": 35
      },
      {
        "id": "ch5-ppt-s34",
        "type": "single",
        "stem": "修改视图是指（ ）。",
        "options": [
          "A. 修改数据库中已存在视图的定义",
          "B. 直接修改视图中的数据",
          "C. 删除视图后重建基表",
          "D. 修改基表的存储引擎"
        ],
        "answer": "A",
        "analysis": "解析：考点是“修改视图的概念”。PPT第36页指出，修改视图是指修改数据库中已存在视图的定义；当基本表字段改变时，可通过修改视图保持视图与基本表一致。故选A。",
        "page": 36
      },
      {
        "id": "ch5-ppt-s35",
        "type": "single",
        "stem": "关于create or replace view语句，下列说法正确的是（ ）。",
        "options": [
          "A. 只能用于创建新视图",
          "B. 只能用于修改已存在的视图",
          "C. 视图已存在时进行修改，不存在时可创建视图",
          "D. 使用前必须先删除原视图"
        ],
        "answer": "C",
        "analysis": "解析：考点是“create or replace view”。PPT第36页指出，该语句使用非常灵活：视图已经存在时对视图进行修改，视图不存在时可以创建视图。故选C。",
        "page": 36
      },
      {
        "id": "ch5-ppt-s36",
        "type": "single",
        "stem": "使用alter view修改视图时，若在视图名后指明视图列名称，则（ ）。",
        "options": [
          "A. 列数可以与select语句检索的列数不等",
          "B. 列数要与select语句检索的列数相等",
          "C. 不允许指定列名",
          "D. 必须同时使用or replace"
        ],
        "answer": "B",
        "analysis": "解析：考点是“alter view语法/修改视图示例”。PPT第37页给出alter view语法，第38页例9在视图名后指明列名；第32页说明(2)要求列数要与select语句检索的列数相等。故选B。",
        "page": 38
      },
      {
        "id": "ch5-ppt-b17",
        "type": "blank",
        "stem": "MySQL中可以通过create or replace view语句和____语句来修改视图。",
        "answer": [
          "alter",
          "ALTER",
          "alter view"
        ],
        "answerText": "alter",
        "analysis": "解析：考点是“修改视图的两种方式”。PPT第36页指出，MySQL中通过create or replace view语句和alter语句来修改视图。",
        "page": 36
      },
      {
        "id": "ch5-ppt-s37",
        "type": "single",
        "stem": "删除视图时，（ ）。",
        "options": [
          "A. 只删除视图的定义，不会删除数据",
          "B. 同时删除基表中的数据",
          "C. 同时删除基表的结构",
          "D. 删除视图及其全部索引"
        ],
        "answer": "A",
        "analysis": "解析：考点是“删除视图的概念”。PPT第39页指出，删除视图时只能删除视图的定义，不会删除数据。故选A。",
        "page": 39
      },
      {
        "id": "ch5-ppt-s38",
        "type": "single",
        "stem": "用户要使用drop view语句删除视图，必须拥有（ ）权限。",
        "options": [
          "A. drop",
          "B. create view",
          "C. show view",
          "D. update"
        ],
        "answer": "A",
        "analysis": "解析：考点是“drop view权限与多视图”。PPT第39页指出，用户必须拥有drop权限才能使用drop view语句来删除视图。故选A。",
        "page": 39
      },
      {
        "id": "ch5-ppt-s39",
        "type": "single",
        "stem": "使用drop view一次删除多个视图时，各视图名之间应使用（ ）分隔。",
        "options": [
          "A. 逗号",
          "B. 分号",
          "C. 空格",
          "D. and"
        ],
        "answer": "A",
        "analysis": "解析：考点是“drop view删除多个视图”。PPT第39页指出，drop view命令可以删除多个视图，各视图名之间用逗号分隔。故选A。",
        "page": 39
      },
      {
        "id": "ch5-ppt-b18",
        "type": "blank",
        "stem": "删除视图V1_student的语句为：____ view V1_student;",
        "answer": [
          "drop",
          "DROP",
          "drop view"
        ],
        "answerText": "drop",
        "analysis": "解析：考点是“drop view语法”。PPT第40页给出基本格式 drop view [if exists] view_name，示例为 drop view V1_student;",
        "page": 40
      },
      {
        "id": "ch5-ppt-s40",
        "type": "single",
        "stem": "关于视图的使用，下列说法正确的是（ ）。",
        "options": [
          "A. 视图的检索和更新都没有任何限制",
          "B. 视图检索几乎没有什么限制，但通过视图插入、修改、删除有一定限制条件",
          "C. 视图只能查询不能更新",
          "D. 通过视图更新前必须先删除视图"
        ],
        "answer": "B",
        "analysis": "解析：考点是“视图应用内容”。PPT第41页指出，视图的检索几乎没有什么限制，但对通过视图实现表的插入、修改、删除操作则有一定的限制条件。故选B。",
        "page": 41
      },
      {
        "id": "ch5-ppt-s41",
        "type": "single",
        "stem": "使用视图进行查询，实质上是（ ）。",
        "options": [
          "A. 把视图作为数据源来实现查询功能",
          "B. 直接读取索引页面中的数据",
          "C. 把视图复制成一张临时表",
          "D. 重新执行创建视图的语句"
        ],
        "answer": "A",
        "analysis": "解析：考点是“视图查询”。PPT第42页指出，使用视图进行查询实际上就是把视图作为数据源，实现查询功能。故选A。",
        "page": 42
      },
      {
        "id": "ch5-ppt-s42",
        "type": "single",
        "stem": "创建视图course_avg统计各门课程的平均成绩，视图中使用的聚合函数是（ ）。",
        "options": [
          "A. avg(final)",
          "B. sum(final)",
          "C. count(final)",
          "D. max(final)"
        ],
        "answer": "A",
        "analysis": "解析：考点是“视图统计计算”。PPT第43页例11中创建course_avg视图，语句为 select cname 课程名, avg(final) 平均成绩 ...。故选A。",
        "page": 43
      },
      {
        "id": "ch5-ppt-s43",
        "type": "single",
        "stem": "通过视图对基表数据进行insert、update和delete操作时，（ ）。",
        "options": [
          "A. 不需要任何权限",
          "B. 需要具有执行相关操作的权限",
          "C. 只能由root用户执行",
          "D. 必须先删除视图定义"
        ],
        "answer": "B",
        "analysis": "解析：考点是“视图修改基表”。PPT第44页指出，使用视图修改表数据，是指在视图中进行insert、update和delete等操作而修改基表的数据，通过视图修改表数据时要有执行相关操作的权限。故选B。",
        "page": 44
      },
      {
        "id": "ch5-ppt-s44",
        "type": "single",
        "stem": "若一个视图只依赖于一个基表，则（ ）。",
        "options": [
          "A. 不能通过视图更新基表数据",
          "B. 可以直接通过更新视图来更新基本表的数据",
          "C. 只能插入不能修改",
          "D. 必须先为该视图建立索引"
        ],
        "answer": "B",
        "analysis": "解析：考点是“单表视图可更新”。PPT第46页说明(1)指出，视图若只依赖于一个基表，则可以直接通过更新视图来更新基本表的数据。故选B。",
        "page": 46
      },
      {
        "id": "ch5-ppt-s45",
        "type": "single",
        "stem": "若一个视图依赖于多张基表，则通过该视图修改数据时（ ）。",
        "options": [
          "A. 可以同时修改多个基表的数据",
          "B. 一次只能修改一个基表的数据",
          "C. 不能进行任何修改",
          "D. 只能执行删除操作"
        ],
        "answer": "B",
        "analysis": "解析：考点是“多表视图限制”。PPT第46页说明(2)指出，若一个视图依赖于多张基表，则一次只能修改一个基表的数据，不能同时修改多个基本表的数据。故选B。",
        "page": 46
      },
      {
        "id": "ch5-ppt-b19",
        "type": "blank",
        "stem": "通过视图修改表数据时，要有执行相关操作的____。",
        "answer": [
          "权限",
          "privilege",
          "权利"
        ],
        "answerText": "权限",
        "analysis": "解析：考点是“视图修改基表”。PPT第44页指出，通过视图修改表数据时，要有执行相关操作的权限。",
        "page": 44
      },
      {
        "id": "ch5-ppt-b20",
        "type": "blank",
        "stem": "视图的列中含有____关键字（用于去重）时，该视图是不可修改的。",
        "answer": [
          "distinct",
          "DISTINCT",
          "distinct关键字"
        ],
        "answerText": "distinct",
        "analysis": "解析：考点是“不可修改的视图”。PPT第47页列出不可修改视图的结构，其中包含“含有distinct关键字”。",
        "page": 47
      },
      {
        "id": "ch5-ppt-s46",
        "type": "single",
        "stem": "在MySQL中，没有使用with check option的视图是普通视图，其with_check_option的值为（ ），不具备检查功能。",
        "options": [
          "A. 0",
          "B. 1",
          "C. null",
          "D. local"
        ],
        "answer": "A",
        "analysis": "解析：考点是“普通视图与检查视图”。PPT第48页指出，当没有with_check_option时，表示其值为0，即为普通视图，普通视图不具备检查功能。故选A。",
        "page": 48
      },
      {
        "id": "ch5-ppt-s47",
        "type": "single",
        "stem": "创建V_dept视图时限定department='计算机学院'并使用with check option，其作用是（ ）。",
        "options": [
          "A. 该视图只能查询不能插入",
          "B. 通过该视图插入的数据，部门必须为计算机学院",
          "C. 自动为department列建立索引",
          "D. 禁止删除基表中的数据"
        ],
        "answer": "B",
        "analysis": "解析：考点是“检查视图示例”。PPT第49页例14创建V_dept视图包含部门为“计算机学院”的教师数据，并限制插入数据中部门必须为“计算机学院”。故选B。",
        "page": 49
      },
      {
        "id": "ch5-ppt-b21",
        "type": "blank",
        "stem": "通过检查视图插入不满足检查条件的数据时，MySQL会报错 ERROR ____ (HY000): check option failed。",
        "answer": [
          "1369"
        ],
        "answerText": "1369",
        "analysis": "解析：考点是“检查失败”。PPT第51页示例插入“软件学院”记录时报 ERROR 1369 (HY000): check option failed，更新失败。",
        "page": 51
      },
      {
        "id": "ch5-ppt-b22",
        "type": "blank",
        "stem": "创建检查视图时，需要在定义视图的select语句后加上 with ____ option 子句。",
        "answer": [
          "check",
          "CHECK",
          "check option"
        ],
        "answerText": "check",
        "analysis": "解析：考点是“with check option”。PPT第49页例14在select语句后使用 with check option 创建检查视图V_dept。",
        "page": 49
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
      },
      {
        "id": "ch6-ppt-s08",
        "type": "single",
        "stem": "每一个客户机成功连接服务器后，服务器内存中生成的会话系统变量，其初始值是（ ）的拷贝。",
        "options": [
          "A. 用户会话变量",
          "B. 全局系统变量",
          "C. 局部变量",
          "D. 系统常量"
        ],
        "answer": "B",
        "analysis": "解析：PPT第5页指出，会话期间服务器内存中生成的会话系统变量，其初始值是全局系统变量值的拷贝。考点为“会话系统变量”。故选B。",
        "page": 5
      },
      {
        "id": "ch6-ppt-s09",
        "type": "single",
        "stem": "下列关于用户会话变量定义、赋值及赋值号的说法，正确的是（ ）。",
        "options": [
          "A. 用户会话变量必须使用declare命令定义",
          "B. “:=”是赋值号，select @var:=表达式能够产生结果集；“=”一般作比较运算符，仅在set语句（含update的set子句）中作赋值号",
          "C. 用户会话变量只能使用set语句定义和赋值",
          "D. 使用into方式赋值的select语句同样会产生结果集"
        ],
        "answer": "B",
        "analysis": "解析：PPT第8-9页指出，用户会话变量可用set或select定义赋值（select @var:=表达式产生结果集，into方式不产生结果集）；“:=”是赋值号，“=”一般作比较运算符，仅在set语句（含update的set子句）中作赋值号。考点为“会话变量定义与赋值”和“赋值号比较”。故选B。",
        "page": 9
      },
      {
        "id": "ch6-ppt-s10",
        "type": "single",
        "stem": "下列不属于局部变量主要使用场合的是（ ）。",
        "options": [
          "A. 定义在begin-end语句块之间",
          "B. 作为存储过程或函数的参数使用",
          "C. 直接嵌入select、insert、update、delete语句的条件表达式中",
          "D. 在MySQL客户机命令行直接定义并长期使用"
        ],
        "answer": "D",
        "analysis": "解析：PPT第12页列出局部变量的3种使用场合：定义在begin-end语句块之间、作为存储过程或函数的参数、在SQL语句中使用。局部变量只在定义的局部程序范围内有效，不能在客户机命令行直接定义并长期使用。考点为“局部变量的使用”。故选D。",
        "page": 12
      },
      {
        "id": "ch6-ppt-s11",
        "type": "single",
        "stem": "下列语句中，“=”起赋值作用的是（ ）。",
        "options": [
          "A. select * from student where sname='张三';",
          "B. set @a=5;",
          "C. select 1=1;",
          "D. select studentno from student where sex='女';"
        ],
        "answer": "B",
        "analysis": "解析：PPT第9页指出，“=”一般情况下是比较操作符，仅在set语句（包括update语句的set子句）中作为赋值号。A、D的“=”用于条件比较，C是比较运算；只有B的set语句中“=”起赋值作用。考点为“赋值号比较”。故选B。",
        "page": 9
      },
      {
        "id": "ch6-ppt-b06",
        "type": "blank",
        "stem": "会话变量的生存期就是所在会话空间____到释放的这一段时间。",
        "answer": [
          "开辟",
          "创建",
          "分配"
        ],
        "answerText": "开辟",
        "analysis": "解析：PPT第7页指出，会话变量的生存期就是所在会话空间开辟到释放的这一段时间。",
        "page": 7
      },
      {
        "id": "ch6-ppt-s12",
        "type": "single",
        "stem": "下列不属于按表达式值的类型划分的表达式类型是（ ）。",
        "options": [
          "A. 字符型表达式",
          "B. 数值型表达式",
          "C. 日期型表达式",
          "D. 表表达式"
        ],
        "answer": "D",
        "analysis": "解析：PPT第14页指出，按表达式值的类型可分为字符型、数值型和日期型表达式；表表达式是按值形式分类的结果。考点为“按值类型分类”。故选D。",
        "page": 14
      },
      {
        "id": "ch6-ppt-s13",
        "type": "single",
        "stem": "表达式的结果为0个、1个或多个行表达式的集合，这种表达式称为（ ）。",
        "options": [
          "A. 标量表达式",
          "B. 行表达式",
          "C. 表表达式",
          "D. 复合表达式"
        ],
        "answer": "C",
        "analysis": "解析：PPT第15页指出，结果为0个、1个或多个行表达式集合的表达式叫做表表达式；结果只是一个值的叫标量表达式，结果是一行值的叫行表达式。考点为“按值形式分类”。故选C。",
        "page": 15
      },
      {
        "id": "ch6-ppt-b07",
        "type": "blank",
        "stem": "由运算符将多个单一表达式连接而成的表达式称为____表达式。",
        "answer": [
          "复合",
          "复合型"
        ],
        "answerText": "复合",
        "analysis": "解析：PPT第15页指出，单一表达式是一个单一的值（常量、变量、函数或列名），复合表达式由运算符将多个单一表达式连接而成，如1+7+3。",
        "page": 15
      },
      {
        "id": "ch6-ppt-b08",
        "type": "blank",
        "stem": "MySQL表达式是由运算符将常量、变量、字段名和____等组合连接而成的有意义的字符序列。",
        "answer": [
          "函数",
          "函数名"
        ],
        "answerText": "函数",
        "analysis": "解析：PPT第14页给出表达式的定义：由运算符将常量、变量、字段名和函数等组合连接而成的有意义的字符序列。",
        "page": 14
      },
      {
        "id": "ch6-ppt-s14",
        "type": "single",
        "stem": "使用delimiter把结束符改为“//”或“$$”后，编程结束时应执行（ ）将结束符改回默认值。",
        "options": [
          "A. delimiter ;",
          "B. delimiter //",
          "C. delimiter $$",
          "D. reset delimiter"
        ],
        "answer": "A",
        "analysis": "解析：PPT第18页强调，最后要把结束符定义为“;”，因为这是MySQL的默认结束符，实际编程要养成这个习惯。考点为“恢复默认结束符”。故选A。",
        "page": 18
      },
      {
        "id": "ch6-ppt-s15",
        "type": "single",
        "stem": "在MySQL中，局部变量、begin-end语句块和流程控制语句只能用于（ ）的定义内部。",
        "options": [
          "A. 函数、存储过程、游标和触发器",
          "B. 视图、索引和表",
          "C. 数据库和表空间",
          "D. 任意一条SQL语句"
        ],
        "answer": "A",
        "analysis": "解析：PPT第19页指出，局部变量、begin-end语句块和流程控制语句等只能用于函数、存储过程、游标和触发器的定义内部。考点为“begin-end语句块”。故选A。",
        "page": 19
      },
      {
        "id": "ch6-ppt-b09",
        "type": "blank",
        "stem": "MySQL命令行默认的语句结束符是____。",
        "answer": [
          "分号",
          "；",
          ";"
        ],
        "answerText": "分号",
        "analysis": "解析：PPT第16页指出，默认MySQL的命令行结束符就是“;”，而函数和存储过程中含有很多分号，因此创建前需用delimiter更换结束符。",
        "page": 16
      },
      {
        "id": "ch6-ppt-s16",
        "type": "single",
        "stem": "预处理SQL语句能实现“一次解析，多次执行”的性能优势，主要原因是解析成功后的语句被保存到了（ ）。",
        "options": [
          "A. 客户端内存",
          "B. MySQL服务器缓存",
          "C. 临时表",
          "D. 错误日志"
        ],
        "answer": "B",
        "analysis": "解析：PPT第20-21页指出，预处理语句第一次运行解析成功后保存到MySQL服务器缓存中，以后每次执行无需再次解析，从而实现“一次解析，多次执行”。考点为“静态SQL与预处理SQL”“性能优势”。故选B。",
        "page": 20
      },
      {
        "id": "ch6-ppt-s17",
        "type": "single",
        "stem": "关于prepare语句，下列说法正确的是（ ）。",
        "options": [
          "A. preparable_stmt可以包含多条SQL语句",
          "B. 参数制作符“?”只能用于数据值应出现的位置，不能用于SQL关键词和标识符",
          "C. 预处理语句的范围是全局的，所有客户端会话都能看到",
          "D. 同名预处理语句已存在时会直接报错，不会解除分配"
        ],
        "answer": "B",
        "analysis": "解析：PPT第22页说明，preparable_stmt必须是单一SQL语句；“?”只能用于数据值应出现的位置，不用于SQL关键词和标识符；同名预处理语句会隐含解除分配；其范围是客户端会话。考点为“prepare说明”。故选B。",
        "page": 22
      },
      {
        "id": "ch6-ppt-s18",
        "type": "single",
        "stem": "预处理语句的SQL语法可以在已存储的过程中使用，但不能在（ ）中使用。",
        "options": [
          "A. 存储函数或触发器",
          "B. 存储过程",
          "C. 客户端会话",
          "D. select语句"
        ],
        "answer": "A",
        "analysis": "解析：PPT第27页指出，预处理语句的SQL语法可在已存储的过程中使用，但不能在已存储的函数或触发程序中使用。考点为“使用限制”。故选A。",
        "page": 27
      },
      {
        "id": "ch6-ppt-b10",
        "type": "blank",
        "stem": "execute语句执行含参数制作符的预处理语句时，必须提供____子句列出用户会话变量。",
        "answer": [
          "using",
          "USING"
        ],
        "answerText": "using",
        "analysis": "解析：PPT第23页指出，若预处理语句包含参数制造符，必须提供列举用户会话变量的using子句，且变量数目须与参数制作符数量相同。",
        "page": 23
      },
      {
        "id": "ch6-ppt-s19",
        "type": "single",
        "stem": "使用双连线“--”作注释时，其后必须加一个（ ）。",
        "options": [
          "A. 空格",
          "B. 分号",
          "C. 逗号",
          "D. 引号"
        ],
        "answer": "A",
        "analysis": "解析：PPT第28页特别提示，双连线“--”后一定要加一个空格，否则不构成注释。考点为“--注释”。故选A。",
        "page": 28
      },
      {
        "id": "ch6-ppt-s20",
        "type": "single",
        "stem": "下列注释方式中，可对多行内容进行块注释的是（ ）。",
        "options": [
          "A. #",
          "B. --",
          "C. /* … */",
          "D. //"
        ],
        "answer": "C",
        "analysis": "解析：PPT第28页指出，开始注释对“/*”和结束注释对“*/”之间的所有内容均视为注释，可跨行；#和--都只注释到行尾。考点为“/*…*/注释”。故选C。",
        "page": 28
      },
      {
        "id": "ch6-ppt-b11",
        "type": "blank",
        "stem": "使用井号“#”注释时，从该字符到____都是注释内容。",
        "answer": [
          "行尾",
          "行末",
          "该行末尾"
        ],
        "answerText": "行尾",
        "analysis": "解析：PPT第28页指出，井号字符“#”从该字符到行尾都是注释内容。",
        "page": 28
      },
      {
        "id": "ch6-ppt-b12",
        "type": "blank",
        "stem": "注释是程序代码中____的文本字符串，用于对代码进行说明或诊断。",
        "answer": [
          "不被执行",
          "不执行",
          "不会被执行"
        ],
        "answerText": "不被执行",
        "analysis": "解析：PPT第28页给出注释的概念：注释是程序代码中不被执行的文本字符串，用于对代码进行说明或进行诊断。",
        "page": 28
      },
      {
        "id": "ch6-ppt-s21",
        "type": "single",
        "stem": "在MySQL中，利用create function语句创建自定义函数必须具有（ ）权限。",
        "options": [
          "A. create routine",
          "B. create user",
          "C. select",
          "D. alter"
        ],
        "answer": "A",
        "analysis": "解析：PPT第29页指出，创建函数必须具有create routine权限，并且alter routine和execute权限被自动授予它的创建者。考点为“创建函数的权限”。故选A。",
        "page": 29
      },
      {
        "id": "ch6-ppt-s22",
        "type": "single",
        "stem": "创建自定义函数的语法中，用于指定函数返回值类型的关键字是（ ）。",
        "options": [
          "A. returns",
          "B. return",
          "C. begin",
          "D. characteristics"
        ],
        "answer": "A",
        "analysis": "解析：PPT第30页的语法格式为create function func_name(参数列表) returns return_type …，其中returns用于指定函数返回值类型；return是函数体中的返回语句。考点为“创建函数语法”。故选A。",
        "page": 30
      },
      {
        "id": "ch6-ppt-s23",
        "type": "single",
        "stem": "自定义函数参数形式中，表示“输入输出参数”的是（ ）。",
        "options": [
          "A. in",
          "B. out",
          "C. inout",
          "D. returns"
        ],
        "answer": "C",
        "analysis": "解析：PPT第31页指出，in表示输入参数，out表示输出参数，inout表示输入输出参数。考点为“参数形式”。故选C。",
        "page": 31
      },
      {
        "id": "ch6-ppt-s24",
        "type": "single",
        "stem": "函数体以begin…end为起止符，其中必须有（ ）语句表示函数返回值表达式。",
        "options": [
          "A. return",
          "B. returns",
          "C. select",
          "D. set"
        ],
        "answer": "A",
        "analysis": "解析：PPT第32页指出，begin…end为函数体起止符，函数体内要有“return return_values;”语句表示函数返回值表达式。考点为“函数体”。故选A。",
        "page": 32
      },
      {
        "id": "ch6-ppt-b13",
        "type": "blank",
        "stem": "函数特征选项中，用于指定SQL安全性的写法是 sql ____ {definer|invoker}。",
        "answer": [
          "security",
          "SECURITY"
        ],
        "answerText": "security",
        "analysis": "解析：PPT第32页列出函数特征选项，其中包括“sql security {definer|invoker}”，用于指定SQL安全性。",
        "page": 32
      },
      {
        "id": "ch6-ppt-b14",
        "type": "blank",
        "stem": "函数rectangle_area(long1,wide1)用于计算长方形面积，调用select rectangle_area(5,4)的结果是____。",
        "answer": [
          "20"
        ],
        "answerText": "20",
        "analysis": "解析：PPT第33页定义rectangle_area返回long1*wide1，第35页示例调用select rectangle_area(5,4)，即5×4=20。考点为“调用函数”。",
        "page": 35
      },
      {
        "id": "ch6-ppt-s25",
        "type": "single",
        "stem": "查看当前数据库中所有自定义函数信息，在函数较少时可使用（ ）。",
        "options": [
          "A. show function status;",
          "B. show create function;",
          "C. drop function;",
          "D. alter function;"
        ],
        "answer": "A",
        "analysis": "解析：PPT第36页指出，show function status用于查看当前数据库所有自定义函数信息，函数较多时可用show function status like 模式。考点为“查看函数信息”。故选A。",
        "page": 36
      },
      {
        "id": "ch6-ppt-s26",
        "type": "single",
        "stem": "要查看指定数据库（如teaching）中的所有自定义函数名，可查询MySQL.proc表，其type字段应等于（ ）。",
        "options": [
          "A. 'procedure'",
          "B. 'function'",
          "C. 'trigger'",
          "D. 'table'"
        ],
        "answer": "B",
        "analysis": "解析：PPT第36页给出的语句为select name from MySQL.proc where db='teaching' and type='function';，用于查看指定数据库中的所有自定义函数名。考点为“按数据库查看函数名”。故选B。",
        "page": 36
      },
      {
        "id": "ch6-ppt-s27",
        "type": "single",
        "stem": "函数的详细信息保存在information_schema数据库的（ ）表中。",
        "options": [
          "A. tables",
          "B. columns",
          "C. routines",
          "D. triggers"
        ],
        "answer": "C",
        "analysis": "解析：PPT第37页指出，函数信息都保存在information_schema数据库的routines表中，可用select语句检索。考点为“查看函数详细信息”。故选C。",
        "page": 37
      },
      {
        "id": "ch6-ppt-s28",
        "type": "single",
        "stem": "alter function语句仅用于更改函数的特性，不能更改（ ）。",
        "options": [
          "A. 注释（comment）",
          "B. SQL安全性",
          "C. 数据访问特性",
          "D. 参数和函数体"
        ],
        "answer": "D",
        "analysis": "解析：PPT第38页说明，alter function仅用于更改函数特性（注释、SQL安全性、数据访问特性等），不能更改函数参数或主体，需修改时必须drop后重建。考点为“修改函数”。故选D。",
        "page": 38
      },
      {
        "id": "ch6-ppt-b15",
        "type": "blank",
        "stem": "MySQL中删除自定义函数使用的语句是 drop ____。",
        "answer": [
          "function",
          "FUNCTION"
        ],
        "answerText": "function",
        "analysis": "解析：PPT第40页指出，使用“drop function func_name”删除自定义函数，如drop function get_name;。",
        "page": 40
      },
      {
        "id": "ch6-ppt-s29",
        "type": "single",
        "stem": "利用MySQL语言编程，通过控制流语句可以实现程序的（ ）3种基本结构。",
        "options": [
          "A. 顺序、选择和循环",
          "B. 输入、处理和输出",
          "C. 定义、赋值和调用",
          "D. 创建、修改和删除"
        ],
        "answer": "A",
        "analysis": "解析：PPT第41页指出，通过控制流语句可以实现程序的顺序、选择和循环等3种基本结构，进而编写较复杂的存储过程、函数和触发器。考点为“三种基本结构”。故选A。",
        "page": 41
      },
      {
        "id": "ch6-ppt-s30",
        "type": "single",
        "stem": "if语句执行时，当所有条件都不满足，则执行（ ）后的内容。",
        "options": [
          "A. then",
          "B. elseif",
          "C. else",
          "D. end if"
        ],
        "answer": "C",
        "analysis": "解析：PPT第42页指出，if语句依次判断条件，以上都不满足时执行else语句后的内容。考点为“if语句”。故选C。",
        "page": 42
      },
      {
        "id": "ch6-ppt-s31",
        "type": "single",
        "stem": "case语句首先从when后的value中查找与（ ）后的value相等的值，找到则执行该分支。",
        "options": [
          "A. case",
          "B. when",
          "C. else",
          "D. end"
        ],
        "answer": "A",
        "analysis": "解析：PPT第44页指出，case语句首先从when后的value中查找与case后的value相等的值，查找到则执行该分支，否则执行else后的内容。考点为“case语句”。故选A。",
        "page": 44
      },
      {
        "id": "ch6-ppt-s32",
        "type": "single",
        "stem": "ifnull(v1,v2)函数中，当v1的值为null时返回（ ）。",
        "options": [
          "A. v1",
          "B. v2",
          "C. null",
          "D. 0"
        ],
        "answer": "B",
        "analysis": "解析：PPT第47页指出，ifnull(v1,v2)中若v1为null则返回v2的值，v1不为null则返回v1的值。考点为“ifnull()函数”。故选B。",
        "page": 47
      },
      {
        "id": "ch6-ppt-b16",
        "type": "blank",
        "stem": "MySQL中常用的条件控制函数有if()、ifnull()以及____函数。",
        "answer": [
          "case",
          "CASE"
        ],
        "answerText": "case",
        "analysis": "解析：PPT第46页指出，MySQL中常用的条件控制函数有if()、ifnull()以及case函数，它们可在MySQL客户机中直接调用。",
        "page": 46
      },
      {
        "id": "ch6-ppt-b17",
        "type": "blank",
        "stem": "case函数中，如果表达式的值与所有when后的“值n”都不相等，则返回____。",
        "answer": [
          "其他值",
          "else后的值",
          "else值"
        ],
        "answerText": "其他值",
        "analysis": "解析：PPT第47页指出，case函数中若表达式的值等于某个“值n”则返回“结果n”，与所有值都不相等时返回“其他值”。",
        "page": 47
      },
      {
        "id": "ch6-ppt-s33",
        "type": "single",
        "stem": "while循环执行时首先判断condition是否为真，若为真则（ ）。",
        "options": [
          "A. 执行循环体",
          "B. 退出循环",
          "C. 结束本次循环",
          "D. 跳过循环体"
        ],
        "answer": "A",
        "analysis": "解析：PPT第50页指出，while执行时首先判断condition条件是否为真，为真则执行循环体，否则退出循环。考点为“while循环”。故选A。",
        "page": 50
      },
      {
        "id": "ch6-ppt-s34",
        "type": "single",
        "stem": "loop循环本身没有内置的循环条件，通常通过（ ）语句退出循环。",
        "options": [
          "A. leave",
          "B. iterate",
          "C. exit",
          "D. break"
        ],
        "answer": "A",
        "analysis": "解析：PPT第52页指出，loop循环没有内置循环条件，但可以通过leave语句退出循环；leave label中的label是自定义的标注名。考点为“loop循环”“leave语句”。故选A。",
        "page": 52
      },
      {
        "id": "ch6-ppt-s35",
        "type": "single",
        "stem": "repeat循环的特点是（ ）。",
        "options": [
          "A. 先执行一次循环体，再判断condition是否为真",
          "B. 先判断condition，再执行循环体",
          "C. 循环体只能执行一次",
          "D. 没有循环条件也无法退出"
        ],
        "answer": "A",
        "analysis": "解析：PPT第56页指出，repeat循环语句先执行一次循环体，之后判断condition条件是否为真，为真则退出循环，否则继续执行。考点为“repeat循环”。故选A。",
        "page": 56
      },
      {
        "id": "ch6-ppt-b18",
        "type": "blank",
        "stem": "编写循环类程序时，应特别注意函数参数和函数体内____的变化情况，稍有不慎就会出现数据错误、死循环等问题。",
        "answer": [
          "变量值",
          "变量的值",
          "变量"
        ],
        "answerText": "变量值",
        "analysis": "解析：PPT第57页提醒，编写循环类程序时应特别注意函数参数和函数体内变量值的变化情况，否则容易出现数据错误、死循环等问题。",
        "page": 57
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
      },
      {
        "id": "ch7-ppt-s08",
        "type": "single",
        "stem": "存储过程在实际应用中可发挥多方面作用，下列各项中不属于PPT所述存储过程主要应用的是（ ）。",
        "options": [
          "A. 控制访问权限",
          "B. 为数据库表中的活动创建审计追踪",
          "C. 将数据定义语句和数据操作语句分隔开",
          "D. 自动为数据表选择合适的存储引擎"
        ],
        "answer": "D",
        "analysis": "解析：PPT第6页指出存储过程主要应用于控制访问权限、为数据库表中的活动创建审计追踪、将关系到数据库及其所有相关应用程序的数据定义语句和数据操作语句分隔开，并无“自动选择存储引擎”之说。故选D。",
        "page": 6
      },
      {
        "id": "ch7-ppt-s09",
        "type": "single",
        "stem": "下列各项中，不属于存储过程优势的是（ ）。",
        "options": [
          "A. 可以对表中数据自动加密存储",
          "B. 提高了处理复杂任务的能力",
          "C. 增强了代码的复用率和共享性",
          "D. 减少了网络中数据的流量"
        ],
        "answer": "A",
        "analysis": "解析：PPT第7页列出存储过程的优势：提高处理复杂任务的能力、增强代码的复用率和共享性、减少网络中数据的流量、在服务器注册加快运行速度、加强系统的安全性，不含“自动加密存储”。故选A。",
        "page": 7
      },
      {
        "id": "ch7-ppt-s10",
        "type": "single",
        "stem": "在MySQL中创建存储过程，必须具有的权限是（ ）。",
        "options": [
          "A. create routine",
          "B. execute",
          "C. alter routine",
          "D. create view"
        ],
        "answer": "A",
        "analysis": "解析：PPT第8页指出，创建存储过程可以使用create procedure语句，要创建存储过程必须具有create routine的权限；execute是执行（调用）存储过程所需的权限。故选A。",
        "page": 8
      },
      {
        "id": "ch7-ppt-b06",
        "type": "blank",
        "stem": "调用存储过程时，call语句中的参数个数必须总是等于存储过程的____个数。",
        "answer": [
          "参数",
          "参数个数"
        ],
        "answerText": "参数",
        "analysis": "解析：PPT第10页指出，call语句中的参数个数必须总是等于存储过程的参数个数。",
        "page": 10
      },
      {
        "id": "ch7-ppt-s11",
        "type": "single",
        "stem": "例2创建的存储过程为avg_score(in c_no char(6))，其中in表示该参数是（ ）。",
        "options": [
          "A. 输出参数",
          "B. 输入输出参数",
          "C. 无参数",
          "D. 输入参数"
        ],
        "answer": "D",
        "analysis": "解析：PPT第12页例2创建avg_score(in c_no char(6))，in为输入参数，调用时用call avg_score('c05109')把课程号传入。故选D。",
        "page": 12
      },
      {
        "id": "ch7-ppt-s12",
        "type": "single",
        "stem": "例4创建的stu_scores(in s_no char(11), out count_num int)用于统计指定同学的考试门数，调用时为out参数传入的实参应使用（ ）。",
        "options": [
          "A. 字符串常量",
          "B. 列名",
          "C. 会话变量（如@c_num）",
          "D. 数学表达式"
        ],
        "answer": "C",
        "analysis": "解析：PPT第14页指出，out参数由存储过程内部用select count(*) into count_num赋值，调用语句为call stu_scores('20125121109', @c_num)，再用select @c_num查看，故实参用会话变量。故选C。",
        "page": 14
      },
      {
        "id": "ch7-ppt-b07",
        "type": "blank",
        "stem": "例5的存储过程do_query中使用____关键字声明局部变量AA并指定默认值0。",
        "answer": [
          "declare",
          "DECLARE"
        ],
        "answerText": "declare",
        "analysis": "解析：PPT第15页例5中语句为declare AA tinyint default 0，用declare声明局部变量。",
        "page": 15
      },
      {
        "id": "ch7-ppt-s13",
        "type": "single",
        "stem": "例6中do_outer()要执行do_insert()的功能，其过程体内应使用的语句是（ ）。",
        "options": [
          "A. call do_insert();",
          "B. exec do_insert();",
          "C. run do_insert();",
          "D. select do_insert();"
        ],
        "answer": "A",
        "analysis": "解析：PPT第17页do_outer()的过程体中以call do_insert();调用另一个存储过程，说明存储过程可以嵌套调用。故选A。",
        "page": 17
      },
      {
        "id": "ch7-ppt-s14",
        "type": "single",
        "stem": "要查看存储过程do_outer的创建语句（定义），应使用的语句是（ ）。",
        "options": [
          "A. show procedure status like 'do_%';",
          "B. select * from do_outer;",
          "C. describe procedure do_outer;",
          "D. show create procedure do_outer;"
        ],
        "answer": "D",
        "analysis": "解析：PPT第18页指出，show procedure status用于查看状态，show create procedure用于查看定义，例中为show create procedure do_outer。故选D。",
        "page": 18
      },
      {
        "id": "ch7-ppt-b08",
        "type": "blank",
        "stem": "定义条件的基本语法为declare condition_name ____ for condition_type。",
        "answer": [
          "condition",
          "CONDITION"
        ],
        "answerText": "condition",
        "analysis": "解析：PPT第20页给出定义条件的语法：declare condition_name condition for condition_type。",
        "page": 20
      },
      {
        "id": "ch7-ppt-b09",
        "type": "blank",
        "stem": "处理程序的类型中，表示遇到错误不做处理、继续执行其他MySQL语句的是____。",
        "answer": [
          "continue",
          "CONTINUE"
        ],
        "answerText": "continue",
        "analysis": "解析：PPT第22页指出，handler_type取continue或exit，continue表示遇到错误不处理、继续执行其他MySQL语句。",
        "page": 22
      },
      {
        "id": "ch7-ppt-s15",
        "type": "single",
        "stem": "定义处理程序时，not found用于匹配所有以（ ）开头的sqlstate错误代码。",
        "options": [
          "A. 01",
          "B. 02",
          "C. 03",
          "D. 99"
        ],
        "answer": "B",
        "analysis": "解析：PPT第23页指出，sqlwarning匹配以01开头的sqlstate代码，not found匹配以02开头的，sqlexception匹配其他非前两类的错误代码。故选B。",
        "page": 23
      },
      {
        "id": "ch7-ppt-s16",
        "type": "single",
        "stem": "下列各项中，不属于修改存储过程方法的是（ ）。",
        "options": [
          "A. 删除并重新创建存储过程",
          "B. 使用alter procedure语句修改某些参数",
          "C. 使用update procedure语句修改",
          "D. 先drop procedure再create procedure"
        ],
        "answer": "C",
        "analysis": "解析：PPT第26页指出修改存储过程有两种方法：删除并重新创建，或使用alter procedure语句修改某些参数，MySQL并没有update procedure语句。故选C。",
        "page": 26
      },
      {
        "id": "ch7-ppt-s17",
        "type": "single",
        "stem": "例9执行alter procedure do_insert modifies sql data sql security invoker;，其中modifies sql data表示（ ）。",
        "options": [
          "A. 该存储过程只读",
          "B. 将读写权限改为modifies sql data",
          "C. 存储过程只包含SQL语句",
          "D. 存储过程不包含任何SQL语句"
        ],
        "answer": "B",
        "analysis": "解析：PPT第26页例9说明将读写权限改为modifies sql data，并指明调用者可以执行。故选B。",
        "page": 26
      },
      {
        "id": "ch7-ppt-b10",
        "type": "blank",
        "stem": "修改存储过程可以使用____ procedure语句。",
        "answer": [
          "alter",
          "ALTER"
        ],
        "answerText": "alter",
        "analysis": "解析：PPT第26页指出，另一种修改存储过程的方法是使用alter procedure语句。",
        "page": 26
      },
      {
        "id": "ch7-ppt-s18",
        "type": "single",
        "stem": "例9中alter procedure语句末尾的sql security invoker表示（ ）。",
        "options": [
          "A. 以定义者权限执行",
          "B. 指明调用者可以执行该存储过程",
          "C. 禁止任何用户调用",
          "D. 只允许DBA调用"
        ],
        "answer": "B",
        "analysis": "解析：PPT第26页例9说明sql security invoker用于指明调用者可以执行该存储过程。故选B。",
        "page": 26
      },
      {
        "id": "ch7-ppt-s19",
        "type": "single",
        "stem": "在MySQL中删除已经存在的存储过程，应使用的语句是（ ）。",
        "options": [
          "A. delete procedure",
          "B. remove procedure",
          "C. alter procedure",
          "D. drop procedure"
        ],
        "answer": "D",
        "analysis": "解析：PPT第27页指出，删除存储过程可以使用drop procedure语句，语法为drop procedure [if exists] sp_name。故选D。",
        "page": 27
      },
      {
        "id": "ch7-ppt-s20",
        "type": "single",
        "stem": "drop procedure语句中[if exists]子句的作用是（ ）。",
        "options": [
          "A. 只删除有数据的存储过程",
          "B. 删除同名的所有数据库对象",
          "C. 如果程序或函数不存在，防止发生错误",
          "D. 强制终止正在运行的存储过程"
        ],
        "answer": "C",
        "analysis": "解析：PPT第27页指出，if exists子句是MySQL的扩展，如果程序或函数不存在，它防止发生错误。故选C。",
        "page": 27
      },
      {
        "id": "ch7-ppt-b11",
        "type": "blank",
        "stem": "删除存储过程do_insert的语句是drop procedure if exists ____;",
        "answer": [
          "do_insert",
          "DO_INSERT"
        ],
        "answerText": "do_insert",
        "analysis": "解析：PPT第27页删除存储过程的示例为drop procedure if exists do_insert;，sp_name处写要删除的存储过程名。",
        "page": 27
      },
      {
        "id": "ch7-ppt-b12",
        "type": "blank",
        "stem": "drop procedure语句的基本语法为drop procedure [____] sp_name。",
        "answer": [
          "if exists",
          "IF EXISTS"
        ],
        "answerText": "if exists",
        "analysis": "解析：PPT第27页给出语法drop procedure [if exists] sp_name，方括号中为可选的if exists子句。",
        "page": 27
      },
      {
        "id": "ch7-ppt-s21",
        "type": "single",
        "stem": "关于函数与存储过程的返回值，下列说法正确的是（ ）。",
        "options": [
          "A. 函数必须有且仅有一个返回值并须指定类型",
          "B. 函数可以有多个返回值",
          "C. 存储过程必须有一个返回值",
          "D. 存储过程与函数都必须有返回值"
        ],
        "answer": "A",
        "analysis": "解析：PPT第28页指出，函数必须有且仅有一个返回值且必须指定返回值类型；存储过程可以没有返回值，也可以有一个或多个返回值，需用out或inout参数定义。故选A。",
        "page": 28
      },
      {
        "id": "ch7-ppt-s22",
        "type": "single",
        "stem": "关于函数与存储过程对结果集的处理，下列说法正确的是（ ）。",
        "options": [
          "A. 函数可以返回多个结果集",
          "B. 存储过程不能返回结果集",
          "C. 函数体可用select…into赋值但不能返回结果集，存储过程可以返回多个结果集",
          "D. 函数和存储过程都不能返回结果集"
        ],
        "answer": "C",
        "analysis": "解析：PPT第29页指出，函数体内可以使用select…into为变量赋值，但不能用select语句返回结果集；存储过程没有这方面的限制，甚至可以返回多个结果集。故选C。",
        "page": 29
      },
      {
        "id": "ch7-ppt-s23",
        "type": "single",
        "stem": "关于函数与存储过程的调用方式，下列说法正确的是（ ）。",
        "options": [
          "A. 函数可直接嵌入SQL语句或表达式，存储过程一般需用call单独调用",
          "B. 函数必须使用call关键字调用",
          "C. 存储过程可以直接嵌入SQL表达式中使用",
          "D. 函数和存储过程都必须用call调用"
        ],
        "answer": "A",
        "analysis": "解析：PPT第29页指出，函数可以直接嵌入到SQL语句或MySQL表达式中，并可扩展标准SQL；存储过程一般需要单独调用，调用时需要使用call关键字。故选A。",
        "page": 29
      },
      {
        "id": "ch7-ppt-s24",
        "type": "single",
        "stem": "与存储过程相比，函数体的限制较多，下列语句中不能在函数体中使用的（ ）。",
        "options": [
          "A. select…into赋值语句",
          "B. declare声明语句",
          "C. if…then条件语句",
          "D. start transaction、commit、rollback等事务语句"
        ],
        "answer": "D",
        "analysis": "解析：PPT第30页指出，函数体内不能使用以显式或隐式方式打开、开始或结束事务的语句（如start transaction、commit、rollback、set autocommit=0），也不能使用预处理SQL语句。故选D。",
        "page": 30
      },
      {
        "id": "ch7-ppt-b13",
        "type": "blank",
        "stem": "存储过程或函数可以重复使用，还可以增强数据的____访问控制。",
        "answer": [
          "安全",
          "安全性"
        ],
        "answerText": "安全",
        "analysis": "解析：PPT第28页指出，使用存储过程或者函数可以增强数据的安全访问控制，可以设定只有某些用户才具有执行权。",
        "page": 28
      },
      {
        "id": "ch7-ppt-s25",
        "type": "single",
        "stem": "游标在MySQL中是一种对（ ）进行访问的机制。",
        "options": [
          "A. 索引",
          "B. 视图定义",
          "C. select语句结果集",
          "D. 存储引擎"
        ],
        "answer": "C",
        "analysis": "解析：PPT第31页指出，游标在MySQL中是一种对select语句结果集进行访问的机制，允许用户访问单独的数据行。故选C。",
        "page": 31
      },
      {
        "id": "ch7-ppt-s26",
        "type": "single",
        "stem": "游标主要包括（ ）两部分。",
        "options": [
          "A. 结果集和游标位置",
          "B. 变量和循环",
          "C. 条件和处理程序",
          "D. 参数和返回值"
        ],
        "answer": "A",
        "analysis": "解析：PPT第32页指出，游标主要包括结果集和游标位置两部分，游标位置是指向结果集中某一行的指针。故选A。",
        "page": 32
      },
      {
        "id": "ch7-ppt-b14",
        "type": "blank",
        "stem": "声明游标需要使用____语句。",
        "answer": [
          "declare",
          "DECLARE"
        ],
        "answerText": "declare",
        "analysis": "解析：PPT第34页指出，声明游标需要使用declare语句，语法为declare cursor_name cursor for select_statement。",
        "page": 34
      },
      {
        "id": "ch7-ppt-s27",
        "type": "single",
        "stem": "关于打开游标，下列说法正确的是（ ）。",
        "options": [
          "A. 打开游标使用fetch语句",
          "B. 游标打开后会自动关闭",
          "C. 使用游标之前必须首先打开游标",
          "D. 打开游标时不需要指定游标名"
        ],
        "answer": "C",
        "analysis": "解析：PPT第35页指出，打开游标需要使用open语句，使用游标之前必须首先打开游标。故选C。",
        "page": 35
      },
      {
        "id": "ch7-ppt-s28",
        "type": "single",
        "stem": "打开游标teach_cursor的正确语句是（ ）。",
        "options": [
          "A. start teach_cursor;",
          "B. open teach_cursor;",
          "C. begin teach_cursor;",
          "D. use teach_cursor;"
        ],
        "answer": "B",
        "analysis": "解析：PPT第35页给出打开游标的语法open cursor_name;，打开teach_cursor的语句为open teach_cursor;。故选B。",
        "page": 35
      },
      {
        "id": "ch7-ppt-b15",
        "type": "blank",
        "stem": "打开游标需要使用____语句。",
        "answer": [
          "open",
          "OPEN"
        ],
        "answerText": "open",
        "analysis": "解析：PPT第35页指出，打开游标需要使用open语句。",
        "page": 35
      },
      {
        "id": "ch7-ppt-b16",
        "type": "blank",
        "stem": "打开前面创建的teach_cursor游标，应执行open ____;",
        "answer": [
          "teach_cursor",
          "TEACH_CURSOR"
        ],
        "answerText": "teach_cursor",
        "analysis": "解析：PPT第35页打开teach_cursor游标的示例语句为open teach_cursor;。",
        "page": 35
      },
      {
        "id": "ch7-ppt-s29",
        "type": "single",
        "stem": "从游标中提取数据需要使用fetch语句，其功能是（ ）。",
        "options": [
          "A. 声明结果集",
          "B. 获取游标当前指针的记录并传给指定变量列表",
          "C. 关闭游标并释放资源",
          "D. 打开游标"
        ],
        "answer": "B",
        "analysis": "解析：PPT第36页指出，fetch语句的功能是获取游标当前指针的记录，并传给指定变量列表。故选B。",
        "page": 36
      },
      {
        "id": "ch7-ppt-s30",
        "type": "single",
        "stem": "MySQL的游标是（ ）的。",
        "options": [
          "A. 可双向滚动",
          "B. 向前只读",
          "C. 可随机定位任意行",
          "D. 可直接修改结果集数据"
        ],
        "answer": "B",
        "analysis": "解析：PPT第36页指出，MySQL的游标是向前只读的，只能顺序地从开始往后读取结果集，不能从后往前，也不能直接跳到中间的记录。故选B。",
        "page": 36
      },
      {
        "id": "ch7-ppt-b17",
        "type": "blank",
        "stem": "fetch语句中变量名的个数必须与声明游标时select语句结果集中的____个数保持一致。",
        "answer": [
          "字段",
          "列"
        ],
        "answerText": "字段",
        "analysis": "解析：PPT第37页指出，变量名的个数必须与声明游标时使用的select语句结果集中的字段个数保持一致。",
        "page": 37
      },
      {
        "id": "ch7-ppt-s31",
        "type": "single",
        "stem": "fetch语句每次仅提取一条记录，因此需要（ ）配合才能遍历整个结果集。",
        "options": [
          "A. 子查询",
          "B. 事务",
          "C. 触发器",
          "D. 循环语句"
        ],
        "answer": "D",
        "analysis": "解析：PPT第37页指出，fetch语句每次只提取一条记录，需要循环语句配合才能实现整个结果集的遍历，一般用Loop和while比较清楚。故选D。",
        "page": 37
      },
      {
        "id": "ch7-ppt-s32",
        "type": "single",
        "stem": "游标错误处理程序应该放在（ ）。",
        "options": [
          "A. 声明游标语句之前",
          "B. begin语句之前",
          "C. end语句之后",
          "D. 声明游标语句之后"
        ],
        "answer": "D",
        "analysis": "解析：PPT第38页指出，游标错误处理程序应该放在声明游标语句之后，游标通常结合错误处理程序一起使用以结束结果集的访问。故选D。",
        "page": 38
      },
      {
        "id": "ch7-ppt-b18",
        "type": "blank",
        "stem": "提取完最后一条记录后再次执行fetch，将产生ERROR ____ (02000): No data to fetch错误。",
        "answer": [
          "1329"
        ],
        "answerText": "1329",
        "analysis": "解析：PPT第38页指出，提取最后一条记录后再次执行fetch会产生“ERROR 1329 (02000): No data to fetch”错误。",
        "page": 38
      },
      {
        "id": "ch7-ppt-s33",
        "type": "single",
        "stem": "关闭游标的目的在于（ ）。",
        "options": [
          "A. 删除游标的定义",
          "B. 重新声明游标以便再次使用",
          "C. 释放游标打开时产生的结果集，通知服务器释放游标占用的资源",
          "D. 提交当前事务"
        ],
        "answer": "C",
        "analysis": "解析：PPT第39页指出，关闭游标的目的在于释放游标打开时产生的结果集，以通知服务器释放游标所占用的资源，节省MySQL服务器的内存空间。故选C。",
        "page": 39
      },
      {
        "id": "ch7-ppt-s34",
        "type": "single",
        "stem": "如果游标没有被明确地关闭，它将（ ）。",
        "options": [
          "A. 在它被声明的begin-end语句块的末尾关闭",
          "B. 永久占用内存直至重启服务器",
          "C. 在下一次open时自动关闭",
          "D. 必须由用户手工kill进程关闭"
        ],
        "answer": "A",
        "analysis": "解析：PPT第39页指出，游标如果没有被明确地关闭，将在它被声明的begin-end语句块的末尾关闭。故选A。",
        "page": 39
      },
      {
        "id": "ch7-ppt-s35",
        "type": "single",
        "stem": "例10的proc_cursor中，当@dovar=1表示已遍历结束时，用（ ）语句退出循环。",
        "options": [
          "A. exit loop",
          "B. leave fetch_Loop",
          "C. break",
          "D. return"
        ],
        "answer": "B",
        "analysis": "解析：PPT第41页例10中，用if @dovar=1 then leave fetch_Loop;结束loop循环，再用close关闭游标。故选B。",
        "page": 40
      },
      {
        "id": "ch7-ppt-b19",
        "type": "blank",
        "stem": "关闭游标使用____语句。",
        "answer": [
          "close",
          "CLOSE"
        ],
        "answerText": "close",
        "analysis": "解析：PPT第39页指出，关闭游标使用close语句，语法为close cursor_name;。",
        "page": 39
      },
      {
        "id": "ch7-ppt-s36",
        "type": "single",
        "stem": "关于触发器，下列说法正确的是（ ）。",
        "options": [
          "A. 触发器必须由用户手工调用才会执行",
          "B. 触发器是一种特殊的存储过程，基于一个表创建，但可以针对多个表进行操作",
          "C. 触发器只能基于视图创建",
          "D. 触发器与存储过程没有任何关系"
        ],
        "answer": "B",
        "analysis": "解析：PPT第42页指出，触发器是一种特殊的存储过程，基于一个表创建，但可以针对多个表进行操作，因此可用来对表实施复杂的完整性约束。故选B。",
        "page": 42
      },
      {
        "id": "ch7-ppt-s37",
        "type": "single",
        "stem": "下列各项中，属于触发器优点的是（ ）。",
        "options": [
          "A. 可以强制比check约束更复杂的限制，且能引用其他表中的列",
          "B. 可以自动提高查询速度",
          "C. 可以替代所有事务控制语句",
          "D. 可以自动为表创建索引"
        ],
        "answer": "A",
        "analysis": "解析：PPT第44页指出，触发器可以强制限制，这些限制比用check约束定义的更复杂，而且与check约束不同，触发器可以引用其他表中的列。故选A。",
        "page": 44
      },
      {
        "id": "ch7-ppt-b20",
        "type": "blank",
        "stem": "create trigger语句中table_name必须引用____表，不能与temporary表或视图关联。",
        "answer": [
          "永久性",
          "永久"
        ],
        "answerText": "永久性",
        "analysis": "解析：PPT第45页指出，table_name必须引用永久性表，不能将触发程序与temporary表或视图关联起来。",
        "page": 45
      },
      {
        "id": "ch7-ppt-s38",
        "type": "single",
        "stem": "下列各项中，不属于触发器trigger_event取值的是（ ）。",
        "options": [
          "A. select",
          "B. insert",
          "C. update",
          "D. delete"
        ],
        "answer": "A",
        "analysis": "解析：PPT第46页指出，trigger_event可以是insert、update、delete之一，分别在新行插入、更改某一行、删除某一行时激活，没有select。故选A。",
        "page": 46
      },
      {
        "id": "ch7-ppt-b21",
        "type": "blank",
        "stem": "触发器事件发生时，MySQL针对要修改数据的表创建的两个结构完全相同的临时表是old和____。",
        "answer": [
          "new",
          "NEW"
        ],
        "answerText": "new",
        "analysis": "解析：PPT第48页指出，MySQL针对要修改数据的表创建了与本表结构完全一样的2个临时表old和new。",
        "page": 48
      },
      {
        "id": "ch7-ppt-b22",
        "type": "blank",
        "stem": "old记录是____的，只能引用，不能更改。",
        "answer": [
          "只读",
          "只读的",
          "read only"
        ],
        "answerText": "只读",
        "analysis": "解析：PPT第49页指出，old记录是只读的，只能引用，不能更改；在before触发程序中可用set new.col_name = value更改new记录的值。",
        "page": 49
      },
      {
        "id": "ch7-ppt-s39",
        "type": "single",
        "stem": "例11创建的触发器cno_update，其触发时机和触发事件是（ ）。",
        "options": [
          "A. before insert",
          "B. after update",
          "C. after delete",
          "D. before delete"
        ],
        "answer": "B",
        "analysis": "解析：PPT第50页例11创建create trigger cno_update after update on course for each row，当course表课程号更改时同步更新score表中的课程号。故选B。",
        "page": 50
      },
      {
        "id": "ch7-ppt-s40",
        "type": "single",
        "stem": "例12中trig_teacher在teacher表删除教师信息后，把教师编号和姓名添加到de_teacher表，使用（ ）引用被删除的记录。",
        "options": [
          "A. new.teacherno、new.tname",
          "B. teacherno、tname",
          "C. delete.teacherno、delete.tname",
          "D. old.teacherno、old.tname"
        ],
        "answer": "D",
        "analysis": "解析：PPT第51页例12为after delete触发器，插入语句为values(old.teacherno, old.tname)，即用old引用被删除的旧记录。故选D。",
        "page": 51
      },
      {
        "id": "ch7-ppt-s41",
        "type": "single",
        "stem": "查看数据库中已存在触发器的状态，可以使用（ ）语句。",
        "options": [
          "A. show triggers",
          "B. show procedure status",
          "C. show events",
          "D. show create database"
        ],
        "answer": "A",
        "analysis": "解析：PPT第52页指出，用户可以通过show triggers语句查看触发器的状态，也可以通过查询information_schema数据库下的triggers表查看触发器信息。故选A。",
        "page": 52
      },
      {
        "id": "ch7-ppt-b23",
        "type": "blank",
        "stem": "查看触发器的状态可以使用show ____语句。",
        "answer": [
          "triggers",
          "TRIGGERS"
        ],
        "answerText": "triggers",
        "analysis": "解析：PPT第52页指出，用户可以通过show triggers语句来查看触发器的状态。",
        "page": 52
      },
      {
        "id": "ch7-ppt-s42",
        "type": "single",
        "stem": "下列各项中，不属于触发器常见应用的是（ ）。",
        "options": [
          "A. 实现数据完整性的复杂约束",
          "B. 数据管理过程中的冗余数据处理",
          "C. 替代索引以提高检索速度",
          "D. 外键约束的级联操作"
        ],
        "answer": "C",
        "analysis": "解析：PPT第53页指出，触发器的常见应用有实现数据完整性的复杂约束、数据管理过程中的冗余数据处理以及外键约束的级联操作，不含“替代索引提高检索速度”。故选C。",
        "page": 53
      },
      {
        "id": "ch7-ppt-s43",
        "type": "single",
        "stem": "例13的stu_delete触发器实现的功能是（ ）。",
        "options": [
          "A. 修改student表时同步更新score表",
          "B. 向student表插入记录时同时插入score表",
          "C. 删除student表中记录时同时删除score表中相应的成绩记录",
          "D. 删除score表记录时同时删除student表记录"
        ],
        "answer": "C",
        "analysis": "解析：PPT第54页例13创建after delete触发器stu_delete，触发器体中delete from score where studentno=old.studentno，实现删除学生记录时级联删除其成绩。故选C。",
        "page": 54
      },
      {
        "id": "ch7-ppt-s44",
        "type": "single",
        "stem": "例14在de_teacher表上创建before insert和after insert两个触发器，向de_teacher插入一行数据后，bef_after表中两条记录出现的先后顺序是（ ）。",
        "options": [
          "A. after触发器写入的记录在前",
          "B. 两条记录顺序随机",
          "C. 只出现before触发器的记录",
          "D. before触发器写入的记录在前"
        ],
        "answer": "D",
        "analysis": "解析：PPT第47页、第56页表明触发器执行顺序为before触发器、表数据修改、after触发器，故before_insert先向bef_after写入记录，after_insert后写入。故选D。",
        "page": 55
      },
      {
        "id": "ch7-ppt-b24",
        "type": "blank",
        "stem": "触发程序中如果包含select语句，该select语句不能返回____。",
        "answer": [
          "结果集"
        ],
        "answerText": "结果集",
        "analysis": "解析：PPT第57页“使用触发器的注意事项”指出，触发程序中如果包含select语句，该select语句不能返回结果集。",
        "page": 57
      },
      {
        "id": "ch7-ppt-s45",
        "type": "single",
        "stem": "关于触发器与事务的原子性，下列说法正确的是（ ）。",
        "options": [
          "A. MyISAM存储引擎中触发器能保证原子性",
          "B. MyISAM和InnoDB都能保证触发器原子性",
          "C. InnoDB存储引擎支持事务，使用触发器可以保证更新操作与触发程序的原子性",
          "D. 触发器与原子性没有任何关系"
        ],
        "answer": "C",
        "analysis": "解析：PPT第57页指出，在MyISAM存储引擎中触发器不能保证原子性；InnoDB存储引擎支持事务，使用触发器可以保证更新操作与触发程序的原子性。故选C。",
        "page": 57
      },
      {
        "id": "ch7-ppt-s46",
        "type": "single",
        "stem": "使用触发器维护InnoDB外键约束的级联选项时，正确的做法是（ ）。",
        "options": [
          "A. 首先维护子表的数据，然后再维护父表的数据",
          "B. 先维护父表的数据，再维护子表的数据",
          "C. 父表与子表必须同时维护",
          "D. 只维护父表数据即可"
        ],
        "answer": "A",
        "analysis": "解析：PPT第58页指出，应首先维护子表的数据，然后再维护父表的数据，否则可能出现错误。故选A。",
        "page": 58
      },
      {
        "id": "ch7-ppt-b25",
        "type": "blank",
        "stem": "在before触发程序中，auto_increment字段的new值为____。",
        "answer": [
          "0"
        ],
        "answerText": "0",
        "analysis": "解析：PPT第58页指出，在before触发程序中，auto_increment字段的new值为0，不是实际插入新记录时自动生成的自增型字段值。",
        "page": 58
      },
      {
        "id": "ch7-ppt-s47",
        "type": "single",
        "stem": "删除触发器的基本形式是（ ）。",
        "options": [
          "A. delete trigger trigger_name",
          "B. drop procedure trigger_name",
          "C. alter trigger trigger_name",
          "D. drop trigger [schema_name.]trigger_name"
        ],
        "answer": "D",
        "analysis": "解析：PPT第59页指出，MySQL使用drop trigger语句删除触发器，基本形式为drop trigger [schema_name.]trigger_name。故选D。",
        "page": 59
      },
      {
        "id": "ch7-ppt-s48",
        "type": "single",
        "stem": "删除名为stu_score的触发器，正确的语句是（ ）。",
        "options": [
          "A. delete trigger stu_score;",
          "B. drop trigger stu_score;",
          "C. drop trigger where name='stu_score';",
          "D. remove trigger stu_score;"
        ],
        "answer": "B",
        "analysis": "解析：PPT第59页删除触发器的示例为mysql> drop trigger stu_score;。故选B。",
        "page": 59
      },
      {
        "id": "ch7-ppt-b26",
        "type": "blank",
        "stem": "MySQL使用drop ____语句来删除数据库中已经存在的触发器。",
        "answer": [
          "trigger",
          "TRIGGER"
        ],
        "answerText": "trigger",
        "analysis": "解析：PPT第59页指出，MySQL使用drop trigger语句来删除触发器。",
        "page": 59
      },
      {
        "id": "ch7-ppt-s49",
        "type": "single",
        "stem": "与操作系统的计划任务相比，MySQL事件调度器的优势是（ ）。",
        "options": [
          "A. 只能精确到每分钟执行一次",
          "B. 不需要开启即可创建事件",
          "C. 一个事件只能执行一次",
          "D. 可以精确到每秒钟执行一个任务"
        ],
        "answer": "D",
        "analysis": "解析：PPT第61页指出，MySQL的事件调度器可以精确到每秒钟执行一个任务，而操作系统的计划任务只能精确到每分钟执行一次，因此有实时优势。故选D。",
        "page": 61
      },
      {
        "id": "ch7-ppt-b27",
        "type": "blank",
        "stem": "查看当前是否已开启事件调度器，可执行select @@____;",
        "answer": [
          "event_scheduler",
          "EVENT_SCHEDULER"
        ],
        "answerText": "event_scheduler",
        "analysis": "解析：PPT第63页指出，可用show variables like 'event_scheduler';或select @@event_scheduler;查看事件调度器是否开启。",
        "page": 63
      },
      {
        "id": "ch7-ppt-s50",
        "type": "single",
        "stem": "在MySQL中创建事件应使用的语句是（ ）。",
        "options": [
          "A. create schedule",
          "B. create task",
          "C. create event",
          "D. create job"
        ],
        "answer": "C",
        "analysis": "解析：PPT第64页指出，创建事件可以使用create event语句，语法为create event [if not exists] event_name on schedule schedule … do sql_statement;。故选C。",
        "page": 64
      },
      {
        "id": "ch7-ppt-s51",
        "type": "single",
        "stem": "在create event的schedule子句中，at子句与every子句的含义分别是（ ）。",
        "options": [
          "A. at表示周期性发生，every表示某时刻发生",
          "B. 两者都表示事件在某个时刻发生",
          "C. at表示事件在某个时刻发生，every表示在指定时间区间内每隔多久发生一次",
          "D. 两者都表示事件周期性发生"
        ],
        "answer": "C",
        "analysis": "解析：PPT第65页指出，at子句表示事件在某个时刻发生，后面可加时间间隔；every子句表示在指定时间区间内每隔多长时间事件发生一次。故选C。",
        "page": 65
      },
      {
        "id": "ch7-ppt-s52",
        "type": "single",
        "stem": "例16创建的direct2事件使用on schedule at current_timestamp + interval 5 second，其含义是（ ）。",
        "options": [
          "A. 5秒后执行",
          "B. 立即执行",
          "C. 5分钟后执行",
          "D. 每天5点执行"
        ],
        "answer": "A",
        "analysis": "解析：PPT第66页例16指出，at current_timestamp + interval 5 second表示在5秒后创建一个表test2。故选A。",
        "page": 66
      },
      {
        "id": "ch7-ppt-s53",
        "type": "single",
        "stem": "例17创建的事件test1_insert使用on schedule every 1 second，其功能是（ ）。",
        "options": [
          "A. 每分钟向test1表插入一条记录",
          "B. 每秒向test1表插入一条记录",
          "C. 每秒清空test1表",
          "D. 每周统计一次test1表"
        ],
        "answer": "B",
        "analysis": "解析：PPT第67页例17创建test1_insert，on schedule every 1 second，do子句为insert into test1 values(current_timestamp)，即每秒插入一条记录。故选B。",
        "page": 67
      },
      {
        "id": "ch7-ppt-b28",
        "type": "blank",
        "stem": "例18中语句 every 1 week ____ curdate()+interval 1 week ends '2021-08-31 12:00:00'，空格处应填____。",
        "answer": [
          "starts",
          "STARTS"
        ],
        "answerText": "starts",
        "analysis": "解析：PPT第68页例18用starts子句指定开始时间、ends子句指定结束时间，语句为starts curdate()+interval 1 week。",
        "page": 68
      },
      {
        "id": "ch7-ppt-s54",
        "type": "single",
        "stem": "例19在事件stu_week中调用存储过程proc_stu()，do子句中应使用的语句是（ ）。",
        "options": [
          "A. exec teaching.proc_stu;",
          "B. select teaching.proc_stu();",
          "C. run teaching.proc_stu();",
          "D. call teaching.proc_stu();"
        ],
        "answer": "D",
        "analysis": "解析：PPT第69页例19在begin…end复合结构中用call teaching.proc_stu();调用存储过程。故选D。",
        "page": 69
      },
      {
        "id": "ch7-ppt-s55",
        "type": "single",
        "stem": "要查看数据库中的所有事件，可以使用（ ）语句。",
        "options": [
          "A. show triggers",
          "B. show events",
          "C. show procedure status",
          "D. show create database"
        ],
        "answer": "B",
        "analysis": "解析：PPT第70页指出，查看所有事件的语法为show events [from schema_name] [like 'pattern'|where expr]，也可用show events\\G格式化显示。故选B。",
        "page": 70
      },
      {
        "id": "ch7-ppt-s56",
        "type": "single",
        "stem": "关于alter event语句，下列说法正确的是（ ）。",
        "options": [
          "A. 可以修改时间调度、重命名事件、添加注释以及临时enable/disable事件",
          "B. 只能修改事件的名称",
          "C. 只能用于删除事件",
          "D. 不能临时关闭一个事件"
        ],
        "answer": "A",
        "analysis": "解析：PPT第71页指出，alter event可修改事件的时间调度、重命名、注释以及enable/disable状态，例21即演示了关闭、开启、改调度周期、重命名并加注释。故选A。",
        "page": 71
      },
      {
        "id": "ch7-ppt-b29",
        "type": "blank",
        "stem": "临时关闭事件test1_insert的语句是alter event test1_insert ____;",
        "answer": [
          "disable",
          "DISABLE"
        ],
        "answerText": "disable",
        "analysis": "解析：PPT第72页例21中临时关闭test1_insert事件的语句为alter event test1_insert disable;。",
        "page": 72
      },
      {
        "id": "ch7-ppt-b30",
        "type": "blank",
        "stem": "把事件test1_insert重命名为insert_test1，使用alter event test1_insert ____ to insert_test1;",
        "answer": [
          "rename",
          "RENAME"
        ],
        "answerText": "rename",
        "analysis": "解析：PPT第72页例21中重命名事件的语句为alter event test1_insert rename to insert_test1 comment '表test1的数据操作';。",
        "page": 72
      }
    ]
  }
];
