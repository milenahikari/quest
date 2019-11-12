import Vue from 'vue';
import VueRouter from 'vue-router';

import Definition from './components/pages/Definition.vue';
import Home from './components/pages/Home.vue';
import Login from './components/pages/Login.vue';
import Register from './components/pages/Register/Register.vue';
import UserData from './components/pages/Register/UserData.vue';
import UserContact from './components/pages/Register/UserContact.vue';
import Subject from './components/pages/Subject.vue';
import SubjectRegister from './components/pages/SubjectRegister.vue';
import Profile from './components/pages/Profile.vue';
import MyCourses from './components/pages/MyCourses.vue';
import About from './components/pages/About.vue';
import Values from './components/pages/Values.vue';
import Medals from './components/pages/Medals.vue';
import Monitor from './components/pages/Monitor.vue';
import Evaluation from './components/pages/Evaluation.vue';
import QrCode from './components/pages/QrCode.vue';
import MonitorContact from './components/pages/MonitorContact.vue';
import Alert from './components/pages/Alert.vue';
import EditCourse from './components/pages/EditCourse.vue';
import AddContact from './components/pages/AddContact.vue';
import Teste from './components/pages/Teste.vue';

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/teste',
      name: 'teste',
      component: Teste
    },
    {
      path: '/definition',
      name: 'definition',
      component: Definition
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true,
      }
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
      path: '/subject-register',
      name: 'subject-register',
      component: SubjectRegister
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
      path: '/monitor/:idMonitor',
      props: true,
      name: 'monitor',
      component: Monitor
    },
    {
      path: '/monitor-contact/',
      name: 'monitor-contact',
      component: MonitorContact
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/qr-code',
      name: 'qr-code',
      component: QrCode
    },
    {
      path: '/edit-course/:idCourse',
      props: true,
      name: 'edit-course',
      component: EditCourse
    },
    {
      path: '/add-contact',
      name: 'add-contact',
      component: AddContact
    }
  ]
});

export default routers;