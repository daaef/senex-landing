export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SenexPay - Buy and sell crypto in minutes.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'SenexPay Dashboard',
        name: 'SenexPay',
        content: 'SenexPay Dashboard'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'SenexPay Dashboard'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/senepay-og.png'
      },
      {
        property: 'og:image:width',
        content: '740'
      },
      {
        property: 'og:image:height',
        content: '300'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Buy and sell Cryptocurrency the easy way'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Senexpay Dashboard'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Buy and sell Cryptocurrency the easy way'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/img/senepay-og.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/axios', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module'
  ],

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? process.env.API_URL_DEV
        : process.env.API_URL_PROD
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'SenexPAY',
      author: 'Rikozone Technology',
      categories: ['finance', 'money', 'exchange']
    }
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || '',
    disabled: process.env.NODE_ENV === 'development',
    config: {}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
