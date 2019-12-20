//@ts-nocheck
import { renderWithProviders } from '../../../../tests/utils/renderWithTranslation';
import React from 'react';
import NavLink from '../NavLink';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('NavLink', () => {
  it('Should display text', () => {
    const test = 'test';

    const { getByText } = renderWithProviders(
      <NavLink href={'/'}>{test}</NavLink>,
    );

    expect(getByText(test)).toBeTruthy();
  });
});
