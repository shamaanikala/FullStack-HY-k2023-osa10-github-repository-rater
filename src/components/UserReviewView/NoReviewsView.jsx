import { Button, StyleSheet, View } from "react-native"
import Text from "../Text";
import theme from "../../theme";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.contentBackground,
    padding: 15,
  },
  firstLineContainer: {
    // backgroundColor: 'beige',
    paddingVertical: 15,
    alignItems: 'center',
    // borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: theme.colors.primary,
  },
  secondLineContainer: {
    // backgroundColor: 'cornsilk',
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: theme.colors.primary,
  },
  middleContainer: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.primary,
  },
  firstLineText: {
    paddingVertical: 10,
  },
  secondLineText: {
    fontStyle: 'italic',
  },
  middleLineText: {
    marginTop: 15,
    fontStyle: 'italic',
  },
  button: {

  },
});

const NoReviewsView = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.firstLineContainer}>
        <Text fontSize="subheading" fontWeight="bold" style={styles.firstLineText}>
          You have not reviewed any GitHub repositories yet!
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <Button
          onPress={() => navigate('/newreview')}
          title="Create a review"
          style={styles.button}
          color={theme.colors.primary}
        />
      </View>
      <View style={styles.secondLineContainer}>
        <Text style={styles.middleLineText}>or press</Text>
        <Text fontSize="subheading" fontWeight="bold" style={styles.firstLineText}>Create a review</Text>
        <Text style={styles.secondLineText}>
          tab from top navigation bar.
        </Text>
      </View>
    </View>
  );
};

export default NoReviewsView;
