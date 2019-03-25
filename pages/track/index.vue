<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-3 is-offset-4">
          <p class="has-text-weight-semibold p-heading has-text-centered">
            Tracking
            <span class="is-block  has-text-centered has-text-weight-normal" style="font-size: 0.95rem; color: #d5d5d5;">Track status of your pending trade</span>
          </p>

          <div v-if="step === 'trackid'" class="trackid-wrapper">
            <div class="card trackid-container">
              <div class="field">
                <label for="" class="label has-text-weight-normal">Trade ID</label>
                <p class="control">
                  <input
                    v-model="tradeId"
                    v-validate="'required'"
                    type="text"
                    name="trade id"
                    class="input is-rounded"
                    placeholder="#12345"
                  >
                </p>
              </div>
              <p v-show="errors.has('trade id')" class="help is-danger">
                {{ errors.first('trade id') }}
              </p>
            </div>
            <div class="button-container">
              <button
                class="button is-fullwidth track-button"
                :class="{'is-loading': isLoading}"
                @click="handleContinue"
              >
                Continue
              </button>
            </div>
            <div class="has-no-trade has-text-centered">
              <p>Haven't started a trade?</p>
              <p>
                <nuxt-link to="/" class="is-size-5 trade-link">
                  Start Trade
                </nuxt-link>
              </p>
            </div>
          </div>

          <div v-else-if="step === 'otpverification'" class="otpverification-wrapper">
            <div class="card otpverification-container">
              <p class="subheading has-text-centered">
                Pin Verification
              </p>
              <p class="text-info has-text-centered">
                Enter the pin for this trade
              </p>
              <div class="columns is-mobile">
                <div class="column is-3">
                  <input
                    ref="pin1"
                    v-model="pin1"
                    type="text"
                    class="input"
                    maxlength="1"
                  >
                </div>
                <div class="column is-3">
                  <input
                    ref="pin2"
                    v-model="pin2"
                    type="text"
                    class="input"
                    maxlength="1"
                  >
                </div>
                <div class="column is-3">
                  <input
                    ref="pin3"
                    v-model="pin3"
                    type="text"
                    class="input"
                    maxlength="1"
                  >
                </div>
                <div class="column is-3">
                  <input
                    ref="pin4"
                    v-model="pin4"
                    type="text"
                    class="input"
                  >
                </div>
              </div>
              <div class="btn-container">
                <button
                  class="button"
                  :disabled="!pin1 || !pin2 || !pin3 || !pin4"
                  @click="handlePinSubmit"
                >
                  Track
                </button>
              </div>
              <a href="#" class="resend">Resend</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const _ERR_FETCH_TRADE_ = "Couldn't fetch trade; try again"
const _STR_INVALID_PIN_ = 'Invalid pin; please enter correct trade pin'

export default {
  layout: 'blue',

  data() {
    return {
      isLoading: false,
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',

      // This is used to determine which section of the UI to show.
      // Valid values are trackid | pinverification
      step: 'pinverification'
    }
  },

  computed: {
    trade() {
      return this.$store.state.trade.track.trade
    },

    tradeId: {
      get() {
        return this.$store.state.trade.track.tradeId
      },
      set(value) {
        this.$store.commit('trade/UPDATE_TRACK_TRADE_ID', value)
      }
    }
  },

  methods: {
    handleContinue() {
      this.$validator.validateAll().then(async validated => {
        if (validated) {
          await this.getTrade()
          if (this.trade) {
            this.step = 'pinverification'
          }
        }
      })
    },

    async getTrade() {
      try {
        this.isLoading = true
        const resp = await this.$axios.get(`/trade/${this.tradeId}/`)
        this.$store.commit('trade/SET_TRACK_TRADE_INFO', resp.data)
      } catch (err) {
        this.$swal({
          title: '',
          type: 'error',
          position: 'top-end',
          text: _ERR_FETCH_TRADE_,
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
      } finally {
        this.isLoading = false
      }
    },

    handlePinSubmit() {
      const pin = `${this.pin1}${this.pin2}${this.pin3}${this.pin4}`
      if ('' + this.trade.pin === pin) {
        this.$router.replace({
          path: '/track/verify'
        })
      } else {
        this.$swal({
          title: '',
          type: 'info',
          position: 'top-end',
          text: _STR_INVALID_PIN_,
          timer: 5 * 1000,
          toast: true,
          showConfirmButton: false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  min-height: 480px;
  margin-bottom: 3rem;

  button:focus,
  input:focus,
  select:focus {
    outline: none;
    outline-style: none;
    box-shadow: none;
  }

  margin-top: 2rem;
  font-family: $font-avenir;

  p.p-heading {
    color: #1b70cf;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }

  div.trackid-wrapper {
    label {
      color: #455e6f;
      font-family: $font-roboto;
    }

    div.trackid-container {
      padding: 3rem 2.5rem;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.161);
    }

    div.button-container {
      margin-top: 1rem;
      margin-bottom: 2rem;
      button.track-button {
        background-color: #0c5db2;
        font-family: $font-avenir;
        color: #fff;
      }
    }

    div.has-no-trade {
      margin-top: 3.5rem;
      margin-bottom: 10rem;
      color: #d5d5d5;
    }
  }

  div.otpverification-wrapper {
    font-family: $font-avenir;
    input {
      font-weight: bold;
      text-align: center;
    }

    div.otpverification-container {
      padding: 2rem 1.5rem;
      background-color: #fbfbfb;
      border-radius: 4px;

      p.subheading {
        text-align: center;
        color: #0c5db2;
        margin: 0.8rem 0;
      }

      p.text-info {
        color: #d5d5d5;
        margin-bottom: 0.8rem;
      }

      div.btn-container {
        margin-top: 0.8rem;
        text-align: center;
        button {
          color: #ffffff;
          background-color: #0c5db2;
        }
      }

      a.resend {
        display: block;
        margin-top: 1.2rem;
        text-align: center;
      }
    }
  }

  div.trade-status-wrapper {
    font-family: $font-avenir;

    div.trade-status-container {
      .subheading {
        text-align: center;
        color: #1b70cf;
        padding: 1rem 0;
        font-size: 1.3rem;
      }

      .trade-info {
        padding: 1rem 0.7rem;
        .trade-info-item {
          margin: 0.7rem 0;
          .item-heading {
            color: #1b70cf;
            margin-bottom: 0.5rem;
          }

          .item-res {
            color: #d5d5d5;
            word-wrap: break-word;
          }
        }
      }
    }
  }
}
</style>
