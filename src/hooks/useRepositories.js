import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC'
    },
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
