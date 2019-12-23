import React from 'react';
import { useTheme } from '@emotion/core';

const ImagePlaceholder = () => {
  const theme = useTheme();

  return (
    <svg width="100%" height="400" data-testid="image__placeholder">
      <rect
        width="100%"
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
