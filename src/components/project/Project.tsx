import React from 'react';
import { RepositoryProject } from '../../interfaces/RepositoryProject';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { displayedProjects } from '../../constants/displayedProjects';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/core';
import ProjectLink from './ProjectLink';
import { techStackIcons } from '../../constants/techStackIcons';
import TechnologyIcon from '../icon/TechnologyIcon';
import Image from '../image/Img';
import Card from '../card/Card';
import { CardHeader } from '../card/CardHeader';

export const StyledProjectContainer = styled(motion.div)`
  margin-top: ${props => props.theme.space.large}px;
  max-width: calc(90% + ${props => props.theme.space.large * 2}px);
  width: 500px;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 400px;
`;

interface Props {
  project: RepositoryProject;
}

const StyledLinkContainer = styled.div`
  margin: ${props => props.theme.space.medium}px 0;
`;

const StyledDescription = styled.span`
  text-align: center;
  padding: ${props => props.theme.space.medium}px
    ${props => props.theme.space.medium}px 0;
`;

const Project: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [ref, inView] = useInView({});

  const projectName = displayedProjects.get(project.id);

  return (
    <StyledProjectContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
    >
      <Card header={<CardHeader>{project.name}</CardHeader>}>
        <div>
          {project.repositoryTopics.nodes.map(top => {
            const { name } = top.topic;
            const icon = techStackIcons[name];
            return icon && <TechnologyIcon icon={icon} key={name} />;
          })}
        </div>
        <StyledImage
          src={`/images/projects/${projectName}.jpg`}
          alt={project.name}
        />
        <StyledDescription theme={theme}>
          {t(`projects:${projectName}.description`)}
        </StyledDescription>
        <StyledLinkContainer>
          <ProjectLink href={project.homepageUrl}>
            {t('projects:preview')}
          </ProjectLink>
          <ProjectLink href={project.url}>{t('projects:viewCode')}</ProjectLink>
        </StyledLinkContainer>
      </Card>
    </StyledProjectContainer>
  );
};

export default Project;
