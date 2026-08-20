# Icepak Learning Hub V1 → V2.0 迁移映射表

## 1. 模块迁移总表

| V1模块 | V2模块 | 处理策略 | 核心升级 | 优先级 |
|---|---|---|---|---|
| Home | Dashboard | 升级 | 进度、推荐任务、入口 | P1 |
| Knowledge Map | Parameter Relationships | 重构 | 增加关系类型、影响链和来源 | P1 |
| Workflow | Workflow Training | 升级 | 图片、热点、步骤练习及反馈 | P1 |
| Glossary | Option Explorer | 转换升级 | 术语升级为面板选项实体 | P1 |
| Quiz | Interactive Training | 升级 | 图片热点、排序、组合、诊断题 | P2 |
| Troubleshooting | Diagnostic Center | 升级 | 症状到验证的诊断路径 | P2 |
| Case Library | Scenario Learning | 保留扩展 | 区分Guide案例和内部案例 | P2 |
| Learning Path | Learning Roadmap | 保留重排 | 按操作能力而非文档章节编排 | P1 |
| UI Architecture | V2.0 Information Architecture | 更新文档 | 反映新导航与交互 | P3 |
| Project Structure | Developer Documentation | 更新文档 | 增加Schema和数据管线 | P3 |

## 2. 数据迁移映射

| V1数据 | V2数据 | 迁移方法 | 兼容要求 |
|---|---|---|---|
| `glossary.json` | `options.json` + `option_values.json` | 字段映射并补充panel/source/evidence | 迁移期保留旧读取接口 |
| `knowledge_map.json` | `relationships.json` | 节点和边拆分，增加relationshipType | 不丢失原节点ID |
| `workflow.json` | `workflows.json` + `workflow_steps.json` | 流程头和步骤拆分 | 保留原排序 |
| `quiz.json` | `quizzes.json` / `questions.json` | 统一题型Schema | 旧题转换为single_choice |
| `cases.json` | `cases.json` | 增加sourceType、workflowId、evidence | 原案例ID保持稳定 |
| `troubleshooting.json` | `troubleshooting.json` | 增加symptom/cause/check/action/verify | 保留现有分类 |
| `learning_paths.json` | `learning_paths.json` | 改为模块与能力引用 | 保留用户进度关联ID |
| 零散图片清单 | `images.json` | 建立imageId和SourceReference | 文件本体不移动或先复制验证 |

## 3. 页面迁移规则

### Dashboard
- 保留主入口与视觉结构。
- 新增学习进度、推荐任务、最近学习。
- 不在第一阶段引入复杂账号系统。

### Knowledge Map → Parameter Relationships
- 现有节点继续使用。
- 每条边必须补充关系类型。
- 支持 `requires`、`enables`、`disables`、`affects`、`recommendedWith`、`conflictsWith`、`validatedBy`。
- 关系无证据时标记 `Verify`。

### Workflow → Workflow Training
- 保留现有流程顺序和页面。
- 步骤拆成独立实体。
- 每步增加目标、前置条件、菜单、面板、图片、选项、错误、完成标准和来源。

### Glossary → Option Explorer
- 原术语定义保留。
- 软件选项补充Panel、Tab、OptionValue、前置条件、关系、组合、影响和来源。
- 默认值、示例值和推荐值分开。

### Quiz → Interactive Training
- 原题库保留。
- 新增图片热点、流程排序、参数配对、组合选择、错误诊断和场景决策。
- 题目解释必须附来源或证据等级。

### Troubleshooting → Diagnostic Center
- 原问题分类保留。
- 统一为：症状 → 原因 → 检查位置 → 检查方法 → 修正操作 → 验证方法。

### Case Library → Scenario Learning
- Guide案例标记 `official-guide` 或 `tutorial`。
- 企业案例标记 `internal-practice`。
- 公开版本与内部版本的数据必须可分离。

## 4. 推荐迁移顺序

```text
1. Git基线与分支
2. 实际资产清单
3. Schema与ID规范
4. Source / Image / Panel基础数据
5. Fans Panel垂直切片
6. UI Explorer组件
7. Option Explorer组件
8. Relationship与Combination
9. Workflow与Practice
10. Quiz与验收
11. Mesh垂直切片
12. Radiation垂直切片
13. Transient垂直切片
```

## 5. 禁止事项

- 不直接覆盖旧JSON。
- 不批量删除旧页面。
- 不在无映射表时重命名ID。
- 不将AI建议显示为Guide官方推荐。
- 不把默认值自动转换为推荐值。
- 不在来源未核实的情况下生成参数组合效果。
