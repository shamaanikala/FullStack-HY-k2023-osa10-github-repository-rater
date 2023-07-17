import { Button, StyleSheet, View } from "react-native"
import FormikTextInput from "../FormikTextInput";
import { Formik } from "formik";
import theme from "../../theme";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.contentBackground,
  },
  textInput: {},
  button: {},
});

const ReviewFormFields = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.textInput} name="repoOwnerName" placeholder="Reposity Owner name" />
      <FormikTextInput style={styles.textInput} name='repoName' placeholder="Reposity name" />
      <FormikTextInput style={styles.textInput} name='rating' placeholder="Rating between 0 and 100" />
      <FormikTextInput style={styles.textInput} name="review" multiline placeholder="Review" />
      <Button
        style={styles.button}
        onPress={onSubmit}
        title="Create a review"
      />
    </View>
  );
};

const ReviewForm = () => {
  const onSubmit = async (values) => {
    console.log('create a new review pressed');
    console.log(values);
  };

  return (
    <View>
      <Formik
        initialValues={{ repoOwnerName: '', repoName: '', rating: '', review: '' }}
        onSubmit={onSubmit}
      // validationSchema={}
      >
        {({ handleSubmit }) => <ReviewFormFields onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default ReviewForm;