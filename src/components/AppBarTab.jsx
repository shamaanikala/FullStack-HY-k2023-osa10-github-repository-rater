import { StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  title: {
    color: theme.colors.appBarSecondary,
    paddingStart: '5%',
    paddingTop: '7%',
    paddingEnd: '5%',
  },
});

const AppBarTab = ({ title }) => {
  return (
    <Text
      fontSize="header"
      fontWeight="bold"
      style={styles.title}
    >
      {title}
    </Text>
  );
};

export default AppBarTab;