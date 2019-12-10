import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { render } from '@testing-library/react';
import trans from '../mocks/i18n';

export const renderWithTranslations = (ui: JSX.Element) => {
  return {
    ...render(<I18nextProvider i18n={trans}>{ui}</I18nextProvider>),
    history,
  };
};
