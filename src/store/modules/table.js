import axios from 'axios'

export default {
  actions: {
    async axiosUsers(context, limit = 170) {
      const { data } = await axios('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)

      context.commit('updateUsers', data)
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    },
  },
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users
    },
  },
}
