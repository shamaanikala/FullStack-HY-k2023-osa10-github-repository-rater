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
    // backgroundColor: 'grey',
  },
  avatarContainer: {

  },
  headerContentContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    // flexWrap: 'wrap',
  },
  itemDescription: {
    fontSize: theme.fontSizes.heading - 2,
    color: theme.colors.textSecondary,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
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
        <Text
          fontSize="heading"
          fontWeight="bold"
        >
          {fullName}
        </Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  )
}

export default RepositoryItemHeader;