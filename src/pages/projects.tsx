import React from 'react';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';

const Projects = () => {
  const { t } = useTranslation();
  return <div>{t('projectsTitle')}</div>;
};

Projects.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['projects']),
  };
};

export default Projects;