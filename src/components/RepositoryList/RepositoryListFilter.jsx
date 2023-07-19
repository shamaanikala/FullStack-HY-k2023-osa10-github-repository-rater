import { View } from "react-native"
import Text from "../Text"
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from 'use-debounce';

const RepositoryListFilter = (props) => {
  const {
    searchKeyword,
    setSearchKeyword,
  } = props;

  // this works only with onChange which is not usable 
  // with <Searchbar>?
  const onChangeFilter = useDebouncedCallback(
    value => setSearchKeyword(value),
    500
  );

  // const onChangeFilter = value => setSearchKeyword(value);

  return (
    <View>
      <Text>Repository List Filter</Text>
      <Text>searchKeyword: {searchKeyword}</Text>
      <Searchbar
        placeholder="Filter repository list..."
        onChangeText={(text) => onChangeFilter(text)}
        value={searchKeyword}
      />
    </View>
  );
};

export default RepositoryListFilter;
