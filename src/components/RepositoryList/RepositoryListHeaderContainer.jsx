import { View } from "react-native"
import RepositoryListSortingPicker from "./RepositoryListSortingPicker"

const RepositoryListHeaderContainer = (stateProps) => {
  return (
    <View>
      <RepositoryListSortingPicker {...stateProps} />
    </View>
  );
};

export default RepositoryListHeaderContainer;
