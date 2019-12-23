import React from 'react';
import { useTheme } from '@emotion/core';
import { StyledButton } from '../button/Button';
import styled from '@emotion/styled';

const StyledA = StyledButton.withComponent('a');

const StyledLink = styled(StyledA)`
  display: inline-block;
  background-color: ${props => !props.href && props.theme.colors.secondary}aa;
  margin: 0 ${props => props.theme.space.medium}px;

  &:hover {
    background-color: ${props =>
      props.href === '#' && props.theme.colors.secondary}aa;
    box-shadow: ${props => props.href === '#' && 'none'};
  }
`;

const StyledEmptyLink = styled(StyledLink)`
  background-color: ${props => props.theme.colors.secondary}aa;
  cursor: not-allowed;

  &:hover {
    background-color: ${props => props.theme.colors.secondary}aa;
    box-shadow: none;
  }
`;

interface Props {
  href?: string;
}

const ProjectLink: React.FC<Props> = ({ href, children }) => {
  const theme = useTheme();

  if (!href) {
    return <StyledEmptyLink theme={theme}>{children}</StyledEmptyLink>;
  }
  return (
    <StyledLink href={href} theme={theme} target="_blank" rel="noopener">
      {children}
    </StyledLink>
  );
};

export default ProjectLink;
