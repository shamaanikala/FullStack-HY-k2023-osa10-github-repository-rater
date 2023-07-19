import { StyleSheet, View } from "react-native"
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
  },
});

const NoReviewsView = () => {
  return (
    <View style={styles.container}>
      <Text>
        You have not reviewed any GitHub repositories yet!
      </Text>
      <Text>
        Create a new GitHub repository review from the `&quot;`Create a review `&quot;` tab.
      </Text>
    </View>
  );
};

export default NoReviewsView;