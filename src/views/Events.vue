<template>
  <div class="min-h-screen pt-20">
    <Navbar />
    <div class="bg-primary text-white py-24 px-6 text-center">
      <h1 class="font-serif text-5xl mb-4">Gatherings</h1>
      <p class="text-gray-400 font-light">Events defined by elegance.</p>
    </div>

    <section class="section-padding bg-white">
      <div class="container-custom px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="font-serif text-3xl text-primary mb-6">Weddings</h2>
          <p class="text-gray-600 font-light mb-6 leading-relaxed">
            From intimate ceremonies to grand receptions, our venues provide the perfect backdrop
            for your love story. Our dedicated planners ensure every detail is flawless.
          </p>
          <ul class="space-y-2 mb-8 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-accent text-sm">check</span>Grand Ballroom
              (up to 200 guests)
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-accent text-sm">check</span>Garden Terrace
              (up to 100 guests)
            </li>
          </ul>
          <button class="btn-primary">Inquire</button>
        </div>
        <div>
          <h2 class="font-serif text-3xl text-primary mb-6">Corporate</h2>
          <p class="text-gray-600 font-light mb-6 leading-relaxed">
            Inspire your team in our sophisticated meeting spaces equipped with modern technology
            and supported by our business concierge.
          </p>
          <ul class="space-y-2 mb-8 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-accent text-sm">check</span>Executive
              Boardrooms
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-accent text-sm">check</span>Conference
              Facilities
            </li>
          </ul>
          <button class="btn-secondary">Download Brochure</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
