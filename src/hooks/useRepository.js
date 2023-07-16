import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const [repository, setRepository] = useState();

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId },
  });
  
  useEffect(() => {
    if (!loading) {
      setRepository(data.repository);
    }
  }, [data, loading]);

  return { repository, loading, error, refetch };
};

export default useRepository;
