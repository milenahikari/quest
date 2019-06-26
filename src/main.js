import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import '@fortawesome/fontawesome-free/css/all.css' 

import App from './App.vue';
import Routes from './routes.js';

import './assets/css/reset.css';
import './assets/css/public.css';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: 'fa'
});

new Vue({
  render: h => h(App),
  router: Routes
}).$mount('#app');
