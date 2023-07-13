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