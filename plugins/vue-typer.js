import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'

// window.onNuxtReady(() => {
//   Vue.use(VueTyperPlugin)
// })

if (process.browser) {
  Vue.use(VueTyperPlugin)
}
