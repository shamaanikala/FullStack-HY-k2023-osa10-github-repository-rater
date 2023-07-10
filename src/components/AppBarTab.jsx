import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    color: theme.colors.appBarSecondary,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginHorizontal: 7,
    // backgroundColor: 'pink',
  },
});

const AppBarTab = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text
        fontSize="heading"
        fontWeight="bold"
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );
};

export default AppBarTab;