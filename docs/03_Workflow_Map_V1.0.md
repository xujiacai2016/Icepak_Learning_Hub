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

### 1. Geometry
**Icepak 操作**：
1. 创建基础几何：
   ![几何创建截图](../../media/geometry-setup.png)
2. 导入外部CAD文件：
   ![CAD导入截图](../../media/cad-import.png)

### 2. Material
**Icepak 操作**：
1. 定义材料属性：
   ![材料定义截图](../../media/material-properties.png)
2. 分配材料到几何：
   ![材料分配截图](../../media/material-assignment.png)

### 3. Power Source
**Icepak 操作**：
1. 定义功耗源：
   ![功耗定义截图](../../media/power-source.png)
2. 设置功耗类型（恒定/密度/瞬态）：
   ![功耗类型截图](../../media/power-type.png)
3. 分配功耗到器件：
   ![功耗分配截图](../../media/power-assignment.png)

### 4. Boundary Condition
**Icepak 操作**：
1. 定义边界条件类型：
   ![边界条件截图](../../media/boundary-condition.png)
2. 设置入口/出口参数：
   ![入口出口截图](../../media/inlet-outlet.png)
3. 分配边界到几何面：
   ![边界分配截图](../../media/boundary-assignment.png)

### 5. Flow Management
**Icepak 操作**：
1. 定义风扇特性曲线：
   ![风扇定义截图](../../media/fan-setup.png)
2. 设置风扇方向和位置：
   ![风扇方向截图](../../media/fan-direction.png)
3. 配置格栅和开口：
   ![格栅开口截图](../../media/grille-opening.png)

### 6. Thermal Management
**Icepak 操作**：
1. 定义散热器和热管：
   ![散热器定义截图](../../media/heat-sink.png)
2. 设置 TIM 和接触热阻：
   ![TIM设置截图](../../media/tim-setup.png)
3. 配置辐射参数：
   ![辐射设置截图](../../media/radiation-setup.png)

### 7. Mesh
**Icepak 操作**：
1. 设置全局网格尺寸：
   ![全局网格截图](../../media/global-mesh.png)
2. 定义局部加密区域：
   ![局部加密截图](../../media/local-refinement.png)
3. 检查网格质量：
   ![网格质量截图](../../media/mesh-quality.png)

### 8. Solver
**Icepak 操作**：
1. 配置求解器参数：
   ![求解器设置截图](../../media/solver-setup.png)
2. 设置收敛标准：
   ![收敛标准截图](../../media/convergence-criteria.png)
3. 监控求解过程：
   ![求解监控截图](../../media/solver-monitoring.png)

### 9. Post Processing
**Icepak 操作**：
1. 提取温度结果：
   ![温度结果截图](../../media/temperature-results.png)
2. 分析流场和压降：
   ![流场分析截图](../../media/flow-analysis.png)
3. 生成报告和图表：
   ![报告生成截图](../../media/report-generation.png)

### 10. Optimization
**Icepak 操作**：
1. 定义优化变量：
   ![优化变量截图](../../media/optimization-variables.png)
2. 设置优化目标和约束：
   ![优化目标截图](../../media/optimization-objective.png)
3. 运行优化并分析结果：
   ![优化结果截图](../../media/optimization-results.png)

### 11. Design Decision
**Icepak 操作**：
1. 对比设计方案：
   ![方案对比截图](../../media/design-comparison.png)
2. 评估可靠性指标：
   ![可靠性评估截图](../../media/reliability-assessment.png)
3. 生成设计决策报告：
   ![决策报告截图](../../media/decision-report.png)

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
