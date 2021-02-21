import gql from "graphql-tag";

export const GITHUB_REPO_SEARCH_QUERY = gql`
query ($userId: String!){
  user(login: $userId) {
    repositories(last: 50, isLocked: false) {
      totalCount
      nodes {
        createdAt
        description
        name
        url
        viewerPermission
      }
    }
  }
}
`;

