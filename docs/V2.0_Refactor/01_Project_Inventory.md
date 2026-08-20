# Icepak Learning Hub V2.0 项目资产清单

> 本文档为重构基线模板。标记为“待扫描”的内容必须由 Cline 根据本地工作区实际结果补充，不得把推测描述为既有事实。

## 1. 资产盘点状态

| 类别 | 预期位置 | 当前状态 | V2.0策略 |
|---|---|---|---|
| 页面 | `pages/` | 待扫描 | 保留并映射 |
| 组件 | `components/` | 待扫描 | 选择性复用 |
| 数据 | `data/` | 待扫描 | 统一Schema |
| 文档 | `docs/` | 已有多份设计框架 | 保留并新增V2.0目录 |
| 图片 | 待扫描 | 含Guide相关图片 | 建立元数据与来源映射 |
| 官方Guide | 项目工作区或关联文件 | 已知存在 | 只做来源映射与授权范围内使用 |
| Git仓库 | 项目根目录 | 已初始化 | 建立基线、标签和重构分支 |

## 2. 已知功能模块

| 当前模块 | 当前用途 | V2.0处置 | 目标模块 |
|---|---|---|---|
| Dashboard / Home | 首页入口 | 升级 | Learning Dashboard |
| Knowledge Map | 知识地图 | 重构 | Parameter Relationships |
| Workflow | 操作流程 | 升级 | Workflow Training |
| Glossary | 术语解释 | 升级 | Option Explorer |
| Quiz | 测验 | 升级 | Interactive Training |
| Troubleshooting | 问题排查 | 升级 | Diagnostic Center |
| Case Library | 案例库 | 保留扩展 | Scenario Learning |
| Learning Path | 学习路径 | 保留重排 | Learning Roadmap |
| UI Information Architecture | 信息架构文档 | 更新 | V2.0 IA |
| Project File Structure | 项目骨架文档 | 更新 | V2.0工程结构 |

## 3. 预期数据文件

以下名称来自既有规划，实际文件名以本地扫描为准：

```text
knowledge_map.json
workflow.json
glossary.json
quiz.json
cases.json
troubleshooting.json
learning_paths.json
```

### 盘点字段

每个文件至少记录：

- 实际路径
- 文件大小
- 最后修改日期
- 顶层数据类型
- 记录数量
- 使用它的页面和组件
- 是否存在重复、空字段或硬编码
- V2.0迁移目标
- 是否需要兼容层

## 4. 图片资产清单字段

| 字段 | 说明 |
|---|---|
| imageId | 图片唯一ID |
| filePath | 相对路径 |
| sourceDocument | 来源文档 |
| release | 软件/Guide版本 |
| chapter | 章节 |
| page | 页码 |
| figure | 图号 |
| title | 图名 |
| usage | UI Explorer、Workflow、Quiz等 |
| copyrightNote | 版权或内部限制 |
| hotspotStatus | 未标注、标注中、已完成 |

## 5. 官方内容资产

优先建立以下内容域的资产索引：

```text
Getting Started
User Interface
Project Definition
Model Building
Objects
Mesh
Solver
Postprocessing
Radiation
Transient
Optimization / Parameterization
```

## 6. 资产处置分类

### Direct Reuse
可直接在V2.0继续使用，不改变接口。

### Upgrade
内容或组件可复用，但需增加来源、关系或交互字段。

### Transform
需要转换到新Schema，并提供兼容或迁移脚本。

### Archive
不再进入主导航，但暂不删除，保留在legacy或Git历史中。

### Replace
仅在重复、错误或无法维护时替换，替换前必须有迁移记录。

## 7. Cline实际扫描清单

- [ ] 输出完整目录树
- [ ] 列出所有页面文件
- [ ] 列出所有组件文件
- [ ] 列出所有JSON文件及记录数量
- [ ] 列出所有Markdown文档
- [ ] 列出所有图片及尺寸
- [ ] 识别页面与数据依赖
- [ ] 识别未使用文件
- [ ] 识别重复文件
- [ ] 识别硬编码内容
- [ ] 识别现有路由和导航
- [ ] 识别本地存储或进度记录方式
- [ ] 填写Direct Reuse / Upgrade / Transform / Archive / Replace分类

## 8. 输出要求

实际扫描结果应追加到本文档，不应覆盖本模板中的分类原则。所有“待确认”项保持明确标记。
