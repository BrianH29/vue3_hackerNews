<script setup>
    import { useNewsList } from '@/stores/newsList';
    const store = useNewsList();

   console.log('newsList.vue : ', store.getNewsList[1])
</script>

<template>
  <div>

  </div>
</template>


<style lang="scss" scoped>

</style>