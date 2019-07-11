import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

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
  head: {"title":"SenexPAY","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"SenexPAY cryptocurrency exchange platform"},{"name":"theme-color","content":"#0c5db2"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"senexpay"},{"hid":"author","name":"author","content":"cantell"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"senexpay"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"senexpay"},{"hid":"og:description","name":"og:description","property":"og:description","content":"SenexPAY cryptocurrency exchange platform"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.7.2\u002Fcss\u002Fall.css","crossorigin":"anonymous","integrity":"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"},{"rel":"stylesheet","href":"\u002F\u002Fcdn.materialdesignicons.com\u002F3.7.95\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.c9ec591a.json"}],"style":[],"script":[{"async":true,"src":"https:\u002F\u002Fcdn.onesignal.com\u002Fsdks\u002FOneSignalSDK.js","hid":"onesignal"}],"htmlAttrs":{"lang":"en"}},

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
    }, [loadingEl, h(NuxtBuildIndicator), transitionEl])
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
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

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
