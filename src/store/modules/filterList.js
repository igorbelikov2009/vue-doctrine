const filterListModule = {
  namespaced: true,
  state: () => ({
    filterList: [1, 2, 3, 4, 'a', 'b', 'c', 'd'],
  }),
  getters: {
    filterListNumber(state) {
      let listNumber = []
      for (let i = 0; i < state.filterList.length; i++) {
        let val = state.filterList[i]

        if (typeof val === 'number') {
          listNumber.push(val)
        }
      }
      return listNumber
    },
    filterListString(state) {
      let listString = []
      for (let i = 0; i < state.filterList.length; i++) {
        let val = state.filterList[i]

        if (typeof val === 'string') {
          listString.push(val)
        }
      }
      return listString
    },
  },
}

export default filterListModule
