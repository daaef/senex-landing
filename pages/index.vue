<template>
  <div class="container wrapper">
    <div class="columns">
      <div class="column is-three-fifths">
        <div class="info">
          <p class="text-exchanging is-uppercase">
            Exchanging
          </p>
          <p>
            <span class="text-crypto">Cryptocurrencies</span>
            <span class="text-made-easy">made easy!</span>
          </p>
          <p>Buy and Sell securely  with SenexPAY</p>
        </div>
        <div class="image-illustration-container">
          <img src="~assets/illustration.png" alt="An image containing a trader operating a laptop">
        </div>
      </div>
      <div class="column">
        <trade-widget />
      </div>
    </div>
  </div>
</template>

<script>
import TradeWidget from '@/components/trade-widget.vue'

export default {
  layout: 'simple',
  components: {
    TradeWidget
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  margin-top: 2em;
}

div.image-illustration-container {
  width: 80%;
  margin-top: 2em;

  img.image {
    max-width: 100%;
    height: auto;
  }
}

div.info {
  font-family: $font-avenir;
  line-height: normal;
  color: #707070;
  p.text-exchanging {
    font-size: 2rem;
    font-family: $font-open-sans;
    font-weight: 300;
  }

  span.text-crypto {
    font-size: 2.4rem;
    font-weight: bold;
    color: #0c5db2;
  }

  span.text-made-easy {
    font-size: 1.8rem;
    margin-left: 0.6rem;
  }
}
</style>
