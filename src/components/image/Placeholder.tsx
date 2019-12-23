import React from 'react';
import { useTheme } from '@emotion/core';
import styled from '@emotion/styled';

const ImagePlaceholder = () => {
  const theme = useTheme();

  return (
    <svg width="400" height="400" data-testid="image__placeholder">
      <rect
        width="400"
        height="400"
        x="0"
        y="0"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />
    </svg>
  );
};

export default ImagePlaceholder;
