<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="navClasses">
    <div class="container-custom">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <span class="text-white font-bold text-xl">HP</span>
          </div>
          <div class="hidden sm:block">
            <h1 class="font-serif text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
              Hotel Prestige
            </h1>
            <p class="text-sm text-gray-300 -mt-1">Luxury Redefined</p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center space-x-8">
          <li>
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ 'active': route.path === '/' }"
            >
              Home
            </router-link>
          </li>
          <li v-if="route.path === '/'">
            <a href="#rooms" class="nav-link">Rooms</a>
          </li>
          <li v-if="route.path === '/'">
            <a href="#amenities" class="nav-link">Amenities</a>
          </li>
          <li>
            <router-link 
              to="/services" 
              class="nav-link"
              :class="{ 'active': route.path === '/services' }"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              class="nav-link"
              :class="{ 'active': route.path === '/contact' }"
            >
              Contact
            </router-link>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <button
            @click="goToBooking"
            class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Now
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl"
      >
        <div class="py-6 px-6 space-y-4">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-xl transition-all duration-300 font-medium"
          >
            Home
          </router-link>
          <a 
            v-if="route.path === '/'"
            href="#rooms" 
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-xl transition-all duration-300 font-medium"
          >
            Rooms
          </a>
          <router-link 
            to="/services" 
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-xl transition-all duration-300 font-medium"
          >
            Services
          </router-link>
          <router-link 
            to="/contact" 
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 rounded-xl transition-all duration-300 font-medium"
          >
            Contact
          </router-link>
          <button
            @click="goToBooking"
            class="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navClasses = computed(() => ({
  'glass-effect': scrolled.value,
  'bg-transparent': !scrolled.value
}))

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function goToBooking() {
  closeMobileMenu()
  router.push('/bookingpage')
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-white hover:text-yellow-300 transition-colors duration-300 font-medium relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>