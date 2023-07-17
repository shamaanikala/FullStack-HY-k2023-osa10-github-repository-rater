import { StyleSheet, View } from "react-native"
import Text from "../Text"
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'cyan',
    // borderWidth: 1,
    // borderStyle: 'dashed',
    flexDirection: 'row',
    flexGrow: 1,
    backgroundColor: theme.colors.contentBackground, //'ivory',
    paddingBottom: 15,
    paddingStart: 20,
  },
  emptyBox: {
    // backgroundColor: 'coral',
    minWidth: 50,
  },
  textBox: {
    // backgroundColor: 'cadetblue',
    marginStart: 15,
    marginRight: 20,
    paddingHorizontal: 18,
    alignItems: 'flex-start',
    maxWidth: '89%',
  },
})
const ReviewText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyBox} ></View>
      <View style={styles.textBox}>
        <Text fontSize="subheading">
          {text}
        </Text>
      </View>
    </View>
  );
};

export default ReviewText;