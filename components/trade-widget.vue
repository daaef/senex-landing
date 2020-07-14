<template>
  <section>
    <div class="">
      <div class="columns">
        <div class="column is-10-widescreen is-offset-2-widescreen widget-column">
          <form v-if="!hasActiveTrade" @submit.prevent="doTrade">
            <div class="box trade-box">
              <div v-if="rates" class="rates-2">
                <div class="has-text-centered">
                  <span>&#8358;</span>
                  <span class="is-size-4 has-text-weight-bold">{{ rates.buy.USD_NGN }}</span>
                  <p class="is-size-7">
                    Buy
                  </p>
                </div>
                <div class="has-text-centered">
                  <span>&#8358;</span>
                  <span class="is-size-4 has-text-weight-bold">{{ rates.sell.USD_NGN }}</span>
                  <p class="is-size-7">
                    Sell
                  </p>
                </div>
              </div>
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

              <p v-if="tradeType == 'buy'" class="is-size-7" :class="activeRates && activeRates.disabled ? 'help is-danger' : ''">
                {{ activeRates && activeRates.disabled ? 'Bitcoin purchase is currently unavailable' : 'I want to purchase Bitcoins' }}
              </p>
              <p v-else class="is-size-7">
                I want to sell my Bitcoins
              </p>

              <div style="margin-bottom: 0.5em;" class="columns">
                <div class="field has-addons column">
                  <!-- <div class="control">
                    <a
                      class="button is-large"
                      style="background: #1b70cf; color: #fff;"
                    >
                      BTC
                    </a>
                  </div> -->
                  <div class="control is-expanded has-icons-left">
                    <input
                      ref="btcInput"
                      v-model.number="computedCryptoAmount"
                      v-validate="'decimal:8'"
                      type="number"
                      class="input is-large blue-border"
                      :class="{'is-loading': isFetchingRates && !cryptoAmountIsDirty}"
                      placeholder="0.00000000"
                      step="any"
                      min="0"
                      maxlength="12"
                      style="text-align: right;"
                      name="BTC"
                      aria-label="BTC"
                    >
                    <span class="icon is-left norm" style="">
                      <i class="fab fa-bitcoin fa-2x" />
                    </span>
                    <p v-show="errors.has('BTC')" class="help is-danger">
                      {{ errors.first('BTC') }}
                    </p>
                  </div>
                </div>
              </div>
              <div style="margin-bottom: 0.5rem;">
                <!-- <p class="control has-text-centered">
                  <span class="icon" style="color: #1b70cf; vertical-align: center;">
                    <i class="fas fa-exchange-alt" />
                  </span>
                </p> -->
                <div class="field has-addons">
                  <div class="control has-icons-left">
                    <div class="select is-medium">
                      <select
                        v-model="currency"
                        name="currency"
                        class="currency-select"
                        aria-label="Currency"
                      >
                        <option value="NGN">
                          &#8358;
                        </option>
                        <option value="USD">
                          &#36;
                        </option>
                      </select>
                      <span class="icon is-large is-left">
                        <img :src="computedFlags" alt="flag" width="20">
                      </span>
                    </div>
                  </div>
                  <p class="control is-expanded" :class="{'is-loading': isFetchingRates}">
                    <input
                      v-model.number="computedFiatAmount"
                      type="tel"
                      class="input is-medium"
                      placeholder="0.00"
                      min="0"
                      step="any"
                      style="background: #f4f4f4; color: #707070; border: none; margin-left: 0.2rem; text-align: right;"
                      aria-label="NGN-USD"
                      @focus="clearField()"
                    >
                  </p>
                </div>
              </div>
              <div style="margin-bottom: 0.5rem;">
                <!-- <div
                  v-show="computedFiatAmountReversed"
                  class="has-text-right is-size-6"
                  style="color: #707070; font-size: 0.9rem;"
                >
                  {{ computedFiatAmountReversed|formatMoney(currency === 'USD' ? 'NGN' : 'USD') }}
                </div> -->
              </div>
            </div>

            <div class="is-hidden-mobile">
              <div class="field checkbox">
                <input id="consent" v-model="consent" class="is-checkradio is-dark" type="checkbox">
                <label for="consent">
                  I agree to the <a href="/legal/privacy-policy" aria-label="Privacy Policy" target="_blank" rel="noreferrer noopener">Privacy Policy</a> and <a href="/legal/risk-disclosure" aria-label="Risk Disclosure" target="_blank" rel="noreferrer noopener">Risk Disclosure</a>
                </label>
              </div>
              <div class="field checkbox">
                <input id="marketing" v-model="marketing" class="is-checkradio is-dark" type="checkbox">
                <label for="marketing">Keep me updated via email</label>
              </div>
            </div>
            <div class="is-hidden-tablet">
              <div class="field checkbox">
                <input id="consent" v-model="consent" class="is-checkradio is-dark is-small" type="checkbox">
                <label for="consent">
                  I agree to the <a href="/legal/privacy-policy" aria-label="Privacy Policy" target="_blank" rel="noreferrer noopener">Privacy Policy</a> and <a href="/legal/risk-disclosure" aria-label="Risk Disclosure" target="_blank" rel="noreferrer noopener">Risk Disclosure</a>
                </label>
              </div>
              <div class="field checkbox">
                <input id="marketing" v-model="marketing" class="is-checkradio is-dark is-small" type="checkbox">
                <label for="marketing">Keep me updated via email</label>
              </div>
            </div>

            <div class="button-container">
              <button
                class="button is-fullwidth trade-button is-medium"
                :class="{'disabled': !canSubmit, 'is-loading': isLoading}"
                :disabled="!canSubmit"
                style="font-weight: 500; padding-top: 9px;"
              >
                EXCHANGE
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
              Already have a transaction? <nuxt-link to="/track">
                Track
              </nuxt-link>
            </p>
            <p class="socials is-size-5">
              <span><a :href="socialLinks.facebookUrl" aria-label="Facebook" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-f fb" /></a></span>
              <span><a :href="socialLinks.instagramUrl" aria-label="Instagram" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram in" /></a></span>
              <span><a :href="socialLinks.twitterUrl" aria-label="Twitter" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter tw" /></a></span>
              <span><a :href="socialLinks.whatsappUrl" aria-label="Whatsapp" target="_blank" rel="noreferrer noopener"><i class="fab fa-whatsapp wa" /></a></span>
            </p>
          </div>
          <!-- <div class="empty-grid-bg" /> -->
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
      isLoading: false,
      consent: false,
      marketing: true,
      socialLinks: {
        facebookUrl: process.env.FACEBOOK_URL,
        instagramUrl: process.env.INSTAGRAM_URL,
        twitterUrl: process.env.TWITTER_URL,
        whatsappUrl: `https://api.whatsapp.com/send?phone=+${
          process.env.WHATSAPP_ID
        }&text=Hello%21%20I%20want%20to%20buy/sell%20Bitcoin`
      }
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
          let fiatAmount = this.fiatAmount
          if (fiatAmount.length > 0) {
            fiatAmount = parseFloat(fiatAmount.replace(/\D/g, ''))
          }
          if (this.currency === 'USD') {
            rv = fiatAmount / rate.USD
          } else {
            rv = fiatAmount / rate.NGN
          }

          if (rv < rate.minimum / rate.USD && this.fiatAmountIsDirty) {
            this.errors.add({
              field: 'BTC',
              msg: `Please enter a value not less than $${rate.minimum}`
            })
          }
        }
        return rv === 0 ? null : +rv.toFixed(8)
      }
    },

    computedFiatAmount: {
      set: function(val) {
        // if (val.length > 0) {
        //   log.debug(val)
        //   const result = val
        //     .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        // }
        // const kz = val.toLocaleString(undefined)
        // this.$nextTick(() => (this.fiatAmount = kz))
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

          if (
            cryptoAmount < rate.minimum / rate.USD &&
            this.cryptoAmountIsDirty
          ) {
            this.errors.add({
              field: 'BTC',
              msg: `Please enter a value not less than $${rate.minimum}`
            })
          }
        }
        return rv === 0
          ? null
          : rv.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
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
        let fiatAmount = this.computedFiatAmount
        if (fiatAmount.length > 0) {
          fiatAmount = parseFloat(fiatAmount.replace(/\D/g, ''))
        }
        if (this.currency === 'USD') {
          rv = rate.USD_NGN * fiatAmount
        } else {
          rv = fiatAmount / rate.USD_NGN
        }
      }
      return rv === 0 ? 0 : +rv.toFixed(2)
    },

    canSubmit() {
      const rv =
        !this.isFetchingRates &&
        !!parseFloat(this.computedCryptoAmount) &&
        !!parseFloat(this.computedFiatAmount) &&
        !this.errors.has('BTC') &&
        this.consent

      const disab =
        this.tradeType === 'buy' ? rv && !this.activeRates.disabled : rv
      return disab
    }
  },

  watch: {
    fiatAmount: function(newValue) {
      if (this.fiatAmountIsDirty) {
        this.fetchCryptoRates()
      }
    },

    cryptoAmount: function(newAmount) {
      if (this.cryptoAmountIsDirty) {
        this.fetchCryptoRates()
      }
    }
  },

  created() {
    this.fetchCryptoRatesRequest()
  },

  methods: {
    clearField() {
      if (this.cryptoAmountIsDirty) {
        this.cryptoAmount = 0
      }
    },

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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield; /* Firefox */
  margin: 0;
}

