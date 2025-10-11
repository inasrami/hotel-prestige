<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      <div class="relative z-10 text-center text-white px-6">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span
            class="inline-block px-4 py-2 bg-tigers_eye-500/20 backdrop-blur-sm border border-tigers_eye-500/30 rounded-full text-tigers_eye-300 text-sm font-semibold mb-6"
          >
            Culinary Excellence
          </span>
          <h1 class="font-serif text-6xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Dining <span class="text-gradient">Experience</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Savor exceptional cuisine crafted by world-class chefs
          </p>
        </div>
      </div>
    </section>

    <!-- Restaurants Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Our <span class="text-gradient">Restaurants</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From fine dining to casual elegance, discover culinary journeys that delight every
            palate
          </p>
        </div>

        <div class="space-y-16">
          <div
            v-for="(restaurant, index) in restaurants"
            :key="restaurant.name"
            class="grid lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
          >
            <div
              :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
              :class="{ 'lg:col-start-2': index % 2 === 1 }"
            >
              <div class="relative">
                <img
                  :src="restaurant.image"
                  :alt="restaurant.name"
                  class="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"
                ></div>
              </div>
            </div>

            <div
              :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
              :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }"
            >
              <div class="space-y-6">
                <div>
                  <h3 class="font-serif text-3xl font-bold text-gray-900 mb-2">
                    {{ restaurant.name }}
                  </h3>
                  <p class="text-dark_moss_green-600 font-semibold">{{ restaurant.cuisine }}</p>
                </div>

                <p class="text-lg text-gray-600 leading-relaxed">{{ restaurant.description }}</p>

                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 rounded-xl p-4">
                    <div class="text-2xl font-bold text-gray-900">{{ restaurant.rating }}</div>
                    <div class="text-sm text-gray-600">Michelin Rating</div>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-4">
                    <div class="text-2xl font-bold text-gray-900">{{ restaurant.capacity }}</div>
                    <div class="text-sm text-gray-600">Seats</div>
                  </div>
                </div>

                <div class="space-y-3">
                  <h4 class="font-semibold text-gray-900">Signature Dishes:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="dish in restaurant.dishes"
                      :key="dish"
                      class="px-3 py-1 bg-tigers_eye-100 text-tigers_eye-700 rounded-full text-sm font-medium"
                    >
                      {{ dish }}
                    </span>
                  </div>
                </div>

                <div class="flex gap-4">
                  <button class="btn-primary">Make Reservation</button>
                  <button class="btn-secondary">View Menu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Highlights -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-dark_moss_green-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Menu <span class="text-gradient">Highlights</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A taste of our most celebrated dishes
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(dish, index) in menuHighlights"
            :key="dish.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <img :src="dish.image" :alt="dish.name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="font-serif text-xl font-semibold text-gray-900">{{ dish.name }}</h3>
                <span class="text-lg font-bold text-dark_moss_green-600">${{ dish.price }}</span>
              </div>
              <p class="text-gray-600 text-sm mb-4">{{ dish.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{{
                  dish.category
                }}</span>
                <div class="flex text-yellow-400">
                  <span v-for="i in 5" :key="i" class="text-sm">
                    {{ i <= dish.rating ? '★' : '☆' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reservations CTA -->
    <section
      class="section-padding bg-gradient-to-br from-gray-900 via-tigers_eye-900 to-dark_moss_green-900 text-white"
    >
      <div class="container-custom text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 class="font-serif text-4xl font-bold mb-6">
            Ready to <span class="text-gradient">Dine?</span>
          </h2>
          <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Reserve your table and embark on an unforgettable culinary journey
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="btn-primary text-lg px-10 py-4">Make Reservation</button>
            <router-link
              to="/contact"
              class="btn-secondary text-lg px-10 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

const restaurants = [
  {
    name: 'Prestige Fine Dining',
    cuisine: 'Contemporary European',
    description:
      'Our flagship restaurant offers an exquisite fine dining experience with innovative European cuisine crafted from the finest local and international ingredients.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    rating: '★★★',
    capacity: '60',
    dishes: ['Truffle Risotto', 'Wagyu Beef', 'Lobster Thermidor', 'Chocolate Soufflé'],
  },
  {
    name: 'Terrace Bistro',
    cuisine: 'Mediterranean & Local',
    description:
      'Enjoy casual elegance with stunning views of Prizren. Our bistro celebrates Mediterranean flavors with authentic Kosovo specialties.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    rating: '★★',
    capacity: '80',
    dishes: ['Grilled Branzino', 'Kosovo Lamb', 'Burrata Salad', 'Baklava'],
  },
  {
    name: 'Sky Lounge',
    cuisine: 'Cocktails & Light Bites',
    description:
      'Our rooftop lounge offers craft cocktails and artisanal small plates with panoramic views of the historic city.',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
    rating: '★★',
    capacity: '40',
    dishes: ['Craft Cocktails', 'Oysters', 'Charcuterie', 'Artisan Cheese'],
  },
]

const menuHighlights = [
  {
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle, parmesan, and wild mushrooms',
    price: 45,
    category: 'Main Course',
    rating: 5,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
  },
  {
    name: 'Grilled Branzino',
    description: 'Fresh Mediterranean sea bass with lemon herb butter and seasonal vegetables',
    price: 38,
    category: 'Seafood',
    rating: 5,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  },
  {
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla bean ice cream and berry coulis',
    price: 18,
    category: 'Dessert',
    rating: 5,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
  },
]
</script>
