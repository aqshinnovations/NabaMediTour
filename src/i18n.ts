import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import translationEN from "./locales/en/translation.json";
import translationEN from "./locales/en";   // 👉 index.js inside /en merges all files

import translationAR from "./locales/ar/";
import { getLanguage } from "./utils/session";

const defaultLang = getLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ar: { translation: translationAR },
  },
  lng: defaultLang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
