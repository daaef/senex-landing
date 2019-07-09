<template>
  <trader step="credit_card">
    <template slot="title">
      Payment
    </template>
    <template v-if="isOtc == false" slot="content">
      <div v-if="verifying" class="has-text-centered">
        Verifying your payment; please wait...
      </div>
      <div v-else-if="verified" class="has-text-centered">
        Transaction verification successful
      </div>
      <div v-else class="" style="margin-top: 4rem;">
        <p>
          You will be required to pay the sum of
          {{ amount|formatMoney('NGN') }} using an accepted payment method.
        </p>
        <p>
          <span class="img">
            <img
              src="~assets/flutterwave.png"
              alt="Flutterwave icon"
              height="28"
              width="28"
              style="vertical-align: middle;"
            >
          </span>
          <button class="button is-success" @click="payWithRave">
            Pay now
          </button>
        </p>
        <p class="is-size-6 has-font-weight-bold" style="margin-top: 2rem;">
          This trade is valid till
          <minute-countdown
            ref="countdownTimer"
            :minutes="tradeTTL"
            @timer-elapsed="handleTimerElapsed"
          />
        </p>
      </div>
    </template>
    <template v-else slot="content">
      <div v-html="$store.state.trade.create.otcInstructions" />
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': verifying}"
        :disabled="verifying || !verified"
        @click="handleContinue"
      >
        Continue
      </button>
    </template>
    <template slot="helpText">
      Pay the cash equivalent of the bitcoin you intent to buy
    </template>
  </trader>
</template>

<script>
import log from '~/logger'
import Trader from '~/components/trade/trader.vue'
import MinuteCountdown from '~/components/minute-countdown.vue'
import formatMoney from '~/filters/format-money'

const _ERR_VERIFY_TRANSACTION_ = 'Unable to verify your transaction, try again'
const _STR_INVALID_TRANSACTION_ = 'Transaction failed or invalid'

export default {
  layout: 'simple',

  filters: {
    formatMoney
  },

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
    MinuteCountdown
  },

  data() {
    return {
      verifying: false,
      verified: false
    }
  },

  head() {
    return {
      title: 'Buy - SenexPay',
      script: [
        {
          src: `${
            process.env.FLW_BASE_URL
          }/flwv3-pug/getpaidx/api/flwpbf-inline.js`
        }
      ]
    }
  },

  computed: {
    personalInfo() {
      return this.$store.state.trade.create.personalInformation
    },

    amount() {
      const {
        fiatAmount: amount,
        currency,
        conversionRate
      } = this.$store.state.trade.create
      if (currency === 'NGN') {
        return amount
      } else {
        return amount * conversionRate.USD_NGN
      }
    },

    isOtc() {
      const vm = this
      const otc = this.$store.state.trade.create.isOtc
      if (otc) {
        vm.verifying = false
        vm.verified = true
      }
      return otc
    },

    tradeId() {
      return this.$store.state.trade.create.metadata.id
    },

    currency() {
      return this.$store.state.trade.create.currency
    },

    tradeTTL() {
      return 20
    }
  },
  mounted() {
    // this.isOtc()
  },
  methods: {
    payWithRave() {
      const vm = this
      const x = window.getpaidSetup({
        txref: this.tradeId,
        PBFPubKey: process.env.FLW_PUB_KEY,
        customer_email: this.personalInfo.email,
        amount: this.amount,
        customer_phone: this.personalInfo.mobileNumber,
        currency: 'NGN',
        onclose: function() {},
        callback: function(response) {
          log.debug(`rave response: ${JSON.stringify(response)}`)
          vm.handlePaymentComplete(response)
          x.close()
        }
      })
    },

    async handlePaymentComplete(response) {
      if (
        !(response.tx.chargeResponseCode === '00') &&
        !(response.tx.chargeResponseCode === '0')
      ) {
        this.$swal({
          title: '',
          type: 'info',
          position: 'top-end',
          text: 'Transaction failed; try again',
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
        return
      }

      try {
        this.verifying = true
        const verificationResp = await this.$axios.get('/verify/rave/', {
          params: {
            txref: response.tx.txRef
          }
        })

        log.debug(
          `[trade/buy/pay] GET /verify/rave/ response: ${JSON.stringify(
            verificationResp
          )}`
        )

        if (verificationResp.data.status === 'successful') {
          this.verified = true
          this.$store.commit('trade/SET_PAYMENT_DONE', true)
          this.$refs.countdownTimer.stop()
        } else {
          this.$swal({
            title: '',
            type: 'info',
            position: 'top-end',
            text: _STR_INVALID_TRANSACTION_,
            timer: 5 * 1000,
            toast: true,
            showConfirmButton: false
          })
        }
      } catch (err) {
        log.debug(`[error] /verify/rave ${JSON.stringify(err.response)}`)

        this.$swal({
          title: '',
          type: 'error',
          position: 'top-end',
          text: _ERR_VERIFY_TRANSACTION_,
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.verifying = false
      }
    },

    handleContinue() {
      this.$router.push({
        path: '/trade/buy/verify'
      })
    },

    handleTimerElapsed() {
      alert('Trade is now expired. Trade has been cancelled.')
      this.$store.commit('trade/RESET_CREATE_TRADE')
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>

<style>
iframe {
  height: 100vh !important;
}
</style>
