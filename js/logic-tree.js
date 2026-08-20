import './app.js';

const buttons = document.querySelectorAll('.filter-button');
const nodes = document.querySelectorAll('.logic-node');

buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((item) => item.classList.remove('is-active'));
  button.classList.add('is-active');
  const domain = button.textContent.trim();
  nodes.forEach((node) => { node.hidden = domain !== 'All domains' && !node.textContent.toLocaleLowerCase().includes(domain.toLocaleLowerCase()); });
}));
