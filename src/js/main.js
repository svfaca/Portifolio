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
    this.initProfileToggle();
    this.initMobileProjectsLoadMore();
    
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

    // Ensure heroTitle has a stable structure: prefix text node + a span for the typed name
    heroTitle.textContent = prefix;
    let nameSpan = heroTitle.querySelector('.highlight-name');
    if (!nameSpan) {
      nameSpan = document.createElement('span');
      nameSpan.className = 'highlight-name';
      heroTitle.appendChild(nameSpan);
    }

    const renderTypedName = (typedCount) => {
      // Update only the name span's textContent to avoid reparsing HTML
      nameSpan.textContent = name.slice(0, typedCount);
    };

    if (prefersReducedMotion) {
      heroTitle.innerHTML = `${prefix}<span class="highlight-name">${name}</span>`;
      this.revealHeroPhoto();
      return;
    }

    let currentChar = 0;
    const targetNameLength = name.length;

    // If reduced motion requested, show full text immediately
    if (prefersReducedMotion) {
      nameSpan.textContent = name;
      this.revealHeroPhoto();
      return;
    }

    // Use requestAnimationFrame to drive typing at ~70ms per character
    const msPerChar = 70;
    let lastTimestamp = null;

    const step = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed >= msPerChar) {
        // Advance one character and reset timer
        currentChar += 1;
        renderTypedName(currentChar);
        lastTimestamp = timestamp;
      }

      if (currentChar < targetNameLength) {
        window.requestAnimationFrame(step);
      } else {
        // Typing complete, reveal hero photo
        this.revealHeroPhoto();
      }
    };

    // Start the rAF typing loop
    window.requestAnimationFrame(step);
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
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Evita erros em paginas sem HERO ou sem a lib carregada.
    if (!heroParticlesContainer || typeof window.tsParticles === 'undefined' || isMobile) {
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
initProfileToggle() {
  const profiles = document.querySelectorAll('.profile-toggle');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const toggleProfile = (profile) => {
    if (profile.classList.contains('animating')) return;

    profile.classList.add('animating');

    // troca no meio da animação
    setTimeout(() => {
      profile.classList.toggle('active');
    }, 350);

    // limpa estado
    setTimeout(() => {
      profile.classList.remove('animating');
    }, 800);
  };

  profiles.forEach(profile => {
    // Click manual
    profile.addEventListener('click', () => {
      toggleProfile(profile);
    });

    if (prefersReducedMotion || isMobile) {
      return;
    }

    // Comportamento automático ao carregar
    // Aguarda 4 segundos, alterna para animada, aguarda 2 segundos, volta
    setTimeout(() => {
      // Vai para a imagem animada
      toggleProfile(profile);

      // Aguarda 4 segundos e volta à imagem normal
      setTimeout(() => {
        toggleProfile(profile);

        // Inicia o loop de alternância automática a cada 15 segundos
        setInterval(() => {
          toggleProfile(profile);
        }, 15000);
      }, 4000);
    }, 4000);
  });

  // preload da imagem animada (evita travar)
  const preload = new Image();
  preload.src = 'assets/images/profile/pic-animated.png';
}

initMobileProjectsLoadMore() {
  const loadMoreBtn = document.getElementById('load-more-projects-btn');
  const hiddenCards = document.querySelectorAll('article[data-project-card].hidden');

  if (!loadMoreBtn || !hiddenCards.length) {
    return;
  }

  loadMoreBtn.addEventListener('click', () => {
    // Revelar projetos com animação
    hiddenCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove('hidden');
        card.classList.add('flex');
      }, index * 100); // Pequeno delay entre revelações
    });

    // Esconder botão com fade out
    loadMoreBtn.style.opacity = '1';
    loadMoreBtn.style.transition = 'opacity 0.3s ease';
    loadMoreBtn.style.opacity = '0';
    loadMoreBtn.style.pointerEvents = 'none';

    setTimeout(() => {
      loadMoreBtn.style.display = 'none';
    }, 300);
  });
}
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  window.portfolio = new Portfolio();
});

export default Portfolio;
