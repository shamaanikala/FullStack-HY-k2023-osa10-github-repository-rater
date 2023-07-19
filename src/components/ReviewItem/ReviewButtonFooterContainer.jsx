import { Button, View, StyleSheet, Alert } from "react-native"
import { useNavigate } from "react-router";

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
  const deleteAlert = (id) => {
    console.log('Deleting review', id);
    Alert.alert(
      'Delete review', // alert title
      'Are you sure you want to delete this review?', // alert message
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => Alert.alert('Delete pressed {id}'),
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
