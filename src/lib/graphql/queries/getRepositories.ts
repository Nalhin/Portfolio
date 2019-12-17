import gql from 'graphql-tag';

export const getRepositories = gql`
  query getRepositories {
    user(login: "Nalhin") {
      repositories(
        first: 100
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          homepageUrl
          description
          url
        }
      }
    }
  }
`;

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
