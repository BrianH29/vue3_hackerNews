import { createRouter, createWebHistory } from 'vue-router';
import createNewsList from '@/views/createNewsList';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect : '/new'
    },
    {
      path: '/new',
      name: 'new',
      component: createNewsList('newNewsView')
    },
    {
      path: '/comments',
      name: 'comments',
      component: createNewsList('commentsNewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: createNewsList('askNewsView')
    },
    {
      path: '/show',
      name: 'show',
      component: createNewsList('askNewsView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createNewsList('jobsNewsView')
    },
  ],
});

export default router;
