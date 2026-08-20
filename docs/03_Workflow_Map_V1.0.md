# Icepak Workflow Map V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

本文件用于建立 Icepak 仿真的整体认知框架。

目标不是学习菜单在哪里，而是理解：

- 为什么这样建模
- 为什么这样设置
- 设置会影响什么
- 参数之间有什么因果关系

---

## 2. Icepak Simulation Workflow

```text
Geometry
    ↓
Material
    ↓
Power Source
    ↓
Boundary Condition
    ↓
Flow Management
    ↓
Thermal Management
    ↓
Mesh
    ↓
Solver
    ↓
Post Processing
    ↓
Optimization
    ↓
Design Decision
```

---

## 3. Workflow Details

### 3.1 Geometry

#### Why

建立热流和空气流动的物理空间。所有热传导、对流、辐射都依赖几何结构。

#### What

- Block
- PCB
- Package
- Plate
- Wall
- Enclosure

#### Input

- STEP
- Parasolid
- IDF
- PCB Model

#### Output

Computational Domain

#### Impact

- 导热路径
- 气流路径
- 热阻网络
- 压降分布

#### Common Mistakes

- 建模过于复杂，导致网格数量过大
- 忽略关键热路径，导致温度预测失真

---

### 3.2 Material

#### Why

定义热量如何在系统内部传递。

#### What

- Thermal Conductivity
- Density
- Specific Heat
- Viscosity
- Emissivity

#### Impact

```text
Material
↓
Thermal Resistance
↓
Temperature Gradient
```

#### Common Mistakes

- 导热率单位错误
- 忽略各向异性材料
- 使用默认材料而未核对真实物性

---

### 3.3 Power Source

#### Why

热量产生的根源。

#### What

- Constant Power
- Power Density
- Temperature Dependent Power
- Transient Power

#### Logic

```text
Power
↓
Heat Generation
↓
Temperature Rise
```

#### Common Mistakes

- 功耗取值不清楚
- 忽略效率损失
- 功率分布与真实位置不一致

---

### 3.4 Boundary Condition

#### Why

决定热量和流体如何离开系统。

#### What

- Opening
- Pressure Boundary
- Velocity Boundary
- Ambient
- Symmetry

#### Impact

- Airflow
- Pressure Field
- Temperature Distribution

#### Common Mistakes

- 入口出口反向
- 边界距离过近
- 环境温度设置错误

---

### 3.5 Flow Management

#### Why

建立空气流动路径和冷却能力。

#### What

- Fan
- Blower
- Grille
- Opening

#### Logic

```text
Fan
↓
Airflow
↓
Velocity
↓
Convection
↓
Temperature
```

#### Common Mistakes

- 使用自由风量而非实际工作点风量
- 风扇方向错误
- 忽略系统阻抗

---

### 3.6 Thermal Management

#### Why

建立热量从热源到环境的完整散热路径。

#### What

- Thermal Resistance
- Heat Sink
- Heat Pipe
- TIM
- Radiation

#### Logic

```text
Heat Source
↓
Thermal Resistance
↓
Temperature
```

#### Common Mistakes

- 只关注散热器，忽略 TIM 和接触热阻
- 增大散热器后未评估压降增加

---

### 3.7 Mesh

#### Why

将连续空间离散化，使求解器可以计算。

#### Logic

```text
Mesh
↓
Discretization
↓
Accuracy
↓
Convergence
↓
Runtime
```

#### Common Mistakes

- 网格过粗，热点无法捕捉
- 局部关键区域未加密
- 局部加密过度导致计算成本过高

---

### 3.8 Solver

#### Why

求解质量守恒、动量守恒和能量守恒方程。

#### Inputs

- Mesh
- Boundary
- Material
- Power

#### Output

Converged Solution

#### Common Mistakes

- 只看 Residual，不看物理结果
- 收敛标准设置不合理
- 求解器设置改变后未做对比验证

---

### 3.9 Post Processing

#### Why

提取工程决策需要的信息。

#### Results

- Temperature
- Velocity
- Pressure
- Flow Rate
- Heat Flux

#### Common Mistakes

- 只查看最高温度
- 忽略流场和压降
- 没有与设计目标关联

---

### 3.10 Optimization

#### Why

寻找最优设计方案。

#### Variables

- Fan Size
- Fan Speed
- Fin Pitch
- Fin Height
- Airflow Path

#### Common Mistakes

- 优化变量太多
- 缺少工程约束
- 只追求温度最低而忽略成本、重量和制造可行性

---

### 3.11 Design Decision

#### Core Questions

- 是否满足温度目标？
- 是否满足可靠性要求？
- 成本是否合理？
- 制造是否可行？
- 是否还有优化空间？

---

## 4. Icepak First Principle

```text
Heat Source
↓
Thermal Path
↓
Thermal Resistance
↓
Environment
```

任何 Icepak 设置最终都可以回到三个问题：

```text
热从哪里来？
热经过哪里？
热如何离开？
```
