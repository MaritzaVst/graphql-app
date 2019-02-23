export const mutations = {
    setUsersList(state, data) {
        state.usersList = data.data.users.usersList || 0
        state.total = data.data.users.userCount || 0
    },

    setRepositoriesList(state, data) {
        let list = data.data.user.repositories.list
        state.repositoriesList = (Array.isArray(list) ? list : []).map(item => item.detail) || {}
    }
}