<template>
  <!-- Navabbar -->
  <div>
    <cartShop :item="catalogoItem" />
  </div>

  <h1>Catalogo</h1>
  <div class="grid grid-cols-4 gap-4">
    <ProductCard
      v-for="prod in dataProducts"
      :key="prod.id"
      :productos="prod"
      @send-product="handleProduct"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { products } from '@/data/mockData'
import ProductCard from '@/components/ProductCard.vue'
import cartShop from '@/components/cartShop.vue'
const dataProducts = ref(products)

const catalogoItem = ref([])

const handleProduct = (product) => {
  catalogoItem.value.push(product)
}
</script>

<style lang="scss" scoped></style>
