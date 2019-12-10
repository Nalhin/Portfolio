import React from 'react';
import Home from '../index';
import { renderWithTranslations } from '../../../tests/utils/renderWithTranslation';
import { mockGithubUser } from '../../../tests/fixtures/githubUser';

describe('Home', () => {
  it('Should display user data', () => {
    const { getByText } = renderWithTranslations(
      <Home githubUser={mockGithubUser} />,
    );

    expect(getByText(mockGithubUser.name)).toBeTruthy();
  });

  it('Should fetch user data', async () => {
    fetchMock.mockResponse(JSON.stringify({ githubUser: mockGithubUser }));

    // @ts-ignore
    await Home.getInitialProps();

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
