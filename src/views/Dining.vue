<template>
  <div class="min-h-screen pt-20">
    <Navbar />
    <div class="bg-primary text-white py-24 px-6 text-center">
      <h1 class="font-serif text-5xl mb-4">Culinary Arts</h1>
      <p class="text-gray-400 font-light">Flavors of the Mediterranean and beyond.</p>
    </div>

    <section class="section-padding bg-white">
      <div class="container-custom px-6">
        <div class="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            class="w-full h-[500px] object-cover"
          />
          <div class="lg:pl-12">
            <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block"
              >Fine Dining</span
            >
            <h2 class="font-serif text-4xl text-primary mb-6">The Prestige Room</h2>
            <p class="text-gray-600 font-light mb-8 leading-relaxed">
              An intimate setting where gastronomy meets art. Our tasting menus change with the
              seasons, highlighting the finest local produce paired with an extensive wine list.
            </p>
            <button class="btn-secondary">View Menu</button>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 lg:pr-12">
            <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block"
              >Casual</span
            >
            <h2 class="font-serif text-4xl text-primary mb-6">The Terrace</h2>
            <p class="text-gray-600 font-light mb-8 leading-relaxed">
              Al fresco dining with breathtaking views of the fortress. Enjoy light bites, artisan
              coffee, and signature cocktails in a relaxed atmosphere.
            </p>
            <button class="btn-secondary">Reserve Table</button>
          </div>
          <img
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
            class="w-full h-[500px] object-cover order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
