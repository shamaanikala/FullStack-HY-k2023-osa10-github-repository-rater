import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  ownerAvatar: {
    width: 50,
    height: 50,
  },
});

const RepositoryItemHeader = ({ ownerAvatarUrl }) => {
  return (
    <View>
      <Image
        style={styles.ownerAvatar}
        source={{ uri: ownerAvatarUrl, }}
      />
    </View>
  )
}

export default RepositoryItemHeader;