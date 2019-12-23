import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { withDefaultNamespaces } from '../lib/i18n/withDefaultNamespaces';

const Error: NextPage = () => {
  const { t } = useTranslation();

  return <div>{t('_error:errorMessage')}</div>;
};

Error.getInitialProps = () => {
  return {
    namespacesRequired: withDefaultNamespaces(),
  };
};

export default Error;
