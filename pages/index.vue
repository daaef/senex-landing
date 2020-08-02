<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-three-fifths sect1" style="margin-bottom: 2.5rem;">
          <!-- is-vcentered -->
          <!-- <img src="~assets/senex-ani.png"> -->
          <div class="info">
            <p class="text-exchanging is-marginless	is-size-1-tablet is-size-3-touch">
              <!-- Easiest and Fastest  -->
              <no-ssr>
                <vue-typer name="riko" :text="['Easiest', 'Fastest', 'Secure']" /> way to
              </no-ssr>
            </p>
            <span class="text-crypto is-size-1-tablet is-size-3-touch">
              Buy &amp; Sell Bitcoins
            </span>
            <br><br>
            <div class="get-started">
              <p style="margin: 1.5rem 0 0.2rem; vertical-align: bottom;">
                <svg
                  width="30"
                  height="2"
                  style="vertical-align: middle"
                  viewBox="0 0 69 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.05176e-05 1H69" stroke="#ffffff" />
                </svg>
                <span class="pointers">Instant payouts</span><br>
              </p>
              <p style="margin: 0.2rem 0; vertical-align: middle;">
                <svg
                  width="30"
                  height="2"
                  style="vertical-align: middle"
                  viewBox="0 0 69 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.05176e-05 1H69" stroke="#ffffff" />
                </svg>
                <span class="pointers">No signups required</span><br>
              </p>
              <p style="margin: 0.2rem 0; vertical-align: bottom;">
                <svg
                  width="30"
                  height="2"
                  style="vertical-align: middle"
                  viewBox="0 0 69 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.05176e-05 1H69" stroke="#ffffff" />
                </svg>
                <span class="pointers">No debit card charges</span><br>
              </p>
              <p style="margin: 0.2rem 0 1rem; vertical-align: bottom;">
                <svg
                  width="30"
                  height="2"
                  style="vertical-align: middle"
                  viewBox="0 0 69 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.05176e-05 1H69" stroke="#ffffff" />
                </svg>
                <span class="pointers">Best exchange rates</span><br>
              </p>
              <p class="g-text" @click="getStarted">
                Get started now <i class="fas fa-chevron-circle-right" style="vertical-align: middle;" />
              </p>
            </div>
            <!--googleoff: all-->
            <!-- <span>_____ Pay using _____</span> -->
          </div>
          <!-- <video
            id="bgvid"
            width="380"
            class="vid"
            playsinline
            autoplay
            muted
            loop
            poster="/vid-poster.png"
          >
            <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">
            <source src="~assets/final2.mp4" type="video/mp4">
          </video> -->
          <div class="subinfo">
            <p class="accepted-cards">
              <span><img src="~assets/verve-card.png" alt="Senex payments."></span>
              <span><img src="~assets/master-card.png" alt=""></span>
              <span><img src="~assets/visa-card.png" alt=""></span>
              <span class="extra"><img src="~assets/bank-transfers.png" alt=""></span>
              <span class="last"><img src="~assets/ussd-code.png" alt=""></span>
            </p>
            <!--googleon: all-->
            <p class="accepted-text">
              We accept <b>Debit/Credit cards</b>, <b>Direct Bank Transfers</b> and even <b>USSD payments</b> from customers in 140+ countries. 
              <!-- SenexPAY offers <b>instant payouts</b> with <b>no signup</b> required. -->
            </p>
          </div>
        </div>
        <div class="column is-fullheight">
          <trade-widget ref="tradeWidget" />
        </div>
      </div>
    </div>
    <!-- <div class="is-hidden-touch mockup">
      <img src="~assets/senex-mockup.png" height="210px" alt="" >
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
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com' }]
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
.vid {
  /* box-shadow: 0px 0px 80px 30px #183158; */
  box-shadow: 35px 35px 50px 0 #172f56, -35px -35px 50px 0 #172f56;
  margin-top: -25px;
  margin-bottom: -15px;
}
.get-started {
  margin: 10px 0px 40px 0px;
  line-height: 1.5;
  font-size: 1.1rem;
}
/*
.pointers:before {
  content: url('~assets/check.png');
  vertical-align: middle;
  margin-right: 10px;
}
*/
.g-text {
  font-weight: bold;
  font-size: 1.3rem;
  padding: 5px 0px;
  color: #a2bedd;
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

.vue-typer .custom.char {
  color: #ffffff;
}

.vue-typer .custom.char.typed {
  color: #ffffff;
}

.vue-typer .custom.char.selected {
  color: #254882;
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';

div.wrapper {
  margin-top: 1.5em;
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
  font-family: $font-inter;
  line-height: 1.1;
  color: #ffffff;
  position: relative;
  z-index: 1;

  p.text-exchanging {
    font-family: $font-inter;
    font-size: 2.8rem;
    font-weight: 700;
  }

  span.text-crypto {
    font-family: $font-inter;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    // color: #0c5db2;
  }

  span.text-made-easy {
    margin-left: 0.6rem;
  }
}

div.subinfo {
  font-family: $font-inter;
  line-height: 1.1;
  color: #ffffff;
  position: relative;
  z-index: 1;

  .accepted-cards {
    margin-top: 15px;
    margin-bottom: 30px;
  }

  .accepted-cards span {
    padding-right: 4px;
    height: 25px;

    img {
      height: 28px;
    }
  }
  .accepted-cards .extra {
    padding-right: 10px;
    height: 30px;
  }
  .accepted-cards .last {
    height: 30px;
  }
  .accepted-text {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 480px;
  }
}

@media screen and (max-width: 768px) {
  // .sect1 {
  //   text-align: center;
  // }
  // .accepted-text {
  //   margin: 0 auto;
  // }
}

@media screen and (min-width: 992px) {
  // div.wrapper {
  //   margin-top: 0;
  // }
}
</style>
