<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const data = ref([
  {
    title: 'new',
  },
  {
    title: 'comments',
  },
  {
    title: 'ask',
  },
  {
    title: 'show',
  },
  {
    title: 'jobs',
  },
]);
</script>

<template>
  <nav class="nav-wrapper d-flex align-center">
    <ul class="d-flex">
      <li v-for="(item, idx) in data" :key="idx">
        <RouterLink :to="item.title">{{ item.title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  border-top: 1px solid #e4e8eb;
  border-bottom: 1px solid #e4e8eb;
  padding: 0.8rem 0;

  ul {
    gap: 0.75rem;

    li {
      color: #4fc08d;
      font-weight: 700;
    }
  }
}
</style>
