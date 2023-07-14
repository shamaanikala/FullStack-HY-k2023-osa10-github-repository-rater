import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_SIGNED_USER } from "../graphql/queries";
import { useEffect, useState } from "react";
import { useAuthStorage } from "../hooks/useAuthStorage";

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
  const userQuery = useQuery(GET_SIGNED_USER);
  const [signedUser, setSignedUser] = useState(null);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  useEffect(() => {
    if (userQuery.loading) {
      return;
    }

    if (userQuery.data && userQuery.data.me) {
      if (userQuery.data.me !== null) {
        console.log('Logged user detected:', userQuery.data.me);
        setSignedUser(userQuery.data.me);
      } else {
        setSignedUser(null);
      }
    }
  }, [userQuery]);

  const handleSignOut = async () => {
    console.log(`Signin out ${signedUser.username}...`);
    console.log('resetting components react state...')
    setSignedUser(null);
    console.log('Removing the accessToken from authStorage...');
    await authStorage.removeAccessToken();
    console.log('Removed the accessToken');
    console.log('Resetting the Apollo Client Store');
    await apolloClient.resetStore();
    console.log('Apollo Client Store resetted');
  };

  // <Pressable> doesn't work if <Link> is its child
  // <Link> does not work if it has <Pressable> as child
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview} horizontal>
        <Link to="/">
          <AppBarTab title="Repositories" />
        </Link>
        {!signedUser &&
          <Link to="/signin">
            <AppBarTab title="Sign In" />
          </Link>
        }
        {signedUser &&
          // <Link to="/">
          <Pressable onPress={handleSignOut}>
            <AppBarTab title="Sign Out" />
          </Pressable>
          // </Link>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;
