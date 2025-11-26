<template>
  <section id="rooms" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="inline-block">
          <span class="text-sm font-semibold text-accent uppercase tracking-wider mb-2 block">
            Accommodations
          </span>
          <h2 class="text-5xl font-serif mb-6 text-gray-900 leading-tight">
            Luxury Suites & Villas
          </h2>
          <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each accommodation is thoughtfully designed to provide the ultimate in comfort, luxury,
            and breathtaking views.
          </p>
        </div>
      </div>

      <!-- Rooms Grid -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          v-for="(room, index) in rooms"
          :key="room.title"
          :data-aos-delay="100 * (index + 1)"
          class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
        >
          <!-- Image Container -->
          <div class="relative overflow-hidden">
            <img
              :src="room.image"
              :alt="room.title"
              class="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <!-- Best Value Badge -->
            <div
              v-if="room.bestValue"
              class="absolute top-6 right-6 bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              ⭐ Best Value
            </div>

            <!-- Price Overlay -->
            <div
              class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg"
            >
              <div class="text-3xl font-bold text-gray-900">${{ room.price }}</div>
              <div class="text-sm text-gray-500 font-medium">per night</div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <h3
              class="text-2xl font-serif text-gray-900 mb-4 group-hover:text-accent transition-colors"
            >
              {{ room.title }}
            </h3>

            <p class="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {{ room.description }}
            </p>

            <!-- Amenities Grid -->
            <div class="grid grid-cols-2 gap-3 mb-6">
              <div
                v-for="amenity in room.amenities"
                :key="amenity.name"
                class="flex items-center text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2"
              >
                <span class="text-lg mr-2">{{ amenity.icon }}</span>
                <span class="font-medium">{{ amenity.name }}</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in room.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 text-accent rounded-full text-xs font-semibold uppercase tracking-wide"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <button
                class="flex-1 py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-accent hover:text-accent hover:bg-accent-10 transition-all duration-300 font-semibold"
              >
                View Details
              </button>
              <button
                @click="goToBooking"
                class="flex-1 py-3 px-4 btn-primary text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold shadow-lg hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>

          <!-- Decorative Element -->
          <div class="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-20">
        <div class="inline-block bg-white rounded-2xl shadow-lg p-8">
          <h3 class="text-2xl font-serif text-gray-900 mb-4">Can't decide?</h3>
          <p class="text-gray-600 mb-6">
            Let our concierge help you find the perfect accommodation
          </p>
          <button
            class="bg-accent text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Concierge
          </button>
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
    title: 'Ocean View Suite',
    price: 450,
    description:
      'Luxurious suite with panoramic ocean views, private balcony, and premium amenities. Wake up to breathtaking sunrises and enjoy the sound of waves from your private sanctuary.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    bestValue: true,
    amenities: [
      { name: 'Ocean View', icon: '🌊' },
      { name: 'Private Balcony', icon: '🏖️' },
      { name: 'King Bed', icon: '🛏️' },
      { name: 'Mini Bar', icon: '🍷' },
    ],
    tags: ['Popular', 'Ocean View', 'Balcony'],
  },
  {
    title: 'Garden Villa',
    price: 380,
    description:
      'Spacious villa surrounded by tropical gardens with private pool and outdoor dining area. Perfect for families or couples seeking privacy and tranquility in a natural setting.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    bestValue: false,
    amenities: [
      { name: 'Private Pool', icon: '🏊' },
      { name: 'Garden View', icon: '🌺' },
      { name: 'Outdoor Dining', icon: '🍽️' },
      { name: 'WiFi', icon: '📶' },
    ],
    tags: ['Private Pool', 'Garden', 'Spacious'],
  },
  {
    title: 'Presidential Suite',
    price: 750,
    description:
      'The ultimate luxury experience with butler service, private chef, and exclusive amenities. Indulge in unparalleled comfort with personalized service and premium facilities.',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    bestValue: false,
    amenities: [
      { name: 'Butler Service', icon: '🤵' },
      { name: 'Private Chef', icon: '👨‍🍳' },
      { name: 'Jacuzzi', icon: '🛁' },
      { name: 'Champagne', icon: '🥂' },
    ],
    tags: ['Luxury', 'Butler', 'Exclusive'],
  },
])
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #bc6c25, #606c38);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #a0561f, #283618);
}

@media (hover: hover) {
  .group:hover .absolute.inset-0 {
    background: linear-gradient(135deg, rgba(188, 108, 37, 0.08), rgba(96, 108, 56, 0.08));
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid.lg\\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .text-5xl {
    font-size: 2.5rem;
  }

  .py-24 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
