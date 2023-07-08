import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Testataan console.log');
  // console.error('Testataan console.error');
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app!
		
        Hei! 😸
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
