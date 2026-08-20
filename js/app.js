const page = document.body.dataset.page;

const topnav = document.querySelector('.topnav');
if (topnav && !topnav.querySelector('a[href="health-check.html"]')) {
  topnav.insertAdjacentHTML('beforeend', '<a href="health-check.html">Health Check</a>');
}

document.querySelectorAll('.topnav a').forEach((link) => {
  link.addEventListener('click', () => localStorage.setItem('lastPage', page || 'dashboard'));
});

document.documentElement.dataset.ready = 'true';
