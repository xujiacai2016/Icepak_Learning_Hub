import './app.js';
import { loadData } from './data-loader.js';

const detail = document.querySelector('[data-workflow-detail]');
const list = document.querySelector('[data-workflow-list]');
const lightbox = document.querySelector('[data-image-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');

const sourceImageBase = '../knowledge/source/media/media/';
const stepImages = {
  geometry: [
    { file: 'image38.png', caption: 'Icepak.md：Blocks 属性面板' },
    { file: 'image40.png', caption: 'Icepak.md Figure 2.8：Printed circuit boards 几何面板' },
    { file: 'image48.png', caption: 'Icepak.md：计算域与对象示例' }
  ],
  material: [
    { file: 'image485.png', caption: 'Icepak.md Figure 9.50：Materials 节点' },
    { file: 'image486.png', caption: 'Icepak.md Figure 9.51：Materials 属性面板' },
    { file: 'image486.png', caption: 'Icepak.md Figure 9.51：Materials 属性面板' }
  ],
  power: [
    { file: 'image571.png', caption: 'Icepak.md Figure 14.1：Sources 几何面板' },
    { file: 'image572.png', caption: 'Icepak.md Figure 14.2：Sources 属性面板' },
    { file: 'image572.png', caption: 'Icepak.md Figure 14.2：Sources 属性面板' }
  ],
  boundary: [
    { file: 'image548.png', caption: 'Icepak.md Figure 12.4：Openings 面板' },
    { file: 'image549.png', caption: 'Icepak.md Figure 12.5：Recirculation Opening 面板' },
    { file: 'image549.png', caption: 'Icepak.md Figure 12.5：Recirculation Opening 面板' }
  ],
  flow: [
    { file: 'image43.png', caption: 'Icepak.md Figure 2.10：Fans 几何面板' },
    { file: 'image44.png', caption: 'Icepak.md Figure 2.11：Fans 属性面板' },
    { file: 'image47.png', caption: 'Icepak.md：Grille 属性面板' }
  ],
  thermal: [
    { file: 'image729.png', caption: 'Icepak.md Figure 24.5：Heat sinks 几何面板' },
    { file: 'image730.png', caption: 'Icepak.md Figure 24.6：Heat sinks 属性面板' },
    { file: 'image859.png', caption: 'Icepak.md Figure 28.1：Radiation 基本参数面板' }
  ],
  mesh: [
    { file: 'image53.png', caption: 'Icepak.md Figure 2.16：Mesh control 面板' },
    { file: 'image54.png', caption: 'Icepak.md Figure 2.17：Surface mesh 显示' },
    { file: 'image55.png', caption: 'Icepak.md Figure 2.18：Plane-cut mesh 显示' }
  ],
  solver: [
    { file: 'image60.png', caption: 'Icepak.md：Basic settings 面板' },
    { file: 'image58.png', caption: 'Icepak.md：Solver 设置入口' },
    { file: 'image64.png', caption: 'Icepak.md：求解监控结果' }
  ],
  post: [
    { file: 'image67.png', caption: 'Icepak.md：Post Object face 结果工具' },
    { file: 'image68.png', caption: 'Icepak.md：结果显示示例' },
    { file: 'image50.png', caption: 'Icepak.md Figure 2.15：模型摘要报告' }
  ],
  decision: [
    { file: 'image50.png', caption: 'Icepak.md Figure 2.15：模型摘要报告' },
    { file: 'image64.png', caption: 'Icepak.md：求解结果监控' },
    { file: 'image65.png', caption: 'Icepak.md：结果分析示例' }
  ]
};

