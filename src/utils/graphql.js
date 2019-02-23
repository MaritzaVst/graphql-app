import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
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

const cache = new InMemoryCache()

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
})