import gql from 'graphql-tag'

export const QUERY_USERS = gql`
    query searchUsers($first: Int! $name: String!) { 
        users: search(first: $first query: $name type: USER ) {
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
            
        }
    }
`