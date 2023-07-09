import { View, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16
  },
  infoItemContainer: {
    justifyContent: 'center',
    backgroundColor: 'ivory',
    borderStyle: 'solid',
    minWidth: 55,
    // height: 55,
    aspectRatio: 1,
  },
  infoItemValue: {
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
  },
  infoItemLabel: {
    textAlign: 'center',
    color: theme.colors.textPrimary,
  }
});

const FooterInfoItem = ({ value, label }) => {
  return (
    <View style={styles.infoItemContainer}>
      <Text style={styles.infoItemValue}>{value}</Text>
      <Text style={styles.infoItemLabel}>{label}</Text>
    </View>
  );
};

const RepositoryItemFooter = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <FooterInfoItem label="Stars" value={stars} />
      <FooterInfoItem label="Forks" value={forks} />
      <FooterInfoItem label="Reviews" value={reviews} />
      <FooterInfoItem label="Rating" value={rating} />
    </View>
  );
};

export default RepositoryItemFooter;