<template>
  <div>
    <section class="page-header">
      <div class="page-header-content">
        <h1>Exceptional service tailored to your every need</h1>
      </div>
    </section>
    <ServicesGrid />
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Experience Luxury?</h2>
        <p>Book your stay and discover the exceptional service that sets Hotel Prestige apart.</p>
        <button class="btn-gold btn-large">Book Your Stay</button>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ServicesGrid from '../components/ServicesGrid.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    ServicesGrid,
    Footer,
  },
}
</script>

<style scoped>
.page-header {
  background: #75642dd5;
  color: white;
  padding: 120px 0 80px;
  text-align: center;
  overflow: hidden;
  display: grid;
  position: relative;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/hotelroom.jpg') center/cover;
  opacity: 0.3;
  z-index: 1;
}

.page-header-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.cta-section {
  background: #adadad;
  color: white;
  padding: 80px 0;
  text-align: center;
  margin-top: 80px;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.6;
}

.btn-large {
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.btn-gold {
  background-color: #d4af37;
  color: #fff;
  border: 2px solid #d4af37;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-gold:hover {
  background-color: #b89527;
  border-color: #b89527;
}
</style>
