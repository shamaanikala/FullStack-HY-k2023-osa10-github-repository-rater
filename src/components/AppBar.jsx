import { View, StyleSheet, Pressable } from "react-native";
import Constants from 'expo-constants';
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    // backgroundColor: 'black',
    height: '15%',
    opacity: 0.95, // 0.95 with material example color, 0.85
  },
  header: {
    fontSize: theme.fontSizes.header,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.appBarSecondary,
    paddingStart: '5%',
    paddingTop: '7%',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('AppBar tab pressed!')}>
        <Text style={styles.header}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
