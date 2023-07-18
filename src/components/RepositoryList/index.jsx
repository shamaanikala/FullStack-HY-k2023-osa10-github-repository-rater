import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState();
  const [orderDirection, setOrderDirection] = useState();

  const variables = { orderBy, orderDirection };
  console.log(variables);
  const { repositories } = orderBy || orderDirection
    ? useRepositories(variables)
    : useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
