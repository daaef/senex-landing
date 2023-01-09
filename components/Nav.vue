<template>
  <div class="relative">
    <div class="landing-nav" :style="theme">
      <div class="nav-holder container">
        <span class="logo-con" :class="sideBarOpen ? 'invisible-logo' : ''"
          ><router-link to="/" aria-label="logo"
            ><img
              :src="
                theme.lightTheme
                  ? '/img/senex-full-logo.svg'
                  : '/img/senexpay-logo-light.svg'
              "
              alt="logo"
              class="logo" /></router-link
        ></span>
        <div class="nav-con">
          <nav class="hidden lg:flex nav">
            <div class="link-con">
              <router-link class="link" to="/about">About us</router-link>
              <!-- <router-link class="link" to="/learn">Learn</router-link> -->
              <router-link class="link" to="/faqs">FAQs</router-link>
              <router-link class="link" to="/careers">Careers</router-link>
              <router-link class="link" to="/contact">Contact us</router-link>
            </div>
            <div class="register-con">
              <a :href="appLink + '/signin'" class="log-in link" rel="noopener"
                >Sign in</a
              >
              <a
                :href="appLink + '/create-account'"
                class="btn register-btn"
                rel="noopener"
                >Create your account</a
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
                <span class="caret-icon">
                  <svg
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
                      :fill="theme.color"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <span class="hamburger-con flex lg:hidden" @click="openSide"
      ><span
        class="hamburger-bars"
        :class="[barColor(), sideBarOpen ? 'top-bar' : '']"
      ></span
      ><span
        class="hamburger-bars"
        :class="[barColor(), sideBarOpen ? 'middle-bar' : '']"
      ></span
      ><span
        class="hamburger-bars"
        :class="[barColor(), sideBarOpen ? 'bottom-bar' : '']"
      ></span>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import countries from '@/data/senexCountries'
export default {
  props: {
    theme: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#FFFFFF',
          color: '#064EBE',
          lightTheme: true
        }
      }
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
      selectedCountry: 'country',
      sideBarOpen: 'sideBarOpen'
    }),
    appLinkSync() {
      return this.appLink
    }
  },
  mounted() {
    this.appLink = this.$config.appLink
  },
  methods: {
    openSide() {
      this.toggleSideBar()
    },
    countryChange(c) {
      this.$store.dispatch('changeCountry', {
        country: c
      })
    },
    barColor() {
      if (this.sideBarOpen) {
        return 'white-bar'
      } else if (this.theme.lightTheme) {
        return 'blue-bar'
      } else {
        return 'white-bar'
      }
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    otherCountries() {
      return this.countries.filter((c) => c.code !== this.selectedCountry.code)
    }
  }
}
</script>

<style></style>
