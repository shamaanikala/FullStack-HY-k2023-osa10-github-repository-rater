import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { FlatList, View, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";

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

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryView = () => {
  const { repositoryId } = useParams();

  const first = 5; // default $first for infinity scrolling
  const { repository, fetchMore } = useRepository({ repositoryId, first });

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} view="repository" />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <SingleRepositoryViewContainer repository={repository} />}
      ListHeaderComponentStyle={styles.listHeader}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    // ...
    />
  );

};

export default SingleRepositoryView;