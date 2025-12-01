<template>
  <section class="section-padding bg-white">
    <div class="container-custom px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-serif text-primary mb-4">Exquisite Services</h2>
        <p class="text-gray-500 font-light">Tailored to perfection</p>
      </div>

      <div class="grid md:grid-cols-3 gap-12 border-t border-l border-gray-100">
        <div
          v-for="s in services"
          :key="s.title"
          class="p-10 border-r border-b border-gray-100 hover:bg-cream transition-colors duration-500 group"
          data-aos="fade-up"
        >
          <span
            class="material-symbols-outlined text-4xl text-gray-300 group-hover:text-accent transition-colors mb-6"
            >{{ s.icon }}</span
          >
          <h3 class="text-xl font-serif text-primary mb-3">{{ s.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed font-light">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Room Service',
    desc: 'Gourmet dining delivered to your private sanctuary.',
    icon: 'room_service',
  },
  {
    title: 'Private Transfer',
    desc: 'Seamless transportation in our luxury fleet.',
    icon: 'airport_shuttle',
  },
  {
    title: 'Event Hosting',
    desc: 'Sophisticated venues for your most important moments.',
    icon: 'celebration',
  },
  { title: 'Laundry & Valet', desc: 'Impeccable care for your garments.', icon: 'dry_cleaning' },
  { title: 'Local Tours', desc: 'Curated experiences of Prizren’s heritage.', icon: 'tour' },
  { title: 'Valet Parking', desc: 'Secure parking with 24/7 surveillance.', icon: 'local_parking' },
]
</script>
