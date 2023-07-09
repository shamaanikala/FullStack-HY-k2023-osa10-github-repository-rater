import { StyleSheet, View } from "react-native";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryItemFooter from "./RepositoryItemFooter";

// https://reactnative.dev/docs/flatlist?language=javascript
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'ivory',
  },
});

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
    ...rest
  } = repo;

  return (
    <View style={styles.item}>
      <RepositoryItemHeader
        avatarUrl={rest.ownerAvatarUrl}
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