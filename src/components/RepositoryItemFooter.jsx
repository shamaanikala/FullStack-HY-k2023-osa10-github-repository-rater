import { View, StyleSheet } from "react-native"
import Text from "./Text"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16
  },
});

const FooterInfoItem = ({ value, label }) => {
  return (
    <View>
      <Text>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const RepositoryItemFooter = () => {
  return (
    <View style={styles.container}>
      <FooterInfoItem label="Stars" value='0' />
      <FooterInfoItem label="Forks" value='0' />
      <FooterInfoItem label="Reviews" value='0' />
      <FooterInfoItem label="Rating" value='0' />
    </View>
  );
};

export default RepositoryItemFooter;