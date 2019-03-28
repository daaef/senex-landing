<template>
  <div class="main bg-wrapper">
    <navbar theme="blue" logo-variant="blue" />
    <div class="content">
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
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
</style>
