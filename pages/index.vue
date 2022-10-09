<template>
  <div class="bg-white">
    <!--    <div ref="snxBanner" class="snx-hero-banner">
      <div class="container">
        <div class="block lg:flex">
          <div class="w-full lg:w-1/2 snx-hero-content-holder">
            <div class="snx-hero-content">
              <h1 class="snx-hero-content__title heading-primary">
                <span class="snx-hero-content__title heading-primary"
                  >Buy and Sell</span
                >
                <span class="snx-hero-content__title&#45;&#45;grad">Crypto</span>
                &lt;!&ndash; <p class="snx-hero-content__title&#45;&#45;grad">
                  <client-only>
                    <vue-typer
                      name="banner"
                      :text="['Crypto', 'Bitcoin', 'USDT']"
                      erase-style="clear"
                    />
                  </client-only>
                </p> &ndash;&gt;
              </h1>
              <h1 class="snx-hero-content__title heading-primary">
                the easy way.
              </h1>
              <p class="snx-hero-content__subtitle paragraph">
                SenexPay offers you a secure and easy way to make crypto-fiat
                exchange without any hassle.
              </p>
              <div class="snx-hero-content__btn_holder">
                <a
                  :href="appLink + '/create-account'"
                  class="register_btn"
                  rel="noopener"
                  >Create your account</a
                >
                <span
                  ref="coinPrice"
                  class="trading_btn u-cursor-pointer"
                  @click="scrollToCoin"
                  >Start trading</span
                >
              </div>
            </div>
          </div>
          <div class="snx-hero-img-con">
            <img src="/img/block-img.svg" alt="block" class="block-img" />
            <img
              src="/img/purple-star.svg"
              alt="purple star"
              class="snx-hero-img-con__star snx-hero-img-con__star&#45;&#45;purple"
            />
            <img
              src="/img/green-star.svg"
              alt="green star"
              class="snx-hero-img-con__star snx-hero-img-con__star&#45;&#45;green"
            />
            <img
              src="/img/blue-circle.svg"
              alt="blue circle"
              class="snx-hero-img-con__circle snx-hero-img-con__circle&#45;&#45;blue"
              @mouseover="buyBadge = true"
              @click="buyBadge = true"
            />
            <img
              src="/img/green-circle.svg"
              alt="green circle"
              class="snx-hero-img-con__circle snx-hero-img-con__circle&#45;&#45;green"
              @mouseover="sellBadge = true"
              @click="sellBadge = true"
            />
            <div
              class="snx-hero-img-con__badge snx-hero-img-con__badge&#45;&#45;blue"
              :class="[buyBadge ? 'snx-hero-img-con__badge&#45;&#45;show' : '']"
            >
              <span
                class="
                  snx-hero-img-con__badge-elc-box
                  snx-hero-img-con__badge-elc-box&#45;&#45;blue
                "
                ><img src="/img/electric-flash.svg" alt="flash"
              /></span>
              <span>Buy crypto from anywhere</span>
            </div>
            <div
              class="snx-hero-img-con__badge snx-hero-img-con__badge&#45;&#45;green"
              :class="[sellBadge ? 'snx-hero-img-con__badge&#45;&#45;show' : '']"
            >
              <span
                class="
                  snx-hero-img-con__badge-elc-box
                  snx-hero-img-con__badge-elc-box&#45;&#45;green
                "
                ><img src="/img/electric-flash.svg" alt="flash"
              /></span>
              <span>Sell crypto from anywhere</span>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- Crypocurrencies and amounts -->
    <div id="coin-section" class="coin-section">
      <div class="container mx-auto overflow-hidden overflow-con">
        <coin-price
          v-for="(token, i) in countryCrypto"
          :key="i"
          data-aos="fade-up"
          data-aos-once="true"
          :name="tokenConfig(token).name"
          :abbr="tokenConfig(token).abbr"
          :image="tokenConfig(token).image"
          :rate="getPairRate(token)"
          :country="country"
        >
        </coin-price>
        <!-- <coin-price
          v-if="rates"
          name="Tether"
          abbr="USDT"
          image="/img/t-coin.svg"
          :rate="getPairRate('USDT')"
          :country="country"
        >
        </coin-price> -->
        <!-- <coin-price
          name="DOGE COIN"
          abbr="DOGE"
          image="/img/doge-coin.svg"
          :buy="450000"
          :sell="450000"
        >
        </coin-price> -->
        <p class="mt-20 paragraph u-text-center u-white">
          SenexPay Transaction fee is {{ limits.platformFee }} percent pegged at
          ${{ limits.platformFeeCap }}.
          <router-link to="/terms-of-service" class="u-sec-color">
            Learn more
          </router-link>
          about our fees.
        </p>
      </div>
    </div>
    <HomeTrustedExchange />
    <HomeDashboardDesign />
    <!-- Descriptions -->
    <div class="">
      <!-- Description 1 -->
      <div
        class="container snx-description-con__inside snx-description-con__inside--reverse"
        data-aos="slide-up"
        data-aos-once="true"
      >
        <div class="snx-description-con__child">
          <div class="snx-description">
            <p
              class="snx-description__title heading-primary heading-primary--wt-500"
            >
              We are serious about security.
            </p>
            <p class="snx-description__subtitle paragraph">
              We know that security is priority for you; it is for us too. All
              your transactions with us are fully encrypted with cutting-edge
              security protocols that protect you.
            </p>
          </div>
        </div>
        <div class="flex items-center md:mt-16">
          <div class="m-auto lg:mr-0 snx-description-img-con">
            <!-- <img src="/img/secure.svg" /> -->
            <svg
              id="Component_109_1"
              class="secure-lock-svg"
              :class="secureLockOpen ? 'secure-lock-svg-click' : ''"
              data-name="Component 109 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="495"
              height="484"
              viewBox="0 0 495 484"
              @click="secureLockTouch()"
            >
              <rect
                id="Rectangle_830"
                data-name="Rectangle 830"
                width="441"
                height="441"
                rx="30"
                transform="translate(54)"
                fill="#e4edfc"
                class="disappear"
              />
              <rect
                id="Rectangle_831"
                data-name="Rectangle 831"
                width="441"
                height="441"
                rx="30"
                transform="translate(0 43)"
                fill="#ddffeb"
                class="disappear"
              />
              <g
                id="Rectangle_829"
                data-name="Rectangle 829"
                transform="translate(28 18)"
                fill="#fff"
                stroke="#1370f8"
                stroke-width="4"
              >
                <rect width="441" height="441" rx="30" stroke="none" />
                <rect
                  x="2"
                  y="2"
                  width="437"
                  height="437"
                  rx="28"
                  fill="none"
                />
              </g>
              <g
                id="Ellipse_117"
                data-name="Ellipse 117"
                transform="translate(190 180)"
                fill="none"
                stroke="#fff"
                stroke-width="4"
              >
                <circle cx="59" cy="59" r="59" stroke="none" />
                <circle cx="59" cy="59" r="57" fill="none" />
              </g>
              <g
                id="Group_694"
                data-name="Group 694"
                transform="translate(-1096 -4024)"
              >
                <rect
                  id="diagonal-1"
                  data-name="Rectangle 832"
                  width="7"
                  height="589"
                  rx="3.5"
                  transform="translate(1131.154 4059.3) rotate(-45)"
                  fill="#e4edfc"
                />
                <rect
                  id="diagonal-2"
                  data-name="Rectangle 833"
                  width="7"
                  height="591"
                  rx="3.5"
                  transform="translate(1137.518 4473.664) rotate(-135)"
                  fill="#e4edfc"
                />
              </g>
              <circle
                id="blue-circle-svg"
                data-name="blue-circle-svg"
                cx="50%"
                cy="50%"
                r="122"
                fill="#1370f8"
              />
              <g
                id="Group_698"
                data-name="Group 698"
                transform="translate(-1096 -4014)"
              >
                <g
                  id="shield_1_"
                  data-name="shield (1)"
                  transform="translate(1240.11 4179)"
                >
                  <path
                    id="Path_2064"
                    data-name="Path 2064"
                    d="M104.989,0,30.912,21.137V58.274a118.967,118.967,0,0,0,72.1,109.436l1.975.791,1.975-.791a118.967,118.967,0,0,0,72.1-109.436V21.137Z"
                    fill="#e7e7e7"
                  />
                  <path
                    id="Path_2065"
                    data-name="Path 2065"
                    d="M330.077,21.137V58.274a118.967,118.967,0,0,1-72.1,109.436L256,168.5V0Z"
                    transform="translate(-151.011)"
                    fill="#d3d3d8"
                  />
                  <path
                    id="Path_2066"
                    data-name="Path 2066"
                    d="M145.259,62.425,90.936,77.932v22.223a99.244,99.244,0,0,0,51.953,87.312l2.371,1.284,2.371-1.284a99.243,99.243,0,0,0,51.953-87.312V77.932Z"
                    transform="translate(-40.27 -41.881)"
                    fill="#00abe9"
                  />
                  <path
                    id="Path_2067"
                    data-name="Path 2067"
                    d="M310.323,77.932v22.223a99.244,99.244,0,0,1-51.953,87.312L256,188.75V62.425Z"
                    transform="translate(-151.011 -41.881)"
                    fill="#0095ff"
                  />
                </g>
                <g
                  id="Path_group"
                  data-name="Group 695"
                  transform="translate(13.5 13.5)"
                >
                  <circle
                    id="Ellipse_118"
                    data-name="Ellipse 118"
                    cx="33"
                    cy="33"
                    r="33"
                    transform="translate(1298.5 4216.5)"
                    fill="#fff"
                  />
                  <path
                    id="ios-lock"
                    data-name="Icon ionic-ios-lock"
                    d="M30.294,15.483H28.276V11.557a8.073,8.073,0,1,0-16.144-.109v4.036H10.113A3.373,3.373,0,0,0,6.75,18.847V34.991a3.373,3.373,0,0,0,3.363,3.363h20.18a3.373,3.373,0,0,0,3.363-3.363V18.847A3.373,3.373,0,0,0,30.294,15.483ZM21.381,25.977v5.785a1.206,1.206,0,0,1-1.118,1.211A1.179,1.179,0,0,1,19.026,31.8V25.977a2.691,2.691,0,1,1,2.354,0Zm4.541-10.494H14.486V11.447a5.718,5.718,0,0,1,11.436,0Z"
                    fill="#1370f8"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <!-- Why Senex -->
      <why-senex></why-senex>
      <!-- Referral banner -->
      <!-- <referral-banner></referral-banner> -->
      <!-- Reviews -->
      <review-holder></review-holder>
      <!--Getting Crypto-->
      <home-getting-crypto />
      <!--Getting Crypto-->

      <!--Earn Passive-->
      <home-earn-passive />
      <!--Earn Passive-->

      <!--Download App-->
      <home-download-app />
      <!--Download App-->

      <!-- <review></review> -->
      <!-- Landing video -->
      <!--       <intro-video></intro-video>
      <our-obsession></our-obsession>
      &lt;!&ndash; Mobile App Banner &ndash;&gt;
      <div class="mbl-app-banner">
        <div class="container">
          <div class="block py-24 lg:flex">
            <div class="self-center text-and-store-con lg:w-1/2">
              <h1 class="heading-secondary heading-secondary&#45;&#45;500">
                We are creating a unique financial revolution. Join us!
              </h1>
            </div>
            <div class="mx-auto lg:w-1/2">
              <span class="mbl-img-con"
                ><img
                  src="/img/pablita-cryptocurrency.svg"
                  alt="An illustration of person typing on a laptop."
              /></span>
            </div>
          </div>
        </div>
      </div>-->
      <!-- Footer -->
      <landing-footer></landing-footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AOS from 'aos'
