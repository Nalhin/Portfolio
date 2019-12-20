import React from 'react';
import { StyledBorder, StyledContainer, StyledLabel } from '../input/Input';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

interface StyledTextAreaProps {
  isEmpty: boolean;
}

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

const StyledDefaultBorder = styled(StyledBorder)`
  height: 1px;
  background: ${props => props.theme.colors.textSecondary};
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  padding: ${props => props.theme.space.medium}px 0 0;
  resize: none;
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  height: 144px;
  font-size: ${props => props.theme.fontSizes.body}px;
  font-weight: ${props => props.theme.fontWeights.body};
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
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({ name, value, onChange, label }) => {
  const theme = useTheme();
  const isEmpty = value === '';
  return (
    <StyledContainer theme={theme}>
      <StyledTextArea
        id={name}
        theme={theme}
        value={value}
        name={name}
        onChange={onChange}
        isEmpty={isEmpty}
      />
      <StyledLabel htmlFor={name} theme={theme}>
        {label}
      </StyledLabel>
      <StyledDefaultBorder />
      <StyledColoredBorder theme={theme} />
      <StyledHoverBorder theme={theme} />
    </StyledContainer>
  );
};

export default TextArea;
