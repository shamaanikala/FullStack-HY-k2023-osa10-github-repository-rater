import { useQuery } from "@apollo/client";

import { GET_REPO_WITH_REVIEWS } from "../graphql/queries";

const useRepository = (variables) => {
  // console.log('useRepository:variables(as props):', variables);
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPO_WITH_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading &&
      data?.repository.reviews?.pageInfo.hasNextPage;

    if(!canFetchMore) {
      // console.log('useRepository: cannot fetch more reviews');
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading, 
    ...result,
  };
};

export default useRepository;
