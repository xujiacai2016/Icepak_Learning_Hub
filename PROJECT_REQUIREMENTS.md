# Icepak知识平台需求规范
**版本**: 1.0
**更新日期**: 2026-08-27

## 核心原则
1. **知识源优先级**:
   - 🥇 `Ansys_Icepak_Users_Guide.pdf` (主要知识源，含完整图片)
   - 🥈 `Ansys_Icepak_Users_Guide.docx` (辅助知识源，图片备份)
   - 🥉 `Ansys_Icepak_Users_Guide.txt` (纯文本参考)

2. **原始文件保护**:
   diff
   - 禁止修改/删除任何原始文件
   + 所有处理必须生成新文件
   

3. **功能重点**:
    | 模块 | 权重 | 核心需求 |
    |------|------|----------|
    | 界面解析 | 75% | 交互式软件UI讲解 |
    | 逻辑关系 | 25% | 功能关联可视化 |

## 开发环境约束
### 禁用Python依赖
1. **开发阶段**:
   - 所有代码必须使用纯前端技术(HTML/CSS/JavaScript)实现
   - 禁止使用Python相关API或脚本调用
   - 图片/文本解析完全依赖浏览器能力

2. **运行时限制**:
   - 用户使用环境可能无Python环境
   - 禁止假设系统有Python解释器
   - 按浏览器原生能力设计功能边界

### 实施影响说明
| 功能点 | 原方案 | 替代方案 |
|--------|--------|----------|
| 文本解析 | PDFMiner(Python) | PDF.js + TextLayer |
| 图片提取 | PyMuPDF(Python) | Canvas截图+页面渲染 |
| 数据提取 | 正则表达式(Python) | PDF.js getTextContent() |

### 前端适应性改变
针对Python禁令的核心改造方案：
javascript
// 纯前端文本提取系统
function extractTextFromPDF(pageNum) {
  return pdf.getPage(pageNum).then(page => {
    return page.getTextContent().then(textContent => {
      return textContent.items.map(item => item.str).join(' ');
    });
  });
}

// Canvas绘图方式替代Python图片提取
async function exportPageToImage(pageNum) {
  const canvas = document.createElement('canvas');
  const renderContext = {
    canvasContext: canvas.getContext('2d'),
    viewport: page.getViewport({ scale: 2.0 })
  };
  
  await page.render(renderContext).promise;
  return canvas.toDataURL('image/png');
}

## 实施规范
### 图文提取流程
mermaid
graph TD
A[PDF解析] --> B{是否含图片?}
B -->|是| C[保存到/assets/guide-images/]
B -->|否| D[检查DOCX版本]
D --> C


### 标注数据格式
json
{
  "element": "网格控制面板",
  "location": {
    "page": 42,
    "position": [120,85]
  },
  "description": "用于设置全局网格参数",
  "relations": ["求解设置", "模型树"]
}


### 启动验证清单
1. 源文件MD5校验匹配
2. 需求文档版本检查
3. 用户优先级确认