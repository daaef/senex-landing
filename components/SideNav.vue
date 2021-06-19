<template>
  <div class="side-nav-div">
    <div>
      <div class="container">
        <span class="close-con" @click="showSide(false)"
          ><img src="/img/close.svg"
        /></span>
        <div class="side-nav">
          <router-link class="link" to="/about" @click.native="showSide(false)"
            >About</router-link
          >
          <router-link class="link" to="/learn" @click.native="showSide(false)"
            >Learn</router-link
          >
          <router-link class="link" to="/faq" @click.native="showSide(false)"
            >FAQ</router-link
          >
          <router-link
            class="link"
            to="/support"
            @click.native="showSide(false)"
            >Support</router-link
          >
          <router-link class="link" to="/login" @click.native="showSide(false)"
            >Log in</router-link
          >
          <router-link
            to="/register"
            class="btn register-btn"
            @click.native="showSide(false)"
            >Create your account</router-link
          >
          <div class="country-con">
            <div class="country-icon">
              <img :src="selectedCountry.imageSource" />
              <div
                v-for="c in otherCountries()"
                :key="c.code"
                class="other-countries"
              >
                <img :src="c.imageSource" @click="countryChange(c)" />
              </div>
            </div>
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
// import AppModal from './custom/AppModal.vue'
import { mapState } from 'vuex'
import countries from '@/data/senexCountries'
export default {
  // components: { AppModal },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      countries
    }
  },
  computed: {
    ...mapState({
      selectedCountry: 'country'
    })
  },
  methods: {
    showSide(val) {
      this.$emit('change-visibility', val)
    },
    countryChange(c) {
      this.$store.dispatch('changeCountry', {
        country: c
      })
    },
    otherCountries() {
      return this.countries.filter((c) => c.code !== this.selectedCountry.code)
    }
  }
}
</script>

<style></style>
