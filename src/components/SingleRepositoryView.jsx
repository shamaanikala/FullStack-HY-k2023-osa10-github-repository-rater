import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { FlatList } from "react-native";

// Single repository info
const SingleRepositoryViewContainer = ({ repository }) => {

  if (repository) {
    return <RepositoryItem item={repository} viewOne />;
  }
};

const ReviewItem = ({ review }) => {
  // sinlge review item
  console.log(review);
}

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
    // ...
    />
  );

};

export default SingleRepositoryView;