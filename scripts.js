const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.primary-nav ul');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  const closeMenu = () => {
    navMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
  };

  const syncMenuState = () => {
    if (window.innerWidth > 960) {
      navMenu.setAttribute('aria-hidden', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      closeMenu();
    }
  };

  syncMenuState();

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', syncMenuState);
}