const meshParameterGuidance = [
  [
    ['Settings / Display / Quality', '三个选项卡', 'Settings 生成网格；Display 显示网格；Quality 检查质量。'],
    ['Load...', '载入已有网格', '复用网格时载入，并核对 Num elements 与 Num nodes。'],
    ['Generate...', '生成或重生成', '按照当前 Mesh control 参数生成网格。'],
    ['Num elements / Num nodes', '只读结果', '生成后用于判断网格规模与内存成本。'],
    ['Mesh type', 'Mesher-HD（推荐）', '通用初始网格类型，保持项目版本标准一致。'],
    ['Mesh units', '与模型单位一致', '通常使用 m 或 mm，避免尺寸被错误解释。'],
    ['Concurrency', '按 CPU 和内存设置', '提高并行度可缩短生成时间，但应预留系统内存。'],
    ['Max element size', '主要流道宽度的 1/3～1/5', '限制整体最大单元尺寸，解析温度和速度梯度。'],
    ['Max X/Y/Z size', '默认关闭；必要时分别启用', '分别限制 X、Y、Z 方向最大单元尺寸；示例先关闭三项。'],
    ['Minimum gap', '关键间隙至少 3 个单元', '避免 PCB 间隙、散热器通道被一个单元跨过。'],
    ['Minimum gap X / Y / Z', '按方向填写间隙尺寸与单位', '分别控制 X、Y、Z 方向最小间隙；示例值为 1e-3 m，需按模型尺度核对。'],
    ['Close / Help', 'Close 关闭面板；Help 查帮助', '生成或检查完成后关闭；遇到选项含义不确定时打开帮助。']
  ],
  [
    ['Global / Local / Multi-level / Options / Misc', '按作用范围选择', 'Global 全局；Local 对象局部；Multi-level 多级；Options 与 Misc 为高级选项。'],
    ['Mesh parameters', 'Coarse（初算）→ Medium/Fine（验证）', '先验证模型设置，再通过网格独立性确认精度。'],
    ['Min elements in gap', '2～3；关键流道 3～5', '为狭窄间隙保留基本流动解析能力。'],
    ['Min elements on edge', '1～2', '避免细小几何边缘被完全忽略。'],
    ['Max size ratio', '≤ 10', '限制相邻单元尺寸突变，改善离散稳定性。'],
    ['No O-grids', '默认关闭', '需要避免 O-grid 拓扑时才启用，并检查曲面贴合质量。'],
    ['Allow stair-stepped meshing', '默认关闭', '仅在阶梯几何或网格简化需要时启用。'],
    ['Mesh assemblies separately', '复杂装配体建议启用', '便于分别控制对象网格和定位质量问题。']
  ],
  [
    ['Edit params', '编辑局部参数', '为选定装配体分别修改网格参数。'],
    ['Set uniform mesh params', '默认关闭', '需要 X/Y/Z 使用统一参数时启用。'],
    ['Use average / Keep XYZ max sizes', '按方向性选择', '前者使用平均尺寸；后者保留各方向最大尺寸。'],
    ['Surface mesh color', '按显示需要设置', '点击颜色框修改表面网格颜色。'],
    ['Display mesh: Surface + Wire', '先 All，再指定对象', '先总览网格，再定位热源、TIM、PCB 和风扇附近的问题。'],
    ['Surface / volume options', 'All 或指定对象', '控制表面或体网格显示范围。'],
    ['Wire', '保持选中（推荐）', '显示单元线框，便于发现尺寸突变和缺失区域。'],
    ['Display mesh: Cut plane', '穿过 PCB、热源和散热器', '检查表面不可见的内部体网格是否足够。'],
    ['Plane location / Set position', 'Horizontal - screen select', '通过图形窗口选点建立水平零厚度剖切面。'],
    ['Orient / Home position / Orient positive Y / Scale to fit', '按检查步骤使用', '恢复视角、查看正 Y 方向并缩放模型。'],
    ['Display mesh', '检查时启用', '切换 Surface/Cut plane 前先关闭，避免显示叠加。'],
    ['Local maximum size', '局部特征尺寸的 1/3～1/5', '只在高梯度区域细化，避免全域过度加密。'],
    ['Mesh independence', '粗/中/细三组；关键结果变化约 ≤ 5%', '用温度、流量和压降变化判断网格是否足够。']
  ]
];

