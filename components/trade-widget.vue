<template>
  <section>
    <div class="">
      <div class="columns">
        <div class="column is-9-desktop widget-column">
          <form v-if="!hasActiveTrade" @submit.prevent="doTrade">
            <div class="box trade-box">
              <div class="has-text-centered trade-selector-container">
                <div class="b-v-centered">
                  <div class="inner" />
                </div>
                <fluid-switch label-left="Buy" label-right="Sell" @switched="toggleTradeType" />
                <div class="b-v-centered">
                  <div class="inner" />
                </div>
              </div>

              <div v-if="activeRates" class="rates-container">
                <div>
                  <span class="rate-label">BTC/USD: </span>
                  <span class="amount has-text-weight-semibold">{{ activeRates.USD|formatMoney('USD') }}</span>
                </div>
              </div>
              <div v-else-if="isFetchingRates" class="rates-container">
                fetching current rates...
              </div>

              <div style="margin-bottom: 0.5em;" class="columns">
                <div class="field has-addons column">
                  <div class="control">
                    <a
                      href=""
                      class="button"
                      style="background: #1b70cf; color: #fff; font-size: 1.03rem;"
                    >
                      BTC
                    </a>
                  </div>
                  <div class="control is-expanded">
                    <input
                      v-model="computedCryptoAmount"
                      type="number"
                      class="input blue-border"
                      :class="{'is-loading': isFetchingRates && !cryptoAmountIsDirty}"
                      step="any"
                      min="0"
                      style="text-align: right;"
                    >
                  </div>
                </div>
              </div>
              <div style="margin-bottom: 0.5rem;">
                <div class="field is-grouped">
                  <p class="control has-text-centered">
                    <span class="icon" style="color: #c4c4c4; vertical-align: center;">
                      <i class="fas fa-exchange-alt" />
                    </span>
                  </p>
                  <div class="control has-icons-left">
                    <div class="select">
                      <select
                        id=""
                        v-model="currency"
                        name="currency"
                        class="currency-select"
                      >
                        <option value="NGN">
                          NGN
                        </option>
                        <option value="USD">
                          USD
                        </option>
                      </select>
                      <span class="icon is-large is-left">
                        <img :src="computedFlags" alt="flag" width="20">
                      </span>
                    </div>
                  </div>
                  <p class="control is-expanded" :class="{'is-loading': isFetchingRates}">
                    <input
                      v-model="computedFiatAmount"
                      type="number"
                      class="input"
                      min="0"
                      step="any"
                      style="background: #f4f4f4; color: #707070; border: none; margin-left: 0.2rem;"
                    >
                  </p>
                </div>
              </div>
              <div style="margin-bottom: 1.5rem;">
                <div
                  v-show="computedFiatAmountReversed"
                  class="has-text-right is-size-6"
                  style="color: #707070; font-size: 0.9rem;"
                >
                  {{ computedFiatAmountReversed|formatMoney(currency === 'USD' ? 'NGN' : 'USD') }}
                </div>
              </div>
            </div>

            <div class="button-container">
              <button
                class="button is-fullwidth trade-button is-medium"
                :class="{'disabled': !canSubmit, 'is-loading': isLoading}"
                :disabled="!canSubmit"
                style="font-weight: 500;"
              >
                TRADE
              </button>
            </div>
          </form>
          <div
            v-else
            class="box trade-box has-text-centered"
            style="margin-bottom: 7rem; padding: 5rem 0;"
          >
            <p
              :style="{
                'font-size': '0.9rem',
              }"
            >
              You have a pending trade session.
            </p>
            <div class="field is-grouped is-grouped-centered">
              <p class="control has-text-centered">
                <a href="" class="button is-small is-primary" style="background:#1b70cf;" @click.prevent="handleContinueTrade">Continue</a>
              </p>
              <p class="control">
                <a href="" class="button is-small" @click.prevent="handleCancelTrade">Cancel</a>
              </p>
            </div>
          </div>
          <div class="track-trade has-text-centered">
            <p>
              Already have a trade? <nuxt-link to="/track">
                Track
              </nuxt-link>
            </p>
            <p class="flutterwave-grp">
              <span class="text">Pay with: </span>
              <span class="cc-icon"><i class="fab fa-cc-mastercard fa-3x" /></span>
              <span class="cc-icon"><i class="fab fa-cc-visa fa-3x" /></span>
            </p>
          </div>
          <div class="empty-grid-bg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import FluidSwitch from './fluid-switch'
