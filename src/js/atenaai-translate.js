import { i18n } from './atenaai-i18n.js';
window.i18n = i18n;

function getUserLang() {
  // If user explicitly selected a language, respect it
  try {
    const pref = localStorage.getItem('atenaai-lang');
    if (pref === 'pt' || pref === 'en') return pref;
  } catch (e) {
    // ignore
  }
  const lang = navigator.language || navigator.userLanguage;
  if (lang && (lang.startsWith('pt') || lang === 'pt-BR')) {
    return 'pt';
  }
  return 'en';
}

function translatePage() {
  const lang = getUserLang();
  const dict = i18n[lang] || i18n.en;
  console.log('[AtenaAI] translatePage chamada, idioma:', lang);
  console.log('[AtenaAI] dict:', dict);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
      console.log(`[AtenaAI] Traduzido: ${key} => ${dict[key]}`);
    } else {
      console.warn(`[AtenaAI] Chave não encontrada: ${key}`);
    }
  });
  // Traduzir o título da página
  if (dict['header.title']) {
    document.title = dict['header.title'];
  }
  // Traduzir o label Telefone se existir
  const phoneLabel = document.querySelector('[data-i18n="contact.phone"]');
  if (phoneLabel && dict['contact.phone']) {
    phoneLabel.textContent = dict['contact.phone'];
  }
}

window.onload = translatePage;
window.getUserLang = getUserLang;
window.translatePage = translatePage;
