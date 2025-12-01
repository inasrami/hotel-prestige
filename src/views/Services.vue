<template>
  <div class="min-h-screen pt-20">
    <Navbar />

    <header class="bg-primary text-white py-24 text-center px-6">
      <h1 class="font-serif text-5xl md:text-6xl mb-6">Our Services</h1>
      <p class="text-gray-400 max-w-xl mx-auto font-light text-lg">
        Anticipating your needs with discretion and grace.
      </p>
    </header>

    <ServicesGrid />

    <section class="section-padding bg-cream">
      <div class="container-custom px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 class="font-serif text-4xl text-primary mb-6">Concierge Excellence</h2>
            <p class="text-gray-600 mb-6 leading-relaxed font-light">
              Our concierge team is dedicated to making your stay effortless. Whether securing a
              reservation at Prizren's finest restaurant or arranging a private tour of the fortress
              at sunset, consider it done.
            </p>
            <ul class="space-y-4 mt-8">
              <li
                v-for="item in conciergeList"
                :key="item"
                class="flex items-center gap-3 text-sm text-gray-700 uppercase tracking-wider font-medium"
              >
                <span class="material-symbols-outlined text-accent text-sm">check_circle</span>
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="relative h-[500px]" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Concierge"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import ServicesGrid from '../components/ServicesGrid.vue'

const conciergeList = [
  'Restaurant Reservations',
  'Private Tours',
  'Ticket Services',
  'Personal Shopping',
]
</script>
