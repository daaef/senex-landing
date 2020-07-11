const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
      'data-n-head': 'lang'
    },
    title: 'SenexPAY',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'keywords',
        content:
          'bitcoin, exchange, trade, btc, sell, buy, nigeria, sell bitcoin, buy bitcoin, otc, buy bitcoins in nigeria, sell bitcoins in nigeria, fast, secure, reliable, senex, senexpay, senex payment services, money, credit card, debit card, payment, buy bitcoin with card, blockchain, network, block, hash, confirmations, KYC, 24/7 exchange, currency exchange, crypto exchange, senex services payment'
      },
      { name: 'theme-color', content: '#0c5db2' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        crossorigin: 'anonymous',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.rawgit.com/octoshrimpy/bulma-o-steps/master/bulma-steps.css'
      }
    ],
    script: [
      {
        src:
          'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js',
        'data-cfasync': 'false',
        async: true
      }
      /* {
        src: 'https://cdn.widgetwhats.com/script.min.js',
        'data-id': '14644',
        async: true
      } */
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/v-clipboard',
    '~plugins/vue-js-modal',
    { src: '~plugins/vue-tawk', mode: 'client' },
    { src: '~plugins/cookie', mode: 'client' },
    { src: '~plugins/vue-typer', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    [
      'nuxt-validate',
      {
        lang: 'en'
        // regular vee-validate options
      }
    ],
    'nuxt-device-detect',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#41b882'
      }
    ],
    [
      '@nuxtjs/recaptcha',
      {
        hideBadge: true,
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 3
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.ANALYTICS_ID,
        dev: false
      }
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        pixelId: process.env.FACEBOOK_PIXEL_ID
      }
    ],
    [
      '@nuxtjs/dotenv',
      {
        systemvars: true,
        only: []
      }
    ],
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/moment'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.AXIOS_BASE_URL,
    proxyHeaders: false,
    credentials: false
  },

  oneSignal: {
    init: {
      appId: process.env.ONE_SIGNAL_APP_ID,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    },
    cdn: true,
    OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
  },

  manifest: {
    name: 'SenexPAY',
    lang: 'en',
    author: 'Rikozone Technology',
    categories: ['finance', 'money', 'exchange']
  },

  workbox: {
    // options
    // dev: true,
    offlineAnalytics: true,
    config: {
      // debug: true
    }
  },

  sitemap: {
    // routes: [],
    exclude: ['/trade/**', '/track/verify', '/legal/terms']
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
