export const mockGithubUser = {
  login: 'login',
  avatarUrl: 'avatar',
  url: 'url',
  bio: 'bio',
  company: 'company',
  email: 'email',
};

export const mockGithubUserWithTypename = {
  ...mockGithubUser,
  __typename: 'User',
};
