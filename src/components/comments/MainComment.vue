<script setup>
import { useComment } from '@/stores/comment';

const store = useComment();
const data = store.getCommentList;
console.log('check data : ', data);
</script>

<template>
<article>
  <section v-for="(item, idx) in data.comments" :key="idx" class="wrapper">
    <div class="d-flex wrapper__info">
      <span>◢</span>
      <span>{{ item.user }} </span>
      <span>{{ item.time_ago }}</span>
    </div>
    <div v-html="item.content" class="wrapper__content"></div>
    <div class="wrapper__more">
      <span>more comment</span>
    </div>
  </section>
</article>
</template>


<style lang="scss" scoped>
.wrapper{
  margin-bottom: 1.3rem;

  #{&}__info {
    gap : 0.4rem;

    span {
      @include textStyle(grey, 0.7rem)
    }
  }

  #{&}__content {
    margin: 0 1rem;
    @include textStyle(#2b2d2f, 0.8rem);
  }

  #{&}__more {
    span {
      margin: 0 1rem;
      @include textStyle(coral, 0.6rem);
      cursor: pointer;
    }
  }
}
</style>