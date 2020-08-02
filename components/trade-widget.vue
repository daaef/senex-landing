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
                  <span class="is-size-4">{{ rates.buy.USD_NGN }}</span>
                  <p class="is-size-6">
                    Buy
                  </p>
                </div>
                <div class="has-text-centered">
                  <span>&#8358;</span>
                  <span class="is-size-4">{{ rates.sell.USD_NGN }}</span>
                  <p class="is-size-6">
                    Sell
                  </p>
                </div>
              </div>
              <div class="has-text-centered" style="margin-top: 0.5rem;">
                <p class="">
                  I want to
                </p>
              </div>
              <div class="has-text-centered trade-selector-container">
                <!-- <div class="b-v-centered">
                  <div class="inner" />
                </div> -->
                <fluid-switch label-left="Buy" label-right="Sell" style="width: 100%;" @switched="toggleTradeType" />
                <!-- <div class="b-v-centered">
                  <div class="inner" />
                </div> -->
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
                {{ activeRates && activeRates.disabled ? 'Bitcoin purchase is currently unavailable' : '' }}
              </p>

              <div style="margin-bottom: 0.5em;" class="columns">
                <div class="field has-addons column">
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
                      max="10"
                      maxlength="12"
                      style="text-align: right;"
                      name="BTC"
                      aria-label="BTC"
                      @focus="isDirty(true)"
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
                      v-model="computedFiatAmount"
                      v-money="money"
                      type="tel"
                      class="input is-medium"
                      placeholder="0.00"
                      min="0"
                      step="any"
                      :maxlength="currency === 'NGN' ? 13 : 9"
                      style="background: #f4f4f4; color: #707070; border: none; margin-left: 0.2rem; text-align: right; direction: rtl"
                      aria-label="NGN-USD"
                      @focus="isDirty(false)"
                    >
                  </p>
                </div>
              </div>
              <div class="control rev-amt">
                <div class="tags has-addons is-right">
                  <span class="tag is-dark">&asymp;</span>
                  <span class="tag norm-b">{{ computedFiatAmountReversed|formatMoney(currency === 'USD' ? 'NGN' : 'USD') }}</span>
                </div>
              </div>
            </div>

            <div class="is-hidden-mobile">
              <div class="field checkbox">
                <input id="consent" v-model="consent" class="is-checkradio has-background-color is-white" type="checkbox">
                <label for="consent">
                  I agree to the <a href="/legal/privacy-policy" aria-label="Privacy Policy" target="_blank" rel="noreferrer noopener">Privacy Policy</a> and <a href="/legal/risk-disclosure" aria-label="Risk Disclosure" target="_blank" rel="noreferrer noopener">Risk Disclosure</a>
                </label>
              </div>
              <div class="field checkbox">
                <input id="marketing" v-model="marketing" class="is-checkradio has-background-color is-white" type="checkbox">
                <label for="marketing">Keep me updated via email</label>
              </div>
            </div>
            <div class="is-hidden-tablet">
              <div class="field checkbox">
                <input id="consent" v-model="consent" class="is-checkradio has-background-color is-white is-small" type="checkbox">
                <label for="consent">
                  I agree to the <a href="/legal/privacy-policy" aria-label="Privacy Policy" target="_blank" rel="noreferrer noopener">Privacy Policy</a> and <a href="/legal/risk-disclosure" aria-label="Risk Disclosure" target="_blank" rel="noreferrer noopener">Risk Disclosure</a>
                </label>
              </div>
              <div class="field checkbox">
                <input id="marketing" v-model="marketing" class="is-checkradio has-background-color is-white is-small" type="checkbox">
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
                'font-size': '1rem',
              }"
            >
              You have a pending trade session.
            </p>
            <div class="field is-grouped is-grouped-centered">
              <p class="control has-text-centered">
                <a href="" class="button is-small is-primary" style="background:#254882;" @click.prevent="handleContinueTrade">Continue</a>
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
import { VMoney } from 'v-money'

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
  directives: { money: VMoney },

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
      },
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '',
        suffix: '',
        precision: 2
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
            fiatAmount = fiatAmount.split('.')
            fiatAmount[0] = fiatAmount[0].replace(/\D/g, '')
            fiatAmount = fiatAmount.join('.')
            fiatAmount = parseFloat(fiatAmount)
          }
          if (this.currency === 'USD') {
            rv = fiatAmount / rate.USD
          } else {
            rv = fiatAmount / rate.NGN
          }

          if (
            rv < rate.minimum / rate.USD &&
            this.fiatAmountIsDirty &&
            this.fiatAmount > 0
          ) {
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
        this.$nextTick(() => (this.fiatAmount = val))
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
          fiatAmount = fiatAmount.split('.')
          fiatAmount[0] = fiatAmount[0].replace(/\D/g, '')
          fiatAmount = fiatAmount.join('.')
          fiatAmount = parseFloat(fiatAmount)
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
    isDirty(option) {
      this.fiatAmountIsDirty = !option
      this.cryptoAmountIsDirty = option
      if (option === false) {
        this.cryptoAmount = 0
      }
    },

    fiatConvert(opt) {
      let fiatAmount = opt
      fiatAmount = fiatAmount.split('.')
      fiatAmount[0] = fiatAmount[0].replace(/\D/g, '')
      fiatAmount = fiatAmount.join('.')
      fiatAmount = parseFloat(fiatAmount)
      return fiatAmount
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

        const fiatValue = this.computedFiatAmount

        this.$store.commit('trade/START_TRADE', {
          currency: this.currency,
          fiatAmount: this.fiatConvert(fiatValue),
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
  font-size: 1rem;
  color: #ffffff;

  label a {
    color: #a2bedd;
  }
}

div.button-container {
  margin-top: 0.8em;
  margin-bottom: 1.8em;
  button.trade-button {
    background-color: #ffffff;
    font-family: $font-inter;
    color: #0c5db2;
  }
}

div.track-trade {
  font-size: 1.1rem;
  font-family: $font-inter;
  margin-bottom: 0.8rem;
  color: #ffffff;
  a {
    font-weight: bold;
    color: #a1b3c4;
  }
}
div.trade-box {
  padding: 1.8rem 2.2rem;
  // padding-top: 1.5rem;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.3);
  font-family: $font-inter;
  color: #000000;
  select {
    color: #000000;
  }

  select.crypto {
    background: #254882;
    color: #fff;
  }

  input.blue-border,
  select.blue-border {
    border: 1px solid #254882;
    color: #254882;
  }

  .amount {
    color: #254882;
  }

  .norm {
    color: #254882;
  }

  .norm-b {
    color: #ffffff;
    background: #254882;
  }
}

div.rates-2 {
  display: flex;
  justify-content: space-around;
  color: #000000;
  line-height: 1.3;
}

div.trade-selector-container {
  margin-bottom: 1.2rem;
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
  border-radius: 6px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 1.4rem;
  justify-content: space-around;
}

/*
.empty-grid-bg {
  position: absolute;
  // z-index: -1;
  margin: 0.1rem auto;
  height: 50px;
  width: 100%;
  background-image: url('~assets/grid-bg.png');
  background-repeat: no-repeat;
}
*/

.socials span {
  padding: 0px 7px;

  i {
    color: #fff;
  }
}

.rev-amt {
  .tag {
    font-size: 1rem;
    margin-bottom: 0;
    padding: 0px 8px;
    font-weight: bold;
  }
}
</style>
