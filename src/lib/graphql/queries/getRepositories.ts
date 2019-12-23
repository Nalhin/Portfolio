import gql from 'graphql-tag';

export const getRepositoriesById = gql`
  query getReposById($id: [ID!]!) {
    nodes(ids: $id) {
      ... on Repository {
        name
        homepageUrl
        description
        url
        id
        primaryLanguage {
          name
          color
        }
        repositoryTopics(first: 100) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  }
`;
