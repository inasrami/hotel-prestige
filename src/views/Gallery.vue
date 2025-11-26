<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      <div class="relative z-10 text-center text-white px-6">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 class="font-serif text-6xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Our <span class="text-gradient">Gallery</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty and elegance of Hotel Prestige
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Filters -->
    <section class="py-12 bg-white">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
              activeCategory === category
                ? 'bg-accent text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(image, index) in filteredImages"
            :key="index"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            @click="openLightbox(image, index)"
          >
            <img
              :src="image.url"
              :alt="image.title"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="font-serif text-xl font-semibold mb-1">{{ image.title }}</h3>
              <p class="text-sm text-gray-200">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-full">
        <img
          :src="currentImage.url"
          :alt="currentImage.title"
          class="max-w-full max-h-full object-contain rounded-lg"
        />
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div class="absolute bottom-4 left-4 right-4 text-white text-center">
          <h3 class="font-serif text-2xl font-semibold mb-2">{{ currentImage.title }}</h3>
          <p class="text-gray-200">{{ currentImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, computed } from 'vue'

const activeCategory = ref('All')
const lightboxOpen = ref(false)
const currentImage = ref({})

const categories = ['All', 'Rooms', 'Dining', 'Spa', 'Facilities', 'Views']

const images = [
  {
    url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    title: 'Ocean View Suite',
    description: 'Luxurious suite with panoramic ocean views',
    category: 'Rooms',
  },
  {
    url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    title: 'Garden Villa',
    description: 'Spacious villa surrounded by tropical gardens',
    category: 'Rooms',
  },
  {
    url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    title: 'Presidential Suite',
    description: 'The ultimate luxury experience',
    category: 'Rooms',
  },
  {
    url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    title: 'Fine Dining Restaurant',
    description: 'Award-winning culinary excellence',
    category: 'Dining',
  },
  {
    url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    title: 'Rooftop Bar',
    description: 'Cocktails with stunning city views',
    category: 'Dining',
  },
  {
    url: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    title: 'Spa Treatment Room',
    description: 'Tranquil space for ultimate relaxation',
    category: 'Spa',
  },
  {
    url: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
    title: 'Infinity Pool',
    description: 'Stunning pool overlooking the ocean',
    category: 'Facilities',
  },
  {
    url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    title: 'Hotel Exterior',
    description: 'Elegant architecture in historic Prizren',
    category: 'Views',
  },
  {
    url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and facilities',
    category: 'Facilities',
  },
]

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') {
    return images
  }
  return images.filter((image) => image.category === activeCategory.value)
})

function openLightbox(image, index) {
  currentImage.value = image
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>
