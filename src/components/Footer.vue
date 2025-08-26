<template>
  <footer class="bg-primary text-gray-300">
    <div class="w-4/5 mx-auto py-16 grid gap-10 grid-cols-1 md:grid-cols-4">
      <div>
        <h3 class="font-serif text-2xl text-gold mb-2">Hotel Prestige</h3>
        <p class="text-gray-400">Luxury Redefined</p>
      </div>

      <div>
        <h4 class="font-serif text-xl text-gold mb-4">Links</h4>
        <ul class="space-y-2">
          <li><router-link to="/" class="hover:text-white transition">Home</router-link></li>
          <li v-if="route.path === '/'">
            <a href="#rooms" class="hover:text-white transition">Rooms</a>
          </li>
          <li>
            <router-link to="/services" class="hover:text-white transition">Services</router-link>
          </li>
          <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-serif text-xl text-gold mb-4">Contact</h4>
        <div class="space-y-2 text-gray-400">
          <p>support@hotelprestige.com</p>
          <p>+383 44 444 444</p>
          <a href="./#contact"><p>Shatervan, Prizren</p></a>
        </div>
      </div>

      <div>
        <h4 class="font-serif text-xl text-gold mb-4">Social</h4>
        <div class="flex items-center gap-4 text-gray-400">
          <a href="#" class="hover:text-white transition">Instagram</a>
          <span class="hidden sm:inline">|</span>
          <a href="#" class="hover:text-white transition">Facebook</a>
          <span class="hidden sm:inline">|</span>
          <a href="#" class="hover:text-white transition">X</a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800">
      <div class="w-4/5 mx-auto py-6 text-center text-sm text-gray-400">
        <p>&copy; 2025 Hotel Prestige. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>
