import { FlatList, View, StyleSheet } from "react-native"
import Text from "../Text"
import { useQuery } from "@apollo/client";
import { GET_SIGNED_USER } from "../../graphql/queries";
import ReviewItem from "../ReviewItem";
import NoReviewsView from "./NoReviewsView";
import AddNewReviewButton from "./AddNewReviewButton";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: 'pink',
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
      <FlatList
        data={userReviews}
        renderItem={({ item }) =>
          <ReviewItem review={item} view="user" userRefetch={userQuery.refetch} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={<NoReviewsView />}
        ListHeaderComponent={<AddNewReviewButton />}
        ListHeaderComponentStyle={{ marginBottom: 5, }}
      />
    </View>
  );
};

export default UserReviewView;
