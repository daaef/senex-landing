<template>
  <div>
    <navbar theme="blue" logo-variant="blue" />
    <nuxt />
    <footer-comp />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Navbar,
    FooterComp: Footer
  }
}
</script>
