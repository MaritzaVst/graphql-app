export const mutations = {
    setData(state, data) {
        state.data = data.data
    },

    setUsersList(state, data) {
        state.usersList = data.data.users.usersList || 0
        state.total = data.data.users.userCount || 0
    }
}