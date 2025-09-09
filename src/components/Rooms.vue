<template>
  <section id="rooms" class="py-20 bg-gradient-to-bl from-slate-100 to-sky-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-serif mb-5 text-center text-gray-800">Luxury Suites & Villas</h2>
      <p class="text-xl font-serif mb-16 text-center text-gray-800">
        Each accommodation is thoughtfully designed to provide the ultimate in comfort, luxury, and
        breathtaking ocean views.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          v-for="room in rooms"
          :key="room.title"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="relative">
            <img :src="room.image" :alt="room.title" class="w-full h-64 object-cover" />
            <div
              v-if="room.bestValue"
              class="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              Best Value
            </div>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-serif text-gray-800">{{ room.title }}</h3>
              <div class="text-right">
                <div class="text-2xl font-bold text-gray-800">${{ room.price }}</div>
                <div class="text-sm text-gray-500">per night</div>
              </div>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed">{{ room.description }}</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div
                v-for="amenity in room.amenities"
                :key="amenity.name"
                class="flex items-center text-sm text-gray-600"
              >
                <span class="text-yellow-500 mr-2">{{ amenity.icon }}</span>
                <span>{{ amenity.name }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in room.tags"
                :key="tag"
                class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex gap-3">
              <button
                class="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                @click="goToBooking"
                class="flex-1 py-3 px-4 bg-dark_moss_green-400/50 text-white rounded-lg hover:bg-dark_moss_green-500/50 transition-colors font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToBooking() {
  router.push('/bookingpage')
}

const rooms = ref([
  {
    title: "Ocean View Suite",
    price: 450,
    description: "Luxurious suite with panoramic ocean views, private balcony, and premium amenities.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    bestValue: true,
    amenities: [
      { name: "Ocean View", icon: "🌊" },
      { name: "Private Balcony", icon: "🏖️" },
      { name: "King Bed", icon: "🛏️" },
      { name: "Mini Bar", icon: "🍷" }
    ],
    tags: ["Popular", "Ocean View", "Balcony"]
  },
  {
    title: "Garden Villa",
    price: 380,
    description: "Spacious villa surrounded by tropical gardens with private pool and outdoor dining area.",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
    bestValue: false,
    amenities: [
      { name: "Private Pool", icon: "🏊" },
      { name: "Garden View", icon: "🌺" },
      { name: "Outdoor Dining", icon: "🍽️" },
      { name: "WiFi", icon: "📶" }
    ],
    tags: ["Private Pool", "Garden", "Spacious"]
  },
  {
    title: "Presidential Suite",
    price: 750,
    description: "The ultimate luxury experience with butler service, private chef, and exclusive amenities.",
    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
    bestValue: false,
    amenities: [
      { name: "Butler Service", icon: "🤵" },
      { name: "Private Chef", icon: "👨‍🍳" },
      { name: "Jacuzzi", icon: "🛁" },
      { name: "Champagne", icon: "🥂" }
    ],
    tags: ["Luxury", "Butler", "Exclusive"]
  }
])
</script>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
