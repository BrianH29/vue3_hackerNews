<script setup>
</script>

<template>
  <header class="header-wrapper d-flex">
    <img src="@/assets/logo.svg" alt="" />
    <span>Vue News</span>
  </header>
</template>

<style lang="scss" scoped>
.header-wrapper {
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  img {
    width: 1.8rem;
  }

  span {
    @include textStyle(#4FC08D, 2rem, 900)
  }
}
</style>
