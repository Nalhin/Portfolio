import gql from 'graphql-tag';

export const getUser = gql`
  query {
    user {
      login
      avatarUrl
      bio
      company
      email
    }
  }
`;
