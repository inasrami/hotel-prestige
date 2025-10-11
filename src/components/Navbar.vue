<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="navClasses">
    <div class="container-custom">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <img src="/images/logo.png" alt="Hotel Logo" class="h-10 w-10 object-contain" />
          <div class="hidden sm:block">
            <h1
              class="font-serif text-2xl font-bold text-white group-hover:text-tigers_eye-300 transition-colors"
            >
              Hotel Prestige
            </h1>
            <p class="text-sm text-gray-300 -mt-1">Luxury Redefined</p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center space-x-8">
          <li>
            <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link" :class="{ active: route.path === '/about' }">
              About
            </router-link>
          </li>
          <li class="relative group">
            <button class="nav-link flex items-center">
              Experiences
              <svg
                class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            >
              <div class="py-2">
                <router-link
                  to="/dining"
                  class="block px-4 py-2 text-gray-700 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 transition-colors"
                  >Dining</router-link
                >
                <router-link
                  to="/spa"
                  class="block px-4 py-2 text-gray-700 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 transition-colors"
                  >Spa & Wellness</router-link
                >
                <router-link
                  to="/events"
                  class="block px-4 py-2 text-gray-700 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 transition-colors"
                  >Events</router-link
                >
                <router-link
                  to="/gallery"
                  class="block px-4 py-2 text-gray-700 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 transition-colors"
                  >Gallery</router-link
                >
              </div>
            </div>
          </li>
          <li>
            <router-link
              to="/services"
              class="nav-link"
              :class="{ active: route.path === '/services' }"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="nav-link"
              :class="{ active: route.path === '/contact' }"
            >
              Contact
            </router-link>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <button
            @click="goToBooking"
            class="bg-gradient-to-r from-tigers_eye-500 to-dark_moss_green-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-tigers_eye-600 hover:to-dark_moss_green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
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
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            About
          </router-link>
          <router-link
            to="/dining"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Dining
          </router-link>
          <router-link
            to="/spa"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Spa & Wellness
          </router-link>
          <router-link
            to="/events"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Events
          </router-link>
          <router-link
            to="/gallery"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Gallery
          </router-link>
          <router-link
            to="/services"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Services
          </router-link>
          <router-link
            to="/contact"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-800 hover:bg-tigers_eye-100 hover:text-tigers_eye-600 rounded-xl transition-all duration-300 font-medium"
          >
            Contact
          </router-link>
          <button
            @click="goToBooking"
            class="w-full mt-4 bg-gradient-to-r from-tigers_eye-500 to-dark_moss_green-500 text-white py-3 rounded-xl font-semibold hover:from-tigers_eye-600 hover:to-dark_moss_green-600 transition-all duration-300"
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
  'bg-transparent': !scrolled.value,
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
  @apply text-white hover:text-tigers_eye-300 transition-colors duration-300 font-medium relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--accent), var(--teal));
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>
