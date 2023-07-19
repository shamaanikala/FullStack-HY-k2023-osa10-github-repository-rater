import { View } from "react-native"
import Text from "../Text"

const RepositoryListFilter = (props) => {
  const {
    searchKeyword,
    setSearchKeyword,
  } = props;

  return (
    <View>
      <Text>Repository List Filter</Text>
      <Text>searchKeyword: {searchKeyword}</Text>
    </View>
  );
};

export default RepositoryListFilter;
