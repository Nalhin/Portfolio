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
  max-width: calc(90% + ${props => props.theme.space.large}px);
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

const StyledCardSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin: ${props => props.theme.space.large}px auto;
  flex-flow: wrap;
`;

const StyledText = styled.span`
  text-align: center;
  display: block;
`;

const StyledSectionWrapper = styled.section`
  width: 100%;
`;

const StyledWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
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
        <StyledCardSection>
          <StyledWrapper>
            <span>{t('about:me')}</span>
            <span>{t('about:currently')}</span>
            <span>{t('about:history')}</span>
          </StyledWrapper>
          {loading ? (
            <GithubAccountPlaceholder />
          ) : (
            <GithubAccount githubUser={data.user} />
          )}
        </StyledCardSection>
      </StyledContainer>
      <StyledSkillContainer>
        <StyledSkillHeader theme={theme}>
          {t('about:skills.technologiesIKnow')}
        </StyledSkillHeader>
        <StyledText>{t('about:skills.iKnowDescription')}</StyledText>
        <StyledSectionWrapper>
          <StyledSkillHeader>Frontend</StyledSkillHeader>
          <SkillSection skillSection={mySkills.frontEnd} />
        </StyledSectionWrapper>
        <StyledSectionWrapper>
          <StyledSkillHeader>Backend</StyledSkillHeader>
          <SkillSection skillSection={mySkills.backEnd} />
        </StyledSectionWrapper>
        <StyledSectionWrapper>
          <StyledSkillHeader>{t('about:skills.other')}</StyledSkillHeader>
          <SkillSection skillSection={mySkills.external} />
        </StyledSectionWrapper>
        <StyledSectionWrapper>
          <StyledSkillHeader>
            {t('about:skills.technologiesImLearning')}
          </StyledSkillHeader>
          <StyledText>{t('about:skills.imLearningDescription')}</StyledText>
          <SkillSection skillSection={mySkills.whatImLearning} />
        </StyledSectionWrapper>
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
