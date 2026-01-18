  'sobre.desc': 'I am a Computational Sciences student and Junior Full Stack Developer, focused on web applications, AI integrations, and data analysis. I have hands-on experience with Python, FastAPI, APIs, authentication, and databases. I am looking for my first professional opportunity in technology.',
  'projetos.desc': 'Below are some of my main projects developed with modern technologies.',
  'certificacoes.desc': 'Certificates and qualifications relevant to my technology career.',
  'contato.desc': 'Feel free to contact me by email, phone, or social networks!',
// src/js/translate.js
// Sistema simples de tradução manual PT/EN

const translations = {
  'pt': {
    'menu.sobre': 'Sobre',
    'menu.skills': 'Skills',
    'menu.projetos': 'Projetos',
    'menu.certificacoes': 'Certificações',
    'menu.contato': 'Contato',
    'hero.sobre': '⚡ Desenvolvedor Full Stack Júnior apaixonado por tecnologia. Focado em Python, APIs, Inteligência Artificial e Automação ⚡',
    'btn.curriculo': 'VER CURRÍCULO',
    // ...adicione mais chaves conforme necessário
  },
  'en': {
    'menu.sobre': 'About',
    'menu.skills': 'Skills',
    'menu.projetos': 'Projects',
    'menu.certificacoes': 'Certifications',
    'menu.contato': 'Contact',
    'hero.sobre': '⚡ Junior Full Stack Developer passionate about technology. Focused on Python, APIs, Artificial Intelligence and Automation ⚡',
    'btn.curriculo': 'SEE RESUME',
    'sobre.titulo': 'About Me',
    'skills.titulo': 'My Skills',
    'skills.tecferramentas': 'Technologies & Tools',
    'projetos.titulo': 'My Projects',
    'certificacoes.titulo': 'Certifications',
    'contato.titulo': 'Contact Me',
    'contato.email': 'E-mail',
    'contato.telefone': 'Phone',
    'contato.github': 'GitHub',
    'contato.linkedin': 'LinkedIn',
    'footer.texto': '© 2026 <span id="footer-nome">Sávio Emmanuel</span>. Made with 💙 and lots of code. — <a href="index.html" class="text-emerald-600 hover:underline">Portfolio</a>',
    // ...add more keys as needed
  }
};

let currentLang = 'pt';

function translatePage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Permite HTML no texto traduzido (ex: footer)
      if (key === 'footer.texto') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

window.translatePage = translatePage;

// Detecta idioma do navegador ao carregar
document.addEventListener('DOMContentLoaded', () => {
  const lang = navigator.language || navigator.userLanguage;
  if (lang && lang.toLowerCase().startsWith('en')) {
    translatePage('en');
  } else {
    translatePage('pt');
  }
});
