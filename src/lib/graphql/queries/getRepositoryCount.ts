import gql from 'graphql-tag';

export const getRepositoryCount = gql`
  query getRepositoryCount {
    viewer {
      repositories {
        totalCount
      }
    }
  }
`;
