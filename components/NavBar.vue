<template>
  <nav class="home--nav" :class="theme.lightTheme ? 'light' : ''">
    <div class="container">
      <div class="logo">
        <router-link to="/" aria-label="logo">
          <img
            :src="
              theme.lightTheme
                ? '/img/senex-full-logo.svg'
                : '/img/senexpay-logo-light.svg'
            "
            alt="SenexPay logo"
          />
        </router-link>
      </div>
      <input id="nav-toggle" type="checkbox" />
      <label
        id="toggle"
        :class="[
          theme.lightTheme ? 'light' : 'dark',
          'toggler',
          sideBarOpen ? 'opened' : ''
        ]"
        @click="$store.commit('toggleSideBar', !sideBarOpen)"
      >
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </label>
      <div class="navigations1">
        <ul class="link-resp">
          <li>
            <a :href="appLink + '/signin'" class="login-lnk dash--btn">
              Log in
            </a>
          </li>
        </ul>
      </div>
      <div class="navigations" :class="sideBarOpen ? 'navActive' : ''">
        <ul class="left--section">
          <li><nuxt-link to="/about">About us</nuxt-link></li>
          <li><nuxt-link to="/faqs">FAQ</nuxt-link></li>
          <li><nuxt-link to="/careers">Careers</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
        </ul>
        <ul class="right--section">
          <li><a :href="appLink + '/signin'" class="login-lnk">Log in</a></li>
          <li>
            <a :href="appLink + '/create-account'" class="nav-btn">
              Get Started</a
            >
          </li>
        </ul>
        <div class="icon-dropdown country-con">
          <div class="country-icon" :class="{ active: opened }">
            <img
              :src="selectedCountry.imageSource"
              alt="country"
              @click="openDropdown"
            />
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
          <span class="caret-icon" @click="openDropdown">
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
          backgroundColor: '#F5F5FD',
          color: '#fafafa',
          lightTheme: true
        }
      }
    }
  },
  data() {
    return {
      countries,
      appLink: '',
      opened: false,
      navOpened: false
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
    openDropdown() {
      this.opened = !this.opened
    },
    openNav() {
      this.navOpened = !this.navOpened
    },
    countryChange(c) {
      this.$store.dispatch('changeCountry', {
        country: c
      })
      this.opened = !this.opened
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

<style lang="scss">
.navigations1 {
  display: none;
  margin-right: 40px;
  @media (max-width: 1050px) {
    display: flex;
  }
  .link-resp {
    list-style: none;
    a.dash--btn {
      font-size: 2.2rem;
      padding: 7px 20px;
      margin-top: 0;
    }
  }
}
nav.home--nav.light {
  background: #ffffff;
  .toggler {
    color: #053888;
  }
  .container {
    .navigations {
      background: #ffffff;
      ul {
        li {
          a {
            color: #053888;
            &.nav-btn {
              color: #fafafa;
            }
          }
        }
      }
    }
  }
}
#nav-toggle {
  display: none;
}
.toggler {
  &.opened {
    .one {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .two {
      opacity: 0;
    }

    .three {
      transform: rotate(-45deg) translate(7px, -8px);
    }
  }
}
@media (max-width: 1040px) {
  nav.home--nav {
    .container {
      .navigations.navActive {
        transform: none;
      }
    }
  }
}

#toggle {
  width: 28px;
  height: 30px;
  &.dark {
    span {
      background: #ffffff;
    }
  }
  &.light {
    span {
      background: #053888;
    }
  }
}

#toggle span {
  width: 100%;
  height: 5px;
  background: white;
  display: block;
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
  border-radius: 1px;
}

#toggle.on .one {
  transform: rotate(45deg) translate(5px, 5px);
}

#toggle.on .two {
  opacity: 0;
}

#toggle.on .three {
  transform: rotate(-45deg) translate(7px, -8px);
}
.toggler {
  position: fixed;
  z-index: 200;
  color: #ffffff;
  font-size: 3rem;
  top: 40px;
  right: 2.5rem;
  transform: translateY(-50%);
}
</style>
