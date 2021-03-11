import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewTerm from '../views/NewTerm.vue';
import Revision from '../views/Revision.vue';

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;