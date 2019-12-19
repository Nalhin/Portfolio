import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/languages';
import { Theme } from '../../styles/theme';
import { useTheme } from 'emotion-theming';
import { StyledNavElement } from './NavElement';
import styled from '../../styles/styled';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: ${props => props.theme.space.large}px;
  justify-content: flex-end;
  flex: 1;
  ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

const StyledSeparator = styled.span`
  text-align: center;
  margin: ${props => props.theme.space.large}px
    ${props => props.theme.space.medium}px 0;
`;

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { i18n } = useTranslation();
  const theme = useTheme<Theme>();

  const handleChangeOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(r => handleChangeOpen());
  };

  return (
    <StyledContainer theme={theme}>
      <StyledNavElement
        onClick={() => changeLanguage(languages.polish)}
        isActive={i18n.language === languages.polish}
        theme={theme}
      >
        Polish
      </StyledNavElement>
      <StyledSeparator theme={theme}>|</StyledSeparator>
      <StyledNavElement
        onClick={() => changeLanguage(languages.english)}
        isActive={i18n.language === languages.english}
        theme={theme}
      >
        English
      </StyledNavElement>
    </StyledContainer>
  );
};

export default LanguageSwitcher;
