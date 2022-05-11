import { createRouter, createWebHistory } from 'vue-router';
import createNewsList from '@/views/createNewsList';
import { useNewsList } from '@/stores/newsList';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect : '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: createNewsList('newNewsView'),
      async beforeEnter(to, from, next){
        const store = useNewsList();
        await store.FETCH_NEWS(`${to.name}/1.json`);
        next();
      }
    },
    {
      path: '/new',
      name: 'newest',
      component: createNewsList('newNewsView'),
      async beforeEnter(to, from, next){
        const store = useNewsList();
        await store.FETCH_NEWS(`${to.name}/1.json`);
        next();
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: createNewsList('askNewsView'),
      async beforeEnter(to, from, next){
        const store = useNewsList();
        await store.FETCH_NEWS(`${to.name}/1.json`);
        next();
      }
    },
    {
      path: '/show',
      name: 'show',
      component: createNewsList('askNewsView'),
      async beforeEnter(to, from, next){
        const store = useNewsList();
        await store.FETCH_NEWS(`${to.name}/1.json`);
        next();
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createNewsList('jobsNewsView'),
      async beforeEnter(to, from, next){
        const store = useNewsList();
        await store.FETCH_NEWS(`${to.name}/1.json`);
        next();
      }
    },
  ],
});

export default router;
