import { FlatList, View, StyleSheet } from "react-native"
import Text from "../Text"
import { useQuery } from "@apollo/client";
import { GET_SIGNED_USER } from "../../graphql/queries";
import ReviewItem from "../ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: 'pink',
    padding: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const UserReviewView = () => {
  const userQuery = useQuery(GET_SIGNED_USER, {
    variables: { includeReviews: true },
  });

  if (userQuery.loading) {
    console.log('loading...');
    return (
      <View style={styles.container}>
        <Text>Loading user reviews...</Text>
      </View>
    );
  }

  console.log('userQuery.data', userQuery.data);
  const { username, reviews, ...rest } = userQuery.data.me;
  const reviewItems = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];
  console.log(reviewItems);
  return (
    <View style={styles.container}>
      <Text fontSize="heading" fontWeight="bold">
        {username} reviews:
      </Text>
      <FlatList
        data={reviewItems}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default UserReviewView;
