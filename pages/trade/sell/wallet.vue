<template>
  <trader step="wallet_deposit">
    <template slot="title">
      Transfer BTC
    </template>
    <template slot="content" class="wallet_deposit">
      <div class="wallet_deposit">
        <p class="desc-text">
          Send {{ cryptoAmount }} BTC to the BTC Address Below
        </p>
        <div class="columns is-10 address-clipboard-wrapper is-mobile">
          <div class="column is-10 address-wrapper">
            <p class="btc-address">
              {{ receiveAddress }}
            </p>
          </div>
          <a
            v-clipboard="receiveAddress"
            v-clipboard:success="toggleCopyText"
            class="column is-2 clipboard-wrapper"
          >
            {{ copyText }}
          </a>
        </div>
        <div class="qrcode-wrapper">
          <p class="qrcode">
            <vue-qrcode
              :value="`bitcoin:${receiveAddress}?amount=${cryptoAmount}`"
              tag="img"
              :options="{width: 160}"
            />
          </p>
          <p class="text-wrapper">
            <span class="text is-block">
              Scan wallet address directly.
            </span>
            <a href="" @click.prevent="downloadQrCode">
              <span class="icon is-block">
                <i class="fas fa-download" />
              </span>
            </a>
          </p>
        </div>
        <div class="status-wrapper">
          <p v-if="verifying">
            Verifying transaction...
          </p>
          <p v-else-if="transactions.length > 0">
            Transaction complete; please proceed.
          </p>
          <p v-else style="font-size: 1rem; color: red;">
            Transaction pending; please make the appropriate deposit
          </p>
          <p />
        </div>
      </div>
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': verifying}"
        :disabled="transactions.length === 0"
        @click="handleRequestTrade"
      >
        Request trade
      </button>
    </template>
  </trader>
</template>

<script>
import logger from '~/logger'
import { setInterval } from 'timers'
import { mapState } from 'vuex'
import Trader from '~/components/trade/trader.vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'

const _TRADE_VERIFY_INTERVAL_ = 60 * 1000 /* 1min 30 seconds */
const _STR_CANNOT_VERIFY_ = "Couldn't verify trade. retrying..."
const _STR_TRADE_REQUESTED_ = 'Trade request successful.'

export default {
  layout: 'simple',

  validate({ store }) {
    if (!store.getters['trade/isActiveTrade']) {
      return false
    }
    if (!store.getters['trade/hasCreatedTrade']) {
      return false
    }
    return true
  },

  components: {
    Trader,
    VueQrcode
  },

  data() {
    return {
      verifying: false,
      checkTradeIntervalTimer: null,
      copyText: 'Copy'
    }
  },

  computed: {
    ...mapState({
      cryptoAmount: state => state.trade.create.metadata.cryptoAmount,
      fiatAmount: state => state.trade.create.metadata.fiatAmount,
      tradeId: state => state.trade.create.metadata.id,
      pin: state => state.trade.create.metadata.pin,
      transactions: state => state.trade.create.metadata.transactions || [],
      tradeStatus: state => state.trade.create.metadata.status,
      expires: state => state.trade.create.metadata.expires,
      receiveAddress: state => state.trade.create.metadata.receiveAddress
    })
  },

  watch: {
    transactions(newValue) {
      if (newValue.length > 0) {
        clearInterval(this.checkTradeIntervalTimer)
      }
    }
  },

  created() {
    const self = this
    this.checkTradeIntervalTimer = setInterval(() => {
      self.fetchTradeItem()
    }, _TRADE_VERIFY_INTERVAL_)
  },

  methods: {
    toggleCopyText() {
      this.copyText = 'Copied'
      const vm = this
      setTimeout(() => {
        vm.copyText = 'Copy'
      }, 3000)
    },

    downloadQrCode() {
      const img = document.querySelector('.qrcode img')
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.download = 'qrcode_.png'
      a.href = img.src
      a.click()
    },

    async fetchTradeItem() {
      try {
        this.verifying = true
        const resp = await this.$axios.get(`/trade/${this.tradeId}/`)
        logger.debug(`[sell/wallet] resp data: ${JSON.stringify(resp.data)}`)

        this.$store.commit('trade/SET_TRADE_METADATA', resp.data)
      } catch (err) {
        this.$swal({
          title: 'Error:',
          type: 'error',
          position: 'top-end',
          text: _STR_CANNOT_VERIFY_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.verifying = false
      }
    },

    handleRequestTrade() {
      const self = this
      const onClose = () => {
        self.$router.replace({
          path: '/track'
        })
      }

      this.$swal({
        type: 'success',
        title: 'Trade Request Success',
        text: `${_STR_TRADE_REQUESTED_} Your trade ID is ${this.tradeId}`,
        footer: `Your trade pin is ${this.pin}`,
        onClose
      })
    }
  }
}
</script>
