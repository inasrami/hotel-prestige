<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      
      <div class="relative z-10 text-center text-white px-6">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span class="inline-block px-4 py-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-300 text-sm font-semibold mb-6">
            Wellness & Relaxation
          </span>
          <h1 class="font-serif text-6xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Spa & <span class="text-gradient">Wellness</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Rejuvenate your body, mind, and spirit in our tranquil sanctuary
          </p>
        </div>
      </div>
    </section>

    <!-- Spa Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Signature <span class="text-gradient">Treatments</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our carefully curated wellness experiences designed to restore and revitalize
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div
            v-for="(treatment, index) in treatments"
            :key="treatment.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
          >
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-sky-500 rounded-2xl flex items-center justify-center">
                <span class="text-2xl text-white">{{ treatment.icon }}</span>
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-serif text-2xl font-semibold text-gray-900">{{ treatment.name }}</h3>
                  <div class="text-right">
                    <div class="text-xl font-bold text-teal-600">${{ treatment.price }}</div>
                    <div class="text-sm text-gray-500">{{ treatment.duration }}</div>
                  </div>
                </div>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ treatment.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="benefit in treatment.benefits"
                    :key="benefit"
                    class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {{ benefit }}
                  </span>
                </div>
                <button class="btn-primary">Book Treatment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Wellness <span class="text-gradient">Facilities</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed for your complete wellness journey
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(facility, index) in facilities"
            :key="facility.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <img 
              :src="facility.image" 
              :alt="facility.name"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="font-serif text-xl font-semibold text-gray-900 mb-3">{{ facility.name }}</h3>
              <p class="text-gray-600 mb-4">{{ facility.description }}</p>
              <div class="space-y-2">
                <div
                  v-for="feature in facility.features"
                  :key="feature"
                  class="flex items-center text-sm text-gray-600"
                >
                  <svg class="w-4 h-4 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spa Packages -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Wellness <span class="text-gradient">Packages</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive wellness experiences tailored to your needs
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(pkg, index) in packages"
            :key="pkg.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            :class="{ 'ring-2 ring-teal-500': pkg.popular }"
          >
            <div v-if="pkg.popular" class="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div class="p-8">
              <div class="text-center mb-6">
                <h3 class="font-serif text-2xl font-bold text-gray-900 mb-2">{{ pkg.name }}</h3>
                <div class="text-3xl font-bold text-teal-600 mb-1">${{ pkg.price }}</div>
                <div class="text-gray-500">{{ pkg.duration }}</div>
              </div>
              <p class="text-gray-600 mb-6 text-center">{{ pkg.description }}</p>
              <div class="space-y-3 mb-8">
                <div
                  v-for="service in pkg.services"
                  :key="service"
                  class="flex items-center text-gray-700"
                >
                  <svg class="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ service }}
                </div>
              </div>
              <button class="w-full btn-primary">Book Package</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

const treatments = [
  {
    name: 'Signature Massage',
    description: 'A personalized full-body massage using premium oils and techniques tailored to your specific needs and preferences.',
    price: 180,
    duration: '90 min',
    icon: '💆‍♀️',
    benefits: ['Stress Relief', 'Muscle Relaxation', 'Improved Circulation', 'Deep Relaxation']
  },
  {
    name: 'Hydrating Facial',
    description: 'Rejuvenating facial treatment with organic ingredients to restore your skin\'s natural glow and vitality.',
    price: 150,
    duration: '75 min',
    icon: '✨',
    benefits: ['Skin Hydration', 'Anti-Aging', 'Pore Cleansing', 'Radiant Glow']
  },
  {
    name: 'Hot Stone Therapy',
    description: 'Therapeutic massage using heated volcanic stones to release tension and promote deep muscle relaxation.',
    price: 200,
    duration: '90 min',
    icon: '🔥',
    benefits: ['Deep Muscle Relief', 'Stress Reduction', 'Improved Sleep', 'Energy Balance']
  },
  {
    name: 'Aromatherapy Session',
    description: 'Holistic treatment combining essential oils with massage techniques to balance mind, body, and spirit.',
    price: 160,
    duration: '60 min',
    icon: '🌿',
    benefits: ['Mental Clarity', 'Emotional Balance', 'Stress Relief', 'Mood Enhancement']
  }
]

const facilities = [
  {
    name: 'Infinity Pool',
    description: 'Stunning infinity pool with panoramic views, perfect for relaxation and gentle exercise.',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
    features: ['Heated Water', 'Poolside Service', 'Panoramic Views', 'Aqua Fitness Classes']
  },
  {
    name: 'Thermal Spa',
    description: 'Traditional thermal baths with mineral-rich waters for therapeutic benefits.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    features: ['Mineral Waters', 'Temperature Therapy', 'Hydrotherapy Jets', 'Relaxation Areas']
  },
  {
    name: 'Fitness Center',
    description: 'State-of-the-art fitness facility with modern equipment and personal training.',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
    features: ['Modern Equipment', 'Personal Training', 'Group Classes', 'Wellness Coaching']
  }
]

const packages = [
  {
    name: 'Relaxation Retreat',
    description: 'Perfect for unwinding and releasing stress with our most popular treatments.',
    price: 320,
    duration: 'Half Day',
    popular: false,
    services: [
      'Signature Massage (90 min)',
      'Hydrating Facial (75 min)',
      'Spa Lunch',
      'Pool & Thermal Access'
    ]
  },
  {
    name: 'Ultimate Wellness',
    description: 'Complete wellness experience combining all our signature treatments.',
    price: 580,
    duration: 'Full Day',
    popular: true,
    services: [
      'Hot Stone Therapy (90 min)',
      'Aromatherapy Session (60 min)',
      'Hydrating Facial (75 min)',
      'Gourmet Spa Lunch',
      'All Facilities Access',
      'Personal Wellness Consultation'
    ]
  },
  {
    name: 'Express Renewal',
    description: 'Quick but effective treatments for busy schedules.',
    price: 180,
    duration: '3 Hours',
    popular: false,
    services: [
      'Express Facial (45 min)',
      'Relaxation Massage (60 min)',
      'Light Refreshments',
      'Pool Access'
    ]
  }
]
</script>