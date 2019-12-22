import React from 'react';
import { Commit } from '../../interfaces/Commit';
import { StyledCard } from '../card/StyledCart';
import { techStackIcons } from '../../constants/techStackIcons';
import TechnologyIcon from '../icon/TechnologyIcon';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { convertDate } from '../../utils/convertDate';

const StyledLanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCommitCard = styled(StyledCard)`
  margin: ${props => props.theme.space.medium}px;
  width: 300px;
  text-align: center;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.textPrimary};
`;

const StyledDate = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  align-self: flex-end;
  font-size: ${props => props.theme.fontSizes.footer}px;
  padding-top: ${props => props.theme.space.small}px;
`;

interface Props {
  commit: Commit;
}

const CommitCard: React.FC<Props> = React.memo(({ commit }) => {
  const theme = useTheme();
  return (
    <StyledCommitCard>
      <StyledA
        href={commit.repositoryUrl}
        target="_blank"
        rel="noopener"
        theme={theme}
      >
        {commit.repositoryName}
      </StyledA>
      <StyledLanguagesContainer>
        {commit.languages.map(
          language =>
            techStackIcons[language] && (
              <TechnologyIcon icon={techStackIcons[language]} key={language} />
            ),
        )}
      </StyledLanguagesContainer>
      <StyledA href={commit.url} target="_blank" rel="noopener" theme={theme}>
        {commit.message}
      </StyledA>
      <StyledDate theme={theme}>{convertDate(commit.committedDate)}</StyledDate>
    </StyledCommitCard>
  );
});

export default CommitCard;
