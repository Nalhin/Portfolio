import React from 'react';
import {
  githubAddress,
  twitterAddress,
  youtubeAddress,
} from '../../constants/externalWebsiteLinks';
import { linkIcons } from '../../constants/techStackIcons';
import IconWithLink from '../icon/IconWithLink';
import Button from '../button/Button';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

const StyledFooted = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space.large}px 0
    ${props => props.theme.space.medium}px;

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
  const handleClick = () => {};

  return (
    <StyledFooted theme={theme}>
      <Button onClick={handleClick}>{t('common:downloadCv')}</Button>
      <StyledIconContainer>
        <IconWithLink url={githubAddress} icon={linkIcons.github} />
        <IconWithLink url={youtubeAddress} icon={linkIcons.youtube} />
        <IconWithLink url={twitterAddress} icon={linkIcons.twitter} />
      </StyledIconContainer>
      <StyledCopyright>
        Copyright© 2019 - {currentYear} Krzysztof Olipra All Rights Reserved.
      </StyledCopyright>
    </StyledFooted>
  );
};

export default Footer;
