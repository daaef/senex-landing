<template>
  <div>
    <app-modal
      :v-modal="showSide"
      :scroll-reset="reset"
      initial-class="side-nav-con"
      final-class-open="side-nav-show"
    >
      <transition name="fade">
        <SideNav v-if="showSide" @show="show" @reset-scroll="resetScroll" />
      </transition>
    </app-modal>
    <!-- <app-modal
      :v-modal="showSide"
      :scroll-reset="reset"
      initial-class="side-nav-con"
      final-class-open="show-modal"
      final-class-close="hide-modal"
    >
      <SideNav :is-open="showSide" @show="show" @reset-scroll="resetScroll" />
    </app-modal> -->
    <div class="nav-margin-top">
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
      showSide: false,
      reset: false
    }
  },
  methods: {
    toggleSide() {
      this.showSide = !this.showSide
    },
    show(val) {
      this.showSide = val
    },
    resetScroll(val) {
      this.reset = val
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
