import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface StyledLinkProps {
  isActive: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  ${props => props.isActive && 'background:red'}
`;

interface Props {
  href: string;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();
  const { pathname } = router;

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <StyledLink isActive={isActive}>{children}</StyledLink>
    </Link>
  );
};

export default NavLink;
