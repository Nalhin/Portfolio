//@ts-nocheck
import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import NavBar from '../NavBar';
import React from 'react';
import * as nextRouter from 'next/router';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('NavBar', () => {
  it('Should display text', () => {
    const { queryAllByText } = renderWithProviders(<NavBar />);

    expect(queryAllByText('navigation.about')).toBeTruthy();
  });
});
