import { Button, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 15,
  },
  button: {
    // fontSize: theme.fontSizes.header,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

const ViewRepositoryButton = ({ repositoryId }) => {
  return (
    <Button
      onPress={() => console.log(`View repository: ${repositoryId}`)}
      title="View repository"
    />
  );
};
const DeleteReviewButton = ({ reviewId }) => {
  return (
    <Button
      onPress={() => console.log(`Delete review: ${reviewId}`)}
      title="Delete review"
      color="red"
    />
  );
};
const ReviewButtonFooterContainer = ({ repositoryId = 'dummy-repo-id', reviewId = 'dummy-review-id' }) => {
  return (
    <View style={styles.container}>
      <ViewRepositoryButton style={styles.button} repositoryId={repositoryId} />
      <DeleteReviewButton style={styles.button} reviewId={reviewId} />
    </View>
  );
};

export default ReviewButtonFooterContainer;
