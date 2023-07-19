import { StyleSheet, View } from "react-native";
import ReviewItemHeader from "./ReviewItemHeader";
import ReviewText from "./ReviewText";
import theme from "../../theme";
import ReviewButtonFooterContainer from './ReviewButtonFooterContainer';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'chocolate',
    // borderWidth: 1.5,
    // padding: 3,
    backgroundColor: theme.colors.contentBackground,
  },
});

const ReviewItem = ({ review, view }) => {
  // sinlge review item
  const headerItems = {
    rating: review.rating,
    title: view === 'repository' ? review.user.username : review.repository.fullName,
    createdAt: review.createdAt,
  };

  return (
    <View style={styles.container} id="review-container">
      <ReviewItemHeader {...headerItems} />
      <ReviewText text={review.text} />
      <ReviewButtonFooterContainer />
    </View>
  );
};

export default ReviewItem;