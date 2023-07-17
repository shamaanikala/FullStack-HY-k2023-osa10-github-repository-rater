import { StyleSheet, View } from "react-native"
import Text from "../Text";
import { formatDate } from "../../utils";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // backgroundColor: 'blueviolet',
    marginStart: 15,
    marginRight: 20,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  username: {

  },
  date: {

    fontSize: theme.fontSizes.heading - 2,
  },
});

const ReviewItemHeaderInfo = ({ username, createdAt }) => {
  const formattedCreatedAt = formatDate(createdAt);

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="heading" style={styles.username}>{username}</Text>
      <Text color="textSecondary" style={styles.date}>{formattedCreatedAt}</Text>
    </View>
  );
};

export default ReviewItemHeaderInfo;