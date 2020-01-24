import React from 'react';
import { StyledA } from './SocialIcon';
import Icon from './Icon';
import { TechStackIcon } from '../../interfaces/TechStackIcon';

interface Props {
  icon: TechStackIcon;
  onClick: () => void;
}

const SocialCv: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <StyledA onClick={onClick}>
      <Icon {...icon} directory="social" width={24} height={24} />
    </StyledA>
  );
};

export default SocialCv;
