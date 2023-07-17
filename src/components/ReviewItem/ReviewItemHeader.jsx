import { StyleSheet, View } from "react-native"
import Text from "../Text";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blanchedalmond',
    borderWidth: 1,
    flexDirection: 'row',
  },
})

const ReviewItemHeader = ({ rating, username, createdAt }) => {
  return (
    <View style={styles.headerContainer}>
      <Text>{rating}</Text>
      <Text>{username}</Text>
      <Text>{createdAt}</Text>
    </View>
  );
};

export default ReviewItemHeader;