import { NextPage } from 'next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import 'isomorphic-unfetch';
import TypedTitle from '../components/typedTitle/TypedTitle';
import ContributionShowcase from '../components/contributionShowcase/contributionShowcase';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

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
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['home']),
  };
};

export default Home;
