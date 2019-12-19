import React from 'react';
import Icon from './Icon';
import { TechStackIcon } from '../../interfaces/TechStackIcon';

interface Props {
  url: string;
  icon: TechStackIcon;
}

const IconWithLink: React.FC<Props> = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noopener">
      <Icon {...icon} />
    </a>
  );
};

export default IconWithLink;
