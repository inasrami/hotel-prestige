<template>
  <!-- <div
    class="absolute inset-0 bg-cover bg-center h-120% blur-sm brightness-65"
    style="background-image: url('/images/hotelroom.jpg')"
  ></div> -->
  <div class="min-h-screen relative z-10 grid place-items-center p-6">
    <div class="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl p-8">
      <h2 class="text-2xl font-bold text-gold mb-6 text-center">Contact Us</h2>

      <form @submit.prevent="submitForm" class="space-y-5">
        <!-- Name -->
        <div>
          <label class="block text-darkgold mb-2" for="name">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Enter your name"
            class="w-full px-4 py-3 border rounded-xl bg-gray-600 focus:ring-2 focus:ring-gold focus:outline-none transition"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-darkgold mb-2" for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border rounded-xl bg-gray-600 focus:ring-2 focus:ring-gold focus:outline-none transition"
            required
          />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-darkgold mb-2" for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            placeholder="Write your message..."
            class="w-full px-4 py-3 border rounded-xl bg-gray-600 focus:ring-2 focus:ring-gold focus:outline-none transition resize-none"
            required
          ></textarea>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-gold text-white py-3 rounded-xl font-medium hover:bg-darkgold transition duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>

      <!-- Success Message -->
      <p v-if="success" class="text-green-600 font-medium mt-4 text-center">
        ✅ Message sent successfully!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)

const submitForm = () => {
  console.log('Form submitted:', form.value)

  success.value = true

  form.value = { name: '', email: '', message: '' }

  setTimeout(() => {
    success.value = false
  }, 3000)
}
</script>
