# MySQL 课件精读 · 复习站

基于《数据库技术与应用》配套 MySQL PPT 第 1–7 章的复习站：知识点精读 + 选择 / 填空题 + 考试大题。
题库范围已按老师《期末复习》PPT 裁剪：只留考纲内的方向，老师点名的考点逐条对齐。
架构沿用 `python-quiz`（纯静态、无构建、localStorage、深色主题）。

## 当前范围

- **章节精读**：7 章，逐小节梳理知识点，每条标注课件幻灯片序号（Slide 4、Slide 12-16 等），含关键 SQL 代码与易错提示
- **PPT 自测**：588 题（389 单选 + 199 填空），解析标注出处；做题页功能与 `python-quiz` 对齐：
  - 即时判分 + 进度条 + 「答对 / 已答 / 正确率」统计
  - **每题笔记**：随时记坑、记法，按题保存、换题自动带出；支持导出 / 导入 JSON 备份
  - **问 DeepSeek / 问千问**：把题目、我的答案、参考答案、解析打包成讲解请求，塞进 `?q=` 直接打开对应 AI；未作答时只求思路
  - **不会 · 看答案**：不要求作答，直接看答案与解析，并自动记入错题本
  - 上一题 / 下一题、收藏、错题本、快捷键（`1`–`4` 选项、`Enter` 提交、`0` 看答案、`←→` 翻题）
  - 练习中工具栏：全部 / 收藏 / 错题切换、章节 / 题型 / 题量 / 范围筛选、随机顺序、重新开始、交卷
  - **题量**：默认「全部」（682 题一次刷完），也可切成 20/30/50/100 分组；分组会优先抽没做过的题，小结页「再来一组」接着刷
  - **选项乱序**（默认开）：每次开始练习都重排 A/B/C/D 的位置，答案字母跟着搬（题库里 A 做答案的题偏多，防止靠位置蒙）；已答题记住当时那次的顺序，回看不错位。想对照 Word 题库原文顺序可关掉
- **学习统计**：各章已练进度与正确率，学习数据可导出 / 导入 JSON 备份
- **考试大题 53 道**：
  - **问答题 13 道**：复习 PPT 第 3 页点名的 12 个考点（数据模型三要素 / 关系运算 / 字符集层次 / 字符序 / 存储引擎 / 标识符 / 游标 / 视图优点 / 过程与函数区别 / 索引原则 / OLD-NEW / 存储过程优点）+ E-R 图转关系模型例题，每道都给答题要点与完整答案
  - **编程题 40 道**：实验一~六的作业题（函数与表达式、库表操作、数据检索、索引视图、编程基础、存储过程/触发器/事件），每题给 1~3 种写法 + 易错点
  - **考纲自查表**：13 行对照「考点 → 精读章节 → 题库命中题数 → 对应问答题」，点一行直接跳到答案
  - 每题可写「我的草稿」（自动保存）、可标记「已掌握」、可折叠参考答案

## 文件分工

```
index.html                   页面结构（四个视图）
styles.css                   全部样式，颜色走 CSS 语义变量（浅/深双主题）
app.js                       交互：精读渲染 / 判分 / 笔记 / 问AI / 收藏 / 错题 / 统计
data/review.js               生成物：章节知识点数据（window.REVIEW_DATA）
data/questions.js            生成物：题目数据（window.PPT_QUESTIONS）
data/labs.js                 生成物：考试大题（window.EXAM_BIG）
tools/source/chNN.json       7 份章节源数据（从 PPT 提炼，手工维护；sections[].exam 标记考纲内/外）
tools/source/exam_big.json   大题源数据：问答题 + 六个实验 + 考纲对照表
tools/apply_scope.py         按期末范围给小节打 exam 标记（core / keep / off）
tools/add_exam_focus.py      补齐考纲点名但原题库覆盖薄弱的题（按 stem 去重，可重复跑）
tools/build_review.py        构建脚本：chNN.json + exam_big.json → data/*.js（含考纲过滤）
tools/make_word.py           导出 Word 题库（只含考纲内的题）
tools/check_site.js          浏览器验收：数据完整性 + 全站流程
tools/check_quiz_features.js 浏览器验收：做题模块（笔记/AI/看答案/工具栏/快捷键）
tools/check_essay.js         浏览器验收：考试大题（分组/跳转/草稿/已掌握/备份）
work/extract_pptx.py         PPTX → Markdown 提取脚本（标准库）
```

## 重建数据

```bash
python work/extract_pptx.py E:/mysql/work /tmp/mysql-ppt-extract   # 重新从 PPTX 提取
python tools/apply_scope.py --report                               # 看各节考纲标记与题量
python tools/apply_scope.py                                        # 写入 exam 标记（core/keep/off）
python tools/add_exam_focus.py                                     # 补考纲强调点的题（幂等）
python tools/build_review.py                                       # 合成前端数据（off 小节连同题目一起剔除）
```

`data/*.js` 是生成物，任何数据修改都要改 `tools/source/chNN.json` 后重跑构建，不要在前端硬编码题目。

## 数据口径

- 知识点与题目均来自配套 PPTX（`../work/第*章*.pptx`），标注的是**章内幻灯片序号**（每份 PPT 从 Slide 1 开始）。
- 填空题等价写法已归一化（中英文逗号 / 斜杠 / 空格）；「看答案」按未掌握计入已答、不计入答对。
- 进度、收藏、错题、笔记、大题草稿只存本机浏览器 localStorage（key 前缀 `myq-`），不上传；换设备前先导出备份。
- 考纲裁剪口径：`exam=off` 的小节（第1章 MySQL 发展史/版本/安装配置/工具、第2章二进制类型、第3章表空间/临时表、第4章窗口函数/CTE、第6章注释）整节下架，但数据仍保留在 `tools/source/chNN.json`，改标记重跑构建即可恢复。
- 从 682 题裁到 588 题：剔除 112 题未考方向、补 18 题考纲强调点。

## 验收脚本

```
node tools/check_site.js              # 全站 26 项（数据/精读/判分/收藏/进度/视图）
node tools/check_quiz_features.js     # 做题模块 61 项（笔记/AI/看答案/工具栏/快捷键/题量）
node tools/check_option_shuffle.js    # 选项乱序 14 项（分布/答案搬家/判分/刷新一致性）
node tools/check_essay.js             # 考试大题 23 项（分组/考纲跳转/草稿/已掌握/备份）
```

四套都跑一遍再推，都要零失败。启动本地服务：`python -m http.server 8766`（脚本默认打 `http://127.0.0.1:8766/index.html`）。
