import { format, register } from 'timeago.js';
import { timeagoLocalePolish } from '../lib/i18n/timeagoLocale';
import { languages } from '../constants/languages';

register(languages.polish, timeagoLocalePolish);

export const convertDate = (date: string, language = ''): string => {
  return format(date, language);
};
