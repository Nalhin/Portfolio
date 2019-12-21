import React from 'react';
import { Commit } from '../../interfaces/Commit';
import styled from '@emotion/styled';
import CommitCard from './CommitCard';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/core';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  padding-top: ${props => props.theme.space.giga}px;
`;

interface Props {
  commits: Commit[];
}

const CommitHistory: React.FC<Props> = ({ commits }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledTitle theme={theme}>{t('home:latestCommits')}</StyledTitle>
      {commits.map(commit => (
        <CommitCard commit={commit} key={commit.committedDate} />
      ))}
    </StyledContainer>
  );
};

export default CommitHistory;
