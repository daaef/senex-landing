<template>
  <div class="main bg-wrapper">
    <navbar theme="white" logo-variant="white" />
    <div class="content">
      <nuxt />
    </div>

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
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .content {
    flex: 1;
  }
}

div.bg-wrapper {
  background-image: url('~assets/fullblue-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 300px;
}
</style>
