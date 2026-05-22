// Gerencia o aparecer do header no mobile quando a foto do hero sai da tela
// Os botões SEMPRE ficam visíveis (não sofrem fade)

export class HeroScrollHeaderManager {
  constructor() {
    this.mobileNavHeader = document.getElementById('mobile-nav-header');
    this.heroSection = document.getElementById('hero');
    this.rafId = null;
    this.heroMetrics = { top: 0, height: 0 };
    this.lastOpacity = -1;
    
    this.isMobile = () => window.innerWidth < 768; // md breakpoint
    
    if (this.isMobile()) {
      this.init();
    }
  }

  init() {
    this.updateHeroMetrics();
    window.addEventListener('scroll', () => this.scheduleScrollUpdate(), { passive: true });
    window.addEventListener('resize', () => {
      this.updateHeroMetrics();
      this.checkScreenSize();
      this.scheduleScrollUpdate();
    }, { passive: true });
    window.addEventListener('load', () => {
      this.updateHeroMetrics();
      this.scheduleScrollUpdate();
    }, { passive: true });
    this.scheduleScrollUpdate();
  }

  updateHeroMetrics() {
    if (!this.heroSection) {
      return;
    }

    const heroRect = this.heroSection.getBoundingClientRect();
    this.heroMetrics = {
      top: heroRect.top + window.scrollY,
      height: heroRect.height
    };
  }

  scheduleScrollUpdate() {
    if (this.rafId !== null) {
      return;
    }

    this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null;
      this.handleScroll();
    });
  }

  checkScreenSize() {
    // Se voltou para desktop, garante visibilidade
    if (!this.isMobile()) {
      if (this.mobileNavHeader) {
        this.mobileNavHeader.classList.remove('opacity-0', 'pointer-events-none');
        this.mobileNavHeader.style.opacity = '';
      }
    }
  }

  handleScroll() {
    if (!this.isMobile() || !this.heroSection || !this.mobileNavHeader) return;

    const heroBottom = this.heroMetrics.top + this.heroMetrics.height - window.scrollY;
    
    // Calcula quanto da seção hero ainda está visível
    const scrollProgress = Math.max(0, Math.min(1, -heroBottom / window.innerHeight));

    if (Math.abs(scrollProgress - this.lastOpacity) < 0.01) {
      return;
    }

    this.lastOpacity = scrollProgress;

    // Atualiza apenas a OPACIDADE do header
    this.mobileNavHeader.style.opacity = scrollProgress;
    
    // Habilita pointer events quando começar a aparecer
    if (scrollProgress > 0) {
      this.mobileNavHeader.classList.remove('pointer-events-none');
    } else {
      this.mobileNavHeader.classList.add('pointer-events-none');
    }
  }
}
