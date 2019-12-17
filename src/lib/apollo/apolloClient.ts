import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { isBrowser } from '../../utils/isBrowser';
import fetch from 'isomorphic-unfetch';
import { setContext } from 'apollo-link-context';
import { githubBaseUrl } from '../../api/github/baseUrl';

export type AppApolloClient = ApolloClient<NormalizedCacheObject>;

let browserApolloClient: AppApolloClient;

interface ApolloOptions {
  uri?: string;
  initialState?: NormalizedCacheObject;
}

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.GITHUB_TOKEN
        ? `Bearer ${process.env.GITHUB_TOKEN}`
        : '',
    },
  };
});

export const createApolloClient = ({
  uri = githubBaseUrl,
  initialState,
}: ApolloOptions) => {
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: authLink.concat(
      new HttpLink({
        uri,
        fetch: !isBrowser ? fetch : undefined,
      }),
    ),
    cache: new InMemoryCache().restore(initialState ?? {}),
  });
};

export const initApollo = (options: ApolloOptions = {}) => {
  if (!isBrowser) {
    return createApolloClient(options);
  }

  if (!browserApolloClient) {
    browserApolloClient = createApolloClient(options);
  }
  return browserApolloClient;
};
