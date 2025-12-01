<template>
  <section class="section-padding bg-white overflow-hidden">
    <div class="container-custom px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Info -->
        <div data-aos="fade-right">
          <span class="text-accent text-sm font-bold uppercase tracking-widest mb-2 block"
            >Location</span
          >
          <h2 class="font-serif text-4xl md:text-5xl text-primary mb-8">Historic Shatervan</h2>
          <p class="text-gray-600 mb-8 font-light text-lg leading-relaxed">
            Nestled in the cultural heart of Prizren, Hotel Prestige offers immediate access to the
            city's most cherished landmarks. Walk cobblestone streets to discover ancient bridges,
            mosques, and vibrant local bazaars.
          </p>

          <div class="space-y-6 mb-10">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-accent mt-1">museum</span>
              <div>
                <h4 class="font-serif text-lg text-primary">Cultural Landmarks</h4>
                <p class="text-sm text-gray-500">Steps away from Sinan Pasha Mosque</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-accent mt-1">storefront</span>
              <div>
                <h4 class="font-serif text-lg text-primary">Local Bazaars</h4>
                <p class="text-sm text-gray-500">Explore artisan shops and jewelry</p>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-200 rounded-sm bg-cream">
            <h4 class="font-serif text-lg mb-4">Contact Us</h4>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg">location_on</span>
                <span>Shatervan, Prizren, Kosovo</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg">call</span>
                <span>+383 44 444 444</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg">mail</span>
                <span>info@hotelprestige.com</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="relative h-[600px]" data-aos="fade-left">
          <div class="absolute inset-0 bg-gray-200 w-full h-full">
            <iframe
              src="https://maps.google.com/maps?q=prizren%20shatervan&t=m&z=15&ie=UTF8&iwloc=&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style="border: 0; filter: grayscale(100%) contrast(90%)"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <!-- Decorative Border -->
          <div
            class="absolute -top-4 -right-4 w-full h-full border border-accent pointer-events-none hidden md:block"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
