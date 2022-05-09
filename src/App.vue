<script setup>
import MenuHeader from '@/components/common/MenuHeader.vue';
import MenuNav from '@/components/common/MenuNav.vue';
import { useNewsList } from './stores/newsList';

const store = useNewsList();

// function clickEvent(title){
//   alert(title);
// }

const clickEvent = (title) => {
  alert(title);
}
</script>

<template>
  <MenuHeader />
  <MenuNav @clickEvent="clickEvent" />
</template>

<style lang="scss" scoped>
.appWrapper {
  padding: 40px;
}
</style>
