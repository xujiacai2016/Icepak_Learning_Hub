# Icepak Project File Structure V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

定义 Icepak Learning Hub 的最终项目结构。

目标：建立知识架构、前端架构、数据架构和未来 AI 架构的统一基础。

---

## 2. Design Principles

### Content First

知识资产高于代码。

### Data Driven

页面只负责显示，知识存储在 JSON 和 Markdown 中。

### AI Ready

未来支持 RAG、Vector DB 和 Copilot。

---

## 3. Project Structure

```text
Icepak_Learning_Hub/
│
├── README.md
├── CHANGELOG.md
│
├── docs/
├── data/
├── pages/
├── css/
├── js/
├── components/
├── assets/
└── exports/
```

---

## 4. Docs Folder

```text
docs/
├── 00_Project_Overview.md
├── 01_Vision_and_Goals.md
├── 02_Knowledge_Map_V1.0.md
├── 03_Workflow_Map_V1.0.md
├── 04_Logic_Tree_Framework.md
├── 05_Glossary_Framework.md
├── 06_Troubleshooting_Framework.md
├── 07_Quiz_Framework.md
├── 08_Case_Library_Framework.md
├── 09_UI_Information_Architecture.md
├── 10_Project_File_Structure.md
└── roadmap.md
```

---

## 5. Data Folder

```text
data/
├── workflow.json
├── logic_tree.json
├── glossary.json
├── troubleshooting.json
├── quiz.json
├── cases.json
├── design_rules.json
└── learning_paths.json
```

---

## 6. Pages Folder

```text
pages/
├── dashboard.html
├── workflow.html
├── logic-tree.html
├── glossary.html
├── troubleshooting.html
├── quiz.html
├── case-library.html
├── knowledge-map.html
├── notes.html
└── settings.html
```

---

## 7. CSS Structure

```text
css/
├── variables.css
├── layout.css
├── navigation.css
├── cards.css
├── workflow.css
├── logic-tree.css
├── troubleshooting.css
├── quiz.css
└── dark-theme.css
```

---

## 8. JavaScript Structure

```text
js/
├── app.js
├── data-loader.js
├── router.js
├── search.js
├── workflow.js
├── logic-tree.js
├── glossary.js
├── troubleshooting.js
├── quiz.js
├── cases.js
└── knowledge-map.js
```

---

## 9. Components Folder

```text
components/
├── header.html
├── sidebar.html
├── footer.html
├── search-bar.html
├── knowledge-card.html
├── quiz-card.html
├── case-card.html
└── node-card.html
```

---

## 10. Assets Folder

```text
assets/
├── icons/
├── images/
├── workflow/
├── screenshots/
└── logos/
```

Case screenshot structure：

```text
assets/screenshots/CASE-001/
├── overview.png
├── geometry.png
├── mesh.png
├── temperature.png
├── velocity.png
└── pressure.png
```

---

## 11. Future AI Folder

Reserved：

```text
ai/
├── prompts/
├── embeddings/
├── rag/
└── copilot/
```

---

## 12. MVP Scope

V1.0 must implement：

- Dashboard
- Workflow
- Logic Tree
- Glossary
- Troubleshooting
- Quiz

V1.1：Case Library

V1.2：Knowledge Map

---

## 13. Roo Code Prompt

```text
你是一名资深前端架构师。

请根据：

09_UI_Information_Architecture.md
10_Project_File_Structure.md

创建 Icepak_Learning_Hub 项目骨架。

要求：
1. HTML + CSS + JavaScript
2. 无后端
3. 无数据库
4. 创建完整目录结构
5. 创建所有页面
6. 创建示例 JSON 数据
7. workflow 页面支持流程导航
8. logic tree 页面支持树状展开
9. glossary 支持搜索
10. troubleshooting 支持问题筛选
11. quiz 支持答题
12. 先生成项目骨架，不实现复杂业务逻辑
```

---

## 14. Milestone

```text
Knowledge Architecture     100%
UI Architecture            100%
Project Structure          100%
Frontend Prototype         Next Step
```
