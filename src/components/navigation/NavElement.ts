import styled from '@emotion/styled';

interface StyledNavElementProps {
  isActive: boolean;
}

export const StyledNavElement = styled.a<StyledNavElementProps>`
  margin: ${props => props.theme.space.large}px 0;
  font-size: ${props => props.theme.fontSizes.navigation * 0.9}px;
  white-space: nowrap;

  &:after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 3px;
    height: 3px;
    transition: transform 250ms ease;
    transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
    background: ${props => props.theme.colors.primary};
  }

  &:hover {
    cursor: pointer;
    &:after {
      transform: scaleX(1);
    }
  }
`;
