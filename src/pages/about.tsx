import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import Icon from '../components/icon/Icon';
import { getUser } from '../lib/graphql/queries/getUser';
import { useQuery } from '@apollo/react-hooks';

const About = () => {
  const { t } = useTranslation();
  const xd = useQuery(getUser);

  console.log(xd);
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
