import { renderWithTranslations } from '../utils/renderWithTranslation';
import React from 'react';
import Error from '../../src/pages/_error';

describe('Home', () => {
  it('Should display user data', () => {
    const { getByText } = renderWithTranslations(<Error />);

    expect(getByText('errorMessage')).toBeTruthy();
  });
});
