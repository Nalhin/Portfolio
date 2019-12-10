import { renderWithTranslations } from '../../../tests/utils/renderWithTranslation';
import React from 'react';
import Error from '../_error';

describe('Home', () => {
  it('Should display user data', () => {
    const { getByText } = renderWithTranslations(<Error />);

    expect(getByText('errorMessage')).toBeTruthy();
  });
});
