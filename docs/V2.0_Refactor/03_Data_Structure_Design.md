# Icepak Interactive Learning Platform V2.0 数据结构设计

## 1. 数据分层

```text
Source Layer
├─ SourceReference
└─ ImageAsset

Knowledge Layer
├─ Chapter
├─ Panel
├─ Option
├─ OptionValue
├─ Relationship
└─ Combination

Learning Layer
├─ Workflow
├─ WorkflowStep
├─ Practice
├─ Question
├─ Troubleshooting
├─ Case
└─ LearningPath
```

## 2. 通用规范

### ID规范

```text
src.guide.2024r1.ch02.fig2_11
img.guide.ch02.fig2_11
panel.fan.properties
option.fan.flow_type
value.fan.flow_type.fixed
rel.fan.flow_type.mass_flow.requires
combo.fan.intake_fixed_mass_flow
workflow.basic_fan_setup
step.basic_fan_setup.set_flow_type
practice.fan.properties.basic
question.fan.flow_type.001
```

### 证据等级

```json
{
  "evidenceLevel": "official | default | tutorial | practice | verify"
}
```

### 状态字段

```json
{
  "status": "draft | reviewed | verified | deprecated"
}
```

## 3. SourceReference

```json
{
  "id": "src.guide.2024r1.ch02.fig2_11",
  "document": "Ansys_Icepak_Users_Guide",
  "release": "2024 R1",
  "chapter": "Getting Started",
  "section": "Sample Session",
  "page": 33,
  "figure": "Figure 2.11",
  "title": "Fans Panel, Properties Tab",
  "sourceType": "official-guide",
  "copyrightNote": "Use subject to applicable license and internal-use restrictions"
}
```

## 4. ImageAsset

```json
{
  "id": "img.guide.ch02.fig2_11",
  "file": "assets/images/guide/getting-started/ch02-fig2-11-fans-properties.png",
  "title": "Fans Panel, Properties Tab",
  "sourceId": "src.guide.2024r1.ch02.fig2_11",
  "usage": ["ui-explorer", "workflow", "quiz"],
  "hotspots": [
    {
      "id": "hs.fan.flow_type",
      "optionId": "option.fan.flow_type",
      "x": 18.5,
      "y": 34.0,
      "width": 31.0,
      "height": 7.5
    }
  ],
  "status": "draft"
}
```

坐标建议使用图片宽高百分比，便于响应式显示。

## 5. Panel

```json
{
  "id": "panel.fan.properties",
  "name": "Fans Panel",
  "nameZh": "风扇面板",
  "tab": "Properties",
  "category": "fan",
  "imageIds": ["img.guide.ch02.fig2_11"],
  "workflowStage": "model-building",
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "status": "draft"
}
```

## 6. Option

```json
{
  "id": "option.fan.flow_type",
  "name": "Flow type",
  "nameZh": "流量类型",
  "panelId": "panel.fan.properties",
  "category": "fan",
  "purpose": "待依据Guide核实填写",
  "valueIds": [
    "value.fan.flow_type.linear",
    "value.fan.flow_type.non_linear",
    "value.fan.flow_type.fixed"
  ],
  "defaultValueId": "",
  "tutorialValueId": "value.fan.flow_type.fixed",
  "recommendedValueIds": [],
  "prerequisiteOptionIds": [],
  "relationshipIds": [],
  "combinationIds": [],
  "effects": {
    "accuracy": "",
    "convergence": "",
    "runtime": "",
    "memory": ""
  },
  "warnings": [],
  "verification": [],
  "imageIds": ["img.guide.ch02.fig2_11"],
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "evidenceLevel": "tutorial",
  "status": "draft"
}
```

## 7. OptionValue

```json
{
  "id": "value.fan.flow_type.fixed",
  "optionId": "option.fan.flow_type",
  "name": "Fixed",
  "nameZh": "固定流量",
  "description": "待依据Guide核实填写",
  "pros": [],
  "cons": [],
  "applicableScenarios": [],
  "nonApplicableScenarios": [],
  "requiredInputOptionIds": [
    "option.fan.volumetric_flow",
    "option.fan.mass_flow"
  ],
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "evidenceLevel": "tutorial",
  "status": "draft"
}
```

## 8. Relationship

