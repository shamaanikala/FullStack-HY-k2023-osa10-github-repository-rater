import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
// import Text from './Text';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        {/* <Text>Rate Repository Application</Text> */}
        <RepositoryList />
      </View>
    </>
  );
};

export default Main;
