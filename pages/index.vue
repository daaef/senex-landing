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
        <div class="flex text-white mb-20 flex-col items-center">
          <h2 class="text-6xl text-center font-bold">
            Buy and sell crypto seamlessly
          </h2>
          <p class="text-2xl mt-4">
            Control your crypto assets while trading smoothly.
          </p>
        </div>
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
    <HomeSenexPlus />
    <HomeDashboardDesign />
    <!-- Descriptions -->
    <div class="">
      <!-- Description 1 -->
      <div
        class="container snx-description-con__inside snx-description-con__inside--reverse"
        data-aos="slide-up"
        data-aos-once="true"
      >
        <div class="flex items-center flex-wrap justify-center md:mt-16">
          <div class="snx-description-img-con">
            <img src="/serious-pic.png" alt="Serious image" />
          </div>
          <div class="snx-description-con__child">
            <div class="snx-description">
              <h3 class="security--title heading-primary--wt-500">
                We are serious <br />about security.
              </h3>
              <p class="snx-description__subtitle paragraph">
                We know that security is priority for you; it is for us too. All
                your transactions with us are fully encrypted with cutting-edge
                security protocols that protect you.
              </p>
              <a :href="appLink + '/create-account'" class="dash--btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <!-- Why Senex -->
      <why-senex></why-senex>
      <!-- Referral banner -->
      <!-- <referral-banner></referral-banner> -->
      <!--Getting Crypto-->
      <home-getting-crypto />
      <!--Getting Crypto-->

      <!--Earn Passive-->
      <home-earn-passive />
      <!--Earn Passive-->
      <!-- Reviews -->
      <review-holder></review-holder>
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
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com' }]
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
    this.appLink = this.$config.appLink
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
.security--title {
  font-size: 4rem;
  font-weight: bold;
  color: #064ebe;
  span {
    font-size: 6rem;
  }
  &:first-line {
    line-height: 0.8;
  }
}
.snx-description {
  padding-left: 50px;
  align-items: center;
  @media only screen and (max-width: 75em) {
    padding-left: 0;
    a.dash--btn {
      align-self: center;
    }
  }
  img {
    height: 100px;
    margin-bottom: 20px;
    width: fit-content;
    object-fit: contain;
  }
  a.dash--btn {
    margin-top: 20px;
  }
}
.snx-description-con__inside {
  background-image: url(/security--bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
