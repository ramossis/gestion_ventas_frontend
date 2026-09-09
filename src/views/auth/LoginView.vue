<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="handleLogin">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend">Login</legend>

        <label class="label">Email</label>
        <input type="email" class="input" placeholder="Email" v-model="email" />

        <label class="label">Password</label>
        <input type="password" class="input" placeholder="Password" v-model="password" />

        <button class="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { user } from '@/data/mockData'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const errrorMessage = ref('')

const handleLogin = () => {
  const foundUser = user.find(
    (u) => (u.email === email.value && u.password === password.value) || u.role === 'ADMIN',
  )
  console.log(foundUser)
  if (!foundUser) {
    errrorMessage.value = 'USuario no encontrado'
    return
  }

  sessionStorage.setItem('user', JSON.stringify(foundUser))
  router.push('/admin')
}
</script>

<style lang="scss" scoped></style>
