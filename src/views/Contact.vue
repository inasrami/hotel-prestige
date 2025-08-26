<template>
  <div class="bg-gradient-to-bl from-slate-100 to-sky-100 relative z-10 grid place-items-center">
    <div class="z-50 flex w-full align-top sticky top-0 mb-5">
      <Navbar class="w-full"></Navbar>
    </div>
    <div
      data-aos="zoom-in"
      class="w-full max-w-lg bg-gradient-to-bl from-slate-200 to-sky-200 rounded-2xl shadow-xl p-8 my-5"
    >
      <h2 class="text-2xl font-bold text-dark_moss_green-100 mb-6 text-center">Contact Us</h2>

      <form @submit.prevent="submitForm" class="space-y-5">
        <div>
          <label class="block text-dark_moss_green-100 mb-2" for="name">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Enter your name"
            class="w-full px-4 py-3 border rounded-xl bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 focus:outline-none transition"
            required
          />
        </div>

        <div>
          <label class="block text-dark_moss_green-100 mb-2" for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border rounded-xl bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 focus:outline-none transition"
            required
          />
        </div>

        <div>
          <label class="block text-dark_moss_green-100 mb-2" for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            placeholder="Write your message..."
            class="w-full px-4 py-3 border rounded-xl bg-gradient-to-bl from-slate-100 to-sky-100 focus:ring-2 focus:ring-sky-200 focus:outline-none transition resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-slate-600 text-white py-3 rounded-xl font-medium hover:bg-slate-700 transition duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>

      <p v-if="success" class="text-green-600 font-medium mt-4 text-center">
        ✅ Message sent successfully!
      </p>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
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
