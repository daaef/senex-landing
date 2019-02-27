<template>
  <div class="bg-wrapper">
    <navbar theme="white" logo-variant="blue" />
    <div class="container">
      <nuxt />
      <footer-comp />
    </div>
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

<style lang="scss" scoped>
div.bg-wrapper {
  background-image: url('~assets/blue-bg.png');
  background-repeat: no-repeat;
}
</style>
