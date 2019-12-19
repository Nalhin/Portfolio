import React from 'react';
import { useTranslation } from 'react-i18next';
import { navAdresses } from '../navAdresses';
import styled from '../../../styles/styled';
import { motion } from 'framer-motion';
import MobileLink from './MobileLink';

interface StyledProps {
  isMobileOpen: boolean;
}

const StyledContainer = styled(motion.ul)<StyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: ${props => (props.isMobileOpen ? 'all' : 'none')};
`;
const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.2 },
  },
};

interface Props {
  toggleMenu: () => void;
  isMobileOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({ toggleMenu, isMobileOpen }) => {
  const { t } = useTranslation();

  return (
    <StyledContainer variants={variants} isMobileOpen={isMobileOpen}>
      {navAdresses.map(address => (
        <MobileLink href={address.href} key={address.href} onClick={toggleMenu}>
          {t(address.translation)}
        </MobileLink>
      ))}
    </StyledContainer>
  );
};

export default MobileMenu;
