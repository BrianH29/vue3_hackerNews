<script setup>
  import { useNewsList } from '@/stores/newsList';
  import CustomText from '../CustomText.vue';
  const store = useNewsList();

const clickEvent= (index) => {
  location.href = store.getNewsList[index].url
}

</script>

<template>
  <div>
      <ol>
        <li v-for="(item, index) in store.getNewsList" class="list-wrapper">
          <div class="d-flex align-center list-wrapper-title">
            <span>{{ index + 1 }}.</span>
            <span @click="clickEvent(index)" class="clickable">{{ item.title }}</span>
            <span  class="clickable domain"> ({{ item.domain }})</span>
          </div>
          <div class="d-flex align-center list-wrapper-subtitle">
            <span>{{ item.points }} points by</span>
            <span class="clickable">{{ item.user }}</span>
            <span class="clickable">{{ item.time_ago }}</span>
            <span class="clickable">{{ item.comments_count }} comments</span>
          </div>
        </li>
      </ol>
  </div>
</template>


<style lang="scss" scoped>
.list-wrapper{
  margin-bottom: 0.3rem;

  &-title{
    gap: 0.4rem;

    .clickable {
      cursor: pointer;
    }

    .domain{
      font-size: 0.7rem;
      color: grey;
    }
  }

  &-subtitle{
    gap: 0.4rem;
    font-size: 0.7rem;
    color: grey;
  }

}
</style> 