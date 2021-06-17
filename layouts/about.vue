<template>
  <div>
    <app-modal
      :v-modal="showSide"
      initial-class-state="side-nav-con"
      final-class-state="side-nav-show"
    >
      <SideNav :is-open="showSide" @toggle-side="toggleSide" />
    </app-modal>
    <div class="nav-margin-top" :class="showSide ? 'lock-scroll' : ''">
      <Nav
        :theme="{ backgroundColor: '#FFFFFF', color: '#162F55' }"
        @toggle-side="toggleSide"
      />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppModal from '~/components/custom/AppModal.vue'
export default {
  components: { AppModal },
  data() {
    return {
      showSide: false
    }
  },
  methods: {
    toggleSide() {
      this.showSide = !this.showSide
    }
  }
}
</script>

<style>
html {
  font-family: 'SFPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.nav-margin-top {
  margin-top: 75px;
}
</style>
