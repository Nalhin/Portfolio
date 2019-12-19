import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import LanguageSwitcher from './LanguageSwitcher';
import styled from '../../styles/styled';

import { Theme } from '../../styles/theme';
import { useTheme } from 'emotion-theming';
import Logo from './Logo';
import { navAdresses } from './navAdresses';
import MobileNav from './Mobile/MobileNav';

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${props => props.theme.space.medium}px;
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

const NavBar = () => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const [isMobileOpen, setMobileOpen] = React.useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <StyledNavigation>
      <Logo />
      <StyledCenter theme={theme}>
        {navAdresses.map(address => (
          <NavLink href={address.href} key={address.href}>
            {t(address.translation)}
          </NavLink>
        ))}
      </StyledCenter>
      <LanguageSwitcher />
      <MobileNav toggleMenu={handleMobileOpen} isMobileOpen={isMobileOpen} />
    </StyledNavigation>
  );
};

export default NavBar;
