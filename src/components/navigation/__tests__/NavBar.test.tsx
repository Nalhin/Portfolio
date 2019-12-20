//@ts-nocheck
import { renderWithProviders } from '../../../../tests/utils/renderWithTranslation';
import NavBar from '../NavBar';
import React from 'react';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('NavBar', () => {
  it('Should display text', () => {
    const { queryAllByText } = renderWithProviders(<NavBar />);

    expect(queryAllByText('navigation.about')).toBeTruthy();
  });
});
