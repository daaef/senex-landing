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
                      :fill="theme.color"
                    /></svg
                ></span>
              </div>
            </div>
          </nav>
        </div>
        <span class="hamburger-con inline-block lg:hidden" @click="openSide"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="19"
            viewBox="0 0 28 19"
          >
            <g
              id="hamburger"
              data-name="hamburger"
              transform="translate(-249 -17)"
            >
              <rect
                width="28"
                height="5"
                rx="1"
                transform="translate(249 17)"
                :fill="theme.color"
              />
              <rect
                width="28"
                height="5"
                rx="1"
                transform="translate(249 24)"
                :fill="theme.color"
              />
              <rect
                width="28"
                height="5"
                rx="1"
                transform="translate(249 31)"
                :fill="theme.color"
              />
            </g></svg
        ></span>
      </div>
    </div>
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
          color: '#162F55'
        }
      }
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
    openSide() {
      this.$emit('toggle-side')
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
