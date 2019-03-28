<template>
  <div class="main">
    <div v-if="error.statusCode === 404" class="content wrapper">
      <img src="~assets/logo_white.png" alt="Senex logo - white variant" class="logo" :class="{'mobile-logo': $device.isMobile}">
      <img src="~assets/error-404.png" alt="error 404 art image" class="error-404" :class="{'mobile-error-404': $device.isMobile}">
      <div class="text-content">
        <p class="broken-link">
          Link is broken -_-
        </p>
        <p class="return-home">
          Return to <nuxt-link to="/" class="hompage-link">
            homepage
          </nuxt-link>
        </p>
      </div>
    </div>
    <div v-else class="content has-text-centered">
      An error occurred
    </div>
    <footer-comp :display-contact-fab="false" style="margin-top: 5rem; margin-bottom: 1rem;" />
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'

export default {
  components: {
    FooterComp: Footer
  },

  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/fonts.scss';
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .content {
    flex: 1;
  }
}

.wrapper {
  position: relative;
  padding: 1rem 0;
  width: 100%;
  background-image: url('~assets/error-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &.mobile-wrapper {
    background-image: url('~assets/error-bg-mobile.png');
  }

  img {
    display: block;
    margin: 0 auto;
  }

  .logo {
    width: 18%;
  }

  .error-404 {
    margin-top: 2rem;
    width: 30%;
  }

  .mobile-logo {
    width: 35%;
  }

  .mobile-error-404 {
    width: 40%;
  }

  .text-content {
    position: relative;
    bottom: 30px;
    width: 100%;
    font-family: $font-avenir;
    margin: 2rem 0 auto;
    text-align: center;
    color: #fff;
    .broken-link {
      font-weight: 500;
      font-size: 1.5rem;
    }
    .return-home {
      font-weight: 400;
      a {
        background: #fff;
        padding: 0.15rem;
      }
    }
  }
}
</style>
