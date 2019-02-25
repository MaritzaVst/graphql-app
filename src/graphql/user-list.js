import gql from 'graphql-tag'

export const QUERY_USERS = gql`
    query searchUsers($first: Int! $name: String! $startCursor: String $endCursor: String) { 
        users: search(first: $first query: $name type: USER after: $endCursor before: $startCursor) {
            usersList: nodes {
                __typename
                ... on User {
                    avatarUrl
                    name
                    location
                    userName: login
                }
            }
            userCount
            pageInfo {
                endCursor
                startCursor
            }
        }
    }
`