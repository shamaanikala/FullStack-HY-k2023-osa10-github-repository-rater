import { Button, View, StyleSheet } from "react-native"
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
  return (
    <Button
      onPress={() => console.log(`Delete review: ${reviewId}`)}
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
