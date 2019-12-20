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
import { useTheme } from '@emotion/core';
import { StyledButton } from '../button/Button';

const StyledProject = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.foreground};
  max-width: 90%;
  padding: ${props => props.theme.space.medium}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.display}px;
`;

interface Props {
  project: RepositoryProject;
}

const StyledA = StyledButton.withComponent('a');

const StyledLink = styled(StyledA)`
  display: inline-block;
  background-color: ${props => !props.href && props.theme.colors.secondary}aa;
  margin: 0 ${props => props.theme.space.medium}px;

  &:hover {
    background-color: ${props => !props.href && props.theme.colors.secondary}aa;
    box-shadow: ${props => !props.href && 0};
  }
`;

const StyledLinkContainer = styled.div`
  margin: ${props => props.theme.space.medium}px 0;
`;

const StyledDescription = styled.span`
  text-align: center;
`;

const Project: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [ref, inView] = useInView({});

  const projectName = displayedProjects.get(project.id);

  return (
    <StyledProject
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      theme={theme}
      whileHover={{}}
    >
      <StyledTitle>{project.name}</StyledTitle>
      <StyledImage
        src={`/images/projects/${projectName}.jpg`}
        alt={project.name}
      />
      <div>
        {project.repositoryTopics.nodes.map(top => (
          <ProjectIcon topicNode={top} key={top.topic.name} />
        ))}
      </div>
      <StyledDescription>
        {t(`projects:${projectName}.description`)}
      </StyledDescription>
      <StyledLinkContainer>
        <StyledLink
          href={project.homepageUrl}
          theme={theme}
          target="_blank"
          rel="noopener"
        >
          {t('projects:preview')}
        </StyledLink>
        <StyledLink
          href={project.url}
          theme={theme}
          target="_blank"
          rel="noopener"
        >
          {t('projects:viewCode')}
        </StyledLink>
      </StyledLinkContainer>
    </StyledProject>
  );
};

export default Project;
