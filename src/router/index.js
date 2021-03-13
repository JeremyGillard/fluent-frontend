import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewTerm from '../views/NewTerm.vue';
import Revision from '../views/Revision.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/newterm',
    name: 'newterm',
    component: NewTerm,
  },
  {
    path: '/revision',
    name: 'revision',
    component: Revision,
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

export default router;