import log from '~/logger'
import formatMoney from '~/filters/format-money'

const FETCH_RATES_INTERVAL = 1500
const FETCH_RATES_ERR = 'Error fetching rates; try again later'

export default {
  components: {
    FluidSwitch
  },

  filters: {
    formatMoney
  },

  data() {
    return {
      tradeType: 'buy',
      fiatAmount: 0,
      cryptoAmount: 0,
      currency: 'NGN',
      fiatAmountIsDirty: false,
      cryptoAmountIsDirty: false,
      isFetchingRates: false,
      errorFetchRates: '',
      rates: null,
      isLoading: false
    }
  },

  computed: {
    hasActiveTrade() {
      return this.$store.getters['trade/isActiveTrade']
    },

    activeRates() {
      if (!this.rates) {
        return null
      } else {
        return this.rates[this.tradeType]
      }
    },

    computedFlags() {
      return this.currency === 'NGN' ? 'nigeria.png' : 'america.png'
    },

    computedCryptoAmount: {
      set: function(val) {
        this.cryptoAmount = val
        this.fiatAmountIsDirty = false
        this.cryptoAmountIsDirty = true
      },

      get: function() {
        let rv
        if (this.cryptoAmountIsDirty) {
          return this.cryptoAmount
        }

        if (!this.rates) {
          rv = 0
        } else {
          const rate = this.rates[this.tradeType]
          const fiatAmount = this.fiatAmount
          if (this.currency === 'USD') {
            rv = fiatAmount / rate.USD
          } else {
            rv = fiatAmount / rate.NGN
          }
        }
        return rv === 0 ? 0 : rv.toFixed(8)
      }
    },

    computedFiatAmount: {
      set: function(val) {
        this.fiatAmount = val
        this.cryptoAmountIsDirty = false
        this.fiatAmountIsDirty = true
      },

      get: function() {
        if (this.fiatAmountIsDirty) {
          return this.fiatAmount
        }

        if (this.fiatAmount == null) {
          return null
        }

        let rv
        if (!this.rates) {
          rv = 0
        } else {
          const rate = this.activeRates
          const cryptoAmount = this.cryptoAmount
          if (this.currency === 'USD') {
            rv = rate.USD * cryptoAmount
          } else {
            rv = rate.NGN * cryptoAmount
          }
        }
        return rv === 0 ? 0 : rv.toFixed(2)
      }
    },

    computedFiatAmountReversed() {
      if (this.computedFiatAmount == null) {
        return null
      }

      let rv
      if (!this.rates) {
        rv = 0
      } else {
        const rate = this.activeRates
        const fiatAmount = this.computedFiatAmount
        if (this.currency === 'USD') {
          rv = rate.USD_NGN * fiatAmount
        } else {
          rv = fiatAmount / rate.USD_NGN
        }
      }
      return rv === 0 ? 0 : rv.toFixed(2)
    },

    canSubmit() {
      const rv =
        !this.isFetchingRates &&
        !!parseFloat(this.computedCryptoAmount) &&
        !!parseFloat(this.computedFiatAmount)
      return rv
    }
  },

  watch: {
    fiatAmount: function() {
      if (this.fiatAmountIsDirty) {
        this.fetchCryptoRates()
      }
    },

    cryptoAmount: function() {
      if (this.cryptoAmountIsDirty) {
        this.fetchCryptoRates()
      }
    }
  },

  created() {
    this.fetchCryptoRatesRequest()
  },

  methods: {
    handleCancelTrade() {
      const shouldCancel = confirm('Really cancel trade?')
      if (shouldCancel) {
        this.$store.commit('trade/RESET_CREATE_TRADE')
      }
    },

    handleContinueTrade() {
      let toPath
      const trade = this.$store.state.trade.create
      if (trade.type === 'buy') {
        if (trade.metadata.id) {
          if (this.$store.getters['trade/isPaid']) {
            toPath = '/trade/buy/verify'
          } else {
            toPath = '/trade/buy/pay'
          }
        } else if (this.$store.getters['trade/hasPersonalInformation']) {
          toPath = '/trade/buy/wallet'
        } else {
          toPath = '/trade/buy'
        }
      } else if (trade.metadata.id) {
        toPath = '/trade/sell/wallet'
      } else if (this.$store.getters['trade/hasPersonalInformation']) {
        toPath = '/trade/sell/account-info'
      } else {
        toPath = '/trade/sell'
      }

      this.$router.push({
        path: toPath
      })
    },

    toggleTradeType() {
      this.tradeType = this.tradeType === 'buy' ? 'sell' : 'buy'
    },

    async fetchCryptoRatesRequest() {
      try {
        this.isFetchingRates = true
        const resp = await this.$axios.get('/rates/')
        this.rates = resp.data
      } catch (err) {
        this.errorFetchRates = FETCH_RATES_ERR
        this.isFetchingRates = false
      } finally {
        this.isFetchingRates = false
      }
    },

    fetchCryptoRates: _.debounce(function() {
      this.fetchCryptoRatesRequest()
    }, FETCH_RATES_INTERVAL),

    async doTrade() {
      // recaptcha validation
      try {
        this.isLoading = true
        const token = await this.$recaptcha.execute('trade')
        log.debug(`[trade start recaptcha token]: ${token}`)

        this.$store.commit('trade/START_TRADE', {
          currency: this.currency,
          fiatAmount: this.computedFiatAmount,
          tradeType: this.tradeType,
          cryptoAmount: this.computedCryptoAmount,
          rates: this.tradeType === 'buy' ? this.rates.buy : this.rates.sell
        })
        this.$router.push({
          path: `/trade/${this.tradeType}`
        })
      } catch (err) {
        this.$swal({
          title: '',
          type: 'info',
          position: 'top-end',
          text: 'Recaptcha verification failed',
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

button:focus,
input:focus,
select:focus {
  outline: none;
  outline-style: none;
  box-shadow: none;
}

div.button-container {
  margin-top: 1em;
  margin-bottom: 2em;
  button.trade-button {
    background-color: #0c5db2;
    font-family: $font-avenir;
    color: #fff;
  }
}

div.track-trade {
  color: #c0c0c0;
  font-size: 0.95rem;
  font-family: $font-roboto;
  a {
    font-weight: bold;
  }
}

p.flutterwave-grp {
  margin-top: 2.5em;

  .text {
    vertical-align: middle;
  }

  .img {
    vertical-align: middle;
  }

  .cc-icon {
    color: #0c5db2;
  }
}

div.trade-box {
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.1);
  font-family: $font-open-sans;
  select {
    color: #707070;
  }

  select.crypto {
    background: #1b70cf;
    color: #fff;
  }

  input.blue-border,
  select.blue-border {
    border: 1px solid #1b70cf;
    color: #1b70cf;
  }

  .amount {
    color: #1b70cf;
  }
}

div.trade-selector-container {
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  .b-v-centered {
    width: 100%;
    padding: 0 13px;
    .inner {
      margin-top: 19px;
      border-bottom: 1px solid #0c5db2;
      width: 100%;
    }
  }
}

div.rates-container {
  color: #707070;
  display: flex;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  font-size: 0.85rem;
  padding: 0.5rem;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;
  justify-content: space-around;
}

.empty-grid-bg {
  margin-top: 3.5rem;
  height: 100px;
  width: 100%;
  background-image: url('~assets/grid-bg.png');
  background-repeat: no-repeat;
}
</style>
