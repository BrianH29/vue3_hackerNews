import { createRouter, createWebHistory, useRoute } from 'vue-router';
import createNewsList from '@/views/createNewsList';
import { useNewsList } from '@/stores/newsList';
import { useUser } from '@/stores/user';
import { useComment } from '@/stores/comment.js';

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
    {
      path : '/user',
      name : 'user',
      component: () => import('@/views/user/index.vue'),
      async beforeEnter(to, from, next){
          const store = useUser();
          await store.FETCH_USER(to.query.id)
          next();
      },
    },
    {
      path : '/comment',
      name : 'comment',
      component: () => import('@/views/comment/index.vue'),
      async beforeEnter(to, from, next){
        const store = useComment();
        console.log('query id : ', to.query);
        await store.FETCH_COMMENT(to.query.id);
        next();
      }
    },
  ],
});

export default router;
