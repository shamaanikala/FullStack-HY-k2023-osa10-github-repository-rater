import { View, StyleSheet } from "react-native"
import Text from "./Text"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16
  },
});

const RepositoryItemFooter = () => {
  return (
    <View style={styles.container}>
      <Text>Repository item footer</Text>
    </View>
  );
};

export default RepositoryItemFooter;