import './app.js';

const pagePaths = [
  'index.html', 'pages/dashboard.html', 'pages/workflow.html', 'pages/logic-tree.html',
  'pages/glossary.html', 'pages/troubleshooting.html', 'pages/quiz.html', 'pages/case-library.html'
];

const dataPaths = [
  'data/workflow.json', 'data/logic_tree.json', 'data/glossary.json', 'data/troubleshooting.json',
  'data/quiz.json', 'data/cases.json', 'data/design_rules.json', 'data/learning_paths.json'
];

const expectedWorkflowNodes = ['Geometry', 'Material', 'Power', 'Boundary', 'Flow', 'Thermal', 'Mesh', 'Solver', 'Post', 'Design Decision'];
const expectedFields = {
  glossary: ['term', 'cn', 'definition', 'engineeringMeaning', 'relatedTerms'],
  troubleshooting: ['issue', 'symptoms', 'rootCauses', 'checkPath', 'fixes']
};

const results = [];
const elements = {
  overall: document.querySelector('[data-overall-status]'),
  summary: document.querySelector('[data-summary]'),
  pages: document.querySelector('[data-pages-results]'),
  data: document.querySelector('[data-data-results]'),
  schema: document.querySelector('[data-schema-results]'),
  error: document.querySelector('[data-health-error]')
};

function addResult(group, label, status, message) {
  const result = { group, label, status, message };
  results.push(result);
  elements[group].insertAdjacentHTML('beforeend', `<article class="check-card is-${status}"><div><span class="check-status">${status}</span><h3>${label}</h3><p>${message}</p></div></article>`);
}

