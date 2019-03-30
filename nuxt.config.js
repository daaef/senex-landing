const pkg = require('./package')

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

  env: {
    FLW_PUB_KEY: 'FLWPUBK-17b62ccd816c6b2fdd007d4f81eb4973-X',
    FLW_BASE_URL: 'https://api.ravepay.co'
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
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
        siteKey: '6Lf9qZYUAAAAAKTXp_ftiF_8kMLksFjFLn3XGfPY',

        version: 3
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://138.68.175.88:8000',
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
