<template>
  <section>
    <div class="">
      <div class="columns">
        <div class="column is-9 widget-column">
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
              <div style="margin-bottom: 1em;" class="columns">
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
              <div class="columns is-gapless is-mobile" style="margin-bottom: 2rem;">
                <div class="column is-2 has-text-centered">
                  <span class="icon" style="color: #c4c4c4; vertical-align: middle;">
                    <i class="fas fa-exchange-alt" />
                  </span>
                </div>
                <div class="column is-5">
                  <div class="select">
                    <select id="" v-model="currency" name="currency" class="currency-select">
                      <option value="NGN">
                        NGN
                      </option>
                      <option value="USD">
                        USD
                      </option>
                    </select>
                  </div>
                </div>
                <div class="column is-5">
                  <div class="control" :class="{'is-loading': isFetchingRates}">
                    <input
                      v-model="computedFiatAmount"
                      type="number"
                      class="input"
                      min="0"
                      step="any"
                      style="background: #f4f4f4; color: #707070; border: none;"
                    >
                  </div>
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
            class="box trade-box"
            style="margin-bottom: 7rem; padding-top: 3rem; padding-bottom: 3rem;"
          >
            <p
              class="has-text-centere"
              :style="{
                'font-size': '0.9rem',
              }"
            >
              You have a pending trade session.
            </p>
            <div class="field is-grouped is-centered">
              <p class="control">
                <a href="" class="button is-small is-primary" style="background:#1b70cf;" @click.prevent="handleContinueTrade">Continue</a>
              </p>
              <p class="control">
                <a href="" class="button is-small is-danger" @click.prevent="handleCancelTrade">Cancel</a>
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
              <span class="text">Payment powered by </span>
              <a href="https://flutterwave.com">
                <span class="img"><img src="~assets/flutterwave.png" alt="Flutterwave icon" height="32" width="32" style="vertical-align: middle;"></span>
              </a>
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

const FETCH_RATES_INTERVAL = 1000
const FETCH_RATES_ERR = 'Error fetching rates; try again later'

export default {
  components: {
    FluidSwitch
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
          const rate = this.rates[this.tradeType]
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

    fetchCryptoRates: _.debounce(function() {
      this.isFetchingRates = true
      this.$axios
        .get('/rates/')
        .then(resp => {
          this.rates = resp.data
          this.isFetchingRates = false
        })
        .catch(err => { // eslint-disable-line
          this.errorFetchRates = FETCH_RATES_ERR
          this.isFetchingRates = false
        })
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
  color: #d5d5d5;
  font-size: 0.9em;
  font-family: $font-roboto;
  a {
    font-weight: bold;
  }
}

p.flutterwave-grp {
  margin-top: 2.5em;

  .text {
    vertical-align: text-bottom;
  }

  .img {
    vertical-align: middle;
  }
}

div.trade-box {
  padding-bottom: 1em;
  padding-top: 1.5em;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.54);
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
}

div.trade-selector-container {
  margin-bottom: 3rem;
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
</style>
