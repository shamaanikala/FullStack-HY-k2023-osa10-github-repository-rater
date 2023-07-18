import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const defaultVariables = {
  orderBy: 'CREATED_AT',
  orderDirection: 'DESC'
};

const useRepositories = (variables = defaultVariables ) => {
  const [repositories, setRepositories] = useState();

  console.log(`using variables: ${variables.orderBy} ${variables.orderDirection}`);
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  }, [data, loading]);

  return { repositories, loading, error, refetch };
};

export default useRepositories;
