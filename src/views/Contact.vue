<template>
  <div class="min-h-screen pt-20 bg-white">
    <Navbar />

    <section class="section-padding">
      <div class="container-custom px-6">
        <div class="text-center mb-16">
          <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block"
            >Get in Touch</span
          >
          <h1 class="font-serif text-5xl text-primary mb-6">Contact Us</h1>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <!-- Info -->
          <div class="space-y-12">
            <div>
              <h3 class="font-serif text-2xl mb-6">Visit Us</h3>
              <p class="text-gray-600 font-light leading-relaxed">
                Shatervan District<br />
                Prizren, Kosovo
              </p>
            </div>
            <div>
              <h3 class="font-serif text-2xl mb-6">Inquiries</h3>
              <div class="space-y-4 text-gray-600 font-light">
                <p>
                  <span class="block text-xs uppercase text-gray-400 tracking-widest mb-1"
                    >Reservations</span
                  >
                  reservations@hotelprestige.com
                </p>
                <p>
                  <span class="block text-xs uppercase text-gray-400 tracking-widest mb-1"
                    >General</span
                  >
                  info@hotelprestige.com
                </p>
                <p>
                  <span class="block text-xs uppercase text-gray-400 tracking-widest mb-1"
                    >Phone</span
                  >
                  +383 44 444 444
                </p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="bg-cream p-10">
            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="flex flex-col">
                  <label class="text-xs uppercase tracking-widest text-gray-500 mb-2"
                    >First Name</label
                  >
                  <input
                    type="text"
                    class="bg-white p-3 border border-gray-200 focus:border-accent"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="text-xs uppercase tracking-widest text-gray-500 mb-2"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    class="bg-white p-3 border border-gray-200 focus:border-accent"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <label class="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  class="bg-white p-3 border border-gray-200 focus:border-accent"
                />
              </div>
              <div class="flex flex-col">
                <label class="text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea
                  rows="4"
                  class="bg-white p-3 border border-gray-200 focus:border-accent"
                ></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
function submit() {
  alert('Message sent.')
}
</script>
