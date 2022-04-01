import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../views/GuestView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/registerGuest',
      name: 'registerGuest',
      component: () => import('../views/RegisterGuestView.vue')
    },
    {
      path: '/registerEvent',
      name: 'registerEvent',
      component: () => import('../views/RegisterEventView.vue')
    }
  ]
})

export default router
