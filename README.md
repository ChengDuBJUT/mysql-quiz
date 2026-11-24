# MySQL 课件精读 · 复习站

基于《数据库技术与应用》配套 MySQL PPT 第 1–7 章的复习站：结构化知识点精读 + 基于 PPT 自出的选择 / 填空题。
架构沿用 `python-quiz`（纯静态、无构建、localStorage、深色主题）。

## 当前范围

- **章节精读**：7 章，逐小节梳理知识点，每条标注课件幻灯片序号（Slide 4、Slide 12-16 等），含关键 SQL 代码与易错提示
- **PPT 自测**：基于 PPT 原文自出的选择 / 填空题，解析标注出处；支持即时判分、收藏、错题本、按章/题型筛选
- **学习统计**：各章已练进度与正确率，学习数据可导出 / 导入 JSON 备份
- **大题（待补）**：实验作业（实验四/五/六）等资料收齐后再补入，入口已预留

## 文件分工

```
index.html             页面结构（四个视图）
styles.css             全部样式，颜色走 CSS 语义变量（浅/深双主题）
app.js                 交互：精读渲染 / 判分 / 收藏 / 错题 / 统计 / 进度
data/review.js         生成物：章节知识点数据（window.REVIEW_DATA）
data/questions.js      生成物：题目数据（window.PPT_QUESTIONS）
tools/source/*.json    7 份章节源数据（从 PPT 提炼，手工维护）
tools/build_review.py  构建脚本：chNN.json → data/*.js
tools/check_site.js    浏览器验收脚本
work/extract_pptx.py   PPTX → Markdown 提取脚本（标准库）
```

## 重建数据

```bash
python work/extract_pptx.py E:/mysql/work /tmp/mysql-ppt-extract   # 重新从 PPTX 提取
python tools/build_review.py                                       # 合成前端数据
```

`data/*.js` 是生成物，任何数据修改都要改 `tools/source/chNN.json` 后重跑构建，不要在前端硬编码题目。

## 数据口径

- 知识点与题目均来自配套 PPTX（`../work/第*章*.pptx`），标注的是**章内幻灯片序号**（每份 PPT 从 Slide 1 开始）。
- 填空题等价写法已归一化（中英文逗号 / 斜杠 / 空格）；「看答案」按未掌握计入已答、不计入答对。
- 进度、收藏、错题只存本机浏览器 localStorage（key 前缀 `myq-`），不上传；换设备前先导出备份。
