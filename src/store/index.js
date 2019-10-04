import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user/root';
import monitors from './modules/monitors/root';
import category from './modules/category/root';
import auth from './modules/auth/root';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, monitors, category, auth },
  plugins: [createPersistedState({
    paths: ['user', 'category', 'auth']
  })],
})