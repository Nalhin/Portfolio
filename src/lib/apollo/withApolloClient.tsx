import React from 'react';
import { NextComponentType } from 'next';
import { AppApolloClient, initApollo } from './apolloClient';
import Head from 'next/head';
import { getMarkupFromTree } from '@apollo/react-ssr';
import { isBrowser } from '../../utils/isBrowser';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { NextRouter } from 'next/router';
import { renderToString } from 'react-dom/server';
import { AppContextType } from 'next/dist/next-server/lib/utils';

interface Props {
  apolloState: NormalizedCacheObject;
}

interface AppProps {
  Component?: React.Component;
  router?: NextRouter;
  apolloClient: AppApolloClient;
}

const getDates = () => {
  const now = new Date();
  const dayAgo = new Date();
  dayAgo.setDate(now.getDate() - 1);
  const monthAgo = new Date();
  monthAgo.setMonth(now.getMonth() - 1);

  return {
    dateNow: now.toISOString(),
    dateDayAgo: dayAgo.toISOString(),
    dateMonthAgo: monthAgo.toISOString(),
    __typename: 'dates',
  };
};
const dates = getDates();

export const withApolloClient = (App: NextComponentType<{}, {}, AppProps>) => {
  return class Apollo extends React.Component<Props> {
    static displayName = 'withApollo(App)';

    static async getInitialProps(ctx: AppContextType) {
      const { Component, router, AppTree } = ctx;
      const apolloClient = initApollo();

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (!isBrowser) {
        apolloClient.writeData({ data: { dates } });

        try {
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <AppTree
                {...appProps}
                pageProps={appProps}
                Component={Component}
                router={router}
                apolloClient={apolloClient}
              />
            ),
          });
        } catch (error) {
          if (error.message !== 'Product not found') {
            console.error(
              'Error while running `getDataFromTree`',
              JSON.stringify(error),
            );
          }
        }
        Head.rewind();
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }
    private readonly apolloClient: AppApolloClient;

    constructor(props: Readonly<Props>) {
      super(props);
      this.apolloClient = initApollo({
        initialState: props.apolloState,
      });
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
