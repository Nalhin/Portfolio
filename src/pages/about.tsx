import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { getUser } from '../lib/graphql/queries/getUser';
import { githubUserLogin } from '../constants/githubUserLogin';
import GithubAccount from '../components/githubAccount/githubAccount';

const About = () => {
  const { t } = useTranslation();
  const { data } = useQuery(getUser, {
    variables: { githubUserLogin },
  });

  return (
    <div>
      {t('about:me')}
      {data && <GithubAccount githubUser={data.user} />}
    </div>
  );
};

About.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(['about']),
  };
};

export default About;
