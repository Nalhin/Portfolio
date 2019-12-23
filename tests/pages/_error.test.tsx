import { renderWithProviders } from '../utils/renderWithProviders';
import React from 'react';
import Error from '../../src/pages/_error';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Home', () => {
  it('Should display user data', () => {
    const { getByText } = renderWithProviders(<Error />);

    const errorMessage = getByText('errorMessage');

    expect(errorMessage).toBeTruthy();
  });
});
