import { gql } from "@apollo/client";
import { REPOSITORY_DATA } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
         ...RepositoryData 
        }
      }
    }
  }
  ${REPOSITORY_DATA}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryData
      url
    }
  }
  ${REPOSITORY_DATA}
`;

// testing if this query works without 'query'
// like within the Apollo Sandbox
export const GET_SIGNED_USER = gql`
  {
    me {
      id
      username
    }
  }
`;