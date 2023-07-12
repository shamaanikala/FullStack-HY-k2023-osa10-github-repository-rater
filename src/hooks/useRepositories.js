import { useState, useEffect } from "react";
// import Constants from 'expo-constants';
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
    // loading
    //   ? console.log('useEffect: loading',loading)
    //   : console.log('useEffect: data',data);
  }, [data, loading]);

  return { repositories, loading, error, refetch };
};

export default useRepositories;
