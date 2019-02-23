import gql from "graphql-tag";

export const QUERY_REPOSITORIES = gql`
    query repositories($order: RepositoryOrder $name: String!){ 
        user(login: $name) {
            repositories(orderBy: $order first: 10) {
            list: edges {
                detail: node {
                    name
                    description
                    pullRequests {
                        totalCount
                    }
                }
            }
        }
    }
}
`