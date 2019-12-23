//@ts-ignore
import { renderWithProviders } from '../../../../tests/utils/renderWithProviders';
import React from 'react';
import GithubAccount from '../GithubAccount';
import { mockGithubUser } from '../../../../tests/fixtures/githubUser';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Footer', () => {
  it('Should display correct icons', () => {
    const { getByText } = renderWithProviders(
      <GithubAccount githubUser={mockGithubUser} />,
    );
    const login = getByText(mockGithubUser.login);
    const bio = getByText(mockGithubUser.bio);
    const email = getByText(mockGithubUser.email);

    expect(login).toBeTruthy();
    expect(bio).toBeTruthy();
    expect(email).toBeTruthy();
  });
});
