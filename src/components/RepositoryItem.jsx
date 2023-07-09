import { StyleSheet, View, Text } from "react-native";

// https://reactnative.dev/docs/flatlist?language=javascript
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32,
  },
});

const RepositoryItem = (props) => {
  const repo = props.item;
  console.log(repo);
  const {
    fullName,
    description,
    language,
    stargazerCount,
    forksCount,
    reviewCount,
    ratingAverage
  } = repo;
  return (
    <View style={styles.item}>
      {Object.values(repo).map((v, i) => <Text key={i}>{v}</Text>)}
    </View>
  );
};

export default RepositoryItem;