import React from 'react';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useQuery } from '@apollo/react-hooks';
import { getRepositoriesById } from '../lib/graphql/queries/getRepositories';
import Project from '../components/project/Project';
import { RepositoryProject } from '../interfaces/RepositoryProject';
import { displayedProjects } from '../constants/displayedProjects';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Response = {
  nodes: RepositoryProject[];
};

type InputProps = {
  id: string[];
};

const id = Array.from(displayedProjects.keys());

const Projects = () => {
  const { t } = useTranslation();

  const { loading, data } = useQuery<Response, InputProps>(
    getRepositoriesById,
    {
      variables: { id },
    },
  );

  if (loading) return <div>loading</div>;

  return (
    <div>
      <h1>{t('projects:projectPageTitle')}</h1>
      <StyledContainer>
        {data?.nodes.map(project => (
          <Project project={project} key={project.name} />
        ))}
      </StyledContainer>
    </div>
  );
};

Projects.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['projects']),
  };
};

export default Projects;
