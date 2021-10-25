<template>
  <div>
    <privacy-policy></privacy-policy>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingFooter from '~/components/LandingFooter.vue'
import PrivacyPolicy from '~/components/privacy/PrivacyPolicy.vue'
export default {
  components: { PrivacyPolicy, LandingFooter },
  layout: 'about',
  head() {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: 'SenexPay Privacy',
          name: 'Privacy - SenexPay',
          content: 'SenexPay'
        }
      ]
    }
  }
}
</script>

<style></style>
