# ADR-001: Single Source of Truth Implementation

## Status
Accepted

## Context
为了确保项目治理符合 V2.0 规范，我们需要实现单一可信源原则。该项目中所有关键知识应该从单一可信源获取，以确保数据的一致性和准确性。

## Decision
我们将执行以下措施来实现单一可信源原则：
1. 所有文档存储在 docs/ 目录下
2. 所有数据资产统一存储在 data/ 目录下
3. 所有资源都应可被正确引用

## Consequences
- 优势：知识管理更加有序，所有内容都可以从单一位置获取
- 劣势：需要对文件结构进行严格的管理，限制了文件分散存储的灵活性
- 需要的改进：确保所有开发人员都理解单一可信源的重要性并遵循相关实践

## References
- [Project Governance Rules V2.0](../docs/project_governance.md)