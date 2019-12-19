import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n/i18n';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout/layout';
import { withApolloClient } from '../lib/apollo/withApolloClient';
import { ApolloProvider } from '@apollo/react-common';
import { AppApolloClient } from '../lib/apollo/apolloClient';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles } from '../styles/global';
import { theme } from '../styles/theme';

interface Props {
  apolloClient: AppApolloClient;
}

const global = css`
  ${globalStyles}
`;

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, router, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Global styles={global} />
        <ThemeProvider theme={theme}>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.route}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(appWithTranslation(MyApp));
