import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../utils/renderWithProviders';
import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import { getUser } from '../../src/lib/graphql/queries/getUser';
import { githubUserLogin } from '../../src/constants/githubUserLogin';
import {
  mockGithubUser,
  mockGithubUserWithTypename,
} from '../fixtures/githubUser';
import About from '../../src/pages/about';

const mocks = [
  {
    request: {
      query: getUser,
      variables: {
        githubUserLogin,
      },
    },
    result: {
      data: { user: mockGithubUserWithTypename },
    },
  },
];

afterEach(cleanup);

describe('Projects page', () => {
  it('Should display loading placeholder', async () => {
    const { getByTestId } = renderWithProviders(
      <MockedProvider mocks={mocks}>
        <About />
      </MockedProvider>,
    );

    const placeholder = getByTestId('github-account__placeholder');

    expect(placeholder).toBeTruthy();
  });

  it('Should display github user data', async () => {
    const { findByText } = renderWithProviders(
      <MockedProvider mocks={mocks}>
        <About />
      </MockedProvider>,
    );

    const login = await findByText(mockGithubUser.login);

    expect(login).toBeTruthy();
  });
});
