import routers from '../routes';

const token = localStorage.getItem('user');
export default () => {
  routers.beforeEach((to, from, next) => {
    if (to.meta.auth && !token && from.name == null) {
      next({ name: 'definition' });
    }

    next();
  });
}

