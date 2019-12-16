import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';

const Skills = () => {
  return <div>Resume</div>;
};

Skills.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['skills']),
  };
};

export default Skills;
