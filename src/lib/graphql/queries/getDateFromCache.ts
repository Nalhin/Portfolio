import gql from 'graphql-tag';

export const getDateFromCache = gql`
  query getDate {
    dates {
      dateNow
      dateDayAgo
      dateMonthAgo
    }
  }
`;
