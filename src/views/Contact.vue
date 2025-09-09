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
              Get in Touch
            </span>
            <h1 class="font-serif text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Contact <span class="text-gradient">Us</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to assist you with any questions or special requests. Reach out to our dedicated team.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <!-- Contact Form -->
          <div data-aos="fade-right" data-aos-duration="800">
            <div class="card-elegant p-8">
              <h2 class="font-serif text-3xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 font-medium mb-2" for="firstName">First Name</label>
                    <input
                      v-model="form.firstName"
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-gray-700 font-medium mb-2" for="lastName">Last Name</label>
                    <input
                      v-model="form.lastName"
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2" for="email">Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2" for="phone">Phone Number</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2" for="subject">Subject</label>
                  <select
                    v-model="form.subject"
                    id="subject"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="event">Event Planning</option>
                    <option value="services">Services Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2" for="message">Message</label>
                  <textarea
                    v-model="form.message"
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                </button>
              </form>

              <!-- Success Message -->
              <div
                v-if="showSuccess"
                class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <p class="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div data-aos="fade-left" data-aos-duration="800" class="space-y-8">
            <!-- Contact Details -->
            <div class="card-elegant p-8">
              <h3 class="font-serif text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div
                  v-for="contact in contactInfo"
                  :key="contact.title"
                  class="flex items-start space-x-4"
                >
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span class="text-white text-xl">{{ contact.icon }}</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">{{ contact.title }}</h4>
                    <p class="text-gray-600">{{ contact.value }}</p>
                    <p v-if="contact.subtitle" class="text-gray-500 text-sm">{{ contact.subtitle }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="card-elegant p-8">
              <h3 class="font-serif text-2xl font-semibold text-gray-900 mb-6">Business Hours</h3>
              
              <div class="space-y-3">
                <div
                  v-for="hour in businessHours"
                  :key="hour.day"
                  class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span class="font-medium text-gray-700">{{ hour.day }}</span>
                  <span class="text-gray-600">{{ hour.time }}</span>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="card-elegant p-8">
              <h3 class="font-serif text-2xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
              
              <div class="space-y-4">
                <button
                  @click="goToBooking"
                  class="w-full btn-primary text-left flex items-center justify-between"
                >
                  <span>Make a Reservation</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                
                <router-link
                  to="/services"
                  class="w-full btn-secondary text-left flex items-center justify-between block"
                >
                  <span>View Our Services</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </router-link>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

function goToBooking() {
  router.push('/bookingpage')
}

async function submitForm() {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}

const contactInfo = [
  {
    title: 'Address',
    value: 'Shatervan District, Prizren',
    subtitle: 'Kosovo',
    icon: '📍'
  },
  {
    title: 'Phone',
    value: '+383 44 444 444',
    subtitle: 'Available 24/7',
    icon: '📞'
  },
  {
    title: 'Email',
    value: 'info@hotelprestige.com',
    subtitle: 'We respond within 24 hours',
    icon: '✉️'
  },
  {
    title: 'Reservations',
    value: 'reservations@hotelprestige.com',
    subtitle: 'For booking inquiries',
    icon: '🏨'
  }
]

const businessHours = [
  { day: 'Monday - Friday', time: '24/7' },
  { day: 'Saturday', time: '24/7' },
  { day: 'Sunday', time: '24/7' },
  { day: 'Front Desk', time: 'Always Open' },
  { day: 'Concierge', time: '6:00 AM - 12:00 AM' }
]
</script>