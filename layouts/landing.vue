<template>
  <div>
    <!--    <app-modal
      :v-modal="sideBarOpen"
      initial-class="side-nav-con"
      final-class-open="side-nav-show"
      final-class-close="side-nav-hide"
    >
      &lt;!&ndash; <SideNav v-if="showSide" @show="show" @reset-scroll="resetScroll" /> &ndash;&gt;
      <transition name="fade">
        <SideNav v-if="sideBarOpen" />
      </transition>
    </app-modal>-->
    <div>
      <HomeHeaderHome />
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
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      meta: [{ name: 'theme-color', content: '041d45' }]
    }
  },
  computed: {
    ...mapState({
      sideBarOpen: 'sideBarOpen',
      showCookies: 'showCookies'
    })
  },
  mounted() {
    this.$store.commit('toggleSideBar', false)
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
</style>
