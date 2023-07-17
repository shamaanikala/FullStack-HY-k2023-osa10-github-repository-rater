import { StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { truncateNumber } from "../../utils";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'aliceblue',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
  },
  ratingNumber: {
    fontSize: 19,
    color: theme.colors.primary,
  },
});

const ReviewRating = ({ rating }) => {
  // The rating is a value between 0-100
  const ratingValue = truncateNumber(Number(rating));
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" style={styles.ratingNumber}>
        {ratingValue}
      </Text>
    </View>
  );
};

export default ReviewRating;