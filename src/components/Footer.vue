<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-tigers_eye-500 to-dark_moss_green-500 rounded-xl flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl">HP</span>
            </div>
            <div>
              <h3 class="font-serif text-2xl font-bold">Hotel Prestige</h3>
              <p class="text-gray-400 text-sm">Luxury Redefined</p>
            </div>
          </div>
          <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
            Experience unparalleled luxury and hospitality in the heart of Prizren. Where every
            moment becomes a cherished memory.
          </p>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="w-10 h-10 bg-gray-700 hover:bg-gradient-to-br hover:from-tigers_eye-500 hover:to-dark_moss_green-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <span class="text-lg">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-serif text-xl font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/"
                class="text-gray-300 hover:text-tigers_eye-400 transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-1 h-1 bg-tigers_eye-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Home
              </router-link>
            </li>
            <li v-if="route.path === '/'">
              <a
                href="#rooms"
                class="text-gray-300 hover:text-tigers_eye-400 transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-1 h-1 bg-tigers_eye-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Rooms & Suites
              </a>
            </li>
            <li v-if="route.path === '/'">
              <a
                href="#amenities"
                class="text-gray-300 hover:text-tigers_eye-400 transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-1 h-1 bg-tigers_eye-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Amenities
              </a>
            </li>
            <li>
              <router-link
                to="/services"
                class="text-gray-300 hover:text-tigers_eye-400 transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-1 h-1 bg-tigers_eye-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Services
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-300 hover:text-tigers_eye-400 transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-1 h-1 bg-tigers_eye-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-serif text-xl font-semibold mb-6">Get in Touch</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div
                class="w-6 h-6 bg-tigers_eye-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              >
                <svg class="w-4 h-4 text-tigers_eye-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p class="text-gray-300">Shatervan District</p>
                <p class="text-gray-400 text-sm">Prizren, Kosovo</p>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <div
                class="w-6 h-6 bg-tigers_eye-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg class="w-4 h-4 text-tigers_eye-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </div>
              <p class="text-gray-300">+383 44 444 444</p>
            </div>

            <div class="flex items-center space-x-3">
              <div
                class="w-6 h-6 bg-tigers_eye-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg class="w-4 h-4 text-tigers_eye-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <p class="text-gray-300">info@hotelprestige.com</p>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="mt-8">
            <h5 class="font-semibold text-white mb-3">Stay Updated</h5>
            <div class="flex">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-tigers_eye-400"
              />
              <button
                class="px-4 py-2 bg-gradient-to-r from-tigers_eye-500 to-dark_moss_green-500 text-white rounded-r-lg hover:from-tigers_eye-600 hover:to-dark_moss_green-600 transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">&copy; 2025 Hotel Prestige. All rights reserved.</p>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-tigers_eye-400 transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="text-gray-400 hover:text-tigers_eye-400 transition-colors"
              >Terms of Service</a
            >
            <a href="#" class="text-gray-400 hover:text-tigers_eye-400 transition-colors"
              >Cookie Policy</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const socialLinks = [
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
]
</script>
