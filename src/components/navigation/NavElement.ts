import styled from '../../styles/styled';

interface StyledNavElementProps {
  isActive: boolean;
}

export const StyledNavElement = styled.a<StyledNavElementProps>`
  font-size: ${props => props.theme.fontSizes.body}px;
  margin: ${props => props.theme.space.large}px 0;
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
  }
`;
