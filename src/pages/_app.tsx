import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n/i18n';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout/layout';
import { withApolloClient } from '../lib/apollo/withApolloClient';
import { ApolloProvider } from '@apollo/react-common';
import { AppApolloClient } from '../lib/apollo/apolloClient';

interface Props {
  apolloClient: AppApolloClient;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, router, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route} exit={{ opacity: 0 }}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(appWithTranslation(MyApp));
