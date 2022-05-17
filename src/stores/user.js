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