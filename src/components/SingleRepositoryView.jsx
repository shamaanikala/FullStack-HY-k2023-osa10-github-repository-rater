import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const RepositoryViewContainer = ({ repository }) => {

  if (repository) {
    return <RepositoryItem item={repository} viewOne />;
  }
};

const SingleRepositoryView = () => {
  const { repoId } = useParams();

  const { repository } = useRepository(repoId);

  return <RepositoryViewContainer repository={repository} />;
};

export default SingleRepositoryView;