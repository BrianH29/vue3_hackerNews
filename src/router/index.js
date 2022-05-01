import { createRouter, createWebHistory } from 'vue-router';
import createNewsList from '@/views/createNewsList';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/new',
      name: 'new',
      component: createNewsList('newNewsView')
    },
  ],
});

export default router;
