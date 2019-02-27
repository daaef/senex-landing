<template>
  <div class="bg-wrapper">
    <navbar theme="white" logo-variant="white" />
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

<style lang="scss" scoped>
div.bg-wrapper {
  background-image: url('~assets/fullblue-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 300px;
  min-height: 300px;
}
</style>
