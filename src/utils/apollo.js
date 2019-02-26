import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { from } from 'apollo-link';
import { setContext } from 'apollo-link-context'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { credentials } from '../../config/credentials'
import { onError } from "apollo-link-error";
import fetch from 'unfetch'


const httpLink = new HttpLink({
    uri: credentials.uri,
    fetch: fetch
})
  
const authLink = setContext((_, { headers }) => {
    const token = credentials.token
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
        __schema: {
          types: []
        }
    },
});

const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
    fragmentMatcher,
})

const error = onError(({ graphQLErrors, networkError, networkStatus }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.log(
                `[GraphQL error]: Message: ${message}, Location: ${ JSON.stringify(locations)}, Path: ${path}`
            )
        )
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const apolloClient = new ApolloClient({
    link: from ([
        error,
        authLink.concat(httpLink)
    ]),
    cache,
    connectToDevTools: true
})

export default apolloClient