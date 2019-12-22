import React from 'react';
import { StyledProjectCart } from './Project';
import { useTheme } from '@emotion/core';
import { useInView } from 'react-intersection-observer';

const ProjectPlaceholder = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({});

  return (
    <StyledProjectCart
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      theme={theme}
    >
      <svg width="400" height="600">
        <rect
          width="400"
          height="30"
          x="0"
          y="10"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="400"
          height="30"
          x="0"
          y="50"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="400"
          height="400"
          x="0"
          y="90"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
        <rect
          width="400"
          height="80"
          x="0"
          y="510"
          fill={theme.colors.placeholder}
          mask="url(#shining)"
        />
      </svg>
    </StyledProjectCart>
  );
};

const ProjectPlaceholders = () => {
  return (
    <>
      <ProjectPlaceholder />
      <ProjectPlaceholder />
      <ProjectPlaceholder />
      <ProjectPlaceholder />
    </>
  );
};

export default ProjectPlaceholders;
