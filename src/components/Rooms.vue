<template>
  <section id="rooms" class="py-20 bg-gradient-to-bl from-slate-100 to-sky-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-serif mb-5 text-center text-gray-800">Luxury Suites & Villas</h2>
      <p class="text-xl font-serif mb-16 text-center text-gray-800">
        Each accommodation is thoughtfully designed to provide the ultimate in comfort, luxury, and
        breathtaking ocean views.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          v-for="room in rooms"
          :key="room.title"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="relative">
            <img :src="room.image" :alt="room.title" class="w-full h-64 object-cover" />
            <div
              v-if="room.bestValue"
              class="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              Best Value
            </div>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-serif text-gray-800">{{ room.title }}</h3>
              <div class="text-right">
                <div class="text-2xl font-bold text-gray-800">${{ room.price }}</div>
                <div class="text-sm text-gray-500">per night</div>
              </div>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed">{{ room.description }}</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div
                v-for="amenity in room.amenities"
                :key="amenity.name"
                class="flex items-center text-sm text-gray-600"
              >
                <span class="text-yellow-500 mr-2">{{ amenity.icon }}</span>
                <span>{{ amenity.name }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in room.tags"
                :key="tag"
                class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex gap-3">
              <button
                class="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                class="flex-1 py-3 px-4 bg-dark_moss_green-400/50 text-white rounded-lg hover:bg-dark_moss_green-500/50 transition-colors font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const rooms = [
  {
    title: 'Ocean Suite',
    price: 450,
    description: 'Luxurious oceanfront suite with panoramic views and private balcony',
    image: '/images/room2.jpg',
    bestValue: true,
    amenities: [
      { name: 'King Size Bed', icon: '🛏️' },
      { name: '2 Guests', icon: '👥' },
      { name: 'Ocean View', icon: '🌊' },
      { name: 'Free WiFi', icon: '📶' },
    ],
    tags: ['King Bed', 'Ocean View', 'Private Balcony', 'Marble Bathroom'],
  },
  {
    title: 'Presidential Villa',
    price: 850,
    description: 'Ultimate luxury with private pool and dedicated butler service',
    image: '/images/room3.jpg',
    bestValue: true,
    amenities: [
      { name: '2 Bedrooms', icon: '🛏️' },
      { name: '4 Guests', icon: '👥' },
      { name: 'Private Pool', icon: '🏊' },
      { name: 'Butler Service', icon: '🎩' },
    ],
    tags: ['2 Bedrooms', 'Private Pool', 'Butler Service', 'Kitchen'],
  },
  {
    title: 'Garden Villa',
    price: 320,
    description: 'Serene garden setting with modern amenities and spa access',
    image: '/images/room4.jpg',
    bestValue: true,
    amenities: [
      { name: 'Queen Size Bed', icon: '🛏️' },
      { name: '2 Guests', icon: '👥' },
      { name: 'Valet Parking', icon: '🚗' },
      { name: 'Garden View', icon: '🌿' },
    ],
    tags: ['Queen Bed', 'Garden View'],
  },
  {
    title: 'Executive Suite',
    price: 380,
    description: 'Spacious suite with premium amenities and city views',
    image: '/images/room5.jpg',
    bestValue: false,
    amenities: [
      { name: 'King Size Bed', icon: '🛏️' },
      { name: '2 Guests', icon: '👥' },
      { name: 'City View', icon: '🏙️' },
      { name: 'Mini Bar', icon: '🍷' },
    ],
    tags: ['King Bed', 'City View', 'Executive Lounge'],
  },
  {
    title: 'Family Suite',
    price: 280,
    description: 'Perfect for families with connecting rooms and kid-friendly amenities',
    image: '/images/room6.jpg',
    bestValue: false,
    amenities: [
      { name: '2 Queen Beds', icon: '🛏️' },
      { name: '4 Guests', icon: '👥' },
      { name: 'Kids Area', icon: '🧸' },
      { name: 'Kitchenette', icon: '🍳' },
    ],
    tags: ['Family Friendly', 'Connecting Rooms', 'Kitchenette'],
  },
  {
    title: 'Penthouse Loft',
    price: 650,
    description: 'Rooftop luxury with contemporary design and panoramic city views',
    image: '/images/room7.jpg',
    bestValue: false,
    amenities: [
      { name: 'King Size Bed', icon: '🛏️' },
      { name: '2 Guests', icon: '👥' },
      { name: 'Rooftop Terrace', icon: '🏢' },
      { name: 'Premium WiFi', icon: '📶' },
    ],
    tags: ['Penthouse', 'Rooftop Terrace', 'Contemporary Design'],
  },
]
</script>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
