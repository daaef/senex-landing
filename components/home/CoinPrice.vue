<template>
  <div>
    <div class="coin-holder">
      <span class="coin-holder__coin-image-con"><img :src="image" /></span>
      <div class="coin-holder__coin-name-con">
        <span class="title">{{ name }}</span>
        <span class="subtitle">{{ abbr }}</span>
      </div>
      <div class="flex align-center ml-auto">
        <div class="coin-holder__coin-price-con">
          <span class="amount sell">N{{ Number(buy).toLocaleString() }}</span>
          <span class="btn action-buy">Buy</span>
        </div>
        <div class="coin-holder__coin-price-con">
          <span class="amount sell">N{{ Number(sell).toLocaleString() }}</span>
          <span class="btn action-sell">Sell</span>
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
    }
  }
}
</script>

<style></style>
