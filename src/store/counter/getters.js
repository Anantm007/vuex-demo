export default {
  testAuth(state, getters, rootState, rootGetters) {
    // return state.isLoggedIn; // Cannot use it directly as 'state' refers to only local state of this module
    return rootState.isLoggedIn; // Access entire store
  },
  finalCounter(state) {
    return state.counter;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;

    if (finalCounter > 100) {
      return 100;
    }

    return finalCounter;
  }
};
