# Icepak UI Information Architecture V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

定义 Icepak Learning Hub 的网页信息架构。

目标：将知识资产转换成可开发、可扩展的网页结构。

---

## 2. Product Positioning

Icepak Learning Hub 用于帮助工程师：

- 理解 Icepak 设置背后的物理逻辑
- 掌握 Icepak 仿真流程
- 建立故障诊断思维
- 沉淀项目案例经验

---

## 3. Information Architecture Overview

```text
Icepak Learning Hub
├── Dashboard
├── Workflow Map
├── Logic Tree
├── Glossary
├── Troubleshooting
├── Quiz
├── Case Library
├── Knowledge Map
├── Notes
└── Settings
```

---

## 4. Navigation Structure

### Top Navigation

```text
Home
Workflow
Logic Tree
Troubleshooting
Quiz
Case Library
Glossary
```

### Left Sidebar

```text
01 Geometry
02 Material
03 Power
04 Boundary
05 Flow
06 Thermal
07 Mesh
08 Solver
09 Post Processing
10 Optimization
11 Design Decision
```

### Right Panel

```text
Related Terms
Related Cases
Related Quiz
Related Troubleshooting
```

---

## 5. Dashboard

Main Sections：

- Start Learning
- Diagnose Problem
- Explore Logic Tree
- Search Glossary
- Practice Quiz
- Review Cases

Function Cards：

- Icepak Workflow
- Logic Tree
- Troubleshooting
- Quiz
- Case Library

---

## 6. Workflow Map Page

Layout：

```text
Left: Workflow Step List
Center: Interactive Workflow Diagram
Right: Selected Step Detail
```

Step Detail：

```text
What
Why
Input
Output
Impact
Common Mistakes
Related Logic Nodes
Related Quiz
Related Cases
```

---

## 7. Logic Tree Page

Main Domains：

```text
Geometry
Material
Power
Boundary
Flow
Thermal
Mesh
Solver
Post
Optimization
```

Node Card：

```text
Node Name
Definition
Cause
Mechanism
Effect
Related Parameters
Common Mistakes
```

---

## 8. Glossary Page

Layout：

```text
Search Bar
Category Filter
Term List
Term Detail Panel
```

Term Detail：

```text
English Term
Chinese Term
Definition
Physical Meaning
Engineering Meaning
Unit
Related Terms
Common Mistakes
```

---

## 9. Troubleshooting Page

User Flow：

```text
Select Symptom
↓
View Possible Causes
↓
Follow Check Path
↓
Apply Fix Suggestions
↓
Record Lesson Learned
```

Issue Card：

```text
Issue Name
Symptoms
Root Cause Tree
Check Path
Common Fix
Related Glossary
Related Cases
Related Quiz
```

---

## 10. Quiz Page

Quiz Levels：

```text
Level 1 Concept
Level 2 Logic
Level 3 Troubleshooting
Level 4 Engineering Decision
```

Quiz Flow：

```text
Select Level
↓
Answer Questions
↓
Submit
↓
View Score
↓
Review Explanation
↓
Recommend Related Knowledge
```

---

## 11. Case Library Page

Case List Layout：

```text
Case ID
Product
Problem
Category
Difficulty
Related Knowledge Nodes
```

Case Detail Layout：

```text
Background
Problem
Design Goal
Simulation Setup
Result
Analysis
Root Cause
Corrective Action
Final Result
Lesson Learned
Related Nodes
```

---

## 12. Data Architecture Mapping

Markdown documents should later map to JSON files：

```text
workflow.json
logic_tree.json
glossary.json
troubleshooting.json
quiz.json
cases.json
```

---

## 13. MVP Scope

Must Have：

- Dashboard
- Workflow Map
- Logic Tree
- Glossary Search
- Troubleshooting Guide
- Quiz Practice

Should Have：

- Case Library
- Knowledge Map

Future：

- Notes
- AI Copilot
- User Login
- Database
