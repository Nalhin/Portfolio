import React from 'react';
import { Commit } from '../../interfaces/Commit';
import styled from '@emotion/styled';
import CommitCard from './CommitCard';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/core';
import CommitCardPlaceholder from './CommitCardPlaceholder';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  padding-top: ${props => props.theme.space.giga}px;
  font-size: ${props => props.theme.fontSizes.navigation}px;
`;

interface Props {
  commits: Commit[];
  loading: boolean;
}

const CommitHistory: React.FC<Props> = ({ commits, loading }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledTitle theme={theme}>{t('home:latestCommits')}</StyledTitle>
      {loading ? (
        <LoadingPlaceholder />
      ) : (
        commits.map(commit => <CommitCard commit={commit} key={commit.id} />)
      )}
    </StyledContainer>
  );
};

const LoadingPlaceholder = () => {
  return (
    <>
      <CommitCardPlaceholder />
      <CommitCardPlaceholder />
      <CommitCardPlaceholder />
      <CommitCardPlaceholder />
      <CommitCardPlaceholder />
    </>
  );
};

export default CommitHistory;
