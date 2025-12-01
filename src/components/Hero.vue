<template>
  <section
    id="home-hero"
    class="relative min-h-screen flex flex-col justify-center overflow-hidden"
  >
    <!-- Background  -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-cover bg-center transform scale-105 animate-subtle-zoom"
        style="
          background-image: url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Hero -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
      <div data-aos="fade-up" data-aos-duration="1000">
        <p class="text-white uppercase tracking-[0.2em] text-sm md:text-base mb-4 opacity-90">
          Welcome to Prizren
        </p>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
          Hotel Prestige
        </h1>
        <p
          class="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A sanctuary of elegance and refined hospitality in the heart of the historic city.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            @click="goToBooking"
            class="px-8 py-4 bg-white text-primary min-w-[200px] uppercase tracking-widest text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Book Your Stay
          </button>
          <button
            @click="scrollToRooms"
            class="px-8 py-4 bg-transparent border border-white text-white min-w-[200px] uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-primary transition-all"
          >
            View Suites
          </button>
        </div>
      </div>
    </div>

    <!-- Simplified Booking Widget -->
    <div
      class="absolute bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-t border-white/20 py-6 hidden lg:block"
    >
      <div class="container-custom px-6">
        <form @submit.prevent="handleBooking" class="flex items-end justify-center gap-8">
          <div class="flex flex-col">
            <label class="text-xs uppercase tracking-wider text-gray-500 mb-2">Check In</label>
            <input
              v-model="checkIn"
              type="date"
              class="bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 p-0 text-primary font-medium"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-xs uppercase tracking-wider text-gray-500 mb-2">Check Out</label>
            <input
              v-model="checkOut"
              type="date"
              class="bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 p-0 text-primary font-medium"
            />
          </div>
          <div class="flex flex-col w-32">
            <label class="text-xs uppercase tracking-wider text-gray-500 mb-2">Guests</label>
            <select
              v-model="guests"
              class="bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 p-0 text-primary font-medium"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <button
            type="submit"
            class="text-accent hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold pb-1 border-b border-accent hover:border-primary"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const checkIn = ref('')
const checkOut = ref('')
const guests = ref('2')

function scrollToRooms() {
  document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })
}

function goToBooking() {
  router.push('/bookingpage')
}

function handleBooking() {
  router.push({
    path: '/bookingpage',
    query: { checkIn: checkIn.value, checkOut: checkOut.value, guests: guests.value },
  })
}
</script>

<style scoped>
.animate-subtle-zoom {
  animation: subtleZoom 20s infinite alternate;
}

@keyframes subtleZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
