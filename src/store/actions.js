import { QUERY_USERS, QUERY_REPOSITORIES } from '@/graphql'
import graphqlClient from '../utils/graphql';

export const actions = {
    async getUsers( {commit, state}, { name, count, isNext} ) {
        let variables
        if(isNext !== undefined) {
            if(isNext) variables = { first: count, name: name, endCursor: state.endCursor }
            else variables = { first: count, name: name, startCursor: state.startCursor }
        } else {
            variables = { first: count, name: name }
        }

        const response = await graphqlClient.query({
            query: QUERY_USERS,
            variables: variables
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