import { StyleSheet, View } from "react-native"
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
  },
  firstLineContainer: {
    backgroundColor: 'beige',
    borderWidth: 1,
  },
  secondLineContainer: {
    backgroundColor: 'cornsilk',
    borderWidth: 1,
  },
  firstLineText: {},
  secondLineText: {
    fontStyle: 'italic',
  },
});

const NoReviewsView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstLineContainer}>
        <Text style={styles.firstLineText}>
          You have not reviewed any GitHub repositories yet!
        </Text>
      </View>
      <View style={styles.secondLineContainer}>
        <Text style={styles.secondLineText}>
          Create a new GitHub repository review from the `&quot;`Create a review `&quot;` tab.
        </Text>
      </View>

    </View>
  );
};

export default NoReviewsView;