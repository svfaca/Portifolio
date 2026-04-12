// Arquivo principal de inicialização
import { initMobileMenu } from './menu-mobile.js';
import { ThemeManager } from './theme-toggle.js';
import { NavigationManager } from './navigation.js';
import { ConfigManager } from './config-manager.js';
import { CertificationsManager } from './certifications.js';


class Portfolio {
  constructor() {
    this.themeManager = new ThemeManager();
    this.navigationManager = new NavigationManager();
    this.configManager = new ConfigManager();
    this.certificationsManager = new CertificationsManager();
    
initMobileMenu();

    this.init();
  }

  init() {
    this.configManager.applyConfig();
    this.initProjectCards();
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
