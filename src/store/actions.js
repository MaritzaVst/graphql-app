import { QUERY_USERS, QUERY_REPOSITORIES } from '@/graphql'
import graphqlClient from '../utils/graphql';

export const actions = {
    async getUsers( {commit}, { name, count} ) {
        const response = await graphqlClient.query({
            query: QUERY_USERS,
            variables: {
                first: count,
                name: name
            }
        })
        commit('setUsersList', response)
    },
    async getRepositoriesList( { commit }, name ) {
        const response = await graphqlClient.query({
            query: QUERY_REPOSITORIES,
            variables: {
                name: name
            }
        })
        commit('setRepositoriesList', response)
    }
}