import './app.js';

// 添加请求节流控制
const requestThrottler = {
  lastRequestTime: 0,
  minInterval: 200, // 最小200ms间隔
  isRequestPending: false,
  
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
  }
};

const buttons = document.querySelectorAll('.filter-button');
const nodes = document.querySelectorAll('.logic-node');

// 为按钮点击事件添加节流
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    requestThrottler.throttle(() => {
      buttons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      const domain = button.textContent.trim();
      nodes.forEach((node) => { 
        node.hidden = domain !== 'All domains' && !node.textContent.toLocaleLowerCase().includes(domain.toLocaleLowerCase()); 
      });
    });
  });
});
