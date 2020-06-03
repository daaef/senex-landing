import Vue from 'vue'
import Tawk from 'vue-tawk'

Vue.use(Tawk, {
  tawkSrc: `https://embed.tawk.to/${process.env.TAWK_TO_ID}/default`
})
