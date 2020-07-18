<template>
  <nav class="navbar is-transparent">
    <div class="container" style="margin-top: 0.8rem; padding-top: 0;">
      <div class="navbar-brand">
        <a class="" @click.prevent="$router.push('/')">
          <img v-if="logoVariant === 'white'" src="~assets/logo_white.png" alt="SenexPay logo white-variant" style="height: 30px; margin-top: 5px;">
          <img v-else src="~assets/logo_blue.png" alt="SenexPay logo blue-variant" style="height: 30px; margin-top: 5px;">
        </a>
        <span
          class="navbar-burger burger"
          :class="{'is-active': isActive, 'white-burger': logoVariant === 'white', 'blue-burger': logoVariant === 'blue'}"
          @click="isActive = !isActive"
        >
          <span /><span /><span />
        </span>
      </div>
      <div
        id="navMenu"
        ref="nav"
        class="navbar-menu"
        :class="{'is-active': isActive,
                 'white-theme': theme === 'white',
                 'blue-theme': theme === 'blue',
                 'nav-link-blue': $device.isMobile}"
      >
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/" :class="{'is-active': isActiveNavItem('/')}">
            <span>Home</span>
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/about" :class="{'is-active': isActiveNavItem('/about')}">
            <span>About</span>
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/track" :class="{'is-active': isActiveNavItem('/track')}">
            <span>Tracking</span>
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/faq" :class="{'is-active': isActiveNavItem('/faq')}">
            <span>FAQ</span>
          </nuxt-link>
          <a href="mailto:info@senexpay.com" class="button">
            <span><i class="fas fa-envelope" /></span>
          </a>
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
  },

  methods: {
    isActiveNavItem(itemRoutePath) {
      return itemRoutePath === this.$route.path
    }
  }
}
</script>

<style>
.header-menu {
  min-width: 130px;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 100;
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.container {
  padding: 2.5rem 0.5rem;
}

.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
.navbar-burger {
  span {
    height: 2px;
    width: 16px;
    margin: -2px auto;
  }
  span:nth-child(2) {
    width: 25px;
  }
}
/*
.navbar-menu {
  min-width: 250px;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 100;
}
*/
.white-theme {
  a {
    color: $white;
    font-family: $font-roboto;
    font-weight: normal;

    &.button {
      color: #0c5db2;
      margin: 0.2rem 0 0 1.5rem;
    }
  }

  .navbar-item {
    padding: 0.5rem 1.5rem;
    span {
      padding-bottom: 0.5rem;
    }

    &.is-active {
      span {
        border-bottom: 3px solid #ffffff;
      }
    }
  }
}

.blue-theme {
  a {
    color: $blue;
    font-family: $font-roboto;
    font-weight: normal;

    &.button {
      background-color: #0c5db2;
      color: #fff;
      margin: 0.2rem 0 0 1.5rem;
    }
  }

  .navbar-item {
    padding: 0.5rem 1.5rem;
    span {
      padding-bottom: 0.5rem;
    }

    &.is-active {
      span {
        border-bottom: 3px solid #0c5db2;
      }
    }
  }
}

.nav-link-blue {
  a {
    color: #0c5db2;
  }
}

.blue-burger {
  color: #0c5db2;
}

.white-burger {
  color: #fff;
}
</style>
