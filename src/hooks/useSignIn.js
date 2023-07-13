import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result ] = useMutation(AUTHENTICATE, {
    // onError: error => {
    //   console.log(`Authentication error: ${error.message}`)
    // },
  });

  const signIn = async ({ username, password }) => {
    // console.log(username, password);
    await mutate({ variables: { credentials: { username, password }}})
  };

  return [signIn, result];
};

export default useSignIn;