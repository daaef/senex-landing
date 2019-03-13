<template>
  <nav class="navbar is-transparent">
    <div class="container" style="margin-top: 0.5rem; padding-top: 0;">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img v-if="logoVariant === 'white'" src="~assets/logo_white.png" alt="SenexPay logo white-variant">
          <img v-else src="~assets/logo_blue.png" alt="SenexPay logo blue-variant">
        </a>
        <span class="navbar-burger burger" :class="{'is-active': isActive}" @click="isActive = !isActive">
          <span /><span /><span />
        </span>
      </div>
      <div
        id="navMenu"
        ref="nav"
        class="navbar-menu"
        :class="{'is-active': isActive,
                 'white-theme': theme === 'white',
                 'blue-theme': theme === 'blue'}"
      >
        <div class="navbar-end">
          <nuxt-link class="navbar-item is-active" to="/">
            Home
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/about">
            About
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/track">
            Tracking
          </nuxt-link>
          <a href="#" class="navbar-item">Blog</a>
          <nuxt-link class="navbar-item" to="/faq">
            FAQ
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    logoVariant: {
      type: String,
      default: 'white'
    },
    // Choose navbar theme: blue | white
    theme: {
      type: String,
      default: 'white'
    }
  },

  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.container {
  padding: 2.5rem;
}

.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}

.white-theme {
  a {
    color: $white;
    font-family: $font-roboto;
    font-weight: normal;
  }
}

.blue-theme {
  a {
    color: $blue;
    font-family: $font-roboto;
    font-weight: normal;
  }
}

.navbar-item {
  &.is-active {
    position: relative;
    &:after {
      content: '';
      background: black;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50%;
      width: 1px;
    }
  }
}
</style>
