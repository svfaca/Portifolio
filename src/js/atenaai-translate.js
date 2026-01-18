import { translations } from './atenaai-i18n.js';

function getUserLang() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('en')) return 'en';
  return 'pt';
}

function translatePage() {
  const lang = getUserLang();
  const dict = translations[lang] || translations.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}

document.addEventListener('DOMContentLoaded', translatePage);
