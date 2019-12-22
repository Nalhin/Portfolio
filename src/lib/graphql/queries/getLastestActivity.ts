import gql from "graphql-tag";

export const getLatestActivity = gql`
  query getLatestActivity($githubUserLogin: String!) {
    user(login: $githubUserLogin) {
      login
      avatarUrl
      url
      bio
      company
      email
      repositories(
        first: 10
        orderBy: { field: PUSHED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        nodes {
          name
          url
          languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
            }
          }
          refs(
            refPrefix: "refs/heads/"
            orderBy: { direction: DESC, field: TAG_COMMIT_DATE }
            first: 100
          ) {
            edges {
              node {
                ... on Ref {
                  target {
                    ... on Commit {
                      history(first: 15) {
                        edges {
                          node {
                            ... on Commit {
                              committedDate
                              message
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
