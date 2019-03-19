<template>
  <div>
    <template v-if="!isActiveTrade">
      <div class="container wrapper_trader">
        <p class="has-text-centered">
          You shouldn't be here. Create a trade
          <nuxt-link to="/">
            <span class="has-text-weight-bold">here</span>
          </nuxt-link>
        </p>
      </div>
    </template>
    <template v-else>
      <div class="container wrapper_trader">
        <p class="__title has-text-centered">
          <span v-if="tradeType === 'buy'">Buying </span>
          <span v-else>Selling </span>
          <span class="amount__btc">{{ cryptoAmount }} BTC</span> at <span class="amount__currency">{{ fiatAmount }} {{ currency }}</span>
          <span style="margin-left: 1.5rem;"><a href="#" style="color:  #d50b1f; font-size: 0.8rem;">cancel</a></span>
        </p>

        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <div class="columns is-mobile trader">
              <div class="column is-2 icons-wrapper has-text-centered">
                <trade-icon
                  v-for="(icon, i) in iconNameList"
                  :key="i"
                  :name="icon"
                  :active="isIconActive(icon)"
                  class="icon-container"
                />
              </div>
              <div class="column is-9 content-wrapper">
                <div class="columns is-mobile">
                  <div class="column is-8">
                    <div class="content-area">
                      <p class="__title">
                        <slot name="title" />
                      </p>
                      <div class="content">
                        <slot name="content" />
                      </div>
                      <div class="button-wrapper">
                        <slot name="button" />
                      </div>
                    </div>
                  </div>

                  <div class="column is-4 help">
                    <a href="" class="tooltip-a" @click.prevent="showHelpText = !showHelpText">
                      <img
                        src="~assets/helptext-tooltip.png"
                        alt="Help text tool tip"
                        height="30"
                        width="30"
                      >
                    </a>
                    <p v-if="showHelpText" class="text">
                      <slot name="helpText" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TradeIcon from '@/components/trade-icon'

export default {
  components: {
    TradeIcon
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
        return ['user_info', 'user_finance', 'wallet_deposit']
      } else {
        return ['user_info', 'wallet', 'credit_card', 'user_verify']
      }
    },

    isActiveTrade() {
      return this.$store.getters['trade/isActiveTrade']
    }
  },

  methods: {
    isIconActive(iconName) {
      const index = this.iconNameList.indexOf(iconName)
      const currentStepIndex = this.iconNameList.indexOf(this.step)
      if (index < 0 || !currentStepIndex < 0) {
        return false
      }
      return index <= currentStepIndex
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/trade.scss';
</style>
