<template>
  <div class="bg-white">
    <div class="snx-hero-banner">
      <div class="container">
        <div class="block lg:flex">
          <div class="w-full lg:w-1/2 snx-hero-content-holder">
            <div class="snx-hero-content">
              <h1 class="snx-hero-content__title">Buy and Sell Crypto</h1>
              <h1 class="snx-hero-content__title">the easy way.</h1>
              <p class="snx-hero-content__subtitle">
                SenexPay offers you a secure and easy way to make crypto-fiat
                exchange without any hassle.
              </p>
              <div
                v-scroll-reveal.reset="{ delay: 400 }"
                class="snx-hero-content__btn_holder"
              >
                <router-link to="/register" class="register_btn"
                  >Create your account</router-link
                >
                <router-link to="/trading" class="trading_btn"
                  >Start trading</router-link
                >
              </div>
            </div>
          </div>
          <div
            class="w-full lg:w-1/2 mt-2 mb-8 lg:my-0 flex snx-hero-atom-holder"
          >
            <div class="atom-holder mx-auto lg:ml-auto lg:mr-0">
              <span
                class="lemon-arrow"
                :class="loading ? '' : 'lemon-arrow-animation'"
                ><img src="/img/lemon-double-arrow.svg"
              /></span>
              <span
                class="purple-arrow"
                :class="loading ? '' : 'purple-arrow-animation'"
                ><img src="/img/purple-double-arrow.svg"
              /></span>
              <span class="circle-boy-small"
                ><img src="/img/landing-circle-boy-small.png"
              /></span>
              <span class="circle-girl-small"
                ><img src="/img/landing-circle-girl-small.png"
              /></span>
              <span
                class="circle-boy"
                :class="loading ? '' : 'landing-animation'"
                ><img src="/img/landing-circle-boy.png"
              /></span>
              <span
                class="circle-girl"
                :class="loading ? '' : 'landing-animation'"
                ><img src="/img/landing-circle-girl.png"
              /></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="671"
                height="671"
                viewBox="0 0 671 671"
                class="atom"
              >
                <g
                  id="Group_355"
                  data-name="Group 355"
                  transform="translate(-468 21162)"
                  opacity="0.5"
                >
                  <g
                    id="Ellipse_57"
                    data-name="Ellipse 57"
                    transform="translate(468 -21162)"
                    fill="none"
                    stroke="#5694fc"
                    stroke-width="1"
                  >
                    <circle cx="335.5" cy="335.5" r="335.5" stroke="none" />
                    <circle cx="335.5" cy="335.5" r="335" fill="none" />
                  </g>
                  <g
                    id="Ellipse_58"
                    data-name="Ellipse 58"
                    transform="translate(554 -21076)"
                    fill="none"
                    stroke="#5694fc"
                    stroke-width="1"
                  >
                    <circle cx="249.5" cy="249.5" r="249.5" stroke="none" />
                    <circle cx="249.5" cy="249.5" r="249" fill="none" />
                  </g>
                  <g
                    id="Ellipse_59"
                    data-name="Ellipse 59"
                    transform="translate(630 -21000)"
                    fill="none"
                    stroke="#5694fc"
                    stroke-width="1"
                  >
                    <circle cx="174" cy="174" r="174" stroke="none" />
                    <circle cx="174" cy="174" r="173.5" fill="none" />
                  </g>
                  <g
                    id="Ellipse_60"
                    data-name="Ellipse 60"
                    transform="translate(720 -20911)"
                    fill="none"
                    stroke="#5694fc"
                    stroke-width="1"
                  >
                    <circle cx="84.5" cy="84.5" r="84.5" stroke="none" />
                    <circle cx="84.5" cy="84.5" r="84" fill="none" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Crypocurrencies and amounts -->
    <div class="coin-section">
      <div class="container mx-auto overflow-con">
        <coin-price
          name="Bitcoin"
          abbr="BTC"
          image="/img/btc.svg"
          :buy="450000000"
          :sell="45000000"
        >
        </coin-price>
        <coin-price
          name="USDT"
          abbr="USDT"
          image="/img/t-coin.svg"
          :buy="450000"
          :sell="450000"
        >
        </coin-price>
        <coin-price
          name="DOGE COIN"
          abbr="DOGE"
          image="/img/doge-coin.svg"
          :buy="450000"
          :sell="450000"
        >
        </coin-price>
      </div>
    </div>
    <!-- Descriptions -->
    <div class="">
      <!-- Description 1 -->
      <div class="block snx-description-con sdc-pb container-R lg:flex lg:pr-0">
        <div class="lg:w-1/2 container-R__padding">
          <div v-scroll-reveal.reset class="snx-description lg:w-4/5">
            <p class="snx-description__title">
              It’s so easy, you can do it on the floor
            </p>
            <p class="snx-description__subtitle">
              Trading your Cryptocurrency on Senexpay is so easy that you do not
              need to be a Crypto guru to do it yourself. We believe life should
              be as easy as it can be.
            </p>
          </div>
        </div>
        <div
          v-scroll-reveal.reset="{
            origin: 'right'
          }"
          class="lg:w-1/2 snx-description-img-con"
        >
          <img src="/img/landing-page-girl.png" />
        </div>
      </div>
      <!-- Description 2 -->
      <div class="bg-grey">
        <!-- Large screen -->
        <div
          v-scroll-reveal.reset
          class="block snx-description-con container hidden lg:flex"
        >
          <div class="lg:w-1/2 snx-description-img-con">
            <img src="/img/landing-page-boy.png" />
          </div>
          <div class="lg:w-1/2">
            <div class="snx-description lg:w-4/5 mx-auto">
              <p class="snx-description__title">
                The most trusted crypto platform.
              </p>
              <p class="snx-description__subtitle">
                We make it possible for you to accept airtime as payment on your
                website and we convert it into cash for you - straight to your
                wallet.
              </p>
            </div>
          </div>
        </div>
        <!-- Small Screen -->
        <div class="block snx-description-con container lg:hidden">
          <div class="lg:w-1/2">
            <div v-scroll-reveal.reset class="snx-description lg:w-4/5 mx-auto">
              <p class="snx-description__title">
                The most trusted crypto platform.
              </p>
              <p class="snx-description__subtitle">
                We make it possible for you to accept airtime as payment on your
                website and we convert it into cash for you - straight to your
                wallet.
              </p>
            </div>
          </div>
          <div v-scroll-reveal.reset class="lg:w-1/2 snx-description-img-con">
            <img src="/img/landing-page-boy.png" />
          </div>
        </div>
      </div>

      <!-- Description 3 -->

      <div
        v-scroll-reveal.reset
        class="block snx-description-con sdc-pb container lg:flex lg:pr-0"
      >
        <div class="lg:w-1/2">
          <div class="snx-description lg:w-4/5">
            <p class="snx-description__title">We are serious about Security.</p>
            <p class="snx-description__subtitle">
              Candy lets you sell your airtime online in no time with just a
              little discount. Get paid in your Candy wallet and send to your
              bank account anytime you wish.
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 flex">
          <div class="lg:w-1/2 m-auto snx-description-img-con">
            <img src="/img/landing-password.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <!-- Why Senex -->
      <why-senex></why-senex>
      <!-- Reviews -->
      <review></review>
      <!-- Landing video -->
      <intro-video></intro-video>
      <!-- Mobile App Banner -->
      <mobile-app-banner></mobile-app-banner>
      <!-- Footer -->
      <landing-footer></landing-footer>
    </div>
  </div>
</template>

<script>
import CoinPrice from '~/components/home/CoinPrice.vue'
import MobileAppBanner from '~/components/home/MobileAppBanner.vue'
import Review from '~/components/home/Review.vue'
import WhySenex from '~/components/home/WhySenex.vue'
import IntroVideo from '~/components/home/IntroVideo.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: {
    CoinPrice,
    LandingFooter,
    Review,
    MobileAppBanner,
    WhySenex,
    IntroVideo
  },
  layout: 'landing',
  data() {
    return {
      loading: true,
      scrollPosition: 0,
      ticking: false
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>

<style>
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
