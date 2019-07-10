const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'SenexPay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        crossorigin: 'anonymous',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
      }
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
  plugins: ['~/plugins/v-clipboard', '~plugins/vue-js-modal'],

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
      '@nuxtjs/dotenv',
      {
        systemvars: true,
        only: []
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.AXIOS_BASE_URL,
    proxyHeaders: false,
    credentials: false
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
