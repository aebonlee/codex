import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'codex',
  name: 'Codex CLI Master',
  nameKo: '코덱스 CLI 마스터',
  description: 'OpenAI Codex CLI 완전 정복 - 설치부터 고급 프로젝트까지 체계적으로 학습하세요',
  url: 'https://codex.dreamitbiz.com',
  dbPrefix: 'codex_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: 'Codex', className: 'brand-biz' }
    ]
  },

  themeColor: '#0046C8',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  menuItems: [
    { path: '/about', labelKey: 'nav.about' },
    { path: '/guide', labelKey: 'site.nav.guide' },
    { path: '/mini-projects', labelKey: 'site.nav.projects', activePath: '/mini-projects' },
    { path: '/comparison', labelKey: 'site.nav.comparison' },
  ],

  footerLinks: [
    { path: '/guide', labelKey: 'site.nav.guide' },
    { path: '/mini-projects', labelKey: 'site.nav.mini' },
    { path: '/comparison', labelKey: 'site.nav.comparison' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: '바이브코딩', url: 'https://vibe.dreamitbiz.com' },
    { name: 'AI 에이전트', url: 'https://ai-agents.dreamitbiz.com' },
    { name: 'AI 프롬프트', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'Claude AI', url: 'https://claude.dreamitbiz.com' },
  ]
};

export default site;
