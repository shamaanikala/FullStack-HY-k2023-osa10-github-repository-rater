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

const ReviewFormFields = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.textInput} name="ownerName" placeholder="Reposity Owner name" />
      <FormikTextInput style={styles.textInput} name='repositoryName' placeholder="Reposity name" />
      <FormikTextInput style={styles.textInput} name='rating' placeholder="Rating between 0 and 100" />
      <FormikTextInput style={styles.textInput}
        name="text"
        multiline
        placeholder={`Type your repository\nreview here...`} />
      <Button
        style={styles.button}
        onPress={onSubmit}
        title="Create a review"
      />
    </View>
  );
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Reposity owner username is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required.'),
  rating: yup
    .number()
    .integer('The rating must be an integer')
    .min(0, 'Minimum rating value is ${min}')
    .max(100, 'Maximum rating value is ${max}')
    .required('Rating is required.'),
  text: yup
    .string(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewFormFields onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default ReviewForm;