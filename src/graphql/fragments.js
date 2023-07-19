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
    }
    user {
      id
      username
    }
  }
`;

export const REPO_WITH_REVIEW_DATA = gql`
  fragment RepositoryDataWithReviews on Repository {
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    url
    id
    reviews {
      edges {
        node {
          ...ReviewData
        }
      }
    }
  }
`;
