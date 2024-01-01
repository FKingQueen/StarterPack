// resources/js/router.js

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login.vue'
import Main from '../components/main.vue'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
