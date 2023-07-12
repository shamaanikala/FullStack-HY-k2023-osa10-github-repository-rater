import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useState, useEffect } from "react";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [repositories, setRepositories] = useState();
  // const NGROK_URL = 'http://localhost:5000';
  const NGROK_URL = Constants.manifest.extra.NGROK_URL;

  const fetchRepositories = async () => {
    const URL = `${NGROK_URL}/api/repositories`;
    console.log(URL);
    const response = await fetch(URL);
    const json = await response.json();

    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

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

export default RepositoryList;
