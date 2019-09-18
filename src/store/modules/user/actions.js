export default {
  set_user(context, value) {
    context.commit('SET_USER', value);
  },

  set_profile(context, value) {
    context.commit('SET_PROFILE', value);
  }

}