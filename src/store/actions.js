import { POST_QUERY } from "@/graphql/data" 
import { QUERY_USERS } from '@/graphql'
import graphqlClient from '../utils/graphql';

export const actions = {
    async getData({ commit }) {
        const response = await graphqlClient.query({
            query: POST_QUERY,
			variables: {
				"login": "MaritzaVst"
			}
        })
        console.log(response)
        commit('setData', response)
    },

    async getUsers( {commit}, { name, count} ) {
        const response = await graphqlClient.query({
            query: QUERY_USERS,
            variables: {
                first: count,
                name: name
            }
        })
        commit('setUsersList', response)
    }
}