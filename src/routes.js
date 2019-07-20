import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import Login from './components/pages/Login.vue';
import Register from './components/pages/Login/Register.vue';
import UserData from './components/pages/Login/UserData.vue';
import UserContact from './components/pages/Login/UserContact.vue';
import Subject from './components/pages/Subject.vue';
import Profile from './components/pages/Profile.vue';
import MyCourses from './components/pages/MyCourses.vue';
import About from './components/pages/About.vue';
import Values from './components/pages/Values.vue';
import Medals from './components/pages/Medals.vue';
import Monitor from './components/pages/Monitor.vue';
import MonitorContact from './components/pages/MonitorContact.vue';
import Alert from './components/pages/Alert.vue';

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
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/my-courses',
      name: 'my-courses',
      component: MyCourses
    },
    {
      path: '/quem-somos',
      name: 'quem-somos',
      component: About
    },
    {
      path: '/nossos-valores',
      name: 'nossos-valores',
      component: Values
    },
    {
      path: '/medals',
      name: 'medals',
      component: Medals
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: Monitor
    },
    {
      path: '/monitor-contact',
      name: 'monitor-contact',
      component: MonitorContact
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    }
  ]
});

export default routers;