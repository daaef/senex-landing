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
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://senexpay.com/#organization',
              name: 'SenexPay',
              url: 'https://senexpay.com/',
              sameAs: [
                'https://web.facebook.com/senexpay/',
                'https://twitter.com/senexpay/',
                'https://www.instagram.com/senexpay/',
                'https://linkedin.com/company/senexpay/',
                'https://www.youtube.com/channel/UCf-zuXt2vynE1TFeiY1sw1Q'
              ],
              logo: {
                '@type': 'ImageObject',
                '@id': 'https://senexpay.com/#logo',
                inLanguage: 'en-US',
                url: 'https://www.senexpay.com/senexpay-logo.jpeg',
                contentURL: 'https://www.senexpay.com/senexpay-logo.jpeg',
                width: 200,
                height: 200,
                caption: 'Reimagining crypto for all',
                alternateName: 'Senex Payment Services',
                legalName: 'Senex Payment Services'
              },
              foundingDate: '2016-01-01',
              slogan: 'Reimagining crypto for all',
              image: { '@id': 'https://senexpay.com/#logo' }
            },
            {
              '@type': 'WebSite',
              '@id': 'https://senexpay.com/#website',
              url: 'https://senexpay.com/',
              name: 'SenexPay',
              description:
                'Our easy and secure platform got everyone falling in love with Crypto. Our vision is to make financial services accessible to every person on the African continent.',
              publisher: { '@id': 'https://senexpay.com/#organization' }
            },
            {
              '@type': 'WebPage',
              '@id': 'https://senexpay.com/about/#webpage',
              url: 'https://senexpay.com/about/',
              inLanguage: 'en-US',
              name: 'Our mission, vision and core values | SenexPay',
              isPartOf: { '@id': 'https://senexpay.com/#website' },
              about: {
                '@id': 'https://senexpay.com/#organization'
              },
              datePublished: '2016-09-14T08:13:22+00:00',
              dateModified: '2022-08-31T12:27:02+00:00',
              description:
                'Our easy and secure platform got everyone falling in love with Crypto. Our vision is to make financial services accessible to every person on the African continent.',
              potentialAction: [
                {
                  '@type': 'ReadAction',
                  target: ['https://senexpay.com/about/']
                }
              ]
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://senexpay.com/faq/#faq',
              url: 'https://senexpay.com/faqs/',
              isPartOf: {
                '@id': 'https://senexpay.com/#website'
              },
              about: {
                '@id': 'https://senexpay.com/#organization'
              },
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is SenexPay?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '<p>SenexPay is a Pan-African blockchain startup reimagining crypto for all currently offering fast and easy crypto exchange and wallet services.</p>'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What Cryptocurrencies can I exchange on SenexPay?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '<p>You can buy/sell Bitcoin(BTC) and Tether(USDT) on SenexPay.</p>'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'In what countries does SenexPay operate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SenexPay currently operates majorly in 5 countries: Nigeria, South Africa, Ghana, Dubai and the United Kingdom.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Is there a limit to the amount of cryptocurrency I can buy or sell on SenexPay?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'There is no upper limit to the amount of cryptocurrency you can buy or sell or SenexPay. However, you cannot buy or sell cryptocurrency that is worth below the value of $40.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How secure is SenexPay?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SenexPay is very secure. We put security at the forefront of our operations and we place a high-degree of importance on customer-protection. Our platform is protected with bank-level security using DDOS, CSRF, Secure Socket Layer, etc, to protect all transactions and customer data.'
                  }
                }
              ]
            },
            {
              '@type': 'SoftwareApplication',
              applicationCategory:
                'https://en.wikipedia.org/wiki/Android_(operating_system)',
              installUrl:
                'https://play.google.com/store/apps/details?id=com.senexpay.mobile&hl=en&gl=NG',
              operatingSystem: 'ANDROID',
              name: 'SenexPay: Trade Bitcoin & USDT'
            },
            {
              '@type': 'SoftwareApplication',
              applicationCategory: 'https://en.wikipedia.org/wiki/IOS',
              installUrl:
                'https://apps.apple.com/us/app/senexpay-trade-bitcoin-usdt/id162786414',
              name: 'SenexPay: Trade Bitcoin & USDT',
              operatingSystem: 'IOS'
            }
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
