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
      } catch (e) {
        console.log(e);
      }
    },
  });

  const signIn = async ({ username, password }) => {
    // console.log(username, password);
    await mutate({ variables: { credentials: { username, password }}})
  };

  const resetApolloClientStoreIfTokenExists = async () => {
    const token = await authStorage.getAccessToken();
    if (!token) {
      throw new Error('Unable to read accessToken'); 
    } 
    await apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;