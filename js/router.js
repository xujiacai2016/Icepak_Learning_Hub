export function goTo(path) {
  window.location.assign(path);
}

export function currentPage() {
  return document.body.dataset.page || 'dashboard';
}
