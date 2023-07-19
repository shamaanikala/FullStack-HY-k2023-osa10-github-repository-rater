import { View } from "react-native"
import Text from "../Text"
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from 'use-debounce';

const RepositoryListFilter = (props) => {
  const {
    searchKeyword,
    setSearchKeyword,
  } = props;

  const onChangeFilter = useDebouncedCallback(
    value => setSearchKeyword(value),
    500
  );

  return (
    <View>
      <Text>Repository List Filter</Text>
      <Text>searchKeyword: {searchKeyword}</Text>
      <Searchbar
        placeholder="Filter repository list..."
        onChangeText={onChangeFilter}
        value={searchKeyword}
      />
    </View>
  );
};

export default RepositoryListFilter;
