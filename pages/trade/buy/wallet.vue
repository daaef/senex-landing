<template>
  <trader step="wallet">
    <template slot="title">
      Wallet Details
    </template>
    <template slot="content">
      <div class="field">
        <label for="" class="label">Your bitcoin wallet address</label>
        <div class="control">
          <input
            v-model="address"
            v-validate="'required'"
            type="text"
            placeholder="Paste here"
            name="wallet address"
            class="input"
            :disabled="loading"
            :class="{ 'is-danger': errors.has('wallet address') }"
          >
        </div>
        <p v-show="errors.has('wallet address')" class="help is-danger">
          {{ errors.first('wallet address') }}
        </p>
      </div>

      <div class="field">
        <label for="" class="label">Trade Pin</label>
        <div class="control">
          <input
            v-model="pin"
            v-validate="'required|number'"
            type="text"
            class="input"
            placeholder="12345"
            name="trade pin"
            :disabled="loading"
            :class="{ 'is-danger': errors.has('trade pin') }"
          >
        </div>
        <p v-if="errors.has('trade pin')" class="help is-danger">
          {{ errors.first('trade pin') }}
        </p>
        <p v-else>
          This will be required for security purposes in case ou need to check your
          trade progress later. Don't lose it!
        </p>
      </div>
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': loading}"
        @click="handleRequestTrade"
      >
        Request Trade
      </button>
    </template>
  </trader>
</template>

<script>
import Trader from '~/components/trade/trader.vue'
import { mapState } from 'vuex'

const _CREATE_TRADE_ERROR_ = 'Something bad happened; try again'

export default {
  layout: 'simple',

  components: {
    Trader
  },

  data() {
    return {
      loading: false
    }
  },

  head() {
    return {
      title: 'Buy - SenexPay'
    }
  },

  computed: {
    ...mapState({
      info: state => state.trade.create.walletInfo
    }),

    address: {
      get() {
        return this.info.address
      },
      set(value) {
        this.$store.commit('trade/UPDATE_WALLET_INFO', {
          address: value
        })
      }
    },

    pin: {
      get() {
        return this.info.pin
      },
      set(value) {
        this.$store.commit('trade/UPDATE_WALLET_INFO', {
          pin: value
        })
      }
    }
  },

  methods: {
    handleRequestTrade() {
      if (!this.details.bankCode) {
        this.showErrors = true
      } else {
        this.$validator.validateAll().then(validated => {
          if (validated) {
            this.createTrade()
          }
        })
      }
    },

    async createTrade() {
      const data = this.$store.state.trade.create
      const payload = {
        type: 'buy',
        cryptoAmount: data.cryptoAmount,
        fiatAmount:
          data.currency === 'NGN'
            ? data.fiatAmount
            : data.fiatAmount * data.conversionRate.USD_NGN,
        ...data.personalInformation,
        ...data.walletInfo,
        deviceInfo: {},
        networkInfo: {}
      }

      try {
        this.loading = true
        const resp = await this.$axios.post('/trade/', payload)
        this.$store.commit('trade/SET_TRADE_METADATA', resp.data)
        this.$router.replace({
          path: '/trade/buy/pay'
        })
      } catch (err) {
        this.$swal({
          title: 'Error:',
          type: 'error',
          position: 'top-end',
          text: _CREATE_TRADE_ERROR_,
          timer: 7 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
