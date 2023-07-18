import { Button, StyleSheet, View } from "react-native"
import FormikTextInput from "../FormikTextInput";
import { Formik } from "formik";
import theme from "../../theme";
import * as yup from 'yup';

const styles = StyleSheet.create({
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

const SignUpFormFields = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.textInput} name="username" placeholder="Enter username" />
      <FormikTextInput style={styles.textInput} name='password' placeholder="Enter password" secureTextEntry />
      <FormikTextInput style={styles.textInput} name="passwordConfirmation" placeholder="Confirm password" secureTextEntry />
      <Button
        style={styles.button}
        onPress={onSubmit}
        title="Sign Up"
      />
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least ${min} characters long!')
    .max(30, 'Username length can not exeed ${max} characters!'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least ${min} characters long!')
    .max(50, 'Password can only be ${max} characters long!'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirm password')
    .required('Enter new password again to confirm it'),
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpFormFields onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUpForm;