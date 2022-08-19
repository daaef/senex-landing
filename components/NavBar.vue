<template>
  <nav class="home--nav">
    <div class="container">
      <div class="logo">
        <img src="/img/senexpay-logo-light.svg" alt="SenexPay logo" />
      </div>
      <input id="nav-toggle" type="checkbox" />
      <div class="nav--toggle">
        <label for="nav-toggle" class="toggler">
          <span />
        </label>
      </div>
      <div class="navigations">
        <ul class="left--section">
          <li><nuxt-link to="/about">About us</nuxt-link></li>
          <li><nuxt-link to="/faqs">FAQ</nuxt-link></li>
          <li><nuxt-link to="/careers">Careers</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
          <li><a :href="appLink + '/signin'" class="login-lnk">Log in</a></li>
        </ul>
        <ul class="right--section">
          <li><a :href="appLink + '/signin'" class="login-lnk">Log in</a></li>
          <li>
            <a :href="appLink + '/create-account'" class="nav-btn">
              Get Started</a
            >
          </li>
        </ul>
        <!--        <div class="icon-dropdown">
          <img src="~/assets/img/nigerian_flag.svg" class="flag" alt="" />
          <img src="~/assets/img/flag_dropdown.svg" class="icon" alt="" />
        </div>-->
        <div class="icon-dropdown country-con">
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
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import countries from '~/data/senexCountries'

export default {
  name: 'NavBar',
  props: {
    theme: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#FFFFFF',
          color: '#fafafa',
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
    this.appLink = process.env.APP_URL
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

<style scoped lang="scss">
#nav-toggle {
  display: none;
  &:checked {
    & ~ .navigations {
      transform: none;
    }
    & ~ .nav--toggle {
      .toggler {
        span:after {
          content: '\2715';
        }
      }
    }
  }
}

.toggler {
  position: fixed;
  z-index: 200;
  color: #ffffff;
  font-size: 1.2rem;
  top: 60px;
  transform: translateY(-50%);
  span:after {
    content: '\2630';
  }
}
</style>
