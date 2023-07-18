import { View, StyleSheet } from "react-native"
import Text from "../Text"
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import theme from "../../theme";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.contentBackground,
  },
  titleText: {
    marginStart: 10,
  },
  errorMessage: {
    color: 'red',
  },
});

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [mutate] = useMutation(CREATE_USER, {
    onError: error => {
      console.log(error);
      if (error.graphQLErrors) {
        console.log(error.graphQLErrors[0].message);
        setErrorMessage(error.graphQLErrors[0].message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    },
    // let's try if variables can be passed here
    onCompleted: async (data, { variables }) => {
      // console.log('variables: ', variables);
      const { username, password } = variables.user;
      // console.log('onCompleted: ', username, password);
      try {
        await signIn({ username, password }).catch(e => console.log(e.message));
      } catch (e) {
        console.log(e);
      }
      navigate('/');
    },
  });

  const createUser = async (user) => {
    await mutate({ variables: user });
  };

  const onSubmit = async (values) => {
    const { username, password } = values;
    const user = { username, password }
    await createUser({ user });
  };

  return (
    <View style={styles.container}>
      <Text fontSize="heading" fontWeight="bold" style={styles.titleText}>Creating a new user:</Text>
      {errorMessage &&
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      }
      <SignUpForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignUp;
