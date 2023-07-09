/* eslint-disable no-unused-vars */
import { StyleSheet, View } from "react-native";
import Text from "./Text";

// https://reactnative.dev/docs/flatlist?language=javascript
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
});

/**
 * repoStrings object
 * 
 * Contains the strings that will be rendered
 * as keys to the repository values within
 * <FlatLine> renderItems.
 */
const repoStrings = {
  fullName: 'Full name',
  description: 'Description',
  language: 'Language',
  stargazersCount: 'Stars',
  forksCount: 'Forks',
  reviewCount: 'Reviews',
  ratingAverage: 'Rating',
}

const RepositoryItem = (props) => {
  const repo = props.item;
  // console.log(repo);

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

  // console.log(rest);
  // Object.entries() will return a array of [key, value] "tuples"
  return (
    <View style={styles.item}>
      {Object.entries(repo)
        .filter(v => !Object.keys(rest).includes(v[0]))
        .map((v, i) =>
          <Text key={i}>{repoStrings[v[0]]}: {v[1]}</Text>
        )}
    </View>
  );
};

export default RepositoryItem;