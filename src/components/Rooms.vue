<template>
  <section id="rooms" class="section-padding bg-white">
    <div class="container-custom px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16">
        <div class="max-w-2xl" data-aos="fade-right">
          <span class="text-accent text-sm font-bold uppercase tracking-widest mb-2 block"
            >Accommodations</span
          >
          <h2 class="text-4xl md:text-5xl font-serif text-primary mb-6">Suites & Villas</h2>
          <p class="text-gray-600 font-light leading-relaxed">
            Designed with a modern aesthetic and natural materials, our spaces offer a serene
            retreat from the world.
          </p>
        </div>
        <button
          @click="goToBooking"
          class="hidden md:block btn-secondary mt-6 md:mt-0"
          data-aos="fade-left"
        >
          View All Rates
        </button>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <div
          v-for="(room, index) in rooms"
          :key="room.title"
          class="group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative overflow-hidden mb-6">
            <img
              :src="room.image"
              :alt="room.title"
              class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"
            ></div>
          </div>

          <div class="pr-4">
            <div class="flex justify-between items-baseline mb-3">
              <h3 class="text-2xl font-serif text-primary">{{ room.title }}</h3>
              <span class="text-lg font-medium text-gray-500">${{ room.price }}</span>
            </div>

            <p class="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">
              {{ room.description }}
            </p>

            <div class="flex gap-4 mb-6 text-gray-500">
              <div
                v-for="amenity in room.amenities"
                :key="amenity.name"
                class="flex items-center gap-2"
                :title="amenity.name"
              >
                <span class="material-symbols-outlined text-xl">{{ amenity.icon }}</span>
              </div>
            </div>

            <button
              @click="goToBooking"
              class="text-sm uppercase tracking-widest font-medium text-primary border-b border-gray-300 hover:border-primary pb-1 transition-all"
            >
              Book This Room
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToBooking() {
  router.push('/bookingpage')
}

const rooms = ref([
  {
    title: 'Ocean View Suite',
    price: 450,
    description: 'Panoramic ocean views with a private balcony and modern furnishings.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    amenities: [
      { name: 'View', icon: 'water' }, 
      { name: 'King Bed', icon: 'king_bed' },
      { name: 'Wifi', icon: 'wifi' },
    ],
  },
  {
    title: 'Garden Villa',
    price: 380,
    description:
      'A secluded sanctuary surrounded by lush tropical gardens and private pool access.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    amenities: [
      { name: 'Pool', icon: 'pool' },
      { name: 'Garden', icon: 'yard' },
      { name: 'Dining', icon: 'restaurant' },
    ],
  },
  {
    title: 'Presidential Suite',
    price: 750,
    description:
      'The ultimate luxury experience featuring expansive living areas and butler service.',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    amenities: [
      { name: 'Service', icon: 'room_service' },
      { name: 'Bar', icon: 'wine_bar' },
      { name: 'Bath', icon: 'bathtub' },
    ],
  },
])
</script>
