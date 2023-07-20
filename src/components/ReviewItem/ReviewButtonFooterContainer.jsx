import { useMutation } from "@apollo/client";
import { Button, View, StyleSheet, Alert } from "react-native"
import { useNavigate } from "react-router";
import { DELETE_REVIEW, GET_SIGNED_USER } from "../../graphql/mutations";

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
const DeleteReviewButton = ({ reviewId }) => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    onError: error => {
      console.log(error);
      if (error.graphQLErrors) {
        console.log(error.graphQLErrors[0].message);
        // setErrorMessage(error.graphQLErrors[0].message);
        Alert.alert(
          'Error',
          `Unable to delete review: ${error.graphQLErrors[0].message}`,
          [{ text: 'Ok', style: 'cancel' }],
        );
      }
    },
    onCompleted: data => {
      console.log(data);
      Alert.alert('Delete review success!', '', [{ text: 'Ok' }]);
    },
    // https://stackoverflow.com/questions/50084178/how-to-pass-a-variables-for-refetchqueries-in-apollo
    refetchQueries: [
      {
        query: GET_SIGNED_USER,
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network',
      }
    ],
  });

  const deleteReview = async (deleteReviewId) => {
    console.log('deleteReview: deleting review with id', deleteReviewId);
    console.log({ variables: deleteReviewId });
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
          // onPress: () => Alert.alert(`Deleting review with id ${id}`),
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
const ReviewButtonFooterContainer = ({ repositoryId, reviewId }) => {

  return (
    <View style={styles.container}>
      <ViewRepositoryButton repositoryId={repositoryId} />
      <DeleteReviewButton reviewId={reviewId} />
    </View>
  );
};

export default ReviewButtonFooterContainer;
