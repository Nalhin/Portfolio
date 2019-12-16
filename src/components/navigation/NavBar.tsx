import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import LanguageSwitcher from './LanguageSwitcher';
import styled from '@emotion/styled';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <NavLink href={'/'}>{t('navigation.home')}</NavLink>
      <NavLink href={'/about'}>{t('navigation.about')}</NavLink>
      <NavLink href={'/projects'}>{t('navigation.projects')}</NavLink>
      <NavLink href={'/resume'}>{t('navigation.resume')}</NavLink>
      <NavLink href={'/skills'}>{t('navigation.skills')}</NavLink>
      <NavLink href={'/contact'}>{t('navigation.contact')}</NavLink>
      <LanguageSwitcher />
    </nav>
  );
};

export default NavBar;
