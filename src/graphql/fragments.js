import { gql } from "@apollo/client";

export const REPOSITORY_DATA = gql`
 fragment RepositoryData on Repository {
  fullName
  description
  language
  stargazersCount
  forksCount
  reviewCount
  ratingAverage
  ownerAvatarUrl
  id
 }
`;

export const REVIEW_DATA = gql`
  fragment ReviewData on Review {
    id
    text
    rating
    createdAt
    repository {
      fullName
      id
    }
    user {
      id
      username
    }
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfo on PageInfo {
    endCursor
    startCursor
    hasNextPage
  }
`;
