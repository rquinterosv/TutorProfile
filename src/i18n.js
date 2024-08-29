import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend';

i18n
  .use(XHR) // Use i18next-http-backend to load translations from files
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'locales/{{lng}}/translation.json' // Path to your translation files
    },
    lng: localStorage.getItem('language') || 'en', // Default to 'en' if no language is stored
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
