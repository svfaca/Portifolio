export function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  if (!mobileMenuButton || !mobileMenu || !closeMobileMenuBtn || !overlay) {
    console.warn('Mobile menu elements not found');
    return;
  }

  function openMobileMenu(e) {
    e.stopPropagation();
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenuImmediate() {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Event listeners
  mobileMenuButton.addEventListener('click', openMobileMenu);
  closeMobileMenuBtn.addEventListener('click', closeMobileMenuImmediate);
  overlay.addEventListener('click', closeMobileMenuImmediate);

  // Fechar ao clicar em qualquer link do menu (FECHAMENTO INSTANTÂNEO)
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenuImmediate);
  });
}

