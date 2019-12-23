import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import trans from '../mocks/i18n';
import { theme } from '../../src/styles/theme';
import { ThemeProvider } from '@emotion/core';

export const renderWithProviders = (ui: JSX.Element) => {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={trans}>{ui}</I18nextProvider>
      </ThemeProvider>,
    ),
    history,
  };
};
