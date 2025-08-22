<template>
  <div id="home">
    <Hero />
    <Rooms />
    <Amenities />
    <Location />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Rooms from '../components/Rooms.vue'
import Amenities from '../components/Amenities.vue'
import Location from '../components/Location.vue'
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
