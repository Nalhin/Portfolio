import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';

const Contact = () => {
  return <div>Contact</div>;
};

Contact.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['contact']),
  };
};
export default Contact;
