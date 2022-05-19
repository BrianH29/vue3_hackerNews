<script setup>
import SingleNewsHeader from '@/components/SingleNewsHeader.vue';
import { useComment } from '@/stores/comment';

const commentStore = useComment();


</script>

<template>
    <SingleNewsHeader></SingleNewsHeader>
</template>


<style lang="scss" scoped>

</style>