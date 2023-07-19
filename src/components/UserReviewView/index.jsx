import { FlatList, View, StyleSheet } from "react-native"
import Text from "../Text"
import { useQuery } from "@apollo/client";
import { GET_SIGNED_USER } from "../../graphql/queries";
import ReviewItem from "../ReviewItem";
import { useEffect, useState } from "react";
import NoReviewsView from "./NoReviewsView";

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
  const [userInfo, setUserInfo] = useState({});
  const [userReviews, setUserReviews] = useState([]);

  const userQuery = useQuery(GET_SIGNED_USER, {
    variables: { includeReviews: true },
  });

  // if (userQuery.loading) {
  //   console.log('loading...');
  //   return (
  //     <View style={styles.container}>
  //       <Text>Loading user reviews...</Text>
  //     </View>
  //   );
  // }

  useEffect(() => {
    if (!userQuery.loading) {
      console.log('userQuery.data', userQuery.data);
      const { username, reviews, ...rest } = userQuery.data.me;
      setUserInfo({ username, id: rest.id });
      const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];
      setUserReviews(reviewNodes);
    }
  }, [])
  console.log(userReviews);

  return (
    <View style={styles.container}>
      <Text fontSize="heading" fontWeight="bold">
        {userInfo.username} reviews:
      </Text>
      <FlatList
        data={userReviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={<NoReviewsView />}
      />
    </View>
  );
};

export default UserReviewView;
