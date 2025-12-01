<template>
  <div class="min-h-screen pt-20 bg-white">
    <Navbar />

    <div class="text-center py-16 bg-cream">
      <h1 class="font-serif text-4xl text-primary mb-4">Gallery</h1>
      <p class="text-gray-500 font-light">A visual journey through Hotel Prestige</p>
    </div>

    <div class="container-custom px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(img, idx) in images"
          :key="idx"
          class="relative aspect-[4/3] group overflow-hidden cursor-pointer"
        >
          <img
            :src="img"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

const images = [
  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
  'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
  'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
  'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
  'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
  'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
  'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
]
</script>
