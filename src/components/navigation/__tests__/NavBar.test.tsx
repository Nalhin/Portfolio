//@ts-nocheck
import { renderWithTranslations } from '../../../../tests/utils/renderWithTranslation';
import NavBar from '../NavBar';
import React from 'react';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('NavBar', () => {
  it('Should display text', () => {
    const { getByText } = renderWithTranslations(<NavBar />);

    expect(getByText('navigation.about')).toBeTruthy();
  });
});
