import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/index.json";
import translationAR from "./locales/ar/index.json";

import { getLanguage } from "./utils/session";

const defaultLang = getLanguage() || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  },

  lng: defaultLang,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
