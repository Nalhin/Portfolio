import React from 'react';
import { StyledProjectContainer } from './Project';
import { useTheme } from '@emotion/core';
import { useInView } from 'react-intersection-observer';
import Card from '../card/Card';

const ProjectPlaceholder = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({});

  return (
    <StyledProjectContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
    >
      <Card>
        <svg width="100%" height="500" data-testid="project__placeholder">
          <rect
            width="100%"
            height="30"
            x="0"
            y="10"
            fill={theme.colors.placeholder}
            mask="url(#shining)"
          />
          <rect
            width="100%"
            height="30"
            x="0"
            y="50"
            fill={theme.colors.placeholder}
            mask="url(#shining)"
          />
          <rect
            width="100%"
            height="400"
            x="0"
            y="90"
            fill={theme.colors.placeholder}
            mask="url(#shining)"
          />
          <rect
            width="100%"
            height="80"
            x="0"
            y="510"
            fill={theme.colors.placeholder}
            mask="url(#shining)"
          />
        </svg>
      </Card>
    </StyledProjectContainer>
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
