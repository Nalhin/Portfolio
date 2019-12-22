import React from 'react';
import { useTheme } from '@emotion/core';

const ContributionShowcasePlaceholder = () => {
  const theme = useTheme();
  return (
    <svg width="300" height="75">
      <rect
        width="230"
        height="20"
        x="30"
        y="0"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />

      <rect
        width="40"
        height="40"
        x="60"
        y="25"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />
      <rect
        width="40"
        height="40"
        x="125"
        y="25"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />
      <rect
        width="40"
        height="40"
        x="190"
        y="25"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />
    </svg>
  );
};

export default ContributionShowcasePlaceholder;
