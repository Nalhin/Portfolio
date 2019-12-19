import React from 'react';
import styled from '../../styles/styled';
import Link from 'next/link';
import { linkIcons } from '../../constants/techStackIcons';
import Icon from '../icon/Icon';
import { Theme } from '../../styles/theme';
import { useTheme } from 'emotion-theming';

const StyledContainer = styled.div`
  flex: 1;
`;

const StyledLogo = styled(Icon)`
  padding-top: ${props => props.theme.space.medium}px;
  cursor: pointer;
`;

const Logo = () => {
  const theme = useTheme<Theme>();
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
