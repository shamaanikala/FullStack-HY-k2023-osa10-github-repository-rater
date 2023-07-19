import { View } from "react-native"
import Text from "../Text"
import { Searchbar } from "react-native-paper";
import { useDebounce } from 'use-debounce';

const RepositoryListFilter = (props) => {
  const {
    searchKeyword,
    setSearchKeyword,
  } = props;

  const [debouncedValue] = useDebounce(searchKeyword, 400);

  const onChangeFilter = value => setSearchKeyword(value);

  return (
    <View>
      <Text>Repository List Filter</Text>
      <Text>searchKeyword: {searchKeyword}</Text>
      <Text>debouncedValue: {debouncedValue}</Text>
      <Searchbar
        placeholder="Filter repository list..."
        onChangeText={onChangeFilter}
        value={searchKeyword}
      />
    </View>
  );
};

export default RepositoryListFilter;
