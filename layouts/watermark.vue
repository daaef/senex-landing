<template>
  <div class="bg-wrapper">
    <navbar theme="blue" logo-variant="blue" />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.bg-wrappe {
  position: absolute;
  left: -3.78%;
  right: -11.65%;
  top: -60.43%;
  bottom: 58.26%;
  background-image: url('~assets/watermark-bg.png');
  background-repeat: no-repeat;
  z-index: -1;
}
</style>
