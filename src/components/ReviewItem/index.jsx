import { View } from "react-native";
import Text from "../Text";

const ReviewItem = ({ review }) => {
  // sinlge review item
  console.log(review);
  return (
    <View id="review-container">
      <View id="review-header">
        <Text>{review.rating}</Text>
        <Text>{review.user.username}</Text>
        <Text>{review.createdAt}</Text>
      </View>
      <View id="review-content">
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem;