import React from 'react';
import { motion, Transition, Variants } from 'framer-motion';
import styled from '../../../styles/styled';
import { Theme } from '../../../styles/theme';
import { useTheme } from 'emotion-theming';

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: Transition;
}

const Path: React.FC<PathProps> = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const StyledButton = styled.button`
  pointer-events: all;
  position: absolute;
  display: none;
  outline: none;
  left: calc(100% - 40px);
  top: 0;
  border: none;
  user-select: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;

  ${props => props.theme.mediaQueries.small} {
    display: block;
  }
`;

interface Props {
  onClick: () => void;
}

const MobileToggle: React.FC<Props> = ({ onClick }) => {
  const theme = useTheme<Theme>();

  return (
    <StyledButton onClick={onClick} theme={theme}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </StyledButton>
  );
};
export default MobileToggle;
