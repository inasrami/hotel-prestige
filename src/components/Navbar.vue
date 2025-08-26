<template>
  <nav
    class="flex justify-between items-center px-8 py-1 bg-card/80 backdrop-blur-xl shadow-xl sticky top-0 z-50 rounded-b-xl"
  >
    <img src="/images/logo.png" alt="Hotel Logo" class="h-12" />
    <ul class="hidden md:flex gap-8 font-semibold">
      <li><router-link to="/" class="hover:text-blue-100">Home</router-link></li>
      <li v-if="route.path === '/'"><a href="#rooms" class="hover:text-blue-100">Rooms</a></li>
      <li><router-link to="/services" class="hover:text-blue-100">Services</router-link></li>
      <li><router-link to="/contact" class="hover:text-blue-100">Contact</router-link></li>
    </ul>
    <div class="flex gap-4">
      <button
        @click="goToBooking"
        class="px-2 py-1 bg-dark_moss_green-400/50 text-cream rounded-lg hover:bg-dark_moss_green-500 transition text-xs"
      >
        Book Now
      </button>
    </div>
  </nav>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToBooking() {
  router.push('/bookingpage')
}
</script>
