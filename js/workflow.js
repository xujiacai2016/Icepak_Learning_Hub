import './app.js';
import { loadData } from './data-loader.js';

const detail = document.querySelector('[data-workflow-detail]');
const list = document.querySelector('[data-workflow-list]');
const chain = document.querySelector('[data-workflow-chain]');

function renderStep(step) {
  let icepakContent = '';
  if (step.icepak_operations) {
    icepakContent = `<dt>Icepak 操作</dt><dd><ul>${step.icepak_operations.map(op => `<li>${op}</li>`).join('')}</ul></dd>`;
  }
  let screenshotContent = '';
  if (step.screenshot) {
    screenshotContent = `<dt>操作截图</dt><dd><img src="${step.screenshot}" alt="操作截图" style="max-width: 100%; height: auto;"></dd>`;
  }
  detail.innerHTML = `<p class="eyebrow">SELECTED STEP</p><h2>${step.name}</h2><dl class="workflow-details"><dt>What</dt><dd>${step.what}</dd><dt>Why</dt><dd>${step.why}</dd><dt>Input</dt><dd>${step.input.join(', ')}</dd><dt>Output</dt><dd>${step.output}</dd><dt>Impact</dt><dd>${step.impact.join('、')}</dd><dt>Common Mistakes</dt><dd><ul>${step.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join('')}</ul></dd>${icepakContent}${screenshotContent}</dl>`;
}

function renderNavigation(steps) {
  list.insertAdjacentHTML('beforeend', steps.map((step, index) => `<button class="step-item${index === 0 ? ' is-active' : ''}" data-step="${step.id}"><span>${String(index + 1).padStart(2, '0')}</span>${step.name}</button>`).join(''));
  chain.innerHTML = steps.map((step, index) => `${index ? '<i aria-hidden="true">↓</i>' : ''}<button class="workflow-node${index === 0 ? ' is-active' : ''}" data-step="${step.id}">${step.name}</button>`).join('');
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
  renderStep(steps[0]);
}).catch((error) => {
  detail.innerHTML = `<p class="eyebrow">WORKFLOW ERROR</p><p class="detail-lead">无法读取 workflow.json。请使用本地静态服务器运行此页面。</p>`;
  console.error(error);
});
