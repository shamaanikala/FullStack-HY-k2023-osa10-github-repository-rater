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

  const { repositories } = orderBy || orderDirection || searchKeyword
    ? useRepositories(variables)
    : useRepositories();

  return <RepositoryListContainer
    repositories={repositories}
    setOrderBy={setOrderBy}
    setOrderDirection={setOrderDirection}
    selectedOption={selectedOption}
    setSelectedOption={setSelectedOption}
  />;
};

export default RepositoryList;
