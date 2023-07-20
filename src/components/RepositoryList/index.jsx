import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  // Picker states and variables
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [selectedOption, setSelectedOption] = useState('latest');
  // repository filtering states and variables
  const [searchKeyword, setSearchKeyword] = useState('');

  const variables = { orderBy, orderDirection, searchKeyword };
  const first = 8; // first variable for pagination

  const { repositories, fetchMore } = orderBy || orderDirection || searchKeyword
    ? useRepositories({ first, ...variables })
    : useRepositories({ first });

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    onEndReach={onEndReach}
    setOrderBy={setOrderBy}
    setOrderDirection={setOrderDirection}
    selectedOption={selectedOption}
    setSelectedOption={setSelectedOption}
    searchKeyword={searchKeyword}
    setSearchKeyword={setSearchKeyword}
  />;
};

export default RepositoryList;
