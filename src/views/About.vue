<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      data-hero-theme="dark"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      <div class="relative z-10 text-center text-white px-6">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span
            class="inline-block px-4 py-2 bg-accent-10 backdrop-blur-sm border border-accent-10 rounded-full text-accent text-sm font-semibold mb-6"
          >
            Our Story
          </span>
          <h1 class="font-serif text-6xl md:text-7xl font-bold mb-6 text-shadow-lg">
            About <span class="text-gradient">Prestige</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A legacy of luxury hospitality in the heart of Prizren
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
              Our <span class="text-gradient">Heritage</span>
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Hotel Prestige stands as a testament to timeless elegance and modern luxury in the
              historic city of Prizren. Since our establishment, we have been dedicated to providing
              an unparalleled hospitality experience that honors both tradition and innovation.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the prestigious Shatervan district, our hotel seamlessly blends
              contemporary comfort with the rich cultural heritage of Kosovo, offering guests a
              unique window into the soul of this remarkable region.
            </p>
            <div class="grid grid-cols-3 gap-8 text-center">
              <div>
                <div class="text-3xl font-bold text-muted mb-2">50+</div>
                <div class="text-gray-600">Luxury Suites</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-muted mb-2">15+</div>
                <div class="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-muted mb-2">98%</div>
                <div class="text-gray-600">Guest Satisfaction</div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
              alt="Hotel Interior"
              class="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Our <span class="text-gradient">Values</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-2xl text-white">{{ value.icon }}</span>
            </div>
            <h3 class="font-serif text-2xl font-semibold text-gray-900 mb-4">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section (simplified) -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span class="text-gradient">Team</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of hospitality professionals is committed to delivering a refined and
            personalized experience for every guest. From front desk to concierge and culinary
            experts, we work together to ensure every detail is cared for.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

const values = [
  {
    title: 'Excellence',
    description:
      'We strive for perfection in every detail, ensuring that each guest experience exceeds expectations.',
    icon: '⭐',
  },
  {
    title: 'Authenticity',
    description:
      'We celebrate the rich culture and heritage of Kosovo while providing modern luxury amenities.',
    icon: '🏛️',
  },
  {
    title: 'Hospitality',
    description:
      'Our warm, personalized service creates lasting memories and genuine connections with our guests.',
    icon: '❤️',
  },
]

// team array removed for simplified about page
</script>
