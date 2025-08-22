<template>
  <nav
    class="flex justify-between items-center px-8 py-2 bg-white shadow-md sticky top-0 z-50 rounded-xl"
  >
    <img src="/images/logo.png" alt="Hotel Logo" class="h-12" />
    <ul class="hidden md:flex gap-8 font-semibold">
      <li><router-link to="/" class="hover:text-gold">Home</router-link></li>
      <li><a href="#rooms" class="hover:text-gold">Rooms</a></li>
      <li><router-link to="/services" class="hover:text-gold">Services</router-link></li>
      <li><a href="#contact" class="hover:text-gold">Contact</a></li>
    </ul>
    <div class="flex gap-4">
      <button
        class="px-2 py-1 border-2 border-gold text-gold rounded-xl hover:bg-darkgold hover:text-white transition text-sm"
      >
        Login
      </button>
      <button class="px-2 py-1 bg-gold text-white rounded-xl hover:bg-darkgold transition text-sm">
        Book Now
      </button>
    </div>
  </nav>
</template>
