import './app.js';
import { loadData } from './data-loader.js';

const detail = document.querySelector('[data-issue-detail]');
const buttons = document.querySelectorAll('[data-issue]');

function renderIssue(issue) {
  detail.innerHTML = `<p class="eyebrow">${issue.category.toUpperCase()} / SYMPTOM</p><h2>${issue.title}</h2><p class="detail-lead">${issue.symptoms.join('、')}。</p><div class="check-path">${issue.checkPath.map((item, index) => `${index ? '<i>→</i>' : ''}<span>${item}</span>`).join('')}</div><div class="fix-box"><strong>Common fix</strong><p>${issue.commonFix.join('；')}。</p></div>`;
}

loadData('troubleshooting').then(({ issues }) => {
  buttons.forEach((button) => button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderIssue(issues.find((issue) => issue.category.toLocaleLowerCase().startsWith(button.dataset.issue)) || issues[0]);
  }));
}).catch(console.error);
