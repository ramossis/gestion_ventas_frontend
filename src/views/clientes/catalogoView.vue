<template>
  <h1>Catalogo</h1>
  <div class="grid grid-cols-4 gap-4">
    <ProductCard v-for="prod in dataProducts" :key="prod.id" :productos="prod" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { products } from '@/data/mockData'

import ProductCard from '@/components/ProductCard.vue'

const dataProducts = ref(products)
</script>

<style lang="scss" scoped></style>
