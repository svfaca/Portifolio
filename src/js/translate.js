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
    'hero.hello': 'OLÁ',
    'hero.name': 'Sou Sávio Emmanuel',
    'hero.profession': 'Desenvolvedor de IA Aplicada | Sistemas com LLMs e Automação',
    'hero.downloadcv': 'BAIXAR CV',
    'btn.curriculo': 'VER CURRÍCULO',
    'hero.sobre': 'Desenvolvo soluções com Inteligência Artificial, integrando modelos de linguagem (LLMs), automação de fluxos e sistemas inteligentes para resolver problemas reais. Experiência em engenharia de prompts, avaliação de respostas de IA e desenvolvimento fullstack.',
    'hero.disponivel': 'Buscando oportunidades para atuar com IA aplicada, avaliação de modelos e desenvolvimento de sistemas com LLMs.',
    'sobre.titulo': 'Sobre Mim',
    'btn.conheca': 'CONHEÇA',
    'sobre.desc': 'Desenvolvedor com foco em IA aplicada, atuando na construção de soluções com modelos de linguagem (LLMs), automação de processos e sistemas inteligentes. Experiência prática com engenharia de prompts, integração de APIs de IA e desenvolvimento fullstack.',
    'sobre.desc2': 'Atualmente trabalho com criação e otimização de sistemas baseados em IA, avaliando qualidade de respostas e construindo fluxos conversacionais orientados a objetivos. Graduando em Ciências Computacionais, com base sólida em algoritmos, estruturas de dados e arquitetura de software.',
    'skills.titulo': 'Stack Técnica',
    'skills.iadados': 'IA & Automação',
    'skills.ai.title': 'IA & Automação',
    'skills.backend.title': 'Back-End',
    'skills.fullstack.title': 'Fullstack',
    'skills.llmapis': 'Integração com LLM APIs',
    'skills.engprompt': 'Engenharia de Prompt',
    'skills.ai.eval': 'Avaliação de respostas de IA',
    'skills.frontend': 'Front-End Complementar',
    'projetos.titulo': 'Experiências & Projetos',
    'projetos.desc': 'Veja abaixo algumas das minhas principais experiências e projetos com foco em IA aplicada e desenvolvimento de sistemas inteligentes.',
    'projetos.monest.title': 'Prompt Engineer — Monest',
    'projetos.monest.periodo': '02/26 - Atual (Profissional)',
    'projetos.monest.desc': 'Desenvolvimento de soluções baseadas em Inteligência Artificial para o mercado, com foco na criação, manutenção e otimização de prompts para sistemas com LLMs. Atuação direta na avaliação da qualidade das respostas e melhoria contínua de fluxos conversacionais.',
    'projetos.monest.feature1': 'Avaliação de respostas de modelos de linguagem',
    'projetos.monest.feature2': 'Criação e otimização de prompts',
    'projetos.monest.feature3': 'Identificação de falhas e inconsistências',
    'projetos.monest.feature4': 'LangChain e LangSmith para testes',
    'projetos.atenaai.title': 'AtenaAI',
    'projetos.status': 'Em desenvolvimento',
    'projetos.atenaai.desc': 'Plataforma de assistente educacional com IA, utilizando modelos de linguagem (LLMs) para geração de respostas inteligentes e contextualizadas em interações com usuários. O sistema inclui controle de comportamento, avaliação da qualidade das respostas e arquitetura fullstack integrada com APIs de IA.',
    'projetos.atenaai.feature1': 'Geração de respostas com LLM',
    'projetos.atenaai.feature2': 'Controle de comportamento e contexto',
    'projetos.atenaai.feature3': 'Avaliação da qualidade das respostas',
    'projetos.atenaai.feature4': 'Ajustes iterativos para melhoria de desempenho',
    'projetos.atenaai.features': 'Geração de respostas com LLM\nControle de comportamento e contexto\nAvaliação da qualidade das respostas\nAjustes iterativos para melhoria de desempenho',
    'projetos.atenaai.stack': 'Python, FastAPI, APIs de IA',
    'projetos.vision.title': 'Visão Computacional Aplicada ao Varejo',
    'projetos.vision.desc': 'Sistema de visão computacional para análise de eventos em vídeo, aplicado a cenários de varejo, com foco na identificação de padrões de comportamento e apoio a decisões operacionais. O projeto envolve processamento de imagens, detecção de eventos e otimização contínua da precisão do modelo.',
    'projetos.vision.feature1': 'Análise de eventos em vídeo',
    'projetos.vision.feature2': 'Detecção de padrões de comportamento',
    'projetos.vision.feature3': 'Aplicação em cenário de varejo',
    'projetos.vision.feature4': 'Otimização contínua da precisão do modelo',
    'certificacoes.titulo': 'Qualificações',
    'certificacoes.desc': 'Certificados e qualificações relevantes para minha carreira em tecnologia.',
    'contato.titulo': 'Entre em Contato',
    'contato.email': 'E-mail',
    'contato.telefone': 'Telefone',
    'contato.whatsapp': 'WhatsApp',
    'contato.github': 'GitHub',
    'contato.linkedin': 'LinkedIn',
    'footer.texto': '© 2026 <span id="footer-nome">Sávio Emmanuel</span>. Feito com 💙 e muito código. — <a href="index.html" class="text-emerald-600 hover:underline">Portfólio</a>',
    'contato.desc': 'Fique à vontade para me chamar por e-mail, telefone ou redes sociais!',
    'contato.cta': 'Vamos conversar sobre seu projeto ou oportunidade?'
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
    'education': 'Computational Sciences',
    'interests.ia': 'AI',
    'interests.automacao': 'Automation',
    'interests.dados': 'Data',
    'menu.sobre': 'About',
    'menu.skills': 'Skills',
    'menu.projetos': 'Projects',
    'menu.certificacoes': 'Certifications',
    'menu.contato': 'Contact',
    'hero.hello': 'HELLO',
    'hero.name': 'I\'m Sávio Emmanuel',
    'hero.profession': 'Applied AI Developer | LLM and Automation Systems',
    'hero.downloadcv': 'DOWNLOAD CV',
    'btn.curriculo': 'SEE RESUME',
    'hero.sobre': 'I build AI-powered solutions by integrating language models (LLMs), workflow automation, and intelligent systems to solve real problems. Hands-on experience with prompt engineering, AI response evaluation, and fullstack development.',
    'hero.disponivel': 'Available for internships, full-time positions, and freelance projects.',
    'sobre.titulo': 'About Me',
    'btn.conheca': 'GET TO KNOW',
    'sobre.desc': 'Developer focused on applied AI, building solutions with language models (LLMs), process automation, and intelligent systems. Practical experience in prompt engineering, AI API integration, and fullstack development.',
    'sobre.desc2': 'I currently work on designing and optimizing AI-based systems, evaluating response quality and building goal-oriented conversational flows. Undergraduate in Computational Sciences with a solid foundation in algorithms, data structures, and software architecture.',
    'skills.titulo': 'Tech Stack',
    'skills.iadados': 'AI & Automation',
    'skills.ai.title': 'AI & Automation',
    'skills.backend.title': 'Back-End',
    'skills.fullstack.title': 'Fullstack',
    'skills.llmapis': 'LLM API Integration',
    'skills.engprompt': 'Prompt Engineering',
    'skills.ai.eval': 'AI response evaluation',
    'skills.frontend': 'Complementary Front-End',
    'projetos.titulo': 'Experiences & Projects',
    'projetos.desc': 'Below are some of my main experiences and projects focused on applied AI and intelligent system development.',
    'projetos.monest.title': 'Prompt Engineer — Monest',
    'projetos.monest.periodo': '02/26 - Current (Professional)',
    'projetos.monest.desc': 'Development of AI-powered solutions for the market, focused on creating, maintaining, and optimizing prompts for LLM systems. Responsible for evaluating response quality, identifying inconsistencies, and continuously improving conversational flows.',
    'projetos.monest.feature1': 'Language model response evaluation',
    'projetos.monest.feature2': 'Prompt creation and optimization',
    'projetos.monest.feature3': 'Failure and inconsistency identification',
    'projetos.monest.feature4': 'LangChain and LangSmith for testing',
    'projetos.atenaai.title': 'AtenaAI',
    'projetos.status': 'Under development',
    'projetos.atenaai.desc': 'Educational assistant platform powered by AI, using language models (LLMs) to generate intelligent and contextual responses in user interactions. The system includes behavior control, response quality evaluation, and a fullstack architecture integrated with AI APIs.',
    'projetos.atenaai.feature1': 'LLM-based response generation',
    'projetos.atenaai.feature2': 'Behavior and context control',
    'projetos.atenaai.feature3': 'AI response quality evaluation',
    'projetos.atenaai.feature4': 'Iterative adjustments for performance improvement',
    'projetos.atenaai.features': 'LLM-based response generation\nBehavior and context control\nAI response quality evaluation\nIterative adjustments for performance improvement',
    'projetos.atenaai.stack': 'Python, FastAPI, AI APIs',
    'projetos.vision.title': 'Computer Vision Applied to Retail',
    'projetos.vision.desc': 'Computer vision system for video event analysis, applied to retail scenarios and focused on behavior pattern identification and support for operational decisions. The project involves image processing, event detection, and continuous optimization of model accuracy.',
    'projetos.vision.feature1': 'Video event analysis',
    'projetos.vision.feature2': 'Behavior pattern detection',
    'projetos.vision.feature3': 'Application in retail scenario',
    'projetos.vision.feature4': 'Continuous model precision optimization',
    'certificacoes.titulo': 'Qualifications',
    'certificacoes.desc': 'Certificates and qualifications relevant to my technology career.',
    'contato.titulo': 'Contact Me',
    'contato.email': 'E-mail',
    'contato.telefone': 'Phone',
    'contato.whatsapp': 'WhatsApp',
    'contato.github': 'GitHub',
    'contato.linkedin': 'LinkedIn',
    'footer.texto': '© 2026 <span id="footer-nome">Sávio Emmanuel</span>. Made with 💙 and lots of code. — <a href="index.html" class="text-emerald-600 hover:underline">Portfolio</a>',
    'contato.desc': 'Feel free to contact me by email, phone, or social networks!',
    'contato.cta': 'Let\'s talk about your project or opportunity?'
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

// Função para aplicar tradução e mostrar página
function initTranslation() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang && lang.toLowerCase().startsWith('en')) {
    translatePage('en');
    document.documentElement.lang = 'en';
  } else {
    translatePage('pt');
    document.documentElement.lang = 'pt-BR';
  }
  // Mostra a página após tradução ser aplicada
  document.documentElement.style.visibility = 'visible';
  document.documentElement.style.opacity = '1';
}

// Executa imediatamente se DOM já está pronto, caso contrário aguarda
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslation);
} else {
  // DOM já está pronto, aplica tradução imediatamente
  initTranslation();
}
