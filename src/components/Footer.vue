<template>
  <footer class="bg-primary text-white pt-20 pb-10">
    <div class="container-custom px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="md:col-span-1">
          <h3 class="font-serif text-2xl mb-6">Hotel Prestige</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            A luxury destination redefining hospitality in Prizren. Where tradition meets modern
            elegance.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-serif text-lg mb-6 text-accent">Explore</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li>
              <router-link to="/" class="hover:text-white transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-white transition-colors"
                >Services</router-link
              >
            </li>
            <li>
              <router-link to="/dining" class="hover:text-white transition-colors"
                >Dining</router-link
              >
            </li>
            <li>
              <router-link to="/gallery" class="hover:text-white transition-colors"
                >Gallery</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-serif text-lg mb-6 text-accent">Contact</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-base mt-0.5">location_on</span>
              <span>Shatervan, Prizren</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-outlined text-base">call</span>
              <span>+383 44 444 444</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-outlined text-base">mail</span>
              <span>info@hotelprestige.com</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-serif text-lg mb-6 text-accent">Newsletter</h4>
          <p class="text-gray-400 text-sm mb-4">Subscribe for exclusive offers.</p>
          <form class="flex border-b border-gray-600 pb-2">
            <input
              type="email"
              placeholder="Email Address"
              class="bg-transparent border-none focus:ring-0 p-0 text-white placeholder-gray-500 w-full text-sm"
            />
            <button
              type="submit"
              class="text-accent uppercase text-xs font-bold tracking-widest hover:text-white transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-gray-500 text-xs uppercase tracking-wider">
          © 2025 Hotel Prestige. All rights reserved.
        </p>
        <div class="flex gap-6">
          <!-- Socials-->
          <a
            href="#"
            class="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest"
            >Instagram</a
          >
          <a
            href="#"
            class="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest"
            >Facebook</a
          >
          <a
            href="#"
            class="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
