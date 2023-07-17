import { StyleSheet, View } from "react-native";
import ReviewItemHeader from "./ReviewItemHeader";
import ReviewText from "./ReviewText";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'chocolate',
    // borderWidth: 1.5,
    // padding: 3,
    backgroundColor: theme.colors.contentBackground,
  },
});

const ReviewItem = ({ review }) => {
  // sinlge review item
  const headerItems = {
    rating: review.rating,
    username: review.user.username,
    createdAt: review.createdAt,
  };

  return (
    <View style={styles.container} id="review-container">
      <ReviewItemHeader {...headerItems} />
      <ReviewText text={review.text} />
    </View>
  )
}

export default ReviewItem;