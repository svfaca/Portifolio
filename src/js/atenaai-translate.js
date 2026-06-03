import { i18n } from './atenaai-i18n.js';
import { applyLocalizedSeo, getLanguageFromPath, getPageKey } from './seo.js';
window.i18n = i18n;

function getUserLang() {
  return 'pt';
}

function translatePage() {
  const lang = getLanguageFromPath(getUserLang());
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  // Traduzir o título da página
  if (dict['header.title']) {
    document.title = dict['header.title'];
  }

  applyLocalizedSeo({
    pageKey: getPageKey(),
    lang,
    seo: {
      title: dict['header.title'],
      description: dict['about.description'] || dict['hero.subtitle'],
      ogTitle: dict['header.title'],
      ogDescription: dict['about.description'] || dict['hero.subtitle'],
      twitterTitle: dict['header.title'],
      twitterDescription: dict['about.description'] || dict['hero.subtitle'],
      ogLocale: lang === 'en' ? 'en_US' : 'pt_BR'
    }
  });

  // Traduzir o label Telefone se existir
  const phoneLabel = document.querySelector('[data-i18n="contact.phone"]');
  if (phoneLabel && dict['contact.phone']) {
    phoneLabel.textContent = dict['contact.phone'];
  }
}

window.onload = translatePage;
window.getUserLang = getUserLang;
window.translatePage = translatePage;
