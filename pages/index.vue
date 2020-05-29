<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-three-fifths" style="margin-top: 1.6rem;">
          <!-- is-vcentered -->
          <div class="info">
            <p class="text-exchanging is-marginless	is-size-2-tablet is-size-3-touch">
              <!-- Easiest and Fastest  -->
              <no-ssr>
                <vue-typer name="riko" :text="['Easiest', 'Fastest', 'Secure']" /> way to
              </no-ssr>
            </p>
            <span class="text-crypto is-size-1-tablet is-size-2-touch">
              Buy &amp; Sell Bitcoins
            </span>
            <p style="margin: 0.5rem 0; vertical-align: bottom;">
              <svg
                width="40"
                height="2"
                style="vertical-align: middle"
                viewBox="0 0 69 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.05176e-05 1H69" stroke="#707070" />
              </svg>
              <span>Instant payout with SenexPAY</span><br>
            </p>
            <br>
            <div class="get-started">
              <span class="" style="vertical-align: middle;">(No signup required)</span>
              <p class="g-text" @click="getStarted">
                Get started now <i class="fas fa-chevron-circle-right" style="vertical-align: middle;" />
              </p>
            </div>
            <span>_____ We accept _____</span>
            <p class="accepted-cards">
              <span><img src="~assets/verve-card.png" alt="verve"></span>
              <span><img src="~assets/master-card.png" alt="master"></span>
              <span><img src="~assets/visa-card.png" alt="visa"></span>
            </p>
          </div>
        </div>
        <div class="column is-fullheight">
          <trade-widget ref="tradeWidget" />
        </div>
      </div>
    </div>
    <!-- <div class="is-hidden-touch mockup">
      <img src="~assets/senex-mockup.png" height="200px" alt="" >
    </div> -->
  </section>
</template>

<script>
// import { VueTyper } from 'vue-typer'
import TradeWidget from '@/components/trade-widget.vue'

export default {
  layout: 'homepage',
  components: {
    TradeWidget
  },

  head() {
    return {
      title: 'SenexPAY - Buy and Sell Bitcoins in Minutes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Buy and sell Bitcoin securely with SenexPAY, a Nigeria based crypto exchange platform that is much faster, cheaper and stress-free.'
        }
      ]
    }
  },

  data() {
    return {
      // something
    }
  },

  methods: {
    getStarted() {
      if (process.client) {
        this.$refs.tradeWidget.$refs.btcInput.focus()
      }
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.section {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
}
.is-vcentered {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.get-started {
  margin: 10px 0px 40px 0px;
  line-height: 1.5;
}
.g-text {
  font-weight: bold;
  font-size: 1.3rem;
  padding: 5px 0px;
  color: #0c5db2;
  cursor: pointer;
  width: auto;
}
.mockup {
  position: absolute;
  bottom: 0;
  left: 25%;
}
.mockup img {
  max-height: 500px;
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  margin-top: 2em;
  text-decoration: inherit;
}

div.image-illustration-container {
  max-width: 380px;
  margin: 0px auto;

  img.image {
    max-width: 100%;
    height: auto;
  }
}

div.info {
  font-family: $font-nunito;
  line-height: 1.1;
  color: #000000;
  // color: #707070;
  // padding-top: 50px;
  p.text-exchanging {
    font-family: $font-poppins;
    font-size: 2.8rem;
    font-weight: 300;
  }

  span.text-crypto {
    font-family: $font-poppins;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    // color: #0c5db2;
  }

  span.text-made-easy {
    margin-left: 0.6rem;
  }

  .accepted-cards {
    margin-top: 15px;
  }

  .accepted-cards span {
    padding-right: 10px;
    height: 20px;

    img {
      height: 25px;
    }
  }
}
</style>
