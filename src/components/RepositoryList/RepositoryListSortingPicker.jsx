import { View } from "react-native"
import Text from "../Text"
import { Picker } from "@react-native-picker/picker";
// import { useEffect, useState } from "react";


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

  // const [selectedOption, setSelectedOption] = useState('latest');
  console.log(selectedOption);

  const handleValueChange = (value) => {
    setSelectedOption(value);
    setOrderBy(sortOptions[value].orderBy);
    setOrderDirection(sortOptions[value].orderDirection);
  };

  // useEffect(() => {
  //   if (selectedOption) {
  //     setOrderBy(sortOptions[selectedOption].orderBy);
  //     setOrderDirection(sortOptions[selectedOption].orderDirection);
  //   }
  // }, [selectedOption])
  return (
    <View>
      <Text>
        RepositoryList Sorting Picker
      </Text>
      <Picker
        prompt="Select sorting option..."
        selectedValue={selectedOption}
        onValueChange={itemValue =>
          // setSelectedOption(itemValue)
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
