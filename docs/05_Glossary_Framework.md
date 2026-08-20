# Icepak Glossary Framework V1.0

Version: V1.0

Project: Icepak Learning Hub

Author: Xu, Jia Cai

Date: 2026-08-19

---

## 1. Purpose

建立 Icepak 统一术语体系。

目标不是记住术语，而是理解：

- 定义
- 物理意义
- 工程意义
- 相关术语
- 常见误区

---

## 2. Term Template

```text
Term
中文名称
Definition
Physical Meaning
Engineering Meaning
Unit
Related Terms
Common Mistakes
```

---

## 3. Domain Structure

```text
Glossary
├── Heat Transfer
├── Material
├── Flow
├── Boundary
├── Fan
├── Heat Sink
├── Radiation
├── Mesh
├── Solver
├── Post Processing
├── Optimization
└── Reliability
```

---

## 4. Key Terms

### Conduction

中文：热传导

Definition：通过材料内部传递热量。

Engineering Meaning：决定固体内部热扩散能力。

Related Terms：Thermal Conductivity, Thermal Resistance

---

### Convection

中文：对流换热

Definition：流体带走热量的过程。

Engineering Meaning：Icepak 中常见散热机制之一。

Related Terms：Velocity, Flow Rate, Fan, HTC

---

### Radiation

中文：热辐射

Definition：通过电磁波传递热量。

Engineering Meaning：在高温或密闭环境中可能更重要。

Related Terms：Emissivity, View Factor

---

### Thermal Conductivity

中文：导热系数

Symbol：k

Unit：W/m·K

Engineering Meaning：材料导热能力。

Typical Examples：

```text
Aluminum ≈ 200 W/m·K
Copper ≈ 400 W/m·K
FR4 ≈ 0.3 W/m·K
```

---

### Thermal Resistance

中文：热阻

Symbol：Rθ

Unit：℃/W

Core Equation：

```text
Temperature Rise = Power × Thermal Resistance
```

---

### Flow Rate

中文：流量

Unit：CFM 或 m³/s

Engineering Meaning：评价空气冷却能力。

---

### Pressure Drop

中文：压降

Meaning：流体通过系统时的压力损失。

Engineering Meaning：决定风扇实际工作点。

---

### P-Q Curve

中文：风扇压力-流量曲线

Meaning：描述风扇压力与流量之间的关系。

Engineering Meaning：用于确定实际工作点。

---

### Operating Point

中文：工作点

Meaning：风扇曲线与系统阻抗曲线的交点。

Common Mistake：直接采用自由风量。

---

### Fin Pitch

中文：翅片间距

Engineering Meaning：决定换热面积与风阻之间的平衡。

---

### Emissivity

中文：发射率

Range：0 到 1

Engineering Meaning：影响辐射散热能力。

---

### Mesh

中文：网格

Meaning：离散化计算区域。

Engineering Meaning：求解准确性和收敛性的基础。

---

### Residual

中文：残差

Meaning：方程误差指标。

Common Mistake：认为残差低就一定代表结果正确。

---

### Convergence

中文：收敛

Meaning：迭代结果趋于稳定。

Engineering Meaning：收敛是必要条件，但不是结果正确的充分条件。

---

## 5. Planned Expansion

V1.0：约 50 个术语

V2.0：约 100 个术语

V3.0：增加 EDFA、RAMAN、OCM、OTDR 行业专用术语。
