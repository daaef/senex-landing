import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1c37cf72 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a3464c8a = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _cab29e9a = () => interopDefault(import('../pages/track/index.vue' /* webpackChunkName: "pages/track/index" */))
const _52b49168 = () => interopDefault(import('../pages/track/verify.vue' /* webpackChunkName: "pages/track/verify" */))
const _2d8f1843 = () => interopDefault(import('../pages/trade/buy/index.vue' /* webpackChunkName: "pages/trade/buy/index" */))
const _31c8da0b = () => interopDefault(import('../pages/trade/sell/index.vue' /* webpackChunkName: "pages/trade/sell/index" */))
const _62476759 = () => interopDefault(import('../pages/trade/buy/pay.vue' /* webpackChunkName: "pages/trade/buy/pay" */))
const _1cd91bd8 = () => interopDefault(import('../pages/trade/buy/verify.vue' /* webpackChunkName: "pages/trade/buy/verify" */))
const _24fdb150 = () => interopDefault(import('../pages/trade/buy/wallet.vue' /* webpackChunkName: "pages/trade/buy/wallet" */))
const _0f57cd25 = () => interopDefault(import('../pages/trade/sell/account-info.vue' /* webpackChunkName: "pages/trade/sell/account-info" */))
const _707f9e90 = () => interopDefault(import('../pages/trade/sell/wallet.vue' /* webpackChunkName: "pages/trade/sell/wallet" */))
const _3befaa37 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _1c37cf72,
      name: "about"
    }, {
      path: "/faq",
      component: _a3464c8a,
      name: "faq"
    }, {
      path: "/track",
      component: _cab29e9a,
      name: "track"
    }, {
      path: "/track/verify",
      component: _52b49168,
      name: "track-verify"
    }, {
      path: "/trade/buy",
      component: _2d8f1843,
      name: "trade-buy"
    }, {
      path: "/trade/sell",
      component: _31c8da0b,
      name: "trade-sell"
    }, {
      path: "/trade/buy/pay",
      component: _62476759,
      name: "trade-buy-pay"
    }, {
      path: "/trade/buy/verify",
      component: _1cd91bd8,
      name: "trade-buy-verify"
    }, {
      path: "/trade/buy/wallet",
      component: _24fdb150,
      name: "trade-buy-wallet"
    }, {
      path: "/trade/sell/account-info",
      component: _0f57cd25,
      name: "trade-sell-account-info"
    }, {
      path: "/trade/sell/wallet",
      component: _707f9e90,
      name: "trade-sell-wallet"
    }, {
      path: "/",
      component: _3befaa37,
      name: "index"
    }],

    fallback: false
  })
}
