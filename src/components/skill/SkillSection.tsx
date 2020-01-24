import React from 'react';
import TechnologyIcon from '../icon/TechnologyIcon';
import { techStackIcons } from '../../constants/techStackIcons';
import { useTheme } from '@emotion/core';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Card from '../card/Card';
import { CardHeader } from '../card/CardHeader';

const StyledSkillSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-flow: wrap;
  ${props => props.theme.mediaQueries.small} {
    justify-content: flex-start;
  }
`;

const StyledSkillFragment = styled(Card)`
  margin: 16px;
  padding: 0 ${props => props.theme.space.medium}px;

  ${props => props.theme.mediaQueries.small} {
    width: 100%;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledIconSpan = styled.span`
  padding-left: ${props => props.theme.space.medium}px;
`;

const StyledCardHeader = styled(CardHeader)`
  font-size: 20px;
  padding: ${props => props.theme.space.medium}px;
`;

const SkillList = styled.ul`
  width: 100%;
`;

interface Skills {
  title?: string;
  skills: string[];
}

interface Props {
  skillSection: Skills[];
}

const SkillSection: React.FC<Props> = ({ skillSection }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <StyledSkillSection>
      {skillSection.map(technology => (
        <StyledSkillFragment
          theme={theme}
          key={technology.title}
          header={
            t(technology.title) && (
              <StyledCardHeader>{t(technology.title)}</StyledCardHeader>
            )
          }
        >
          <SkillList>
            {technology.skills.map(skill => (
              <StyledListItem key={skill}>
                <TechnologyIcon icon={techStackIcons[skill]} />
                <StyledIconSpan theme={theme}>
                  {techStackIcons[skill].name}
                </StyledIconSpan>
              </StyledListItem>
            ))}
          </SkillList>
        </StyledSkillFragment>
      ))}
    </StyledSkillSection>
  );
};

export default SkillSection;
