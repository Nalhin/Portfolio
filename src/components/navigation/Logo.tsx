import React from 'react';
import Link from 'next/link';
import { linkIcons } from '../../constants/techStackIcons';
import Icon from '../icon/Icon';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

const StyledContainer = styled.div`
  flex: 1;
`;

const StyledLogo = styled(Icon)`
  padding-top: ${props => props.theme.space.medium}px;
  cursor: pointer;
`;

const Logo = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Link href={'/'}>
        <a>
          <StyledLogo {...linkIcons.logo} theme={theme} />
        </a>
      </Link>
    </StyledContainer>
  );
};

export default Logo;
