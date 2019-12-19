import gql from 'graphql-tag';

export const getDateFromCache = gql`
  query getData {
    dates {
      dateNow
      dateDayAgo
      dateMonthAgo
    }
  }
`;
