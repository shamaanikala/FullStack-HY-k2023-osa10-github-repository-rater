import { View } from "react-native"
import ReviewForm from "./ReviewForm";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";

const CreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    // const { ownerName, reposityName, rating, text } = review;
    await mutate({ variables: review });
  };

  const onSubmit = async (values) => {
    console.log('create a new review pressed');
    console.log(values);
    await createReview({ review: values });
  };

  if (result) {
    console.log('result:', result);
  }

  return (
    <View>
      <ReviewForm onSubmit={onSubmit} />
    </View>
  );
};

export default CreateReview;
