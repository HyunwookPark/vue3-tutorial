import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  // その他のルートをここに追加
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router