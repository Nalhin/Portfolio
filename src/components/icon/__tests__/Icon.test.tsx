//@ts-ignore
import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import Icon from '../Icon';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

const props = {
  src: 'src',
};

describe('Icon', () => {
  it('Should display correct alt text', () => {
    const { getByAltText } = renderWithProviders(<Icon {...props} />);

    const icon = getByAltText(props.src);

    expect(icon).toBeTruthy();
  });
});
