<template>
  <div class="min-h-screen flex items-center justify-center bg-cream p-6">
    <div data-aos="zoom-in" class="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-6">
      <h1 class="text-2xl font-bold mb-6 text-gold text-center">Hotel Booking</h1>

      <!-- Name -->
      <input
        v-model="name"
        type="text"
        placeholder="Your name"
        class="w-full border rounded-lg p-2 mb-3 bg-gray-600 focus:ring-2 focus:ring-gold text-white"
      />

      <!-- Email -->
      <input
        v-model="email"
        type="email"
        placeholder="Your email"
        class="w-full border rounded-lg p-2 mb-3 bg-gray-600 focus:ring-2 focus:ring-gold text-white"
      />

      <!-- Check-in / Check-out -->
      <label class="block text-gold mb-1">Check-in Date:</label>
      <input
        v-model="checkIn"
        type="date"
        class="w-full border rounded-lg p-2 mb-3 bg-gray-600 focus:ring-2 focus:ring-gold text-white"
      />

      <label class="block text-gold mb-1">Check-out Date:</label>
      <input
        v-model="checkOut"
        type="date"
        class="w-full border rounded-lg p-2 mb-3 bg-gray-600 focus:ring-2 focus:ring-gold text-white"
      />

      <!-- Guests -->
      <label class="block text-gold mb-1">Guests:</label>
      <input
        v-model.number="guests"
        type="number"
        min="1"
        class="w-full border rounded-lg p-2 mb-3 bg-gray-600 focus:ring-2 focus:ring-gold text-white"
      />

      <!-- Price Display -->
      <p class="mt-4 text-lg font-semibold text-darkgold text-center">
        Total Price: <span class="text-white">${{ totalPrice }}</span>
      </p>

      <!-- Error -->
      <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>

      <!-- Submit -->
      <button
        @click="submitBooking"
        class="w-full bg-gold text-white py-2 rounded-lg mt-4 hover:bg-darkgold"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const email = ref('')
const checkIn = ref('')
const checkOut = ref('')
const guests = ref(1)
const error = ref('')

const pricePerNight = 80

// Calculate number of nights
const nights = computed(() => {
  if (!checkIn.value || !checkOut.value) return 0
  const inDate = new Date(checkIn.value)
  const outDate = new Date(checkOut.value)
  const diff = (outDate - inDate) / (1000 * 60 * 60 * 24)
  return diff > 0 ? diff : 0
})

// Calculate total price
const totalPrice = computed(() => guests.value * nights.value * pricePerNight)

// Form submission
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
