//@ts-nocheck
import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import Layout from '../layout';
import * as nextRouter from 'next/router';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('Layout', () => {
  it('Should display placeholder', () => {
    const { getByTestId } = renderWithProviders(<Layout />);

    const navigation = getByTestId('navigation');
    const footer = getByTestId('footer');

    expect(navigation).toBeTruthy();
    expect(footer).toBeTruthy();
  });
});
