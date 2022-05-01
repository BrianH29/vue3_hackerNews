<script setup>
import CustomText from '@/components/CustomText.vue';
</script>

<template>
  <header class="header-wrapper d-flex">
    <img src="@/assets/logo.svg" alt="" />
    <CustomText fontSize="2rem" color="#4FC08D" fontWeight="900"
      >Vue News</CustomText
    >
  </header>
</template>

<style lang="scss" scoped>
.header-wrapper {
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  img {
    width: 1.8rem;
  }
}
</style>
