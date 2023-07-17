import { StyleSheet, View } from "react-native"
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'blueviolet',
  },
});

const ReviewItemHeaderInfo = ({ username, createdAt }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{username}</Text>
      <Text>{createdAt}</Text>
    </View>
  );
};

export default ReviewItemHeaderInfo;