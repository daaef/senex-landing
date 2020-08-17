<template>
  <section class="wallets">
    <div class="has-text-centered section-one">
      <h1 class="title">
        Wallets
      </h1>
      <p class="bod">
        <!-- Bitcoin - Naira instant exchange -->
        Ready to get you started quickly
      </p>
      <p class="bodi">
        We have put together some recommended wallets based on personal choices.
      </p>
    </div>
    <div class="section-two wrapper">
      <div class="container text-center">
        <div class="title">
          <img src="~assets/exodus.svg" alt="Exodus logo" width="80">
          <h6>
            Exodus
          </h6>
          <p class="is-size-6">
            Manage &amp; exchange cryptocurrencies like Bitcoin, Ethereum, Monero, and more. Secure &amp; 
            easy to use crypto wallet with 100+ assets and counting.
          </p>
        </div>
        <div class="learn has-text-centered">
          <a href="https://www.exodus.io/" target="_blank" rel="oreferrer noopener" class="button is-rounded">
            Learn more &nbsp; <i aria-hidden="true" class="fas fa-caret-right" />
          </a>
        </div>
        <div class="detailz">
          <img src="~assets/exodus_wallet.png" alt="Exodus wallet">
        </div>
      </div>
    </div>
    <div class="section-three wrapper">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="title">
              <img src="~assets/blockchain.png" alt="Blockchain logo" width="80">
              <h6>
                Blockchain
              </h6>
              <p class="is-size-6">
                Blockchain.com is the most popular place to securely buy, store, and trade Bitcoin, Ethereum, and other top cryptocurrencies.
              </p>
            </div>
            <div class="learn has-text-centered">
              <a href="https://www.blockchain.com/" target="_blank" rel="oreferrer noopener" class="button is-rounded">
                Learn more &nbsp; <i aria-hidden="true" class="fas fa-caret-right" />
              </a>
            </div>
          </div>
          <div class="column">
            <div class="blockchain">
              <img src="~assets/blockchain_wallet.png" alt="Blockchain wallet" with="50">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-four wrapper">
      <div class="container">
        <div class="columns is-vcentered reverse-columns">
          <div class="column">
            <div class="coinomi">
              <img src="~assets/coinomi_wallet.png" alt="Blockchain wallet" with="50">
            </div>
          </div>
          <div class="column">
            <div class="title">
              <img src="~assets/coinomi.png" alt="Blockchain logo" width="80">
              <h6>
                Coinomi
              </h6>
              <p class="is-size-6">
                Coinomi is a security-first, multi-chain wallet for both mobile &amp; desktop that provides native 
                support and true ownership for more than 125 blockchains (the biggest number in the industry for 
                non-custodial wallets) and thousands of tokens
              </p>
            </div>
            <div class="learn has-text-centered">
              <a href="https://www.coinomi.com/en/" target="_blank" rel="oreferrer noopener" class="button is-rounded">
                Learn more &nbsp; <i aria-hidden="true" class="fas fa-caret-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'fullblue',
  head() {
    return {
      title: 'About Us - SenexPAY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'SenexPAY is a multi-fiat to bitcoin exchange platform which is owned and managed by Senex Payment Services Limited in Lekki, Nigeria.'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://www.senexpay.com/wallets' }]
    }
  },
  data() {
    return {
      socialLinks: {
        facebookUrl: process.env.FACEBOOK_URL,
        instagramUrl: process.env.INSTAGRAM_URL,
        twitterUrl: process.env.TWITTER_URL,
        whatsappUrl: `https://api.whatsapp.com/send?phone=+${
          process.env.WHATSAPP_ID
        }&text=Hello%21%20I%20want%20to%20buy/sell%20Bitcoin`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fonts.scss';
.wallets {
  font-family: $font-inter;
  font-size: 18px;
  color: #000000;

  .wrapper {
    padding: 40px 10px 0px;
  }

  .title {
    color: #162e55;
    text-align: center;
    margin-bottom: 1.2rem;

    img {
      margin-bottom: 1.2rem;
    }

    h6 {
      margin-bottom: 0.5rem;
    }

    p {
      color: #000000;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 300;
      line-height: 1.4;
      letter-spacing: 0.1px;
    }
  }

  .section-one {
    padding: 50px 10px 40px;
    color: #ffffff;
    background: #162e55;
    .title {
      margin-bottom: 1rem;
      color: #ffffff;
    }

    .bod {
      max-width: 800px;
      margin: 0 auto;
    }

    .bodi {
      margin: 3px auto;
      font-size: 0.87rem;
      max-width: 550px;
    }
  }

  .section-two {
    .learn {
      margin: 1rem 0 2.5rem;

      a {
        background: #162e55;
        color: #ffffff;
      }
    }

    .detailz {
      // padding: 15px;
      max-width: 550px;
      text-align: center;
      margin: 0 auto;

      img {
        margin-bottom: -8px;
      }
    }
  }

  .section-three {
    background: #4e4e4e;
    color: #ffffff;
    text-align: center;

    .title {
      min-width: 300px;
      h6,
      p {
        color: #ffffff;
      }
    }

    .blockchain {
      padding-top: 30px;
      min-width: 280px;
      img {
        min-height: 400px;
        max-height: 550px;
        margin-bottom: -35px;
      }
    }
  }

  .section-four {
    .learn {
      margin: 1rem 0;

      a {
        background: #162e55;
        color: #ffffff;
      }
    }

    .coinomi {
      padding-top: 30px;
      max-width: 550px;

      img {
        margin-bottom: -35px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .reverse-columns {
      flex-direction: column-reverse;
      display: flex;
    }

    .section-four {
      .title {
        padding-top: 30px;
      }

      .coinomi {
        padding-top: 0px;
      }
    }
  }
}
</style>
