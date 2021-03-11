import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewTerm from '../views/NewTerm.vue';
import Revision from '../views/Revision.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/newterm',
    name: 'New Term',
    component: NewTerm,
  },
  {
    path: '/revision',
    name: 'Revision',
    component: Revision,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
