import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPO_WITH_REVIEWS } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const [repository, setRepository] = useState();

  // const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
  const { data, error, loading, refetch } = useQuery(GET_REPO_WITH_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId },
  });
  
  useEffect(() => {
    if (!loading && data) {
      // console.log('useRepo:useEffect:data: ',data);
      // console.log(data.repository.reviews);
      setRepository(data.repository);
    }
  }, [data, loading]);

  return { repository, loading, error, refetch };
};

export default useRepository;
