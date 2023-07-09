import { StyleSheet, View } from "react-native";
import RepositoryItemHeader from "./RepositoryItemHeader";
// import RepositoryItemContent from "./RepositoryItemContent";
import RepositoryItemFooter from "./RepositoryItemFooter";

// https://reactnative.dev/docs/flatlist?language=javascript
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'ivory',
    // padding: 20,
    marginVertical: 5,
    // marginHorizontal: 16
  },
});

/**
 * repoStrings object
 * 
 * Contains the strings that will be rendered
 * as keys to the repository values within
 * <FlatLine> renderItems.
 */
// const repoStrings = {
//   fullName: 'Full name',
//   description: 'Description',
//   language: 'Language',
//   stargazersCount: 'Stars',
//   forksCount: 'Forks',
//   reviewCount: 'Reviews',
//   ratingAverage: 'Rating',
// }

const RepositoryItem = (props) => {
  const repo = props.item;

  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    // eslint-disable-next-line no-unused-vars
    ...rest
  } = repo;

  return (
    <View style={styles.item}>
      <RepositoryItemHeader
        avatarUrl={repo.ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <RepositoryItemFooter
        stars={stargazersCount}
        forks={forksCount}
        reviews={reviewCount}
        rating={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;