import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';

const Resume = () => {
  return <div>Resume</div>;
};

Resume.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['resume']),
  };
};

export default Resume;
