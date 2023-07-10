import { View, StyleSheet, ScrollView } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
// import { useState } from "react";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    height: '15%',
    opacity: 0.95, // 0.95 with material example color, 0.85
    flexGrow: 1,
    maxHeight: '15%',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  scrollview: {
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'blue',
  },
});

const AppBar = () => {
  // const [presses, setPresses] = useState(0);

  // const handlePress = () => {
  //   // setPresses(presses + 1);
  //   // console.log(`AppBar tab pressed! (${presses})`);
  //   console.log('AppBarTab pressed!');
  // };

  // <Pressable> doesn't work if <Link> is its child
  // <Link> does not work if it has <Pressable> as child
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview} horizontal>
        <Link to="/">
          <AppBarTab title="Repositories" />
        </Link>
        <Link to="/signin">
          <AppBarTab title="Sign In" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
