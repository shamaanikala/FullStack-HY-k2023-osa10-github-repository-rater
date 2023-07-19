import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [selectedOption, setSelectedOption] = useState('latest');

  const variables = { orderBy, orderDirection };

  const { repositories } = orderBy || orderDirection
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
