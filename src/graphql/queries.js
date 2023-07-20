import { gql } from "@apollo/client";
import { PAGE_INFO, REPOSITORY_DATA, REVIEW_DATA } from "./fragments";

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

export const GET_REPO_WITH_REVIEWS = gql`
  query (
      $repositoryId: ID!,
      $first: Int,
      $after: String
      ) {
    repository(
      id: $repositoryId) {
      ...RepositoryData
      reviews (first: $first, after: $after) {
        edges {
          cursor
          node {
            ...ReviewData 
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${REPOSITORY_DATA}
  ${REVIEW_DATA}
  ${PAGE_INFO}
`;

// IF USING FRAGMENT IN FRAGMENT,
// BOTH NEEDS TO BE REFERENCED HERE WITH
// ${FRAG_NAME}

export const GET_SIGNED_USER = gql`
  query getCurrentUser(
      $includeReviews: Boolean = false,
      $first: Int,
      $after: String
    ) {
    me {
      id
      username
      reviews (first: $first, after: $after)
        @include(if: $includeReviews)
        {
        edges {
          cursor
          node {
            ...ReviewData
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${REVIEW_DATA}
  ${PAGE_INFO}
`;
