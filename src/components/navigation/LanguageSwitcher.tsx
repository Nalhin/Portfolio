import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/languages';
import { StyledNavElement } from './NavElement';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

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

  ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

interface Props {
  onClick?: () => void;
  className?: string;
}

const LanguageSwitcher: React.FC<Props> = ({ onClick, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { i18n } = useTranslation();
  const theme = useTheme();

  const handleChangeOpen = () => {
    setIsOpen(!isOpen);
    onClick && onClick();
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(r => handleChangeOpen());
  };

  return (
    <StyledContainer theme={theme} className={className}>
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
