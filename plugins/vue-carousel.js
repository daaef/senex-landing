import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueQRCodeComponent from 'vue-qrcode-component'

// Register the Vue component
Vue.component('qr-code', VueQRCodeComponent)
Vue.use(VueCarousel)
// export default () => {
//   Vue.use(VueCarousel)
// }
