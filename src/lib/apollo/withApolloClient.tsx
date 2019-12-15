import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { AppApolloClient, initApollo } from './apolloClient';
import Head from 'next/head';
import { getDataFromTree } from '@apollo/react-ssr';
import { isBrowser } from '../../utils/isBrowser';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { NextRouter } from 'next/router';

interface Props {
  apolloState: NormalizedCacheObject;
}

interface Context extends NextPageContext {
  Component: React.Component;
  router: NextRouter;
}

interface AppProps {
  Component?: React.Component;
  router?: NextRouter;
  apolloClient: AppApolloClient;
}

export const withApolloClient = (App: NextComponentType<{}, {}, AppProps>) => {
  return class Apollo extends React.Component<Props> {
    static displayName = 'withApollo(App)';

    static async getInitialProps(ctx: Context) {
      const { Component, router } = ctx;
      const apolloClient = initApollo();

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (!isBrowser) {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apolloClient}
            />,
          );
        } catch (error) {
          console.log(error);
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
