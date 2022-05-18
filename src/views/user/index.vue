<script setup>
import { useUser } from '../../stores/user';

const store = useUser();
console.log(store.getUserInfo);
</script>

<template>
  <aside>
      <p>user : {{ store.getUserInfo.id }}</p>
      <p>created : {{ store.getUserInfo.created }}</p>
      <p>karma : {{ store.getUserInfo.karma }} </p>
      <p>about : {{ store.getUserInfo.about }}</p>
  </aside>
</template>


<style lang="scss" scoped>
aside {
  margin-top: 1rem;
  background-color: beige;
}

p{
  @include textStyle(grey);
  padding: 0.2rem 0.2rem;
}
</style>