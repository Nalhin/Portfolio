import React from 'react';
import Typist from 'react-typist';
import { keyframes, useTheme } from '@emotion/core';
import styled from '@emotion/styled';

const blink = keyframes`
    0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
`;

const StyledTypist = styled(Typist)`
  display: block;
  font-size: 120px;
  text-align: center;
  margin: 0 auto;
  white-space: nowrap;
  height: 2em;
  line-height: 1em;
  padding: ${props => props.theme.space.giga}px 0;
  font-family: 'Inconsolata', monospace;

  .Cursor {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.heading};
    display: inline-block;
    opacity: 1;
    animation: ${blink} 1s step-end infinite;
    vertical-align: middle;
    font-family: serif;
    position: relative;
    top: -10px;
  }

  ${props => props.theme.mediaQueries.small} {
    font-size: 60px;
  }
`;

const StyledPrimaryColorText = styled.span`
  color: ${props => props.theme.colors.primary};
`;

const TypedTitle = () => {
  const theme = useTheme();
  return (
    <StyledTypist theme={theme} avgTypingDelay={100}>
      <span>
        Hello I<StyledPrimaryColorText theme={theme}>/</StyledPrimaryColorText>,
        <Typist.Delay ms={500} />
        <br />
        There
        <Typist.Backspace count={5} delay={2000} />
        <Typist.Delay ms={500} />
        World
      </span>
    </StyledTypist>
  );
};

export default TypedTitle;
