<script setup>
defineProps({
  fontSize: {
    type: String,
    default : '1'
  },
  fontWeight: {
    type: String,
  },
  color: {
    type: String,
    default : '#2b2d2f'
  },
});
</script>

<template>
  <div
    :style="`font-size:${fontSize}rem; color:${color}; font-weight:${fontWeight}`"
  >
    <slot></slot>
  </div>
</template>
