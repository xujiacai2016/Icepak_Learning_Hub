# Icepak V2.0 重构实施步骤清单

## Phase 0：安全基线

- [ ] 确认当前工作区根目录
- [ ] 执行 `git status`
- [ ] 提交V1.0最终基线
- [ ] 创建 `v1.0-baseline` 标签
- [ ] 创建并切换到 `v2-refactor` 分支
- [ ] 备份或确认Guide文件位置
- [ ] 禁止批量删除、移动和重命名

## Phase 1：真实项目资产盘点

- [ ] 输出完整目录树
- [ ] 统计页面、组件、JSON、Markdown和图片
- [ ] 识别导航和路由
- [ ] 识别页面与数据依赖
- [ ] 识别硬编码内容
- [ ] 识别未使用和重复资产
- [ ] 更新 `01_Project_Inventory.md`
- [ ] 审核迁移映射

## Phase 2：数据层基础

- [ ] 确认V2.0 ID命名规范
- [ ] 确认证据等级
- [ ] 创建 `data/v2/` 目录
- [ ] 创建 SourceReference Schema
- [ ] 创建 ImageAsset Schema
- [ ] 创建 Panel Schema
- [ ] 创建 Option Schema
- [ ] 创建 OptionValue Schema
- [ ] 创建 Relationship Schema
- [ ] 创建 Combination Schema
- [ ] 创建 Workflow / WorkflowStep Schema
- [ ] 创建 Practice / Question Schema
- [ ] 建立JSON校验脚本
- [ ] 保留V1数据兼容，不直接覆盖

## Phase 3：Guide与图片基础索引

- [ ] 建立Guide文档记录
- [ ] 建立章节索引
- [ ] 建立页码与图号索引
- [ ] 建立图片命名规范
- [ ] 建立图片元数据
- [ ] 确认图片授权和内部使用边界
- [ ] 不提供整本Guide下载
- [ ] 不移除原版权标识

## Phase 4：Fans Panel垂直切片

- [ ] 登记Figure 2.10来源
- [ ] 登记Figure 2.11来源
- [ ] 建立Fan Geometry Panel数据
- [ ] 建立Fan Properties Panel数据
- [ ] 建立图片热点
- [ ] 建立Fan type选项
- [ ] 建立Flow direction选项
- [ ] 建立Flow type选项
- [ ] 建立Volumetric flow选项
- [ ] 建立Mass flow选项
- [ ] 建立Total temperature选项
- [ ] 建立Gauge pressure选项
- [ ] 建立关系数据
- [ ] 建立Guide示例组合
- [ ] 标记未验证关系

## Phase 5：UI Explorer原型

- [ ] 创建 `ImageHotspotViewer`
- [ ] 图片支持响应式缩放
- [ ] 热点坐标使用百分比
- [ ] 悬停显示选项名称
- [ ] 点击打开Option Detail
- [ ] 支持原图模式/学习标记模式
- [ ] 显示来源、页码和图号
- [ ] 键盘可访问
- [ ] 移动端可操作

## Phase 6：Option Explorer原型

- [ ] 显示选项用途
- [ ] 显示可选值
- [ ] 区分默认值、示例值、推荐值
- [ ] 显示前置条件
- [ ] 显示影响与风险
- [ ] 显示相关选项
- [ ] 显示推荐组合
- [ ] 无证据内容显示Verify
- [ ] 显示图片和来源

## Phase 7：参数关系与组合

- [ ] 实现关系图组件
- [ ] 支持关系类型筛选
- [ ] 支持来源查看
- [ ] 支持从选项跳到关系图
- [ ] 实现组合卡
- [ ] 组合显示适用前提
- [ ] 组合显示预期影响
- [ ] 组合显示验证方法
- [ ] 禁止无证据自动推荐

## Phase 8：Workflow Training

- [ ] 建立Basic Fan Setup流程
- [ ] 每步绑定Panel、Option和Image
- [ ] 显示前置条件和完成标准
- [ ] 增加步骤顺序练习
- [ ] 增加缺项检查
- [ ] 增加错误识别
- [ ] 显示解释性反馈

## Phase 9：Practice与Quiz

- [ ] 创建图片热点题
- [ ] 创建参数配对题
- [ ] 创建流程排序题
- [ ] 创建组合选择题
- [ ] 创建错误诊断题
- [ ] 每题附来源或证据等级
- [ ] 记录完成状态
- [ ] 防止答案硬编码散落在页面中

## Phase 10：首个垂直切片验收

- [ ] 图片中可定位选项
- [ ] 选项内容完整
- [ ] Guide来源完整
- [ ] 关系可浏览
- [ ] 组合不误标官方推荐
- [ ] Workflow可完成
- [ ] 至少一个Practice可完成
- [ ] 至少一道Quiz可完成
- [ ] 桌面与移动端正常
- [ ] 旧功能未被破坏
- [ ] Git提交清晰

## Phase 11：按顺序扩展

- [ ] Mesh模块
- [ ] Radiation模块
- [ ] Transient模块
- [ ] Solver模块
- [ ] Postprocessing模块
- [ ] Guide Tutorial案例
- [ ] 内部EDFA / RAMAN / Line Card案例

## 每次提交前检查

- [ ] `git diff` 已审阅
- [ ] 没有API Key或敏感信息
- [ ] 没有未经核实的官方推荐
- [ ] 新ID没有重复
- [ ] 引用ID全部存在
- [ ] 图片来源完整
- [ ] 现有页面可正常打开
