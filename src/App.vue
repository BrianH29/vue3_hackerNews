<script setup>
import MenuHeader from '@/components/common/MenuHeader.vue';
import MenuNav from '@/components/common/MenuNav.vue';

</script>

<template>
  <MenuHeader />
  <MenuNav />
  <routerView></routerView>
</template>

<style lang="scss" scoped>
.appWrapper {
  padding: 40px;
}
</style>
