<template>
  <div>
    <div class="coin--holding">
      <div class="coin-holder">
        <span class="coin-holder__coin-image-con"
          ><img :src="image" alt="coin"
        /></span>
        <div class="coin-holder__coin-name-con">
          <span class="title">{{ name }}</span>
          <!--        <span class="subtitle">{{ abbr }}</span>-->
        </div>
        <div class="coin-holder__price-box">
          <div class="coin-holder__coin-price-con">
            <span class="amount"
              >{{ country.symbol }}{{ Number(rate.buy).toLocaleString() }}</span
            >
            <!-- <span class="btn action action--buy"
            ><a :href="appLink + '/order/start'">Buy</a></span
          > --><a
              class="btn action action--buy"
              :href="`${appLink}/order/start/?type=buy&order=${abbr.toLowerCase()}&cur=${country.code.toLowerCase()}`"
              rel="noopener nofollow"
              >Buy</a
            >
          </div>
          <div class="coin-holder__coin-price-con">
            <span class="amount"
              >{{ country.symbol
              }}{{ Number(rate.sell).toLocaleString() }}</span
            >
            <a
              class="btn action action--sell"
              :href="`${appLink}/order/start/?type=sell&order=${abbr.toLowerCase()}&cur=${country.code.toLowerCase()}`"
              rel="noopener nofollow"
              >Sell</a
            >
          </div>
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
    rate: {
      type: Object,
      default: () => ({
        buy: 0,
        sell: 0
      })
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
    this.appLink = this.$config.appLink
  }
}
</script>

<style></style>
