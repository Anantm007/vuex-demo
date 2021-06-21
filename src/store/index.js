import { createStore } from 'vuex';

// Index
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

// Counter Module
import counterModule from './counter';

// Main store
const store = createStore({
  /**
   * All modules to use here, no need to change any config.
   * Components can use it as normal if no name clashes and no namespaces
   * we need to use 'counter' in components since module is namespaced
   */
  modules: {
    counter: counterModule
  },
  // State of the app
  state() {
    return {
      isLoggedIn: false
    };
  },

  // Used to update state, should not be directly used in components
  mutations: rootMutations,

  // Allow async code, it should be called directly in components, name can be same as mutations or diff
  actions: rootActions,

  // Return data, no state updations here
  getters: rootGetters
});

export default store;
