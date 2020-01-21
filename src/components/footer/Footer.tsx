import React from 'react';
import FooterIcon from '../icon/FooterIcon';
import Button from '../button/Button';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { isBrowser } from '../../utils/isBrowser';
import { footerIcons } from '../../constants/footerIcons';
import { externalAddresses } from '../../constants/externalWebsiteLinks';

const StyledFooted = styled.footer`
  background: ${props => props.theme.colors.foreground};
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space.large}px 0
    ${props => props.theme.space.medium}px;
  box-shadow: ${props => props.theme.boxShadow.navigation};
  font-size: ${props => props.theme.fontSizes.footer}px;
  &:before {
    border-top: 2px ${props => props.theme.colors.primary} solid;
    width: 100%;
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  > a {
    margin: 8px;
  }
`;

const StyledCopyright = styled.span`
  text-align: center;
  display: block;
`;

const currentYear = new Date().getFullYear();

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleClick = () => {
    if (isBrowser) {
      window.open(`${window.location.origin}/cv/${i18n.language}`, '_blank');
    }
  };

  return (
    <StyledFooted theme={theme} data-testid="footer">
      <Button onClick={handleClick}>{t('common:downloadCv')}</Button>
      <StyledIconContainer>
        <FooterIcon url={externalAddresses.github} icon={footerIcons.github} />
        <FooterIcon
          url={externalAddresses.youtube}
          icon={footerIcons.youtube}
        />
        <FooterIcon
          url={externalAddresses.twitter}
          icon={footerIcons.twitter}
        />
        <FooterIcon
          url={externalAddresses.linkedinAddress}
          icon={footerIcons.linkedin}
        />
      </StyledIconContainer>
      <StyledCopyright>
        Copyright© 2019 - {currentYear} Krzysztof Olipra All Rights Reserved.
      </StyledCopyright>
    </StyledFooted>
  );
};

export default Footer;
