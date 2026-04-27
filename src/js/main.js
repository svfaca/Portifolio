// Arquivo principal de inicialização
import { initMobileMenu } from './menu-mobile.js';
import { ThemeManager } from './theme-toggle.js';
import { NavigationManager } from './navigation.js';
import { ConfigManager } from './config-manager.js';
import { CertificationsManager } from './certifications.js';
import { HeroScrollHeaderManager } from './hero-scroll-header.js';


class Portfolio {
  constructor() {
    this.heroParticlesInstance = null;
    this.themeObserver = null;
    this.isParticlesDarkTheme = null;
    this.heroImageWrapper = null;

    this.themeManager = new ThemeManager();
    this.navigationManager = new NavigationManager();
    this.configManager = new ConfigManager();
    this.certificationsManager = new CertificationsManager();
    this.heroScrollHeaderManager = new HeroScrollHeaderManager();
    
initMobileMenu();

    this.init();
  }

  init() {
    this.configManager.applyConfig();
    this.initHeroParticles();
    this.initScrollReveal();
    
    // Aguarda a tradução ser aplicada antes de iniciar animações do hero
    this.waitForHeroElementsAndInit();
  }

  waitForHeroElementsAndInit() {
    const heroTitle = document.querySelector('[data-i18n="hero.name"]');
    
    if (heroTitle && heroTitle.textContent.trim()) {
      // Elementos já estão traduzidos, inicializa logo
      this.initHeroPhotoReveal();
      this.initHeroTyping();
      this.initProjectCards();
    } else {
      // Aguarda a tradução ser aplicada (com timeout reduzido)
      const checkInterval = setInterval(() => {
        const heroTitle = document.querySelector('[data-i18n="hero.name"]');
        if (heroTitle && heroTitle.textContent.trim()) {
          clearInterval(checkInterval);
          this.initHeroPhotoReveal();
          this.initHeroTyping();
          this.initProjectCards();
        }
      }, 20);
      
      // Timeout de segurança (máx 1s)
      setTimeout(() => clearInterval(checkInterval), 1000);
    }
  }

  initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = Array.from(document.querySelectorAll(
      '#sobre, #projetos, #skills, #certificacoes, #contato, #sobre .glass-card, #projetos [data-project-card], #skills .glass-card, #contato .glass-card, footer'
    ));

    if (!revealTargets.length) {
      return;
    }

