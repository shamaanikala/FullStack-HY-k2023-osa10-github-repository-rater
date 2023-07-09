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
    marginHorizontal: 16,
  },
  avatarContainer: {

  },
  headerContentContainer: {
    backgroundColor: 'lightblue',
    // paddingTop: 5,
    marginLeft: 10,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  itemTitle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.repoTitle,
  },
  itemDescription: {
    fontSize: theme.fontSizes.repoTitle - 2,
    color: theme.colors.textSecondary,
  },
  ownerAvatar: {
    width: 50,
    height: 50,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.appBarSecondary,
    borderRadius: 3,
    padding: 5,
    marginTop: 5,
  }
});

const RepositoryItemHeader = ({ avatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.ownerAvatar}
          source={{ uri: avatarUrl, }}
        />
      </View>
      <View style={styles.headerContentContainer}>
        <Text style={styles.itemTitle}>{fullName}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  )
}

export default RepositoryItemHeader;