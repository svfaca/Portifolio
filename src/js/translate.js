// ...existing code...
// src/js/translate.js
// Sistema simples de tradução manual PT/EN

const translations = {
  pt: {
    // Certificações (nomes)
    'cert.nome.bacharelado_ciencia_computacao': 'Bacharelado em Ciência da Computação',
    'cert.nome.intro_ciencia_dados': 'Introdução a Ciência de Dados',
    'cert.nome.analise_dados_powerbi': 'ANÁLISE DE DADOS COM POWER BI',
    'cert.nome.primeiro_sistema_web': 'Criando Meu Primeiro Sistema Web',
    'cert.nome.primeira_solucao_lowcode': 'Desenvolvendo sua Primeira Solução Low-Code',
    'cert.nome.microcontroladores_robotica': 'MICROCONTROLADORES APLICADOS À ROBÓTICA MÓVEL',
    'cert.nome.drones_autonomos': 'DRONES AÉREOS AUTÔNOMOS: PROGRAMAÇÃO E SISTEMAS EMBARCADOS',
    'cert.nome.seguranca_cibernetica_ia': 'SEGURANÇA CIBERNÉTICA NA ERA DA INTELIGÊNCIA ARTIFICIAL',
    'cert.nome.fundamentos_lowcode': 'Conceitos Fundamentais para um Desenvolvedor de Software Low-Code',
    'cert.nome.intro_desenvolvimento_lowcode': 'Conceitos Introdução a um processo de Desenvolvimento Low-Code',
    'cert.nome.produtividade_ia': 'Produtividade na Era da IA Generativa',
    'cert.nome.escrita_ia': 'A Escrita Apoiada por IA',
    'cert.nome.profissional_ia': 'O Profissional Apoiado por IA',
    'cert.nome.efset_b2': 'Certificado oficial EF SET 51/100 (B2 Independente)',
    'cert.nome.ingles_tecnico': 'CURSO DE EXTENSÃO: INGLÊS TÉCNICO',
    'cert.nome.excel_basico': 'MICROSOFT EXCEL - BÁSICO',
    'cert.nome.lgpd': 'Lei Geral de Proteção de Dados (LGPD)',
    'cert.nome.softskills_ti': 'Habilidades não-técnicas necessárias para um Profissional de TI',
    'cert.nome.suporte_basico_vida': 'Suporte Básico de Vida (Primeiros Socorros)',
    'cert.nome.auxiliar_administrativo': 'AUXIILIAR ADMINISTRATIVO',
    // ...demais traduções PT...
    'dev.skill.ia': 'Inteligência Artificial',
    'cert.btn.vercertificado': '📄 Ver Certificado',
    'cert.btn.vermais': 'Ver mais',
    'cert.btn.vermenos': 'Ver menos',
    'cert.categoria.tecnologia': 'Tecnologia & Computação',
    'cert.categoria.ia': 'Inteligência Artificial',
    'cert.categoria.idiomas': 'Idiomas',
    'cert.categoria.ferramentas': 'Ferramentas & Conformidade',
    'cert.categoria.softskills': 'Soft Skills',
    'cert.categoria.outros': 'Outros',
    'menu.sobre': 'Sobre',
    'menu.skills': 'Skills',
    'menu.projetos': 'Projetos',
    'menu.certificacoes': 'Certificações',
    'menu.contato': 'Contato',
    'hero.sobre': '⚡ Desenvolvedor Full Stack Júnior apaixonado por tecnologia. Focado em Python, APIs, Inteligência Artificial e Automação ⚡',
    'btn.curriculo': 'VER CURRÍCULO',
    'sobre.titulo': 'Sobre Mim',
    'btn.conheca': 'CONHEÇA',
    'sobre.desc': 'Sou estudante de Ciências Computacionais e desenvolvedor Full Stack Júnior, focado em aplicações web, integrações com Inteligência Artificial e análise de dados. Tenho experiência prática com Python, FastAPI, APIs, autenticação e bancos de dados. Busco minha primeira oportunidade profissional na área de tecnologia.',
    'skills.titulo': 'Competências',
    'skills.tecferramentas': 'Tecnologias e Ferramentas',
    'skills.prompt': 'Engenharia de Prompt',
    'skills.iaapi': 'Integração com APIs de IA',
    'skills.automacao': 'Automação com Python',
    'skills.sql': 'SQL / Banco de Dados',
    'skills.pandas': 'Análise de Dados (Pandas)',
    'projetos.titulo': 'Meus Projetos',
    'projetos.desc': 'Veja abaixo alguns dos meus principais projetos desenvolvidos com tecnologias modernas.',
    'projetos.atenaai.desc': 'AtenaAI é uma plataforma de assistente educacional inteligente, com chat em tempo real, temas claro/escuro, gestão de conversas e autenticação segura. Ideal para estudantes e professores.',
    'projetos.atenaai.features': '🤖 Chat IA especializado em educação\n🌓 Tema claro/escuro e UI moderna\n💬 Gestão de conversas e áreas de interesse\n🔒 Segurança: JWT, bcrypt',
    'projetos.atenaai.stack': 'Python, FastAPI, IA',
    'certificacoes.titulo': 'Qualificações',
    'certificacoes.desc': 'Certificados e qualificações relevantes para minha carreira em tecnologia.',
    'contato.titulo': 'Entre em Contato',
    'contato.email': 'E-mail',
    'contato.telefone': 'Telefone',
    'contato.github': 'GitHub',
    'contato.linkedin': 'LinkedIn',
    'footer.texto': '© 2026 <span id="footer-nome">Sávio Emmanuel</span>. Feito com 💙 e muito código. — <a href="index.html" class="text-emerald-600 hover:underline">Portfólio</a>',
    'contato.desc': 'Fique à vontade para me chamar por e-mail, telefone ou redes sociais!'
  },
  en: {
    // Certificações (nomes)
    'cert.nome.bacharelado_ciencia_computacao': 'Bachelor in Computer Science',
    'cert.nome.intro_ciencia_dados': 'Introduction to Data Science',
    'cert.nome.analise_dados_powerbi': 'DATA ANALYSIS WITH POWER BI',
    'cert.nome.primeiro_sistema_web': 'Building My First Web System',
    'cert.nome.primeira_solucao_lowcode': 'Developing Your First Low-Code Solution',
    'cert.nome.microcontroladores_robotica': 'MICROCONTROLLERS APPLIED TO MOBILE ROBOTICS',
    'cert.nome.drones_autonomos': 'AUTONOMOUS AERIAL DRONES: PROGRAMMING AND EMBEDDED SYSTEMS',
    'cert.nome.seguranca_cibernetica_ia': 'CYBERSECURITY IN THE AGE OF ARTIFICIAL INTELLIGENCE',
    'cert.nome.fundamentos_lowcode': 'Fundamental Concepts for a Low-Code Software Developer',
    'cert.nome.intro_desenvolvimento_lowcode': 'Introduction to a Low-Code Development Process',
    'cert.nome.produtividade_ia': 'Productivity in the Age of Generative AI',
    'cert.nome.escrita_ia': 'Writing Supported by AI',
    'cert.nome.profissional_ia': 'The AI-Supported Professional',
    'cert.nome.efset_b2': 'Official EF SET Certificate 51/100 (B2 Independent)',
    'cert.nome.ingles_tecnico': 'EXTENSION COURSE: TECHNICAL ENGLISH',
    'cert.nome.excel_basico': 'MICROSOFT EXCEL - BASIC',
    'cert.nome.lgpd': 'General Data Protection Law (LGPD)',
    'cert.nome.softskills_ti': 'Non-Technical Skills Needed for an IT Professional',
    'cert.nome.suporte_basico_vida': 'Basic Life Support (First Aid)',
    'cert.nome.auxiliar_administrativo': 'ADMINISTRATIVE ASSISTANT',
    // ...demais traduções EN...
    'dev.skill.ia': 'Artificial Intelligence',
    'cert.btn.vercertificado': '📄 View Certificate',
    'cert.btn.vermais': 'View more',
    'cert.btn.vermenos': 'View less',
    'cert.categoria.tecnologia': 'Technology & Computing',
    'cert.categoria.ia': 'Artificial Intelligence',
    'cert.categoria.idiomas': 'Languages',
    'cert.categoria.ferramentas': 'Tools & Compliance',
    'cert.categoria.softskills': 'Soft Skills',
    'cert.categoria.outros': 'Others',
                'contato.falecomigo': 'CONTACT ME',
              'hero.stack': 'Python • FastAPI • APIs • Artificial Intelligence',
            'dev.name.label': 'name',
            'dev.name': 'Sávio Emmanuel',
            'dev.role.label': 'role',
            'dev.role': 'Full Stack Jr',
            'dev.location.label': 'location',
            'dev.location': 'Rio de Janeiro, Brazil',
            'dev.education.label': 'education',
            'dev.education': 'Computational Sciences',
            'dev.skills.label': 'skills',
            'dev.skill.python': 'Python',
            'dev.skill.fastapi': 'FastAPI',
            'dev.skill.javascript': 'JavaScript',
            'dev.skill.sql': 'SQL',
            'dev.skill.tailwind': 'Tailwind',
            'dev.skill.git': 'Git',
            'dev.interests.label': 'interests',
            'dev.interest.ia': 'AI',
            'dev.interest.automacao': 'Automation',
            'dev.interest.dados': 'Data',
            'dev.hireable.label': 'hireable',
            'dev.hireable': 'yes',
          'projetos.atenaai': 'AtenaAI',
          'projetos.atenaai.desc': 'AtenaAI is an intelligent educational assistant platform with real-time chat, light/dark themes, conversation management, and secure authentication. Ideal for students and teachers.',
          'projetos.atenaai.feature1': '🤖 AI chat specialized in education',
          'projetos.atenaai.feature2': '🌓 Light/dark theme and modern UI',
          'projetos.atenaai.feature3': '💬 Conversation and interest area management',
          'projetos.atenaai.feature4': '🔒 Security: JWT, bcrypt',
        'education': 'Computational Sciences',
        'interests.ia': 'AI',
        'interests.automacao': 'Automation',
        'interests.dados': 'Data',
        'skills.engprompt': 'Prompt Engineering',
        'skills.iaapi': 'AI API Integration',
        'skills.automacaopy': 'Python Automation',
        'skills.bancodedados': 'Database',
        'skills.analisedados': 'Data Analysis',
        'skills.ia': 'Artificial Intelligence',
      'skills.desenvolvimento': 'Development',
      'skills.python': '• Python (FastAPI, REST APIs)',
      'skills.javascript': '• JavaScript (Interactive frontend)',
      'skills.htmlcss': '• HTML / CSS (Tailwind)',
      'skills.git': '• Git / GitHub',
      'skills.bancodedados': 'Database',
      'skills.sql': '• SQL (PostgreSQL / SQLite)',
      'skills.modelagem': '• Data Modeling',
      'skills.ia': 'Artificial Intelligence',
      'skills.iaapi': '• AI API Integration',
      'skills.prompt': '• Prompt Engineering',
      'skills.criacaoia': '• Building AI applications',
      'skills.automacao': 'Automation',
      'skills.scripts': '• Python Scripts',
      'skills.integracaoapis': '• API Integration',
      'skills.fluxos': '• Workflow Automation',
      'skills.dados': 'Data',
      'skills.pandas': '• Data Analysis (Pandas)',
      'skills.visualizacao': '• Data Visualization',
    'menu.sobre': 'About',
    'menu.skills': 'Skills',
    'menu.projetos': 'Projects',
    'menu.certificacoes': 'Certifications',
    'menu.contato': 'Contact',
    'hero.sobre': '⚡ Junior Full Stack Developer passionate about technology. Focused on Python, APIs, Artificial Intelligence and Automation ⚡',
    'btn.curriculo': 'SEE RESUME',
    'sobre.titulo': 'About Me',
    'btn.conheca': 'GET TO KNOW',
    'sobre.desc': 'I am a Computational Sciences student and Junior Full Stack Developer, focused on web applications, AI integrations, and data analysis. I have hands-on experience with Python, FastAPI, APIs, authentication, and databases. I am looking for my first professional opportunity in technology.',
    'skills.titulo': 'Skills',
    'skills.tecferramentas': 'Technologies & Tools',
    'skills.prompt': 'Prompt Engineering',
    'skills.iaapi': 'AI API Integration',
    'skills.automacao': 'Python Automation',
    'skills.sql': 'SQL / Databases',
    'skills.pandas': 'Data Analysis (Pandas)',
    'projetos.titulo': 'My Projects',
    'projetos.desc': 'Below are some of my main projects developed with modern technologies.',
    'projetos.atenaai.desc': 'AtenaAI is an intelligent educational assistant platform with real-time chat, light/dark themes, conversation management, and secure authentication. Ideal for students and teachers.',
    'projetos.atenaai.features': '🤖 AI chat specialized in education\n🌓 Light/dark theme and modern UI\n💬 Conversation and interest area management\n🔒 Security: JWT, bcrypt',
    'projetos.atenaai.stack': 'Python, FastAPI, AI',
    'certificacoes.titulo': 'Qualifications',
    'certificacoes.desc': 'Certificates and qualifications relevant to my technology career.',
    'contato.titulo': 'Contact Me',
    'contato.email': 'E-mail',
    'contato.telefone': 'Phone',
    'contato.github': 'GitHub',
    'contato.linkedin': 'LinkedIn',
    'footer.texto': '© 2026 <span id="footer-nome">Sávio Emmanuel</span>. Made with 💙 and lots of code. — <a href="index.html" class="text-emerald-600 hover:underline">Portfolio</a>',
    'contato.desc': 'Feel free to contact me by email, phone, or social networks!'
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

// Expor translations globalmente para uso em outros scripts
window.translations = translations;

// Detecta idioma do navegador ao carregar
document.addEventListener('DOMContentLoaded', () => {
  const lang = navigator.language || navigator.userLanguage;
  if (lang && lang.toLowerCase().startsWith('en')) {
    translatePage('en');
    document.documentElement.lang = 'en';
  } else {
    translatePage('pt');
    document.documentElement.lang = 'pt-BR';
  }
});
