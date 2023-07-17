import { StyleSheet, View } from "react-native"
import ReviewForm from "./ReviewForm";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";
import { useState } from "react";
import Text from "../Text";

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
});

const CreateReview = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [mutate, result] = useMutation(CREATE_REVIEW, {
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
  });

  const createReview = async (review) => {
    // const { ownerName, reposityName, rating, text } = review;
    await mutate({ variables: review });
  };

  const onSubmit = async (values) => {
    console.log(values);
    // cast rating to int
    const review = { ...values, rating: parseInt(values.rating) };
    await createReview({ review });
  };

  if (result) {
    console.log('result:', result);
  }

  return (
    <View>
      {errorMessage &&
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      }
      <ReviewForm onSubmit={onSubmit} />
    </View>
  );
};

export default CreateReview;
