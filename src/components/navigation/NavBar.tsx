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

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${props => props.theme.space.medium}px;
  overflow: auto;
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
`;

const StyledLogo = styled(Icon)`
  cursor: pointer;
`;

const NavBar = () => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  return (
    <StyledNavigation theme={theme}>
      <div>
        <Link href={'/'}>
          <div>
            <StyledLogo {...linkIcons.logo} />
          </div>
        </Link>
      </div>
      <StyledCenter>
        <NavLink href={'/'}>{t('navigation.home')}</NavLink>
        <NavLink href={'/about'}>{t('navigation.about')}</NavLink>
        <NavLink href={'/projects'}>{t('navigation.projects')}</NavLink>
        <NavLink href={'/contact'}>{t('navigation.contact')}</NavLink>
      </StyledCenter>
      <LanguageSwitcher />
    </StyledNavigation>
  );
};

export default NavBar;