```json
{
  "id": "rel.fan.flow_type.mass_flow.enables",
  "fromId": "value.fan.flow_type.fixed",
  "toId": "option.fan.mass_flow",
  "type": "enables",
  "direction": "directed",
  "description": "待依据界面逻辑和Guide核实",
  "conditions": [],
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "evidenceLevel": "verify",
  "status": "draft"
}
```

关系类型：

```text
requires
enables
disables
affects
recommendedWith
conflictsWith
validatedBy
locatedIn
usedIn
```

## 9. Combination

```json
{
  "id": "combo.fan.intake_fixed_mass_flow",
  "name": "Intake + Fixed + Mass Flow",
  "scenarioIds": [],
  "items": [
    {"targetId": "option.fan.fan_type", "expectedValue": "Intake"},
    {"targetId": "option.fan.flow_type", "expectedValue": "Fixed"},
    {"targetId": "option.fan.mass_flow", "expectedValue": "0.001 kg/s"}
  ],
  "prerequisites": [],
  "expectedEffects": [],
  "risks": [],
  "verification": [],
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "evidenceLevel": "tutorial",
  "status": "draft"
}
```

## 10. Workflow

```json
{
  "id": "workflow.basic_fan_setup",
  "name": "Basic Fan Setup",
  "nameZh": "基础风扇设置",
  "level": "beginner",
  "stepIds": [
    "step.basic_fan_setup.geometry",
    "step.basic_fan_setup.properties",
    "step.basic_fan_setup.verify"
  ],
  "sourceIds": [],
  "status": "draft"
}
```

## 11. WorkflowStep

```json
{
  "id": "step.basic_fan_setup.properties",
  "workflowId": "workflow.basic_fan_setup",
  "order": 2,
  "title": "Set Fan Properties",
  "objective": "完成风扇属性设置",
  "prerequisites": [],
  "panelIds": ["panel.fan.properties"],
  "optionIds": ["option.fan.flow_type"],
  "imageIds": ["img.guide.ch02.fig2_11"],
  "instructions": [],
  "commonErrors": [],
  "completionCriteria": [],
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "status": "draft"
}
```

## 12. Practice

```json
{
  "id": "practice.fan.properties.basic",
  "title": "Fans Panel 基础设置练习",
  "type": "image-hotspot-sequence",
  "scenario": "Guide sample session",
  "task": "根据提示完成风扇属性设置",
  "imageId": "img.guide.ch02.fig2_11",
  "steps": [],
  "feedbackRules": [],
  "relatedOptionIds": [],
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "status": "draft"
}
```

## 13. Question

```json
{
  "id": "question.fan.flow_type.001",
  "type": "image-hotspot",
  "prompt": "请在图中选择 Flow type 设置区域",
  "imageId": "img.guide.ch02.fig2_11",
  "answer": {"hotspotId": "hs.fan.flow_type"},
  "explanation": "",
  "sourceIds": ["src.guide.2024r1.ch02.fig2_11"],
  "status": "draft"
}
```

## 14. Troubleshooting

```json
{
  "id": "issue.fan.direction.incorrect",
  "symptom": "风扇气流方向与预期相反",
  "possibleCauses": [],
  "checks": [],
  "actions": [],
  "verification": [],
  "relatedOptionIds": ["option.fan.flow_direction"],
  "sourceIds": [],
  "evidenceLevel": "verify",
  "status": "draft"
}
```

## 15. Case

```json
{
  "id": "case.guide.cabinet_fan_grille",
  "title": "Cabinet with Intake Fan and Grille",
  "sourceType": "official-guide",
  "workflowIds": ["workflow.basic_fan_setup"],
  "imageIds": [],
  "optionIds": [],
  "learningObjectives": [],
  "sourceIds": [],
  "status": "draft"
}
```

## 16. 文件建议

```text
data/v2/
├─ sources.json
├─ images.json
├─ panels.json
├─ options.json
├─ option_values.json
├─ relationships.json
├─ combinations.json
├─ workflows.json
├─ workflow_steps.json
├─ practices.json
├─ questions.json
├─ troubleshooting.json
├─ cases.json
└─ learning_paths.json
```

## 17. 校验规则

- 所有ID必须唯一。
- 所有引用ID必须存在。
- `Official/Default/Tutorial` 必须至少有一个SourceReference。
- `recommendedValueIds` 为空时前端显示“未建立推荐”，不得自动采用默认值。
- `Verify` 内容必须显著标注。
- 图片热点坐标必须在0到100之间。
- 已弃用项不得从历史数据中物理删除。
