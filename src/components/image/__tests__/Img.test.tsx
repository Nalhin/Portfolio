import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import Img from '../Img';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

const props = {
  alt: 'alt',
  src: 'src',
};

describe('Img', () => {
  it('Should display placeholder', () => {
    const { getByTestId } = renderWithProviders(<Img {...props} />);

    const placeholder = getByTestId('image__placeholder');

    expect(placeholder).toBeTruthy();
  });
});
