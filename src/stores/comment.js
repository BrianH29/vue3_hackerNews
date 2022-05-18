import { defineStore } from 'pinia';
import { fetch_comment } from '@/apis/comment.js';

export const useComment = defineStore('useComment', {
  state: () => ({
    commentList : [],
  }),
  getters: {
    getCommentList: (state) => state.commentList,
  },
  actions: {
    async FETCH_COMMENT(params){
      const { data } = await fetch_comment(params);
      this.commentList = data; 
    }
  }
})