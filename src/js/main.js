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
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  window.portfolio = new Portfolio();
});

export default Portfolio;
