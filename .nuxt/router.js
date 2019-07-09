import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _6b8212c0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _68bff469 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _0859853e = () => interopDefault(import('../pages/track/index.vue' /* webpackChunkName: "pages/track/index" */))
const _17199a7a = () => interopDefault(import('../pages/track/verify.vue' /* webpackChunkName: "pages/track/verify" */))
const _51acc41e = () => interopDefault(import('../pages/trade/buy/index.vue' /* webpackChunkName: "pages/trade/buy/index" */))
const _8901ebc6 = () => interopDefault(import('../pages/trade/sell/index.vue' /* webpackChunkName: "pages/trade/sell/index" */))
const _2a838087 = () => interopDefault(import('../pages/trade/buy/pay.vue' /* webpackChunkName: "pages/trade/buy/pay" */))
const _b2e1682c = () => interopDefault(import('../pages/trade/buy/verify.vue' /* webpackChunkName: "pages/trade/buy/verify" */))
const _7737576a = () => interopDefault(import('../pages/trade/buy/wallet.vue' /* webpackChunkName: "pages/trade/buy/wallet" */))
const _59be765a = () => interopDefault(import('../pages/trade/sell/account-info.vue' /* webpackChunkName: "pages/trade/sell/account-info" */))
const _1d8f70be = () => interopDefault(import('../pages/trade/sell/wallet.vue' /* webpackChunkName: "pages/trade/sell/wallet" */))
const _2c125d36 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _6b8212c0,
      name: "about"
    }, {
      path: "/faq",
      component: _68bff469,
      name: "faq"
    }, {
      path: "/track",
      component: _0859853e,
      name: "track"
    }, {
      path: "/track/verify",
      component: _17199a7a,
      name: "track-verify"
    }, {
      path: "/trade/buy",
      component: _51acc41e,
      name: "trade-buy"
    }, {
      path: "/trade/sell",
      component: _8901ebc6,
      name: "trade-sell"
    }, {
      path: "/trade/buy/pay",
      component: _2a838087,
      name: "trade-buy-pay"
    }, {
      path: "/trade/buy/verify",
      component: _b2e1682c,
      name: "trade-buy-verify"
    }, {
      path: "/trade/buy/wallet",
      component: _7737576a,
      name: "trade-buy-wallet"
    }, {
      path: "/trade/sell/account-info",
      component: _59be765a,
      name: "trade-sell-account-info"
    }, {
      path: "/trade/sell/wallet",
      component: _1d8f70be,
      name: "trade-sell-wallet"
    }, {
      path: "/",
      component: _2c125d36,
      name: "index"
    }],

    fallback: false
  })
}
