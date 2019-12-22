import NextI18Next from 'next-i18next';
import { languages } from '../../constants/languages';

export const NextI18NextInstance = new NextI18Next({
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  fallbackLng: languages.english,
  defaultLanguage: languages.english,
  otherLanguages: [languages.polish],
});

export const {
  appWithTranslation,
  withTranslation,
  i18n,
} = NextI18NextInstance;
