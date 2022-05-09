<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const emit = defineEmits(['clickEvent']);
const data = ref([{title: 'new'},{title: 'comments'}, { title: 'ask'},{title: 'show'},{ title: 'jobs'}]);

function clickEvent(idx){
  emit('clickEvent', this.data[idx].title)
}

</script>

<template>
  <nav class="nav-wrapper d-flex align-center">
    <ul class="d-flex">
      <li v-for="(item, idx) in data" :key="idx">
        <RouterLink :to="item.title" @click="clickEvent(idx)">{{ item.title }}</RouterLink>
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
