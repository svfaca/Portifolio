// Gerencia o aparecer do header no mobile quando a foto do hero sai da tela
// Os botões SEMPRE ficam visíveis (não sofrem fade)

export class HeroScrollHeaderManager {
  constructor() {
    this.mobileNavHeader = document.getElementById('mobile-nav-header');
    this.heroSection = document.getElementById('hero');
    
    this.isMobile = () => window.innerWidth < 768; // md breakpoint
    
    if (this.isMobile()) {
      this.init();
    }
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    // Se voltou para desktop, garante visibilidade
    if (!this.isMobile()) {
      if (this.mobileNavHeader) {
        this.mobileNavHeader.classList.remove('opacity-0', 'pointer-events-none');
      }
    }
  }

  handleScroll() {
    if (!this.isMobile() || !this.heroSection || !this.mobileNavHeader) return;

    // Pega a posição do hero
    const heroRect = this.heroSection.getBoundingClientRect();
    const heroBottom = heroRect.bottom;
    
    // Calcula quanto da seção hero ainda está visível
    const scrollProgress = Math.max(0, Math.min(1, -heroBottom / window.innerHeight));

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
