# Icepak Logic Tree Framework V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

本文件用于建立 Icepak 各功能之间的因果关系网络。

Logic Tree 解决的问题是：

```text
为什么这样设置？
设置后影响什么？
参数之间如何关联？
```

---

## 2. First Principle

```text
Power
↓
Heat
↓
Flow
↓
Temperature
↓
Reliability
```

Logic Tree 的本质：

```text
Cause
↓
Mechanism
↓
Effect
```

---

## 3. Top-Level Logic Tree

```text
Icepak
├── Geometry
├── Material
├── Power
├── Boundary
├── Flow
├── Thermal
├── Mesh
├── Solver
├── Post
└── Optimization
```

---

## 4. Geometry Logic

```text
Geometry
↓
Airflow Path
↓
Pressure Drop
↓
Air Velocity
↓
Convection
↓
Temperature
```

Geometry 同时影响：

- Flow
- Thermal
- Mesh

---

## 5. Material Logic

```text
Thermal Conductivity ↑
↓
Thermal Resistance ↓
↓
Temperature ↓
```

```text
Density ↑
↓
Thermal Mass ↑
↓
Transient Response Slower
```

```text
Specific Heat ↑
↓
Heat Capacity ↑
↓
Transient Temperature Change Slower
```

---

## 6. Power Logic

```text
Power
↓
Heat Generation
↓
Temperature Rise
```

Power 类型：

- Constant Power
- Power Density
- Temperature Dependent Power
- Transient Power

---

## 7. Boundary Logic

```text
Boundary
↓
Flow Field
↓
Heat Removal
↓
Temperature
```

Boundary 不合理会直接导致 Flow Field Error 和 Temperature Error。

---

## 8. Flow Logic

### Fan Logic Tree

```text
Fan
├── Flow Rate
├── Pressure Rise
├── P-Q Curve
├── RPM
└── Direction
```

### Fan Cause Chain

```text
Fan
↓
Airflow
↓
Velocity
↓
HTC
↓
Temperature
```

### Pressure Impact

```text
Pressure Drop ↑
↓
Airflow ↓
↓
Temperature ↑
```

### Common Misunderstanding

```text
Fan Flow ↑ ≠ Temperature 必然下降
```

可能原因：

- Flow Saturation
- Thermal Resistance Bottleneck
- Airflow Distribution Problem

---

## 9. Thermal Logic

```text
Heat Source
↓
Resistance
↓
Heat Flow
↓
Temperature
```

### Heat Sink Logic

```text
Heat Sink
├── Fin Height
├── Fin Pitch
├── Fin Thickness
├── Base Thickness
└── Orientation
```

### Fin Pitch Chain

```text
Fin Pitch ↓
↓
Area ↑
↓
Pressure Drop ↑
↓
Airflow ↓
```

最优翅片间距是换热面积与空气流量之间的平衡。

---

## 10. Mesh Logic

```text
Mesh
↓
Discretization
↓
Accuracy
↓
Convergence
```

Trade-Off：

```text
Fine Mesh
↓
Accuracy ↑
Runtime ↑
```

---

## 11. Solver Logic

```text
Mass Conservation
+
Momentum Conservation
+
Energy Conservation
↓
Iteration
↓
Residual
↓
Convergence
```

Critical Thinking：

```text
Residual Low ≠ Result Correct
```

---

## 12. Post Processing Logic

```text
Temperature
Velocity
Pressure
Flow Rate
Heat Flux
```

建议同时查看：

- Maximum Temperature
- Temperature Gradient
- Velocity Distribution
- Pressure Drop
- Heat Flux Path

---

## 13. Troubleshooting Entry Nodes

```text
Temperature Too High → Power → Material → TIM → Flow → Boundary → Mesh
Not Converged → Mesh → Boundary → Turbulence → Solver Settings
Airflow Too Low → Fan → Pressure Drop → Grille → Opening
```
