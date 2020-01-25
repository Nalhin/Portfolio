import styled from '@emotion/styled';

export const CardHeader = styled.div`
  background: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.gradient};
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.heading};
  padding: ${props => props.theme.space.medium}px 0;
  font-size: ${props => props.theme.fontSizes.display}px;
  margin-bottom: ${props => props.theme.space.medium}px;
  border-radius: 8px 8px 0 0;
  text-overflow: ellipsis;
`;
