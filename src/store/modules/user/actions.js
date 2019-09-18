export default {
  set_register(context, value) {
    context.commit('SET_REGISTER', value);
  },

  set_profile(context, value) {
    context.commit('SET_PROFILE', value);
  }

}