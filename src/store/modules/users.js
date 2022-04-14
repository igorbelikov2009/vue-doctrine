const usersModule = {
  namespaced: true,
  state: () => ({
    vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
    petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
    masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
  }),
  getters: {
    users(state) {
      return [state.vasya, state.petya, state.masha]
    },
    sortByAge(state, getters) {
      return getters.users.slice().sort((a, b) => (a.age > b.age ? 1 : -1))
    },
    sortByName(state, getters) {
      return getters.users.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
    },
    sortBySurname(state, getters) {
      return getters.users.slice().sort((a, b) => (a.surname > b.surname ? 1 : -1))
    },
    sortById(state, getters) {
      return getters.users.slice().sort((a, b) => (a.id > b.id ? 1 : -1))
    },
  },
}

export default usersModule
