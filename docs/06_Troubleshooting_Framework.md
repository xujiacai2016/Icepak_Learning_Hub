# Icepak Troubleshooting Framework V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

建立 Icepak 标准问题诊断体系。

```text
问题
↓
症状
↓
可能原因
↓
检查路径
↓
解决方案
```

---

## 2. First Principle

任何 Icepak 问题最终来源于：

```text
Input
↓
Model
↓
Solver
↓
Output
```

或者：

```text
Power
↓
Heat Transfer
↓
Flow
↓
Temperature
```

---

## 3. Top Tree

```text
Icepak Issue
├── Temperature Issue
├── Flow Issue
├── Pressure Issue
├── Mesh Issue
├── Solver Issue
├── Radiation Issue
├── Transient Issue
└── Modeling Issue
```

---

## 4. Temperature Issue

### T1 Temperature Too High

Symptoms：

- 器件超规格
- 热点明显
- 仿真结果远高于预期

Root Cause Tree：

```text
Temperature Too High
├── Power
├── Material
├── Thermal Interface
├── Airflow
├── Heat Sink
├── Boundary
└── Radiation
```

Check Path：

1. Check Power
2. Check Material
3. Check TIM or Contact Resistance
4. Check Fan and Flow Direction
5. Check Heat Sink
6. Check Boundary
7. Check Mesh

Common Fix：

- 修正功耗
- 优化热路径
- 改善风道
- 降低热阻
- 优化散热器

---

### T2 Temperature Too Low

Possible Reasons：

- 功耗过低
- 材料导热率过高
- 风量过大
- 接触热阻遗漏

Verification：

- 与测试结果对比
- 核对功耗
- 核对材料参数
- 核对风扇工作点

---

### T3 Hot Spot

Root Cause Tree：

```text
Hot Spot
├── Local Power
├── Thermal Bottleneck
├── Contact Issue
└── Flow Dead Zone
```

Fix：

- 增加导热路径
- 改善局部风流
- 优化布局
- 减小接触热阻

---

## 5. Flow Issue

### F1 Airflow Too Low

Root Cause Tree：

```text
Airflow Too Low
├── Fan
├── Opening
├── Grille
├── Obstruction
└── Pressure Drop
```

Check：

- P-Q Curve
- RPM
- Direction
- Cable or Bracket Obstruction
- Inlet and Outlet Clearance

Common Mistake：

```text
使用自由风量，而不是实际工作点风量
```

---

### F2 Flow Distribution Uneven

Symptoms：

- 一侧热点严重
- 另一侧温度正常

Possible Reasons：

- Fan Position
- Obstruction
- Opening Location
- Geometry

Fix：

- 调整风扇位置
- 优化风道
- 增加导流结构

---

## 6. Pressure Issue

### P1 Pressure Drop Too High

Possible Reasons：

- Fin Pitch Too Small
- Grille Resistance
- Complex Flow Path
- Cable or Structure Obstruction

Cause Chain：

```text
Pressure Drop ↑
↓
Airflow ↓
↓
Cooling Reduction
↓
Temperature ↑
```

---

## 7. Heat Sink Issue

### H1 Heat Sink Effect Not Obvious

Possible Reasons：

- Flow Limited
- TIM Limited
- Contact Resistance
- Incorrect Orientation
- Heat Spreading Limited

Engineering Reality：

```text
增加散热器面积不一定降低温度
```

---

### H2 Heat Sink Causes Higher Temperature

Cause Chain：

```text
Area ↑
↓
Pressure Drop ↑
↓
Airflow ↓
↓
Temperature ↑
```

---

## 8. Mesh Issue

### M1 Temperature Changes After Refinement

Meaning：尚未达到网格独立性。

Fix：

- Local Refinement
- Mesh Independence Study

---

### M2 Mesh Count Explodes

Reasons：

- Geometry Too Detailed
- Local Refinement Excessive

Fix：

- Geometry Simplification
- Mesh Optimization

---

## 9. Solver Issue

### S1 Not Converged

Root Cause Tree：

```text
Not Converged
├── Mesh
├── Boundary
├── Material
├── Turbulence
└── Solver Settings
```

Check Order：

1. Mesh
2. Boundary
3. Fan
4. Material
5. Solver

---

### S2 Residual Oscillation

Typical Reasons：

- Flow Separation
- Strong Recirculation
- Poor Mesh

Fix：

- Improve Mesh
- Adjust Relaxation
- Check Boundary

---

## 10. Simulation Does Not Match Test

Root Cause Tree：

```text
Simulation Error
├── Geometry
├── Power
├── Material
├── Boundary
├── Fan
├── Contact Resistance
└── Measurement Error
```

Engineering Rule：

优先检查：

```text
Power
Boundary
Fan
```

不要第一时间怀疑 Solver。
