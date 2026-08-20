# Fans Panel V2.0 首个垂直切片设计

## 1. 目标

使用 Fans Panel 完成V2.0第一条端到端闭环，验证数据模型、图片热点、选项说明、参数关系、组合、工作流、练习和测验是否可共同运行。

## 2. 范围

### 图片
- Fans Panel, Geometry Tab
- Fans Panel, Properties Tab

### 面板
- `panel.fan.geometry`
- `panel.fan.properties`

### 第一批选项

```text
Model as
Shape
Plane
Center coordinates
Radius
Int radius
Fan type
Flow direction
Flow type
Volumetric flow
Mass flow
Total temperature
Gauge pressure
```

## 3. 内容链

```text
SourceReference
→ ImageAsset
→ Hotspot
→ Panel
→ Option
→ OptionValue
→ Relationship
→ Combination
→ WorkflowStep
→ Practice
→ Question
```

## 4. UI Explorer布局

```text
┌──────────────────────────────┬──────────────────────────┐
│ Fans Panel图片                │ Option Detail            │
│                              │ 名称 / 中文               │
│ 可点击热点                    │ 作用                      │
│                              │ 可选值                    │
│ 原图/标记模式                 │ 前置条件 / 关系 / 来源     │
└──────────────────────────────┴──────────────────────────┘
```

## 5. 样例组合

### Guide示例组合

```text
Fan type = Intake
Flow direction = Specified
Vector = (1, 0, 0)
Flow type = Fixed
Mass flow = 0.001 kg/s
```

注意：该组合应标记为 `Tutorial`，不能泛化为所有项目的推荐值。

## 6. 关系候选

以下关系必须在Guide或界面逻辑核实后才能从 `Verify` 升级：

```text
Flow type = Fixed → enables → Volumetric flow / Mass flow
Fan type → affects → 气流边界语义
Flow direction → affects → 模型内气流方向
Total temperature → usedIn → Intake设置
Gauge pressure → usedIn → Intake设置
```

## 7. Workflow

### Basic Fan Setup

1. 创建或选择Fan对象。
2. 设置Geometry。
3. 打开Properties。
4. 选择Fan type。
5. 设置Flow direction。
6. 选择Flow type。
7. 填写对应流量输入。
8. 设置入口温度/表压（如适用）。
9. 完成并在模型中检查方向标记。

每一步应包括：目标、操作位置、截图、选项、常见错误、完成标准和来源。

## 8. Practice

### 练习A：图片热点
在Fans Panel图中定位Flow type。

### 练习B：步骤排序
将Geometry、Properties、Flow direction、Flow type、确认操作按正确顺序排列。

### 练习C：缺项检查
给出一套不完整的Fixed Flow设置，要求识别缺少的输入。

### 练习D：方向识别
根据模型方向标记判断风扇设置是否符合场景要求。

## 9. Quiz

- 图片热点题
- 单选题
- 参数配对题
- 流程排序题
- 场景判断题

每题必须有解释，不只显示正确或错误。

## 10. 验收标准

- [ ] 两张图片均有来源元数据
- [ ] 热点与缩放后的图片位置一致
- [ ] 至少6个核心选项可点击
- [ ] 每个选项至少有用途、值、来源
- [ ] 默认值与Guide示例值分开
- [ ] 至少3条关系可显示
- [ ] 未验证关系有Verify标签
- [ ] Guide示例组合有Tutorial标签
- [ ] Basic Fan Setup可逐步浏览
- [ ] 至少2种练习可交互完成
- [ ] 至少3道题可完成并显示解释
- [ ] 不影响V1已有页面
