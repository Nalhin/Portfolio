import React from 'react';
import Icon from './Icon';
import { TechStackIcon } from '../../interfaces/TechStackIcon';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';

const StyledA = styled.a`
  background: #000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

interface Props {
  url: string;
  icon: TechStackIcon;
}

const FooterIcon: React.FC<Props> = ({ url, icon }) => {
  const theme = useTheme();

  return (
    <StyledA href={url} target="_blank" rel="noopener" theme={theme}>
      <Icon {...icon} directory="footer" width={24} height={24} />
    </StyledA>
  );
};

export default FooterIcon;
