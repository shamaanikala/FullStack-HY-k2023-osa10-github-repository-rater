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
      // let repositoryItems;
      let firstRepositoryItem;
      let secondRepositoryItem;
      beforeEach(() => {
        render(
          <RepositoryListContainer repositories={repositories} />
        );
        const repositoryItems = screen.getAllByTestId('repositoryItem');

        [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      });
      // screen.debug();
      console.log(repositories.edges[0].node.fullName);

      const repoFullNames = repositories.edges.map(e => e.node.fullName);
      const repoDescriptions = repositories.edges.map(e => e.node.description);
      const repoLanguages = repositories.edges.map(e => e.node.language);

      describe('for first repositories list item', () => {
        it('textual elements within header are rendered correctly', () => {
          expect(firstRepositoryItem).toHaveTextContent(repoFullNames[0]);
          expect(firstRepositoryItem).toHaveTextContent(repoDescriptions[0]);
          expect(firstRepositoryItem).toHaveTextContent(repoLanguages[0]);

        });
        describe('repository info items are rendered correctly', () => {
          it('fork count', () => {
            expect(0).toEqual(1);
          });
          it('stargazers count', () => {
            expect(0).toEqual(1);
          });

          it('rating average', () => {
            expect(0).toEqual(1);
          });

          it('review count', () => {
            expect(0).toEqual(1);
          });
        });
      });
      describe('for second repositories list item', () => {
        it('textual elements within header are rendered correctly', () => {
          expect(secondRepositoryItem).toHaveTextContent(repoFullNames[1]);
          expect(secondRepositoryItem).toHaveTextContent(repoDescriptions[1]);
          expect(secondRepositoryItem).toHaveTextContent(repoLanguages[1]);
        });
      });
    });
  });
});