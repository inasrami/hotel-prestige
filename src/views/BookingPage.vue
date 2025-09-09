<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative pt-24 pb-12 overflow-hidden">
      <div class="container-custom">
        <div class="text-center">
          <div data-aos="fade-up" data-aos-duration="1000">
            <span class="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              Secure Booking
            </span>
            <h1 class="font-serif text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Book Your <span class="text-gradient">Stay</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete your reservation and prepare for an unforgettable luxury experience
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Booking Form -->
            <div class="lg:col-span-2">
              <div data-aos="fade-right" data-aos-duration="800" class="card-elegant p-8">
                <h2 class="font-serif text-3xl font-semibold text-gray-900 mb-8">Reservation Details</h2>
                
                <form @submit.prevent="submitBooking" class="space-y-8">
                  <!-- Guest Information -->
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                      Guest Information
                    </h3>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">First Name *</label>
                        <input
                          v-model="booking.firstName"
                          type="text"
                          placeholder="Enter your first name"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Last Name *</label>
                        <input
                          v-model="booking.lastName"
                          type="text"
                          placeholder="Enter your last name"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          v-model="booking.email"
                          type="email"
                          placeholder="Enter your email"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Phone Number *</label>
                        <input
                          v-model="booking.phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Stay Details -->
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                      Stay Details
                    </h3>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Check-in Date *</label>
                        <input
                          v-model="booking.checkIn"
                          type="date"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Check-out Date *</label>
                        <input
                          v-model="booking.checkOut"
                          type="date"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Number of Guests *</label>
                        <select
                          v-model="booking.guests"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="">Select guests</option>
                          <option v-for="i in 8" :key="i" :value="i">{{ i }} {{ i === 1 ? 'Guest' : 'Guests' }}</option>
                        </select>
                      </div>
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Room Type *</label>
                        <select
                          v-model="booking.roomType"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="">Select room type</option>
                          <option value="Ocean View Suite">Ocean View Suite - $450/night</option>
                          <option value="Garden Villa">Garden Villa - $380/night</option>
                          <option value="Presidential Suite">Presidential Suite - $750/night</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Special Requests -->
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                      Special Requests
                    </h3>
                    
                    <div class="space-y-4">
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Additional Services</label>
                        <div class="grid md:grid-cols-2 gap-4">
                          <label
                            v-for="service in additionalServices"
                            :key="service.id"
                            class="flex items-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <input
                              v-model="booking.services"
                              type="checkbox"
                              :value="service.id"
                              class="mr-3 text-yellow-500 focus:ring-yellow-400"
                            />
                            <div>
                              <div class="font-medium text-gray-800">{{ service.name }}</div>
                              <div class="text-sm text-gray-600">${{ service.price }}</div>
                            </div>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label class="block text-gray-700 font-medium mb-2">Special Requests</label>
                        <textarea
                          v-model="booking.specialRequests"
                          rows="4"
                          placeholder="Any special requests or preferences..."
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <!-- Error Message -->
                  <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p class="text-red-700">{{ error }}</p>
                  </div>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="!isSubmitting">Confirm Reservation</span>
                    <span v-else class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  </button>
                </form>
              </div>
            </div>

            <!-- Booking Summary -->
            <div class="lg:col-span-1">
              <div data-aos="fade-left" data-aos-duration="800" class="card-elegant p-6 sticky top-24">
                <h3 class="font-serif text-2xl font-semibold text-gray-900 mb-6">Booking Summary</h3>
                
                <div class="space-y-4">
                  <!-- Room Details -->
                  <div v-if="booking.roomType" class="p-4 bg-gray-50 rounded-xl">
                    <h4 class="font-semibold text-gray-800 mb-2">{{ booking.roomType }}</h4>
                    <p class="text-sm text-gray-600">{{ getRoomPrice() }}/night</p>
                  </div>

                  <!-- Stay Duration -->
                  <div v-if="nights > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                    <span class="text-gray-600">{{ nights }} night{{ nights > 1 ? 's' : '' }}</span>
                    <span class="font-semibold">${{ roomTotal }}</span>
                  </div>

                  <!-- Guests -->
                  <div v-if="booking.guests" class="flex justify-between items-center py-2 border-b border-gray-200">
                    <span class="text-gray-600">{{ booking.guests }} guest{{ booking.guests > 1 ? 's' : '' }}</span>
                    <span class="text-gray-600">Included</span>
                  </div>

                  <!-- Additional Services -->
                  <div v-if="selectedServicesTotal > 0" class="space-y-2">
                    <div
                      v-for="serviceId in booking.services"
                      :key="serviceId"
                      class="flex justify-between items-center py-1"
                    >
                      <span class="text-gray-600 text-sm">{{ getServiceName(serviceId) }}</span>
                      <span class="text-sm">${{ getServicePrice(serviceId) }}</span>
                    </div>
                  </div>

                  <!-- Total -->
                  <div class="pt-4 border-t border-gray-300">
                    <div class="flex justify-between items-center">
                      <span class="text-xl font-semibold text-gray-900">Total</span>
                      <span class="text-2xl font-bold text-yellow-600">${{ totalPrice }}</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">Taxes and fees included</p>
                  </div>
                </div>

                <!-- Security Notice -->
                <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div class="flex items-center mb-2">
                    <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="font-semibold text-green-800">Secure Booking</span>
                  </div>
                  <p class="text-sm text-green-700">Your information is protected with SSL encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const booking = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '',
  roomType: '',
  services: [],
  specialRequests: ''
})

