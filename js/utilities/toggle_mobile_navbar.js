/* ================== Toggle mobile menu bar ================== */
// DESCR: Toggle the menu bar in mobile view with the hamburger icon
// Close menu when an option in the mobile navbar is clicked
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu-toggle');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Close menu when a menu item is clicked in mobile view
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.add('hidden');
  }
});
/* ============================================================ */