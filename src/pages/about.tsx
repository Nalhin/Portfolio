import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import Icon from '../components/icon/Icon';

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('about:header')}
      <Icon name="redux" />
    </div>
  );
};

About.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['about']),
  };
};

export default About;
