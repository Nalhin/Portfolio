import React from 'react';
import { techStackIcons } from '../../constants/techStackIcons';
import Icon from '../icon/Icon';
import styled from '@emotion/styled';

interface Props {
  topicNode: { topic: { name: string } };
}

const StyledIcon = styled(Icon)`
  margin: 0 8px;
`;

const ProjectIcon: React.FC<Props> = ({ topicNode }) => {
  const { name } = topicNode.topic;
  const icon = techStackIcons[name];
  if (icon) {
    return <StyledIcon {...icon} directory="techstack" />;
  }
  return null;
};

export default ProjectIcon;
