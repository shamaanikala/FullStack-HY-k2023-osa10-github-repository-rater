import { render, screen, within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../RepositoryList";
import { truncateNumber } from "../../utils";

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
      let repoItems;
      beforeEach(() => {
        render(
          <RepositoryListContainer repositories={repositories} />
        );
        const repositoryItems = screen.getAllByTestId('repositoryItem');

        [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

        repoItems = [firstRepositoryItem, secondRepositoryItem];
        // console.log(firstRepositoryItem);
      });
      // screen.debug();
      console.log(repositories.edges[0].node.fullName);

      const repoFullNames = repositories.edges.map(e => e.node.fullName);
      const repoDescriptions = repositories.edges.map(e => e.node.description);
      const repoLanguages = repositories.edges.map(e => e.node.language);

      const forksCounts = repositories.edges.map(e => e.node.forksCount);
      const starCounts = repositories.edges.map(e => e.node.stargazersCount);
      const reviewsCounts = repositories.edges.map(e => e.node.reviewCount);
      const ratingAverages = repositories.edges.map(e => e.node.ratingAverage);

      describe.only('for repositories list item', () => {
        // can't use repoItems.length here, using hard coded value 2
        for (let i = 0; i < 2; i++) {
          describe(`for item ${i + 1}`, () => {
            it('textual elements within header are rendered correctly', () => {
              expect(repoItems[i]).toHaveTextContent(repoFullNames[i]);
              expect(repoItems[i]).toHaveTextContent(repoDescriptions[i]);
              expect(repoItems[i]).toHaveTextContent(repoLanguages[i]);

            });
            describe('repository info items are rendered correctly', () => {
              let stars, forks, reviews, rating;
              beforeEach(() => {
                const infoItems = within(repoItems[i]).getAllByTestId('infoItem');
                [stars, forks, reviews, rating] = infoItems;
              });

              it('forks count', () => {
                expect(repoItems[i]).toHaveTextContent('Forks');
                expect(forks).toHaveTextContent('Forks');
                const forkValue = within(forks).getByTestId('infoItemValue');
                expect(forkValue).toHaveTextContent(truncateNumber(forksCounts[i]));
              });

              it('stargazers count', () => {
                expect(repoItems[i]).toHaveTextContent('Stars');
                expect(stars).toHaveTextContent('Stars');
                const starValue = within(stars).getByTestId('infoItemValue');
                expect(starValue).toHaveTextContent(truncateNumber(starCounts[i]));

              });

              it('rating average', () => {
                expect(repoItems[i]).toHaveTextContent('Rating');
                expect(rating).toHaveTextContent('Rating');
                const ratingValue = within(rating).getByTestId('infoItemValue');
                expect(ratingValue).toHaveTextContent(truncateNumber(ratingAverages[i]));
              });

              it('review count', () => {
                expect(repoItems[i]).toHaveTextContent('Reviews');
                expect(reviews).toHaveTextContent('Reviews');
                const reviewValue = within(forks).getByTestId('infoItemValue');
                expect(reviewValue).toHaveTextContent(truncateNumber(reviewsCounts[i]));
              });
            });
          });
        }
      });
    });
  });
});