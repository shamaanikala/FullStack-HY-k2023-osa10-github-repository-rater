import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const RepositoryViewContainer = ({ repository }) => {

  if (repository) {
    console.log(`Trying to pass ${repository.id} to <RepoItem> with data:`);
    return <RepositoryItem item={repository} viewOne />;
  }
};

const RepositoryView = () => {
  const { repoId } = useParams();
  console.log('repositoryView: repoId', repoId);

  const { repository, loading } = useRepository(repoId);

  console.log(loading);
  console.log(repository);
  console.log(`Starting to render repo id ${repoId} `);
  return <RepositoryViewContainer repository={repository} />;
};

export default RepositoryView;