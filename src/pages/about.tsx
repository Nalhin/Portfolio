import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';

const About = () => {
  return <div>About</div>;
};

About.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(),
  };
};

export default About;
