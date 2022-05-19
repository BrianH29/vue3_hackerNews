<script setup>
import { useNewsList } from '@/stores/newsList';
import { useRoute } from 'vue-router';

const newsStore = useNewsList();
const route = useRoute();

const data = newsStore.getNewsList.filter(data => data.id === parseInt(route.query.id));

</script>

<template>
  <section class="single-wrapper">
    <div class="d-flex align-center single-wrapper-title">
      <span @click="clickEvent('title', index)" class="clickable">{{ data[0].title }}</span>
      <span class="clickable domain">{{ data[0].domain }}</span>
    </div>
    <div class="d-flex align-center single-wrapper-subtitle">
      <span>{{ data[0].points }} points by</span>
      <span  class="clickable" @click="clickEvent('user', index)">{{ data[0].user }}</span>
      <span>{{ data[0].time_ago }}</span>
      <span>{{ data[0].comments_count }} comments</span>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.single-wrapper{
  margin-bottom: 0.3rem;

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