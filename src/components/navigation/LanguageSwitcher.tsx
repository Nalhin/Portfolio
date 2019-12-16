import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/languages';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const StyledDropDownContainer = styled.div`
  position: absolute;
`;

const StyledDropDownItem = styled.div`
  position: relative;
`;

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { i18n } = useTranslation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(r => handleOpen());
  };

  return (
    <StyledContainer>
      <div onClick={handleOpen}>{languages[i18n.language]}</div>
      <StyledDropDownContainer>
        {isOpen &&
          Object.keys(languages).map(language => (
            <StyledDropDownItem onClick={() => changeLanguage(language)}>
              {languages[language]}
            </StyledDropDownItem>
          ))}
      </StyledDropDownContainer>
    </StyledContainer>
  );
};

export default LanguageSwitcher;
