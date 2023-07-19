import { View } from "react-native"
import Text from "../Text"
import { useQuery } from "@apollo/client";
import { GET_SIGNED_USER } from "../../graphql/queries";

const UserReviewView = () => {
  const userQuery = useQuery(GET_SIGNED_USER, {
    variables: { includeReviews: true },
  });

  if (userQuery.loading) {
    console.log('loading...');
  } else {
    console.log(userQuery.data);
  }

  return (
    <View>
      <Text>
        User Review View
      </Text>
    </View>
  );
};

export default UserReviewView;
