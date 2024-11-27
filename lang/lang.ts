import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./fr_FR/fr.json";
import en from "./en_US/en.json";
import { getLocales } from "expo-localization";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

const locale = getLocales();

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: locale[0].languageCode!,
    lng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: "fr",
    debug: true,
  });

export default i18n;
