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
              <div class="snx-hero-content__btn_holder">
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
      <div class="hidden snx-description-con container lg:flex lg:pr-0">
        <div class="lg:w-1/2">
          <div v-scroll-reveal.reset class="snx-description lg:w-4/5">
            <p class="snx-description__title">
              It’s so easy, anyone can trade on it.
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
          class="lg:w-1/3 snx-description-img-con"
        >
          <img src="/img/landing-page-lady.png" />
        </div>
      </div>
      <div class="block lg:hidden snx-description-con sdc-pb container">
        <div class="lg:w-1/2">
          <div v-scroll-reveal.reset class="snx-description lg:w-4/5">
            <p class="snx-description__title">
              It’s so easy, anyone can trade on it.
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
          <img src="/img/landing-page-lady.png" />
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
                Over the years, SenexPay has been able to build an unshakeable
                trust in its customers due to our efficient and swift payout
                process.
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
                Over the years, SenexPay has been able to build an unshakeable
                trust in its customers due to our efficient and swift payout
                process.
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
              Buy and sell your Cryptocurrency safely and securely with peace of
              mind. Your information is fully secure and you are protected to
              the maximum.
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 flex">
          <div class="m-auto snx-description-img-con">
            <!-- <img src="/img/secure.svg" /> -->
            <svg
              id="Component_109_1"
              class="secure-lock-svg"
              data-name="Component 109 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="495"
              height="484"
              viewBox="0 0 495 484"
            >
              <rect
                id="Rectangle_830"
                data-name="Rectangle 830"
                width="441"
                height="441"
                rx="30"
                transform="translate(54)"
                fill="#e4edfc"
              />
              <rect
                id="Rectangle_831"
                data-name="Rectangle 831"
                width="441"
                height="441"
                rx="30"
                transform="translate(0 43)"
                fill="#ddffeb"
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
