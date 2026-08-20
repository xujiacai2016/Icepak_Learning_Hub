import './app.js';
import { loadData } from './data-loader.js';

const list = document.querySelector('[data-case-list]');
loadData('cases').then(({ cases }) => {
  list.innerHTML = cases.map((item) => `<article class="case-card"><div class="case-meta"><span>${item.id}</span><span>${item.difficulty}</span></div><h3>${item.title}</h3><p>${item.problem}</p><p><strong>Lesson:</strong> ${item.lesson}</p><span class="card-link">${item.product} · ${item.category}</span></article>`).join('');
}).catch(console.error);
