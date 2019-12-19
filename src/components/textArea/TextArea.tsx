import React from 'react';
import styled from '../../styles/styled';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../styles/theme';
import { StyledBorder, StyledContainer, StyledLabel } from '../input/Input';

interface StyledTextAreaProps {
  isEmpty: boolean;
}

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

  & ~ .input__label {
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
    & ~ .input__label {
      color: ${props => props.theme.colors.secondary};
      transform: translateY(-26px) scale(0.75);
    }

    & ~ .input__bottom-border__colored {
      transform: scaleX(1);
    }
  }
  &:hover,
  &:focus {
    & ~ .input__bottom-border__hover {
      background: ${props => props.theme.colors.textPrimary};
    }
  }
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

const StyledDefaultBorder = styled(StyledBorder)`
  height: 1px;
  background: ${props => props.theme.colors.textSecondary};
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({ name, value, onChange, label }) => {
  const theme = useTheme<Theme>();
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
      <StyledLabel htmlFor={name} theme={theme} className="input__label">
        {label}
      </StyledLabel>
      <StyledDefaultBorder className="input__bottom-border__black" />
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

export default TextArea;
