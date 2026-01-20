// Gerenciador de modo escuro/claro unificado
export class ThemeManager {
  constructor() {
    this.html = document.documentElement;

    this.toggleDesktop = document.getElementById('theme-toggle');
    this.toggleMobile = document.getElementById('theme-toggle-mobile');

    this.sunIconDesktop = document.getElementById('sun-icon');
    this.moonIconDesktop = document.getElementById('moon-icon');
    this.sunIconMobile = document.getElementById('sun-icon-mobile');
    this.moonIconMobile = document.getElementById('moon-icon-mobile');

    this.init();
  }

  init() {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }

    // Eventos
    if (this.toggleDesktop) {
      this.toggleDesktop.addEventListener('click', () => this.toggle());
    }

    if (this.toggleMobile) {
      this.toggleMobile.addEventListener('click', () => this.toggle());
    }
  }

  toggle() {
    if (this.html.classList.contains('dark')) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode() {
    this.html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.updateIcons(true);
  }

  disableDarkMode() {
    this.html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.updateIcons(false);
  }

  updateIcons(isDark) {
    // Desktop
    if (this.sunIconDesktop && this.moonIconDesktop) {
      this.sunIconDesktop.classList.toggle('hidden', !isDark);
      this.moonIconDesktop.classList.toggle('hidden', isDark);
    }

    // Mobile
    if (this.sunIconMobile && this.moonIconMobile) {
      this.sunIconMobile.classList.toggle('hidden', !isDark);
      this.moonIconMobile.classList.toggle('hidden', isDark);
    }
  }
}
