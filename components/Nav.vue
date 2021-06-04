<template>
  <div>
    <div class="landing-nav" :style="theme">
      <div class="nav-holder container">
        <span class="logo-con"
          ><router-link to="/"
            ><img
              :src="
                theme.backgroundColor === '#FFFFFF'
                  ? '/img/senex-full-logo.png'
                  : '/img/senexpay-logo-light.png'
              "
              class="logo" /></router-link
        ></span>
        <div class="nav-con">
          <nav class="hidden lg:flex nav">
            <div class="link-con">
              <router-link class="link" to="/about">About</router-link>
              <router-link class="link" to="/learn">Learn</router-link>
              <router-link class="link" to="/faq">FAQ</router-link>
              <router-link class="link" to="/support">Support</router-link>
            </div>
            <div class="register-con">
              <router-link to="/login" class="log-in link">Log in</router-link>
              <router-link to="/register" class="btn register-btn"
                >Create your account</router-link
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#FFFFFF',
          color: '#162F55'
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>
