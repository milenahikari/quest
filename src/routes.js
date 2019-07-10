import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import Login from './components/pages/Login.vue';
import Register from './components/pages/Login/Register.vue';
import UserData from './components/pages/Login/UserData.vue';
import UserContact from './components/pages/Login/UserContact.vue';
import Subject from './components/pages/Subject.vue';
import Success from './components/pages/Success.vue';
import Profile from './components/pages/Profile.vue';
import MyCourses from './components/pages/MyCourses.vue';

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
      path: '/user-data',
      name: 'user-data',
      component: UserData
    },
    {
      path: '/user-contact',
      name: 'user-contact',
      component: UserContact
    },
    {
      path: '/subject',
      name: 'subject',
      component: Subject
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/my-courses',
      name: 'my-courses',
      component: MyCourses
    }
  ]
});

export default routers;