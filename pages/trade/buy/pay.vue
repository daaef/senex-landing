<template>
  <trader step="credit_card">
    <template slot="title">
      Payment
    </template>
    <template slot="content">
      <div v-if="verifying" class="has-text-centered">
        Verifying your payment; please wait...
      </div>
      <div v-else-if="verified" class="has-text-centered">
        Transaction verification successful
      </div>
      <div v-else class="has-text-centered">
        <button class="button is-success" @click="payWithRave">
          Pay with Flutterwave
        </button>
      </div>
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': verifying}"
        :disabled="waiting || verifying || !verified"
        @click="handleContinue"
      >
        Continue
      </button>
    </template>
  </trader>
</template>

<script>
import log from '~/logger'
import Trader from '~/components/trade/trader.vue'

const _ERR_VERIFY_TRANSACTION_ = 'Unable to verify your transaction, try again'
const _STR_INVALID_TRANSACTION_ = 'Transaction failed or invalid'

export default {
  layout: 'simple',

  components: {
    Trader
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
          src:
            process.env.NODE_ENV === 'production'
              ? 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js'
              : 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js'
        }
      ]
    }
  },

  computed: {
    personalInfo() {
      return this.$store.state.trade.create.personalInformation
    },

    currency() {
      return 'NGN'
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

    tradeId() {
      return this.$store.state.trade.create.metadata.id
    }
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
        currency: this.currency,
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
    }
  }
}
</script>

<style>
iframe {
  height: 100vh !important;
}
</style>
