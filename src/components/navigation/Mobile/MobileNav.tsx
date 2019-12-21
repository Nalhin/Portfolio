import React from 'react';
import { useDimensions } from '../useDimentions';
import { motion } from 'framer-motion';
import MobileToggle from './MobileToggle';
import MobileMenu from './MobileMenu';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

const sidebar = (height: number, width: number) => {
  if (height && width)
    return {
      open: {
        clipPath: `circle(${height + 80}px at ${width - 40}px 20px) `,
        transition: {
          type: 'spring',
          stiffness: 20,
          restDelta: 2,
        },
      },
      closed: {
        clipPath: `circle(30px at ${width - 40}px 20px )`,
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
    };
};

interface Props {
  toggleMenu: () => void;
  isMobileOpen: boolean;
}

const StyledBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  display: block;
`;

const StyledContainer = styled(motion.div)`
  display: none;
  ${props => props.theme.mediaQueries.small} {
    display: block;
  }
`;

const MobileNav: React.FC<Props> = ({ toggleMenu, isMobileOpen }) => {
  const theme = useTheme();
  const { height, width } = useDimensions();

  return (
    <StyledContainer
      initial={false}
      animate={isMobileOpen ? 'open' : 'closed'}
      custom={height}
      theme={theme}
    >
      <StyledBackground variants={sidebar(height, width)} />
      <MobileMenu toggleMenu={toggleMenu} isMobileOpen={isMobileOpen} />
      <MobileToggle onClick={toggleMenu} />
    </StyledContainer>
  );
};

export default MobileNav;
