<template>
  <section
    id="amenities"
    class="py-20 bg-gradient-to-bl from-slate-200 to-sky-200 text-center shadow-lg"
  >
    <h2 class="text-3xl font-serif mb-12">Amenities</h2>
    <div class="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <div
        data-aos="flip-left"
        v-for="a in amenities"
        :key="a.title"
        class="p-6 rounded-xl shadow-md bg-white"
      >
        <span class="material-symbols-outlined text-5xl text-dark_moss_green-300">{{
          a.icon
        }}</span>
        <h3 class="text-xl font-serif mt-4">{{ a.title }}</h3>
        <p class="text-gray-600">{{ a.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const amenities = [
  { title: 'Spa & Wellness', desc: 'Relax in our luxury spa.', icon: 'spa' },
  { title: 'Fine Dining', desc: 'Delicious gourmet meals.', icon: 'restaurant' },
  { title: 'Fitness Center', desc: 'Stay fit during your stay.', icon: 'fitness_center' },
  { title: 'Swimming Pool', desc: 'Enjoy our rooftop pool.', icon: 'pool' },
  { title: 'Conference Halls', desc: 'Host professional events.', icon: 'meeting_room' },
  { title: 'Concierge', desc: 'We take care of everything.', icon: 'room_service' },
]
</script>
