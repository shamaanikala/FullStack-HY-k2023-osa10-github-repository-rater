import { StyleSheet, View, Button, Pressable } from "react-native";
import RepositoryItemHeader from "../RepositoryItemHeader";
import RepositoryItemFooter from "../RepositoryItemFooter";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import { useEffect, useState } from "react";

// https://reactnative.dev/docs/flatlist?language=javascript
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'ivory',
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
  },
});

const RepositoryItem = ({ item, viewOne = false }) => {
  const repo = item;
  const [repoPressed, setRepoPressed] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (repoPressed !== null) {
      console.log(`Navigating to repo id ${repoPressed}`);
      navigate(`/${repoPressed}`);
      setRepoPressed(null);
    }
  }, [repoPressed]);

  const handleRepoPress = (id) => {
    setRepoPressed(id);
  };

  const RepositoryItemInfo = ({ repo }) => {


    const {
      fullName,
      description,
      language,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,
      ...rest
    } = repo;

    return (
      <View testID="repositoryItem" style={styles.item}>
        <RepositoryItemHeader
          avatarUrl={rest.ownerAvatarUrl}
          fullName={fullName}
          description={description}
          language={language}
        />
        <RepositoryItemFooter
          stars={stargazersCount}
          forks={forksCount}
          reviews={reviewCount}
          rating={ratingAverage}
        />
      </View>
    );
  };


  return viewOne
    ?
    <View>
      <RepositoryItemInfo repo={repo} />
      <Button
        style={styles.button}
        onPress={() => console.log(`Open in GitHub pressed! link: ${repo.url}`)}
        title="Open in GitHub"
      />
    </View>
    :
    <View>
      <Pressable onPress={() => handleRepoPress(repo.id)}>
        <RepositoryItemInfo repo={repo} />
      </Pressable>
    </View>;
};

export default RepositoryItem;