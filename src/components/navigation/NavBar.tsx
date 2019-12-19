import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import LanguageSwitcher from './LanguageSwitcher';
import styled from '../../styles/styled';
import Link from 'next/link';
import Icon from '../icon/Icon';
import { linkIcons } from '../../constants/techStackIcons';
import { Theme } from '../../styles/theme';
import { useTheme } from 'emotion-theming';
import Logo from './Logo';

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
`;

const links = [
  { href: '/', translation: 'navigation.home' },
  { href: '/about', translation: 'navigation.about' },
  { href: '/projects', translation: 'navigation.projects' },
  { href: '/contact', translation: 'navigation.contact' },
];

const NavBar = () => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  return (
    <StyledNavigation theme={theme}>
      <Logo />
      <StyledCenter>
        {links.map(link => (
          <NavLink href={link.href} key={link.href}>
            {t(link.translation)}
          </NavLink>
        ))}
      </StyledCenter>
      <LanguageSwitcher />
    </StyledNavigation>
  );
};

export default NavBar;
