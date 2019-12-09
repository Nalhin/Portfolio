import NextI18Next from 'next-i18next';
import { NextComponentType, NextPageContext } from 'next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pl'],
});

export const {
  appWithTranslation,
  withTranslation,
  i18n,
} = NextI18NextInstance;
