import { View } from "react-native"
import Text from "../Text"
import { Searchbar } from "react-native-paper";

const RepositoryListFilter = (props) => {
  const {
    searchKeyword,
    setSearchKeyword,
  } = props;

  const onChangeFilter = value => setSearchKeyword(value);

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
