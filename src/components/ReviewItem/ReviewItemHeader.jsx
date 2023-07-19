import { StyleSheet, View } from "react-native"
import ReviewRating from "./ReviewRating";
import ReviewItemHeaderInfo from "./ReviewHeaderInfo";
import theme from "../../theme";

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: 'blanchedalmond',
    // borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    backgroundColor: theme.colors.contentBackground, //'ivory',
    paddingTop: 15,
    paddingStart: 20,
  },
})

const ReviewItemHeader = ({ rating, title, createdAt }) => {
  return (
    <View style={styles.headerContainer}>
      <ReviewRating rating={rating} />
      <ReviewItemHeaderInfo title={title} createdAt={createdAt} />
    </View>
  );
};

export default ReviewItemHeader;