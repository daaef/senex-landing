<template>
  <trader step="wallet">
    <template slot="title">
      Wallet Details
    </template>
    <template slot="content">
      <div class="field">
        <label for="" class="label">Your bitcoin wallet address</label>
        <input type="text" placeholder="Paste here" class="input">
      </div>
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
  }
}
</script>
