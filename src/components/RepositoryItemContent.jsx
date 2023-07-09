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


const RepositoryItemContent = ({ language }) => {
  return (
    <View style={styles.container}>
      <Text>{language}</Text>
    </View>
  );
};

export default RepositoryItemContent;