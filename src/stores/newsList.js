import { defineStore } from 'pinia';
import { fetch_news } from '@/apis/news'

export const useNewsList = defineStore('newsList', {
  state: () => ({

  }),
  getters:{},
   actions :{
      async FETCH_NEWS(params) {
          await fetch_news(params);
      }
   } ,
})