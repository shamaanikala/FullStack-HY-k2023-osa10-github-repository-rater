import { useMutation } from "@apollo/client";
import { Button, View, StyleSheet, Alert } from "react-native"
import { useNavigate } from "react-router";
import { DELETE_REVIEW } from "../../graphql/mutations";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 15,
  },
});

const ViewRepositoryButton = ({ repositoryId }) => {
  const navigate = useNavigate();
  return (
    <Button
      onPress={() => navigate(`/${repositoryId}`)}
      title="View repository"
    />
  );
};
const DeleteReviewButton = ({ reviewId, userRefetch }) => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    onError: error => {
      console.log(error);
      if (error.graphQLErrors) {
        console.log(error.graphQLErrors[0].message);
        Alert.alert(
          'Error',
          `Unable to delete review: ${error.graphQLErrors[0].message}`,
          [{ text: 'Ok', style: 'cancel' }],
        );
      }
    },
    // eslint-disable-next-line no-unused-vars
    onCompleted: async data => {
      Alert.alert('Delete review success!', '', [{ text: 'Ok' }]);
      await userRefetch({ includeReviews: true });
    },
  });

  const deleteReview = async (deleteReviewId) => {
    await mutate({ variables: deleteReviewId });
  };

  const handleDeleteReviewPress = async (id) => {
    await deleteReview({ deleteReviewId: id });
  };

  const deleteAlert = (id) => {
    console.log('Deleting review', id);
    Alert.alert(
      'Delete review', // alert title
      'Are you sure you want to delete this review?', // alert message
      [ // buttons array: cancel, confirm
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => handleDeleteReviewPress(id),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <Button
      onPress={() => deleteAlert(reviewId)}
      title="Delete review"
      color="red"
    />
  );
};
const ReviewButtonFooterContainer = ({ repositoryId, reviewId, userRefetch }) => {

  return (
    <View style={styles.container}>
      <ViewRepositoryButton repositoryId={repositoryId} />
      <DeleteReviewButton reviewId={reviewId} userRefetch={userRefetch} />
    </View>
  );
};

export default ReviewButtonFooterContainer;
