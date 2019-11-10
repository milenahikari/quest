import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import VueQRCodeComponent from 'vue-qrcode-component';

import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue';
import middleware from './utils/middleware';
import Routes from './routes.js';
import store from './store/index';

import './assets/css/reset.css';
import './assets/css/public.css';
import './registerServiceWorker'

middleware();
Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: 'fa'
});

Vue.component('qr-code', VueQRCodeComponent);

new Vue({
  render: h => h(App),
  router: Routes,
  store,
}).$mount('#app');
