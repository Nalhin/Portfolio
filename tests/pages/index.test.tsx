import { renderWithProviders } from '../utils/renderWithProviders';
import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import Home from '../../src/pages';
import { githubUserLogin } from '../../src/constants/githubUserLogin';
import { getLatestActivity } from '../../src/lib/graphql/queries/getLastestActivity';
import { getCommitActivity } from '../../src/lib/graphql/queries/getCommitActivity';
import { getDates } from '../../src/lib/apollo/withApolloClient';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { cleanup } from '@testing-library/react';

const dates = getDates();

const { dateNow, dateDayAgo, dateMonthAgo } = dates;

const totalCommitContributions = 5;

const mocks = [
  {
    request: {
      query: getCommitActivity,
      variables: { githubUserLogin, dateNow, dateDayAgo, dateMonthAgo },
    },
    result: {
      data: {
        user: {
          day: {
            totalCommitContributions,
            __typename: 'ContributionsCollection',
          },
          month: {
            totalCommitContributions: 65,
            __typename: 'ContributionsCollection',
          },
          year: {
            totalCommitContributions: 496,
            __typename: 'ContributionsCollection',
          },
          __typename: 'User',
        },
      },
    },
  },
  {
    request: {
      query: getLatestActivity,
      variables: {
        githubUserLogin,
      },
    },
    result: {
      // @ts-ignore
      data: undefined,
    },
  },
];
const cache = new InMemoryCache();
cache.writeData({ data: { dates } });

afterEach(cleanup);

describe('Home Page', () => {
  it('Should display loading placeholder', () => {
    const { getByTestId } = renderWithProviders(
      <MockedProvider mocks={mocks} cache={cache}>
        <Home />
      </MockedProvider>,
    );

    const placeholder = getByTestId('contribution-showcase__placeholder');

    expect(placeholder).toBeTruthy();
  });

  it('Should display correct data', async () => {
    const cache = new InMemoryCache();
    cache.writeData({ data: { dates } });
    const { findByText } = renderWithProviders(
      <MockedProvider mocks={mocks} cache={cache}>
        <Home />
      </MockedProvider>,
    );

    const commitCount = await findByText(`${totalCommitContributions}`);

    expect(commitCount).toBeTruthy();
  });
});
