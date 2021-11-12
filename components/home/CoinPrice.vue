<template>
  <div>
    <div class="coin-holder">
      <span class="coin-holder__coin-image-con"
        ><img :src="image" alt="coin"
      /></span>
      <div class="coin-holder__coin-name-con">
        <span class="title">{{ name }}</span>
        <span class="subtitle">{{ abbr }}</span>
      </div>
      <div class="coin-holder__price-box">
        <div class="coin-holder__coin-price-con">
          <span class="amount"
            >{{ country.symbol }}{{ Number(buy).toLocaleString() }}</span
          >
          <!-- <span class="btn action action--buy"
            ><a :href="appLink + '/order/start'">Buy</a></span
          > -->
          <span class="btn action action--buy"
            ><a
              :href="`${appLink}/order/start/?type=buy&order=${abbr.toLowerCase()}&cur=${country.code.toLowerCase()}`"
              rel="noopener"
              >Buy</a
            ></span
          >
        </div>
        <div class="coin-holder__coin-price-con">
          <span class="amount"
            >{{ country.symbol }}{{ Number(sell).toLocaleString() }}</span
          >
          <span class="btn action action--sell"
            ><a
              :href="`${appLink}/order/start/?type=sell&order=${abbr.toLowerCase()}&cur=${country.code.toLowerCase()}`"
              rel="noopener"
              >Sell</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isComingSoon: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: '/img/senepay-og.png'
    },
    name: {
      type: String,
      default: ''
    },
    abbr: {
      type: String,
      default: ''
    },
    buy: {
      type: Number,
      default: 0
    },
    sell: {
      type: Number,
      default: 0
    },
    country: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      appLink: ''
    }
  },
  mounted() {
    this.appLink = process.env.APP_URL
  }
}
</script>

<style></style>
