<template>
  <trader step="credit_card">
    <template slot="title">
      Payment
    </template>
    <template slot="content">
      <div v-if="verifying">
        <spinner :size="55" />
      </div>
      <div v-else-if="verified" class="has-text-centered">
        Transaction verificatin successful
      </div>
      <div v-else class="has-text-centered">
        <rave
          :is-production="isProduction"
          style-class="button"
          :email="email"
          :amount="amount"
          :reference="reference"
          :currency="currency"
          :rave-key="raveKey"
          :close="handleClose"
          :callback="handlePaymentResponse"
        />
      </div>
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
  </trader>
</template>

<script>
import Trader from '~/components/trade/trader.vue'
import Rave from 'vue-ravepayment'

const _ERR_VERIFY_TRANSACTION_ = 'Unable to verify your transaction, try again'
const _STR_INVALID_TRANSACTION_ = 'Invalid transaction'
const _STR_TRANSACTION_CANCELLED_ = 'You aborted the transaction'

export default {
  layout: 'simple',

  components: {
    Rave,
    Trader
  },

  data() {
    return {
      verifying: false
    }
  },

  head() {
    return {
      title: 'Buy - SenexPay'
    }
  },

  computed: {
    isProduction() {
      return process.env.NODE_ENV === 'production'
    },

    currency() {
      return 'NGN'
    },

    email() {
      return this.$store.state.trade.create.personalInformation.email
    },

    amount() {
      const { amount, currency, conversionRate } = this.$store.state.create
      if (currency === 'NGN') {
        return amount
      } else {
        return amount * conversionRate.USD_NGN
      }
    },

    reference() {
      return this.$store.state.trade.create.metadata.id
    },

    raveKey() {
      return process.env.FLW_PUB_KEY
    }
  },

  methods: {
    async handlePaymentResponse(response) {
      try {
        this.verifying = true
        const verificationResp = await this.$axios.get('/verify/rave/', {
          params: {
            txref: response.txRef
          }
        })
        if (verificationResp.data.success) {
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

    handleClose() {
      this.$swal({
        title: '',
        type: 'info',
        position: 'top-end',
        text: _STR_TRANSACTION_CANCELLED_,
        timer: 5 * 1000,
        toast: true,
        showConfirmButton: false
      })
    }
  }
}
</script>
