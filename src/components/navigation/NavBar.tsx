import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { navAdresses } from './navAdresses';
import MobileNav from './Mobile/MobileNav';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import { useRouter } from 'next/router';

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 56px;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.foreground};
  z-index: 1000;
  box-shadow: ${props => props.theme.boxShadow.navigation};
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

const StyledMobileText = styled.span`
  display: none;
  ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
  margin: ${props => props.theme.space.large}px;
  font-size: ${props => props.theme.fontSizes.navigation}px;
  z-index: 1000;
  user-select: none;
`;

const NavBar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const [isMobileOpen, setMobileOpen] = React.useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <StyledNavigation data-testid="navigation">
      <Logo />
      <StyledCenter theme={theme}>
        {navAdresses.map(address => (
          <NavLink href={address.href} key={address.href}>
            {t(address.translation)}
          </NavLink>
        ))}
      </StyledCenter>
      <LanguageSwitcher />
      <StyledMobileText theme={theme}>
        {t(`common:routes.${router.pathname}`)}
      </StyledMobileText>
      <MobileNav toggleMenu={handleMobileOpen} isMobileOpen={isMobileOpen} />
    </StyledNavigation>
  );
};

export default NavBar;
