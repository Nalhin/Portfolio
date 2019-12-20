import React from 'react';
import { useTranslation } from 'react-i18next';
import { navAdresses } from '../navAdresses';
import { motion } from 'framer-motion';
import MobileLink, { linkVariants } from './MobileLink';
import styled from '@emotion/styled';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTheme } from '@emotion/core';

interface StyledProps {
  isMobileOpen: boolean;
}

const StyledContainer = styled(motion.ul)<StyledProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: ${props => (props.isMobileOpen ? 'all' : 'none')};
  font-size: ${props => props.theme.fontSizes.navigation}px;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1 },
  },
};

interface Props {
  toggleMenu: () => void;
  isMobileOpen: boolean;
}

const StyledLanguageSwitcher = styled(LanguageSwitcher, {
  shouldForwardProp: prop => prop !== 'theme',
})`
  ${props => props.theme.mediaQueries.small} {
    display: block;
  }
  margin-right: 0;
  text-align: center;
`;

const MobileMenu: React.FC<Props> = ({ toggleMenu, isMobileOpen }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledContainer variants={variants} isMobileOpen={isMobileOpen}>
      {navAdresses.map(address => (
        <MobileLink href={address.href} key={address.href} onClick={toggleMenu}>
          {t(address.translation)}
        </MobileLink>
      ))}
      <motion.div variants={linkVariants}>
        <StyledLanguageSwitcher onClick={toggleMenu} theme={theme} />
      </motion.div>
    </StyledContainer>
  );
};

export default MobileMenu;
