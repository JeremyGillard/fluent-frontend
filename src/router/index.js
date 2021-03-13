import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewTerm from '../views/NewTerm.vue';
import Revision from '../views/Revision.vue';
import Login from '../views/Login.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/newterm',
    name: 'newterm',
    component: NewTerm,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/revision',
    name: 'revision',
    component: Revision,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.user) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
