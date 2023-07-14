import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from "./src/components/Main";
import createApolloClient from './src/utils/apolloClient';

import AuthStorage from './src/utils/authStorage';

const apolloClient = createApolloClient();

const authTesti = async () => {
  const testi = new AuthStorage('testi');
  let testiToken = await testi.getAccessToken();
  console.log('testiToken alussa:', testiToken);
  console.log('lisätään testiToken');
  await testi.setAccessToken('testitokeni1234567890');
  console.log('testi:', testi);
  testiToken = await testi.getAccessToken();
  console.log('testiToken:', testiToken);
  console.log('Poistetaan testiToken');
  await testi.removeAccessToken();
  console.log('vanha muuttuja testiToken:', testiToken); // tämä säilyy
  testiToken = await testi.getAccessToken();
  console.log('testiToken:', testiToken);
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
