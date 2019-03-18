<template>
  <trader step="user_finance">
    <template slot="title">
      Financial Details
    </template>
    <template slot="content">
      <div class="field">
        <label for="" class="label">Bank Name</label>
        <div class="control">
          <input type="text" class="input" placeholder="Wayne Corp">
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Swift/Sort Code</label>
        <div class="control">
          <input type="text" class="input" placeholder="WACLACNA">
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Account Number</label>
        <div class="control">
          <input type="text" class="input" placeholder="Bruce">
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Account Name</label>
        <div class="control">
          <input type="text" class="input disabled" placeholder="Bruce">
        </div>
      </div>
    </template>
    <template slot="button">
      <button class="button">
        Request Trade
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
