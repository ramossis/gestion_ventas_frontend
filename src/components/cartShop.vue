<template>
  <div>
    <p>
      {{ item }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: false,
  },
})
</script>

<style lang="scss" scoped></style>
