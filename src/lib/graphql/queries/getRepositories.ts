import gql from 'graphql-tag';

const getRepositories = gql`
  query getRepositories {
    user(login: "Nalhin") {
      repositories(
        first: 100
        orderBy: { field: CREATED_AT, direction: ASC }
        privacy: PUBLIC
      ) {
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
