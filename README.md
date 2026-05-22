# 🚀 Portfólio de Sávio Emmanuel

Portfólio profissional moderno e responsivo desenvolvido com HTML, CSS, JavaScript e Tailwind CSS.

## 📋 Estrutura do Projeto

```
Portifolio/
├── src/
│   ├── components/       # Componentes HTML reutilizáveis
│   ├── styles/          # Arquivos CSS modulares
│   │   └── main.css    # Estilos globais
│   ├── js/              # Arquivo JavaScript
│   │   ├── main.js         # Ponto de entrada
│   │   ├── theme-toggle.js # Alternância de tema (dark/light)
│   │   ├── navigation.js   # Gerenciador de navegação
│   │   ├── menu-mobile.js  # Menu mobile responsivo
│   │   ├── certifications.js # Certificações dinâmicas
│   │   └── config-manager.js # Gerenciador de config
│   └── config/
│       ├── config.js         # Configurações centralizadas
│       └── certifications.js # Dados de certificações
├── assets/
│   ├── images/          # Imagens do portfólio
│   │   └── profile/     # Foto de perfil
│   │   └── atenaai/     # Imagens do projeto AtenaAI
│   │   └── certificacoes/ # Imagens de certificações
│   │   └── logos/       # Logos diversas
│   └── icons/           # Ícones SVG
├── index.html           # Página principal
├── AtenaAI.html         # Página do projeto AtenaAI
├── package.json         # Configuração do projeto
└── README.md            # Este arquivo
```

## 🎯 Recursos

- ✨ Design moderno e responsivo
- 🌙 Modo escuro/claro
- 📱 Mobile-first
- ⚡ Performance otimizada
- ♿ Acessível (A11y)
- 🎨 Tailwind CSS
- 📦 Modular e escalável

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Estilos**: Tailwind CSS (com modo dark)
- **Traduções**: i18n customizado (PT/EN)
- **Fontes**: Space Grotesk, JetBrains Mono
- **Ícones**: SVG inline

## 🚀 Como Usar

### Desenvolvimento Local

```bash
# Clone ou navegue até o diretório
cd Portifolio


# Inicie um servidor local
npm start
# ou
python -m http.server 8000


# Abra no navegador
http://localhost:8000
```

### Com Vite (bundling)

Instale dependências e rode o servidor de desenvolvimento com Vite:

```bash
npm install
npm run dev
```

Para gerar o build otimizado:

```bash
npm run build
npm run preview    # opcional: pré-visualizar o build
```


### Personalização

Edite os arquivos em `src/config/` para atualizar:
- Informações pessoais
- Skills e porcentagens
- Redes sociais
- Cores do tema

## 🌍 Internacionalização (i18n)

O portfólio suporta português e inglês com tradução automática baseado no idioma do navegador.

- **Arquivo de traduções**: `src/js/translate.js`
- **Idiomas suportados**: Português (PT) e Inglês (EN)
- **Implementação**: Atributo `data-i18n` nos elementos HTML

## 📝 Seções

1. **Navegação** - Menu fixo com scroll suave
2. **Hero** - Apresentação principal
3. **Sobre** - Breve descrição
4. **Skills** - Competências com barras de progresso
5. **Projetos** - Portfólio de trabalhos (Monest, AtenaAI, Computer Vision)
6. **Certificações** - Qualificações
7. **Contato** - Informações de contato
8. **Footer** - Rodapé com créditos

## 📦 Scripts npm

- `npm start` — inicia servidor local na porta 8000
- `npm run dev` — inicia servidor local na porta 3000
- `npm run build` — placeholder
- `npm test` — placeholder

## ⚠️ Observações

- O arquivo `assets/curriculo.pdf` não está presente no repositório. Adicione seu currículo para habilitar o botão de download.

## 🎨 Personalização de Cores

As cores são configuráveis via CSS variables em `src/styles/main.css`:

```css
:root {
  --color-primary: #10b981;
  --color-secondary: #059669;
  --color-accent: #14b8a6;
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Acessibilidade

- Semântica HTML5
- ARIA labels
- Contraste de cores adequado
- Suporte a redução de movimento
- Navegação por teclado

## 📄 Licença

MIT License - veja LICENSE para detalhes

## 👨‍💻 Autor

**Sávio Emmanuel**
- GitHub: [@svfaca](https://github.com/svfaca)
- LinkedIn: [savio-emmanuel](https://linkedin.com/in/savio-emmanuel)
- Email: savioemmanuelsc@gmail.com

---

Feito com 💜 e muito código.
