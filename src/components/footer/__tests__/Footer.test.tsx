import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import Footer from '../Footer';
import React from 'react';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Footer', () => {
  it('Should display correct icons', () => {
    const { getByAltText } = renderWithProviders(<Footer />);

    const github = getByAltText('Github');
    const youtube = getByAltText('Youtube');
    const twitter = getByAltText('Twitter');

    expect(github).toBeTruthy();
    expect(youtube).toBeTruthy();
    expect(twitter).toBeTruthy();
  });
});
