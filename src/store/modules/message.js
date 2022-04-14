export default {
  actions: {
    async fetchMessages(ctx) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      const messages = await response.json()

      ctx.commit('updateMessages', messages)
    },
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages
    },
  },
  state: {
    messages: [],
  },
  getters: {
    allMessages(state) {
      return state.messages
    },
  },
}
