export default {
  async login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  async logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
