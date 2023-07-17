import { StyleSheet, View } from "react-native"
import Text from "../Text"

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  emptyBox: {
    backgroundColor: 'coral',
  },
  textBox: {
    backgroundColor: 'cadetblue',
  },
})
const ReviewText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyBox} ></View>
      <View style={styles.textBox}>
        <Text>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default ReviewText;