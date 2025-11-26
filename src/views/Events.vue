<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      data-hero-theme="dark"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      <div class="relative z-10 text-center text-white px-6">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span
            class="inline-block px-4 py-2 bg-accent-10 backdrop-blur-sm border border-accent-10 rounded-full text-accent text-sm font-semibold mb-6"
          >
            Memorable Occasions
          </span>
          <h1 class="font-serif text-6xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Events & <span class="text-gradient">Celebrations</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Create unforgettable moments in our elegant venues
          </p>
        </div>
      </div>
    </section>

    <!-- Event Types -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Perfect <span class="text-gradient">Venues</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we have the perfect space for every
            occasion
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div
            v-for="(eventType, index) in eventTypes"
            :key="eventType.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              :src="eventType.image"
              :alt="eventType.name"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 class="font-serif text-3xl font-bold mb-3">{{ eventType.name }}</h3>
              <p class="text-gray-200 mb-4">{{ eventType.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="feature in eventType.features"
                  :key="feature"
                  class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {{ feature }}
                </span>
              </div>
              <button class="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Venues -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Event <span class="text-gradient">Spaces</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Elegant venues designed to accommodate events of all sizes
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(venue, index) in venues"
            :key="venue.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <img :src="venue.image" :alt="venue.name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-serif text-xl font-semibold text-gray-900 mb-3">{{ venue.name }}</h3>
              <p class="text-gray-600 mb-4">{{ venue.description }}</p>

              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-lg font-bold text-muted">{{ venue.capacity }}</div>
                  <div class="text-sm text-gray-600">Guests</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-lg font-bold text-muted">{{ venue.size }}</div>
                  <div class="text-sm text-gray-600">sq ft</div>
                </div>
              </div>

              <div class="space-y-2 mb-4">
                <div
                  v-for="amenity in venue.amenities"
                  :key="amenity"
                  class="flex items-center text-sm text-gray-600"
                >
                  <svg
                    class="w-4 h-4 text-tigers_eye-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ amenity }}
                </div>
              </div>

              <button class="w-full btn-primary">Book Venue</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Event <span class="text-gradient">Services</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event planning and management services
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-2xl text-white">{{ service.icon }}</span>
            </div>
            <h3 class="font-serif text-xl font-semibold text-gray-900 mb-3">{{ service.name }}</h3>
            <p class="text-gray-600 text-sm">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 class="font-serif text-4xl font-bold mb-6">
            Plan Your <span class="text-gradient">Perfect Event</span>
          </h2>
          <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let our experienced event planning team help you create an unforgettable celebration
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="btn-primary text-lg px-10 py-4">Schedule Consultation</button>
            <router-link
              to="/contact"
              class="btn-secondary text-lg px-10 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Contact Events Team
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

const eventTypes = [
  {
    name: 'Weddings',
    description:
      'Create the wedding of your dreams with our elegant venues and personalized service.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    features: ['Bridal Suite', 'Custom Catering', 'Floral Design', 'Photography Services'],
  },
  {
    name: 'Corporate Events',
    description:
      'Professional venues and services for meetings, conferences, and corporate celebrations.',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    features: ['AV Equipment', 'Business Center', 'Catering Options', 'Team Building'],
  },
  {
    name: 'Social Celebrations',
    description: "From birthdays to anniversaries, celebrate life's special moments in style.",
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    features: ['Custom Themes', 'Entertainment', 'Special Menus', 'Decoration Services'],
  },
  {
    name: 'Private Dining',
    description: 'Intimate dining experiences for small groups with personalized menus.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    features: ['Private Chef', 'Wine Pairing', 'Intimate Setting', 'Custom Service'],
  },
]

const venues = [
  {
    name: 'Grand Ballroom',
    description: 'Our largest venue featuring crystal chandeliers and elegant décor.',
    capacity: 200,
    size: '3,500',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    amenities: ['Dance Floor', 'Stage Area', 'Full Bar', 'Climate Control', 'Valet Parking'],
  },
  {
    name: 'Garden Pavilion',
    description: 'Outdoor venue surrounded by beautiful gardens and natural beauty.',
    capacity: 120,
    size: '2,800',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    amenities: ['Garden Views', 'Covered Area', 'Outdoor Bar', 'String Lighting', 'Weather Backup'],
  },
  {
    name: 'Executive Boardroom',
    description: 'Professional meeting space with state-of-the-art technology.',
    capacity: 24,
    size: '800',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    amenities: ['Video Conferencing', 'Presentation Screen', 'High-Speed WiFi', 'Catering Service'],
  },
]

const services = [
  {
    name: 'Event Planning',
    description: 'Full-service event coordination from concept to execution',
    icon: '📋',
  },
  {
    name: 'Catering',
    description: 'Custom menus and professional catering services',
    icon: '🍽️',
  },
  {
    name: 'Floral Design',
    description: 'Beautiful floral arrangements and décor',
    icon: '🌸',
  },
  {
    name: 'Entertainment',
    description: 'Live music, DJs, and entertainment coordination',
    icon: '🎵',
  },
]
</script>
