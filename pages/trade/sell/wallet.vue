<template>
  <trader step="wallet_deposit">
    <template slot="title">
      Make payments
    </template>
    <template v-if="isOtc == false" slot="content" class="wallet_deposit">
      <div v-if="receiveAddress" class="wallet_deposit">
        <div class="card" style="width: 230px; margin: 3px auto;">
          <header class="card-header is-size-6">
            <span class="card-header-title">
              {{ cryptoAmount }} BTC
            </span>
            <a 
              v-clipboard="receiveAddress"
              v-clipboard:success="toggleCopyText"
              class="card-header-icon button is-light is-medium"
              aria-label="more options"
            >
              <span class="icon">
                <i class="far fa-copy" aria-hidden="true" />
              </span>
            </a>
          </header>
          <div class="">
            <div class="content">
              <vue-qrcode
                :value="`bitcoin:${receiveAddress}?amount=${cryptoAmount}`"
                tag="img"
                :options="{width: 250}"
              />
              <p v-show="!verifying && transactions.length === 0" class="has-text-weight-bold is-size-7 has-text-danger blink">
                Expires: {{ $moment(expires).subtract(10, 'm').format('h:mm A') }}
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <a
              :href="`bitcoin:${receiveAddress}?amount=${cryptoAmount}`"
              class="card-footer-item button is-info has-text-weight-bold"
            >
              Pay in wallet
            </a>
          </footer>
        </div>
        <div class="status-wrapper">
          <p v-show="verifying">
            Waiting to receive 0 confirmations...
          </p>
          <p v-show="transactions.length > 0">
            BTC payment confirmed; please proceed.
          </p>
          <!-- <p v-show="!verifying && transactions.length === 0" class="is-size-6">
            Expires: {{ $moment(expires).format('h:mm A') }}
            <minute-countdown
              ref="countdownTimer"
              :minutes="tradeTTL"
              @timer-elapsed="handleTradeTimeElapsed"
            />
          </p> -->
          <p />
        </div>
      </div>
      <div v-else class="wallet_deposit">
        <h4>Please read carefully:</h4>
        <p class="help is-danger">
          <i class="fas fa-exclamation-circle" /> 
          Deposit {{ cryptoAmount }} BTC into the address that will be generated shortly.
          To make confirmations faster, <b>send Bitcoins using high network fees.</b>
          Trade expires exactly 20mins after address is generated.
        </p>
        <p>
          Once ready to make payment, please check the box below then click on the generate button.
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
// import MinuteCountdown from '~/components/minute-countdown.vue'

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
    VueQrcode
    // MinuteCountdown
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
        vm.pushOTC()
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
    pushOTC() {
      // this.$refs.countdownTimer.active = false
      this.verifying = false
      this.verified = true
    },

    async getAddress() {
      this.addressing = true
      try {
        const addr = await this.$axios.get('/get_address/', {
          params: { trade_id: this.tradeId }
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
        // this.$refs.countdownTimer.stop()

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

<style lang="scss" scoped>
.card {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
}
.blink {
  animation: blinker 1.5s linear infinite;
  padding-left: 10px;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
