import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      transition: 'slide-up'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      transition: 'slide-down'
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    meta: {
      transition: 'slide-right'
    },
  },
  {
    path: '/about-me',
    name: 'About Me',
    component: () => import('../views/Me.vue'),
    meta: {
      transition: 'slide-right'
    },
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue'),
    meta: {
      transition: 'slide-left'
    },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
    meta: {
      transition: 'slide-left'
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
