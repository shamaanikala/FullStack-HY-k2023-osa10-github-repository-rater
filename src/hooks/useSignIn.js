import { useMutation } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onError: error => console.log(error),
  });

  const signIn = async ({ username, password }) => {
    mutate({ variables: { credentials: { username, password }}})
  }

  return [signIn, result];
};

export default useSignIn;