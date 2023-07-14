import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from "./src/components/Main";
import createApolloClient from './src/utils/apolloClient';

import AuthStorage from './src/utils/authStorage';

const apolloClient = createApolloClient();

const authTesti = async () => {
  const testi = new AuthStorage('testi');
  const testiToken = await testi.getAccessToken();
  console.log(testiToken);
};

const App = () => {

  console.log('aejtaan authTesti');
  authTesti();

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

//😸

export default App;
