<template>
  <div class="container wrapper">
    <p class="__title has-text-centered">
      Selling <span class="amount__btc">{{ amountBtc }} BTC</span> at <span class="amount__currency">{{ amountCurrency }} NGN</span>
    </p>

    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="columns is-mobile trader">
          <div class="column is-2 icons-wrapper has-text-centered">
            <trade-icon
              v-for="(icon, i) in iconList"
              :key="i"
              :name="icon"
              :active="isIconActive(icon)"
              class="icon-container"
            />
          </div>
          <div class="column is-9 content-wrapper">
            <div class="columns is-mobile">
              <div class="column is-8">
                <div v-if="currentStep === 'user_info'" class="content-area visible">
                  <p class="__title">
                    Personal Information
                  </p>
                  <div class="content">
                    <div class="field">
                      <label for="" class="label">First Name</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="Bruce">
                      </div>
                    </div>

                    <div class="field">
                      <label for="" class="label">Last Name</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="Wayne">
                      </div>
                    </div>

                    <div class="field">
                      <label for="" class="label">Email</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="batman@brucewayne.com">
                      </div>
                    </div>

                    <div class="field">
                      <label for="" class="label">Mobile Number</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="+2340000000000">
                      </div>
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <button class="button" @click.prevent="currentStep = 'wallet_deposit'">
                      Continue
                    </button>
                  </div>
                </div>

                <div v-if="currentStep === 'wallet_deposit'" class="content-area">
                  <div class="__title">
                    Transfer BTC
                  </div>
                  <div class="content wallet_deposit">
                    <p class="desc-text">
                      Send 0.00012345 BTC to the BTC Address Below
                    </p>
                    <div class="columns is-10 address-clipboard-wrapper">
                      <div class="column is-10 address-wrapper">
                        <p class="btc-address">
                          22x15w1wdx2DEFcs2xwd1w1dx5w5xwda52...
                        </p>
                      </div>
                      <a class="column is-2 clipboard-wrapper">
                        <span class="icon" style="padding: 0; margin: 0">
                          <i class="far fa-copy" />
                        </span>
                        <span>copy</span>
                      </a>
                    </div>
                    <div class="qrcode-wrapper">
                      <p class="qrcode">
                        <vue-qrcode
                          value="22x15w1wdx2DEFcs2xwd1w1dx5w5xwda52..."
                          :options="{width: 160}"
                        />
                      </p>
                      <p class="text-wrapper">
                        <span class="text is-block">
                          Scan Wallet Address Directly.
                        </span>
                        <span class="icon is-block">
                          <i class="fas fa-download" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <button class="button" @click="currentStep = 'user_finance'">
                      Continue
                    </button>
                  </div>
                </div>

                <div v-else-if="currentStep === 'user_finance'" class="content-area">
                  <p class="__title">
                    Financial Details
                  </p>
                  <div class="content">
                    <div class="field">
                      <label for="" class="label">Bank Name</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="Wayne Corp">
                      </div>
                    </div>
                    <div class="field">
                      <label for="" class="label">Swift/Sort Code</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="WACLACNA">
                      </div>
                    </div>
                    <div class="field">
                      <label for="" class="label">Account Number</label>
                      <div class="control">
                        <input type="text" class="input" placeholder="Bruce">
                      </div>
                    </div>
                    <div class="field">
                      <label for="" class="label">Account Name</label>
                      <div class="control">
                        <input type="text" class="input disabled" placeholder="Bruce">
                      </div>
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <button class="button" @click="currentStep = 'user_verify'">
                      Complete Trade
                    </button>
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
                  {{ helpText }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
import TradeIcon from '@/components/trade-icon'

export default {
  layout: 'simple',
  components: {
    TradeIcon,
    VueQrcode
  },

  data() {
    return {
      showHelpText: false,
      currentStep: 'user_info',
      steps: ['user_info', 'wallet_deposit', 'user_finance'],
      amountBtc: 0.00012345,
      amountCurrency: 1250,
      currency: 'NGN',
      uploads: {
        selfie: null,
        id: null
      }
    }
  },

  computed: {
    helpText() {
      return 'Hello world how is everyone doing today'
    },

    iconList() {
      return this.steps
    }
  },

  methods: {
    isIconActive(iconName) {
      const index = this.steps.indexOf(iconName)
      const currentStepIndex = this.steps.indexOf(this.currentStep)
      if (index < 0 || !currentStepIndex < 0) {
        return false
      }
      return index <= currentStepIndex
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/trade.scss';
</style>
