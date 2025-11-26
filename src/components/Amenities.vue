<template>
  <section id="amenities" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <div data-aos="fade-up">
          <span
            class="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4"
          >
            World-Class Facilities
          </span>
          <h2 class="font-serif text-5xl font-bold text-gray-900 mb-6">
            Luxury <span class="text-gradient">Amenities</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our carefully curated selection of premium amenities designed to elevate your
            stay
          </p>
        </div>
      </div>

      <!-- Amenities Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(amenity, index) in amenities"
          :key="amenity.title"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          class="group relative card-elegant p-8 text-center hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-500"
        >
          <!-- Icon -->
          <div class="relative mb-6">
            <div
              class="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"
            >
              <span class="text-3xl">{{ amenity.icon }}</span>
            </div>
            <div
              class="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </div>

          <!-- Content -->
          <h3
            class="font-serif text-2xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors"
          >
            {{ amenity.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            {{ amenity.description }}
          </p>

          <!-- Features -->
          <div class="space-y-2">
            <div
              v-for="feature in amenity.features"
              :key="feature"
              class="flex items-center justify-center text-sm text-gray-500"
            >
              <svg class="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ feature }}
            </div>
          </div>

          <!-- Hover Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <div data-aos="fade-up" data-aos-delay="600" class="inline-block">
          <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <h3 class="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Experience All Amenities
            </h3>
            <p class="text-gray-600 mb-6">
              Book your stay and enjoy complimentary access to all our world-class facilities
            </p>
            <button @click="goToBooking" class="btn-primary">Reserve Your Experience</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToBooking() {
  router.push('/bookingpage')
}

const amenities = [
  {
    title: 'Infinity Pool & Spa',
    description:
      'Relax in our stunning infinity pool overlooking the ocean, complete with a full-service spa offering rejuvenating treatments.',
    icon: '🏊‍♀️',
    features: ['Infinity Pool', 'Hot Tub', 'Spa Treatments', 'Pool Bar'],
  },
  {
    title: 'Gourmet Dining',
    description:
      'Savor exquisite cuisine at our award-winning restaurants featuring international and local specialties prepared by master chefs.',
    icon: '🍽️',
    features: ['Fine Dining', 'Room Service', 'Wine Cellar', 'Private Chef'],
  },
  {
    title: 'Fitness & Wellness',
    description:
      'Maintain your fitness routine in our state-of-the-art gym with personal trainers and wellness programs available.',
    icon: '💪',
    features: ['Modern Equipment', 'Personal Training', 'Yoga Classes', 'Wellness Programs'],
  },
  {
    title: 'Business Center',
    description:
      'Conduct business seamlessly with our fully equipped business center and elegant conference facilities.',
    icon: '💼',
    features: ['Meeting Rooms', 'High-Speed WiFi', 'Business Lounge', 'Secretarial Services'],
  },
  {
    title: 'Concierge Services',
    description:
      'Our dedicated concierge team is available 24/7 to assist with reservations, tours, and any special requests.',
    icon: '🛎️',
    features: ['24/7 Service', 'Tour Booking', 'Transportation', 'Personal Assistance'],
  },
  {
    title: 'Entertainment',
    description:
      'Enjoy live music, cultural performances, and exclusive events in our sophisticated entertainment venues.',
    icon: '🎭',
    features: ['Live Music', 'Cultural Shows', 'Private Events', 'Rooftop Lounge'],
  },
]
</script>
