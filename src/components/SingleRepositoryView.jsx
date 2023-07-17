import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    marginBottom: 10,
  },
});

// Single repository info
const SingleRepositoryViewContainer = ({ repository }) => {

  if (repository) {
    return <RepositoryItem item={repository} viewOne />;
  }
};

const ReviewItem = ({ review }) => {
  // sinlge review item
  console.log(review);
  return (
    <View id="review-container">
      <View id="review-header">
        <Text>{review.rating}</Text>
        <Text>{review.user.username}</Text>
        <Text>{review.createdAt}</Text>
      </View>
      <View id="review-content">
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryView = () => {
  const { repoId } = useParams();

  const { repository } = useRepository(repoId);

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  // return <SingleRepositoryViewContainer repository={repository} />;
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <SingleRepositoryViewContainer repository={repository} />}
      ListHeaderComponentStyle={styles.listHeader}
      ItemSeparatorComponent={ItemSeparator}
    // ...
    />
  );

};

export default SingleRepositoryView;