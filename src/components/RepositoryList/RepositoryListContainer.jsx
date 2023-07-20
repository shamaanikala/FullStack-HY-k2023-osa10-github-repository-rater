import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "../RepositoryItem";
import { RepositoryListHeaderContainer } from "./RepositoryListHeaderContainer";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  headerContainer: {
    // backgroundColor: 'pink',
    padding: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, onEndReach, ...stateProps }) => {
  // Get the node from the edge array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
      // ListHeaderComponent={() => <RepositoryListHeaderContainer {...stateProps} />}
      // Do not use arrow function, but that seems to require to use class component 
      // https://aryan-mittal.medium.com/react-native-searchbar-in-flatlist-loses-focus-after-typing-239c84a2e7ca
      ListHeaderComponent={<RepositoryListHeaderContainer {...stateProps} />}
      ListHeaderComponentStyle={styles.headerContainer}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;