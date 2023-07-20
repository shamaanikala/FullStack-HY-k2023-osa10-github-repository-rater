// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const defaultVariables = {
  orderBy: 'CREATED_AT',
  orderDirection: 'DESC',
  searchKeyword: undefined,
};

const useRepositories = (variables = defaultVariables ) => {
  // const [repositories, setRepositories] = useState();

  // console.log(`using variables: ${variables.orderBy} ${variables.orderDirection}`);
  // console.log('useRepositories quering with variables:\n', variables);
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading &&
      data?.repositories.pageInfo.hasNextPage;
    
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  // useEffect(() => {
  //   if (!loading) {
  //     setRepositories(data.repositories);
  //   }
  // }, [data, loading]);

  // return { repositories, loading, error, refetch };
  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
