const SITE_ORIGIN = 'https://savioemmanuel.com.br';

const PAGE_ROUTES = {
  portfolio: {
    pt: '/',
    en: '/en/'
  },
  atenaai: {
    pt: '/AtenaAI/',
    en: '/en/AtenaAI/'
  }
};

function getPageKey() {
  const bodyPage = document.body?.dataset.page;
  if (bodyPage === 'atenaai') {
    return 'atenaai';
  }

  return document.documentElement.dataset.page === 'atenaai' ? 'atenaai' : 'portfolio';
}

function getLanguageFromPath(defaultLang = 'pt') {
  const path = window.location.pathname.toLowerCase();
  if (path === '/en' || path.startsWith('/en/')) {
    return 'en';
  }

  return defaultLang;
}

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function applyLocalizedSeo({ pageKey, lang, seo }) {
  const routes = PAGE_ROUTES[pageKey] || PAGE_ROUTES.portfolio;
  const currentPath = routes[lang] || routes.pt;

  document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';

  if (seo?.title) {
    document.title = seo.title;
  }

  if (seo?.description) {
    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description
    });
  }

  if (seo?.ogTitle || seo?.title) {
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.ogTitle || seo.title
    });
  }

  if (seo?.ogDescription || seo?.description) {
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.ogDescription || seo.description
    });
  }

  if (seo?.twitterTitle || seo?.title) {
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.twitterTitle || seo.title
    });
  }

  if (seo?.twitterDescription || seo?.description) {
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.twitterDescription || seo.description
    });
  }

  ensureMeta('meta[property="og:locale"]', {
    property: 'og:locale',
    content: seo?.ogLocale || (lang === 'en' ? 'en_US' : 'pt_BR')
  });

  ensureMeta('meta[property="og:locale:alternate"]', {
    property: 'og:locale:alternate',
    content: lang === 'en' ? 'pt_BR' : 'en_US'
  });

  ensureMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: `${SITE_ORIGIN}${currentPath}`
  });

  ensureLink('link[rel="canonical"]', {
    rel: 'canonical',
    href: `${SITE_ORIGIN}${currentPath}`
  });

  ensureLink('link[rel="alternate"][hreflang="pt-BR"]', {
    rel: 'alternate',
    hreflang: 'pt-BR',
    href: `${SITE_ORIGIN}${routes.pt}`
  });

  ensureLink('link[rel="alternate"][hreflang="en"]', {
    rel: 'alternate',
    hreflang: 'en',
    href: `${SITE_ORIGIN}${routes.en}`
  });

  ensureLink('link[rel="alternate"][hreflang="x-default"]', {
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${SITE_ORIGIN}${routes.pt}`
  });
}

export { SITE_ORIGIN, PAGE_ROUTES, applyLocalizedSeo, getLanguageFromPath, getPageKey };
