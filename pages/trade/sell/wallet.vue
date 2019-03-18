<template>
  <trader step="wallet_deposit">
    <template slot="title">
      Transfer BTC
    </template>
    <template slot="content" class="wallet_deposit">
      <p class="desc-text">
        Send 0.00012345 BTC to the BTC Address Below
      </p>
      <div class="columns is-10 address-clipboard-wrapper">
        <div class="column is-10 address-wrapper">
          <p class="btc-address">
            22x15w1wdx2DEFcs2xwd1w1dx5w5xwda52...
          </p>
        </div>
        <a class="column is-2 clipboard-wrapper">
          <span class="icon" style="padding: 0; margin: 0">
            <i class="far fa-copy" />
          </span>
          <span>copy</span>
        </a>
      </div>
      <div class="qrcode-wrapper">
        <p class="qrcode">
          <vue-qrcode
            value="22x15w1wdx2DEFcs2xwd1w1dx5w5xwda52..."
            :options="{width: 160}"
          />
        </p>
        <p class="text-wrapper">
          <span class="text is-block">
            Scan Wallet Address Directly.
          </span>
          <span class="icon is-block">
            <i class="fas fa-download" />
          </span>
        </p>
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
