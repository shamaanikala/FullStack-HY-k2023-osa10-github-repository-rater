import { View, StyleSheet, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  formContainer: {
    padding: 10,
    backgroundColor: theme.colors.contentBackground,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.colors.textSecondary,
    paddingStart: 5,
    paddingVertical: 5,
    marginVertical: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.textInput} name="username" placeholder="Username" />
      <FormikTextInput style={styles.textInput} name="password" placeholder="Password" secureTextEntry />
      <Button
        style={styles.button}
        onPress={onSubmit}
        title="Sign in"
      />
    </View>
  );
};

const initialValues = { username: '', password: '' };

const MINIMUN_USERNAME_LENGTH = 3;

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(MINIMUN_USERNAME_LENGTH, `Username must be at least ${MINIMUN_USERNAME_LENGTH} characters!`)
    .required('Username is required to sign in'),
  password: yup
    .string()
    .required('Password is required to sign in'),
});

const SignIn = () => {
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password }).catch(e => console.log(e.message));
    } catch (e) {
      console.log(e);
    }
  };

  if (result.data && result.data.authenticate) {
    console.log('authenticate');
    console.log(result.data.authenticate.accessToken);
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
