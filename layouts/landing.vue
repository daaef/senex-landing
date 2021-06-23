<template>
  <div>
    <app-modal
      :v-modal="sideBarOpen"
      initial-class="side-nav-con"
      final-class-open="side-nav-show"
      final-class-close="side-nav-hide"
    >
      <!-- <SideNav v-if="showSide" @show="show" @reset-scroll="resetScroll" /> -->
      <transition name="fade">
        <SideNav v-if="sideBarOpen" />
      </transition>
    </app-modal>
    <div>
      <Nav :theme="{ backgroundColor: '#162F55', color: '#FFFFFF' }" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppModal from '~/components/custom/AppModal.vue'
export default {
  components: { AppModal },
  computed: {
    ...mapState({
      sideBarOpen: 'sideBarOpen'
    })
  },
  methods: {}
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
</style>
