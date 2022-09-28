export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
      'data-n-head': 'lang'
    },
    title: 'SenexPay - Buy and sell crypto in minutes.',
    script: [
      {
        src: '/js/uikit.min.js',
        defer: true
      },
      {
        src: '/js/uikit-icons.min.js',
        defer: true
      },
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SenexPay',
          alternateName: 'Senex Payment Services',
          url: 'https://www.senexpay.com',
          logo: 'https://www.senexpay.com/senexpay-logo.jpeg',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lagos, Nigeria',
            streetAddress:
              'Number One Lagos, 1, Akin Adesola Street, Victoria Island.'
          },
          email: 'hello@senexpay.com',
          telephone: '+234-916-259-8206',
          description:
            "SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!",
          sameAs: [
            'https://web.facebook.com/senexpay/',
            'https://twitter.com/senexpay/',
            'https://www.youtube.com/channel/UCf-zuXt2vynE1TFeiY1sw1Q',
            'https://www.instagram.com/senexpay/',
            'https://linkedin.com/company/senexpay/'
          ]
        },
        type: 'application/ld+json'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!`
      },
      {
        name: 'keywords',
        content:
          'bitcoin, exchange, trade, btc, sell, buy, nigeria, sell bitcoin, buy bitcoin, otc, buy bitcoins in nigeria, sell bitcoins in nigeria, fast, secure, reliable, senex, senexpay, senex payment services, money, credit card, debit card, payment, buy bitcoin with card, blockchain, network, block, hash, confirmations, KYC, 24/7 exchange, currency exchange, crypto exchange, senex services payment'
      },
      { name: 'theme-color', content: '041d45' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'SenexPay | Buy & Sell Bitcoin and USDT securely.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/senexpay-og-image.png'
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
        content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure. Pay seamlessly with Senex today!`
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'SenexPay | Buy & Sell Bitcoin and USDT securely.'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure.`
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: `SenexPay is the easiest and most reliable platform to exchange cryptocurrency. We are building Africa's biggest cross-border payments infrastructure.`
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/img/senexpay-og-image-sq.png'
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src',
        content: '/img/senexpay-og-image-sq.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/css/uikit.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'http://fonts.cdnfonts.com/css/sf-pro-display'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/axios', ssr: true },
    { src: '~plugins/vue-typer', mode: 'client' },
    { src: '~/plugins/vue-carousel', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-analytics'
  ],

  generate: {
    // choose to suit your project
    interval: 2000
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'nuxt-i18n',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/onesignal',
    'nuxt-facebook-pixel-module'
  ],

  i18n: {
    locales: ['en', 'za'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
    // process.env.NODE_ENV === 'development'
    //   ? process.env.API_URL_DEV
    //   : process.env.API_URL_PROD
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: process.env.FACEBOOK_PIXEL_ID,
    autoPageView: true,
    disabled: false
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

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'SenexPay',
      lang: 'en',
      author: 'Rikozone Technology',
      theme_color: '#058856',
      categories: ['finance', 'money', 'exchange']
    },
    workbox: {
      // options
      // dev: true,
      offlineAnalytics: true,
      config: {
        // debug: true
      }
    }
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || '',
    disabled: process.env.NODE_ENV === 'development',
    config: {}
  },

  sitemap: {
    hostname: 'https://www.senexpay.com',
    defaults: {
      priority: 1,
      lastmod: new Date()
    },
    // routes: [],
    // nuxt-i18n notation (advanced)
    // i18n: {
    //   locales: ['en', 'za'],
    //   routesNameSeparator: '___'
    // },
    exclude: ['/blog', '/za', '/za/*']
  },
  // serverMiddleware: ['~/middleware/redirect.js'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
