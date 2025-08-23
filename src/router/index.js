import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '@/views/Contact.vue'
import BookingPage from '@/views/BookingPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/bookingpage', component: BookingPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
