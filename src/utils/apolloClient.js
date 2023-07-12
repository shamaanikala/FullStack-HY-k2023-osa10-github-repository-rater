import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import Constants from 'expo-constants';

// const NGROK_GRAPHQL = Constants.manifest.extra.NGROK_GRAPHQL;
// const GRAPHQL_URL = `${NGROK_GRAPHQL}/graphql`;
const GRAPHQL_URL = 'http://192.168.8.100:4000/graphql';

const httpLink = createHttpLink({
  uri: GRAPHQL_URL, 
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
