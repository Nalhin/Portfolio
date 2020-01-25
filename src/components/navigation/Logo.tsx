import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

const StyledContainer = styled.div`
  flex: 1;
  ${props => props.theme.mediaQueries.small} {
    flex: none;
  }
`;

const StyledLogo = styled.a`
  margin: ${props => props.theme.space.large}px;
  display: flex;
  cursor: pointer;
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.navigation}px;
`;

const StyledName = styled.span`
  color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.space.small}px;
`;

const Logo = () => {
  const theme = useTheme();
  return (
    <StyledContainer theme={theme}>
      <Link href={'/'}>
        <StyledLogo theme={theme}>
          <StyledName theme={theme}>Krzysztof Olipra</StyledName>
        </StyledLogo>
      </Link>
    </StyledContainer>
  );
};

export default Logo;
