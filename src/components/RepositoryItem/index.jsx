import { StyleSheet, View, Button } from "react-native";
import RepositoryItemHeader from "../RepositoryItemHeader";
import RepositoryItemFooter from "../RepositoryItemFooter";
import theme from "../../theme";

// https://reactnative.dev/docs/flatlist?language=javascript
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'ivory',
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
  },
});

const RepositoryItem = (props) => {
  const repo = props.item;
  const viewSingleRepository = props.singleRepositoryView;
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
    <View testID="repositoryItem" style={styles.item}>
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
      {viewSingleRepository &&
        <Button
          style={styles.button}
          onPress={() => console.log('Open in GitHub pressed!')}
          title="Open in GitHub"
        />
      }
    </View>
  );
};

export default RepositoryItem;