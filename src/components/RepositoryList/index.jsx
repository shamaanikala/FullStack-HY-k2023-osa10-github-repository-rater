import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "../RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
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
    // other props
    />
  );
};


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState();
  const [orderDirection, setOrderDirection] = useState();

  const variables = { orderBy, orderDirection };
  console.log(variables);
  const { repositories } = orderBy || orderDirection
    ? useRepositories(variables)
    : useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