.checkbox {
  font-size: 0.88rem;
}

div.button-container {
  margin-top: 0.8em;
  margin-bottom: 1.8em;
  button.trade-button {
    background-color: #0c5db2;
    font-family: $font-avenir;
    color: #fff;
  }
}

div.track-trade {
  font-size: 0.95rem;
  font-family: $font-roboto;
  margin-bottom: 0.8rem;
  a {
    font-weight: bold;
  }
}
/*
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
*/
div.trade-box {
  padding: 1.8rem 2.2rem;
  // padding-top: 1.5rem;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.3);
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

  .norm {
    color: #1b70cf;
  }
}

div.rates-2 {
  display: flex;
  justify-content: space-around;
  color: #707070;
}

div.trade-selector-container {
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
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
  margin-bottom: 1.4rem;
  justify-content: space-around;
}

.empty-grid-bg {
  position: absolute;
  // z-index: -1;
  margin: 0.1rem auto;
  height: 50px;
  width: 100%;
  background-image: url('~assets/grid-bg.png');
  background-repeat: no-repeat;
}

.socials span {
  padding: 0px 7px;

  .fb {
    color: #3b5998;
  }

  .in {
    color: #fd5949;
  }

  .tw {
    color: #00acee;
  }

  .wa {
    color: #25d366;
  }
}
</style>
