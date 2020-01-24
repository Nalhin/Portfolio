import React from 'react';
import { Commit } from '../../interfaces/Commit';
import { techStackIcons } from '../../constants/techStackIcons';
import TechnologyIcon from '../icon/TechnologyIcon';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { convertDate } from '../../utils/convertDate';
import { useTranslation } from 'react-i18next';
import Card from '../card/Card';
import { CardHeader } from '../card/CardHeader';

const StyledLanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCommitCard = styled(Card)`
  margin: ${props => props.theme.space.medium}px;
  width: 300px;
  text-align: center;
`;

const StyledCardHeader = styled(CardHeader)`
  padding: ${props => props.theme.space.small}px 0;
  font-size: 20px;
`;

const StyledHeader = styled.a`
  text-decoration: none;
  color: #fff;
  overflow-wrap: break-word;
`;

const StyledA = styled.a`
  text-decoration: none;
  overflow-wrap: break-word;
  width: 100%;
  color: #000;
`;

const StyledDate = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  align-self: flex-end;
  font-size: ${props => props.theme.fontSizes.footer}px;
  padding: 0 ${props => props.theme.space.small}px;
`;

interface Props {
  commit: Commit;
}

const CommitCard: React.FC<Props> = React.memo(({ commit }) => {
  const theme = useTheme();
  const { i18n } = useTranslation();

  return (
    <StyledCommitCard
      header={
        <StyledCardHeader>
          <StyledHeader
            href={commit.repositoryUrl}
            target="_blank"
            rel="noopener"
            theme={theme}
          >
            {commit.repositoryName}
          </StyledHeader>
        </StyledCardHeader>
      }
    >
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
      <StyledDate theme={theme}>
        {convertDate(commit.committedDate, i18n.language)}
      </StyledDate>
    </StyledCommitCard>
  );
});

export default CommitCard;
