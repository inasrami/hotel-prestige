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
          background-image: url('https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      <div class="relative z-10 text-center text-white px-6">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span
            class="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-semibold mb-6"
            >Premium Services</span
          >
          <h1 class="font-serif text-6xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Exceptional <span class="text-gradient">Service</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Tailored to your every need with uncompromising attention to detail
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div data-aos="fade-up">
            <h2 class="font-serif text-5xl font-bold text-gray-900 mb-6">
              Our <span class="text-gradient">Services</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From personalized concierge assistance to world-class dining, every service is
              designed to exceed your expectations
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="group card-elegant p-8 text-center hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-500"
          >
            <!-- Icon -->
            <div class="relative mb-6">
              <div
                class="w-20 h-20 mx-auto bg-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"
              >
                <span class="text-3xl text-white">{{ service.icon }}</span>
              </div>
              <div
                class="absolute -inset-4 bg-accent-10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>

            <!-- Content -->
            <h3
              class="font-serif text-2xl font-semibold text-gray-900 mb-4 group-hover:text-accent transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ service.description }}
            </p>

            <!-- Features -->
            <div class="space-y-2">
              <div
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center justify-center text-sm text-gray-500"
              >
                <svg class="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
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
              class="absolute inset-0 bg-accent-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 class="font-serif text-5xl font-bold mb-6">
            Ready to Experience <span class="text-gradient">Luxury?</span>
          </h2>
          <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Book your stay and discover the exceptional service that sets Hotel Prestige apart from
            the rest
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="goToBooking" class="btn-primary text-lg px-10 py-4">
              Book Your Stay
            </button>
            <router-link
              to="/contact"
              class="btn-secondary text-lg px-10 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToBooking() {
  router.push('/bookingpage')
}

const services = [
  {
    title: '24/7 Room Service',
    description:
      'Gourmet dining delivered to your door at any hour, featuring our signature dishes and international cuisine.',
    icon: '🛎️',
    features: ['24/7 Availability', 'Gourmet Menu', 'In-Room Dining', 'Special Dietary Options'],
  },
  {
    title: 'Luxury Transportation',
    description:
      'Premium airport transfers and city tours in our fleet of luxury vehicles with professional chauffeurs.',
    icon: '🚗',
    features: ['Airport Transfers', 'City Tours', 'Luxury Vehicles', 'Professional Chauffeurs'],
  },
  {
    title: 'Event Planning',
    description:
      'From intimate gatherings to grand celebrations, our expert team creates unforgettable experiences.',
    icon: '🎉',
    features: ['Wedding Planning', 'Corporate Events', 'Private Parties', 'Custom Catering'],
  },
  {
    title: 'Spa & Wellness',
    description:
      'Rejuvenate your body and mind with our comprehensive spa treatments and wellness programs.',
    icon: '💆‍♀️',
    features: ['Massage Therapy', 'Facial Treatments', 'Wellness Programs', 'Fitness Training'],
  },
  {
    title: 'Concierge Services',
    description:
      'Our knowledgeable concierge team assists with reservations, recommendations, and special requests.',
    icon: '🗝️',
    features: ['Restaurant Reservations', 'Tour Booking', 'Ticket Services', 'Personal Shopping'],
  },
  {
    title: 'Laundry & Valet',
    description:
      'Professional laundry, dry cleaning, and valet services to keep you looking your best.',
    icon: '👔',
    features: ['Same-Day Service', 'Dry Cleaning', 'Pressing', 'Shoe Shine'],
  },
]
</script>
