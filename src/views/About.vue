<template>
  <div class="min-h-screen pt-20">
    <Navbar />

    <div class="relative h-[60vh]">
      <img
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 class="text-white font-serif text-6xl">Our Story</h1>
      </div>
    </div>

    <section class="section-padding bg-white text-center">
      <div class="container-custom max-w-3xl px-6">
        <span class="text-accent text-xs font-bold uppercase tracking-widest mb-6 block"
          >Since 2010</span
        >
        <h2 class="font-serif text-4xl text-primary mb-8">A Legacy of Elegance</h2>
        <p class="text-gray-600 text-lg font-light leading-relaxed mb-12">
          Hotel Prestige stands as a testament to timeless elegance in the heart of Prizren. What
          began as a vision to bring world-class hospitality to this historic city has evolved into
          a sanctuary for the discerning traveler. We believe true luxury lies in simplicity,
          silence, and the subtle art of anticipation.
        </p>
        <div class="grid grid-cols-3 gap-8 border-t border-gray-100 pt-12">
          <div>
            <span class="block text-3xl font-serif text-primary mb-2">50+</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Suites</span>
          </div>
          <div>
            <span class="block text-3xl font-serif text-primary mb-2">15</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Years</span>
          </div>
          <div>
            <span class="block text-3xl font-serif text-primary mb-2">4.9</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Rating</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
