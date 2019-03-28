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
    FLW_PUB_KEY: 'FLWPUBK-c1833222ad17ef7402e3b62c202927fa-X',
    FLW_BASE_URL: 'https://ravesandboxapi.flutterwave.com'
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
  plugins: ['~/plugins/v-clipboard'],

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
    ]
    /* [
      '@nuxtjs/recaptcha',
      {
        hideBadge: true,
        siteKey: '',

        version: 3
      }
    ] */
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://senexpay.herokuapp.com',
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
