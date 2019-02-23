import gql from "graphql-tag";

export const POST_QUERY = gql`
    query($login: String!) {
        user(login: $login) {
            id
            ...ParamsRequired
        }
    }
    fragment ParamsRequired on User {
        name
        company
    }
`