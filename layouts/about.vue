<template>
  <div>
    <!--    <app-modal
      :v-modal="sideBarOpen"
      initial-class="side-nav-con"
      final-class-open="side-nav-show"
      final-class-close="side-nav-hide"
    >
      <transition name="fade">
        <SideNav v-if="sideBarOpen" />
      </transition>
    </app-modal>-->
    <!-- <app-modal
      :v-modal="showSide"
      :scroll-reset="reset"
      initial-class="side-nav-con"
      final-class-open="show-modal"
      final-class-close="hide-modal"
    >
      <SideNav :is-open="showSide" @show="show" @reset-scroll="resetScroll" />
    </app-modal> -->
    <div class="">
      <NavBar
        :theme="{
          backgroundColor: '#FFFFFF',
          color: '#053888',
          lightTheme: true
        }"
      />
      <div class="nav-padding-top">
        <Nuxt />
        <div class="container u-d-none">
          <div v-if="showCookies" class="cookies">
            <span class="close">
              <img src="img/close-grey.svg" @click="toggleCookies()" />
            </span>
            <p class="paragraph">
              We use cookies to improve your experience and for marketing. Learn
              more in our <strong>cookie policy</strong>.
            </p>
            <div class="btn decline" @click="toggleCookies()">Decline</div>
            <div class="btn accept" @click="toggleCookies()">Accept</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      meta: [{ name: 'theme-color', content: 'ffffff' }]
    }
  },
  computed: {
    ...mapState({
      sideBarOpen: 'sideBarOpen',
      showCookies: 'showCookies'
    })
  },
  methods: {
    toggleCookies() {
      this.$store.dispatch('toggleCookies')
    }
  }
}
</script>

<style>
html {
  font-family: 'SFPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  /* font-size: 16px; */
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

.nav-padding-top {
  padding-top: 100px;
}
</style>
