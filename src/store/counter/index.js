import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';

// Counter module (sub-store)
const counterModule = {
  namespaced: true, // uniquely indentify. no these cannot be accessed by components as before
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};

export default counterModule;
