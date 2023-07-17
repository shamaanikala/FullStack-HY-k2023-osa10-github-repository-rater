import { StyleSheet, View } from "react-native"
import Text from "../Text"
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'cyan',
    borderWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
    flexGrow: 1,
    backgroundColor: theme.colors.contentBackground, //'ivory',
    paddingVertical: 15,
    paddingStart: 20,
    marginVertical: 5,
  },
  emptyBox: {
    backgroundColor: 'coral',
    minWidth: 50,
  },
  textBox: {
    backgroundColor: 'cadetblue',
    marginStart: 15,
    marginRight: 20,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    maxWidth: '89%',
    // marginHorizontal: 15,
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