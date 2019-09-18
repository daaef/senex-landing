<template>
  <footer class="footer2">
    <div class="container" style="">
      <div class="level is-size-6 level-sm-margin" :class="{'is-size-7': $device.isMobile}">
        <div class="level-left">
          <div class="level-item">
            <span>&copy; {{ new Date().getFullYear() }} - SenexPAY LLC</span>
          </div>
        </div>
        <contact-form-modal />
        <div class="level-right">
          <div class="level is-mobile">
            <p class="level-item">
              <a href="#">Terms &amp; conditions</a>
            </p>
            <p class="level-item">
              |
            </p>
            <p class="level-item">
              <a href="#"> Privacy Policy</a>
            </p>
            <p class="level-item">
              |
            </p>
            <p class="level-item">
              <a href="#"> Disclaimer</a>
            </p>
          </div>
        </div>
      </div>
      <!-- <a
        v-if="displayContactFab"
        class="contact-support-container has-text-centered is-block"
        @click.prevent="showContactFormModal"
      >
        <img src="~/assets/contact-support.png" alt="contact support image">
        <span class="text">Contact <br> Support</span>
      </a> -->
      <a
        v-if="displayContactFab"
        href="https://api.whatsapp.com/send?phone=+2348184899239&text=Hello%21%20I%20want%20to%20buy/sell%20Bitcoin" 
        aria-label="Whatsapp"
        class="float tooltip is-tooltip-left is-tooltip-active"
        data-tooltip="Need help? Chat with us!"
        target="_blank" 
        rel="noopener"
      >
        <i class="fab fa-whatsapp my-float" />
      </a>
    </div>
  </footer>
</template>

<script>
import ContactFormModal from './contact-form-modal.vue'

export default {
  components: {
    ContactFormModal
  },
  props: {
    displayContactFab: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    showContactFormModal() {
      this.$modal.show('contact')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.footer2 {
  background: #ffffff;
  color: $blue;
  font-family: $font-avenir;
  box-shadow: 2px -2px 4px rgba(0, 0, 0, 0.25);
  padding-top: 1rem;
  padding-bottom: 0;
  margin-bottom: 0;
  width: 100%;
  font-size: 0.6em;
}

.item-with-sep {
  &:after {
    content: ' \00b7';
  }
}

.contact-support-container {
  position: absolute;
  right: 10px;
  bottom: 80px;
  text-align: center;
  img,
  span {
    display: block;
  }

  img {
    height: 32px;
    width: 32px;
  }
  span {
    color: #0c5db2;
    font-size: 0.7rem;
    margin-top: 0.2rem;
    line-height: 1rem;
    text-align: center;
  }
}

.level-sm-margin {
  margin-bottom: 0.5rem !important;
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #0dc152;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>
