import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledNavElement } from './NavElement';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

const StyledNavLink = styled(StyledNavElement)`
  margin: ${props => props.theme.space.large}px;
`;

interface Props {
  href: string;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();
  const theme = useTheme();
  const { pathname } = router;

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <StyledNavLink isActive={isActive} theme={theme}>
        {children}
      </StyledNavLink>
    </Link>
  );
};

export default NavLink;
