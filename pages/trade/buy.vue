<template>
  <div class="container wrapper">
    <p class="__title has-text-centered">
      Buying <span class="amount__btc">{{ amountBtc }} BTC</span> at <span class="amount__currency">{{ amountCurrency }} NGN</span>
    </p>

    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="columns is-mobile trader">
          <div class="column is-3 icons-wrapper has-text-centered">
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
                        <input type="text" class="input" placeholder="Bruce">
                      </div>
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <button class="button" @click.prevent="currentStep = 'wallet'">
                      Continue
                    </button>
                  </div>
                </div>

                <div v-else-if="currentStep === 'wallet'" class="content-area">
                  <div class="__title">
                    Wallet Details
                  </div>
                  <div class="content">
                    <div class="field">
                      <label for="" class="label">Your bitcoin wallet address</label>
                      <textarea id="" name="" rows="2" class="textarea" placeholder="Paste here" />
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <button class="button" @click="currentStep = 'credit_card'">
                      Continue
                    </button>
                  </div>
                </div>

                <div v-else-if="currentStep === 'credit_card'" class="content-area">
                  <p class="__title">
                    Payment
                  </p>
                  <div class="content">
                    <button class="button">
                      Pay with flutterwave
                    </button>
                  </div>
                  <div class="button-wrapper">
                    <button class="button" @click="currentStep = 'user_verify'">
                      Continue
                    </button>
                  </div>
                </div>

                <div v-else class="content-area">
                  <p class="__title">
                    Verification
                  </p>
                  <div class="content user-verify">
                    <div>Upload ID</div>
                    <div class="id-section">
                      <img v-if="uploads.id" src="" alt="" class="upload-id">
                      <img v-else src="~assets/images/id-placeholder.png" alt="" class="upload-id">
                      <div class="widget-grp">
                        <button class="button select-file-btn">
                          Choose File
                        </button>
                        <button class="button upload-file-btn">
                          Upload
                        </button>
                      </div>
                    </div>

                    <p>Upload Selfie</p>
                    <div class="selfie-section">
                      <img v-if="uploads.selfie" :src="upload.selfie" alt="" class="upload-selfie">
                      <img v-else src="~assets/images/selfie-placeholder.png" alt="" class="upload-selfie">
                      <div class="widget-grp">
                        <button class="button select-file-btn">
                          Choose File
                        </button>
                        <button class="button upload-file-btn">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <button class="button">
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
import TradeIcon from '@/components/trade-icon'

export default {
  layout: 'simple',

  components: {
    TradeIcon
  },

  data() {
    return {
      showHelpText: false,
      currentStep: 'user_info',
      steps: ['user_info', 'wallet', 'credit_card', 'user_verify'],
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