const isSubmitting = ref(false)
const error = ref('')

const additionalServices = [
  { id: 'spa', name: 'Spa Package', price: 150 },
  { id: 'airport', name: 'Airport Transfer', price: 75 },
  { id: 'breakfast', name: 'Breakfast Included', price: 45 },
  { id: 'late-checkout', name: 'Late Checkout', price: 50 }
]

const roomPrices = {
  'Ocean View Suite': 450,
  'Garden Villa': 380,
  'Presidential Suite': 750
}

const nights = computed(() => {
  if (!booking.value.checkIn || !booking.value.checkOut) return 0
  const inDate = new Date(booking.value.checkIn)
  const outDate = new Date(booking.value.checkOut)
  const diff = (outDate - inDate) / (1000 * 60 * 60 * 24)
  return diff > 0 ? diff : 0
})

const roomTotal = computed(() => {
  const price = getRoomPrice()
  return price * nights.value
})

const selectedServicesTotal = computed(() => {
  return booking.value.services.reduce((total, serviceId) => {
    const service = additionalServices.find(s => s.id === serviceId)
    return total + (service ? service.price : 0)
  }, 0)
})

const totalPrice = computed(() => {
  return roomTotal.value + selectedServicesTotal.value
})

function getRoomPrice() {
  return roomPrices[booking.value.roomType] || 0
}

function getServiceName(serviceId) {
  const service = additionalServices.find(s => s.id === serviceId)
  return service ? service.name : ''
}

function getServicePrice(serviceId) {
  const service = additionalServices.find(s => s.id === serviceId)
  return service ? service.price : 0
}

async function submitBooking() {
  error.value = ''
  
  // Validation
  if (!booking.value.firstName || !booking.value.lastName || !booking.value.email || !booking.value.phone) {
    error.value = 'Please fill in all required guest information fields.'
    return
  }
  
  if (!booking.value.checkIn || !booking.value.checkOut || !booking.value.guests || !booking.value.roomType) {
    error.value = 'Please complete all stay details.'
    return
  }
  
  if (nights.value <= 0) {
    error.value = 'Check-out date must be after check-in date.'
    return
  }
  
  isSubmitting.value = true
  
  // Simulate booking submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log('Booking submitted:', booking.value)
  
  isSubmitting.value = false
  
  // Show success message
  alert(`Booking confirmed! 
  
Guest: ${booking.value.firstName} ${booking.value.lastName}
Room: ${booking.value.roomType}
Stay: ${nights.value} night${nights.value > 1 ? 's' : ''}
Total: $${totalPrice.value}

A confirmation email will be sent to ${booking.value.email}`)
  
  // Redirect to home
  router.push('/')
}

// Pre-fill form with query parameters
onMounted(() => {
  if (route.query.checkIn) booking.value.checkIn = route.query.checkIn
  if (route.query.checkOut) booking.value.checkOut = route.query.checkOut
  if (route.query.guests) booking.value.guests = parseInt(route.query.guests)
  if (route.query.room) booking.value.roomType = route.query.room
})
</script>