    if (prefersReducedMotion) {
      revealTargets.forEach((element) => {
        element.classList.add('reveal-on-scroll', 'is-visible');
      });
      return;
    }

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.setProperty('--reveal-delay', `${(index % 6) * 65}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealTargets.forEach((element) => {
      observer.observe(element);
    });
  }

  initHeroPhotoReveal() {
    // Encontra TODAS as wrappers de imagem (mobile + desktop)
    const heroImageWrappers = document.querySelectorAll('.hero-image-wrapper');

    if (!heroImageWrappers.length) {
      return;
    }

    // Armazena para uso em revealHeroPhoto()
    this.heroImageWrappers = heroImageWrappers;
    
    // Adiciona classe inicial a todas
    heroImageWrappers.forEach(wrapper => {
      wrapper.classList.add('hero-photo-pending');
      wrapper.classList.remove('hero-photo-visible');
    });

    // Encontra o container dos botões (logo + hamburguer) no mobile
    // Já tem mobile-buttons-pending no HTML, só armazena a referência
    this.mobileButtonsContainer = document.getElementById('mobile-nav-buttons');
  }

  revealHeroPhoto() {
    if (!this.heroImageWrappers || !this.heroImageWrappers.length) {
      return;
    }

    // Remove classe de pendência de TODAS as wrappers
    this.heroImageWrappers.forEach(wrapper => {
      wrapper.classList.remove('hero-photo-pending');
      wrapper.classList.add('hero-photo-visible');
    });

    // Anima os botões em conjunto com a foto
    if (this.mobileButtonsContainer) {
      this.mobileButtonsContainer.classList.remove('mobile-buttons-pending');
      this.mobileButtonsContainer.classList.add('mobile-buttons-visible');
    }
  }

  initHeroTyping() {
    const heroTitle = document.querySelector('[data-i18n="hero.name"]');

    if (!heroTitle) {
      this.revealHeroPhoto();
      return;
    }

    const isEnglish = (document.documentElement.lang || '').toLowerCase().startsWith('en');
    const prefix = isEnglish ? "Hello, I'm " : 'Olá, eu sou ';
    const name = 'Sávio Emmanuel';
    const phrase = `${prefix}${name}`;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderTypedText = (count) => {
      if (count <= prefix.length) {
        heroTitle.textContent = prefix.slice(0, count);
        return;
      }

      const typedNameLength = Math.min(count - prefix.length, name.length);
      const typedName = name.slice(0, typedNameLength);
      heroTitle.innerHTML = `${prefix}<span class="highlight-name">${typedName}</span>`;
    };

    if (prefersReducedMotion) {
      heroTitle.innerHTML = `${prefix}<span class="highlight-name">${name}</span>`;
      this.revealHeroPhoto();
      return;
    }

    let currentIndex = 0;
    heroTitle.textContent = '';

    const typeNextChar = () => {
      renderTypedText(currentIndex);
      currentIndex += 1;

      if (currentIndex <= phrase.length) {
        window.setTimeout(typeNextChar, 70);
      } else {
        this.revealHeroPhoto();
      }
    };

    typeNextChar();
  }

  getHeroParticlesOptions(isDarkTheme) {
    const particleColor = isDarkTheme ? '#ffffff' : '#ef4444';

    return {
      fpsLimit: 60,
      particles: {
        number: {
          value: 72,
          density: {
            enable: true,
            area: 900
          }
        },
        color: {
          value: particleColor
        },
        links: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'out'
          }
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: {
            min: 1.2,
            max: 3
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 110,
            duration: 0.35
          },
          push: {
            quantity: 3
          }
        }
      },
      detectRetina: true,
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 42
              },
              links: {
                distance: 110
              },
              move: {
                speed: 1.5
              }
            }
          }
        }
      ]
    };
  }

  loadHeroParticlesByTheme() {
    const isDarkTheme = document.documentElement.classList.contains('dark');

    if (this.heroParticlesInstance && this.isParticlesDarkTheme === isDarkTheme) {
      return;
    }

    this.isParticlesDarkTheme = isDarkTheme;

    if (this.heroParticlesInstance) {
      this.heroParticlesInstance.destroy();
      this.heroParticlesInstance = null;
    }

    window.tsParticles
      .load('tsparticles', this.getHeroParticlesOptions(isDarkTheme))
      .then((container) => {
        this.heroParticlesInstance = container;
      })
      .catch(() => {
        this.heroParticlesInstance = null;
      });
  }

  initHeroParticles() {
    const heroParticlesContainer = document.getElementById('tsparticles');

    // Evita erros em paginas sem HERO ou sem a lib carregada.
    if (!heroParticlesContainer || typeof window.tsParticles === 'undefined') {
      return;
    }

    this.loadHeroParticlesByTheme();

    if (!this.themeObserver) {
      this.themeObserver = new MutationObserver((mutations) => {
        const hasClassMutation = mutations.some((mutation) => mutation.attributeName === 'class');

        if (hasClassMutation) {
          this.loadHeroParticlesByTheme();
        }
      });

      this.themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
  }

  initProjectCards() {
    const cards = Array.from(document.querySelectorAll('[data-project-card]'));

    const collapseAllCards = () => {
      cards.forEach((card) => {
        const toggleButton = card.querySelector('[data-project-toggle]');

        card.classList.add('is-collapsed');

        if (toggleButton) {
          toggleButton.setAttribute('aria-expanded', 'false');
          toggleButton.setAttribute('aria-label', 'Abrir detalhes');
        }
      });
    };

    cards.forEach((card) => {
      const toggleButton = card.querySelector('[data-project-toggle]');
      const body = card.querySelector('.project-card-body');

      if (!toggleButton || !body) {
        return;
      }

      const setExpandedState = (isExpanded) => {
        card.classList.toggle('is-collapsed', !isExpanded);
        toggleButton.setAttribute('aria-expanded', String(isExpanded));
        toggleButton.setAttribute('aria-label', isExpanded ? 'Fechar detalhes' : 'Abrir detalhes');
      };

      toggleButton.addEventListener('click', () => {
        const isExpanded = !card.classList.contains('is-collapsed');
        const willExpand = !isExpanded;

        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.add('is-collapsed');

            const otherButton = otherCard.querySelector('[data-project-toggle]');
            if (otherButton) {
              otherButton.setAttribute('aria-expanded', 'false');
              otherButton.setAttribute('aria-label', 'Abrir detalhes');
            }
          }
        });

        setExpandedState(willExpand);
      });

      setExpandedState(false);
    });

    collapseAllCards();

    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        collapseAllCards();
      }
    });
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  window.portfolio = new Portfolio();
});

export default Portfolio;
