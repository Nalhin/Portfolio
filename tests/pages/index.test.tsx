import React from 'react';
import Home from '../../src/pages';
import { renderWithProviders } from '../utils/renderWithTranslation';
import { mockGithubUser } from '../fixtures/githubUser';

describe('Home', () => {
  it('Should display user data', () => {
    const { getByText } = renderWithProviders(<Home />);

    expect(getByText(mockGithubUser.name)).toBeTruthy();
  });

  it('Should fetch user data', async () => {
    fetchMock.mockResponse(JSON.stringify({ githubUser: mockGithubUser }));

    // @ts-ignore
    await Home.getInitialProps();

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
