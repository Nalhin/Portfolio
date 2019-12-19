import gql from 'graphql-tag';
import { GithubUser } from '../../../interfaces/GithubUser';

const schema = gql`
  type Query {
    user(login: String): [User]
  }

  type User {
    login: String
    avatarUrl: String
    url: String
    bio: String
    company: String
    email: String
  }
`;

type Response = {
  user: GithubUser;
};
type InputProps = {
  userLogin: string;
};

export const getUser = gql`
  query getUserData($githubUserLogin: String!) {
    user(login: $githubUserLogin) {
      login
      avatarUrl
      url
      bio
      company
      email
    }
  }
`;
