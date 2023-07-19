import { StyleSheet, View } from "react-native"
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.contentBackground,
    padding: 15,
  },
  firstLineContainer: {
    // backgroundColor: 'beige',
    paddingVertical: 15,
    alignItems: 'center',
    // borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: theme.colors.primary,
  },
  secondLineContainer: {
    // backgroundColor: 'cornsilk',
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: theme.colors.primary,
  },
  firstLineText: {
    paddingVertical: 10,
  },
  secondLineText: {
    fontStyle: 'italic',
  },
});

const NoReviewsView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstLineContainer}>
        <Text fontSize="subheading" fontWeight="bold" style={styles.firstLineText}>
          You have not reviewed any GitHub repositories yet!
        </Text>
      </View>
      <View style={styles.secondLineContainer}>
        <Text style={styles.secondLineText}>
          Create a new GitHub repository review by pressing the
        </Text>
        <Text fontSize="subheading" fontWeight="bold" style={styles.firstLineText}>Create a review</Text>
        <Text style={styles.secondLineText}>
          tab from top navigation bar.
        </Text>
      </View>

    </View>
  );
};

export default NoReviewsView;