const meshMindmap = [
  {
    title: '01 认识界面',
    items: [
      'Settings：填写生成参数',
      'Display：查看表面和剖切网格',
      'Quality：判断网格是否可接受',
      'Load / Generate / Close / Help：操作按钮'
    ]
  },
  {
    title: '02 全局设置',
    items: [
      '确定网格器、单位、并行度',
      '设置全局最大尺寸和最小间隙',
      '先 Coarse 初算，再 Normal/Fine 验证',
      '输出：初始网格规模和节点数'
    ]
  },
  {
    title: '03 局部加密',
    items: [
      '定位热源、TIM、PCB、翅片和风扇',
      'Local / Multi-level 控制不同区域尺寸',
      '只加密高温度或高速度梯度区域',
      '输出：更适合物理梯度的网格'
    ]
  },
  {
    title: '04 显示检查',
    items: [
      'Surface + Wire 查看所有表面',
      'Cut plane 查看 PCB 内部和流道',
      '发现尺寸突变、缺失或未解析区域',
      '输出：需要修改的具体区域'
    ]
  },
  {
    title: '05 质量判定',
    items: [
      '通道至少 3 个节点（4 个单元）',
      '最大/最小单元尺寸比例 ≤ 10:1',
      '表面附近尺寸平滑渐变',
      '网格独立性：关键结果变化建议 ≤ 5%'
    ]
  },
  {
    title: '06 反馈修改',
    items: [
      '过粗 → 减小 Max element size',
      '间隙不足 → 增加 Min elements in gap',
      '热点不稳定 → 增加 Local refinement',
      '数量过大 → 放宽非关键区域',
      '修改后回到 Generate，重新检查'
    ]
  }
];

function imageMarkup(image) {
  return image
    ? `<figure class="operation-image"><a href="${sourceImageBase}${image.file}" data-image-preview data-image-alt="${image.caption}" data-image-caption="${image.caption}" aria-label="放大查看${image.caption}"><img src="${sourceImageBase}${image.file}" alt="${image.caption}" loading="lazy"></a><figcaption>${image.caption}（点击放大查看）</figcaption></figure>`
    : '';
}

function renderMeshMindmap(step) {
  const overview = [
    `目标：${step.what}`,
    `背后逻辑：${step.why}`,
    `输入 → 输出：${step.input.join('、')} → ${step.output}`,
    `影响：${step.impact.join('、')}`,
    `需要避免：${step.commonMistakes.join('；')}`
  ];
  const overviewBranch = `<article class="mindmap-branch mindmap-overview"><h3>00 Mesh 节点总览</h3><ul>${overview.map((item) => `<li>${item}</li>`).join('')}</ul></article>`;
  const branches = meshMindmap.map((branch) => `<article class="mindmap-branch"><h3>${branch.title}</h3><ul>${branch.items.map((item) => `<li>${item}</li>`).join('')}</ul></article>`).join('');
  const stepMaps = step.detailed_steps.map((item, index) => {
    const image = stepImages.mesh[index];
    const parameters = meshParameterGuidance[index].map(([name, value, reason]) => `<li><strong>${name}</strong><span class="parameter-value">${value}</span><small>${reason}</small></li>`).join('');
    const feedback = index === 2
      ? '<article class="mindmap-branch mindmap-feedback"><h3>判断结果与返回路径</h3><ul><li><strong>通过</strong><small>进入 Solver，使用当前网格求解。</small></li><li><strong>不通过：网格过粗</strong><small>返回 02 全局设置，减小 Max element size。</small></li><li><strong>不通过：局部质量差</strong><small>返回 03 局部加密，调整 Local / Multi-level。</small></li><li><strong>不通过：数量过大</strong><small>放宽非关键区域，再回到 Generate。</small></li></ul></article>'
      : '';
    return `<section class="mesh-step-map"><div class="mindmap-step-center"><strong>${String(index + 1).padStart(2, '0')} ${item.title}</strong><span>${item.action}</span></div><div class="mindmap-step-branches"><article class="mindmap-branch"><h3>界面参数与推荐值</h3><ul>${parameters}</ul></article><article class="mindmap-branch">${imageMarkup(image)}<h3>检查点</h3><p>${item.check}</p></article>${feedback}</div></section>`;
  }).join('');
  return `<section class="mesh-mindmap" aria-label="Mesh control 界面脑图"><div class="mindmap-center"><strong>Mesh control</strong><span>先认识功能，再设置生成，检查后按结果返回修改</span></div><div class="mindmap-branches">${overviewBranch}${branches}</div><div class="mindmap-loop"><span>认识</span><i>→</i><span>设置</span><i>→</i><span>Generate</span><i>→</i><span>Display / Quality</span><i>→</i><span>通过：Solver</span><i>或</i><span>不通过：返回设置</span></div>${stepMaps}</section>`;
}

