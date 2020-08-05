<template>
  <trader step="credit_card">
    <template slot="title">
      Make payment
    </template>
    <template v-if="isOtc == false" slot="content">
      <div v-if="verifying" class="has-text-centered">
        <div class="polk">          
          <i class="fa fa-spinner fa-5x fa-spin" /><br>
          <p><i class="fa fa-cofee" /> Payment verified..</p>
        </div> 
      </div>
      <div v-else-if="verified" class="has-text-centered">
        <div class="polk">
          <div 
            :class="{ 'drawn': tick }" 
            class="trigger"
          />
          <svg
            id="tick"
            width="80px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 37 37"
            style="enable-background:new 0 0 37 37;"
            xml:space="preserve"
          >
            <path
              class="circ path"
              style="fill:none;stroke:#32CD32;stroke-width:1;stroke-linejoin:round;stroke-miterlimit:10;"
              d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
            />
            <polyline
              class="tick path"
              style="fill:none;stroke:#32CD32;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;"
              points="11.6,20 15.9,24.2 26.4,13.8 "
            />
          </svg><br>
          <p>Payment verified..</p>
        </div> 
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
      <div class="content">
        <h6>Please Read Carefully</h6>
        This trade will be handled manually over the counter due to the amount being transacted.
        <ol>
          <li>
            Send payments to the following bank account and take a screenshot of your successful transaction.
            <p>
              Send the exact or more amount to:
            </p>
            <blockquote>
              <div>SENEX PAYMENT SERVICES</div>
              <div>ACCESS/DIAMOND</div>
              <div>0106418511</div>
            </blockquote>
          </li>
          <li>
            <p style="margin-top: 15px;">
              Send payment proof via whatsapp using <b><a :href="`https://api.whatsapp.com/send?phone=+2348184899239&amp;text=Hello%21%20I%20just%20bought%20%E2%82%A6${amount}%20worth%20of%20Bitcoins.%20Here%20is%20my%20proof%20of%20transaction`" aria-label="OTC link" target="_blank" rel="noopener">this link</a></b>.
            </p>
          </li>
        </ol>

        You may now continue and complete this trade
      </div>
      <!-- <div v-html="$store.state.trade.create.otcInstructions" />      -->
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
      verified: false,
      tick: false
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
        vm.pushOTC()
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
    pushOTC() {
      // this.$refs.countdownTimer.active = false
      this.verifying = false
      this.verified = true
    },

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
        return
      }

      try {
        this.verifying = true
        this.verified = false
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
          this.verifying = false
          this.verified = true
          this.$store.commit('trade/SET_PAYMENT_DONE', true)
          this.$refs.countdownTimer.stop()
          setTimeout(function() {
            this.tick = true
          }, 1000)
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
        if (err && err.response) {
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
        }
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

<style scoped>
.polk {
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}

iframe {
  height: 100vh !important;
}
.circ {
  opacity: 0;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
.tick {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  -webkit-transition: stroke-dashoffset 1s 0.5s ease-out;
  -moz-transition: stroke-dashoffset 1s 0.5s ease-out;
  -ms-transition: stroke-dashoffset 1s 0.5s ease-out;
  -o-transition: stroke-dashoffset 1s 0.5s ease-out;
  transition: stroke-dashoffset 1s 0.5s ease-out;
}
.drawn + svg .path {
  opacity: 1;
  stroke-dashoffset: 0;
}
</style>
