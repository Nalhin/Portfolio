import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { getCommitActivity } from '../../lib/graphql/queries/getCommitActivity';
import { githubUserLogin } from '../../constants/githubUserLogin';
import { getDateFromCache } from '../../lib/graphql/queries/getDateFromCache';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import ContributionShowcasePlaceholder from './ContributionShowcasePlaceholder';

const StyledContainer = styled.div`
  margin-top: ${props => props.theme.space.giga}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTable = styled.table`
  table-layout: fixed;
  border-spacing: ${props => props.theme.space.large}px 0;
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
`;

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.navigation}px;
`;

const ContributionShowcase = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const client = useApolloClient();

  const datesData = client.readQuery({
    query: getDateFromCache,
  });

  const { dateNow, dateDayAgo, dateMonthAgo } = datesData.dates;

  const { loading, data } = useQuery(getCommitActivity, {
    variables: { githubUserLogin, dateNow, dateDayAgo, dateMonthAgo },
  });

  if (loading) {
    return (
      <StyledContainer theme={theme}>
        <ContributionShowcasePlaceholder />
      </StyledContainer>
    );
  }

  return (
    <StyledContainer theme={theme}>
      <StyledTitle theme={theme}>{t('home:myActivity')}</StyledTitle>
      <StyledTable theme={theme}>
        <thead>
          <tr>
            <th>{t('home:daily')}</th>
            <th>{t('home:monthly')}</th>
            <th>{t('home:yearly')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.user.day.totalCommitContributions}</td>
            <td>{data.user.month.totalCommitContributions}</td>
            <td>{data.user.year.totalCommitContributions}</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};

export default ContributionShowcase;
