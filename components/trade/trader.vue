<template>
  <section class="" style="margin: 3rem 0;">
    <div class="container wrapper_trader">
      <p class="__title has-text-centered is-size-4">
        <span v-if="tradeType === 'buy'">Buying </span>
        <span v-else>Selling </span>
        <span class="amount__btc">{{ cryptoAmount }} BTC</span> at <span class="amount__currency">{{ fiatAmount|formatMoney(currency) }}</span>
        <span style="margin-left: 0.5rem; vertical-align: top;">
          <a
            href="#"
            style="color: #d50b1f; font-size: 1.4rem; vertical-align: middle"
            @click.prevent="handleCancelTrade"
          ><i class="far fa-times-circle" /></a>
        </span>
      </p>
      <div class="column is-6 is-offset-3 is-4-widescreen is-offset-4-widescreen trader">
        <div class="content-wrapper">
          <div class="senexp is-hidden-tablet">
            <progress
              class="progress is-small is-info"
              :value="percentDone"
              max="100"
            />
          </div>
          <div class="steps senex is-hidden-mobile">
            <div
              v-for="(checkout, i) in iconNameList"
              :key="i"
              class="step-item"
              :class="{
                'is-active': isStepActive(checkout.step),
                'is-completed': isStepDone(checkout.step),
                'is-success': isStepDone(checkout.step)
              }"
            >
              <div class="step-marker">
                <span class="icon">
                  <i :class="`fa fa-${isStepDone(checkout.step) ? 'check' : checkout.icon}`" />
                </span>
              </div>
            </div>
          </div>
          <div class="content-area column is-10 is-offset-1">
            <p class="__title has-text-centered">
              <slot name="title" />
            </p>
            <div class="content" style="">
              <slot name="content" />
            </div>
            <div class="button-wrapper">
              <slot name="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
// import TradeIcon from '@/components/trade-icon'
import formatMoney from '~/filters/format-money'

export default {
  // components: {
  //   TradeIcon
  // },

  filters: {
    formatMoney
  },
  props: {
    step: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      showHelpText: false
    }
  },

  computed: {
    ...mapState({
      tradeType: state => state.trade.create.type,
      cryptoAmount: state => state.trade.create.cryptoAmount,
      fiatAmount: state => state.trade.create.fiatAmount,
      currency: state => state.trade.create.currency
    }),

    iconNameList() {
      if (this.tradeType === 'sell') {
        return [
          { step: 'user_info', icon: 'user' },
          { step: 'user_finance', icon: 'university' },
          { step: 'wallet_deposit', icon: 'credit-card' }
        ]
      } else {
        return [
          { step: 'user_info', icon: 'user' },
          { step: 'wallet', icon: 'wallet' },
          { step: 'credit_card', icon: 'credit-card' },
          { step: 'user_verify', icon: 'key' }
        ]
      }
    },

    percentDone() {
      const currentStepIndex = this.iconNameList.findIndex(
        i => i.step === this.step
      )
      return Math.floor(
        ((currentStepIndex + 1) / this.iconNameList.length) * 100
      )
    }
  },

  methods: {
    isStepActive(stage) {
      const index = this.iconNameList.findIndex(i => i.step === stage)
      const currentStepIndex = this.iconNameList.findIndex(
        i => i.step === this.step
      )
      if (index < 0 || !currentStepIndex < 0) {
        return false
      }
      return index === currentStepIndex
    },

    isStepDone(stage) {
      const index = this.iconNameList.findIndex(i => i.step === stage)
      const currentStepIndex = this.iconNameList.findIndex(
        i => i.step === this.step
      )
      if (index < 0 || !currentStepIndex < 0) {
        return false
      }
      return index < currentStepIndex
    },

    handleCancelTrade() {
      const shouldCancel = confirm('Really cancel trade?')
      if (shouldCancel) {
        this.$store.commit('trade/RESET_CREATE_TRADE')
        this.$router.replace({
          path: '/'
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/trade.scss';
.senex {
  padding-top: 1rem;
}
.senexp {
  width: 90%;
  margin: 0 auto;
  padding-top: 1.3rem;
}
.is-active {
  // color: $blue;
  :after {
    animation: none;
    display: none;
  }

  :before {
    // border: 4px solid $grey;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(33, 131, 221, 0.6);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(33, 131, 221, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(33, 131, 221, 0);
  }
}
</style>
