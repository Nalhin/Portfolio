import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin: ${props => props.theme.space.large}px 0;
`;

export const StyledLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: ${props => props.theme.fontSizes.body}px;
  left: 0;
  font-size: ${props => props.theme.fontSizes.body}px;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.fontWeights.body};
  transform-origin: 0 0;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

interface StyledTextAreaProps {
  isEmpty: boolean;
}

export const StyledBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  width: 100%;
`;

const StyledColoredBorder = styled(StyledBorder)`
  background: ${props => props.theme.colors.secondary};
  transform: scaleX(0);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 2;
`;

const StyledHoverBorder = styled(StyledBorder)`
  background: transparent;
  transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1;
`;

export const StyledInput = styled.input<StyledTextAreaProps>`
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  padding: 0;
  height: 48px;
  font-size: ${props => props.theme.fontSizes.body}px;
  font-weight: ${props => props.theme.fontWeights.body};
  border-bottom: 1px solid ${props => props.theme.colors.textSecondary};
  background: none;
  border-radius: 0;
  color: ${props => props.theme.colors.textPrimary};
  transition: all 0.2s ease;
  position: relative;

  & ~ ${StyledLabel} {
    ${props =>
      !props.isEmpty &&
      `
      color: ${(props: any) => props.theme.colors.textSecondary};
      transform: translateY(-26px) scale(0.75);
      `}
  }

  &:focus {
    background: none;
    outline: none;
    & ~ ${StyledLabel} {
      color: ${props => props.theme.colors.secondary};
      transform: translateY(-26px) scale(0.75);
    }

    & ~ ${StyledColoredBorder} {
      transform: scaleX(1);
    }
  }
  &:hover,
  &:focus {
    & ~ ${StyledHoverBorder} {
      background: ${props => props.theme.colors.textPrimary};
    }
  }
`;

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ name, value, onChange, label }) => {
  const theme = useTheme();
  const isEmpty = value === '';

  return (
    <StyledContainer theme={theme}>
      <StyledInput
        type="text"
        id={name}
        theme={theme}
        value={value}
        name={name}
        onChange={onChange}
        isEmpty={isEmpty}
      />
      <StyledLabel htmlFor={name} theme={theme} className="input__label">
        {label}
      </StyledLabel>
      <StyledColoredBorder
        theme={theme}
        className="input__bottom-border__colored"
      />
      <StyledHoverBorder
        theme={theme}
        className="input__bottom-border__hover"
      />
    </StyledContainer>
  );
};

export default Input;
