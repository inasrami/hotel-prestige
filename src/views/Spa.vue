<template>
  <div class="min-h-screen pt-20">
    <Navbar />
    <header class="relative h-[70vh]">
      <img
        src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 class="text-white font-serif text-6xl">Wellness</h1>
      </div>
    </header>

    <section class="section-padding bg-cream">
      <div class="container-custom px-6 text-center max-w-4xl mx-auto">
        <h2 class="font-serif text-4xl text-primary mb-8">Restore Balance</h2>
        <p class="text-gray-600 font-light mb-16 leading-relaxed">
          Our spa is a sanctuary dedicated to holistic well-being. Disconnect from the outside world
          and reconnect with yourself through our signature treatments using organic botanicals.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 border border-gray-100">
            <span class="material-symbols-outlined text-4xl text-accent mb-4">spa</span>
            <h3 class="font-serif text-xl mb-2">Massages</h3>
            <p class="text-sm text-gray-500 font-light">
              Deep tissue, hot stone, and aromatherapy.
            </p>
          </div>
          <div class="bg-white p-8 border border-gray-100">
            <span class="material-symbols-outlined text-4xl text-accent mb-4">face</span>
            <h3 class="font-serif text-xl mb-2">Facials</h3>
            <p class="text-sm text-gray-500 font-light">
              Hydrating and anti-aging organic treatments.
            </p>
          </div>
          <div class="bg-white p-8 border border-gray-100">
            <span class="material-symbols-outlined text-4xl text-accent mb-4">hot_tub</span>
            <h3 class="font-serif text-xl mb-2">Hydrotherapy</h3>
            <p class="text-sm text-gray-500 font-light">Thermal circuits and mineral baths.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
