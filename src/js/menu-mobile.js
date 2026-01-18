console.log("menu-mobile.JS CARREGOU ✔️");

export function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  function openMobileMenu(e) {
    e.stopPropagation();
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (mobileMenuButton && mobileMenu && closeMobileMenuBtn && overlay) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
  }
}

// === Mobile Menu Controller ===
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

// Abrir menu
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // trava scroll
});

// Fechar menu (botão X)
closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = '';
});

// Fechar ao clicar no overlay
mobileOverlay.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = '';
});

// Fechar ao clicar em qualquer link do menu
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  });
});

