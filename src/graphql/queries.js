import { gql } from "@apollo/client";
import { PAGE_INFO, REPOSITORY_DATA, REPO_WITH_REVIEW_DATA, REVIEW_DATA } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories(
      $orderBy: AllRepositoriesOrderBy,
      $orderDirection: OrderDirection,
      $searchKeyword: String   
      $first: Int,
      $after: String
    ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after
      ) {
      pageInfo {
        ...PageInfo 
      }
      edges {
        cursor
        node {
          ...RepositoryData
        }
      }
    }
  }
  ${PAGE_INFO}
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

export const GET_REPO_REVIEWS = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
        edges {
          node {
            ...ReviewData 
          }
        }
      }
    }
  }
  ${REVIEW_DATA}
`;

// IF USING FRAGMENT IN FRAGMENT,
// BOTH NEEDS TO BE REFERENCED HERE WITH
// ${FRAG_NAME}
export const GET_REPO_WITH_REVIEWS = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDataWithReviews
    }
  }
  ${REPO_WITH_REVIEW_DATA}
  ${REVIEW_DATA}
`;


// testing if this query works without 'query'
// like within the Apollo Sandbox
export const GET_SIGNED_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews){
        edges {
          node {
            ...ReviewData
          }
        }
      }
    }
  }
  ${REVIEW_DATA}
`;