// 添加节流控制：限制并发数和请求频率
const requestThrottler = {
  lastRequestTime: 0,
  minInterval: 200, // 最小200ms间隔
  maxConcurrent: 2, // 最大并发数限制为2
  
  // 请求节流函数
  throttle: function(callback) {
    const now = Date.now();
    if (now - this.lastRequestTime >= this.minInterval) {
      this.lastRequestTime = now;
      return callback();
    } else {
      // 如果距离上次请求太近，则延迟执行
      const delay = this.minInterval - (now - this.lastRequestTime);
      return new Promise(resolve => {
        setTimeout(() => {
          this.lastRequestTime = Date.now();
          resolve(callback());
        }, delay);
      });
    }
  },
  
  // 并发控制函数，避免一次性并发过多请求
  withConcurrencyLimit: async function(callback) {
    // 为每个异步操作创建一个带延迟的包装器
    return new Promise((resolve, reject) => {
      // 尝试获取并发许可
      let attempts = 0;
      const maxAttempts = 10;
      
      const attempt = () => {
        if (attempts >= maxAttempts) {
          reject(new Error('Max concurrent request attempts reached'));
          return;
        }
        
        const now = Date.now();
        if (now - this.lastRequestTime >= this.minInterval) {
          // 获得并发许可并执行
          this.lastRequestTime = now;
          try {
            const result = callback();
            if (result instanceof Promise) {
              result.then(resolve).catch(reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        } else {
          // 没有获得许可，稍后重试
          attempts++;
          setTimeout(attempt, 50);
        }
      };
      
      attempt();
    });
  }
};

async function runHealthCheck() {
async function checkResource(path) {
  try {
    const response = await fetch(`../${path}`, { cache: 'no-store' });
    if (!response.ok) return { status: 'failed', message: `HTTP ${response.status}` };
    return { status: 'passed', message: 'Fetch succeeded' };
  } catch (error) {
    return { status: 'failed', message: 'Fetch failed. Please use a local HTTP server.' };
  }
}

async function loadJson(path) {
  const response = await fetch(`../${path}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function firstRecord(data, key) {
  return Array.isArray(data) ? data[0] : data?.[key]?.[0];
}

function missingFields(record, fields) {
  return fields.filter((field) => record?.[field] === undefined);
}

function renderSummary() {
  const counts = results.reduce((summary, result) => ({ ...summary, [result.status]: summary[result.status] + 1 }), { passed: 0, warning: 0, failed: 0 });
  const overall = counts.failed ? 'failed' : counts.warning ? 'warning' : 'passed';
  const labels = { passed: 'All Passed', warning: 'Has Warning', failed: 'Has Error' };
  elements.overall.className = `overall-status is-${overall}`;
  elements.overall.querySelector('strong').textContent = labels[overall];
  elements.overall.querySelector('small').textContent = `${counts.passed} passed · ${counts.warning} warning · ${counts.failed} failed`;
  elements.summary.innerHTML = `<span class="summary-count">Passed <strong>${counts.passed}</strong></span><span class="summary-count">Warning <strong>${counts.warning}</strong></span><span class="summary-count">Failed <strong>${counts.failed}</strong></span>`;
}

async function runHealthCheck() {
  const pageChecks = await Promise.all(pagePaths.map(async (path) => [path, await checkResource(path)]));
  pageChecks.forEach(([path, result]) => addResult('pages', path, result.status, result.message));

  const jsonChecks = await Promise.all(dataPaths.map(async (path) => {
    try { return [path, { status: 'passed', message: `Fetch and JSON parse succeeded`, data: await loadJson(path) }]; }
    catch (error) { return [path, { status: 'failed', message: 'Fetch or JSON parse failed' }]; }
  }));
  jsonChecks.forEach(([path, result]) => addResult('data', path, result.status, result.message));

  const workflow = jsonChecks.find(([path]) => path === 'data/workflow.json')?.[1].data;
  const workflowNames = workflow?.steps?.map((step) => step.name) || [];
  const missingNodes = expectedWorkflowNodes.filter((name) => !workflowNames.some((actual) => actual === name || (name === 'Post' && actual === 'Post Processing')));
  addResult('schema', 'workflow.json · required nodes', missingNodes.length ? 'failed' : 'passed', missingNodes.length ? `Missing: ${missingNodes.join(', ')}` : 'All required workflow nodes found');

  const glossary = jsonChecks.find(([path]) => path === 'data/glossary.json')?.[1].data;
  const glossaryTerms = glossary?.terms || [];
  addResult('schema', 'glossary.json · minimum term count', glossaryTerms.length >= 10 ? 'passed' : 'failed', `${glossaryTerms.length} terms found; at least 10 required`);
  const glossaryRequiredFields = ['term', 'cn', 'definition', 'engineeringMeaning'];
  const glossaryFieldErrors = glossaryTerms.flatMap((term, index) => missingFields(term, glossaryRequiredFields).map((field) => `term ${index + 1}: ${field}`));
  addResult('schema', 'glossary.json · all term fields', glossaryFieldErrors.length ? 'failed' : 'passed', glossaryFieldErrors.length ? `Missing: ${glossaryFieldErrors.join(', ')}` : 'All terms contain required fields');

  const quiz = jsonChecks.find(([path]) => path === 'data/quiz.json')?.[1].data;
  const quizQuestions = quiz?.questions || [];
  addResult('schema', 'quiz.json · minimum question count', quizQuestions.length >= 10 ? 'passed' : 'failed', `${quizQuestions.length} questions found; at least 10 required`);
  const quizRequiredFields = ['id', 'level', 'question', 'answer', 'explanation'];
  const quizFieldErrors = quizQuestions.flatMap((question, index) => missingFields(question, quizRequiredFields).map((field) => `question ${index + 1}: ${field}`));
  addResult('schema', 'quiz.json · required fields', quizFieldErrors.length ? 'failed' : 'passed', quizFieldErrors.length ? `Missing: ${quizFieldErrors.join(', ')}` : 'All questions contain required fields');
  const quizOptionErrors = quizQuestions.flatMap((question, index) => {
    if (Array.isArray(question.options) && question.options.length) return [];
    const isChoice = /choice|true\s*\/\s*false/i.test(question.type || '');
    return [`question ${index + 1}: options${isChoice ? '' : ' (non-choice question may omit options)'}`];
  });
  const quizOptionWarnings = quizOptionErrors.filter((error) => error.includes('non-choice'));
  const quizOptionFailures = quizOptionErrors.filter((error) => !error.includes('non-choice'));
  addResult('schema', 'quiz.json · options by question type', quizOptionFailures.length ? 'failed' : quizOptionWarnings.length ? 'warning' : 'passed', quizOptionFailures.length ? `Missing: ${quizOptionFailures.join(', ')}` : quizOptionWarnings.length ? `Warning: ${quizOptionWarnings.join(', ')}` : 'Options are present for choice questions');

  for (const [name, fields] of Object.entries(expectedFields)) {
    const path = `data/${name === 'troubleshooting' ? 'troubleshooting' : name}.json`;
    const entry = jsonChecks.find(([candidate]) => candidate === path)?.[1];
    const record = entry?.data && firstRecord(entry.data, name === 'quiz' ? 'questions' : name === 'troubleshooting' ? 'issues' : 'terms');
    const missing = missingFields(record, fields);
    const compatibility = name === 'glossary' && missing.includes('cn') && record?.zh ? 'warning' : name === 'troubleshooting' && missing.length && record?.category && record?.title && record?.commonFix ? 'warning' : missing.length ? 'failed' : 'passed';
    const message = missing.length ? `Missing: ${missing.join(', ')}${compatibility === 'warning' ? '; compatible fields detected in current schema' : ''}` : 'All required fields found';
    addResult('schema', `${name}.json · required fields`, compatibility, message);
  }

  renderSummary();
}

runHealthCheck().catch((error) => {
  elements.error.hidden = false;
  elements.error.textContent = `Health check could not complete: ${error.message}`;
  elements.overall.className = 'overall-status is-failed';
  elements.overall.querySelector('strong').textContent = 'Has Error';
});
