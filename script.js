const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav?.classList.remove('is-open'));
});
