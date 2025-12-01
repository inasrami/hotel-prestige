<template>
  <div class="min-h-screen bg-cream pt-20">
    <Navbar />

    <div class="container-custom px-6 py-12">
      <div class="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-gray-200 rounded-sm">
        <h1 class="font-serif text-3xl text-primary mb-8 text-center">Finalize Your Reservation</h1>

        <form @submit.prevent="confirm" class="space-y-8">
          <!-- Section 1 -->
          <div>
            <h3
              class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2"
            >
              Dates & Room
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex flex-col">
                <label class="text-xs uppercase text-gray-500 mb-2">Check In</label>
                <input type="date" class="p-3 bg-gray-50 border border-gray-200" required />
              </div>
              <div class="flex flex-col">
                <label class="text-xs uppercase text-gray-500 mb-2">Check Out</label>
                <input type="date" class="p-3 bg-gray-50 border border-gray-200" required />
              </div>
              <div class="md:col-span-2">
                <label class="text-xs uppercase text-gray-500 mb-2">Room Selection</label>
                <select class="w-full p-3 bg-gray-50 border border-gray-200">
                  <option>Ocean View Suite - $450/night</option>
                  <option>Garden Villa - $380/night</option>
                  <option>Presidential Suite - $750/night</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div>
            <h3
              class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2"
            >
              Guest Details
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex flex-col">
                <label class="text-xs uppercase text-gray-500 mb-2">First Name</label>
                <input type="text" class="p-3 bg-gray-50 border border-gray-200" required />
              </div>
              <div class="flex flex-col">
                <label class="text-xs uppercase text-gray-500 mb-2">Last Name</label>
                <input type="text" class="p-3 bg-gray-50 border border-gray-200" required />
              </div>
              <div class="md:col-span-2">
                <label class="text-xs uppercase text-gray-500 mb-2">Email</label>
                <input type="email" class="p-3 bg-gray-50 border border-gray-200" required />
              </div>
            </div>
          </div>

          <button type="submit" class="btn-primary w-full py-4 text-lg">Confirm Booking</button>
          <p class="text-center text-xs text-gray-400 mt-4">Payment is collected upon arrival.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function confirm() {
  alert('Reservation Confirmed. We look forward to welcoming you.')
  router.push('/')
}
</script>
