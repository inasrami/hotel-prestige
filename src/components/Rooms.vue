<template>
  <section id="rooms" class="py-20 text-center bg-cream w-4/5 mx-auto">
    <h2 class="text-3xl font-serif mb-12">Our Rooms</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        v-for="room in rooms"
        :key="room.title"
        class="relative bg-white backdrop-blur-sm rounded-xl shadow-md overflow-hidden"
      >
        <img
          :src="room.image"
          :alt="room.title"
          class="w-[95%] h-48 object-cover justify-self-center rounded-xl mt-2"
        />
        <h3 class="text-xl font-serif mt-4">{{ room.title }}</h3>
        <p class="text-gray-600 px-4 py-2 mb-14">{{ room.desc }}</p>
        <button
          class="w-full py-3 absolute bottom-0 left-0 bg-gold text-white hover:bg-darkgold transition rounded-xl"
        >
          Book Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const rooms = [
  {
    title: 'Executive Suite',
    desc: 'Spacious suite with premium amenities.',
    image: '/images/room2.jpg',
  },
  {
    title: 'Deluxe Room',
    desc: 'Modern comfort with elegant furnishings.',
    image: '/images/room3.jpg',
  },
  {
    title: 'Presidential Suite',
    desc: 'Top-tier luxury with panoramic views.',
    image: '/images/room4.jpg',
  },
  { title: 'Junior Suite', desc: 'Perfect for extended stays.', image: '/images/room5.jpg' },
  { title: 'Family Room', desc: 'Large enough for the whole family.', image: '/images/room6.jpg' },
  {
    title: 'Penthouse Loft',
    desc: 'Rooftop views & contemporary design.',
    image: '/images/room7.jpg',
  },
]
</script>
