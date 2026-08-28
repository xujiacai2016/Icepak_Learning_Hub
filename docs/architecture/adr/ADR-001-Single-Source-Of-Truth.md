# ADR-001: Single Source of Truth

## Status
Accepted

## Context
项目需要确保所有知识资产和设计决策来自单一可信源，以避免信息不一致的问题。

## Decision
将所有项目知识资产集中存储于 docs/ 目录下，数据资产存储于 data/ 目录下，确保所有相关文档和数据有明确的来源。

## Consequences
- 所有项目知识结构化存储，便于维护和检索
- 通过明确的目录结构实现单一知识源
- 减少信息不一致风险
- 便于实现知识图谱和 AI 后续扩展

## Related Resources
- knowledge/source/Icepak.md
- knowledge/source/media/