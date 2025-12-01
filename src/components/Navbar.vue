<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="navClasses">
    <div class="container-custom px-6">
      <div class="flex justify-between items-center py-5">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group z-50 relative">
          <div class="hidden sm:block">
            <h1 class="font-serif text-2xl font-bold tracking-wide uppercase">Hotel Prestige</h1>
          </div>
        </router-link>

        <!-- Desktop Navigation + CTA -->
        <div
          class="hidden lg:flex items-center space-x-8 transition-all duration-300 transform"
          :class="{
            'opacity-0 -translate-y-2 pointer-events-none': !navVisible,
            'opacity-100 translate-y-0 pointer-events-auto': navVisible,
          }"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="link in links" :key="link.path">
              <router-link
                :to="link.path"
                class="nav-link text-sm font-medium uppercase tracking-widest"
                :class="{ active: route.path === link.path }"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>

          <!-- CTA Button -->
          <div class="hidden md:flex items-center space-x-4">
            <button
              @click="goToBooking"
              class="px-6 py-2 text-sm uppercase tracking-widest font-medium border transition-all duration-300"
              :class="
                scrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary'
              "
            >
              Book Now
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 z-50 relative transition-colors duration-300"
          :class="{
            'text-primary': scrolled && !mobileMenuOpen,
            'text-white': !scrolled || mobileMenuOpen,
          }"
          :aria-expanded="mobileMenuOpen"
          :aria-controls="'mobile-menu'"
          :aria-label="mobileMenuOpen ? 'Close navigation' : 'Open navigation'"
        >
          <span class="material-symbols-outlined text-3xl">
            {{ mobileMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        class="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out"
        id="mobile-menu"
        :class="
          mobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        "
      >
        <nav class="flex flex-col space-y-6 text-center">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="text-white text-2xl font-serif hover:text-accent transition-colors"
          >
            {{ link.name }}
          </router-link>
          <button
            @click="goToBooking"
            class="mt-8 px-8 py-3 bg-white text-primary uppercase tracking-widest font-medium"
          >
            Book Your Stay
          </button>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const heroBottom = ref(0)
const navHeight = ref(80)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Dining', path: '/dining' },
  { name: 'Spa', path: '/spa' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const navClasses = computed(() => {
  return {
    'bg-white shadow-sm py-2': scrolled.value,
    'bg-transparent py-4': !scrolled.value,
    'text-white': !scrolled.value,
    'text-primary': scrolled.value,
  }
})

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const navVisible = computed(() => scrolled.value || mobileMenuOpen.value)

function updateHeroBounds() {
  const hero = document.getElementById('home-hero')
  const navEl = document.querySelector('nav')
  navHeight.value = navEl?.getBoundingClientRect().height || 80
  if (hero) {
    const rect = hero.getBoundingClientRect()
    heroBottom.value = rect.bottom + window.scrollY
  } else {
    heroBottom.value = 0
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function goToBooking() {
  closeMobileMenu()
  router.push('/bookingpage')
}

function handleScroll() {
  if (route.path === '/') {
    const threshold = heroBottom.value > 0 ? heroBottom.value - navHeight.value : 50
    scrolled.value = window.scrollY > threshold
  } else {
    scrolled.value = true
  }
}

onMounted(() => {
  updateHeroBounds()
  window.addEventListener('resize', updateHeroBounds)
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateHeroBounds)
})

watch(
  () => route.path,
  () => {
    updateHeroBounds()
    handleScroll()
  },
)
</script>

<style scoped>
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>
