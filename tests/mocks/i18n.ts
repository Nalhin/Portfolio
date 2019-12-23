import i18n from 'i18next';
import NextI18Next from 'next-i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from '../../src/constants/languages';

const NextI18NextInstance = new NextI18Next({
  localePath: 'public/locales',
  defaultLanguage: languages.english,
  otherLanguages: [languages.polish],
  fallbackLng: languages.english,
});

NextI18NextInstance.i18n.use(initReactI18next).init({
  lng: languages.english,
});

i18n.init({
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
