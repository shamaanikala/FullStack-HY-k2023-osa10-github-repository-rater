import { FlatList, View, StyleSheet } from "react-native"
import Text from "../Text"
import { useQuery } from "@apollo/client";
import { GET_SIGNED_USER } from "../../graphql/queries";
import ReviewItem from "../ReviewItem";
import NoReviewsView from "./NoReviewsView";
import AddNewReviewFooter from "./AddNewReviewFooter";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    // padding: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const UserReviewView = () => {
  const userQuery = useQuery(GET_SIGNED_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  if (userQuery.loading) {
    return (
      <View style={styles.container}>
        <Text>Loading user reviews...</Text>
      </View>
    );
  }

  let userReviews = [];
  let userInfo = {};

  if (!userQuery.loading && userQuery.data.me) {
    const { username, id, reviews } = userQuery.data.me;
    // eslint-disable-next-line no-unused-vars
    userInfo = { username, id };
    userReviews = reviews
      ? reviews.edges.map(edge => edge.node)
      : [];
  }

  return (
    <View style={styles.container}>
      {/* <Text fontSize="heading" fontWeight="bold"> */}
      {/* {userInfo.username} reviews: */}
      {/* </Text> */}
      <FlatList
        data={userReviews}
        renderItem={({ item }) =>
          <ReviewItem review={item} view="user" userRefetch={userQuery.refetch} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={<NoReviewsView />}
        ListFooterComponent={<AddNewReviewFooter />}
      />
    </View>
  );
};

export default UserReviewView;
