import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { credentials } from '../../config/credentials'

const httpLink = new HttpLink({
    uri: credentials.uri,
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

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    connectToDevTools: true
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

Vue.use(VueApollo) 

export default apolloProvider