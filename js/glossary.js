import './app.js';
import { loadData } from './data-loader.js';

const domains = ['All Domains', 'Heat Transfer', 'Material', 'Flow', 'Boundary', 'Fan', 'Heat Sink', 'Radiation', 'Mesh', 'Solver', 'Optimization', 'Reliability'];
const domainList = document.querySelector('[data-domain-list]');
const termList = document.querySelector('[data-term-list]');
const detail = document.querySelector('[data-term-detail]');
const input = document.querySelector('[data-term-search]');
const count = document.querySelector('[data-term-count]');
let terms = [];
let activeDomain = 'All Domains';
let activeTermId = '';

function getChineseTerm(term) {
  return term.cn || term.zh || '';
}

function matchesQuery(term, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return !normalizedQuery || `${term.term} ${getChineseTerm(term)} ${term.definition} ${term.engineeringMeaning}`.toLocaleLowerCase().includes(normalizedQuery);
}

function getVisibleTerms() {
  return terms.filter((term) => (activeDomain === 'All Domains' || term.domain === activeDomain) && matchesQuery(term, input.value));
}

function renderDomains() {
  domainList.innerHTML = domains.map((domain) => `<button class="domain-button${domain === activeDomain ? ' is-active' : ''}" data-domain="${domain}">${domain}</button>`).join('');
  domainList.querySelectorAll('[data-domain]').forEach((button) => button.addEventListener('click', () => {
    activeDomain = button.dataset.domain;
    renderDomains();
    renderTerms();
  }));
}

function renderDetail(term) {
  if (!term) {
    detail.innerHTML = '<p class="eyebrow">TERM DETAIL</p><p class="empty-state">No matching term.</p>';
    return;
  }
  detail.innerHTML = `<p class="eyebrow">${term.domain}</p><h2>${term.term}</h2><p class="chinese-term">${getChineseTerm(term)}</p><dl class="term-facts"><dt>Definition</dt><dd>${term.definition}</dd><dt>Physical Meaning</dt><dd>${term.physicalMeaning || 'Not provided'}</dd><dt>Engineering Meaning</dt><dd>${term.engineeringMeaning}</dd><dt>Unit</dt><dd>${term.unit || 'Not specified'}</dd><dt>Related Terms</dt><dd>${(term.relatedTerms || []).join(', ') || 'None'}</dd><dt>Common Mistakes</dt><dd><ul>${(term.commonMistakes || []).map((mistake) => `<li>${mistake}</li>`).join('') || '<li>None recorded</li>'}</ul></dd></dl>`;
}

function renderTerms() {
  const visibleTerms = getVisibleTerms();
  if (!visibleTerms.some((term) => term.id === activeTermId)) activeTermId = visibleTerms[0]?.id || '';
  count.textContent = `${visibleTerms.length} term${visibleTerms.length === 1 ? '' : 's'}`;
  termList.innerHTML = visibleTerms.map((term) => `<button class="term-button${term.id === activeTermId ? ' is-active' : ''}" data-term-id="${term.id}"><span></span><span><strong>${term.term}</strong><small>${getChineseTerm(term)}</small></span></button>`).join('') || '<p class="empty-state">No matching terms.</p>';
  termList.querySelectorAll('[data-term-id]').forEach((button) => button.addEventListener('click', () => {
    activeTermId = button.dataset.termId;
    renderTerms();
  }));
  renderDetail(visibleTerms.find((term) => term.id === activeTermId));
}

input.addEventListener('input', renderTerms);
renderDomains();

loadData('glossary').then((data) => {
  terms = data.terms || [];
  activeTermId = terms[0]?.id || '';
  renderTerms();
}).catch((error) => {
  count.textContent = 'Load failed';
  detail.innerHTML = '<p class="eyebrow">TERM DETAIL</p><p class="empty-state">无法读取 glossary.json。请使用本地静态服务器运行此页面。</p>';
  console.error(error);
});
