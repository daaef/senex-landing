<template>
  <div class="snx-hero-banner">
    <div class="container">
      <div class="flex">
        <div class="lg:w-1/2">
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
        <div class="lg:w-1/2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
