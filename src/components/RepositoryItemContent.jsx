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


const RepositoryItemContent = () => {
  return (
    <View style={styles.container}>
      <Text>Repository item content</Text>
    </View>
  );
};

export default RepositoryItemContent;