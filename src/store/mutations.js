export const mutations = {
    setUsersList(state, data) {
        state.usersList = data.data ? data.data.users.usersList : []
        state.total = data.data ? data.data.users.userCount :  0
    },

    setRepositoriesList(state, data) {
        let list = data.data ? data.data.user.repositories.list : []
        state.repositoriesList = (Array.isArray(list) ? list : []).map(item => item.detail) || {}
    }
}