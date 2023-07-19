import { View } from "react-native"
import RepositoryListSortingPicker from "./RepositoryListSortingPicker"
import RepositoryListFilter from "./RepositoryListFilter";

const RepositoryListHeaderContainer = (stateProps) => {
  const {
    searchKeyword,
    setSearchKeyword,
    ...sortingProps
  } = stateProps;

  return (
    <View>
      <RepositoryListFilter
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <RepositoryListSortingPicker {...sortingProps} />
    </View>
  );
};

export default RepositoryListHeaderContainer;
