import React from 'react';
import { techStackIcons } from '../../constants/techStackIcons';
import Icon from '../icon/Icon';
import styled from '@emotion/styled';

interface Props {
  topicNode: { topic: { name: string } };
}

const StyledIcon = styled(Icon)`
  padding: 2px;
`;

const ProjectIcon: React.FC<Props> = ({ topicNode }) => {
  const { name } = topicNode.topic;
  const icon = techStackIcons[name];
  if (icon) {
    return (
      <StyledIcon {...icon} directory="techstack" width={26} height={26} />
    );
  }
  return null;
};

export default ProjectIcon;
