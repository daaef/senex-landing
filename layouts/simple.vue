<template>
  <div class="bg">
    <div class="main">
      <navbar theme="blue" logo-variant="blue" />
      <div class="content" style="margin-bottom: 0;">
        <nuxt />
      </div>
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
.bg {
  background: url('~assets/bg/bg-13.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  // background-image: url('~assets/bg-pattern.png');
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: screen;
  .content {
    flex: 1;
  }
}
</style>
