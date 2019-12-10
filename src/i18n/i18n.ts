import NextI18Next from 'next-i18next';

export const NextI18NextInstance = new NextI18Next({
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  fallbackLng: 'en',
  defaultLanguage: 'en',
  keySeparator: false,
  otherLanguages: ['pl'],
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;
