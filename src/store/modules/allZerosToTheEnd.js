const allZerosToTheEndModule = {
  namespaced: true,
  state: () => ({
    arrayZeros1: [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
    arrayZeros2: [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
  }),
  //   getters: {
  //     moveZerosFanc(state) {
  //       let i = state.length - 1
  //       while (i--) {
  //         if (state[i] === 0) {
  //           state.push(state.splice(i, 1)[0])
  //           // unshift
  //         }
  //       }
  //       return state
  //     },
  //     moveZeros1(state, getters) {
  //       return getters.moveZerosFanc(state, arrayZeros1)
  //     },
  //   },
}

export default allZerosToTheEndModule
