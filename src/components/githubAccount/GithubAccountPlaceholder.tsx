import React from 'react';
import { useTheme } from '@emotion/core';
import { StyledContainer } from './GithubAccount';

const GithubAccountPlaceholder = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <svg width="300" height="280">
        <rect
          width="240"
          height="70"
          x="30"
          y="0"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />

        <circle
          cx="150"
          cy="160"
          r="75"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="240"
          height="20"
          x="30"
          y="250"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
      </svg>
    </StyledContainer>
  );
};

export default GithubAccountPlaceholder;
