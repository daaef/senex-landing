<template>
  <section>
    <div class="">
      <div class="columns">
        <div class="column is-9">
          <div class="box trade-box">
            <div class="has-text-centered trade-selector-container">
              <button
                class="button buy-btn is-smll is-rounded"
                :class="{'active-trade': tradeType === 'buy'}"
                @click="toggleTradeType"
              >
                Buy
              </button>
              <button
                class="button sell-btn is-mall is-rounded"
                :class="{'active-trade': tradeType === 'sell'}"
                @click="toggleTradeType"
              >
                Sell
              </button>
            </div>

            <div class="columns is-mobile is-gapless" :style="{marginTop: '0.9em'}">
              <div class="column is-4">
                <div class="select is-ronded is-sall">
                  <select id="" name="crypto" class="crypto">
                    <option value="btc">
                      BTC
                    </option>
                  </select>
                </div>
              </div>
              <div class="column is-8">
                <div class="field">
                  <div class="control">
                    <input type="number" class="input is-mall is-ronded blue-border" placeholder="Amount">
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-2 has-text-centered">
                at
              </div>
              <div class="column is-5">
                <div class="select is-runded is-mall is-4">
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
                <div class="field">
                  <div class="control">
                    <input type="text" class="input is-mall is-runded" value="12,000.00" disabled>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-container">
            <button class="button is-fullwidth trade-button">
              TRADE
            </button>
          </div>
          <div class="track-trade has-text-centered">
            <p>
              Already have a trade? <nuxt-link to="/track">
                Track
              </nuxt-link>
            </p>
            <p class="flutterwave-grp">
              <span class="text">Powered by </span>
              <span class="img"><img src="~assets/flutterwave.png" alt="Flutterwave icon" height="36" width="36"></span>
            </p>
          </div>

          <div class="empty-grid-bg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
  color: #707070;
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
  margin-bottom: 2.8em;
  button {
    color: #c4c4c4;
    font-family: $font-open-sans;
  }
  button.sell-btn.active-trade {
    margin-left: -1.3em;
    color: #fff;
    background-color: #1b70cf;
    z-index: 10;
  }
  button.buy-btn.active-trade {
    margin-right: -1.3em;
    color: #fff;
    background-color: #1b70cf;
    z-index: 10;
  }
}

div.empty-grid-bg {
  margin-top: 3em;
  background-image: url('~assets/grid-bg.png');
  min-height: 100px;
}
</style>
