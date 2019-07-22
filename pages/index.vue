<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="info">
            <p class="text-exchanging is-uppercase is-marginless	">
              Exchanging
            </p>
            <p>
              <span class="text-crypto">Cryptocurrencies</span>
              <span class="text-made-easy">made easy!</span>
            </p>
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
              <span>Buy and Sell securely  with SenexPAY</span>
            </p>
            <br>
            <p class="get-started" @click="getStarted">
              Get started now &nbsp; <i class="fas fa-arrow-right" />
            </p>
            <span>_____</span>
            <p class="social-handle">
              <span><a :href="facebookUrl" aria-label="Facebook" target="_blank" rel="noopener"><i class="fab fa-facebook-f fa-2x fb" /></a></span>
              <span><a :href="instagramUrl" aria-label="Instagram" target="_blank" rel="noopener"><i class="fab fa-instagram fa-2x in" /></a></span>
              <span><a :href="twitterUrl" aria-label="Twitter" target="_blank" rel="noopener"><i class="fab fa-twitter fa-2x tw" /></a></span>
            </p>
          </div>
          <div class="image-illustration-container">
            <img src="~assets/creatives-11.png" alt="senexpay">
          </div>
        </div>
        <div class="column is-fullheight">
          <trade-widget ref="tradeWidget" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TradeWidget from '@/components/trade-widget.vue'

export default {
  layout: 'simple',
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
      facebookUrl: process.env.FACEBOOK_URL,
      instagramUrl: process.env.INSTAGRAM_URL,
      twitterUrl: process.env.TWITTER_URL
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
}
.is-vcentered {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.get-started {
  font-weight: bold;
  color: #0c5db2;
  cursor: pointer;
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  margin-top: 2em;
}

div.image-illustration-container {
  max-width: 350px;

  img.image {
    max-width: 100%;
    height: auto;
  }
}

div.info {
  font-family: $font-nunito;
  line-height: normal;
  color: #707070;
  padding-top: 50px;
  p.text-exchanging {
    font-size: 2rem;
    // font-family: $font-open-sans;
    font-weight: 300;
  }

  span.text-crypto {
    font-size: 2.7rem;
    font-weight: 700;
    color: #0c5db2;
  }

  span.text-made-easy {
    font-size: 2rem;
    margin-left: 0.6rem;
  }

  .social-handle {
    margin-top: 15px;
  }

  .social-handle span {
    padding-right: 10px;

    .fb {
      color: #3b5998;
    }

    .in {
      color: #fd5949;
    }

    .tw {
      color: #00acee;
    }
  }
}
</style>
