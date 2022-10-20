import translationRu from "../../assets/locales/Ru/translation.json";
import translationUz from "../../assets/locales/Uz/translation.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    keySeparator: "|",
    resources: {
      Uz: {
        translation: translationUz,
      },
      Ru: {
        translation: translationRu,
      },
    },
    fallbackLng: ["Uz"],
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
