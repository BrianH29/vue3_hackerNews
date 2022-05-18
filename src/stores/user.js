import { defineStore } from 'pinia';
import { fetch_user } from '@/apis/user.js'

export const useUser = defineStore('userStore', {
  state : () => ({
    userInfo: [],
  }),
  getters:{
    getUserInfo:(state) => state.userInfo
  },
  actions: {
    async FETCH_USER(params){
      const { data } = await fetch_user(params);
      this.userInfo = data;
   }
  }
})