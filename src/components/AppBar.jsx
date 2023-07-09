import { View, StyleSheet, Pressable } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
// import { useState } from "react";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    height: '15%',
    opacity: 0.95, // 0.95 with material example color, 0.85
  },
});

const AppBar = () => {
  // const [presses, setPresses] = useState(0);

  const handlePress = () => {
    // setPresses(presses + 1);
    // console.log(`AppBar tab pressed! (${presses})`);
    console.log('AppBarTab pressed!');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        {/* <AppBarTab title={`Repositories ${presses}`} /> */}
        <AppBarTab title="Repositories" />
      </Pressable>
    </View>
  );
};

export default AppBar;
