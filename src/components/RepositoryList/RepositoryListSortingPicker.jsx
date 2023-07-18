import { View } from "react-native"
import { Picker } from "@react-native-picker/picker";


const RepositoryListSortingPicker = (stateProps) => {
  const {
    setOrderBy,
    setOrderDirection,
    selectedOption,
    setSelectedOption
  } = stateProps;

  const sortOptions = {
    latest: { orderBy: "CREATED_AT", orderDirection: 'DESC' },
    highestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
    lowestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
  };

  const handleValueChange = (value) => {
    setSelectedOption(value);
    setOrderBy(sortOptions[value].orderBy);
    setOrderDirection(sortOptions[value].orderDirection);
  };

  return (
    <View>
      <Picker
        prompt="Select sorting option..."
        selectedValue={selectedOption}
        onValueChange={itemValue =>
          handleValueChange(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRated" />
        <Picker.Item label="Lowest rated repositories" value="lowestRated" />
      </Picker>
    </View>
  );
};

export default RepositoryListSortingPicker;
