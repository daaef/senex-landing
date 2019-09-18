import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/scss/main.scss'

import '../node_modules/bulma/css/bulma.css'

import _77180f1e from '../layouts/blank.vue'
import _2d21d150 from '../layouts/blue.vue'
import _b1eaad42 from '../layouts/fullblue.vue'
import _ee7125b0 from '../layouts/simple.vue'
import _dd401da4 from '../layouts/watermark.vue'
import _6f6c098b from './layouts/default.vue'

const layouts = { "_blank": _77180f1e,"_blue": _2d21d150,"_fullblue": _b1eaad42,"_simple": _ee7125b0,"_watermark": _dd401da4,"_default": _6f6c098b }

export default {
  head: {"htmlAttrs":{"lang":"en","data-n-head":"lang"},"title":"SenexPAY","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"SenexPAY cryptocurrency exchange platform"},{"name":"keywords","content":"bitcoin, exchange, trade, btc, sell, buy, nigeria, sell bitcoin, buy bitcoin, otc, buy bitcoins in nigeria, sell bitcoins in nigeria, fast, secure, reliable, senex, senexpay, senex payment services, money, credit card, debit card, payment, buy bitcoin with card, blockchain, network, block, hash, confirmations, KYC"},{"name":"theme-color","content":"#0c5db2"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"SenexPAY"},{"hid":"author","name":"author","content":"Rikozone Technology"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"SenexPAY"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"SenexPAY"},{"hid":"og:description","name":"og:description","property":"og:description","content":"SenexPAY cryptocurrency exchange platform"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.7.2\u002Fcss\u002Fall.css","crossorigin":"anonymous","integrity":"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.3db7174a.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.932477.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.932477.png","sizes":"512x512"}],"script":[{"async":true,"src":"https:\u002F\u002Fcdn.onesignal.com\u002Fsdks\u002FOneSignalSDK.js","hid":"onesignal"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
