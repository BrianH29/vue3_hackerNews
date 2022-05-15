<script setup>
    import { useNewsList } from '@/stores/newsList';
import CustomText from '../CustomText.vue';
    const store = useNewsList();

   console.log('newsList.vue : ', store.getNewsList[1])
</script>

<template>
  <div>
      <ol>
        <li v-for="(item, index) in store.getNewsList" class="list-wrapper">
            <span>{{ item.title }}</span>
            <span> ({{ item.domain }})</span>
            <CustomText fontSize="0.7" color="grey" >{{ item.points }} points by {{ item.user }} {{ item.time_ago }} | {{ item.comments_count }}</CustomText>
        </li>
      </ol>
  </div>
</template>


<style lang="scss" scoped>
.list-wrapper{

  :nth-child(2){
    font-size: 0.7rem;
    color: grey;
  }
}
</style> 