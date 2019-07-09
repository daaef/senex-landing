<template>
  <trader step="wallet_deposit">
    <template slot="title">
      Transfer BTC
    </template>
    <template v-if="isOtc == false" slot="content" class="wallet_deposit">
      <div v-if="receiveAddress" class="wallet_deposit">
        <p class="desc-text">
          Send {{ cryptoAmount }} BTC to the wallet address below
        </p>
        <div class="columns address-clipboard-wrapper is-mobile">
          <div class="column is-8 address-wrapper">
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
              Scan wallet address directly OR
            </span>
            <a href="" @click.prevent="downloadQrCode">
              <span class="icon is-block">
                Download QR_Code.
                <i class="fas fa-download" />
              </span>
            </a>
          </p>
        </div>
        <div class="status-wrapper">
          <p v-show="verifying">
            Verifying transaction...
          </p>
          <p v-show="transactions.length > 0">
            Transaction complete; please proceed.
          </p>
          <p v-show="!verifying && transactions.length === 0" class="is-size-6">
            Trade pending; this trade is valid till
            <minute-countdown
              ref="countdownTimer"
              :minutes="tradeTTL"
              @timer-elapsed="handleTradeTimeElapsed"
            />
          </p>
          <p />
        </div>
      </div>
      <div v-else class="wallet_deposit">
        <h4>Please read carefully:</h4>
        <p class="help is-danger">
          <i class="fas fa-exclamation-circle" /> 
          You are required to deposit {{ cryptoAmount }} BTC into an address that will be generated for you by the system. 
          Do make sure you have this amount and more in your wallet to cover for network fees. 
          You only have 20 mins to make payment this for transaction once an address is generated after which this trade expires.
        </p>
        <p>
          If you are ready to make payment and wish to proceed, please check the box below and click on the generate button. <br>
          <b>NB:</b> We will not be held responsible for losses resulting from issues relating to wrongly copied address or non-exact amount of BTC paid.
        </p>
        <div>
          <label class="checkbox">
            <input v-model="activeGenerate" type="checkbox">
            I am ready to make payment
          </label>
          <br><br>
          <button 
            class="button is-primary is-rounded" 
            :class="{'is-loading': addressing}" 
            :disabled="!activeGenerate" 
            @click="getAddress"
          >
            <span class="icon">
              <i class="fas fa-qrcode" />
            </span>
            <span>Generate</span>
          </button>
        </div>
      </div>
    </template>
    <template v-else slot="content" class="wallet_deposit">
      <div class="wallet_deposit" v-html="$store.state.trade.create.otcInstructions" />
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': verifying}"
        :disabled="isOtc ? !isOtc : transactions.length === 0"
        @click="handleRequestTrade"
      >
        Request trade
      </button>
    </template>
  </trader>
</template>

<script>
import { mapState } from 'vuex'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import logger from '~/logger'
import Trader from '~/components/trade/trader.vue'
import MinuteCountdown from '~/components/minute-countdown.vue'

const _TRADE_VERIFY_INTERVAL_ = 60 * 1000 /* 1min */
const _STR_CANNOT_ADDRESS_ =
  'Failed to generate address, please try again after some time'
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
    VueQrcode,
    MinuteCountdown
  },

  data() {
    return {
      verifying: false,
      checkTradeIntervalTimer: null,
      copyText: 'copy',
      timeoutId: null,
      activeGenerate: false,
      addressing: false,
      rAdd: ''
    }
  },

  computed: {
    ...mapState({
      cryptoAmount: state => state.trade.create.metadata.cryptoAmount,
      fiatAmount: state => state.trade.create.metadata.fiatAmount,
      tradeId: state =>
        state.trade.create.metadata.id || localStorage.getItem('trade'),
      pin: state => state.trade.create.metadata.pin,
      transactions: state => state.trade.create.metadata.transactions || [],
      tradeStatus: state => state.trade.create.metadata.status,
      expires: state => state.trade.create.metadata.expires,
      receiveAddress: state => state.trade.create.receiveAddress
    }),

    tradeTTL() {
      return 20
    },

    isOtc() {
      const vm = this
      const otc = this.$store.state.trade.create.isOtc
      if (otc) {
        vm.verifying = false
      }
      return otc
    },

    isActive() {
      return this.$store.getters['trade/isActiveTrade']
    }
  },

  watch: {
    transactions(newValue) {
      if (newValue.length > 0) {
        clearInterval(this.checkTradeIntervalTimer)
      }
    }
  },

  created() {
    // this.pollUntil()
  },

  methods: {
    async getAddress() {
      this.addressing = true
      try {
        const addr = await this.$axios.get('/get_address/', {
          params: { tradeId: this.tradeId }
        })
        logger.debug(`[sell/wallet] resp data: ${JSON.stringify(addr.data)}`)
        this.$store.commit('trade/UPDATE_RECEIVE_ADDRESS', addr.data.address)
        this.rAdd = addr.data
        this.pollUntil()
      } catch (err) {
        this.$swal({
          title: 'Error:',
          type: 'error',
          position: 'top-end',
          text: _STR_CANNOT_ADDRESS_,
          timer: 9 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.addressing = false
      }
    },

    async pollUntil() {
      if (!this.isActive) {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId)
        }
        return
      }

      const prevTimeoutId = this.timeoutId
      const shouldPoll = await this.fetchTradeItem()
      if (shouldPoll) {
        this.timeoutId = setTimeout(
          this.pollUntil.bind(this),
          _TRADE_VERIFY_INTERVAL_
        )
      }

      clearTimeout(prevTimeoutId)
    },

    toggleCopyText() {
      this.copyText = 'copied'
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
        if (err.response) {
          if (err.response.status === 404) {
            this.handleTradeTimeElapsed()
            return false
          }
        } else {
          this.$swal({
            title: 'Error:',
            type: 'error',
            position: 'top-end',
            text: _STR_CANNOT_VERIFY_,
            timer: 7 * 1000,
            toast: true,
            showConfirmButton: false
          })
        }
      } finally {
        this.verifying = false
      }

      // We can safely poll next time
      return true
    },

    handleRequestTrade() {
      const self = this
      const onClose = () => {
        self.$store.commit('trade/SET_TRACK_TRADE_ID', this.tradeId)
        self.$store.commit('trade/RESET_CREATE_TRADE')
        this.$refs.countdownTimer.stop()

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
    },

    handleTradeTimeElapsed() {
      this.$refs.countdownTimer.stop()

      alert('Trade is now expired. Trade has been cancelled.')
      this.$store.commit('trade/RESET_CREATE_TRADE')
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
