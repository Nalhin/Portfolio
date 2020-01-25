import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { getUser } from '../lib/graphql/queries/getUser';
import { githubUserLogin } from '../constants/githubUserLogin';
import GithubAccount from '../components/githubAccount/GithubAccount';
import styled from '@emotion/styled';
import { mySkills } from '../constants/mySkills';
import SkillSection from '../components/skill/SkillSection';
import { useTheme } from '@emotion/core';
import GithubAccountPlaceholder from '../components/githubAccount/GithubAccountPlaceholder';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

const StyledSkillContainer = styled.div`
  margin-top: ${props => props.theme.space.large}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledSkillHeader = styled.h2`
  margin-top: ${props => props.theme.space.large}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.navigation}px;
  font-weight: ${props => props.theme.fontWeights.heading};
`;

const StyledAboutSection = styled.section`
  margin-top: ${props => props.theme.space.large}px;
  background: ${props => props.theme.colors.gradient};
  padding: ${props => props.theme.space.large}px;
  border-radius: 30px;
  color: #fff;
`;

const StyledWrapper = styled.div`
  max-width: 400px;
  margin: 0 ${props => props.theme.space.large * 1.5}px 0 auto;
  ${props => props.theme.mediaQueries.medium} {
    margin: 0 0 ${props => props.theme.space.large}px;
  }
  text-align: justify;
`;

const StyledSection = styled.section`
  width: 100%;
`;
const StyledAboutTitle = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.title}px;
  font-weight: ${props => props.theme.fontWeights.heading};
  padding-bottom: ${props => props.theme.space.medium}px;
`;

const StyledAboutWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-flow: wrap;
`;

const About = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { loading, data } = useQuery(getUser, {
    variables: { githubUserLogin },
  });

  return (
    <div>
      <StyledContainer theme={theme}>
        <StyledAboutSection>
          <StyledAboutTitle>{t('about:aboutMe')} </StyledAboutTitle>
          <StyledAboutWrapper>
            <StyledWrapper>
              {t('about:me')}
              {t('about:currently')}
              {t('about:history')}
            </StyledWrapper>
            {loading ? (
              <GithubAccountPlaceholder />
            ) : (
              <GithubAccount githubUser={data.user} />
            )}
          </StyledAboutWrapper>
        </StyledAboutSection>
      </StyledContainer>
      <StyledSkillContainer>
        <StyledSection>
          <StyledSkillHeader>Frontend</StyledSkillHeader>
          <SkillSection skillSection={mySkills.frontEnd} />
        </StyledSection>
        <StyledSection>
          <StyledSkillHeader>Backend</StyledSkillHeader>
          <SkillSection skillSection={mySkills.backEnd} />
        </StyledSection>
        <StyledSection>
          <StyledSkillHeader>{t('about:skills.other')}</StyledSkillHeader>
          <SkillSection skillSection={mySkills.external} />
        </StyledSection>
        <StyledSection>
          <SkillSection skillSection={mySkills.whatImLearning} />
        </StyledSection>
      </StyledSkillContainer>
    </div>
  );
};

About.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['about']),
  };
};

export default About;
