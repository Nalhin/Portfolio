import React from 'react';

import styled from '@emotion/styled';

export const StyledCard = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.foreground};
  max-width: 90%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
`;

interface Props {
  header?: JSX.Element | string;
  className?: string;
}

const Card: React.FC<Props> = ({ header, children, className }) => {
  return (
    <StyledCard className={className}>
      {header}
      {children}
    </StyledCard>
  );
};

export default Card;
