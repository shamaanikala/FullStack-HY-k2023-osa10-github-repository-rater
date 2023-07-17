import { StyleSheet, View } from "react-native"
import Text from "../Text";
import { formatDate } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'blueviolet',
  },
});

const ReviewItemHeaderInfo = ({ username, createdAt }) => {
  const formattedCreatedAt = formatDate(createdAt);

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{username}</Text>
      <Text>{formattedCreatedAt}</Text>
    </View>
  );
};

export default ReviewItemHeaderInfo;