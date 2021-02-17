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
            v-validate="'required|alpha_num|max:36'"
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
        <label for="" class="label">Set trade PIN</label>
        <div class="control">
          <input
            v-model="pin"
            v-validate="'required|numeric|length:4'"
            type="text"
            class="input"
            placeholder="1234"
            name="trade pin"
            :disabled="loading"
            :class="{ 'is-danger': errors.has('trade pin') }"
          >
        </div>
        <span v-show="errors.has('trade pin')" class="help is-danger">
          {{ errors.first('trade pin') }}
        </span>
        <p>Take note of this PIN. It would be used to track your trade.</p>
        <p v-if="rates_changed" class="rate-changed">
          Sorry rates have changed from the last time, as such you will now 
          receive {{ newCryptoAmt }}BTC for {{ fiatAmount|formatMoney(currency) }}. Please proceed with this process to accept 
          these changes or close this trade to decline and restart this process.
        </p>
        <p class="delay">
          Kindly note that due to the recent govt. regulations, our system no longer 
          issues automatic payments. All transaction request will be handled manually over 
          the counter and as such payouts will not be instant on this platform.
        </p>
      </div>
    </template>
    <template slot="button">
      <button
        class="button"
        :class="{'is-loading': loading}"
        @click="handleRequestTrade"
      >
        Proceed to Payment
      </button>
    </template>
    <template slot="helpText">
      This is the wallet address the bitcoin you buy will be sent to.
    </template>
  </trader>
</template>

<script>
import { mapState } from 'vuex'
import log from '~/logger'
import Trader from '~/components/trade/trader.vue'
import formatMoney from '~/filters/format-money'

const _CREATE_TRADE_ERROR_ = 'Something happened; try again'

export default {
  layout: 'stepper',

  validate({ store }) {
    if (!store.getters['trade/isActiveTrade']) {
      return false
    }
    if (!store.getters['trade/hasPersonalInformation']) {
      return false
    }
    return true
  },

  filters: {
    formatMoney
  },

  components: {
    Trader
  },

  data() {
    return {
      loading: false,
      rates_changed: false,
      newCryptoAmt: 0.004532
    }
  },

  head() {
    return {
      title: 'Buy - SenexPay',
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/ClientJS/0.1.11/client.min.js'
        }
      ]
    }
  },

  computed: {
    ...mapState({
      info: state => state.trade.create.walletInfo,
      personalInfo: state => state.trade.create.personalInformation,
      cryptoAmount: state => state.trade.create.cryptoAmount,
      fiatAmount: state => state.trade.create.fiatAmount,
      currency: state => state.trade.create.currency
    }),

    address: {
      get() {
        return this.info.walletAddress
      },
      set(value) {
        this.$store.commit('trade/UPDATE_WALLET_INFO', {
          prop: 'walletAddress',
          value
        })
      }
    },

    pin: {
      get() {
        return this.personalInfo.pin
      },
      set(value) {
        this.$store.commit('trade/UPDATE_PERSONAL_INFO', {
          prop: 'pin',
          value
        })
      }
    }
  },

  methods: {
    getDeviceInfo() {
      const client = new window.ClientJS()
      return {
        userAgent: client.getUserAgent(),
        browser: client.getBrowser(),
        os: client.getOS(),
        device: client.getDevice(),
        deviceType: client.getDeviceType(),
        deviceVendor: client.getDeviceVendor(),
        cpu: client.getCPU(),
        screenPrint: client.getScreenPrint(),
        colorDepth: client.getColorDepth(),
        resolution: client.getCurrentResolution(),
        getAvailableResolution: client.getAvailableResolution(),
        deviceXDPI: client.getDeviceXDPI(),
        deviceYDPI: client.getDeviceYDPI(),
        fingerprint: '' + client.getFingerprint(),
        timezone: client.getTimeZone(),
        language: client.getLanguage(),
        systemLanguage: client.getSystemLanguage()
      }
    },

    handleRequestTrade() {
      this.$validator.validateAll().then(validated => {
        if (validated) {
          this.createTrade()
        }
      })
    },

    async createTrade() {
      if (this.rates_changed && this.newCryptoAmt) {
        this.$store.commit('trade/UPDATE_CRYPTO', this.newCryptoAmt)
      }
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
        deviceInfo: this.getDeviceInfo(),
        networkInfo: {}
      }
      log.debug(
        `[trade/buy:wallet] createTrade payload: ${JSON.stringify(payload)}`
      )

      try {
        this.loading = true
        const resp = await this.$axios.post('/trade/', payload)
        log.debug(
          `[trade/buy:wallet] POST /trade response: ${JSON.stringify(
            resp.data
          )}`
        )

        this.$store.commit('trade/SET_TRADE_METADATA', resp.data)
        this.$router.push({
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

<style lang="scss">
@import '@/assets/scss/colors.scss';

.rate-changed {
  padding: 8px;
  border: 1px solid $blue;
  border-radius: 6px;
  color: $blue;
}
.delay {
  padding: 8px;
  border: 1px solid hsl(348, 100%, 61%);
  border-radius: 6px;
  color: hsl(348, 100%, 61%);
}
</style>
