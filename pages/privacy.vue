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
      title: 'Privacy Policy | SenexPay',
      meta: [
        {
          hid: 'Privacy - SenexPay',
          name: 'Privacy - SenexPay',
          content:
            'We value data-privacy and ensure that our customers enjoy full privacy of their data.'
        }
      ]
    }
  }
}
</script>

<style></style>
