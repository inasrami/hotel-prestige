<template>
  <section class="section-padding bg-cream">
    <div class="container-custom px-6">
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 class="font-serif text-4xl md:text-5xl text-primary mb-6">Curated Amenities</h2>
        <div class="w-20 h-[1px] bg-accent mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        <div
          v-for="(amenity, index) in amenities"
          :key="amenity.title"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
          class="flex flex-col items-center text-center group"
        >
          <div
            class="mb-6 text-accent opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="material-symbols-outlined text-5xl font-light">{{ amenity.icon }}</span>
          </div>
          <h3 class="font-serif text-xl text-primary mb-3">{{ amenity.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed max-w-xs">
            {{ amenity.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const amenities = [
  {
    title: 'Infinity Pool',
    description: 'Unwind in our temperature-controlled infinity pool overlooking the horizon.',
    icon: 'pool',
  },
  {
    title: 'Fine Dining',
    description: 'Culinary masterpieces created by world-renowned chefs using local ingredients.',
    icon: 'restaurant',
  },
  {
    title: 'Wellness Spa',
    description: 'Rejuvenate your senses with our comprehensive selection of spa treatments.',
    icon: 'spa',
  },
  {
    title: 'Concierge',
    description: 'Dedicated service to ensure your every need is met, any time of day.',
    icon: 'concierge',
  },
  {
    title: 'Private Transport',
    description: 'Luxury airport transfers and private chauffeurs at your disposal.',
    icon: 'directions_car',
  },
  {
    title: 'Fitness Center',
    description: 'State-of-the-art equipment for your daily wellness routine.',
    icon: 'fitness_center',
  },
]
</script>
