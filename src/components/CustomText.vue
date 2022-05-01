<script setup>
defineProps({
  fontSize: {
    type: String,
    required: true,
  },
  fontWeight: {
    type: String,
    default() {
      return '28px';
    },
  },
  color: {
    type: String,
    default() {
      return '#2b2d2f';
    },
  },
});
</script>

<template>
  <div
    :style="`font-size:${fontSize}; color:${color}; font-weight:${fontWeight}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
