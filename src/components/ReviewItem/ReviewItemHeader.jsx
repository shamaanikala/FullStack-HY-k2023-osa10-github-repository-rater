import { StyleSheet, View } from "react-native"
import ReviewRating from "./ReviewRating";
import ReviewItemHeaderInfo from "./ReviewHeaderInfo";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blanchedalmond',
    borderWidth: 1,
    flexDirection: 'row',
  },
})

const ReviewItemHeader = ({ rating, username, createdAt }) => {
  return (
    <View style={styles.headerContainer}>
      <ReviewRating rating={rating} />
      <ReviewItemHeaderInfo username={username} createdAt={createdAt} />
    </View>
  );
};

export default ReviewItemHeader;