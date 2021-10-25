<template>
  <div>
    <terms-of-use></terms-of-use>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingFooter from '~/components/LandingFooter.vue'
import TermsOfUse from '~/components/terms/TermsOfUse.vue'
export default {
  components: { TermsOfUse, LandingFooter },
  layout: 'about',
  head() {
    return {
      title: 'Terms of Service',
      meta: [
        {
          hid: 'SenexPay Terms',
          name: 'Terms - SenexPay',
          content: 'SenexPay'
        }
      ]
    }
  }
}
</script>

<style></style>
