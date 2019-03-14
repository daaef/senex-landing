<template>
  <section>
    <div class="">
      <div class="columns">
        <div class="column is-9">
          <div class="box trade-box">
            <div class="has-text-centered trade-selector-container">
              <div class="b-v-centered">
                <div class="inner" />
              </div>
              <fluid-switch label-left="Buy" label-right="Sell" />
              <div class="b-v-centered">
                <div class="inner" />
              </div>
            </div>

            <div style="margin-bottom: 1em;" class="columns">
              <div class="field has-addons column">
                <div class="control">
                  <a href="" class="button" style="background: #1b70cf; color: #fff;">
                    BTC
                  </a>
                </div>
                <div class="control is-expanded">
                  <input type="number" class="input blue-border" placeholder="Amount" style="direction: RTL;">
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column is-2 has-text-centered">
                <span class="icon">
                  <i class="fas fa-exchange" />
                </span>
              </div>
              <div class="column is-5">
                <div class="select">
                  <select id="" name="currency" class="currency-select">
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
                <input
                  type="text"
                  class="input"
                  value="12,000.00"
                  style="background: #f4f4f4; color: #707070; border: none;"
                >
              </div>
            </div>
          </div>
          <div class="button-container">
            <button class="button is-fullwidth trade-button has-text-weight-semibold">
              Trade
            </button>
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
import FluidSwitch from './fluid-switch'

export default {
  components: {
    FluidSwitch
  },

  data() {
    return {
      tradeType: 'buy'
    }
  },

  methods: {
    toggleTradeType() {
      this.tradeType = this.tradeType === 'buy' ? 'sell' : 'buy'
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
  padding-bottom: 2em;
  padding-top: 2em;
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
  margin-bottom: 2rem;
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

div.empty-grid-bg {
  margin-top: 3em;
  background-image: url('~assets/grid-bg.png');
  min-height: 100px;
}
</style>
