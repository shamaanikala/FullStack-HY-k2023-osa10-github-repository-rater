import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'ivory',
    paddingVertical: 15,
    paddingStart: 20,
    marginVertical: 5,
  },
  avatarContainer: {},
  headerContentContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  itemDescription: {
    fontSize: theme.fontSizes.heading - 2,
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
    marginTop: 15,
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
        <Text fontSize="heading" fontWeight="bold">
          {fullName}
        </Text>
        <Text color="textSecondary" style={styles.itemDescription}>{description}</Text>
        <Text fontSize="subheading" style={styles.language}>{language}</Text>
      </View>
    </View>
  )
}

export default RepositoryItemHeader;