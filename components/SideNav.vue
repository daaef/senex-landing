<template>
  <div class="side-nav-div">
    <div>
      <div class="container">
        <span class="hidden" @click="showSide()"
          ><img src="/img/close.svg" alt="close"
        /></span>
        <div class="side-nav">
          <span class="link" @click="goTo('/about')">About us</span>
          <!-- <span class="link" @click="goTo('/learn')">Learn</span> -->
          <span class="link" @click="goTo('/faqs')">FAQs</span>
          <span class="link" @click="goTo('/contact')">Contact us</span>
          <span class="link"
            ><a :href="appLink + '/signin'" rel="noopener">Sign in</a></span
          >
          <span class="link btn register-btn"
            ><a :href="appLink + '/create-account'" rel="noopener"
              >Create your account</a
            ></span
          >
          <div class="country-con">
            <div class="country-icon">
              <img :src="selectedCountry.imageSource" alt="country" />
              <div
                v-for="c in otherCountries()"
                :key="c.code"
                class="other-countries"
              >
                <img
                  :src="c.imageSource"
                  alt="country"
                  @click="countryChange(c)"
                />
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
import { mapState } from 'vuex'
import countries from '@/data/senexCountries'
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      countries,
      appLink: ''
    }
  },
  computed: {
    ...mapState({
      selectedCountry: 'country'
    })
  },
  mounted() {
    this.appLink = process.env.APP_URL
  },
  methods: {
    showSide() {
      this.toggleSideBar()
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    goTo(path) {
      this.toggleSideBar()
      this.$router.push(path)
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
