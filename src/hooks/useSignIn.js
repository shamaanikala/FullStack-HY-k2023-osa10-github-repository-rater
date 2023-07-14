import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result ] = useMutation(AUTHENTICATE, {
    // onError: error => {
    //   console.log(`Authentication error: ${error.message}`)
    // },
    onCompleted: async data => {
      try {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        await resetApolloClientStoreIfTokenExists();     
      // apolloClient.resetStore();
      // console.log('onCompleted:', await authStorage.getAccessToken());
      } catch (e) {
        console.log(e);
      }
    },
  });

  const signIn = async ({ username, password }) => {
    // console.log(username, password);
    await mutate({ variables: { credentials: { username, password }}})
    // const { data } = await mutate({ variables: { credentials: { username, password }}})
    // if (data) {
    //   console.log('signIn:',data.authenticate.accessToken);
    //   console.log('setAccessToken');
    //   await authStorage.setAccessToken(data.authenticate.accessToken);
    // }
    // console.log('getAccessToken:',await authStorage.getAccessToken());
  };

  const resetApolloClientStoreIfTokenExists = async () => {
    const token = await authStorage.getAccessToken();
    if (!token) {
      throw new Error('Unable to read accessToken'); 
    } 
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;