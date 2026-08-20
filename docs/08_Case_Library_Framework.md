# Icepak Case Library Framework V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

建立统一的 Icepak 工程案例库。

目标：

```text
Case
↓
Lesson Learned
↓
Design Rule
↓
Knowledge Node
↓
Training Material
```

---

## 2. Case Library Architecture

```text
Case Library
├── EDFA
├── RAMAN
├── OCM
├── OTDR
├── Line Card
├── Chassis
├── Heatsink
├── Fan
└── PCB
```

---

## 3. Standard Case Format

### Metadata

```text
Case ID
Project
Product
Version
Date
Author
```

### Content

```text
Background
Problem
Design Goal
Model Setup
Simulation Result
Analysis
Root Cause
Solution
Lesson Learned
Related Knowledge Nodes
```

---

## 4. Case Template

```markdown
# Case ID

## Product

## Project Stage

## Background

## Problem

## Design Goal

## Initial Design

## Simulation Setup

### Geometry
### Material
### Power
### Boundary
### Mesh
### Solver

## Result

### Temperature
### Flow
### Pressure

## Analysis

## Root Cause

## Corrective Action

## Final Result

## Lesson Learned

## Design Rule Generated

## Related Nodes
```

---

## 5. Case Classification

| Category | Example |
|---|---|
| Thermal Design | Heat Sink, Heat Pipe, TIM |
| Flow Design | Fan, Air Duct, Opening, Grille |
| Simulation Setup | Mesh, Boundary, Material |
| Solver | Convergence, Residual |
| Validation | Simulation vs Test |

---

## 6. Lesson Learned Framework

```text
Situation
↓
Observation
↓
Root Cause
↓
Resolution
↓
Prevention
```

---

## 7. Design Rule Framework

```text
Rule ID
Category
Description
Supporting Cases
Applicability
Limitations
```

Example：

```text
Rule-001
增加翅片高度前，必须同时评估系统压降和风扇工作点。
```

---

## 8. Knowledge Mapping

Each case should link to：

```text
Workflow Nodes
Logic Tree Nodes
Glossary Terms
Troubleshooting Issues
Quiz Questions
Design Rules
```

---

## 9. Image Management

Recommended image sequence：

```text
overview.png
geometry.png
mesh.png
temperature.png
velocity.png
pressure.png
final_design.png
```

---

## 10. AI Ready Structure

```json
{
  "CaseID": "CASE-EDFA-001",
  "Product": "EDFA",
  "Problem": "Pump Laser Over Temperature",
  "RootCause": "Insufficient Airflow",
  "Solution": "Increase Fan RPM",
  "Lesson": "Fan working point shall be evaluated."
}
```

---

## 11. Recommended Initial Cases

- CASE-001 Heat Sink Optimization
- CASE-002 Fan Selection
- CASE-003 Airflow Improvement
- CASE-004 TIM Optimization
- CASE-005 Boundary Condition Error
- CASE-006 Mesh Independence Study
- CASE-007 Simulation vs Test Correlation
