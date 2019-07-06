import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import Login from './components/pages/Login.vue';
import Register from './components/pages/Login/Register.vue';
import Profile from './components/pages/Login/Profile.vue';
import Contact from './components/pages/Login/Contact.vue';

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});

export default routers;