function renderFlowMindmap(step) {
  const overview = [
    `目标：${step.what}`,
    `背后逻辑：${step.why}`,
    `输入 → 输出：${step.input.join('、')} → ${step.output}`,
    `影响：${step.impact.join('、')}`,
    `常见错误：${step.commonMistakes.join('；')}`,
    `操作范围：${step.icepak_operations.join('；')}`
  ];
  const overviewBranch = `<article class="mindmap-branch mindmap-overview"><h3>00 ${step.name} 节点总览</h3><ul>${overview.map((item) => `<li>${item}</li>`).join('')}</ul></article>`;
  const logicBranches = [
    { title: '01 认识功能', items: step.input.map((item) => `${item}：先确认其作用和适用场景`) },
    { title: '02 设置输入', items: step.icepak_operations },
    { title: '03 检查输出', items: [`检查 ${step.output}`, ...step.impact.map((item) => `关注 ${item}`)] },
    { title: '04 反馈修改', items: step.commonMistakes.map((item) => `发现“${item}”时返回上一步调整`) }
  ];
  const branches = logicBranches.map((branch) => `<article class="mindmap-branch"><h3>${branch.title}</h3><ul>${branch.items.map((item) => `<li>${item}</li>`).join('')}</ul></article>`).join('');
  const stepMaps = (step.detailed_steps || []).map((item, index) => {
    const image = stepImages[step.id]?.[index];
    const parameters = item.parameters?.length
      ? `<article class="mindmap-branch"><h3>参数与推荐值</h3><ul>${item.parameters.map((parameter) => `<li><strong>${parameter.name}</strong><span class="parameter-value">${parameter.value}</span><small>${parameter.reason}</small></li>`).join('')}</ul></article>`
      : '';
    return `<section class="mesh-step-map flow-step-map"><div class="mindmap-step-center"><strong>${String(index + 1).padStart(2, '0')} ${item.title}</strong><span>${item.action}</span></div><div class="mindmap-step-branches">${parameters}<article class="mindmap-branch">${imageMarkup(image)}<h3>检查点</h3><p>${item.check}</p></article></div></section>`;
  }).join('');
  return `<section class="mesh-mindmap flow-mindmap" aria-label="${step.name} 流程脑图"><div class="mindmap-center"><strong>${step.name}</strong><span>认识功能 → 设置输入 → 检查输出 → 反馈修改</span></div><div class="mindmap-branches">${overviewBranch}${branches}</div><div class="mindmap-loop"><span>认识功能</span><i>→</i><span>设置参数</span><i>→</i><span>运行 / 应用</span><i>→</i><span>检查结果</span><i>→</i><span>通过：下一节点</span><i>或</i><span>不通过：返回修改</span></div>${stepMaps}</section>`;
}

function renderStep(step) {
  const mindmapContent = step.id === 'mesh' ? renderMeshMindmap(step) : renderFlowMindmap(step);
  detail.innerHTML = `<p class="eyebrow">DETAILED STEPS</p><h2>${step.name} 操作指南</h2>${mindmapContent}`;
}

function renderNavigation(steps) {
  list.insertAdjacentHTML('beforeend', steps.map((step, index) => `<button class="step-item${index === 0 ? ' is-active' : ''}" data-step="${step.id}"><span>${String(index + 1).padStart(2, '0')}</span>${step.name}</button>`).join(''));
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute('src');
}

function bindLightbox() {
  document.addEventListener('click', (event) => {
    const imageLink = event.target.closest('[data-image-preview]');
    if (imageLink) {
      event.preventDefault();
      lightboxImage.src = imageLink.href;
      lightboxImage.alt = imageLink.dataset.imageAlt || '';
      lightboxCaption.textContent = imageLink.dataset.imageCaption || '';
      lightbox.hidden = false;
    } else if (event.target === lightbox || event.target.closest('[data-lightbox-close]')) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}

function bindStepSelection(steps) {
  document.querySelectorAll('[data-step]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-step]').forEach((item) => item.classList.toggle('is-active', item.dataset.step === button.dataset.step));
    renderStep(steps.find((step) => step.id === button.dataset.step));
  }));
}

loadData('workflow').then(({ steps }) => {
  renderNavigation(steps);
  bindStepSelection(steps);
  bindLightbox();
  renderStep(steps[0]);
}).catch((error) => {
  detail.innerHTML = `<p class="eyebrow">WORKFLOW ERROR</p><p class="detail-lead">无法读取 workflow.json。请使用本地静态服务器运行此页面。</p>`;
  console.error(error);
});
