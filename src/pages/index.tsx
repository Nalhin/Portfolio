import { NextPage } from 'next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import 'isomorphic-unfetch';
import TypedTitle from '../components/typedTitle/TypedTitle';
import ContributionShowcase from '../components/contributionShowcase/ContributionShowcase';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { useQuery } from '@apollo/react-hooks';
import { getLatestActivity } from '../lib/graphql/queries/getLastestActivity';
import { githubUserLogin } from '../constants/githubUserLogin';
import { extractCommits } from '../utils/extractCommits';
import CommitHistory from '../components/commitHistory/CommitHistory';
import DownloadCv from '../components/downloadCv/DownloadCv';
import Button from '../components/button/Button';

const StyledPrimaryColorText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.heading};
  ${props => props.theme.mediaQueries.small} {
    font-size: ${props => props.theme.fontSizes.body}px;
  }
`;

const StyledName = styled.span`
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.title * 1.5}px;
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.textPrimary};
  ${props => props.theme.mediaQueries.small} {
    font-size: ${props => props.theme.fontSizes.title}px;
  }
`;

const StyledSubtext = styled.div`
  padding-top: ${props => props.theme.space.giga}px;
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.navigation}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: ${props => props.theme.space.large}px;
`;

const Home: NextPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const { loading, data } = useQuery(getLatestActivity, {
    variables: { githubUserLogin },
  });

  const commits = React.useMemo(() => extractCommits(data), [data]);

  return (
    <div>
      <TypedTitle />
      <StyledSubtext theme={theme}>
        <StyledName>Krzysztof Olipra</StyledName>
        <StyledPrimaryColorText theme={theme}>
          Fullstack Developer
        </StyledPrimaryColorText>
        <DownloadCv
          Component={(props: { onClick: () => void }) => (
            <StyledButton {...props}>{t('common:downloadCv')}</StyledButton>
          )}
        />
      </StyledSubtext>
      <ContributionShowcase />
      <CommitHistory commits={commits} loading={loading} />
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['home']),
  };
};

export default Home;
