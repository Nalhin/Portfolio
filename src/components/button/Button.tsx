import React from 'react';
import styled from '../../styles/styled';
import { Theme } from '../../styles/theme';
import { useTheme } from 'emotion-theming';
import { motion, useAnimation } from 'framer-motion';

const StyledButton = styled(motion.button)`
  border: 0;
  outline: 0;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.5px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.secondary};
  color: #fff;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-weight: 600;
  line-height: 42px;
  font-size: 14px;
  height: 42px;
  padding: 0 22px;
  cursor:pointer;
  position:relative;


  &:hover {
    box-shadow: ${props => props.theme.boxShadow.hover}
    background-color: ${props => props.theme.colors.secondary}dd;
  }
`;

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  const theme = useTheme<Theme>();

  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
