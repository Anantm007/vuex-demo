export default {
  async increment(context) {
    context.commit('increment');
  },
  async increase(context, payload) {
    context.commit('increase', payload);
  }
};
