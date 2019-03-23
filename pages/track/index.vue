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
                <label for="" class="label has-text-weight-normal">Track ID</label>
                <p class="control">
                  <input type="text" class="input is-rounded" placeholder="#12345">
                </p>
              </div>
            </div>
            <div class="button-container">
              <button class="button is-fullwidth track-button">
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
                OTP Verification
              </p>
              <p class="text-info has-text-centered">
                Enter the code sent to ********789
              </p>
              <div class="columns is-mobile">
                <div class="column is-3">
                  <input type="text" class="input" maxlength="1">
                </div>
                <div class="column is-3">
                  <input type="text" class="input" maxlength="1">
                </div>
                <div class="column is-3">
                  <input type="text" class="input" maxlength="1">
                </div>
                <div class="column is-3">
                  <input type="text" class="input" maxlength="1">
                </div>
              </div>
              <div class="btn-container">
                <button class="button">
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
export default {
  layout: 'blue',

  data() {
    return {
      // This is used to determine which section of the UI to show.
      // Valid values are trackid | otpverification
      step: 'otpverification'
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
