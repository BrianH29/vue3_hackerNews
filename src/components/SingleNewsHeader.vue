<script setup>
import { useComment } from '@/stores/comment';
import { useRouter } from 'vue-router';

const store = useComment();
const router = useRouter();

const clickEvent = (sort) => {
  switch(sort){
    case 'user' :
        router.push({name : 'user', query : {id: store.getCommentList.user}})
      break;
  }
}

</script>

<template>
   <section class="single-wrapper">
    <div class="d-flex align-center single-wrapper-title">
      <span class="">◿</span>
      <span>{{ store.getCommentList.title }}</span>
      <span class="clickable domain">{{ store.getCommentList.domain }}</span>
    </div>
    <div class="d-flex align-center single-wrapper-subtitle">
      <span>{{ store.getCommentList.points }} points by</span>
      <span  class="clickable" @click="clickEvent('user')">{{ store.getCommentList.user }}</span>
      <span>{{ store.getCommentList.time_ago }}</span>
      <span>{{ store.getCommentList.comments_count }} comments</span>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.single-wrapper{
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  &-title{
    gap: 0.4rem;

    .domain{
      @include textStyle(grey, 0.7rem)
    }
  }

  &-subtitle{
    gap: 0.4rem;
    @include textStyle(grey, 0.7rem)
  }
}
</style>