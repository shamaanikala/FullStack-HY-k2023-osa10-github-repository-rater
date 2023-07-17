import { StyleSheet, View } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
});

const ReviewRating = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Text>{rating}</Text>
    </View>
  );
};

export default ReviewRating;