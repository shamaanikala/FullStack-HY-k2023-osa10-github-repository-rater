import { render, screen } from "@testing-library/react-native";
import { RepositoryListContainer } from "../RepositoryList";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    describe('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      let repositoryItems;
      beforeEach(() => {
        render(
          <RepositoryListContainer repositories={repositories} />
        );
        repositoryItems = screen.getAllByTestId('repositoryItem');
      });
      // screen.debug();
      console.log(repositories.edges[0].node.fullName);

      const repoFullNames = repositories.edges.map(e => e.node.fullName);
      it('for first repositories list item', () => {
        const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
        expect(firstRepositoryItem).toHaveTextContent(repoFullNames[0]);
      });
      it('for second repositories list item', () => {
        const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
        expect(secondRepositoryItem).toHaveTextContent(repoFullNames[1]);
      });
    });
  });
});