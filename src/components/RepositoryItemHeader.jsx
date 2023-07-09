import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  avatarContainer: {

  },
  headerContentContainer: {
    backgroundColor: 'lightblue',
    // paddingTop: 5,
    marginLeft: 10,
  },
  itemTitle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  itemDescription: {
    fontSize: theme.fontSizes.subheading,
  },
  ownerAvatar: {
    width: 50,
    height: 50,
  },
});

const RepositoryItemHeader = ({ ownerAvatarUrl }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.ownerAvatar}
          source={{ uri: ownerAvatarUrl, }}
        />
      </View>
      <View style={styles.headerContentContainer}>
        <Text style={styles.itemTitle}>User/repository</Text>
        <Text style={styles.itemDescription}>Repo description text </Text>
      </View>
    </View>
  )
}

export default RepositoryItemHeader;