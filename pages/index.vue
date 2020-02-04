<template>
  <section class="section">
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="info">
            <p class="text-exchanging is-marginless	is-size-2-tablet is-size-3-touch">
              ex<i class="fas fa-sync-alt is-size-4-tablet is-size-5-touch" />hanging
            </p>
            <p>
              <span class="text-crypto is-size-1-tablet is-size-2-touch">Cryptocurrencies</span>
              <span class="text-made-easy is-size-2-tablet is-size-3-touch">made easy!</span>
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
            <picture class="illustration bounce-2">
              <source srcset="~assets/creatives-12.webp" type="image/webp">
              <source srcset="~assets/creatives-12.png" type="image/png"> 
              <img src="~assets/creatives-12.png" alt="senexpay">
            </picture>
          </div>
        </div>
        <div class="column is-fullheight">
          <trade-widget ref="tradeWidget" />
        </div>
      </div>
      <!-- <no-ssr class="shape">
        <div
          v-for="n in 50"          
          :key="n"
          :class="`shape-container--${n} shape-animation`"
        >
          <div class="random-shape" />
        </div>        
      </no-ssr> -->
    </div>
  </section>
</template>

<script>
// import NoSSR from 'vue-no-ssr'
import TradeWidget from '@/components/trade-widget.vue'

export default {
  layout: 'simple',
  components: {
    TradeWidget
    // 'no-ssr': NoSSR
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
  padding-top: 50px;
  p.text-exchanging {
    font-size: 2.8rem;
    // font-family: $font-open-sans;
    font-weight: 300;
  }

  span.text-crypto {
    font-weight: 700;
    color: #0c5db2;
  }

  span.text-made-easy {
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

/* bounce animation
.stage {
  border-bottom: 3px solid #444;
  display: flex;
  height: 330px;
  width: 100%;
}
.illustration {
  align-self: flex-end;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  display: block;
}
.bounce-2 {
  animation-name: bounce-2;
  animation-timing-function: ease;
}
@keyframes bounce-2 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
*/
// shapes animation
.shape {
  position: absolute;
  // overflow: hidden;
  height: 100vh;
}
.random-shape:after {
  font-family: FontAwesome;
  content: '\f005';
}

$circle-size: 10px;
$colors: #ffd700, #fff8dc, #db7093, #c2b7fe, #95a9ff;
$shapes: '\f005', '\f0c8', '\f1db', '\f096', '\f1d8', '\f1cb';
$shape-count: 50;

@for $i from 1 through $shape-count {
  $shape-size: random(10);
  $rotation: random(360);
  $speed: 40 + random(10);
  $color-key: random(length($colors));
  $shape-color: nth($colors, $color-key);
  $shape-key: random(length($shapes));
  $shape-type: nth($shapes, $shape-key);
  $text: random(10);

  @keyframes shape-#{$i} {
    0% {
      transform: translate3d(0, 0, 0) rotate(#{$rotation + 0}deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(#{$rotation + 360}deg);
    }
  }

  .shape-container--#{$i} {
    animation: shape-#{$i} #{$speed}s linear infinite;

    .random-shape:after {
      margin: #{$shape-size}rem;
      color: $shape-color;
      font-size: #{$shape-size * 0.2}rem;
      content: $shape-type;
    }
  }
}
</style>
