<template>
  <div class="bg-gradient-to-bl from-slate-100 to-sky-100 relative z-10 grid place-items-center">
    <div class="z-50 flex w-full align-top sticky top-0 mb-5">
      <Navbar class="w-full"></Navbar>
    </div>
    <div
      data-aos="zoom-in"
      class="w-full max-w-md bg-gradient-to-bl from-slate-200 to-sky-200 rounded-xl shadow-lg p-6 my-5"
    >
      <h1 class="text-2xl font-bold mb-6 text-dark_moss_green-100 text-center">Hotel Booking</h1>

      <input
        v-model="name"
        type="text"
        placeholder="Your name"
        class="w-full border rounded-lg p-2 mb-3 bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 text-white"
      />

      <input
        v-model="email"
        type="email"
        placeholder="Your email"
        class="w-full border rounded-lg p-2 mb-3 bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 text-white"
      />

      <label class="block text-dark_moss_green-100 mb-1">Check-in Date:</label>
      <input
        v-model="checkIn"
        type="date"
        class="w-full border rounded-lg p-2 mb-3 bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 text-dark_moss_green-100"
      />

      <label class="block text-dark_moss_green-100 mb-1">Check-out Date:</label>
      <input
        v-model="checkOut"
        type="date"
        class="w-full border rounded-lg p-2 mb-3 bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 text-dark_moss_green-100"
      />

      <label class="block text-dark_moss_green-100 mb-1">Guests:</label>
      <input
        v-model.number="guests"
        type="number"
        min="1"
        class="w-full border rounded-lg p-2 mb-3 bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 text-dark_moss_green-100"
      />

      <p class="mt-4 text-lg font-semibold text-dark_moss_green-100 text-center">
        Total Price: <span class="text-white">${{ totalPrice }}</span>
      </p>

      <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>

      <button
        @click="submitBooking"
        class="w-full bg-slate-600 text-white py-2 rounded-lg mt-4 hover:bg-slate-700 transition duration-300 shadow-md"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, computed } from 'vue'

const name = ref('')
const email = ref('')
const checkIn = ref('')
const checkOut = ref('')
const guests = ref(1)
const error = ref('')

const pricePerNight = 80

const nights = computed(() => {
  if (!checkIn.value || !checkOut.value) return 0
  const inDate = new Date(checkIn.value)
  const outDate = new Date(checkOut.value)
  const diff = (outDate - inDate) / (1000 * 60 * 60 * 24)
  return diff > 0 ? diff : 0
})

const totalPrice = computed(() => guests.value * nights.value * pricePerNight)

function submitBooking() {
  if (!name.value || !email.value || !checkIn.value || !checkOut.value) {
    error.value = 'Please fill out all fields.'
    return
  }

  if (nights.value === 0) {
    error.value = 'Check-out must be after check-in.'
    return
  }

  error.value = ''
  alert(`Booking confirmed for ${guests.value} guest(s).
  Stay: ${nights.value} night(s).
  Total: $${totalPrice.value}`)
}
</script>
