import React from 'react';
import {
  githubAddress,
  youtubeAddress,
} from '../../constants/externalWebsiteLinks';
import Icon from '../icon/Icon';
import { linkIcons, techStackIcons } from '../../constants/techStackIcons';
import styled from '@emotion/styled';

const StyledIconContainer = styled.div`
  margin-top: 100px;
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
  return (
    <footer>
      <StyledIconContainer>
        <a href={githubAddress} target="_blank">
          <Icon {...linkIcons.github} />
        </a>
        <a href={youtubeAddress} target="_blank">
          <Icon {...linkIcons.youtube} />
        </a>
      </StyledIconContainer>
      <StyledCopyright>
        Copyright© 2019-{currentYear} Krzysztof Olipra All Rights Reserved.
      </StyledCopyright>
    </footer>
  );
};

export default Footer;
