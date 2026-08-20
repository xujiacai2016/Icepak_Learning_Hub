# Icepak Quiz Framework V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

建立 Icepak 训练题库体系。

目标不是记忆参数，而是培养：

- 热设计思维
- Icepak 建模逻辑
- 故障分析能力
- 工程决策能力

---

## 2. Learning Pyramid

```text
Level 1 Concept
↓
Level 2 Logic
↓
Level 3 Troubleshooting
↓
Level 4 Engineering Decision
```

---

## 3. Question Types

- Single Choice
- Multiple Choice
- True / False
- Scenario Question
- Engineering Review

---

## 4. Level 1 - Concept Quiz

### L1-Q001

Question：What is Thermal Conductivity?

A. 材料储热能力  
B. 材料导热能力  
C. 材料密度  
D. 空气流量

Answer：B

---

### L1-Q002

Question：Which unit belongs to Thermal Conductivity?

A. W  
B. W/m²  
C. W/m·K  
D. kg/m³

Answer：C

---

### L1-Q003

Question：What is Emissivity?

A. 导热能力  
B. 辐射能力  
C. 热容  
D. 风量

Answer：B

---

## 5. Level 2 - Logic Quiz

### L2-Q001

Question：Increasing airflow will always reduce temperature.

Answer：False

Reason：主要热阻可能不在对流侧。

---

### L2-Q002

Question：Temperature Rise is proportional to:

A. Air Velocity  
B. Fan RPM  
C. Thermal Resistance  
D. Mesh Count

Answer：C

---

### L2-Q003

Correct Chain：

```text
Fan
↓
Velocity
↓
Convection
↓
Temperature
```

Answer：Correct

---

## 6. Level 3 - Troubleshooting Quiz

### L3-Q001

Symptom：Temperature much higher than expected.

First Check：

A. Solver  
B. Color Map  
C. Power  
D. Report Format

Answer：C

---

### L3-Q002

Symptom：Mesh refinement causes 8℃ temperature change.

Meaning：

A. 已经收敛  
B. 网格独立  
C. 尚未达到网格独立  
D. 风量增加

Answer：C

---

### L3-Q003

Symptom：Fan airflow is much lower than datasheet free-air flow.

Most likely reason：P-Q Working Point

---

## 7. Level 4 - Engineering Decision Quiz

### L4-Q001

Case：EDFA Module Temperature = 86℃, Requirement = 80℃.

Options：

A. 增加风量  
B. 增加散热器面积  
C. 升级 TIM  
D. 以上方案都需要基于热阻瓶颈分析

Answer：D

---

### L4-Q002

Case：Increasing fin height by 30%.

Risk：

```text
Pressure Drop ↑
↓
Airflow ↓
↓
Temperature benefit may reduce
```

---

## 8. Quiz Data Structure

```json
{
  "id": "L2-Q001",
  "level": "Logic",
  "domain": "Fan",
  "question": "Increasing airflow always reduces temperature?",
  "answer": "False",
  "explanation": "Thermal resistance may dominate."
}
```

---

## 9. Scoring System

| Level | Weight |
|---|---|
| Concept | 20% |
| Logic | 30% |
| Troubleshooting | 30% |
| Engineering Decision | 20% |

---

## 10. Skill Evaluation

- Beginner: < 60
- Intermediate: 60 to 80
- Advanced: 80 to 90
- Expert: > 90
