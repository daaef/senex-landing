<template>
  <div class="bg">
    <div class="main bg-wrapper">
      <navbar theme="white" logo-variant="blue" />
      <div class="content">
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
  .content {
    flex: 1;
  }
}

div.bg-wrapper {
  background-image: url('~assets/blue-bg.png');
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.85);
}
</style>
