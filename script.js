const modal = document.querySelector('.video-modal');
const player = document.querySelector('.video-shell');
document.querySelectorAll('[data-video]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.video;
    player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0" title="Yasar video portfolio sample" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    modal.showModal();
  });
});
function closePlayer() { modal.close(); player.replaceChildren(); }
document.querySelector('.modal-close').addEventListener('click', closePlayer);
modal.addEventListener('click', (event) => { if (event.target === modal) closePlayer(); });
modal.addEventListener('close', () => player.replaceChildren());

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navLinks.classList.toggle('open', open);
});
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));
document.querySelector('#year').textContent = new Date().getFullYear();
