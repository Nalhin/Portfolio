import React from 'react';
import { RepositoryProject } from '../../interfaces/RepositoryProject';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { displayedProjects } from '../../constants/displayedProjects';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import ProjectLink from './ProjectLink';
import { StyledCard } from '../card/StyledCart';
import { techStackIcons } from '../../constants/techStackIcons';
import TechnologyIcon from '../icon/TechnologyIcon';

const StyledProject = StyledCard.withComponent(motion.div);

const StyledProjectCart = styled(StyledProject)`
  margin-top: ${props => props.theme.space.large}px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.display}px;
`;

interface Props {
  project: RepositoryProject;
}

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
    <StyledProjectCart
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      theme={theme}
    >
      <StyledTitle>{project.name}</StyledTitle>
      <StyledImage
        src={`/images/projects/${projectName}.jpg`}
        alt={project.name}
      />
      <div>
        {project.repositoryTopics.nodes.map(top => {
          const { name } = top.topic;
          const icon = techStackIcons[name];
          return icon && <TechnologyIcon icon={icon} key={name} />;
        })}
      </div>
      <StyledDescription>
        {t(`projects:${projectName}.description`)}
      </StyledDescription>
      <StyledLinkContainer>
        <ProjectLink href={project.homepageUrl}>
          {t('projects:preview')}
        </ProjectLink>
        <ProjectLink href={project.url}>{t('projects:viewCode')}</ProjectLink>
      </StyledLinkContainer>
    </StyledProjectCart>
  );
};

export default Project;
