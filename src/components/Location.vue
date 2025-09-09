<template>
  <section id="location" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <div data-aos="fade-up">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Prime Location
          </span>
          <h2 class="font-serif text-5xl font-bold text-gray-900 mb-6">
            Discover Our <span class="text-gradient">Location</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nestled in the heart of Prizren's historic Shatervan district, where culture meets luxury
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Map -->
        <div data-aos="fade-right" class="relative">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=prizren%20shatervan&t=k&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              allowfullscreen
              loading="lazy"
              class="w-full h-96 lg:h-[500px]"
            ></iframe>
          </div>
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-50"></div>
        </div>

        <!-- Location Info -->
        <div data-aos="fade-left" class="space-y-8">
          <div>
            <h3 class="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Historic Shatervan District
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Experience the perfect blend of historical charm and modern luxury in Prizren's most prestigious neighborhood. Our hotel offers unparalleled access to cultural landmarks, fine dining, and exclusive shopping.
            </p>
          </div>

          <!-- Location Features -->
          <div class="grid gap-6">
            <div
              v-for="feature in locationFeatures"
              :key="feature.title"
              class="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span class="text-white text-xl">{{ feature.icon }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ feature.title }}</h4>
                <p class="text-gray-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
            <h4 class="font-serif text-xl font-semibold text-gray-900 mb-4">Contact Information</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">Shatervan, Prizren, Kosovo</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span class="text-gray-700">+383 44 444 444</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span class="text-gray-700">info@hotelprestige.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const locationFeatures = [
  {
    title: 'Historic Center',
    description: 'Walking distance to Prizren\'s most iconic landmarks and cultural sites',
    icon: '🏛️'
  },
  {
    title: 'Fine Dining',
    description: 'Surrounded by the city\'s best restaurants and cafes',
    icon: '🍷'
  },
  {
    title: 'Shopping District',
    description: 'Premium boutiques and local artisan shops nearby',
    icon: '🛍️'
  },
  {
    title: 'Transportation Hub',
    description: 'Easy access to airport and major transportation routes',
    icon: '🚗'
  }
]
</script>