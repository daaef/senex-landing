<template>
  <div>
    <div class="side-nav-con" :class="isOpen ? 'side-nav-show' : ''">
      <div class="container">
        <span class="close-con" @click="closeSide"
          ><img src="/img/close.svg"
        /></span>
        <div class="side-nav">
          <router-link class="link" to="/about">About</router-link>
          <router-link class="link" to="/learn">Learn</router-link>
          <router-link class="link" to="/faq">FAQ</router-link>
          <router-link class="link" to="/support">Support</router-link>
          <router-link class="link" to="/login">Log in</router-link>
          <router-link to="/register" class="btn register-btn"
            >Create your account</router-link
          >
          <div class="country-con">
            <span class="country-icon"><img src="/img/nigeria.svg" /></span>
            <span class="caret-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.905"
                height="11.857"
                viewBox="0 0 20.905 11.857"
              >
                <path
                  id="Icon_awesome-caret-down"
                  data-name="Icon awesome-caret-down"
                  d="M2.2,13.5H20.292a1.4,1.4,0,0,1,.991,2.4l-9.042,9.049a1.409,1.409,0,0,1-1.99,0L1.209,15.9A1.4,1.4,0,0,1,2.2,13.5Z"
                  transform="translate(-0.794 -13.5)"
                  fill="#fff"
                /></svg
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeSide() {
      this.$emit('toggle-side')
    }
  }
}
</script>

<style></style>
