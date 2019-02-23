import { POST_QUERY } from "@/graphql/data" 
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
    }
}