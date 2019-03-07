<template>
  <div class="container wrapper">
    <p class="__title has-text-centered">
      Buying <span class="amount__btc">{{ amountBtc }} BTC</span> at <span class="amount__currency">{{ amountCurrency }} NGN</span>
    </p>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="columns is-mobile trader">
          <div class="column is-3 icons-wrapper">
            <trade-icon
              v-for="(icon, i) in iconList"
              :key="i"
              :name="icon"
              class="icon-container"
            />
          </div>
          <div class="column is-9 content-wrapper">
            <div class="columns is-mobile">
              <div class="column is-8">
                <div class="content-area">
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
                    button
                  </div>
                </div>

                <div class="content-area">
                  <p class="__title">
                    Wallet Details
                  </p>
                  <div class="content">
                    <div class="field">
                      <label for="" class="label">Your bitcoin wallet address</label>
                      <textarea id="" name="" cols="30" class="textarea" />
                    </div>
                  </div>
                  <div class="button-wrapper">
                    button
                  </div>
                </div>

                <div class="content-area">
                  <p class="__title">
                    Payment
                  </p>
                  <div class="button-wrapper">
                    button
                  </div>
                </div>

                <div class="content-area">
                  <p class="__title">
                    Verification
                  </p>
                  <div class="content" />
                  <div class="button-wrapper">
                    Complete trade
                  </div>
                </div>

                <div class="content-area">
                  <p class="__title">
                    Payment
                  </p>
                  div.c
                </div>
              </div>
              <div class="column is-4 help">
                Help content.
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
      iconList: ['user_info', 'wallet', 'credit_card', 'user_verify'],
      amountBtc: 0.00012345,
      amountCurrency: 1250,
      currency: 'NGN'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/fonts.scss';
$trader-height: 400px;

.wrapper {
  font-family: $font-avenir;
  min-height: 480px;
  margin-bottom: 3em;
}

.__title {
  margin-bottom: 2em;
  font-size: 1.7em;
  font-family: $font-open-sans;
  color: #1b70cf;
  line-height: normal;
  .amount__btc {
    font-weight: bold;
    font-family: $font-avenir;
    font-size: 1.2em;
  }
  .amount__currency {
    font-weight: 500;
    font-size: 1.2em;
  }
}

.trader {
  margin-bottom: 3em;
  .icons-wrapper {
    height: $trader-height;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.161);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    margin-right: 10px;
    background-color: #ffffff;
    padding: 1.2em 2em;
    display: flex;
    flex-direction: column;
    .icon-container {
      flex: 1 100%;
    }
  }
  .content-wrapper {
    background-color: #fbfbfb;
    width: 100%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    height: $trader-height;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.161);
  }
}

.content-area {
  display: none;
}
</style>
