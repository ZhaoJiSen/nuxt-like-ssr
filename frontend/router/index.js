import { createRouter } from 'vue-router';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('../pages/home.vue') },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/about.vue'),
  },
];

export const createRouterInstance = (history) => {
  const router = createRouter({
    history,
    routes,
  });

  return router;
};
