import { defineStore } from 'pinia';
import { fetch_news } from '@/apis/news'

export const useNewsList = defineStore('newsList', {
  state: () => ({
   newsList : [],
  }),
   getters:{
      getNewsList: (state) => {
         state.newsList
      }
   },
   actions :{
      async FETCH_NEWS(params) {
         const {data} =  await fetch_news(params);
         console.log('check data : ', data);
         this.newsList.push(data);
      }
   } ,
})