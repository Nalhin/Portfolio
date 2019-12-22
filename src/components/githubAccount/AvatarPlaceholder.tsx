import React from 'react';
import { useTheme } from '@emotion/core';

const AvatarPlaceholder = () => {
  const theme = useTheme();

  return (
    <svg width="152" height="152">
      <circle
        cx="76"
        cy="76"
        r="76"
        fill={theme.colors.placeholder}
        mask="url(#shining)"
      />
    </svg>
  );
};

export default AvatarPlaceholder;
