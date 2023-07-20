import { Pressable, StyleSheet, View } from "react-native"
import Text from "../Text";
import theme from "../../theme";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.contentBackground,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  footerContentContainer: {
    // borderColor: theme.colors.mainBackground,
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 5,
  },
  plusButtonContainer: {
    width: 80,
    height: 80,
    // padding: 5,
    borderRadius: 80 / 2,
    borderWidth: 1,
    // alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'silver',
  },
  plusButton: {
    color: 'silver',

  },
});

const AddNewReviewFooter = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.footerContentContainer}>
        <Pressable onPress={() => navigate('/newreview')}>
          <View style={styles.plusButtonContainer}>
            <Text style={styles.plusButton} fontSize="plusbutton">+</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default AddNewReviewFooter;
