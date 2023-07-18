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
  // const [signIn] = useSignIn();
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
    onCompleted: async data => {
      // data.createUser.username
      console.log(data);
      navigate('/');
    },
  });

  const createUser = async (user) => {
    console.log('creating new user:');
    console.log('--', user);
    await mutate({ variables: user });
  };

  const onSubmit = async (values) => {
    console.log('SignUp:onSubmit:', values);
    console.log('-- calling createUser({ user }) with:');
    const { username, password } = values;
    const user = { username, password }
    console.log(user);
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
