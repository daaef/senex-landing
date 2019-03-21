<template>
  <trader step="credit_card">
    <template slot="title">
      Payment
    </template>
    <template slot="content">
      <button class="button">
        Pay with flutterwave
      </button>
    </template>
    <template slot="button">
      <button class="button">
        Continue
      </button>
    </template>
  </trader>
</template>

<script>
import Trader from '~/components/trade/trader.vue'

export default {
  layout: 'simple',

  components: {
    Trader
  },

  head() {
    return {
      title: 'Buy - SenexPay'
    }
  }
}
</script>
