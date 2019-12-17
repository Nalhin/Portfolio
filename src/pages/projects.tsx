import React from 'react';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useQuery } from '@apollo/react-hooks';
import { userLogin } from '../constants/userLogin';
import {
  getRepositories,
  getRepositoriesById,
} from '../lib/graphql/queries/getRepositories';
import Project from '../components/project/Project';
import { RepositoryProject } from '../interfaces/RepositoryProject';
import { GithubUser } from '../interfaces/GithubUser';
import { displayedProjects } from '../constants/displayedProjects';

type Response = {
  nodes: RepositoryProject[];
};

type InputProps = {
  id: string[];
};

const id = Array.from(displayedProjects.keys());

const Projects = () => {
  const { t } = useTranslation();

  const { loading, data, error } = useQuery<Response, InputProps>(
    getRepositoriesById,
    {
      variables: { id },
    },
  );

  if (loading) return <div>loading</div>;

  return (
    <div>
      <h1>{t('projects:projectPageTitle')}</h1>
      {data?.nodes.map(project => (
        <Project project={project} key={project.name} />
      ))}
    </div>
  );
};

Projects.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['projects']),
  };
};

export default Projects;
