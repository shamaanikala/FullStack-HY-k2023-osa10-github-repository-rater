// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPO_WITH_REVIEWS } from "../graphql/queries";

const useRepository = (variables) => {
  // const [repository, setRepository] = useState();
  console.log('useRepository:variables(as props):', variables);
  // const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPO_WITH_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading &&
      data?.repository.reviews?.pageInfo.hasNextPage;

    if(!canFetchMore) {
      console.log('useRepository: cannot fetch more reviews');
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  // useEffect(() => {
  //   if (!loading && data) {
  //     console.log('useRepo:useEffect:data: ',data);
  //     console.log(data.repository.reviews);
  //     setRepository(data.repository);
  //   }
  // }, [data, loading]);

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading, 
    ...result,
  };
};

export default useRepository;
