import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

export const StyledButton = styled.button`
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
  user-select:none;
  transition: background 0.5s ease;


  &:hover {
    box-shadow: ${props => props.theme.boxShadow.hover}
    background: ${props => props.theme.colors.secondary}cc;
  }
`;

interface Props {
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
