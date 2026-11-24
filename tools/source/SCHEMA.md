# 章节提炼数据规范（agent 必读）

从 `C:/Users/djej/AppData/Local/Temp/mysql-ppt-extract/chNN.md`（MySQL PPTX 提取的 Markdown，`<!-- Slide N -->` 是幻灯片序号标记）提炼知识点并出题。

每章输出一个 JSON 文件 `tools/source/chNN.json`（NN = 01..07），UTF-8，**不要 BOM**。严格遵循下面结构，不要加额外顶层字段。

```json
{
  "chapter": 1,
  "title": "绪论",
  "goals": ["学习目标1", "学习目标2"],
  "ideology": "思政内涵一句话概括（原文有则写，无则空字符串）",
  "sections": [
    {
      "id": "1.1",
      "title": "Python概述",
      "pageRange": "3-6",
      "summary": "用 2-4 句话概括本节讲了什么（基于原文，不编造）",
      "points": [
        { "term": "术语/概念名", "desc": "解释，基于 PPT 原文，不超过 80 字", "page": 3 }
      ],
      "code": ["关键代码片段或 API 写法，原文有则摘录，无则空数组"],
      "tips": ["易错点 / 考点提示，基于原文，无则空数组"]
    }
  ],
  "questions": [
    {
      "id": "ch1-ppt-s01",
      "type": "single",
      "stem": "题干（选择题，4 个选项）",
      "options": ["A. 选项一", "B. 选项二", "C. 选项三", "D. 选项四"],
      "answer": "A",
      "analysis": "解析：为什么选这个，答案在 PPT 第几页讲了什么",
      "page": 5
    },
    {
      "id": "ch1-ppt-b01",
      "type": "blank",
      "stem": "填空题题干，用 ____ 表示空",
      "answer": ["标准答案", "等价写法1", "等价写法2"],
      "answerText": "标准答案",
      "analysis": "解析",
      "page": 7
    }
  ]
}
```

## 硬性要求

1. **知识点必须来自 PPT 原文**，term/desc/summary 不得凭空编造。desc 控制在 80 字内，信息密度高。
2. **page / pageRange 用 `<!-- Slide N -->` 的数字**，是该章 PPT 内部幻灯片序号（从 1 开始），不是全书页码。
3. **sections 覆盖该章所有小节**（原文里的 1.1 / 1.2 / 2.1 等编号），每节 points 3-8 条。
4. **题目数量**：每章 6-8 道单选 + 4-6 道填空，合计 10-14 题。
5. **题目答案必须能在 PPT 原文找到依据**，analysis 写明页码依据。禁止出 PPT 里没有的超纲题。
6. **选项格式**：字符串数组，每项以 `A. ` / `B. ` / `C. ` / `D. ` 开头，内容要有实质区分度；不要出现空选项或纯标点选项。
7. **填空题 answer 是数组**，第一个是标准答案，后面是等价写法（如 `.py`/`py`、中文逗号写法等）；`answerText` 与第一个一致。
8. **id 命名**：`ch{章号}-ppt-s{两位序号}`（单选）、`ch{章号}-ppt-b{两位序号}`（填空），例如 `ch3-ppt-s01`、`ch3-ppt-b01`。
9. 输出 JSON 必须能被 `json.load()` 解析，不要尾逗号，不要注释，不要 Markdown 代码块包裹。
