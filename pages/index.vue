<template>
  <div>
    <div class="snx-hero-banner">
      <div class="container mx-auto">
        <div class="block lg:flex">
          <div class="w-full lg:w-3/5 snx-hero-content-holder">
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
            class="w-full lg:w-2/5 mt-2 mb-8 lg:my-0 flex snx-hero-atom-holder"
          >
            <div class="atom-holder mx-auto lg:ml-auto lg:mr-0">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                width="500"
                class="atom"
              >
                <circle
                  class="ring"
                  r="120"
                  cx="500"
                  cy="500"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  opacity="0.3"
                />
                <circle
                  class="ring"
                  r="240"
                  cx="500"
                  cy="500"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  opacity="0.3"
                />
                <circle
                  class="ring"
                  r="360"
                  cx="500"
                  cy="500"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  opacity="0.3"
                />
                <circle
                  class="ring"
                  r="480"
                  cx="500"
                  cy="500"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Crypocurrencies and amounts -->
    <div class="coin-section">
      <div class="container mx-auto overflow-con">
        <coin-price></coin-price>
        <coin-price></coin-price>
        <coin-price></coin-price>
        <coin-price></coin-price>
      </div>
    </div>
    <!-- Descriptions -->
    <div>
      <!-- Description 1 -->
      <div class="block snx-description-con sdc-pb container lg:flex lg:pr-0">
        <div class="lg:w-1/2">
          <div class="snx-description lg:w-4/5">
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
        <div class="lg:w-1/2 snx-description-img-con">
          <img src="/img/senepay-og.png" />
        </div>
      </div>
      <!-- Description 2 -->
      <div class="bg-grey">
        <!-- Large screen -->
        <div class="block snx-description-con container hidden lg:flex">
          <div class="lg:w-1/2 snx-description-img-con">
            <img src="/img/senepay-og.png" />
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
          <div class="lg:w-1/2 snx-description-img-con">
            <img src="/img/senepay-og.png" />
          </div>
        </div>
      </div>

      <!-- Description 3 -->

      <div class="block snx-description-con sdc-pb container lg:flex lg:pr-0">
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
          <div class="lg:w-2/3 m-auto snx-description-img-con">
            <img src="/img/senepay-og.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import CoinPrice from '~/components/home/CoinPrice.vue'
import LandingFooter from '~/components/LandingFooter.vue'
export default {
  components: { CoinPrice, LandingFooter },
  layout: 'landing'
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