// import * as Simpu from 'https://static.simpu.co/widgets/v1/simpu-widget.js'
import 'aos/dist/aos.css'
// import ReferralBanner from '../components/home/ReferralBanner.vue'
import CoinPrice from '~/components/home/CoinPrice.vue'
// import MobileAppBanner from '~/components/home/MobileAppBanner.vue'
// import Review from '~/components/home/Review.vue'
import ReviewHolder from '~/components/home/ReviewHolder.vue'
import WhySenex from '~/components/home/WhySenex.vue'
// import IntroVideo from '~/components/home/IntroVideo.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: {
    CoinPrice,
    LandingFooter,
    ReviewHolder,
    // ReferralBanner,
    // Review,
    // MobileAppBanner,
    WhySenex
    // IntroVideo,
  },
  layout: 'landing',
  data() {
    return {
      appLink: '',
      loading: true,
      scrollPosition: 0,
      ticking: false,
      tokens: {
        BTC: {
          abbr: 'BTC',
          name: 'Bitcoin',
          image: '/img/btc.svg'
        },
        USDT: {
          abbr: 'USDT',
          name: 'Tether',
          image: '/img/t-coin.svg'
        },
        ETH: {
          abbr: 'ETH',
          name: 'Ethereum',
          image: '/img/ethereum-eth.svg'
        },
        DOGE: {
          abbr: 'DOGE',
          name: 'DogeCoin',
          image: '/img/doge-coin.svg'
        }
      },
      buyBadge: false,
      sellBadge: false,
      rates: {
        BTC_USD: { buy: 0, sell: 0 },
        BTC_NGN: { buy: 0, sell: 0 },
        BTC_ZAR: { buy: 0, sell: 0 },
        USDT_NGN: { buy: 0, sell: 0 },
        USDT_ZAR: { buy: 0, sell: 0 }
      },
      limits: {
        disableBuy: false,
        minimumBuyUsd: 30,
        minimumSellUsd: 30,
        platformFee: 0.7,
        platformFeeCap: 2
      },
      secureLockOpen: false
    }
  },
  head() {
    return {
      title: 'Buy & Sell Bitcoin, USDT and more securely | SenexPay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.senexpay.com'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com' }],
    }
  },
  computed: {
    ...mapState({
      country: (state) => state.country
    }),
    countryCrypto() {
      const list = Object.keys(this.rates)
      list.pop()
      return (
        list
          .filter((item) => item.split('_')[1] === this.country.code)
          .map((item) => item.split('_')[0]) || ['BTC']
      )
    }
  },
  mounted() {
    this.$store.commit('toggleSideBar', false)
    this.appLink = process.env.APP_URL
    AOS.init()
    this.getRates()
    // const simpuJS = document.createElement('script')
    // simpuJS.setAttribute(
    //   'src',
    //   'https://static.simpu.co/widgets/v1/simpu-widget.js'
    // )
    // document.head.appendChild(simpuJS)
    /* if (window !== undefined) {
      const widget = window.Simpu.default.init({
        app_id: '1a75fbd8', // spk__U3zut0PukK4JS8kbRrgc41IlKxwiiW9n8Ccd5bdDyPi8o8bK8C
        public_key: 'spk__U3zut0PukK4JS8kbRrgc41IlKxwiiW9n8Ccd5bdDyPi8o8bK8C'
      })
      widget.render()
    } */
  },
  methods: {
    scrollToCoin() {
      this.$nextTick(() => {
        const top = this.$refs.snxBanner.clientHeight - 85
        window.scrollTo({
          top,
          behavior: 'smooth'
        })
        // this.$refs.coinPrice.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start'
        // })
      })
    },
    secureLockTouch() {
      if (window.innerWidth <= 1100) {
        this.secureLockOpen = !this.secureLockOpen
      }
    },
    async getRates() {
      // this.isLoading = true
      try {
        const { data } = await this.$axios.get('/rates/')
        this.rates = data
        this.limits = data.config
        // this.isLoading = false
      } catch (err) {
        // this.getRates()
      }
    },
    getPairRate(crypto) {
      return this.rates[`${crypto}_${this.country.code}`]
    },
    tokenConfig(token) {
      if (this.countryCrypto) return this.tokens[token]
    }
  }
}
</script>

<style lang="scss">
[data-aos='badge-in'] {
  opacity: 0;
  transition-property: opacity, transform;
}
/*  Animation ends here */
[data-aos='badge-in'].aos-animate {
  opacity: 1;
  transform: translateZ(0) scale(1.6);
}
.vue-typer {
  background: transparent linear-gradient(104deg, #7933ff 0%, #649aff 100%) 0%
    0% no-repeat padding-box;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  color: black;

  .custom.char {
    color: black;
  }
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
