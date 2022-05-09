<script setup>
import MenuHeader from '@/components/common/MenuHeader.vue';
import MenuNav from '@/components/common/MenuNav.vue';

const clickEvent = (title) => {
  this.$router.push(`/${title}`)
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
