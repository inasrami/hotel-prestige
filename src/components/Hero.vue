<template>
  <header class="relative min-h-screen flex flex-col text-white">
    <div
      class="absolute inset-0 bg-cover bg-top bg-fixed blur-sm brightness-75"
      style="background-image: url('/images/hero-hotel.jpg')"
    ></div>

    <div class="z-20 flex justify-center sticky top-0">
      <Navbar class="w-full bg-white/10"></Navbar>
    </div>

    <div class="flex-1 flex flex-col justify-center items-center text-center">
      <div data-aos="zoom-out" class="relative z-10">
        <h1 class="text-5xl font-serif mb-4">Experience Luxury & Elegance</h1>
        <p class="text-xl max-w-xl">Your exclusive getaway awaits.</p>
      </div>
    </div>

    <div id="availability" class="relative z-0 w-full flex justify-center pb-8">
      <div class="bg-card/80 backdrop-blur-md rounded-xl shadow-elegant p-4 w-[85%] max-w-5xl">
        <form class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div>
            <label class="block text-accent text-sm mb-1" for="check-in">Check-in</label>
            <input
              v-model="checkIn"
              type="date"
              id="check-in"
              class="bg-dark_moss_green-800/50 w-full border rounded-lg p-2 bg-input text-card-foreground border-border focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label class="block text-accent text-sm mb-1" for="check-out">Check-out</label>
            <input
              v-model="checkOut"
              type="date"
              id="check-out"
              class="bg-dark_moss_green-800/50 w-full border rounded-lg p-2 bg-input text-card-foreground border-border focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label class="block text-accent text-sm mb-1" for="guests">Guests</label>
            <input
              v-model.number="guests"
              type="number"
              id="guests"
              min="1"
              class="bg-dark_moss_green-800/50 w-full border rounded-lg p-2 bg-input text-card-foreground border-border focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label class="block text-accent text-sm mb-1" for="room">Room</label>
            <select
              v-model="room"
              id="room"
              class="bg-dark_moss_green-800/50 backdrop-blur-md w-full border rounded-lg p-2 bg-input text-card-foreground border-border focus:ring-2 focus:ring-accent"
            >
              <option value="">Select a room</option>
              <option value="Deluxe Suite">Deluxe Suite</option>
              <option value="Executive Room">Executive Room</option>
              <option value="Presidential Suite">Presidential Suite</option>
            </select>
          </div>

          <div class="flex items-center">
            <button
              type="button"
              @click="goToBooking"
              class="w-full bg-accent text-primary-foreground rounded-lg px-4 py-2 hover:bg-secondary transition"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const checkIn = ref('')
const checkOut = ref('')
const guests = ref(1)
const room = ref('')

function goToBooking() {
  if (!room.value) {
    alert('Please select a room type.')
    return
  }
  if (!guests.value || guests.value <= 0) {
    alert('Please enter a valid number of guests.')
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

<style scoped></style>
