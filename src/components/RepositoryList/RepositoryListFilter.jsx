import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDebounce } from 'use-debounce';
import theme from "../../theme";

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: theme.colors.contentBackground,
    borderRadius: 5,
  },
});

const RepositoryListFilter = (props) => {
  const {
    searchKeyword,
    setSearchKeyword,
  } = props;

  // eslint-disable-next-line no-unused-vars
  const [debouncedValue] = useDebounce(searchKeyword, 400);

  const onChangeFilter = value => setSearchKeyword(value);

  return (
    <Searchbar
      placeholder="Filter repository list..."
      onChangeText={onChangeFilter}
      value={searchKeyword}
      style={styles.searchBar}
    />
  );
};

export default RepositoryListFilter;
