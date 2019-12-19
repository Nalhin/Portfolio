import React from 'react';
import {
  githubAddress,
  twitterAddress,
  youtubeAddress,
} from '../../constants/externalWebsiteLinks';
import Icon from '../icon/Icon';
import { linkIcons } from '../../constants/techStackIcons';
import { Theme } from '../../styles/theme';
import { useTheme } from 'emotion-theming';
import styled from '../../styles/styled';
import IconWithLink from '../icon/IconWithLink';

const StyledFooted = styled.footer`
  margin-top: auto;
  padding: ${props => props.theme.space.large}px 0;
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
  const theme = useTheme<Theme>();
  return (
    <StyledFooted theme={theme}>
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
