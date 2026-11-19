import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const SUPPORTED = ['en', 'es'];
const STORAGE_KEY = 'language';

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

// ?lang=es lets a shared link (e.g. /music?lang=es from Instagram) open in Spanish.
const fromQuery = new URLSearchParams(window.location.search).get('lang');
const initial = [fromQuery, readStored()].find((l) => SUPPORTED.includes(l)) || 'en';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      // Absolute path so nested routes (/music, /contact?topic=...) resolve correctly.
      loadPath: '/locales/{{lng}}/translation.json',
    },
    lng: initial,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // Storage unavailable (private mode); the choice just won't persist.
  }
  document.documentElement.lang = lng;
});

export default i18n;
