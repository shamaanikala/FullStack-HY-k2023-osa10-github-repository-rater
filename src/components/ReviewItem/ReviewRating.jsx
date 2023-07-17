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
  ratingNumberSmall: {
    fontSize: 21,
    color: theme.colors.primary,
  },
  ratingNumberLarge: {
    fontSzie: 17,
    color: theme.colors.primary,
  }
});

const ReviewRating = ({ rating }) => {
  // the container can handle three digits only
  // => use truncated values when rating > 999
  console.log(rating);
  const ratingValue = truncateNumber(Number(rating));
  return (
    <View style={styles.container}>
      <Text
        fontWeight="bold"
        style={(rating < 1000)
          ? styles.ratingNumberSmall
          : styles.ratingNumberLarge}>
        {ratingValue}
      </Text>
    </View>
  );
};

export default ReviewRating;