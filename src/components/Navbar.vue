<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="navClasses">
    <div class="px-3 container-custom">
      <div class="flex items-center justify-between py-3 lg:py-5">
        <!-- Logo -->
        <router-link to="/" class="relative z-50 flex items-center space-x-2 group">
          <div class="hidden sm:block">
            <h1 class="font-serif text-xl font-bold tracking-wide uppercase">
              Hotel Prestige
            </h1>
          </div>
        </router-link>

        <!-- Desktop Navigation + CTA -->
        <div
          class="items-center hidden space-x-6 transition-all duration-300 transform lg:flex"
          :class="{
            'opacity-0 -translate-y-2 pointer-events-none': !navVisible,
            'opacity-100 translate-y-0 pointer-events-auto': navVisible,
          }"
        >
          <ul class="flex items-center space-x-6">
            <li v-for="link in links" :key="link.path">
              <router-link
                :to="link.path"
                class="text-sm font-medium tracking-widest uppercase nav-link"
                :class="{ active: route.path === link.path }"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>

          <!-- CTA Button -->
          <div class="items-center hidden space-x-2 md:flex">
            <button
              @click="goToBooking"
              class="px-4 py-1 text-xs font-medium tracking-widest uppercase transition-all duration-300 border"
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
          class="relative z-50 flex items-center justify-center w-8 h-8 p-0 transition-colors duration-300 lg:hidden"
          :class="{
            'text-primary': scrolled && !mobileMenuOpen,
            'text-white': !scrolled || mobileMenuOpen,
          }"
          :aria-expanded="mobileMenuOpen"
          :aria-controls="'mobile-menu'"
          :aria-label="mobileMenuOpen ? 'Close navigation' : 'Open navigation'"
        >
          <span class="text-2xl material-symbols-outlined">
            {{ mobileMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        class="fixed inset-0 z-40 flex flex-col items-center justify-center p-2 transition-all duration-500 ease-in-out bg-gray-500/50 backdrop-blur-lg lg:hidden"
        id="mobile-menu"
        :class="
          mobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        "
      >
        <nav class="flex flex-col space-y-4 text-center">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="font-serif text-xl text-white transition-colors hover:text-accent"
          >
            {{ link.name }}
          </router-link>
          <button
            @click="goToBooking"
            class="px-6 py-2 mt-4 text-sm font-medium tracking-widest uppercase bg-white text-primary"
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
