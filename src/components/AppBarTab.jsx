import { StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSizes.header,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.appBarSecondary,
    paddingStart: '5%',
    paddingTop: '7%',
  },
});

const AppBarTab = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
};

export default AppBarTab;