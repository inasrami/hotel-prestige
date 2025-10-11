<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Background Video/Image -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
      ></div>
    </div>

    <!-- Navigation -->
    <Navbar />

    <!-- Hero Content -->
    <div class="relative z-10 flex-1 flex items-center justify-center text-center px-6">
      <div class="max-w-5xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-lg">
            Experience
            <span class="text-tigers_eye-600 block">Prestige</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where luxury meets comfort in the heart of paradise. Discover unparalleled elegance and
            world-class hospitality.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="scrollToRooms" class="btn-primary text-lg px-10 py-4">
              Explore Rooms
            </button>
            <button
              @click="goToBooking"
              class="btn-secondary text-lg px-10 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking Widget -->
    <div class="relative z-10 pb-8">
      <div class="container-custom">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="glass-effect rounded-2xl p-6 mx-6 shadow-2xl border border-white/20"
        >
          <form class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="space-y-2">
              <label class="block text-white text-sm font-medium">Check-in</label>
              <input
                v-model="checkIn"
                type="date"
                class="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-tigers_eye-400 transition-all duration-300"
              />
            </div>

            <div class="space-y-2">
              <label class="block text-white text-sm font-medium">Check-out</label>
              <input
                v-model="checkOut"
                type="date"
                class="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-tigers_eye-400 transition-all duration-300"
              />
            </div>

            <div class="space-y-2">
              <label class="block text-white text-sm font-medium">Guests</label>
              <input
                v-model.number="guests"
                type="number"
                min="1"
                max="8"
                class="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-tigers_eye-400 transition-all duration-300"
              />
            </div>

            <div class="space-y-2">
              <label class="block text-white text-sm font-medium">Room Type</label>
              <select
                v-model="room"
                class="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:bg-white/20 focus:border-tigers_eye-400 transition-all duration-300"
              >
                <option value="" class="text-gray-900">Select Room</option>
                <option value="Ocean View Suite" class="text-gray-900">Ocean View Suite</option>
                <option value="Garden Villa" class="text-gray-900">Garden Villa</option>
                <option value="Presidential Suite" class="text-gray-900">Presidential Suite</option>
              </select>
            </div>

            <div class="flex items-end">
              <button
                type="button"
                @click="handleBooking"
                class="w-full bg-gradient-to-r from-tigers_eye-500 to-dark_moss_green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-tigers_eye-600 hover:to-dark_moss_green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from './Navbar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const checkIn = ref('')
const checkOut = ref('')
const guests = ref(2)
const room = ref('')

function scrollToRooms() {
  const roomsSection = document.getElementById('rooms')
  if (roomsSection) {
    roomsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

function goToBooking() {
  router.push('/bookingpage')
}

function handleBooking() {
  if (!room.value) {
    alert('Please select a room type.')
    return
  }
  if (!checkIn.value || !checkOut.value) {
    alert('Please select both check-in and check-out dates.')
    return
  }

  const inDate = new Date(checkIn.value)
  const outDate = new Date(checkOut.value)
  if (outDate <= inDate) {
    alert('Check-out must be after check-in.')
    return
  }

  router.push({
    path: '/bookingpage',
    query: {
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      guests: String(guests.value),
      room: room.value,
    },
  })
}
</script>

<style scoped>
/* Custom date input styling */
input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>
