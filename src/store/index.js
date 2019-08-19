import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user/root';
import category from './modules/category/root';

Vue.use(Vuex);

export default new Vuex.Store ({
  modules: { user, category }
})