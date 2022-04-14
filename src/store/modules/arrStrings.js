const arrStringsModule = {
  namespaced: true,
  state: () => ({
    arrStrings: ['HTML', 'JavaScript', 'CSS', 'SASS', 'VUE.CLI'],
    arrStrings2: ['AAAABBBCCDAABBB'],
    arrStrings3: ['ABBCcAD'],
    arrStrings4: [1, 2, 2, 3, 3],
  }),
  getters: {
    arrStringsUnique2(state) {
      return state.arrStrings2
        .join(', ')
        .split('')
        .filter((item, index, self) => index === self.indexOf(item))
    },
    arrStringsUnique3(state) {
      return state.arrStrings3
        .join(', ')
        .split('')
        .filter((item, index, self) => index === self.indexOf(item))
    },
    arrStringsUnique4(state) {
      return state.arrStrings4.filter((item, index, self) => index === self.indexOf(item))
    },
  },
}

export default arrStringsModule
