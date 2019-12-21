import { NextPage } from 'next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import 'isomorphic-unfetch';
import TypedTitle from '../components/typedTitle/TypedTitle';
import ContributionShowcase from '../components/contributionShowcase/contributionShowcase';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { useQuery } from '@apollo/react-hooks';
import { getLatestActivity } from '../lib/graphql/queries/getLastestActivity';
import { githubUserLogin } from '../constants/githubUserLogin';
import { extractCommits } from '../utils/extractCommits';
import CommitHistory from '../components/commitHistory/CommitHistory';

const StyledPrimaryColorText = styled.span`
  color: ${props => props.theme.colors.secondary};
`;

const StyledSubtext = styled.div`
  padding-top: ${props => props.theme.space.giga}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.navigation}px;
  color: ${props => props.theme.colors.textSecondary};
`;

const Home: NextPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { data } = useQuery(getLatestActivity, {
    variables: { githubUserLogin },
  });

  const commits = React.useMemo(() => extractCommits(data), [data]);
  return (
    <div>
      <TypedTitle />
      <StyledSubtext theme={theme}>
        {t('home:iam')}
        <br />
        <StyledPrimaryColorText theme={theme}>
          Krzysztof Olipra
        </StyledPrimaryColorText>
        <br />
        Full Stack Developer
      </StyledSubtext>
      <ContributionShowcase />
      <CommitHistory commits={commits} />
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['home']),
  };
};

export default Home;
