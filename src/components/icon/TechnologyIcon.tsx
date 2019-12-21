import React from 'react';
import { useTheme } from '@emotion/core';
import styled from '@emotion/styled';
import Icon from './Icon';
import { motion } from 'framer-motion';
import { TechStackIcon } from '../../interfaces/TechStackIcon';

const StyledIcon = styled(Icon)`
  padding: 2px;
  pointer-events: none;
`;

const StyledTooltip = styled(motion.span)`
  background: #000;
  color: #fff;
  position: absolute;
  z-index: 100;
  padding: ${props => props.theme.space.medium}px;
  border-radius: 12px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 44px;
  text-align: center;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -16px;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

const StyledContainer = styled(motion.span)`
  position: relative;
  cursor: pointer;
`;

const tooltip = {
  hide: { scale: 0, x: '-50%' },
  show: { scale: 1, x: '-50%' },
};

interface Props {
  icon: TechStackIcon;
}

const TechnologyIcon: React.FC<Props> = ({ icon }) => {
  const theme = useTheme();
  return (
    <StyledContainer
      initial="hide"
      whileHover="show"
      whileTap="show"
      theme={theme}
    >
      <StyledTooltip variants={tooltip}>{icon.name}</StyledTooltip>
      <StyledIcon {...icon} directory="techstack" width={30} height={30} />
    </StyledContainer>
  );
};

export default TechnologyIcon;
