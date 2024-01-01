// resources/js/router.js

import { createRouter, createWebHistory } from 'vue-router'
// Authentication
import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'
// import Login from '../components/auth/login.vue'



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
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
