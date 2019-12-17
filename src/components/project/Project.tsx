import React from 'react';
import { RepositoryProject } from '../../interfaces/RepositoryProject';
import { useTranslation } from 'react-i18next';
import Icon from '../icon/Icon';
import { linkIcons } from '../../constants/techStackIcons';
import IconWithLink from '../icon/IconWithLink';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { displayedProjects } from '../../constants/displayedProjects';
import ProjectIcon from './ProjectIcon';
import styled from '@emotion/styled';

const StyledProject = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

interface Props {
  project: RepositoryProject;
}

const Project: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const [ref, inView, entry] = useInView({});

  const websiteLink = project.homepageUrl ? (
    <IconWithLink url={project.homepageUrl} icon={linkIcons.website} />
  ) : (
    <Icon {...linkIcons.websiteUnavailable} />
  );

  const projectName = displayedProjects.get(project.id);

  return (
    <StyledProject
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
    >
      <h2>{project.name}</h2>
      <div>
        {project.repositoryTopics.nodes.map(top => (
          <ProjectIcon topicNode={top} />
        ))}
      </div>
      <img
        src={`/images/projects/${projectName}.jpg`}
        width={200}
        alt={project.name}
      />

      <span>{t(`projects:${projectName}.description`)}</span>
      <div>
        {websiteLink}
        <IconWithLink url={project.url} icon={linkIcons.github} />
      </div>
    </StyledProject>
  );
};

export default Project;
