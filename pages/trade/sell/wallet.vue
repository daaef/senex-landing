<template>
  <trader step="wallet_deposit">
    <template slot="title">
      Transfer BTC
    </template>
    <template slot="content" class="wallet_deposit">
      <p class="desc-text">
        Send {{ cryptoAmount }} BTC to the BTC Address Below
      </p>
      <div class="columns is-10 address-clipboard-wrapper">
        <div class="column is-10 address-wrapper">
          <p class="btc-address">
            {{ walletAddress }}
          </p>
        </div>
        <a v-clipboard="walletAddress" class="column is-2 clipboard-wrapper">
          <span class="icon" style="padding: 0; margin: 0">
            <i class="far fa-copy" />
          </span>
          <span>copy</span>
        </a>
      </div>
      <div class="qrcode-wrapper">
        <p class="qrcode">
          <vue-qrcode
            :value="`bitcoin:${walletAddress}?amount=${cryptoAmount}`"
            tag="img"
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
import { setTimeout, setInterval } from 'timers'
import { mapState } from 'vuex'
import Trader from '~/components/trade/trader.vue'

const _TRADE_VERIFY_INTERVAL_ = 30 * 1000 /* 30 seconds */

// TODO: download qrcode

export default {
  layout: 'simple',

  components: {
    Trader
  },

  data() {
    return {
      verifying: false
    }
  },

  computed: {
    ...mapState({
      cryptoAmount: state => state.trade.create.metadata.cryptoAmount,
      fiatAmount: state => state.trade.create.metadata.fiatAmount,
      tradeId: state => state.trade.create.metadata.id,
      transactions: state => state.trade.create.metadata.transactions,
      tradeStatus: state => state.trade.create.metadata.status,
      expires: state => state.trade.create.metadata.expires,
      walletAddress: state => state.trade.create.metadata.walletAddress
    })
  },

  created() {
    setInterval(function() {
      this.fetchTradeItem()
    }, _TRADE_VERIFY_INTERVAL_)
  },

  methods: {
    fetchTradeItem() {
      this.verifying = true
      this.$axios
        .get(`/trade/${this.tradeId}`)
        .then(resp => {
          this.verifying = false
          this.$store.commit('trade/SET_TRADE_METADATA', resp.data)
        })
        .catch(() => {
          this.verifying = false
          this.$swal({
            title: 'Error:',
            type: 'error',
            position: 'top-end',
            text: "Couldn't verify trade. trying again...",
            timer: 7 * 1000,
            toast: true,
            showConfirmButton: false
          })

          setTimeout(function() {
            this.fetchTradeItem()
          }, _TRADE_VERIFY_INTERVAL_ / 2)
        })
    }
  }
}
</script>
