import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "../RepositoryItem";
import RepositoryListHeaderContainer from "./RepositoryListHeaderContainer";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, ...stateProps }) => {
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
      // ListHeaderComponent={() => <RepositoryListSortingPicker {...stateProps} />}
      ListHeaderComponent={() => <RepositoryListHeaderContainer {...stateProps} />}
    // ListHeaderComponentStyle={styles.listHeader}
    />
  );
};

export default RepositoryListContainer;