import { View, StyleSheet } from "react-native"
import Text from "./Text"
import { truncateNumber } from "../utils";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'lightgray',
    // padding: 10,
    marginBottom: 15,
    marginHorizontal: 16
  },
  infoItemContainer: {
    justifyContent: 'center',
    backgroundColor: 'ivory',
    minWidth: 55,
    // height: 55,
    aspectRatio: 1,
  },
  infoItemValue: {
    textAlign: 'center',
  },
  infoItemLabel: {
    textAlign: 'center',
  }
});

const FooterInfoItem = ({ value, label }) => {
  const renderValue = truncateNumber(value);
  return (
    <View style={styles.infoItemContainer}>
      <Text
        fontWeight="bold"
        fontSize="subheading"
        style={styles.infoItemValue}
      >{renderValue}</Text>
      <Text
        fontSize="subheading"
        color="textPrimary"
        style={styles.infoItemLabel}
      >{label}</Text>
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