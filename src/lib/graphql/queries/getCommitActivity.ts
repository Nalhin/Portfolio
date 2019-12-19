import gql from 'graphql-tag';

export const getCommitActivity = gql`
  query getCommitActivity(
    $githubUserLogin: String!
    $dateNow: DateTime
    $dateDayAgo: DateTime
    $dateMonthAgo: DateTime
  ) {
    user(login: $githubUserLogin) {
      day: contributionsCollection(from: $dateDayAgo, to: $dateNow) {
        totalCommitContributions
      }
      month: contributionsCollection(from: $dateMonthAgo, to: $dateNow) {
        totalCommitContributions
      }
      year: contributionsCollection {
        totalCommitContributions
      }
    }
  }
`;

const xd =
  'My goal is to display a list of 10 most recent commits with associated repo';
