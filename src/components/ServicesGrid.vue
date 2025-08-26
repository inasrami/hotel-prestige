<template>
  <section class="py-20 text-center">
    <h2 class="text-3xl font-serif mb-12">Our Services</h2>
    <div class="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <div
        data-aos="flip-left"
        v-for="s in services"
        :key="s.title"
        class="p-6 rounded-xl shadow-md bg-white"
      >
        <span class="material-symbols-outlined text-5xl text-dark_moss_green-400">{{
          s.icon
        }}</span>
        <h3 class="text-xl font-serif mt-4">{{ s.title }}</h3>
        <p class="text-gray-600">{{ s.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
const services = [
  { title: 'Room Service', desc: '24/7 dining at your doorstep.', icon: 'room_service' },
  { title: 'Airport Transfer', desc: 'Luxury pickups and drop-offs.', icon: 'airport_shuttle' },
  { title: 'Event Hosting', desc: 'Banquets, weddings, conferences.', icon: 'celebration' },
  { title: 'Laundry', desc: 'Same-day laundry services.', icon: 'local_laundry_service' },
  { title: 'Tours', desc: 'Exclusive local experiences.', icon: 'tour' },
  { title: 'Valet Parking', desc: 'Secure and convenient.', icon: 'local_parking' },
]
</script>
