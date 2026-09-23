<template>
  <div>
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure class="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ productos.name }}</h2>
        <p>ID:{{ productos.id }} Codigo Barra : {{ productos.codigo_b }}</p>
        <div class="card-actions">
          <button class="btn btn-primary" @click="emit('send-product', productos)">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  productos: {
    type: Object,
    require: true,
  },
})

const emit = defineEmits(['send-product'])
</script>

<style lang="scss" scoped></style>
