import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '@/views/Contact.vue'
import BookingPage from '@/views/BookingPage.vue'
import About from '@/views/About.vue'
import Gallery from '@/views/Gallery.vue'
import Dining from '@/views/Dining.vue'
import Spa from '@/views/Spa.vue'
import Events from '@/views/Events.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/bookingpage', component: BookingPage },
  { path: '/about', component: About },
  { path: '/gallery', component: Gallery },
  { path: '/dining', component: Dining },
  { path: '/spa', component: Spa },
  { path: '/events', component: Events },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
