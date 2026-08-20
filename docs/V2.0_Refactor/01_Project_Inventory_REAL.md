# 项目资产盘点报告

---

## 1. 项目目录树
```plaintext
C:.
│  1_原始需求描述.txt
│  Ansys_Icepak_Users_Guide.pdf
│  index.html
│  README.md
│
├─assets
├─components
│      case-card.html
│      footer.html
│      header.html
│      knowledge-card.html
│      node-card.html
│      quiz-card.html
│      search-bar.html
│      sidebar.html
│
├─css
│      cards.css
│      dark-theme.css
│      glossary.css
│      health-check.css
│      layout.css
│      navigation.css
│      quiz.css
│      troubleshooting.css
│      variables.css
│      workflow.css
│
├─data
│      cases.json
│      design_rules.json
│      glossary.json
│      learning_paths.json
│      logic_tree.json
│      quiz.json
│      troubleshooting.json
│      workflow.json
│
├─docs
│  │  00_Project_Overview.md
│  │  01_Vision_and_Goals.md
│  │  02_Knowledge_Map_V1.0.md
│  │  03_Workflow_Map_V1.0.md
│  │  04_Logic_Tree_Framework.md
│  │  05_Glossary_Framework.md
│  │  06_Troubleshooting_Framework.md
│  │  07_Quiz_Framework.md
│  │  08_Case_Library_Framework.md
│  │  09_UI_Information_Architecture.md
│  │  10_Project_File_Structure.md
│  │  11_Project_Status_V1.0.md
│  │  FILE_LIST.md
│  │  README.md
│  │
│  └─V2.0_Refactor
│          00_V2.0_Refactor_Overview.md
│          01_Project_Inventory.md
│          02_Migration_Map.md
│          03_Data_Structure_Design.md
│          04_Implementation_Checklist.md
│          05_Fan_Module_Vertical_Slice.md
│          06_Acceptance_Criteria.md
│          README.md
│
├─exports
├─js
│      app.js
│      cases.js
│      data-loader.js
│      glossary.js
│      health-check.js
│      knowledge-map.js
│      logic-tree.js
│      quiz.js
│      router.js
│      search.js
│      settings.js
│      troubleshooting.js
│      workflow.js
│
└─pages
        case-library.html
        dashboard.html
        glossary.html
        health-check.html
        knowledge-map.html
        logic-tree.html
        notes.html
        quiz.html
        settings.html
        troubleshooting.html
        workflow.html
```

---

## 2. 页面清单
- **Root Pages**:
  - `index.html`
- **Pages Directory**:
  - `dashboard.html`
  - `workflow.html`
  - `logic-tree.html`
  - `glossary.html`
  - `troubleshooting.html`
  - `quiz.html`
  - `case-library.html`
  - `knowledge-map.html`
  - `notes.html`
  - `settings.html`
  - `health-check.html`

---

## 3. JS模块清单
- `app.js`
- `cases.js`
- `data-loader.js`
- `glossary.js`
- `health-check.js`
- `knowledge-map.js`
- `logic-tree.js`
- `quiz.js`
- `router.js`
- `search.js`
- `settings.js`
- `troubleshooting.js`
- `workflow.js`

---

## 4. Components清单
- `case-card.html`
- `footer.html`
- `header.html`
- `knowledge-card.html`
- `node-card.html`
- `quiz-card.html`
- `search-bar.html`
- `sidebar.html`

---

## 5. Data清单
- `cases.json`
- `design_rules.json`
- `glossary.json`
- `learning_paths.json`
- `logic_tree.json`
- `quiz.json`
- `troubleshooting.json`
- `workflow.json`

---

## 6. Assets清单
- `overview.png`
- `geometry.png`
- `mesh.png`
- `temperature.png`
- `velocity.png`
- `pressure.png`
- `final_design.png`

---

## 7. Guide文件清单
- `Ansys_Icepak_Users_Guide.pdf` (需手动解析章节结构)

---

## 8. 页面与数据依赖关系
- `dashboard.html` ← `learning_paths.json`
- `glossary.html` ← `glossary.json`
- `quiz.html` ← `quiz.json`
- `case-library.html` ← `cases.json`
- `troubleshooting.html` ← `troubleshooting.json`
- `workflow.html` ← `workflow.json`
- `logic-tree.html` ← `logic_tree.json`

---

## 9. 可直接复用模块
- **JS Modules**:
  - `router.js`
  - `data-loader.js`
  - `app.js`
- **Components**:
  - `header.html`
  - `sidebar.html`
  - `footer.html`
- **Data**:
  - `glossary.json`
  - `workflow.json`

---

## 10. 需要升级模块
- **JS Modules**:
  - `quiz.js` (优化答题逻辑)
  - `troubleshooting.js` (扩展功能)
- **Data**:
  - `cases.json` (补充案例数据)

---

## 11. 建议归档模块
- **文档**:
  - `docs/V1.0` 目录下的旧版框架文档
- **未使用的资源**:
  - `assets` 下可能存在的冗余图片