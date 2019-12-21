import styled from '@emotion/styled';

export const StyledCard = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.foreground};
  max-width: 90%;
  padding: ${props => props.theme.space.medium}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
`;
