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
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        Full name: {props.item.fullName}
      </Text>
    </View>
  );
};

export default RepositoryItem;