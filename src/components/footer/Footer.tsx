import React from 'react';
import SocialIcon from '../icon/SocialIcon';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { socialIcons } from '../../constants/socialIcons';
import { externalAddresses } from '../../constants/externalWebsiteLinks';
import DownloadCv from '../downloadCv/DownloadCv';
import SocialCv from '../icon/SocialCv';

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

  return (
    <StyledFooted theme={theme} data-testid="footer">
      <StyledIconContainer>
        <SocialIcon url={externalAddresses.github} icon={socialIcons.github} />
        <SocialIcon
          url={externalAddresses.youtube}
          icon={socialIcons.youtube}
        />
        <SocialIcon
          url={externalAddresses.twitter}
          icon={socialIcons.twitter}
        />
        <SocialIcon
          url={externalAddresses.linkedinAddress}
          icon={socialIcons.linkedin}
        />
        <DownloadCv
          Component={(props: { onClick: () => void }) => (
            <SocialCv icon={socialIcons.downloadCv} onClick={props.onClick} />
          )}
        />
      </StyledIconContainer>
      <StyledCopyright>
        Copyright© 2019 - {currentYear} Krzysztof Olipra All Rights Reserved.
      </StyledCopyright>
    </StyledFooted>
  );
};

export default Footer;
