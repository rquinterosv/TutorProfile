// Single source of truth for public routes. Used by the app (PageSEO), the
// build-time HTML generator (vite.config.js) and kept in sync with public/sitemap.xml.
// Titles/descriptions live in public/locales/<lng>/translation.json under "seo.<key>".
export const SITE_URL = 'https://rafaquinterosv.com';

export const routes = [
  { path: '/', seoKey: 'home' },
  { path: '/experience', seoKey: 'experience' },
  { path: '/services', seoKey: 'services' },
  { path: '/about', seoKey: 'about' },
  { path: '/music', seoKey: 'music' },
  { path: '/contact', seoKey: 'contact' },
];
