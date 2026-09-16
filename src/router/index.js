import AdminLayout from '@/layouts/AdminLayout.vue'
import ClienteLayout from '@/layouts/ClienteLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'ventas',
          name: 'Ventas',
          component: () => import('@/views/admin/gestio-productos.vue'),
        },
      ],
    },
    {
      path: '/',
      component: ClienteLayout,
      children: [
        {
          path: 'catalogo',
          name: 'Catalogo',
          component: () => import('@/views/clientes/catalogoView.vue'),
        },
      ],
    },
    { path: '/login', component: LoginView },
  ],
})

export default router
