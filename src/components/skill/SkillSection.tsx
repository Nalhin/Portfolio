import React from "react";
import TechnologyIcon from "../icon/TechnologyIcon";
import { techStackIcons } from "../../constants/techStackIcons";
import { useTheme } from "@emotion/core";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const StyledSkillSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-flow: wrap;
  ${props => props.theme.mediaQueries.small} {
    justify-content: flex-start;
  }
`;

const StyledSkillFragment = styled.div`
  padding: 16px;
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

const StyledHeader = styled.h3`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.body}px;
  font-weight: ${props => props.theme.fontWeights.heading};
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
        <StyledSkillFragment theme={theme} key={technology.title}>
          <StyledHeader>{t(technology.title)}</StyledHeader>
          <ul>
            {technology.skills.map(skill => (
              <StyledListItem key={skill}>
                <TechnologyIcon icon={techStackIcons[skill]} />
                <StyledIconSpan theme={theme}>
                  {techStackIcons[skill].name}
                </StyledIconSpan>
              </StyledListItem>
            ))}
          </ul>
        </StyledSkillFragment>
      ))}
    </StyledSkillSection>
  );
};

export default SkillSection;
